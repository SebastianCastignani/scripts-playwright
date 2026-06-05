import { test, expect } from '@playwright/test';

const url = 'https://123seguro.com.ar/seguros/auto/cotizar/0/vehicle-plate-search?referer=https%3A%2F%2Fwww.google.com%2F';
const patente = 'fce333';

test('busqueda de auto por patente', async ({ page }) => {
  await page.goto(url);

  await expect(page.getByTestId('plate-form-input-component')).toBeVisible();

  const cookieBtn = page.getByRole('button', { name: 'Rechazarlas todas' });
  if (await cookieBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
    await cookieBtn.click();
  }

  await page.getByTestId('plate-form-input-component').fill(patente);
  await page.getByRole('button', { name: 'Buscar auto' }).click();

  // Esperar que la página navegue al resultado (URL deja de ser la de búsqueda)
  await expect(page).not.toHaveURL(/vehicle-plate-search/, { timeout: 15000 });
  // Esperar que el contenido del resultado esté renderizado
  await expect(page.locator('main > div').nth(1)).toBeVisible();

  await page.screenshot({ path: 'resultado-patente.png', fullPage: true });
});
