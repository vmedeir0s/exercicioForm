import express from 'express';
const PORT = 3000;

const app = express();

app.get('/cadastrarcliente', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />
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
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="userCity">Cidade</label>
                <input type="text" class="form-control" id="userCity" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">Estado</label>
                <select id="inputState" class="form-control" required>
                  <option selected hidden>Escolha...</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
              </div>
              <div class="form-group">
                <label for="userAddress">Endereço</label>
                <input type="text" class="form-control" id="userAddress" />
              </div>
            </div>
            <button type="submit" class="btn btn-primary mt-3">Cadastrar</button>
          </form>
        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta: ${PORT}...`);
});
