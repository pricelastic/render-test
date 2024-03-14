import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
});

fastify.all('*', function (request, reply) {
  fastify.log.info(Object.assign({}, process.env));
  reply.send({ envs: process.env });
});

fastify.listen({ port: process.env.PORT }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`Server is now listening on ${address}`);
});
