import cardapio from './entidades/Cardapio.js';
import { Pedido } from './entidades/Pedido.js';
import { FabricaMetodosPagamento } from './pagamento/FabricaMetodosPagamento.js'

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        this.criarCardapio();

        const fabrica = new FabricaMetodosPagamento();
        const pagamento = fabrica.criarMetodoPagamento(metodoDePagamento);

        const pedido = new Pedido();
        const avaliarPedido = pedido.validarPedido(itens);
        
        if (avaliarPedido !== 'Aprovado!') {
            return avaliarPedido;
        }

        if (pagamento === 'Forma de pagamento inválida!') { 
            return pagamento;
        }

        const valorTotal = pedido.getTotalPedido();

        const valorCompra = pagamento.calcularValorFinal(valorTotal);

        return parseFloat(valorCompra).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    criarCardapio() { 
        cardapio.adicionarItem('cafe', 'Café', 3.00);
        cardapio.adicionarItemExtra('chantily', 'Chantily (extra do Café)', 1.50, 'cafe');
        cardapio.adicionarItem('suco', 'Suco Natural', 6.20);
        cardapio.adicionarItem('sanduiche', 'Sanduíche', 6.50);
        cardapio.adicionarItemExtra('queijo', 'Queijo (extra do Sanduíche)', 2.00, 'sanduiche');
        cardapio.adicionarItem('salgado', 'Salgado', 7.25);
        cardapio.adicionarItem('combo1', '1 Suco e 1 Sanduíche', 9.50);
        cardapio.adicionarItem('combo2', '1 Café e 1 Sanduíche', 7.50);
    }

}

export { CaixaDaLanchonete };
