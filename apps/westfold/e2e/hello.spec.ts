import { test, expect } from '@playwright/test'

test('has title Dashboard', async ({ page }) => {
  await page.goto('http://localhost:3001/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Dashboard/)
})
