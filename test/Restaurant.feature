Feature: Cadatro de restaurantes
    Como um usuário logado no sistema
    eu cadastro, edito e apago restaurantes

Scenario: Adcionando um restaurante        
Given eu estou na página de "cadastrar restaurante"
When eu preencho os campos com nome "Bolagude Foods", telefone "123456789", email "bolagude@bola.org", bairro "Boa Viagem", numero "123", cidade "estado", rua "cidade", preço "$$", descrição "I wanna. Igot it"
And eu aperto no botão de "salvar"
Then o sistema exibe uma mensagem de "confirmação do cadastro"
And sou redirecionado para a página "dashboard"
And o restaurante "Bolagude Foods" aparece na lista de restaurantes

Scenario: Removendo um restaurante
Given eu estou na página de "dashBoard"
And e eu vejo o restaurante "Bolagude Foods" na lista de restaurantes
When eu seleciono o restaurante "Bolagude Foods"
And eu aperto no botão de "remover restaurante"
Then o sistema exibe uma mensagem de "confirmação da remoção"
And eu não vejo o restuarnte "Bolagude Foods" na lista de restaurantes

Scenario: Atualizando nome de um restaurante
Given eu estou na página de "editar restaurante" do restaurante "Bolagude Foods"
And eu vejo os campos preenchidos: nome "Bolagude Foods", telefone "123456789", email "bolagude@bola.org", bairro "Boa Viagem", numero "123", cidade "estado", rua "cidade", preço "$$", descrição "I wanna. Igot it"
When eu mudo o campo "nome" para "Bolagude Foods 2"
And eu aperto no botão de "salvar"
Then o sistema exibe uma mensagem de "confirmação do cadastro"
And sou redirecionado para a página "dashboard"
And o restaurante "Bolagude Foods 2" aparece na lista de restaurantes

Scenario: Falha ao cadastrar restaurante, faltando telefone
Given eu estou na página de "cadastrar restaurante"
When eu preencho os campos: nome "Bolagude Foods", email "bolagude@bola.org", bairro "Boa Viagem", numero "123", cidade "estado", rua "cidade", preço "$$", descrição "I wanna. Igot it"
And eu vejo o campo "telefone" vazio
And eu aperto no botão de "salvar"
Then o sistema exibe uma mensagem de "erro de cadastro"

Scenario: Falha ao cadastrar restaurante, formato de e-mail inválido
Given eu estou na página de "Cadastro de Restaurante"
When eu preencho os campos: nome "Bolagude Foods", email "bolagude@bolaorg", bairro "Boa Viagem", numero "123", cidade "estado", rua "cidade", preço "$$", descrição "I wanna. Igot it"
And eu aperto no botão de "salvar"
Then o sistema exibe uma mensagem de "erro de cadastro"

Scenario: Falha ao editar restaurante, faltando telefone
Given eu estou na página de "editar restaurante"
And eu vejo os campos preenchidos: nome "Bolagude Foods", telefone "123456789", email "bolagude@bola.org", bairro "Boa Viagem", numero "123", cidade "estado", rua "cidade", preço "$$", descrição "I wanna. Igot it"
When eu apago o campo "telefone"
And eu aperto no botão de "salvar"
Then o sistema exibe uma mensagem de "erro de cadastro"

Scenario: Falha ao editar restaurante, formato de telefone inválido
Given eu estou na página de "editar restaurante"
And eu vejo os campos preenchidos: nome "Bolagude Foods", telefone "123456789", email "bolagude@bola.org", bairro "Boa Viagem", numero "123", cidade "estado", rua "cidade", preço "$$", descrição "I wanna. Igot it"
When eu mudo o campo "telefone" para "122345a"
And eu aperto no botão de "salvar"
Then o sistema exibe uma mensagem de "erro de cadastro"