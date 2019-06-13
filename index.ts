import CloudflareWorkerGlobalScope from 'types-cloudflare-worker'
declare var self: CloudflareWorkerGlobalScope

import Router from './router'

/**
 * Example of how router can be used in an application
 *
 */
self.addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

function handler(_request: Request) {
  const init = {
    headers: { 'content-type': 'application/json' },
  }
  const body = JSON.stringify({ some: 'json' })
  return new Response(body, init)
}

async function handleRequest(request: Request): Promise<Response> {
  const r = new Router()
  // Replace with the approriate paths and handlers
  r.get('.*/bar', () => new Response('responding for /bar'))
  r.get('.*/foo', (req: Request) => handler(req))
  r.post('.*/foo.*', (req: Request) => handler(req))
  r.get('/demos/router/foo', (req: Request) => fetch(req)) // return the response from the origin

  r.get('/', () => new Response('Hello worker!')) // return a default message for the root route

  const resp = await r.route(request)
  return resp
}
