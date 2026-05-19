# DSANT Lift Solutions

Sitio web de DSANT Montacargas para renta, venta, servicio técnico y refacciones de montacargas industriales.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

La salida de producción se genera en `dist/`.

## Publicación

El sitio se publica con GitHub Pages mediante el workflow `.github/workflows/deploy.yml` cada vez que se actualiza la rama `main`.

Dominio configurado:

```text
dsant.com.mx
```

Para que el dominio responda, el DNS de `dsant.com.mx` debe apuntar a GitHub Pages. En GitHub Pages se recomienda usar estos registros `A` para el dominio raíz:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

También puede agregarse un registro `CNAME` para `www` apuntando a:

```text
gmarcovillalobos.github.io
```
