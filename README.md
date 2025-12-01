# Tela de Cancelamento - EngPlay

Este projeto consiste no desenvolvimento de um fluxo interativo de telas para o processo de cancelamento de assinatura da plataforma **EngPlay**. O objetivo principal é gerenciar a retenção de usuários através de uma experiência estratégica que não apenas permite o cancelamento, mas também coleta feedback valioso e oferece incentivos personalizados para encorajar a permanência do assinante.

## Contexto e MVP

*   **O Problema:** A Engplay enfrenta atualmente uma taxa de *churn* de 9,72%, um índice considerado acima da média ideal. Além disso, identificou-se um distanciamento em relação aos usuários, dificultando o entendimento de suas insatisfações.
*   **A Solução:** Visando reduzir esse percentual, este MVP propõe uma interface focada na reconciliação com o cliente. A estratégia consiste em reintegrar o usuário de maneira efetiva no momento do cancelamento, oferecendo recursos e incentivos direcionados para mantê-lo interessado e ativo na plataforma.

## Sobre o Projeto

O fluxo foi desenhado para minimizar o *churn* (taxa de cancelamento), guiando o usuário por etapas que reforçam o valor da plataforma e oferecem alternativas ao cancelamento total. A navegação ocorre da seguinte maneira:

1.  **Tela de Aviso (Perda de Acesso):** A primeira etapa (`index.html`) alerta o usuário de forma visual sobre os benefícios que serão perdidos (cursos em andamento, certificados, acesso à comunidade) caso prossiga.
2.  **Coleta de Feedback:** A segunda tela (`tela2.html`) busca entender o motivo da saída (Orçamento, Qualidade ou Falta de Tempo), fornecendo dados importantes para a equipe de produto.
3.  **Oferta de Retenção:** Antes da confirmação final, a terceira tela (`tela3.html`) apresenta uma oferta especial (ex: descontos ou pausas) como uma última tentativa de reter o cliente.
4.  **Conclusão:** O fluxo se encerra com telas de feedback positivo (`tela4.html` se aceitou a oferta) ou de despedida (`tela5.html` se confirmou o cancelamento).

##  Como Usar

### Acessar Online
Acesse o projeto diretamente pelo GitHub Pages (se disponível) ou visualize o código-fonte no repositório:
 [https://github.com/tepp12/tela-de-cancelamento](https://github.com/tepp12/tela-de-cancelamento)

### Clonar o Repositório
Para rodar o projeto localmente, siga os passos abaixo:

1.  **Copie o link do repositório:**
    -   Acesse [https://github.com/tepp12/tela-de-cancelamento](https://github.com/tepp12/tela-de-cancelamento)
    -   Clique no botão verde **"<> Code"**
    -   Copie a URL HTTPS: `https://github.com/tepp12/tela-de-cancelamento.git`

2.  **Abra o terminal** (Git Bash, CMD ou PowerShell) e execute:
    ```bash
    git clone https://github.com/tepp12/tela-de-cancelamento.git
    ```

3.  **Acesse a pasta do projeto:**
    ```bash
    cd tela-de-cancelamento
    ```

4.  **Abra o arquivo `index.html`** no seu navegador para visualizar o projeto.

---

## Tecnologias Utilizadas

*   **HTML5:** Estruturação semântica das páginas.
*   **CSS3:** Estilização responsiva e identidade visual alinhada à marca EngPlay.
*   **JavaScript:** Lógica de navegação e interatividade dos elementos.
*   **AOS (Animate On Scroll):** Biblioteca para animações de entrada dos elementos na tela inicial.

---

## Equipe e Contribuições

Abaixo, a lista dos 9 participantes do projeto e suas respectivas responsabilidades no desenvolvimento:

1.  **Anna Sophia**: Responsável por: Referências de Pesquisa, Slides de Apresentação, Diagrama UML e Código da tela 3.
2.  **Danilo Salgado**:  Responsável por: Problema, Personas, Solução e Código da tela 6.
3.  **Guilherme Ribeiro**: Responsável por: Diagrama de fluxo de telas, Protótipo Navegável, Backlog, Diagrama UML e Código da tela 7.
4.  **João Gabriel Dias**: Responsável por: Mapa de empatia, Personas, Diagrama UML e tela 5.
5.  **Larissa Castro**: Responsável por: Referências de Pesquisa, Análise de concorrentes, Slides de Apresentação e tela 4.
6.  **Lucas Rocha**: Responsável por: Personas, Jornadas, Protótipo Navegável, Definição de stacks, mvp, diagrama UML e tela 2.
7.  **Mariana Menes**:  Responsável por: Problema, Referencias de Pesquisa, Slides de Apresentação, Diagrama UML e tela 3.
8.  **Ronaldo Barbosa**: Responsável por: Diagrama de fluxo de telas, Protótipo Navegável e tela 2.
9.  **Yan Francisco**: Responsável por: Backlog.
