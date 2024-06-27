const {test, expect} = require('@playwright/test');

test('RS Ecommerce Playwright test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const login = page.locator('#login');
    page.goto ('https://rahulshettyacademy.com/client');
    await userName.fill('shobanasathyanathan@gmail.com');
    await password.fill('Shobikr@1');
    await login.click();
    const productName = 'IPHONE 13 PRO';

    const productList = page.locator('.card-body');
    await productList.last().waitFor();
    const productCount = await productList.count();
    //console.log(productCount);

    for (let i = 0; i < productCount; ++i){
        const product = await productList.nth(i).locator('b').textContent();
        //console.log(product);
        if(product == productName){
            await productList.nth(i).locator('.fa-shopping-cart').click();
            break;
        }
    }

    await page.locator("[routerlink='/dashboard/cart']").click();
    const cartProducts = page.locator('div li');
    await cartProducts.first().waitFor();
    const cartCount = await cartProducts.count();
    //console.log(cartCount);

    for(let i = 0;i < cartCount; ++i){
        if(await cartProducts.nth(i).locator('h3').textContent() == productName){
            console.log("Match found. Product found in cart");
            break;
        }
    }
    
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially('Ind');
    const dropDown = page.locator('.ta-results .ta-item');
    await dropDown.first().waitFor();
    const dropDownCount = await dropDown.count();
    console.log(dropDownCount);

    for(let i=0;i<dropDownCount;++i){
        const dropDownItem = await dropDown.nth(i).textContent();
        console.log(dropDownItem);
        if(dropDownItem.trim() == "India"){
            await dropDown.nth(i).click();
            break;
        }
    }

    await page.locator('.action__submit').click();
    await page.pause();
});

