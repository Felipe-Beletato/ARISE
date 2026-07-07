# Sistema de XP

## Objetivo

O Sistema de XP é responsável por consolidar e distribuir toda a experiência gerada no ARISE a partir da conclusão de Quests.

Ele atua como a camada final do cálculo de progressão do jogador, garantindo que todos os sistemas anteriores sejam corretamente refletidos em níveis e evolução.

---

## Filosofia

O XP não é uma recompensa isolada.

Ele é a representação numérica da evolução do jogador dentro do sistema.

Nenhuma fonte de XP existe sozinha — toda experiência é derivada de uma Quest avaliada.

---

## Função principal

O Sistema de XP não calcula dificuldade, não avalia Quests e não define recompensas.

Ele apenas executa a distribuição do XP já calculado.

Suas responsabilidades são:

- Receber XP Final
- Aplicar distribuição entre tipos de progresso
- Atualizar XP Geral
- Atualizar XP por Categoria
- Encaminhar dados para o Sistema de Progressão

---

## Distribuição de XP

Toda experiência gerada é dividida em:

- XP Geral (progressão global do jogador)
- XP de Categoria (especialização em áreas específicas)

A proporção padrão é definida em [[Sistema de Balanceamento de XP]].

---

## Fluxo simplificado

```
Quest concluída
→ 
Sistema de Avaliação de Quests calcula XP Base
→ 
Aplicação de modificadores (Momentum, Afinidade, Buffs, Debuffs, Contratos)
→ 
XP Final gerado
→ 
Sistema de XP recebe valor
→ 
Distribuição:
   - XP Geral
   - XP de Categoria
→ 
Atualização do progresso do jogador
→ 
Envio para Sistema de Progressão
```

## 🔗 Relações

### Depende de:

- [[Sistema de Avaliação de Quests]]
- [[Sistema de Balanceamento de XP]]

### Alimenta:

- [[Sistema de Progressão]]
- [[Categorias de Missões]]