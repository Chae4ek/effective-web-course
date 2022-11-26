## Compilation & Deployment

First you need to create a `.env` file and write this to it:

```properties
VITE_MARVEL_TOKEN = "API_TOKEN"
```

Replace the `API_TOKEN` with a private marvel api token, which can be found [here](https://developer.marvel.com/account)

Run the developer version:

```
yarn dev
```

Compile a production build:

```
yarn build
```

Run the production build:

```
yarn preview
```
