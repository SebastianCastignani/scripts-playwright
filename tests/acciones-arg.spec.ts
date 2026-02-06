import { test, expect } from '@playwright/test';

test('top 5 acciones que mas subieron', async ({ page }) => {
  await page.goto('https://es.tradingview.com/markets/stocks-argentina/market-movers-gainers/');

  const filas = page.locator('[data-testid="selectable-rows-table-body"] tr');
  await filas.first().waitFor();


  console.log('--- RESUMEN DE MERCADO ARGENTINO ---');

  const cantidad = await filas.count();
  const limite = cantidad > 5 ? 5 : cantidad;

  for (let i = 0; i < limite; i++) {
     const fila = filas.nth(i);
    
     const ticker = await fila.locator('td').nth(0).innerText();
     const cambio = await fila.locator('td').nth(1).innerText();
     const precio = await fila.locator('td').nth(2).innerText();

     console.log(`Acción: ${ticker.split('\n')[0]} | Cambio: ${cambio} | Precio: ${precio}`);
  }
});