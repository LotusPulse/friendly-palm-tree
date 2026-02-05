# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv create --template minimal --types jsdoc --install npm .
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

## Sisuhaldus (Decap CMS)

Projektis on kasutusel **Decap CMS**, mis võimaldab hallata teenuseid ja partnereid ilma koodi muutmata.

### Kohalik arendus
1. Käivita CMS-i puhverserver teises terminalis:
   ```sh
   npx decap-server
   ```
2. Mine aadressile `http://localhost:5173/admin`
3. Sealt saad lisada ja muuta teenuseid ning partnereid. Muudatused salvestatakse otse `src/content` kausta.

### Produktsioon
Produktsioonis (Netlify) on vajalik seadistada **Netlify Identity** ja **Git Gateway**.
1. Luba Netlify paneelis Identity.
2. Luba Git Gateway.
3. Seadistused on juba olemas `static/admin/config.yml` failis (`backend: git-gateway`).
