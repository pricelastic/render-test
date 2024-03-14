import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
});

fastify.all('*', async function (request, reply) {
  console.log(Object.assign({}, process.env));
  // return reply.send({ hello: 'world' })
  return reply.send({ envs: process.env });
});

fastify.listen({ host: '0.0.0.0', port: process.env.PORT }, function (err, address) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  fastify.log.info(`Server is now listening on ${address}`);
});
