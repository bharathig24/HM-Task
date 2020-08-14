const fastify = require('fastify')();
const mySql = require('../config/mysql');
const query = require('../queries/query');

const handler = {};

handler.register = async (request, reply) => {
    try {
        console.log("mySql");
        const connection = await mySql.GetConnection();
        let [result,fields] = await connection.query(
          query.register,
          [request.body.userName, request.body.eMail, request.body.password]
        );
        
        await connection.release();
        reply.jwtSign(request.body,{ expiresIn : "1d"}, function (err, token) {
            return reply.send(err || { token: token, data: "true" })
        });
        // reply.send(true);
        // fastify.swagger();
    } catch (e) {
        console.log(e);  
        reply.code(500);
        reply.send("ER_DUP_ENTRY");
    }
};

handler.login = async (request, reply) => {
    try {
        console.log("check handler");
        
        console.log(request.body);
        // fastify.log.info(`${request}`)
       
        const connection = await mySql.GetConnection(fastify);
      
        let [result,fields] = await connection.query(
            query.login,[request.body.userName]
        );
        await connection.release();
        // console.log(result);
        
        if(request.body.password === result[0].Password){
            reply.jwtSign(request.body,{ expiresIn : "1d"}, function (err, token) {
                console.log(err);
                console.log(token);
                
                
                return reply.send(err || { token: token, data: "true" })
            })
            // reply.send(true);
        }else{
            reply.send("false");
        }
    } catch (e) {   
        console.log(e)
        reply.code(500);
        reply.send("Internal Error");
    }
}

//get students
handler.getStudents = async (request, reply) => {
    try{
        console.log("students handler");
        const connection = await mySql.GetConnection(fastify);
        let [result,fields] = await connection.query(
            query.getStudents
        );
        console.log(result);
        reply.send(result);
        
    }
    catch(err){
        console.log(err);
        
    }
}

//add students
handler.addStudents = async (request, reply) => {
    try {
        console.log("add students");
        const connection = await mySql.GetConnection();
        let [result,fields] = await connection.query(
          query.addStudents,
          [request.body.studentName, request.body.sex, request.body.dob, request.body.mobile]
        );
        
        await connection.release();
        
        reply.send({data: "true" })
        
        // reply.send(true);
        // fastify.swagger();
    } catch (e) {
        console.log(e);  
        reply.code(500);
        reply.send("ER_DUP_ENTRY");
    }
};

handler.subjects = async (request, reply) => {
    try {
        console.log("subjects");
        
        reply.send({data: "true"});
    } catch (e) {   
        console.log(e)
    }
}

module.exports = handler;