require("dotenv").config();

const Server = require("./models/server");

const server = new Server();
const dato = "abc";
server.listen();

//subir
