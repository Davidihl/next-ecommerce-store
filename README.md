# E-Commerce Project

This project was created as part of the [UpLeveled.io](https://upleveled.io/) boot camp!

## Disclaimer

At no point, personal or payment service data of the checkout is being stored. The checkout serves as a mockup and would need to be replaced with a proper payment service provider.

# Documentation

## Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

To initialize the repository, run:

```bash
pnpm install
```

To start the localhost, run:

```bash
pnpm dev
```

The application should be available on [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies used

This application has been set up using:

### SCSS

[https://www.npmjs.com/package/sass](https://www.npmjs.com/package/sass)

The application has been styled using scss-module with a mobile first approach. As a result, this application is full responsive available on all devices with an optimization on bigger screens like tablets or desktops.

### POSTGRES

[https://www.npmjs.com/package/postgres](https://www.npmjs.com/package/postgres)

The product database of this application is using to store the product data.

### JEST

[https://www.npmjs.com/package/jest](https://www.npmjs.com/package/jest)

For unit testing

### Playwright

[https://www.npmjs.com/package/playwright](https://www.npmjs.com/package/playwright)

For E2E testing

### Github actions

[https://docs.github.com/en/actions](https://docs.github.com/en/actions)

To run unit- and E2E-tests after every push.

### Fly.io

[https://fly.io/](https://fly.io/)

This project has been deployed on [https://daih-next-ecommerce-store.fly.dev/](https://daih-next-ecommerce-store.fly.dev/) and set up in a way, where Github actions are utilized to trigger a deployment after a successful E2E-test (see Github actions).
