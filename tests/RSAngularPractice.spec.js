const {test, expect} = require ('@playwright/test');

test ('getByOptions Practice', async({page})=>
    {
        await page.goto('https://rahulshettyacademy.com/angularpractice/');
        await page.getByPlaceholder('Password').fill('abc');
        await page.getByText('Check me out if you Love IceCreams!').click();
        await page.getByLabel('Gender').selectOption('Female');
        await page.getByLabel('Employed').click();
        await page.getByRole("button", {name: 'Submit'}).click();
        await page.getByRole("link", {name: 'Shop'}).click();
        await page.locator('.card').filter({hasText: 'Nokia Edge' }).getByRole("button").click();
    }
)