# Buffs & Debuffs

## Objetivo

Os Buffs e Debuffs representam o estado atual do jogador.

Eles não existem para punir ou recompensar arbitrariamente, mas para refletir a condição real do jogador ao longo do tempo.

O objetivo é aumentar a imersão e incentivar consistência.

---

# Estrutura de um Estado

Todo Estado possui:

- Nome
- Tipo (Buff ou Debuff)
- Categoria afetada
- Condição de Entrada
- Condição de Saída
- Persistência
- Efeitos
- Prioridade

---

# Persistência

Todo Estado permanece ativo durante um período mínimo.

Mesmo que a condição de origem desapareça imediatamente, o Estado continua ativo até que sua condição de remoção seja satisfeita.

Isso evita mudanças instantâneas e aproxima o sistema do comportamento da vida real.

---

# Remoção

Um Estado nunca é removido automaticamente apenas por uma única ação positiva.

O jogador precisa demonstrar consistência para recuperar sua condição anterior.

Exemplo:

Enferrujado

Entrada:
14 dias sem treinar.

Saída:
3 dias consecutivos treinando.

Persistência:
3 dias.


## 🔗 Referências ajustadas

### Sistemas base

- [[Sistema de Progressão]]

### Conceitos

- [[Categorias de Missões]]