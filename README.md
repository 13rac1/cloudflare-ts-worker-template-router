# Router

Selects the logic to respond to requests based on the `request` method and URL. Can be used with REST APIs or apps that require basic routing logic.

Uses TypeScript types from: [`udacity/cloudflare-typescript-workers`](https://github.com/udacity/cloudflare-typescript-workers). Example Github Repository Template with Jest Tests: [`udacity/cloudflare-typescript-worker-template`](https://github.com/udacity/cloudflare-typescript-worker-template).

* [`index.ts`](https://github.com/13rac1/cloudflare-ts-worker-template-router/blob/master/index.ts) is the content of the Workers script.
* [`router.ts`](https://github.com/13rac1/cloudflare-ts-worker-template-router/blob/master/router.ts) is the content of the required Router class.

Live Demos are hosted on `workers-tooling.cf/demos/router`:
[Demo /bar](http://workers-tooling.cf/demos/router/bar) | [Demo /foo](http://workers-tooling.cf/demos/router/foo)

## Wrangler

To generate using [wrangler](https://github.com/cloudflare/wrangler)

```bash
wrangler generate myApp https://github.com/13rac1/cloudflare-ts-worker-template-router
```

Build and preview:

```bash
cd myApp
npm i
wrangler preview
```

## Serverless

To deploy using serverless add a [`serverless.yml`](https://serverless.com/framework/docs/providers/cloudflare/) file.
