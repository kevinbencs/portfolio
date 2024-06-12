# Portfólió oldal

## Link: [Portfolio website](https://www.bencskevin.hu/)

Használt technológiák:
- HTML
- CSS
- React


## Az oldal leírása

Az oldal feléptése az `src` könyvtárban történik meg. Az angol és a magyar nyelv kiválasztásához létrehoztam egy `language` könyvtárat és benne kettő darab json fájlt, melyekbe eltárolom az oldal szövegét. A három oldal felépítése a `pages` nevű könyvtárban található, melyben létrehoztam a stílusukhoz egy `pages.css`-t. Az oldal többi építőelemének nagy része a `components` könyvtárban található. Itt hoztam létre az oldalak `header`-jét és `footer`-jét. A `header` részben található a menű és a nyelv választásához szükséges gomb felépítése. A `components`-ben található még az oldalak közötti animáció (`clickleftarrow.jsx`, `clickrightarrow.jsx`, `scrolltop.jsx`, `siteanimation.js`), egy `layout.jsx`.et, ami tartalmazza a `header`-t és a `footer`-t, valamint egy `main.jsx`-t, amiben definiáltam a route-okat.





