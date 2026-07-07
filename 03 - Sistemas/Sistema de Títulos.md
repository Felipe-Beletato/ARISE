# 🏷️ Titles

## Objetivo

Os Títulos representam a identidade atual do jogador dentro do ARISE.

Eles não medem habilidade, experiência ou nível, mas refletem o comportamento recente e a consistência demonstrada pelo jogador.

São uma representação narrativa do estado atual do personagem, aumentando a imersão e permitindo que a evolução seja percebida além dos números.

---

# Filosofia

Um jogador não é definido por um único dia.

Da mesma forma, também não se torna disciplinado apenas por concluir uma Quest.

Os títulos são conquistados através de padrões de comportamento e permanecem até que o jogador demonstre uma mudança consistente.

---

# Funcionamento

Os títulos são calculados automaticamente a partir de diversos sistemas do ARISE.

Entre eles:

- Momentum
- Afinidade
- Buffs
- Debuffs
- Consistência
- Histórico recente
- Conclusão de Quests

O jogador nunca escolhe seu próprio título.

Ele é concedido pelo sistema.

---

# Persistência

Assim como Buffs e Debuffs, os títulos possuem persistência.

Um título nunca muda imediatamente após um único dia.

Para que um título seja alterado, o jogador precisa manter um novo padrão de comportamento durante um período mínimo.

---

# Estrutura

Todo título possui:

- Nome
- Descrição
- Condições de Entrada
- Condições de Saída
- Persistência
- Prioridade

---

# Prioridade

Caso mais de um título possa ser aplicado simultaneamente, o sistema utilizará aquele com maior prioridade.

Exemplo:

Instável possui prioridade maior que Disciplinado.

Isso evita que títulos positivos ocultem estados críticos do jogador.

---

# Exemplos

## 🌑 Instável

Descrição

O jogador está enfrentando dificuldades para manter consistência.

Possíveis condições:

- Momentum baixo
- Múltiplos Debuffs ativos
- Muitas Quests falhadas

---

## 🔥 Disciplinado

Descrição

O jogador mantém boa consistência e demonstra evolução contínua.

Possíveis condições:

- Momentum elevado
- Poucos Debuffs
- Alta Afinidade

---

## ⚔️ Inabalável

Descrição

O jogador mantém um excelente padrão de disciplina por um longo período.

Condições:

- Grande sequência de Quests concluídas
- Alta Afinidade
- Ausência de Debuffs relevantes

---

## 🌅 Renascido

Descrição

Concedido ao jogador que supera um período prolongado de baixa consistência e retorna ao progresso.

Representa recuperação e perseverança.

---

# Observações

Os títulos possuem apenas função narrativa.

Eles não concedem bônus ou penalidades diretamente.

Qualquer efeito mecânico deve ser implementado através dos sistemas de Buffs, Debuffs ou Afinidade.


## 🔗 Referências ajustadas

### Sistemas base

- [[Sistema de Momentum]]
- [[Sistema de Progressão]]