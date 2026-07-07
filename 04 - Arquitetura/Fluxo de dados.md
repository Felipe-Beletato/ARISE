# 🔄 Fluxo de Dados

## Objetivo

Este documento descreve a ordem em que os sistemas do ARISE processam uma ação realizada pelo jogador.

Ele representa o fluxo lógico das informações durante a execução do sistema.

---

# Fluxo Principal

```text
Quest Concluída

↓

Validação da Quest

↓

Cálculo do XP Base

↓

Aplicação dos Modificadores

↓

Distribuição do XP

↓

Atualização do XP Geral

↓

Atualização do XP das Categorias

↓

Atualização da Afinidade

↓

Atualização do Momentum

↓

Verificação de Buffs

↓

Verificação de Debuffs

↓

Atualização do Status

↓

Verificação de Títulos

↓

Atualização das Estatísticas

↓

Registro no Histórico

↓

Fim
```

---

# Objetivos do Fluxo

- Garantir consistência entre os sistemas.
    
- Evitar cálculos duplicados.
    
- Padronizar a ordem de atualização.
    
- Facilitar a implementação do backend.
    

---

# Observações

Todo novo sistema implementado deverá indicar em qual etapa do fluxo ele será executado.

Caso um sistema altere a ordem do processamento, este documento deverá ser atualizado.

---

## 🔗 Referências ajustadas

### Arquitetura (núcleo)

- [[Arquitetura do Universo]]
- [[Modelo Conceitual]]

### Sistemas (apenas os “disparadores”, não dependências)

- [[Sistema de Quests]]