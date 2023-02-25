/* var fs = require("fs");
var http = require("http");
const getCharById = require("../controllers/getCharById.js")
const getCharDetail = require("../controllers/getCharDetail.js")
//import characters from "../utils/data.js";
const characters = require('../utils/data.js')
const PORT = 3001;
http.createServer((req,res)=>{
    let id = req.url.split("/").pop();
    let Rout = req.url.split("/")
    let onsearch = Rout.find(onsearch =>{     
      return  onsearch === 'onsearch'
    })
    let detail = Rout.find(detail=>{ return detail === 'detail' })
    res.setHeader('Access-Control-Allow-Origin', '*')
    
    if(onsearch ==='onsearch'){
        getCharById(res,id);    
    }
    if(detail ==="detail"){
        getCharDetail(res,id)
    }
}).listen(PORT,"localhost")
 */



























/* http.createServer((req,res)=>{
    const data = req.url.split("/");
    const id = Number(data.pop());
    const Route = data.join("/");
 res.setHeader('Access-Control-Allow-Origin', '*');
console.log(data,' ', id , ' ', Route);
if(req.url.includes('/rickandmorty/character')){
    let id = req.url.split('/');
    id = id[id.length -1];
     let user = characters.find(char => char.id === id)
     if(user){
        res.writeHead(200,{"Content-type":"application/json"})
        res.end(JSON.stringify(character));
    }
    else{
        res.writeHead(404,{"Content-type":"text/plain"})
        res.end("Character not found")
    }
} */


/* if(Route==="/rickandmorty/character"){
    const character = characters.find((ch)=>{
        return ch.id === id;
    });
    if(character){
        res.writeHead(200,{"Content-type":"application/json"})
        res.end(JSON.stringify(character));
    }
    else{
        res.writeHead(404,{"Content-type":"text/plain"})
        res.end("Character not found")
    }
} */
/* switch (Route) {
    case "/rickandmorty/character":
        const character = characters.find((ch)=>{
            return ch.id === id;
        });
        if(character){
            res.writeHead(200,{"Content-type":"application/json"})
            res.end(JSON.stringify(character));
        }
        else{
            res.writeHead(404,{"Content-type":"text/plain"})
            res.end("Character not found")
        }
        break;

    default:
        break;
} 
}).listen(PORT,'localhost')
*/
       



