## Teste FullStack Garupa

Candidato: José Wilson Madruga Rezende Filho

## Configuração Inicial

Configurei um package.json na pasta raiz para que seja possível instalar os pacotes do front e back com um único comando.
```bash
$ npm run fullinstall
```
Para rodar o front e o back ao mesmo tempo, após a instalação basta digitar:
```bash
$ npm run app
```
E em alguns segundos ambos estarão iniciados.

## Tecnologias Utilizadas

## Backend

No back optei por utilizar o framework NestJS, estou familiarizado com o Loopback, ambos são frameworks bem completos e permitem configurações totais da aplicação, porém devido a baixa manutenção do Loopback nos últimos anos, optei pelo Nest.

Principais Bibliotecas Utilizadas:

- `@nestjs/typeorm` Para conexão com o banco de dados e funções nativas.
- `pg` Para possibilitar a conexão a um banco postgres.
- `@nestjs/swagger` Possibilitando no endereço localhost:3000/api acessarmos todas rotas da api de maneira dinâmica.
- `bcrypt` Para criptografia de senha dos usuários, optei pelo bcrypt por sem muito superior a criptografias comuns como o MD5.
- `class-validator` Para validações de tipos.
- `axios` para fazer requisições na PunkApi

Rotas:

- `addTag`
- `addBearerAuth`
- `addOAuth2`
- `setContactEmail` is now `setContact`
- `setHost` has been removed
- `setSchemes` has been removed (use the `addServer` instead, e.g., `addServer('http://')`)

The following methods have been added:

- `addServer`
- `addApiKey`
- `addBasicAuth`
- `addSecurity`
- `addSecurityRequirements`