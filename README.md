# Global Flood Guard - Frontend
 
Este repositório contém uma aplicação de exemplo desenvolvida com Quarkus, focada em monitoramento de níveis de água e alertas de enchentes. A aplicação visa fornecer uma API robusta para gerenciar dados relacionados a inundações, usuários, configurações e alertas, utilizando um banco de dados para persistência.


*Renato Silva Alexandre Bezerra | RM: 560928*

*Felipe Carlos Abreu | RM: 559476*

*Jhonatan Quispe Torrez | RM: 560601*
 
## Visão Geral do Projeto
 
O Global Flood Guard é uma solução abrangente para o monitoramento de enchentes, dividida em duas partes principais: uma API de backend (desenvolvida em Quarkus) e este frontend (desenvolvido em Next.js). O frontend é responsável por:
 
*   Exibir dados em tempo real e históricos de níveis de água.
*   Apresentar alertas de enchentes.
*   Permitir a configuração de preferências do usuário.
*   Fornecer uma interface de usuário amigável para interação com o sistema.
  
## Funcionalidades
 
*   **Visualização de Alertas:** Exibe alertas de enchentes em tempo real.
*   **Histórico de Dados:** Permite consultar o histórico de níveis de água e eventos de enchente.
*   **Configurações do Usuário:** Gerenciamento de preferências e informações do usuário.
*   **Autenticação:** Sistema de login e cadastro de usuários.
*   **Mapa Interativo:** (A ser confirmado após análise mais profunda do código) Possível visualização de dados em um mapa.

## Tecnologias Utilizadas
 
O projeto frontend foi construído utilizando as seguintes tecnologias:
 
*   **Next.js 15.3.3:** Framework React para construção de aplicações web com renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).
*   **React 19.0.0:** Biblioteca JavaScript para construção de interfaces de usuário.
*   **TypeScript 5:** Superset do JavaScript que adiciona tipagem estática.
*   **Tailwind CSS 4:** Framework CSS utilitário para estilização rápida e responsiva.
*   **Leaflet 1.9.4 & React-Leaflet 5.0.0:** Bibliotecas para criação de mapas interativos.

## Configuração do Ambiente
 
Para configurar e executar o projeto localmente, siga os passos abaixo:
 
### Pré-requisitos
 
Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
 
*   Node.js (versão 18 ou superior recomendada)
*   npm ou Yarn (gerenciador de pacotes)
 
### Instalação
 
1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO_FRONTEND>
    cd global-flood-guard-main/floodguard
    ```
 
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```
## Conexão com a API Backend
 
Este frontend se comunica com uma API de backend desenvolvida em Quarkus. Para que a comunicação funcione corretamente, é crucial que a URL da API esteja configurada corretamente.
 
### Configuração da URL da API
 
O arquivo responsável pela configuração da URL da API é `src/lib/api.ts`.
 
1.  **Abra o arquivo:** `src/lib/api.ts`
 
2.  **Localize a linha:**
    ```typescript
    const BASE = "/api";
    ```
 
3.  **Altere para a URL completa da sua API implantada no Railway:**
    ```typescript
    const BASE = "https://gs-api-floodguard-production.up.railway.app";
    ```

# Global Flood Guard - Frontend
 
Este é o repositório do frontend do projeto Global Flood Guard, desenvolvido com Next.js. Este aplicativo visa fornecer uma interface intuitiva para monitorar e gerenciar informações relacionadas a inundações, exibindo dados de sensores, alertas e histórico.
 
## Visão Geral do Projeto
 
O Global Flood Guard é uma solução abrangente para o monitoramento de enchentes, dividida em duas partes principais: uma API de backend (desenvolvida em Quarkus) e este frontend (desenvolvido em Next.js). O frontend é responsável por:
 
*   Exibir dados em tempo real e históricos de níveis de água.

*   Apresentar alertas de enchentes.

*   Permitir a configuração de preferências do usuário.

*   Fornecer uma interface de usuário amigável para interação com o sistema.
 
## Funcionalidades
 
*   **Visualização de Alertas:** Exibe alertas de enchentes em tempo real.

*   **Histórico de Dados:** Permite consultar o histórico de níveis de água e eventos de enchente.

*   **Configurações do Usuário:** Gerenciamento de preferências e informações do usuário.

*   **Autenticação:** Sistema de login e cadastro de usuários.

