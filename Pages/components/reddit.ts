import { Page, expect } from '@playwright/test';

class RedditPage {
    
  constructor(private page: Page) {}

  async visitHomePage() {
    await this.page.goto('https://www.reddit.com/');
  }

  



  async login(username: string, password: string) {
    const loginBtn = await this.page.locator("#login-button")
    loginBtn.click();

    await this.page.fill('#login-username', username);
    await this.page.fill('#login-password', password);
    await this.page.getByRole('button', { name: 'Log In' }).click();

    await this.page.waitForSelector('#create-post');
  }

  async postContent(title: string, description: string) {
    await this.page.getByRole('link', { name: 'Create Create post' }).click();
    const createBtn = await this.page.locator("#create-post");
    createBtn.click()
    await this.page.waitForURL('https://www.reddit.com/submit');
    await this.page.getByPlaceholder('Title').click();
    await this.page.getByPlaceholder('Title').fill(title);
    await this.page.getByRole('textbox').nth(2).click();
    await this.page.getByRole('textbox').nth(2).fill(description);
    await this.page.locator('._15FJlGHQ_lg8wmnMsXlnes').click();
    await this.page.getByText('u/SaiCharan2021').click();
    await this.page.getByRole('button', { name: 'Post', exact: true }).click();
    await this.page.getByLabel('Approve content').locator('svg').click();
    

  }

}


export default RedditPage