import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
});

fastify.get('/', function (request, reply) {
  reply.json(process.env);
});

fastify.listen({ port: process.env.PORT }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`Server is now listening on ${address}`);
});