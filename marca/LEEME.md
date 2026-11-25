# Marca de Víctor Cruz

Logotipo definitivo elegido por Víctor el 25 de noviembre de 2026: calco vectorizado del diseño n.º 7 (V que se enrosca en la cabeza de la clave de fa, C de la clave, dos puntos y semicírculo). El texto «íctor / ruz» está convertido en curvas (Spectral Light Italic), así que los archivos no dependen de ninguna tipografía instalada.

## Colores

| Nombre | Hex | Uso |
|---|---|---|
| Vino | `#4A1020` | Logotipo sobre fondos claros; acentos de la web; fondo del favicon y del avatar |
| Marfil | `#F1E3C8` | Logotipo sobre vino, sobre negro y sobre fotos |
| Papel | `#F7F3EC` | Fondo principal de la web |
| Tinta | `#1D1718` | Texto; logotipo a una tinta |

## Qué archivo usar

| Para… | Archivo |
|---|---|
| Web, dossier, programas (fondo claro) | `svg/logo-vino.svg` (o `png/logo-vino-*.png`) |
| Sobre foto o fondo oscuro | `svg/logo-marfil.svg` / `logo-blanco.svg` |
| Imprenta | `pdf/logo-vino.pdf`, `pdf/logo-tinta.pdf` (vectoriales, 100 mm de ancho; se escalan sin pérdida) |
| Sin arco (espacios estrechos) | `svg/logo-sin-arco-*.svg` |
| Sólo el símbolo (sellos, marcas de agua) | `svg/simbolo-*.svg`, `svg/simbolo-arco-*.svg` |
| Favicon de la web | `iconos/favicon.svg`, `iconos/favicon.ico` (16, 32 y 48 px, con engrosado óptico), `iconos/apple-touch-icon.png`, `iconos/icon-192.png`, `iconos/icon-512.png`, `iconos/icon-maskable-512.png`, `iconos/site.webmanifest` |
| Avatar de Instagram y Facebook | `iconos/avatar-redes-1080.png` |

Los PNG tienen fondo transparente y van en tres anchos: 3000, 1200 y 600 px.

## Normas básicas

- No deformar, girar, recolorear con otros colores ni añadir sombras o efectos.
- Dejar alrededor un margen libre de, al menos, la altura de la bola de la clave.
- Tamaño mínimo del logotipo completo: 25 mm de alto impreso o 90 px en pantalla. Por debajo, usar el símbolo o el favicon.

## Regenerar

Las fuentes están en `fuentes/`:
- `simbolo.json` y `arco-y-puntos.json`: la geometría calcada.
- `generar_logo.py`: genera los SVG con el texto en curvas.
- `exportar.py`: genera los PNG, los PDF y los iconos con Chrome sin interfaz.

```
cd marca/fuentes
python -P generar_logo.py ../svg
python -P exportar.py
```

Necesitan Python con `fontTools`, `brotli` y `Pillow`, y el paquete npm `@fontsource/spectral` instalado en la raíz del proyecto (`npm install`).
