# 📖 Diário de Bordo

## 🎯 Objetivo da sessão

Consolidar a documentação técnica do ARISE, finalizar a modelagem do domínio do Alpha e preparar a arquitetura para o início do desenvolvimento do backend.

---

## ✅ O que foi concluído

- Revisão da organização atual do repositório Git e limpeza dos arquivos que não deveriam ser versionados.
    
- Atualização do `.gitignore`, incluindo configurações específicas para o Obsidian.
    
- Consolidação da documentação da pasta **06 - Engenharia**, estabelecendo a base arquitetural do projeto.
    
- Definição da arquitetura do backend utilizando **Python + FastAPI**, seguindo uma abordagem inspirada em Clean Architecture e CQRS.
    
- Modelagem completa do domínio principal do Alpha:
    
    - Player
        
    - Progression
        
    - Quest
        
    - Category
        
    - XP
        
    - Reward
        
    - Level
        
    - Statistics
        
- Definição das responsabilidades de cada entidade, mantendo baixo acoplamento e alta coesão.
    
- Organização dos documentos utilizando referências entre notas do Obsidian para manter a documentação integrada.
    
- Planejamento da próxima etapa da arquitetura, focada na camada **Application**.
    

---

## ❌ O que ficou pendente

- Documentar a camada **Application** (Commands, Queries, Dispatcher, Handlers, Repositories, Eventos de Domínio e Fluxo de Requisição).
    
- Realizar o commit consolidando toda a documentação produzida nesta fase.
    
- Iniciar a implementação do backend do Alpha.
    

---

## 🧠 Decisões tomadas

- O backend será desenvolvido em **Python** utilizando **FastAPI**.
    
- A arquitetura será baseada em separação clara entre **Domain**, **Application**, **Infrastructure** e **Presentation**.
    
- O domínio permanecerá completamente independente da infraestrutura.
    
- O `Player` será uma entidade enxuta, delegando responsabilidades para componentes especializados.
    
- O sistema utilizará Commands, Handlers e um Dispatcher para executar casos de uso.
    
- O fluxo da aplicação será orientado por casos de uso, evitando lógica de negócio em controllers ou endpoints.
    

---

## 💡 Ideias que surgiram

- Utilizar Eventos de Domínio no futuro para desacoplar sistemas como Momentum, Achievements, Contracts e Notifications.
    
- Tratar o sistema de Rewards como uma camada independente do XP, permitindo expansão para ouro, itens, baús e títulos.
    
- Manter toda a documentação de engenharia sincronizada com a implementação, fazendo com que cada documento se torne uma referência direta para o código.
    

---

## 🐞 Problemas encontrados

- Pequenos ajustes no controle de versionamento do Git e no `.gitignore` antes de consolidar a documentação.
    
- Algumas decisões arquiteturais precisaram ser refinadas para evitar que entidades como `Player` e `Quest` acumulassem responsabilidades excessivas.
    

---

## 📚 O que aprendi hoje

- Um domínio bem modelado reduz drasticamente a complexidade da implementação futura.
    
- Separar responsabilidades desde o início evita arquivos gigantes e facilita testes, manutenção e evolução do projeto.
    
- Documentar primeiro não atrasa o desenvolvimento; na prática, reduz retrabalho e aumenta a confiança durante a implementação.
    

---

## 🚀 Próxima sessão

**Primeira tarefa:**

Finalizar a documentação da camada **Application**, definindo Commands, Queries, Dispatcher, Handlers, Repositories, Eventos de Domínio e Fluxo de uma Requisição.

**Segunda tarefa:**

Realizar o commit de toda a documentação consolidada desta fase, registrando oficialmente a conclusão da modelagem e da arquitetura inicial do ARISE.

**Terceira tarefa:**

Criar a branch `feature/backend-bootstrap` e iniciar a implementação do backend, estruturando o projeto com FastAPI e a arquitetura definida durante o planejamento.