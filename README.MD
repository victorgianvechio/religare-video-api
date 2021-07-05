# Religare Vídeo API

Verificar as versões abaixo. Tanto para ambiente de desenvolvimento quanto produção:

-   **node -v** - 12.16.3
-   **npm -v** - 6.14.4
-   **yarn -v** - 1.22.5

Recomendado instalar e utilizar o **Yarn**.

# Comandos

Abaixo lista de comandos disponíveis na aplicação

## Dev

**yarn dev**

starta a aplicação em modo de desenvolvimento com live reload (códigos da pasta **src**)

## Start

**yarn start**

starta a aplicação a partir da pasta **build**, permitindo testar a aplicação como se estivesse em produção.

## Env

**yarn env**

gera arquivo .env

obs: também gera uma **APP_SECRET** de 128 bytes que é utilizado para descriptografar o token. Sempre que o **APP_SECRET** for trocado deve gerar um novo token.

## Token

**yarn token [days]**

gera o **Bearer Token** que deve ser passado no header das requisições feitas para a API. É utilizado o **APP_SECRET** do arquivo .env para criar o token.

Pode passar como parametro o número de dias. Se nenhum parâmetro for passado o token não vai ira ter validade.

Ex:
-    **yarn token 7d** - gera um token que expira em 7 dias.
-    **yarn token 30d** - gera um token que expira em 30 dias.
-    **yarn token** - gera um token sem data de validade.

## Build

**yarn build**

gera o build convertido para es5 utilizado pelo servidor.

**ATENÇÃO**

Apenas a pasta **src** é gerada no build. Abaixo a lista de arquivos e pastas obrigatório na raiz da aplicação do **IIS**:

-    **build** - aplicação
-    **node_modules** - dependências
-    **public/temp** - diretório de arquivos temporários
-    **.env** - arquivo de configuração da aplicação
-    **package.json** - arquivo de configuração do projeto
-    **README.MD** - Arquivo explicativo
-    **web.config** - arquivo de configuração do aplicativo no IIS
-    **yarn.lock** - arquivo de segurança das dependências

# Servidor - IIS

Necessário instalar o **IIS Node** e também o **NVM** (Node Version Manager)

## Commandos NVM

-   **nvm list** - lista as versões do node instaladas
-   **nvm install v12.16.3** - instala a versão do node utilizada na API
-   **nvm use 12.16.3** - seta a versão a ser utilizada

**dar permissão para o IIS acessar a pasta do NVM na versão 12.16.3**

**dar permissão para o IIS acessar a pasta da aplicação**

# Logs

Os logs são gerados dentro da pasta **build/iinode**