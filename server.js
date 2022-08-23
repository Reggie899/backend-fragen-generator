import express from 'express';
import cors from 'cors';


const server = express();
server.use(cors()); 
server.use(express.json()); 

let hello = (req, res) => { res.json("läuft")}

server.use('/test', hello)


const PORT = 3333;

server.listen(PORT, () => console.log(`Server is listening to port ${PORT} and running`));