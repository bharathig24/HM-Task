
const handler = require('../handlers/callback');
const schema = require('../schema/schema');

module.exports = [

    // register
      {
        method: 'POST',
        url: '/register',
        // auth: true,
        schema: {
          data: schema.registerReq
        },
        handler: handler.register       
      },
      
    //   login
      {
        method: 'POST',
        url: '/login',
        // auth: true,
        // preHandler: 
        schema: {
          data: schema.loginReq
        },
        handler: handler.login        
      },

      //get students
      {
        method: 'GET',
        url: '/getStudentsData',
        auth: true,
        // schema: {

        // },
        handler: handler.getStudents
      },

      //add students record
      {
        method: 'POST',
        url: '/addStudentsData',
        auth: true,
        schema: {
          data: schema.addStudents
        },
        handler: handler.addStudents       
      },

      //test
      {
        method: 'POST',
        url: '/home/subjects',
        auth: true,
        // preHandler: 
        handler: handler.subjects,
        // schema: {
        //   data: schema.subjectReq
        // }
      }

];