*   **Mapa Interativo:** (A ser confirmado após análise mais profunda do código) Possível visualização de dados em um mapa.
 
## Tecnologias Utilizadas
 
O projeto frontend foi construído utilizando as seguintes tecnologias:
 
*   **Next.js 15.3.3:** Framework React para construção de aplicações web com renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).

*   **React 19.0.0:** Biblioteca JavaScript para construção de interfaces de usuário.

*   **TypeScript 5:** Superset do JavaScript que adiciona tipagem estática.

*   **Tailwind CSS 4:** Framework CSS utilitário para estilização rápida e responsiva.

*   **Leaflet 1.9.4 & React-Leaflet 5.0.0:** Bibliotecas para criação de mapas interativos.
 
## Configuração do Ambiente
 
Para configurar e executar o projeto localmente, siga os passos abaixo:
 
### Pré-requisitos
 
Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
 
*   Node.js (versão 18 ou superior recomendada)

*   npm ou Yarn (gerenciador de pacotes)
 
### Instalação
 
1.  **Clone o repositório:**

    ```bash

    git clone <URL_DO_SEU_REPOSITORIO_FRONTEND>

    cd global-flood-guard-main/floodguard

    ```
 
2.  **Instale as dependências:**

    ```bash

    npm install

    # ou

    yarn install

    ```
 
## Conexão com a API Backend
 
Este frontend se comunica com uma API de backend desenvolvida em Quarkus. Para que a comunicação funcione corretamente, é crucial que a URL da API esteja configurada corretamente.
 
### Configuração da URL da API
 
O arquivo responsável pela configuração da URL da API é `src/lib/api.ts`.
 
1.  **Abra o arquivo:** `src/lib/api.ts`
 
2.  **Localize a linha:**

    ```typescript

    const BASE = "/api";

    ```
 
3.  **Altere para a URL completa da sua API implantada no Railway:**

    ```typescript

    const BASE = "https://gs-api-floodguard-production.up.railway.app";

    ```
 
### Configuração CORS na API (Backend)
 
Para evitar problemas de Cross-Origin Resource Sharing (CORS), certifique-se de que sua API Quarkus esteja configurada para permitir requisições do seu frontend. Se você estiver usando o `CorsFilter.java` fornecido anteriormente, a linha `Access-Control-Allow-Origin` deve ser configurada para permitir a origem do seu frontend (ou `*` para todas as origens durante o desenvolvimento).
 
## Executando o Projeto
 
Para iniciar o servidor de desenvolvimento do Next.js, execute o seguinte comando:
 
```bash

npm run dev

# ou

yarn dev

```
 
O aplicativo estará disponível em `http://localhost:3000` (ou outra porta, se configurado).
 
## Construindo para Produção
 
Para construir o aplicativo para produção, execute:
 
```bash

npm run build

# ou

yarn build

```
 
Isso criará uma pasta `.next` com os arquivos otimizados para deploy.
 
Para iniciar o aplicativo em modo de produção:
 
```bash

npm run start

# ou

yarn start

```
 
## Estrutura do Projeto
 
```

floodguard/

├── public/             # Arquivos estáticos (imagens, etc.)

├── src/

│   ├── app/            # Rotas e páginas do Next.js

│   │   ├── api/        # Rotas de API do Next.js (proxy, se usado)

│   │   ├── alertas/

│   │   ├── cadastro/

│   │   ├── configuracoes/

│   │   ├── historico/

│   │   ├── login/

│   │   ├── mapa/

│   │   ├── page.tsx    # Página inicial

│   │   └── layout.tsx  # Layout principal

│   ├── components/     # Componentes React reutilizáveis

│   │   ├── Botao/

│   │   ├── Cabecalho/

│   │   ├── ChatBot/

│   │   ├── Mapa/

│   │   ├── Menu/

│   │   └── Rodape/

│   └── lib/            # Funções utilitárias e de API

│       ├── api.ts      # Funções de comunicação com a API

│       └── usuariosDB.ts # (Possível simulação de dados ou utilitário)

├── .env.local          # Variáveis de ambiente (não versionado)

├── next.config.js      # Configurações do Next.js

├── package.json        # Dependências e scripts do projeto

├── tsconfig.json       # Configurações do TypeScript

└── README.md           # Este arquivo

```
 
## Contribuição
 
Se você deseja contribuir para este projeto, por favor, siga as diretrizes de contribuição (a serem adicionadas, se aplicável).
