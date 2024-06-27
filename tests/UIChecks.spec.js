const {test, expect} = require('@playwright/test');

test('Browser Context Playwright test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const password = page.locator('[name="password"]');
    await page.goto ('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await userName.fill('rahulshettyacademy');
    await password.fill('learning');
    //await page.locator('#signInBtn').click();
    await page.locator('select.form-control').selectOption("Consultant");
    await page.locator('.radiotextsty').nth(1).click();
    await page.locator('#okayBtn').click();
    await expect(page.locator('.radiotextsty').nth(1)).toBeChecked();
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();
    const docLink = page.locator("[href*='documents-request']");
    await expect(docLink).toHaveAttribute('class','blinkingText');

    const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    docLink.click(),
    ]);

    const msg = await newPage.locator(".red").textContent();
    const email = msg.split('@')[1].split(" ")[0];
    console.log(email);

    userName.fill('');
    userName.fill(email);

    //await page.pause();
});

