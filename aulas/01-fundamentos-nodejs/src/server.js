import http from "node:http";



const server = http.createServer((req,res) =>{
    const {method,statusCode,statusMessage,url} = req;

    if(method === "GET" && url === "/users") 
    return res.end("Listagem de usuários");

    if(method === "GET" && url === "/")
    return res.end("Hello Mundo");

    return res.statusCode(404);
});


server.listen(3333);