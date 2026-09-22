# Transportes Reyes — Sitio Web

## Correr en local

1. Instalar dependencias:
   ```
   npm install
   ```
2. Ver el sitio:
   ```
   npm run dev
   ```
   Abre: http://localhost:3001

---

## Flujo de trabajo

1. Partir siempre de `dev` actualizado:
   ```
   git checkout dev
   git pull
   ```
2. Crear rama con nombre descriptivo:
   ```
   git checkout -b fix/nombre-del-cambio
   ```
3. Hacer el cambio y verificar en local con `npm run dev`
4. Subir la rama:
   ```
   git add .
   git commit -m "describe el cambio"
   git push origin fix/nombre-del-cambio
   ```
5. En GitHub → crear Pull Request hacia `dev`

---

## Imágenes — IMPORTANTE

Todas las imágenes nuevas deben colocarse en la carpeta:

```
public/images/
```

Y referenciarse en el código así:

```js
imageUrl: '/images/nombre-de-imagen.jpg'
```

**No usar rutas como `/src/assets/images/...`** — esas rutas no funcionan en producción.

---

## Subir a producción

1. Compilar:
   ```
   npm run build
   ```
2. Abrir FileZilla y conectar:
   - Servidor: `svgt446.serverneubox.com.mx`
   - Puerto: `21`
3. Subir todo el contenido de `dist/` a `public_html/` en el servidor
