import { MetodoPagamentoDinheiro } from './MetodoPagamentoDinheiro';
import { MetodoPagamentoCredito } from './MetodoPagamentoCredito';
import { MetodoPagamentoDebito } from './MetodoPagamentoDebito';

class FabricaMetodosPagamento {
    criarMetodoPagamento(tipo) {
        if (tipo === 'dinheiro') {
            return new MetodoPagamentoDinheiro();
        } else if (tipo === 'credito') {
            return new MetodoPagamentoCredito();
        } else if (tipo === 'debito') {
            return new MetodoPagamentoDebito();
        } else {
            return 'Forma de pagamento inválida!';
        }
    }
}

export { FabricaMetodosPagamento };