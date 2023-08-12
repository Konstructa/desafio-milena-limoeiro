class MetodoDePagamento {
    constructor(descontoOuAcrescimo) {
        this.descontoOuAcrescimo = descontoOuAcrescimo;
    }

    calcularValorFinal(valorTotal) {
        return (valorTotal * this.descontoOuAcrescimo).toFixed(2);
    }
}

export { MetodoDePagamento };