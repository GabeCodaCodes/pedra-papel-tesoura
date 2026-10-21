let contador_vitorias = 0;
let contador_derrotas = 0;
function jogada(j) {
    const opcoes = [
        'pedra', 'papel', 'tesoura'
    ];
    let indiceAleatorio = Math.floor(Math.random() * opcoes.length);
    let bot_escolha = opcoes[indiceAleatorio];
    
    if (opcoes.includes(j)){
        console.log(bot_escolha)
        switch (`${j}-${bot_escolha}`) {
            case 'pedra-tesoura':
            case 'tesoura-papel':
            case 'papel-pedra':
                contador_vitorias += 1;
                break;
            case 'tesoura-papel':
            case 'papel-tesoura':
            case 'pedra-papel':
                contador_derrotas += 1;
                break;
            } 
        console.log('Contador de Vitórias: ', contador_vitorias);
        console.log('Contador de Derrotas: ', contador_derrotas);

        if (contador_vitorias === 3) {
        console.log('parabéns, você venceu o bot! Fim de jogo');
            contador_vitorias = 0;
            contador_derrotas = 0;
        } else if (contador_derrotas === 3) {
        console.log('você perdeu o jogo, broo.... Fim de jogo');
            contador_vitorias = 0;
            contador_derrotas = 0;
        }

    } else {
        console.log('selecione uma opção válida');
    } 
}
