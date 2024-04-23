import { test } from '@playwright/test';
import  RedditPage from '../Pages/components/reddit';
import { REDDIT_LOGIN_AND_CONTENT } from "../data/Reddit/redditData";


test.describe('Reddit Tests', () => {
  let redditPage: RedditPage;

  test.beforeEach(async ({ page }) => {
    redditPage = new RedditPage(page);
  });

  test('Automatically Post Reddit', async () => {
    await redditPage.visitHomePage();
    await redditPage.login(REDDIT_LOGIN_AND_CONTENT.EMAIL, REDDIT_LOGIN_AND_CONTENT.PASSWORD);
    await redditPage.postContent(REDDIT_LOGIN_AND_CONTENT.TITLE, REDDIT_LOGIN_AND_CONTENT.DESCRIPTION);

  });
});
