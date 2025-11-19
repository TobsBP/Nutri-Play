# 🥗 Nutri Play: Quiz de Nutrição

Este é um jogo de quiz interativo criado para testar seus conhecimentos sobre nutrição, vitaminas e minerais de uma forma divertida.

## 🚀 Como Jogar

1.  **Abra o arquivo `index.html`** em qualquer navegador de internet.
2.  **Escolha a dificuldade:**
    *   **Fácil:** 5 vidas, 20 segundos por questão, objetivo de 3 acertos.
    *   **Normal:** 3 vidas, 15 segundos por questão, objetivo de 4 acertos.
    *   **Difícil:** 2 vidas, 10 segundos por questão, objetivo de 5 acertos.
3.  **Clique em "Começar Quiz"**.
4.  Responda às perguntas antes que o tempo acabe.
5.  Acerte o número de questões do seu objetivo para vencer!

## ✨ Funcionalidades

*   **Perguntas Aleatórias:** As perguntas são embaralhadas a cada novo jogo.
*   **Níveis de Dificuldade:** Três modos de jogo que alteram vidas, tempo e objetivo.
*   **Feedback Instantâneo:** Veja se sua resposta está certa ou errada na hora.
*   **Sistema de Vidas e Pontuação:** Com bônus por responder rapidamente.
*   **Interface Amigável:** Design limpo e intuitivo.

---

## ⚙️ Explicação do Código (`script.js`)

Aqui está um detalhamento de cada função principal do jogo:

#### 1.  `updateStartScreenInfo()`
*   **O que faz:** Atualiza as informações na tela inicial (vidas, tempo por questão e objetivo) sempre que o jogador troca o nível de dificuldade.

#### 2.  `shuffle(array)`
*   **O que faz:** Embaralha a ordem das perguntas usando o algoritmo "Fisher-Yates" para garantir que o jogo seja diferente a cada partida.

#### 3.  `startGame()`
*   **O que faz:** Inicia o jogo. Ela lê a dificuldade selecionada, redefine o estado do jogo (pontuação, vidas, etc.), embaralha as perguntas, e troca da tela inicial para a tela de jogo, carregando a primeira pergunta.

#### 4.  `loadQuestion()`
*   **O que faz:** Carrega a pergunta e as opções de resposta na tela. Se não houver mais perguntas, o jogo termina com vitória.

#### 5.  `startTimer()`
*   **O que faz:** Inicia e gerencia o cronômetro para cada pergunta, com base na dificuldade escolhida.

#### 6.  `updateTimerUI()`
*   **O que faz:** Atualiza a barra de tempo na tela. A barra diminui visualmente e fica vermelha quando o tempo está acabando.

#### 7.  `checkAnswer(selectedIndex, btn)`
*   **O que faz:** Verifica a resposta do jogador.
    *   **Se correta:** Pinta o botão de verde, aumenta a pontuação e avança para a próxima pergunta.
    *   **Se incorreta:** Pinta o botão de vermelho, mostra a resposta certa e chama a função `loseLife()`.

#### 8.  `handleTimeOut()`
*   **O que faz:** É acionada quando o tempo acaba. Mostra a resposta correta e o jogador perde uma vida.

#### 9.  `loseLife()`
*   **O que faz:** Reduz uma vida do jogador. Se as vidas chegarem a zero, o jogo termina. Caso contrário, o jogo avança para a próxima pergunta.

#### 10. `updateLivesUI()`
*   **O que faz:** Atualiza a exibição de vidas (corações) na tela durante o jogo.

#### 11. `nextQuestion()`
*   **O que faz:** Prepara o jogo para a próxima pergunta e verifica se o objetivo de acertos foi atingido para declarar a vitória.

#### 12. `endGame(completed)`
*   **O que faz:** Finaliza o jogo, mostrando a tela de "Fim de Jogo" com a pontuação final e uma mensagem de vitória (🏆) ou derrota (🍎).
