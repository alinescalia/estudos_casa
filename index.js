import Fastify from 'fastify'
import { produtoservice } from './services/produtoservice.js'
const fastify = Fastify({
    logger: false
})
const PORT = 5005

fastify.get('/', function (request, reply) {
    reply.send({ loja: `1` })
})
fastify.get('/produtos', produtoservice.buscarprodutos)
fastify.get('/produto/:id', produtoservice.buscarprodutosporid)
fastify.post('/produto', produtoservice.criarproduto)
fastify.patch('/produtos', produtoservice.atualizarproduto)
// fastify.put('/produto/id',)
//fastify.delete('/produto/id',)
// fastify.delete('produto/id',)

fastify.listen({ port: PORT }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})
