import { MetodoDePagamento } from "./MetodoDePagamento";

class MetodoPagamentoDebito extends MetodoDePagamento {
    constructor() {
        super(1.00);
    }
}

export { MetodoPagamentoDebito };