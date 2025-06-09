# Global Flood Guard - Frontend
 
Este é o repositório do frontend do projeto Global Flood Guard, desenvolvido com Next.js. Este aplicativo visa fornecer uma interface intuitiva para monitorar e gerenciar informações relacionadas a inundações, exibindo dados de sensores, alertas e histórico.
 
## Visão Geral do Projeto
 
O Global Flood Guard é uma solução abrangente para o monitoramento de enchentes, dividida em duas partes principais: uma API de backend (desenvolvida em Quarkus) e este frontend (desenvolvido em Next.js). O frontend é responsável por:
 
*   Exibir dados em tempo real e históricos de níveis de água.
*   Apresentar alertas de enchentes.
*   Permitir a configuração de preferências do usuário.
*   Fornecer uma interface de usuário amigável para interação com o sistema.
*   
## Funcionalidades
 
*   **Visualização de Alertas:** Exibe alertas de enchentes em tempo real.
*   **Histórico de Dados:** Permite consultar o histórico de níveis de água e eventos de enchente.
*   **Configurações do Usuário:** Gerenciamento de preferências e informações do usuário.
*   **Autenticação:** Sistema de login e cadastro de usuários.
*   **Mapa Interativo:** (A ser confirmado após análise mais profunda do código) Possível visualização de dados em um mapa.

*   ## Tecnologias Utilizadas
 
O projeto frontend foi construído utilizando as seguintes tecnologias:
 
*   **Next.js 15.3.3:** Framework React para construção de aplicações web com renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).
*   **React 19.0.0:** Biblioteca JavaScript para construção de interfaces de usuário.
*   **TypeScript 5:** Superset do JavaScript que adiciona tipagem estática.
*   **Tailwind CSS 4:** Framework CSS utilitário para estilização rápida e responsiva.
*   **Leaflet 1.9.4 & React-Leaflet 5.0.0:** Bibliotecas para criação de mapas interativos.

*   ## Configuração do Ambiente
 
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

