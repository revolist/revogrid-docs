import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { resolve, sep, extname } from 'node:path'
import { InvalidQuery } from '../shared/query.ts'
import { openDatabase } from './database.ts'
export function createOrdersServer(
  database: ReturnType<typeof openDatabase>,
  staticRoot = resolve('dist'),
) {
  const root = resolve(staticRoot)
  return createServer(async (request, response) => {
    response.setHeader('Cache-Control', 'no-store')
    response.setHeader('X-Content-Type-Options', 'nosniff')
    const json = (status: number, body: unknown) => {
      response.writeHead(status, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify(body))
    }
    const path = new URL(request.url ?? '/', 'http://127.0.0.1').pathname
    if (path.startsWith('/api/')) {
      if (path !== '/api/orders/query' || request.method !== 'POST')
        return json(404, { error: { code: 'NOT_FOUND', message: 'Endpoint not found.' } })
      let raw = ''
      try {
        if (Number(request.headers['content-length']) > 8192)
          throw new InvalidQuery('$', 'Request body exceeds 8 KiB.')
        let bytes = 0
        for await (const chunk of request) {
          bytes += Buffer.byteLength(chunk)
          if (bytes > 8192) throw new InvalidQuery('$', 'Request body exceeds 8 KiB.')
          raw += chunk
        }
        let input: unknown
        try {
          input = JSON.parse(raw)
        } catch {
          throw new InvalidQuery('$', 'Invalid JSON body.')
        }
        return json(200, database.query(input))
      } catch (error) {
        if (error instanceof InvalidQuery)
          return json(400, {
            error: { code: 'INVALID_QUERY', message: error.message, path: error.path },
          })
        return json(500, {
          error: {
            code: 'QUERY_FAILED',
            message: 'Could not load these orders. Please try again.',
          },
        })
      }
    }
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      response.writeHead(405)
      response.end()
      return
    }
    try {
      const file = resolve(root, '.' + decodeURIComponent(path === '/' ? '/index.html' : path))
      if (!file.startsWith(root + sep)) {
        response.writeHead(403)
        response.end()
        return
      }
      const data = await readFile(file)
      const types: Record<string, string> = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.svg': 'image/svg+xml',
        '.webp': 'image/webp',
      }
      response.writeHead(200, {
        'Content-Type': types[extname(file)] ?? 'application/octet-stream',
      })
      response.end(request.method === 'HEAD' ? undefined : data)
    } catch {
      response.writeHead(404)
      response.end('Not found')
    }
  })
}
