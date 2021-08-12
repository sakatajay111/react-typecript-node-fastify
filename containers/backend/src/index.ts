import fastify from 'fastify'

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong success \n'
})

server.listen(3001, '0.0.0.0', function (err, address) {
  	if (err) {
		server.log.error(err)
		process.exit(1)
	}
	server.log.info(`server listening on ${address}`)
});