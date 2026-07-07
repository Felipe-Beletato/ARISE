# 📖 Diário de Bordo

## 🚀 Continuação da Estruturação do ARISE

Hoje o foco foi aprofundar e refinar a arquitetura conceitual do ARISE, com ênfase na organização dos sistemas e na redução de dependências excessivas entre módulos.

O trabalho foi direcionado principalmente para a consolidação da estrutura de XP e sua relação com os demais sistemas.

---

## 🧠 Decisões importantes do dia

### ⚖️ Hierarquia do Sistema de XP

Foi definida uma separação clara de responsabilidades dentro do fluxo de experiência:

- **Sistema de Avaliação de Quests**: responsável por definir o XP Base a partir das características da Quest.
- **Sistema de Balanceamento de XP**: define regras, proporções e comportamento geral da progressão.
- **Sistema de XP**: executa a distribuição de experiência (XP Geral e XP de Categoria).
- **Sistema de Progressão**: converte XP acumulado em níveis e evolução do jogador.

---
### ⚖️ Regra de separação de responsabilidades

Foi estabelecida uma regra central para o sistema:

> Quem calcula não aplica. Quem aplica não decide. Quem decide não executa.

Essa regra visa evitar sobreposição de responsabilidades entre sistemas e garantir consistência na arquitetura.

---

## 🧹 Refinamento da estrutura de documentação

- Revisão da pasta de Design com redução de dependências excessivas entre sistemas.
- Revisão da pasta de Sistemas com foco em isolamento funcional.
- Revisão da pasta de Arquitetura para refletir melhor a hierarquia real do sistema.
- Padronização do papel de cada camada do projeto.

---

## 📌 Resultado do dia

O ARISE evoluiu de uma estrutura conceitual ampla para uma arquitetura mais modular e implementável.

O sistema de XP foi o principal ponto de consolidação, servindo como base para alinhar as demais camadas do projeto.

---


### 🔄 Fluxo de XP consolidado

```
Quest concluída
→ Avaliação de Quests (XP Base)
→ Aplicação de modificadores (Momentum, Afinidade, Buffs, Debuffs, Contratos)
→ Regras de Balanceamento
→ Sistema de XP (distribuição)
→ Sistema de Progressão (níveis)
```

## 🌙 Observação final

O sistema está agora em um estado onde novas ideias devem ser adicionadas com cuidado para não quebrar a separação de responsabilidades já estabelecida.