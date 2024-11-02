import express from 'express';
const PORT = 3000;

const app = express();

app.get('/cadastrarcliente', (req, res) => {
  res.send(`
    <html>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <title>Formulário de Cadastro</title>
      </head>
      <body>
        <div class="container mt-5">
          <form>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="userName">Nome:</label>
                <input type="text" class="form-control" id="userName" />
              </div>
              <div class="form-group">
                <label class="form-label" for="userEmail">Email:</label>
                <input type="text" class="form-control" id="userEmail" />
              </div>
              <div class="form-group">
                <label class="form-label" for="userPassword">Senha:</label>
                <input type="password" class="form-control" id="userPassword" />
              </div>
              <button type="submit" class="btn btn-primary mt-3">Cadastrar</button>
            </div>
          </form>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta: ${PORT}...`);
});
