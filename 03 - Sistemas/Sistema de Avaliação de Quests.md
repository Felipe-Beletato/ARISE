# 📋 Sistema de Avaliação de Quests

## Objetivo

O Sistema de Avaliação de Quests é responsável por determinar o valor de cada Quest dentro do ARISE.

Seu objetivo é transformar atividades do mundo real em desafios equilibrados, atribuindo automaticamente uma dificuldade, um Rank e um XP Base de acordo com critérios padronizados.

Esse sistema busca garantir justiça, consistência e impedir que tarefas semelhantes recebam recompensas desproporcionais.
## Filosofia

O valor de uma Quest não deve ser definido apenas pelo tempo necessário para concluí-la.

Atividades curtas podem gerar grande impacto na vida do jogador, enquanto atividades longas podem exigir pouco esforço ou oferecer pouco progresso.

Por esse motivo, o ARISE utiliza múltiplos critérios para avaliar cada Quest.

A recompensa deve refletir o valor real da atividade, e não apenas sua duração.
Jogador cria Quest

↓

Sistema coleta informações

↓

Calcula Pontuação

↓

Define Dificuldade

↓

Define XP Base

↓

Quest é criada
## Critérios
## Tempo

Representa o tempo médio necessário para concluir a atividade.

O objetivo desse critério é estimar o investimento temporal exigido pela Quest.
## Esforço

Representa o nível de energia física ou mental necessário para concluir a atividade.

Esse critério mede o desgaste provocado pela tarefa.
## Complexidade

Representa o conhecimento, planejamento e concentração exigidos pela Quest.
## Impacto

Representa o quanto a atividade aproxima o jogador dos seus objetivos de longo prazo.
## Frequência

Representa com que frequência aquela Quest pode ser realizada.

Quanto mais recorrente, menor tende a ser sua recompensa individual.
## Cálculo da Pontuação
|Critério|Valor|
|---|--:|
|Tempo|1–5|
|Esforço|1–5|
|Complexidade|1–5|
|Impacto|1–5|
|Frequência|1–5|
Pontuação máxima = 25

## Conversão

| Pontos | Dificuldade |
| -----: | ----------- |
|    5–8 | Muito Fácil |
|   9–12 | Fácil       |
|  13–16 | Média       |
|  17–20 | Difícil     |
|  21–25 | Épica       |
## Determinação da Dificuldade

Após o cálculo da pontuação total da Quest, o sistema classifica a atividade em uma das seguintes dificuldades:

- Muito Fácil
- Fácil
- Média
- Difícil
- Épica

## Determinação do XP Base

Após a definição da dificuldade, o sistema atribui um valor de XP Base correspondente.
## Tabela inicial

```
Muito Fácil → 8 XP
Fácil       → 15 XP
Média       → 25 XP
Difícil     → 40 XP
Épica       → 70 XP

```

XP Base
↓
Afinidade (+/-)
Momentum (+/-)
Buffs/Debuffs
Contratos
↓
XP Final

## Observações
## Calibração

O Sistema de Avaliação permite pequenos ajustes manuais quando uma atividade específica não puder ser representada adequadamente pelos critérios padrão.

Esses ajustes devem ser utilizados apenas em casos excepcionais, preservando a consistência do sistema.

## Exemplo prático

### Quest: “Treinar academia”

Avaliação:

- Tempo: 4
- Esforço: 5
- Complexidade: 2
- Impacto: 5
- Frequência: 3

→ Pontuação: 19

→ Dificuldade: Difícil

→ XP Base: 40 XP

---

Depois:

- Momentum alto: +10%
- Afinidade alta: +15%

→ XP Final ≈ 50–52 XP

Nenhuma Quest isolada deve ser capaz de gerar progressão significativa sozinha.

O progresso deve vir da consistência, não de tarefas individuais de alto valor.

## Fluxo Final
Quest criada

↓

Avaliação (5 critérios)

↓

Pontuação (1–25)

↓

Dificuldade

↓

XP Base

↓

Modificadores

↓

XP Final

↓

Distribuição (Geral / Categoria)

↓

Afinidade / Momentum / Status



## 🔗 Referências ajustadas

### Sistemas base

- [[Sistema de Quests]]
- [[Sistema de Balanceamento de XP]]
- [[Sistema de Recompensas]]

### Conceitos

- [[Categorias de Missões]]

### Arquitetura (único permitido)

- [[Fluxo de Dados]]