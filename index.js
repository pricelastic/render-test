import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
});

fastify.all('*', function (request, reply) {
  console.log(Object.assign({}, process.env));
  reply.send({ envs: process.env });
});

fastify.listen({ port: process.env.PORT }, function (err, address) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  fastify.log.info(`Server is now listening on ${address}`);
});
