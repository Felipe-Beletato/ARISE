# 🏛️ Princípios da Engenharia

> Este documento estabelece os princípios fundamentais que guiam todas as decisões de engenharia do ARISE.
>
> Antes de decidir **como implementar**, devemos lembrar **por que a arquitetura foi construída dessa maneira**.
>
> Estes princípios possuem prioridade sobre preferências pessoais, frameworks ou modismos tecnológicos.

---

# 🎯 Objetivo

O objetivo deste documento é garantir consistência durante toda a evolução do projeto.

Independentemente da quantidade de funcionalidades adicionadas, a arquitetura deve permanecer:

- previsível;
- organizada;
- desacoplada;
- testável;
- fácil de compreender.

Sempre que surgir uma dúvida arquitetural, este documento deve ser consultado antes de criar uma nova solução.

---

# 🧭 Filosofia do Projeto

O ARISE não busca apenas funcionar.

Ele busca ser um projeto que permaneça compreensível, organizado e agradável de evoluir mesmo após anos de desenvolvimento.

Cada decisão de engenharia deve reduzir complexidade, nunca aumentá-la.

---

# 📜 Princípios Fundamentais

---

# 1. Arquitetura antes da Implementação

Toda funcionalidade relevante deve possuir uma arquitetura minimamente definida antes da implementação.

Isso não significa documentar tudo.

Significa evitar escrever código enquanto ainda existem dúvidas estruturais.

Planejar reduz retrabalho.

---

# 2. O Domínio representa o jogo

Toda regra permanente do universo do ARISE pertence ao Domínio.

Exemplos:

- ganho de XP;
- evolução de nível;
- conclusão de Quests;
- cálculo de recompensas;
- títulos;
- Momentum.

O Domínio nunca conhece infraestrutura.

---

# 3. A Application coordena processos

A camada Application existe para coordenar casos de uso.

Ela conecta:

- Commands;
- Queries;
- Handlers;
- Repositories;
- Services;
- Eventos.

A Application não representa regras do jogo.

Ela organiza sua execução.

---

# 4. A Presentation apenas comunica

A camada Presentation recebe e responde requisições.

Ela:

- interpreta HTTP;
- converte DTOs;
- utiliza Parsers;
- cria Commands e Queries.

Ela nunca implementa regras de negócio.

---

# 5. A Infrastructure executa detalhes técnicos

Toda tecnologia específica pertence à Infrastructure.

Exemplos:

- PostgreSQL;
- SQLAlchemy;
- Redis;
- APIs externas;
- arquivos;
- autenticação;
- cache.

Trocar uma tecnologia não deve afetar o Domínio.

---

# 6. Organização por Feature

A estrutura do projeto deve priorizar funcionalidades.

Não organizamos apenas por tipo de arquivo.

Cada módulo possui seus próprios:

- Commands;
- Queries;
- Handlers;
- DTOs;
- Parsers;
- Repositories;
- Services.

Isso reduz a carga cognitiva durante a manutenção.

---

# 7. Princípio da Proximidade

Componentes que evoluem juntos devem permanecer próximos.

Se dois arquivos normalmente são alterados ao mesmo tempo, eles devem estar organizados dentro da mesma feature.

---

# 8. Responsabilidade Única

Cada componente deve possuir apenas uma responsabilidade.

Se um arquivo começa a responder muitas perguntas diferentes, provavelmente precisa ser dividido.

---

# 9. Nenhum arquivo faz tudo

Não existirão arquivos genéricos responsáveis por concentrar toda a lógica do sistema.

Evitamos arquivos como:

- `utils.py`
- `helpers.py`
- `service.py`
- `manager.py`

quando utilizados como "depósito de código".

Cada arquivo deve possuir propósito claro e limitado.

---

# 10. Regras pertencem ao Domínio

Sempre que surgir uma dúvida, faça a pergunta:

> **"Isso representa uma regra do jogo?"**

Se a resposta for sim:

→ pertence ao Domínio.

