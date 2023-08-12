import cardapio from "./Cardapio";
import { ItemExtra } from "./ItemExtra";

class Pedido {
    carrinho = [];
    
    constructor() { }

    formatarPedido(itens) { 
        const lista = [].
        lista = itens.map(item => {
            const [codigo, quantidade] = item.split(',');
            return [codigo, parseInt(quantidade)];
        });
        return lista;
    }


    validarPedido(itens) { 
        if ( itens.length == 0 ) return 'Não há itens no carrinho de compra!';

        const pedidoFormatado = this.formatarPedido(itens);

        for (const item of pedidoFormatado) {

            const [codigo, quantidade] = item;

            if ( !(item.length == 2) ) return 'Item inválido!';

            const itemDoCardapio = cardapio.encontrarItemPorCodigo(codigo);
          
            if ( !itemDoCardapio ) return 'Item inválido!';

            if ( quantidade == 0 || isNaN(quantidade) ) return 'Quantidade inválida!';

            if ( itemDoCardapio instanceof ItemExtra ) { 
                if (!pedidoFormatado.some(item => item.includes(itemDoCardapio.itemPrincipal))) return 'Item extra não pode ser pedido sem o principal';;
            }

            this.carrinho.push([itemDoCardapio, quantidade]);
        };

        return 'Aprovado!';
    }

    totalPedido() { 
        return this.carrinho.reduce((acc, [item, quantidade]) => acc + (item.valor * quantidade), 0.00);
    }

    validarItemExtra(itemExtra, pedidoFormatado) { 
        return pedidoFormatado.some(item => item.includes(itemExtra.itemPrincipal));
    }

}

export { Pedido } ;