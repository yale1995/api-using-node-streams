import http from 'node:http'

const users = []

const server = http.createServer((request, response) => {
    const { method, url } = request

    if (method === 'GET' && url === '/users') {
        return response
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com'
        })

        return response.end('adding new user')
    }
    return response.end("Hello Ignite")
})

server.listen(3333)