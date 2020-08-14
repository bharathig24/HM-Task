// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
});

const mySql = require('./lib/config/mysql');
// fastify.register(require('./lib/config/mysql'));

const jwt = require('fastify-jwt');

fastify.register(jwt, {
    secret: 'secretkey'
})

mySql.StartMysql(fastify);

fastify.ready((err) => {
    if (!err) {
        mySql.SetConnection(fastify);
        // fastify.swagger();
    }
})

// mySql.getConnection  = fastify.mysql.getConnection;

const auth = require('fastify-auth');
const router = require('./lib/routes/route');

// Enable the fastify CORS plugin
fastify.register(require('fastify-cors'), {
    origin: '*',
    credentials: true
});

const schema = require('./lib/schema/schema');

fastify.register(require('fastify-swagger'), {
    swagger: {
        info: {
            title: 'FIleUploadDownload Swagger',
            description: 'SampleUploadDownloadFile For Fastify Swagger Api',
            version: '0.1.0'
        },
        host: 'localhost',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        securityDefinitions: {
            bearerAuth: {
                type: "apiKey",
                in: "header",
                name: "Authorization"
            }
        },
        security: [{
            "bearerAuth": []
        }]
    },
    exposeRoute: true,
    routePrefix: '/swagger'
});

const verifyToken = async function(request, reply) {
    try {
        const token = request.headers.authorization.split(" ")[1];
        console.log("token");
        console.log(token);

        // const decoded = fastify.jwt.verify(token);
        fastify.jwt.verify(token, (err, decoded) => {
            if (err) {
                reply.code(401).send("Auth faild");
                console.log(err);

            }
            console.log(decoded);

        });
    } catch (err) {
        console.log(err);

    }
}

// =============routes===========
fastify.register(auth)
    .after(() => {
        for (let route of router) {
            // console.log(route.auth);
            // console.log("check");
            if (route['auth']) {
                route.preValidation = fastify.auth([verifyToken]);
            }
            // route.preHandler = fastify.auth([verifyToken]);
            // console.log("route");
            // console.log(route);


            fastify.route(route);
        }
    });



// Run the server!
fastify.listen(3000, function(err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(`${address}`);
    fastify.log.info(`${address}`)
})