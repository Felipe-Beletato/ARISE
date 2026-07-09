# 🧠 Modelo de Domínio

> Este documento define o modelo de domínio do ARISE, descrevendo as entidades centrais do sistema, seus relacionamentos e responsabilidades.

---

# 🎯 Objetivo

O domínio representa o coração do ARISE.

Toda regra de negócio deve nascer a partir das entidades aqui definidas.

Este documento **não representa tabelas de banco de dados**, **não representa APIs** e **não representa infraestrutura**.

Seu único propósito é modelar o funcionamento do jogo.

---

# 🏛️ Filosofia do Domínio

O domínio deve ser completamente independente da infraestrutura.

Isso significa que nenhuma entidade conhece:

- FastAPI
- SQLAlchemy
- PostgreSQL
- Docker
- JWT
- HTTP
- JSON

As entidades conhecem apenas outras entidades e as regras do jogo.

---

# 🌍 Visão Geral

```text
                           Player
                              │
      ┌───────────────────────┼────────────────────────┐
      │                       │                        │
      ▼                       ▼                        ▼
 Progression             Quest Log               Statistics
      │                       │
      ▼                       ▼
     XP                    Quest
      │                       │
      ▼                       ▼
   Level                 Category
      │
      ▼
 Category Progress
```

Durante o Beta novos módulos serão adicionados:

```text
Player
│
├── Inventory
├── Momentum
├── Buffs
├── Debuffs
├── Contracts
├── Titles
├── Achievements
└── Economy
```

---

# 📦 Agregados do Domínio

O domínio será organizado em agregados.

Cada agregado possui sua própria responsabilidade.

---

# 👤 Player

O Player representa o usuário dentro do ARISE.

É a raiz do domínio.

O Player **não executa toda a lógica do jogo**.

Sua função é manter o estado geral do jogador e orquestrar seus componentes internos.

Responsabilidades:

- Identificação
- Estado atual
- Acesso aos componentes do jogador

Relacionamentos:

- Progression
- Quest Log
- Statistics
- (Beta) Inventory
- (Beta) Momentum

---

# 📈 Progression

Responsável pela evolução do jogador.

Controla:

- XP Geral
- XP por Categoria
- Nível
- Curva de Progressão

---

# 📚 Quest Log

Responsável pelo gerenciamento das Quests.

Controla:

- Quests disponíveis
- Quests concluídas
- Histórico
- Estado das Quests

---

# ⚔️ Quest

Representa qualquer atividade executável.

Uma Quest possui:

- Nome
- Descrição
- Categoria
- Dificuldade
- Recompensa
- Estado
- Critérios de conclusão

---

# 📖 Category

Representa uma área de evolução.

Categorias do Alpha:

- Vanguard
- Codex
- Soul
- Treasury
- Creation

Cada categoria possui XP próprio.

---

# ⭐ XP

Representa toda experiência acumulada.

Será dividido em:

- XP Geral
- XP por Categoria

Toda regra de distribuição ficará nesta entidade.

---

# 🏅 Level

Representa o nível do jogador.

É atualizado exclusivamente pela Progression.

---

# 📊 Statistics

Responsável por armazenar informações estatísticas.

Exemplos:

- Quests concluídas
- Dias consecutivos
- Total de XP
- Tempo jogado

Não interfere nas regras do jogo.

---

# 🎁 Reward

Representa qualquer recompensa concedida.

No Alpha:

- XP Geral
- XP por Categoria

No Beta:

- Ouro
- Baús
- Itens
- Cosméticos

---

# 🎒 Inventory (Beta)

Armazena recompensas permanentes.

Não fará parte do Alpha.

---

# 🔥 Momentum (Beta)

Representa a consistência do jogador.

Afeta:

- Multiplicadores
- Recompensas
- Frequência de contratos

---

# 💀 Buffs e Debuffs (Beta)

Representam modificadores temporários.

Exemplos:

- Motivado
- Enferrujado
- Inspirado

---

# 📜 Contracts (Beta)

Missões especiais opcionais.

Possuem:

- Alto risco
- Alta recompensa

---

# 👑 Titles (Beta)

Representam o estado atual do jogador.

Exemplos:

- Instável
- Consistente
- Inabalável
- Renascido

---

# 🔄 Fluxo Principal do Alpha

```text
Player

↓

Quest Log

↓

Quest

↓

Reward

↓

Progression

↓

XP

↓

Level

↓

Category Progress
```

Este fluxo representa o ciclo principal do ARISE.

---

# 📌 Princípios do Domínio

Toda implementação deverá respeitar os seguintes princípios:

- O domínio nunca depende da infraestrutura.
- Toda regra pertence ao domínio.
- Cada entidade possui apenas uma responsabilidade principal.
- O Player deve permanecer pequeno.
- Componentes especializados concentram suas próprias regras.
- Alterações de estado devem ser explícitas.
- O domínio deve ser facilmente testável.

---

# 🗂️ Estrutura do Domínio

```text
domain/
│
├── player/
│
├── progression/
│
├── quest/
│
├── category/
│
├── reward/
│
├── statistics/
│
├── level/
│
├── shared/
│
├── inventory/      (Beta)
├── momentum/       (Beta)
├── buffs/          (Beta)
├── contracts/      (Beta)
└── titles/         (Beta)
```

---

# 📅 Ordem de Modelagem

Cada agregado será documentado individualmente.

Ordem de desenvolvimento:

1. Player
2. Progression
3. Quest
4. Category
5. Reward
6. XP
7. Level
8. Statistics

Após o Alpha:

9. Inventory
10. Momentum
11. Buffs
12. Debuffs
13. Contracts
14. Titles

---

# 🔗 Documentos Relacionados

- [[Arquitetura Geral]]
- [[Estrutura de Pastas]]
- [[Roadmap Técnico]]
- [[Planejamento Alpha]]

---

# ✅ Considerações Finais

O Modelo de Domínio representa a fonte de verdade para todas as regras do ARISE.

Toda implementação deve nascer a partir deste documento.

Caso uma regra de negócio não esteja claramente representada aqui, ela deverá ser discutida e documentada antes de ser implementada.