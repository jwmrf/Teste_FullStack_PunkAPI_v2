## Teste FullStack Garupa

Candidato: José Wilson Madruga Rezende Filho

## Configuração Inicial

Configurei um package.json na pasta raiz para que seja possível instalar os pacotes do front e back com um único comando.
Inicialmente será necessário dar npm install na pasta raiz para instalar a biblioteca concurrently que permite rodar diferentes comandos de uma só vez.
```bash
$ npm run install
```
Após isso o comando npm run fullinstall pode ser realizado, instalando todas depedências de front e back.
```bash
$ npm run fullinstall
```
Para rodar o front e o back ao mesmo tempo, após a instalação basta digitar:
```bash
$ npm run app
```
E em alguns segundos ambos estarão iniciados.

Nos commits eu utilizei o padrão, exemplo: Ajuste tela login [FRONT] #develop
Para especificar [front ou back] e #nome_da_branch, para caso estivesse numa situação de utilizar Jira com Bitbucket ele detectar automaticamente os commits nas tasks do Jira.

## Tecnologias Utilizadas

## Back

No back optei por utilizar o framework NestJS, estou familiarizado com o Loopback, ambos são frameworks bem completos e permitem configurações totais da aplicação, porém devido a baixa manutenção do Loopback nos últimos anos, optei pelo Nest.

Caminho para alterar arquivo do Postgres: Teste_FullStack_PunkAPI_v2\back\src\config\database\postgres\connect.ts
Porta padrão: 3000
Swagger da API: http://localhost:3000/api
Comando de teste: npm run test (verifica se a punkapi está no ar)
Talvez o vscode acuse a biblioteca bcrypt de não encontrada, porém é apenas um erro de leitura do vscode, o app funciona normalmente.

Principais Bibliotecas Utilizadas:

- `@nestjs/typeorm` Para conexão com o banco de dados e funções nativas.
- `pg` Para possibilitar a conexão a um banco postgres.
- `@nestjs/swagger` Possibilitando no endereço localhost:3000/api acessarmos todas rotas da api de maneira dinâmica.
- `bcrypt` Para criptografia de senha dos usuários, optei pelo bcrypt por sem muito superior a criptografias comuns como o MD5.
- `class-validator` Para validações de tipos.
- `axios` para fazer requisições na PunkApi

Rotas:

- `@Get /user` Rota responsável por listar todos usuários. (Necessita Autenticação)
- `@Get /user/{id}` Rota responsável por buscar um usuário, optei por utilizar o email como identificador. (Necessita Autenticação)
- `@Patch /user/{id}` Rota responsável por buscar atualizar as informações do usuário. (Necessita Autenticação)
- `@Delete /user` Rota responsável por remover usuário. (Necessita Autenticação)
- `@Post /user` Rota responsável por criar um novo usuário, campos: email, nome e senha. O email é utilizado com a senha para login. 
- `@Post /user/login` Rota responsável pelo login de usuário, retorna um jsonwebtoken para autenticação nas rotas.
- `@Get /beer` Retorna as cervejas da punkApi, tendo como campos opcionais Page e Name(filtrar cervejas pelo nome) o máximo de retorno por requisição é de 8 cervejas. (Necessita Autenticação)
- `@Get /beer/verify` Rota usada para o comando de teste que verifica se a PunkApi está funcionando. (Necessita Autenticação)

## Front

No front utilizei o framework Vue.js na sua 3º versão(mais recente) e com typescript.

Porta padrão: 8000
Arquivo de apontamento das rotas: Teste_FullStack_PunkAPI_v2\front\src\services\web.ts
Durante o desenvolvimento me atentei ao uso em desktop como em mobile para garantir responsividade.
É possível realizar o build da aplicação com o comando 'npm run build' e os arquivos gerados estarão na pasta /dist.

Principais Bibliotecas Utilizadas:

- `vuetify` Biblioteca principal, responsável por montar o layout no Vue.js.
- `pinia` Biblioteca para persistir os dados de usuário e JWT no navegador, evitando que a info seja perdida ao atualizar a página.
- `axios` para fazer requisições no backend

Features:

- `Tela de login` Tela inicial do front e obrigatória, mesmo com a url não é possível acessar outra telas sem login.
- `Tela de registro` Na tela de login há opção de criar nova conta de usuário.
- `Dashboard` Tela principal após login feito, nela é possível visualizar as cervejas, clicar no + para ver mais detalhes sobre, trocar de página ou filtrar por nome da cerveja.
- `Logout` Na parte superior da página existe o botão de 'Usuário' que permite verificar o name de quem está logado e fazer logout caso queira.