---

# 11. Processos pertencem à Application

Outra pergunta importante:

> **"Isso representa um processo?"**

Exemplos:

- geração de Quests diárias;
- distribuição de recompensas;
- reset de temporada;
- sincronizações;
- agendamentos.

Esses processos pertencem à Application.

---

# 12. Um caso de uso por Handler

Cada Handler executa apenas um caso de uso.

Exemplos:

- CompleteQuestHandler
- CreatePlayerHandler
- GainXPHandler

Nunca existirão Handlers responsáveis por múltiplas operações.

---

# 13. Um Command para cada intenção

Commands representam intenções de escrita.

Cada intenção possui exatamente um Handler.

---

# 14. Uma Query para cada consulta

Queries representam intenções de leitura.

Cada Query possui exatamente um Handler.

---

# 15. Preferir composição à herança

Sempre que possível, novas funcionalidades devem ser construídas através da composição de componentes menores.

A herança será utilizada apenas quando representar corretamente a relação entre os objetos.

---

# 16. Imutabilidade sempre que possível

Objetos de transporte de dados devem ser imutáveis.

Exemplos:

- Commands;
- Queries;
- DTOs.

Isso reduz efeitos colaterais e facilita testes.

---

# 17. Código deve ser fácil de localizar

Qualquer desenvolvedor deve conseguir responder rapidamente:

> "Onde fica esta funcionalidade?"

A organização do projeto deve tornar essa resposta óbvia.

---

# 18. Documentação acompanha a implementação

A documentação faz parte da arquitetura.

Sempre que uma decisão importante alterar a estrutura do sistema, a documentação deverá ser atualizada.

Código e documentação devem evoluir juntos.

---

# 19. Clareza acima de inteligência

Preferimos código simples e explícito a soluções extremamente sofisticadas.

O objetivo é facilitar manutenção, leitura e evolução do projeto.

Um código fácil de entender vale mais do que um código "esperto".

---

# 20. Evolução contínua

Nenhuma decisão arquitetural é considerada definitiva.

A arquitetura poderá evoluir sempre que existir uma solução objetivamente melhor.

Mudanças devem preservar a consistência do projeto.

---

# 21. O Domínio não inicia comunicação

O Domínio é responsável por executar suas próprias regras e manter sua consistência interna.

Ele não conhece detalhes externos da aplicação e não deve iniciar comunicação com outros módulos.

O Domínio não depende de:

- Event Dispatcher;
    
- Notifications;
    
- HTTP;
    
- Mensageria;
    
- Infraestrutura externa.
    

Quando uma alteração importante acontece, a responsabilidade de comunicar esse acontecimento pertence à camada Application.

O Domínio representa o fato.

A Application coordena as consequências.

Exemplo:

```text
Quest.complete()

↓

Quest concluída

↓

Application publica QuestCompletedEvent

↓

Subscribers reagem ao evento
```

Essa separação mantém o Domínio isolado, previsível e facilmente testável.

O Domínio é o cérebro do sistema.

A Application é o sistema nervoso que conecta suas partes.

---

# 📚 Relação com outros documentos

Este documento orienta todos os demais documentos da pasta **06 - Engenharia**.

Em caso de conflito entre documentos, os princípios definidos aqui possuem prioridade.
- [[Arquitetura Geral]]
- [[Domain Events]]
- [[Application Services]]
- [[Request Flow]]
---

# ✅ Considerações Finais

A arquitetura do ARISE não existe para seguir um padrão específico, mas para resolver problemas de forma clara, organizada e sustentável.

Mais importante do que utilizar um framework moderno é manter uma estrutura que permita compreender o sistema, testar suas regras e evoluí-lo com segurança.

Sempre que surgir uma dúvida durante o desenvolvimento, a primeira pergunta não deve ser:

> **"Como posso implementar isso?"**

Mas sim:

> **"Onde isso realmente pertence?"**

A resposta para essa pergunta é o que mantém a arquitetura consistente ao longo do tempo.