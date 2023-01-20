import { darken, transparentize } from "polished"

export const colors = {
    primary: {
        0: '#2c3e50',
        0.2: transparentize(0.2, '#2c3e50'),
        0.1: darken(0.2, '#2c3e50'),
    },
    //Primary usada para cor principal como background, botões principais e links
    secondary: {
        0: '#34495e',
        0.2: transparentize(0.2, '#34495e'),
        0.1: darken(0.2, '#34495e'),
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
        0: '#ecf0f1',
        0.1: transparentize(0.2, '#ecf0f1'),
        0.2: darken(0.9, '#ecf0f1'),
    },
    //Usado para textos em geral!

}