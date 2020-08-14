
let Connection;
const StartMysql = (fastify)=>{
    fastify.register(require('fastify-mysql'), {
        promise: true,
        connectionString: 'mysql://root:root@localhost:3306/students'
        // host: 'localhost',
        // post: 3306,
        // user: 'root',
        // database: 'students',
        // password: 'thi.Bharathi4'
    });
}
GetConnection=async (fastify)=>{
    // return new Promise(async (resolve,reject)=>{
        // try{
            let conn = await Connection.getConnection();
            return conn;
            // return resolve(conn);
        // }catch(e){
        //     return reject(e);
        // }
    // })
}

SetConnection=(fastify)=>{
    Connection = fastify.mysql;
    console.log("Connect Setted");
}

module.exports = {
    StartMysql:StartMysql,
    GetConnection:GetConnection,
    SetConnection:SetConnection
};