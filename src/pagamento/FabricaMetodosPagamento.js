import { MetodoPagamentoDinheiro } from './MetodoPagamentoDinheiro';
import { MetodoPagamentoCredito } from './MetodoPagamentoCredito';
import { MetodoPagamentoDebito } from './MetodoPagamentoDebito';

class FabricaMetodosPagamento {
    criarMetodoPagamento(tipo) {
        switch (tipo) {
            case 'dinheiro':
                return new MetodoPagamentoDinheiro();
            case 'credito':
                return new MetodoPagamentoCredito();
            case 'debito':
                return new MetodoPagamentoDebito();
            default:
                return 'Forma de pagamento inválida!';
        }
    }
}


export { FabricaMetodosPagamento };