// npm init -y  (Transforme minha pasta simples através do "pachage.json"
// em um projeto feito em node  
//  CTRL + L (limpar tela)
//  .exit (sair)




const express = require("express")
// Variável express e vou atribuir a essa variável uma
// funcionalidade "require" - exigir - um pedido do "express" - 
// que é o que foi instalado na máquina anteriormente.



const server = express () // precisa configurar pasta pública
//  variável server (objeto de servidor) vai executar o express - como express
// recebeu uma função, ela irá ser executada.

// pegar o banco de dados
const db = require("./database/db.js")

server.use(express.static("public"))

// habilitar o uso do req.body na nossa aplicação

server.use(express.urlencoded({extended: true}))

// utilizando templates engine

const nunjucks = require ("nunjucks")
    nunjucks.configure("src/views" , {
    express: server,
    noCache: true

})
    // noCache - maneira de responder mais rápido - não salva cache







// 1 coisa após ligar o servidor
// Configurar caminhos da minha aplicação para o servidor abrir os arquivos

// página inicial
//  req é uma requisição (pedido)
//  res é uma resposta


server.get("/", (req, res) => {
    // O "/"" via "get" vai responder uma função
    return res.render ("index.html", {title: "Um título" })
})

server.get("/create-point", (req, res) => {
    // req.query: query strings da nossa url
    // console.log(req.query)

    // O "/"" via "get" vai responder uma função
    return res.render("create-point.html")
})


server.post("/savepoint", (req, res) =>{
    
    //  req.body = corpo do nosso formulário
    // console.log(req.body)
    
  
    // 2 - Inserir dados na tabela

    const query =`

            INSERT INTO places (
            image,
            name,  
            address,
            address2,
            state,
            city,
            items 

        ) VALUES (?,?,?,?,?,?,?);

    ` 
    const values = [
        
        req.body.image, 
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items

    ]   

        function afterInsertData(err){
            
            if(err) {
                console.log(err)
                return res.send("Erro no cadastro")
            }
        console.log("Cadastrado com sucesso")
        console.log(this)
    
    
        return res.render("create-point.html", {saved: true})
    }
      
    db.run(query, values, afterInsertData)
    
    
    

})





server.get("/search", (req, res) => {
    // O "/"" via "get" vai responder uma função
       
    const search = req.query.search
    
    if(search == "") {
        // pesquisa vazia
        return res.render ("search-results.html", { total: 0 })
       }

   

    
    // pegar os dados do banco de dados
    // sul
    // chapadão do sul
    // rio do sul
    // sulamericana
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows){
        if(err) {
                
            return console.log(err)
            }


            const total = rows.length


        // console.log(rows)
// mostrar a página html com os dados do banco de dados
    return res.render ("search-results.html", {places: rows, total: total})


    })

       
    
})







// ligar o servidor - ou fica ouvindo a porta (3000)
server.listen (3000)


