# Projeto Calculadora

Calculadora web interativa desenvolvida com HTML, CSS e JavaScript puro, utilizando Bootstrap 5 para o layout responsivo. Permite realizar operações matematicas basicas diretamente no navegador, com suporte a cliques no mouse e atalhos de teclado.

---

## Demonstracao

> **Preview online:** [GitHub Pages](https://julio-rodrigo-s.github.io/Projeto-Calculadora/)

---

## Estrutura do Projeto

```
Projeto-Calculadora/
├── index.html   # Estrutura da calculadora e botoes
├── style.css    # Estilizacao visual (tema escuro, fonte digital, gradiente)
└── script.js    # Logica de calculo, teclado e efeitos nos botoes
```

---

## Tecnologias Utilizadas

| Tecnologia     | Finalidade                                                    |
|----------------|---------------------------------------------------------------|
| HTML5          | Estrutura da pagina e dos botoes da calculadora               |
| CSS3           | Tema escuro com gradiente, fonte estilo display digital       |
| JavaScript     | Logica de calculo, backspace, teclado e feedback visual       |
| Bootstrap 5.3  | Grid responsivo para organizar as linhas de botoes            |

---

## Funcionalidades

- [x] Operacoes basicas: adicao, subtracao, multiplicacao e divisao
- [x] Suporte a numeros decimais com ponto (`.`)
- [x] Botao **C** para limpar todo o display
- [x] Botao **<** para apagar o ultimo caractere (backspace)
- [x] Calculo ao pressionar **=**
- [x] Suporte completo ao teclado (numeros, operadores, `Enter`, `Backspace`, `Escape`)
- [x] Efeito visual nos botoes ao pressionar (highlight vermelho)
- [x] Mensagem de **Erro** para expressoes invalidas
- [x] Design com tema escuro e fundo gradiente cinza → preto

---

## Como Funciona

### Calculo

A funcao `calculate()` usa o metodo nativo `eval()` do JavaScript para avaliar a expressao digitada no display. Em caso de expressao invalida, um bloco `try/catch` exibe a mensagem `"Erro"` no lugar do resultado.

### Suporte ao Teclado

O `script.js` registra dois event listeners globais (`keydown` e `keyup`) que percorrem todos os botoes e identificam qual deles corresponde a tecla pressionada. Os mapeamentos especiais sao:

| Tecla no teclado | Acao na calculadora |
|------------------|---------------------|
| `Enter`          | Calcular (=)        |
| `Backspace`      | Apagar ultimo digito|
| `Escape`, `C`, `c` | Limpar display (C)|

### Feedback Visual

Ao pressionar qualquer botao (por mouse ou teclado), a funcao `pintarBotao()` aplica um gradiente vermelho temporario ao botao ativo. Ao soltar, `restaurarBotao()` retorna ao estilo original.

---

## Como Executar Localmente

1. Clone o repositorio:
   ```bash
   git clone https://github.com/Julio-Rodrigo-S/Projeto-Calculadora.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd Projeto-Calculadora
   ```

3. Abra o arquivo `index.html` diretamente no navegador.

> Nenhuma dependencia precisa ser instalada. O Bootstrap e carregado via CDN automaticamente.

---

## Contribuindo

Contribuicoes sao bem-vindas! Sinta-se a vontade para abrir uma *issue* ou enviar um *pull request* com melhorias ou correcoes.

---

## Licenca

Este projeto esta disponivel para uso livre para fins de estudo e pratica.

---

Desenvolvido por [Julio-Rodrigo-S](https://github.com/Julio-Rodrigo-S)
