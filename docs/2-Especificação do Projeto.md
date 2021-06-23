# Especificações do Projeto

A descrição dos problemas e ideias a serem tratados no projeto partiu dos problemas apresentados por meio de respostas do questionário formulado pelos membros do grupo. Apresentamos alguns desses pontos por meio de personas e histórias.

## Personas

Rafael Lima tem 25 anos, e tem como hobby aos finais de semana jogar uma “pelada” com seus amigos na quadra do bairro. Porém, sempre que vai jogar enfrenta o desafio de separar as equipes de forma que os jogadores com menos habilidades não fiquem todos em apenas um grupo. Pensando nisso, Rafael teve a ideia de encontrar um site que facilitasse esse processo evitando conflitos e dispondo de mais tempo para as partidas. 

Augusto Alves tem 35 anos e gosta muito de futebol.  Sua semana é bem atarefada, além disso, ele tem três filhos. Seu único dia disponível para jogar futebol é aos sábados, porém seu tempo é curto. Ele tem aproximadamente uma hora para jogar, pois tem que cuidar dos seus filhos. Uma de suas reclamações é que a divisão de times demanda de 10 a 15 minutos, reduzindo o tempo que ele tem para jogar. Por isso, ele procura um site para agilizar esse processo.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ...        `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                                         |
|--------------------|-------------------------------------------|----------------------------------------------------------------|
|Rafael Lima         | Separar os times de maneira equilibrada de acordo com o nível tecnico.  | Para partidas competitivas e justas.                           |
|Augusto Alves       | Economia de tempo.                        | Gastar menos tempo dividindo equipes e mais tempo nos jogos.   |
|Rafael Lima         | Verificar os times formados.              | Saber qual time estou e quais são meus adversários.            |
|Augusto Alves       | Criar um perfil.         | Poder salvar as partidas, aproveitando os cadastros inseridos e fazer alterações.                               |
|Augusto Alves       | Opção de sortear novamente as equipes.    | Evitar ter que inserir os nomes de todos jogadores novamente.       |
|Rafael Lima         | Entrar sem cadastro.| Agilizar o sorteio.|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                                                                                 | Prioridade |
|------|--------------------------------------------------------------------------------------------------------|------------|
|RF-001| O site deve permitir o cadastro do número total de jogadores e a quantidade de times. |    ALTA    | 
|RF-002| O site deve permitir o cadastro do usuário.                                                            |    MÉDIA   |
|RF-003| O site deve contar com controle de acesso.                                                             |    BAIXA   |
|RF-004| O site deve permitir o usuário editar o cadastro.                                       |    BAIXA   |
|RF-005| O site deve permitir a verificação do nível técnico dos jogadores.                                     |    ALTA    |
|RF-006| O site deve fornecer uma funcionalidade para sortear os jogadores.                                     |    ALTA    |
|RF-007| O site deve permitir aos jogadores visualizar qual time ele está inserido e sortear novamente.                             |    ALTA    |
|RF-008| O site deve informar quais jogadores estão confirmados para a partida.                                 |    MÉDIA   |
|RF-009| O site deve permitir cadastrar e visualizar o histórico das partidas.                                              |    BAIXA   |
|RF-010| O site deve permitir que o usuário faça o sorteio sem o cadastro.                                              |    BAIXA   |


### Requisitos não Funcionais

|ID     | Descrição do Requisito                                                 |Prioridade |
|-------|------------------------------------------------------------------------|-----------|
|RNF-001| O site funciona somente com internet.                                  |   ALTA    | 
|RNF-002| O site deve ser compatível com o Google Chrome, Firefox, Edge e Safari |   MÉDIA   | 
|RNF-003| O site permitirá a visualização em um celular de forma adequada.       |   ALTA    | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID   | Restrição                                                                              |
|-----|----------------------------------------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no dia 22/06/2021 não podendo exceder a data estipulada. |
|RE-02| O site deverá ser moldado segundo as tecnologias básicas da Web no Frontend.           |



