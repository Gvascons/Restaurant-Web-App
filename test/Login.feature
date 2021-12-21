Scenario: O usuário cadastra sua conta com sucesso
Given o usuário "Lin" deseja cadastrar a sua conta
When o usuário preenche o campo "Nome" com "Lin"
And o campo "Senha" com "123"
And o usuário "Lin" clica no botão "Cadastrar"
Then o usuário "Lin" é redirecionado para a página "Login"

Scenario: O usuário loga com sucesso
Given o usuário "Lin" deseja logar a sua conta
And existe esse usuário no sistema
When o usuário preenche o campo "Nome" com "Lin"
And o campo "Senha" com "123"
And o usuário "Lin" clica no botão "Entrar"
Then o usuário "Lin" é redirecionado para a página "Dashboard"

Scenario: O usuário não cadastra com sucesso
Given o usuário "Jon" deseja cadastrar a sua conta
When o usuário preenche o campo "Nome" com "Jon"
And não preenche o campo "Senha"
And o usuário "Jon" clica no botão "Cadastrar"
Then o sistema retorna a mensagem "Senha é obrigatória"
And o usuário "Jon" continua na página "Cadastro"

Scenario: O usuário não pode logar com sucesso
Given o usuário "Lin" deseja logar a sua conta
And existe esse usuário no sistema
When o usuário preenche o campo "Nome" com "Lin"
And o campo "Senha" com "1234"
And o usuário "Lin" clica no botão "Entrar"
Then o sistema retorna mensagem "Senha incorreta"
And o usuário "Lin" é redirecionado para a página "Login"

