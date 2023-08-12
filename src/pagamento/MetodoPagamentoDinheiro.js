import { MetodoDePagamento } from "./MetodoDePagamento";

class MetodoPagamentoDinheiro extends MetodoDePagamento {
    constructor() {
        super(0.95);
    }
}

export { MetodoPagamentoDinheiro };