# scripts-playwright
Scripts RPA usando Playwright para automatización web.

## Instalación

```bash
npm init playwright@latest
```

## Scripts disponibles

### 1. Acciones Argentinas (acciones-arg.spec.ts)
Script que extrae información del mercado argentino desde TradingView. Obtiene las top 5 acciones que más subieron, mostrando:
- Ticker de la acción
- Cambio porcentual
- Precio actual

## Cómo correr los tests

### Correr todos los tests (modo headless)
```bash
npx playwright test
```

### Correr tests con navegador visible
```bash
npx playwright test --headed
```

### Correr un test específico
```bash
npx playwright test tests/acciones-arg.spec.ts
```

### Ver el reporte de los tests
```bash
npx playwright show-report
```

## Salida esperada

El script de acciones argentinas imprime en consola:
```
--- RESUMEN DE MERCADO ARGENTINO ---
Acción: TICKER1 | Cambio: +X.XX% | Precio: $XXX.XX
Acción: TICKER2 | Cambio: +X.XX% | Precio: $XXX.XX
...
```
