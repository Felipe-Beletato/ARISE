# Sistema de Quests

## O que é uma Quest?

Uma Quest representa um objetivo do mundo real transformado em uma missão dentro do ARISE.

Cada Quest incentiva o jogador a desenvolver hábitos, concluir tarefas e evoluir como pessoa.

Ao completar uma Quest, o jogador recebe recompensas dentro do aplicativo que representam seu progresso na vida real.

---

## Objetivo

As Quests existem para tornar atividades do cotidiano mais motivadoras através da gamificação.

O objetivo não é controlar o jogador, mas ajudá-lo a construir disciplina de forma divertida e consistente.

---

## Filosofia

Toda Quest deve incentivar um comportamento positivo.

O progresso dentro do ARISE deve representar progresso real.

O sistema nunca deve incentivar culpa excessiva ou punir o jogador de maneira humilhante.

---

## Características

Toda Quest possui:

- Nome
- Descrição
- Categoria
- Recorrência
- Dificuldade
- Recompensa em XP
- Prazo
- Método de validação
- Status

Cada característica possui sua própria documentação para evitar responsabilidades duplicadas.

---

## Ciclo de Vida

Uma Quest percorre diferentes estados durante sua existência.

Disponível

↓

Em andamento

↓

Concluída

ou

↓

Expirada

ou

↓

Abandonada

---

## Status

### Disponível

A Quest está pronta para ser iniciada.

### Em andamento

O jogador iniciou a Quest e ela está sendo realizada.

### Concluída

A Quest foi validada e as recompensas foram concedidas.

### Expirada

O prazo terminou antes da conclusão.

### Abandonada

A Quest foi encerrada pelo próprio jogador antes da conclusão.

---

## Escopo do MVP

O MVP contempla apenas o funcionamento básico das Quests.

Funcionalidades como desafios especiais, missões cooperativas, cadeias de missões e eventos serão documentadas futuramente.

---

## 🔗 Referências ajustadas

### Sistemas base (essencial apenas)

- [[Sistema de Avaliação de Quests]]
- [[Sistema de Progressão]]

### Conceitos

- [[Categorias de Missões]]

### Arquitetura (único permitido)

- [[Fluxo de Dados]]

## Decisões Tomadas

- As Quests representam ações do mundo real.
- O progresso virtual deve representar progresso real.
- O status "Falhou" não será utilizado.
- O MVP não inclui missões cooperativas ou cadeias de missões.