# Sistema de Ranking do King Arthur's Gold - Servidor KAG Brasil

## Introdução

Este repositório apresenta o sistema de ranking do jogo **King Arthur's Gold (KAG)** para o servidor **KAG Brasil**. O objetivo deste sistema é fornecer uma visualização em tempo real das performances dos jogadores com base em suas estatísticas de jogo.

## Objetivo

O sistema de ranking foi criado para:
- Ranquear os jogadores com base nas suas estatísticas de **kills** (abates) e **deaths** (mortes).
- Fornecer uma métrica de **KDR** (Kill/Death Ratio - Razão de Abates/Mortes), que ajuda a medir a eficiência de combate dos jogadores.
- Destacar mudanças significativas nas estatísticas de jogo em tempo real, proporcionando uma experiência dinâmica e envolvente para os jogadores.

## Funcionalidades

1. **Atualização em Tempo Real**: O ranking é atualizado automaticamente à medida que as estatísticas dos jogadores mudam, sem a necessidade de recarregar a página.
   
2. **Ordenação por Kills**: Os jogadores são classificados principalmente pelo número de abates, com os jogadores de melhor desempenho no topo da tabela.

3. **Cálculo de KDR**: A KDR é calculada como o número de abates dividido pelo número de mortes. Se um jogador não tiver nenhuma morte, o KDR será igual ao número de abates.

4. **Destaques em Atualizações**: As células da tabela que representam as estatísticas de abates e mortes são destacadas temporariamente quando seus valores mudam, utilizando cores diferentes para destacar aumentos em abates (verde) e mortes (vermelho).

## Tecnologias Utilizadas

- **HTML** e **CSS**: Para a estrutura e o estilo da página.
- **JavaScript**: Para manipulação dinâmica da DOM e cálculos de KDR.
- **Firebase Realtime Database**: Para armazenamento e sincronização de dados em tempo real.
- **GitHub Pages**: Para hospedar a interface do sistema de ranking.

## Estrutura do Projeto

- `index.html`: O arquivo principal que estrutura a página de ranking.
- `styles.css`: Arquivo de estilo para estilização da tabela e outros elementos da página.
- `script.js`: Arquivo JavaScript que lida com a interação com o Firebase e a atualização da tabela em tempo real.
- `assets/`: Pasta contendo imagens e outros recursos utilizados na página.
