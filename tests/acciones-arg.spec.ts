import { test, expect } from '@playwright/test';

test('top 5 acciones que mas subieron', async ({ page }) => {

  // abre la pagina de trandigview en la seccion de acciones argentinas
  await page.goto('https://es.tradingview.com/markets/stocks-argentina/market-movers-gainers/');

  //localiza la tabla de acciones 
  const filas = page.locator('[data-testid="selectable-rows-table-body"] tr');
  await filas.first().waitFor();

 // imprime el resumen 

  console.log('--- RESUMEN DE MERCADO ARGENTINO ---');

  const cantidad = await filas.count();
  const limite = cantidad > 5 ? 5 : cantidad; // limita a 5 o al total si hay menos de 5 filas

  for (let i = 0; i < limite; i++) { // itera solo sobre las primeras 5 filas
     const fila = filas.nth(i);
    
     //guarda en variables los valores
     const ticker = await fila.locator('td').nth(0).innerText();
     const cambio = await fila.locator('td').nth(1).innerText();
     const precio = await fila.locator('td').nth(2).innerText();
     
     // imprime las variables en consola
     console.log(`Acción: ${ticker.split('\n')[0]} | Cambio: ${cambio} | Precio: ${precio}`);
  }
});