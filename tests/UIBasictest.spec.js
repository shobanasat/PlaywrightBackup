const {test, expect} = require('@playwright/test');

test('Browser Context Playwright test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const password = page.locator('[name="password"]');
    await page.goto ('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await userName.fill('rahulshetty');
    await password.fill('learning');
    await page.locator('#signInBtn').click;
    console.log(await page.locator('[style*="none"]').textContent());
    await expect(page.locator('[style*="none"]')).toContainText('Incorrect');

    await userName.fill('');
    await userName.fill('rahulshettyacademy');
    console.log(await page.locator('.card-body  a').first().textContent);
    console.log(await page.locator('.card-body  a').nth(1).textContent);
    console.log(await page.locator('.card-body  a').allTextContents);
});

test('page Playwright test', async ({page})=>
    {
        await page.goto ('https://google.com');
        console.log(await page.title());
        await expect(page).toHaveTitle('Google');
    });

test('eCommerce Playwright test', async ({page})=>
    {
        await page.goto ('https://rahulshettyacademy.com/client');
        //console.log(await page.title());
        const email = page.locator('#userEmail');
        const password = page.locator('#userPassword');
        const loginButton = page.locator("#login");

        await page.locator('#userEmail').fill('shobanasathyanathan@gmail.com');
        await password.fill('Shobikr@1');
        //await loginButton.waitFor();
        await loginButton.click();
        //await page.waitForLoadState('networkidle');
        await page.locator(".card-body b").first().waitFor();
        const products = await page.locator(".card-body b").allTextContents();
        console.log(products);
    });