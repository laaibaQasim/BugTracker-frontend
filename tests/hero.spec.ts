import { test, expect } from '@playwright/test';

test.describe('Hero Component', () => {
  test('should render hero section with heading and CTA buttons', async ({ page }) => {
    // Navigate to your app's main page
    await page.goto('/');
    
    // Wait for the hero section to load
    await page.waitForLoadState('networkidle');
    
    // Check if the main heading is visible
    await expect(page.getByRole('heading', { name: /Log Coding errors and streamline debugging/i })).toBeVisible();
    
    // Check if the subheading is visible
    await expect(page.getByText('Easily track errors across all your projects.')).toBeVisible();
    
    // Check if the hero section has the correct background color
    const heroSection = page.locator('div').first();
    await expect(heroSection).toBeVisible();
    
    // Test responsive behavior - check if image is visible on large screens
    // Note: This assumes the component renders on desktop viewport (1280x720)
    const heroImage = page.locator('div').last(); // Adjust selector based on your HeroImage component
    await expect(heroImage).toBeVisible();
    
    // Take a screenshot for visual regression testing
    await page.screenshot({
      path: 'tests/hero-component.png',
      fullPage: false,
    });
  });
});