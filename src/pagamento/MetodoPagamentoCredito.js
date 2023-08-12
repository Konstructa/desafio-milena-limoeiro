import { MetodoDePagamento } from "./MetodoDePagamento";

class MetodoPagamentoCredito extends MetodoDePagamento {
    constructor() {
        super(1.03);
    }
}

export { MetodoPagamentoCredito };