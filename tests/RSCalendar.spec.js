const {test, expect} = require("@playwright/test")

test ('Calendar checks', async({page})=>
{
    const date = '24';
    const month = 2;
    const year = '2027';
    const expectedDate = year+"-"+month+"-"+date;
    console.log(expectedDate);
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    await page.locator('.react-date-picker__inputGroup').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.getByRole("button", {name: year}).click();
    await page.locator('.react-calendar__tile').nth(month-1).click();
    await page.getByRole("button", {name: date}).click();
    const actualDate = await page.locator('input[name="date"]').getAttribute("value");
    console.log(actualDate);
    //await page.pause();
})