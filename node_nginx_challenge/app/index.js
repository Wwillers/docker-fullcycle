const express = require('express');
const app = express();

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysqlcontainer',
  user: 'root',
  password: 'root',
  database: 'fullcycle',
});

// Como não foi especificado, resolvi utilizar a abordagem de um colega
// Passando o username por parametro no GET, mesmo que não seja a forma correta
app.get("/:username", (req, resp) => {
  const { username } = req.params;

  connection.query(
    `INSERT INTO people SET nome=?`, username,
    (err, results) => {
      if (err) {
        return resp.send(`Ocorreu um erro  
          ${err.message}`);
      }
      connection.query(
        "SELECT * FROM `people`",
        function (err, results, fields) {
          if (err) {
            return resp.send(`Ocorreu um erro  
            ${err.message}`);
          }
          return resp.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>
        ${results.reduce((agg, cur) => agg + `<li>${cur.nome}</li>`, "")}
        </ul>`);
        }
      );
    }
  );
});

const port = 3000;

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
