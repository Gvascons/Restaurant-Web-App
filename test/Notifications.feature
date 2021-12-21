Scenario: Um novo pedido é notificado
Given eu estou na página "Início" e logado como o usuário "João"
And um pedido novo é recebido pelo sistema
And o sistema exibe uma mensagem de "Novo pedido!"
When clico no botão "ok" da notificação
Then continuo na página Início

Scenario: Um novo pedido é registrado na aba de Notificações
Given eu estou na página "Notificações" e logado como o usuário "João"
And o pedido "Pedido 5 -Pizza de Calabresa" é recebido pelo sistema
And o sistema exibe uma mensagem de "Novo pedido!"
When clico no botão "ok" da notificação
Then a página "Notificações" é atualizada
And o pedido "Pedido 5 -Pizza de Calabresa" é apresentado no topo da lista de notificações