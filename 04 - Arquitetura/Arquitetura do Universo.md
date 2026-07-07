## Objetivo

Este documento apresenta a visão macro da arquitetura conceitual do ARISE.

Ele descreve como os principais sistemas se relacionam e como a informação percorre o universo do projeto.

Seu objetivo é servir como ponto de partida para compreender toda a estrutura do ARISE antes de analisar cada sistema individualmente.

---

# Filosofia

O ARISE é composto por diversos sistemas independentes que trabalham em conjunto para representar a evolução do jogador.

Cada sistema possui uma responsabilidade específica e se comunica com os demais através de relacionamentos bem definidos.

Nenhum sistema deve concentrar responsabilidades que pertencem a outro.

---

# Visão Geral

```text
                 Player
                    │
        ┌───────────┼────────────┐
        │           │            │
      Quests    Categorias   Contratos
        │           │
        │           │
        ▼           ▼
     XP Geral   XP Categoria
        │           │
        └──────┬────┘
               ▼
          Afinidade
               │
               ▼
           Momentum
               │
               ▼
     Buffs / Debuffs
               │
               ▼
            Status
               │
               ▼
            Títulos
               │
               ▼
          Histórico
```

---

# Princípios

- Cada sistema possui responsabilidade única.
    
- Os sistemas devem permanecer desacoplados sempre que possível.
    
- A evolução do jogador é consequência da interação entre diversos sistemas.
    
- O Histórico registra todos os eventos relevantes da jornada.
    

---

## 🔗 Referências ajustadas

### Planejamento (entrada do sistema)

- [[Visão Geral]]
- [[Core Loop]]

### Arquitetura (núcleo)

- [[Fluxo de Dados]]
- [[Modelo Conceitual]]