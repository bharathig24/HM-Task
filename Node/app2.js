//fastify
const fastify = require('fastify')({
  logger: true
});

//jwt
fastify.register(require('fastify-jwt'), {
  secret: 'supersecret'
});

//mysql connection
fastify.register(require('fastify-mysql'), {
  promise: false,
  connectionString: 'mysql://root:root@localhost:3306/students'
});

// Enable the fastify CORS plugin
fastify.register(require('fastify-cors'), {
  origin: '*',
  credentials: true
});

fastify.register(require('fastify-swagger'), {
  routePrefix: '/swagger',
  swagger: {
    info: {
      title: 'Test swagger',
      description: 'testing the fastify swagger api',
      version: '0.1.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'user', description: 'User related end-points' },
      { name: 'code', description: 'Code related end-points' }
    ],
    securityDefinitions: {
      apiKey: {
        type: 'apiKey',
        name: 'apiKey',
        in: 'header'
      }
    }
  }
});

//routes
fastify.route({
  method: 'POST',
  url: '/register',
  schema: {
    type: "boolean",
    properties: true
  },
  handler: async function(request, reply) {
    try {

      //encode
      const token = fastify.jwt.sign(request.body);
      console.log("sign===============");
      console.log(token);

      //verify and return data
      fastify.jwt.verify(token, (err, decoded) => {
        if (err) {
          console.log("verify error===============");
          console.log(err);
        }
        console.log("verify===============");
        console.log(decoded);
        
      });

       //decode
       const decode = fastify.jwt.decode(token);
       console.log("decode===============");
       console.log(decode);
      
      // reply.send({ token });
        // console.log("123456");
        // console.log(fastify.mysql.getConnection());
        
        // const connection = await fastify.mysql.getConnection();
        // console.log(connection);
        // let [result,fields] = await connection.query(
        //   'INSERT INTO users (UserName, MailId, Password) VALUES (?,?,?)',
        //   [request.body.userName, request.body.eMail, request.body.password]
        // );
        
        // await connection.release();
        // reply.send(true);
    } catch (e) {
        console.log(e);  
        reply.code(500);
        reply.send("ER_DUP_ENTRY");
    }
}
});

//run the server
fastify.listen(3040, function(err, address) {
  if(err){
    fastify.log.error(err);
  }
  fastify.log.info(`${address}`)
});