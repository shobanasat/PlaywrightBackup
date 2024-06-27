const {test, expect} = require('@playwright/test');

test ('More Validations', async({page})=>
{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    //await page.pause();
    page.on('dialog',dialog => dialog.accept());
    await page.locator('#confirmbtn').click();
    await page.getByRole('button', {name: 'Mouse Hover'}).hover();

})