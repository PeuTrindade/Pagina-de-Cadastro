let express = require("express");
let app = express();
let bodyParser = express ;
let path = require("path");

let usuarios = [{
  
},
]
app.use("/",express.static(path.join(__dirname,"pacotes")))

app.get("/TodosUsuarios",(req,res)=>{
    res.json(JSON.stringify(usuarios));
})

app.post("/",bodyParser.json(),(req,res)=>{
    let nome = req.body.nome ;
    let sobrenome = req.body.sobrenome ;
    let email = req.body.email ;
    let senha = req.body.senha ;

    usuarios.push({nome,sobrenome,email,senha})
    res.send("Usuário adicionado!")
})


app.listen(3000,()=>{
    console.log("Servidor rodando!")
})