

const schema = {};

// register request
schema.registerReq = {
    type: "object",
    properties: {
        token: {type: 'string'},
        data: {type: 'string'}
    },
    response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            token: { type: 'string' },
            data: { type: 'string' }
          }
        }
      }
};

// login request
schema.loginReq = {
    type: "object",
    properties: {
        token: {type: 'string'},
        data: {type: 'string'}
    }
}

//add students
schema.addStudents = {
  type: "object",
  properties:{
    data:{type: 'string'}
  }
}


module.exports = schema;