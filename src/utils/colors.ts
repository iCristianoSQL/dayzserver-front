import { darken, transparentize } from "polished"

export const colors = {
    primary: {
        0: '#F2EBDD',
        0.2: transparentize(0.2, '#F2EBDD'),
        0.1: darken(0.2, '#F2EBDD'),
    },
    //Primary usada para cor principal como background, botões principais e links
    secondary: {
        0: '#2c3e50',
        0.2: transparentize(0.2, '#2c3e50'),
        0.1: darken(0.2, '#2c3e50'),
    },
    //Cor de fundo de elementos menos importantes como cabeçalhos e rodapés
    danger: {
        0: '#e74c3c',
        0.1: transparentize(0.9, '#e74c3c'),
        0.2: darken(0.9, '#e74c3c'),
    },
    //Serve para alertar uma ação como um botão de exclusão ou cancelamento
    valid: {
        0: '#024d06',
        0.1: transparentize(0.2, '#024d06'),
        0.2: darken(0.9, '#024d06'),
    },
    //Utilizado para botões e elementos de validação
    texts: {
        0: '#2c3e50',
        0.1: transparentize(0.2, '#2c3e50'),
        0.2: darken(0.9, '#2c3e50'),
    },
    //Usado para textos em geral!

}