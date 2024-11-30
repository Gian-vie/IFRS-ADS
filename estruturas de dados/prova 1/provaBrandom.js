function identificadorEstruturas(operacoes, dados) {
    let posicaoDados = 0;
    let adicionados = [];
    let removidos = [];

    // separa inseridos de removidos
    operacoes.forEach((operacao) => {
        // inserção
        if (operacao == 1) {
            adicionados.push(dados[posicaoDados]);
            // remoção
        } else {
            removidos.push(dados[posicaoDados]);
        }

        posicaoDados++;
    });

    let diferente = false;

    // verifica se existe algum removido que é diferente ao inserido
    for (let i = 0; i < adicionados.length; i++) {
        if ((adicionados[i] ?? null) != (removidos[i] ?? null)) {
            if (removidos[i] ?? null) {
                if (!adicionados.includes(removidos[i])) {
                    // se o valor removido não existir nos valores adicionados
                    // é impossível
                    return 'impossible';
                }
            }

            diferente = true;
        }
    }

    if (diferente) {
        let iguais = true;

        // verifica se o próximo removido é igual ao último adicionado
        for (let i = 0; i < removidos.length; i++) {
            if ((removidos[(removidos.length - 1) - i] ?? null) != adicionados[i]) {
                iguais = false;
            }
        }

        let maior = false;

        // verifica se o próximo a ser removido é o maior entre os adicionados
        for (let i = 0; i < adicionados.length; i++) {
            if ((removidos[0] ?? null) > adicionados[i]) {
                maior = true;
            }
        }

        // se o primeiro removido for o maior
        if (maior) {
            // se tiver características de pilha também
            if (iguais) {
                // não tenho certeza
                return 'not sure';
            }

            // lista com prioridade
            return 'priority queue';
        }

        // se não for fila nem fila prioritária
        // pilha
        return 'stack';
    } else {
        // se o primeiro a ser removido é igual o primeiro a ser inserido
        // é fila
        return 'queue';
    }
}

module.exports = identificadorEstruturas;