import express from 'express';
const PORT = 3000;

const app = express();

const style = `
  <style>
    body {
      background-color: rgb(30 41 59);
      color: white;
    }

    .form-control {
      border-width: 1px;
    }

    .form-control:focus {
      border-color: #34d399;
      box-shadow: 0 0 0 0.1rem rgba(52, 211, 153, 1);
    }
    
    .btn-primary {
      background-color: #10b981;
      border:none;
      color: #374151;
      font-weight: 600;
    }

    .btn-primary:hover {
      background-color: #34d399;
      color: #374151;
    }

    a{
      color: #34d399;
      transition: color 0.3s ease;
    }

    a:hover {
      color: #10b981;
    }

  </style>
`;

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
        ${style}
        <title>Formulário de Cadastro</title>
      </head>
      <body>
        <div class="container mt-5 flex-column align-items-center">
          <h1 class="text-center mb-5">Cadastro de Clientes</h1>
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
              <div class="form-group">
                <label class="form-label" for="userPhone">Telefone:</label>
                <input type="text" class="form-control" id="userPhone" />
              </div>
            </div>
            <div class="form-row d-flex justify-content-between">
              <div class="form-group col-md-6">
                <label for="userCity">Cidade</label>
                <input type="text" class="form-control" id="userCity" />
              </div>
              <div class="form-group col-md-5">
                <label for="userState">Estado</label>
                <select id="userState" class="form-control">
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
            </div>
            <div class="form-group">
                <label for="userAddress">Endereço</label>
                <input type="text" class="form-control" id="userAddress" />
              </div>
            <button type="submit" class="btn btn-primary mt-3">Cadastrar</button>
          </form>
          <footer class="mt-5 text-center">
            <p>
              Desenvolvido por
                <a 
                  href="https://www.github.com/vmedeir0s/"
                  target="_blank"
                  >Vinicius de Medeiros
                </a>👨‍💻
            </p>
          </footer>
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
