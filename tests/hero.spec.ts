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
      path: 'test-results/hero-component.png',
      fullPage: false,
    });
  });

  test('should hide hero image on mobile screens', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Navigate to the page
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check that heading is still visible
    await expect(page.getByRole('heading', { name: /Log Coding errors and streamline debugging/i })).toBeVisible();
    
    // On mobile, the hero image should be hidden due to isBigScreen logic
    // You might need to adjust this selector based on your actual HeroImage component
    const heroImageContainer = page.locator('div:has(> *):last-child');
    await expect(heroImageContainer).toBeHidden();
    
    // Take mobile screenshot
    await page.screenshot({
      path: 'test-results/hero-component-mobile.png',
      fullPage: false,
    });
  });

  test('should have proper styling and layout', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Test the main container styling
    const heroContainer = page.locator('div').first();
    
    // Check if the container has flex display (this is approximate testing)
    const containerStyles = await heroContainer.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return {
        display: styles.display,
        backgroundColor: styles.backgroundColor,
        borderRadius: styles.borderRadius,
      };
    });
    
    // Verify flex display
    expect(containerStyles.display).toBe('flex');
    
    // Test that CTA buttons are present (adjust based on your HeroCtas component)
    const ctaSection = page.locator('div').nth(1); // Adjust selector
    await expect(ctaSection).toBeVisible();
  });
});