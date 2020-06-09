// importar a dependência do sqlite3

const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")
// node src/database/db.js (no terminal)
module.exports = db


// utilizar o objeto de banco de dados para as nossas operações

db.serialize(() => {
// // Criar uma tabela com comandos sql
 



// // com comandos SQL eu vou:

// // 1 - Criar uma tabela

// // TEMPLATES LITES OU TEMPLATES STRING

// // (traduzindo) criar uma tabela se não existir, de nome = places
// db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT

//     );

// `)

// // INTEGER - DO TIPO NÚMERICO 
// //  PRIMARY KEY - CAMPO PRINCIPAL QUE A TABELA VAI UTILIZAR PRA IDENTIFICAR O REGISTRO
// //  AUTOINCREMENT - NÚMEROS QUE IRÃO SE INCREMENTAR 
// // O ÚLTIMO ITEM DA TABELA NÃO TEM "," no final.

// // 2 - Inserir dados na tabela

// const query =`

//         INSERT INTO places (
//         image,
//         name,  
//         address,
//         address2,
//         state,
//         city,
//         items  

//     ) VALUES (?,?,?,?,?,?,?);

// ` 
// const values = [
    
//     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//     "Papersider",
//     "Guilherme Gemballa, Jardim América",
//     "N° 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Papéis e Papelão"
// ]   

//     function afterInsertData(err){
        
//         if(err) {
//             return console.log(err)
//         }
//        console.log("Cadastrado com sucesso")
//        console.log(this)
// }

// // no caso de erro, a função retorna o erro em forma de log para consulta
// // db.run(query, values, afterInsertData)
// db.run(query, values, afterInsertData)  

// // 3 -  Consultar os dados da tabela
// db.all(`SELECT name FROM places`, function (err, rows){
//     if(err) {
//         return console.log(err)
//     }

//     console.log("Aqui estão seus registros")
//     console.log(rows)
// })

// // 4 - Deletar um dado da tabela

// db.run (`DELETE FROM places WHERE id = ?`,[18], function(err) {

//     if(err) {
//         return console.log(err)
//     }

//     console.log("Registro deletado com sucesso")
      


// })


})  