# 🚧 Roadmap do Alpha

## Objetivo

Este documento define a ordem de implementação do primeiro protótipo funcional do ARISE.

O foco do Alpha **não é possuir todas as mecânicas do jogo**, mas validar o ciclo principal de progressão e garantir uma base sólida para futuras funcionalidades.

---

# Filosofia

O desenvolvimento seguirá uma abordagem incremental.

Cada versão do Alpha deve ser totalmente funcional e utilizável, ainda que contenha poucas funcionalidades.

Antes de adicionar novos sistemas, o ciclo principal deve estar estável.

---

# Core Loop do Alpha

```text
Criar Quest

↓

Concluir Quest

↓

Receber XP

↓

Evoluir

↓

Visualizar progresso

↓

Repetir
```

Se esse ciclo for divertido, claro e motivador, o restante do sistema poderá ser expandido com segurança.

---

# Alpha 0.1 — Fundação

## Objetivo

Criar a primeira versão completamente funcional.

### Sistemas

- Cadastro/Login (pode ser simplificado ou local durante o desenvolvimento)
    
- Perfil do Jogador
    
- Criação de Quests
    
- Edição de Quests
    
- Exclusão de Quests
    
- Listagem de Quests
    
- Conclusão de Quests
    
- Histórico simples
    
- Sistema de XP Geral
    
- Sistema de Níveis
    

### Critério de conclusão

O jogador consegue criar uma Quest, concluí-la e observar sua progressão.

---

# Alpha 0.2 — Progressão

## Objetivo

Dar personalidade ao progresso do jogador.

### Sistemas

- Categorias
    
- XP por Categoria
    
- Afinidade
    
- Estatísticas do Jogador
    
- Melhorias no Histórico
    

### Critério de conclusão

Cada Quest influencia a especialização do jogador.

---

# Alpha 0.3 — Consistência

## Objetivo

Introduzir consequências para o comportamento do jogador.

### Sistemas

- Momentum
    
- Buffs
    
- Debuffs
    
- Atualização automática de Status
    

### Critério de conclusão

A consistência do jogador passa a alterar sua experiência dentro do sistema.

---

# Alpha 0.4 — Desafios

## Objetivo

Adicionar sistemas avançados de progressão.

### Sistemas

- Contratos
    
- Títulos
    
- Recompensas avançadas
    

### Critério de conclusão

O jogador possui objetivos opcionais de alto risco e reconhecimento pela sua evolução.

---

# Funcionalidades adiadas

As funcionalidades abaixo poderão ser implementadas após a conclusão do Alpha.

- Loja
    
- Inventário
    
- Conquistas avançadas
    
- Sistema Social
    
- Guildas
    
- Rankings
    
- Eventos sazonais
    
- Sincronização em tempo real
    
- Inteligência Artificial
    
- Integrações externas
    
- Cosméticos
    
- Marketplace
    
- Sistema de Clãs
    

---

# Definição de Pronto (Definition of Done)

Uma etapa do Alpha somente será considerada concluída quando:

- Todos os Casos de Uso relacionados estiverem funcionando.
    
- As Regras de Negócio forem respeitadas.
    
- Os testes planejados forem aprovados.
    
- A interface permitir utilizar a funcionalidade sem inconsistências.
    
- A documentação estiver atualizada.
    

---

# Critérios de sucesso

Ao término do Alpha, o jogador deverá ser capaz de:

- Criar e gerenciar Quests.
    
- Evoluir seu personagem.
    
- Visualizar seu progresso.
    
- Desenvolver afinidades.
    
- Sofrer consequências pelas próprias ações.
    
- Sentir que existe evolução contínua.
    

O Alpha não precisa conter todas as funcionalidades previstas para a versão final, mas deve demonstrar claramente a proposta central do ARISE: transformar crescimento pessoal em uma experiência inspirada em RPG.

---

## 🔗 Referências

### Planejamento

- [[MVP]]
    
- [[Plano de Desenvolvimento]]
    

### Arquitetura

- [[Fluxo de Dados]]
    
- [[Modelo Conceitual]]
    

### Regras

- [[Casos de Uso]]
    
- [[Regras de Negócio]]
    
- [[Máquinas de Estados]]
    

### Sistemas

- [[Sistema de Quests]]
    
- [[Sistema de Progressão]]
    
- [[Sistema de XP]]
    
- [[Sistema de Momentum]]
    
- [[Sistema de Buffs e Debuffs]]
    
- [[Sistema de Contratos]]
    
- [[Sistema de Títulos]]