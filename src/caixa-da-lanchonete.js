
class CaixaDaLanchonete {

    pagamento = {
        dinheiro: 0.95,
        credito: 1.03,
        debito: 1.00
    }

    cardapio = [
        { codigo: 'cafe', descricao: 'Café', valor: 3.00 },
        { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
        { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
        { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
        { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
        { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
        { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
        { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 },
    ]

    calcularValorDaCompra(metodoDePagamento, itens) {
        let valorTotal = 0.00;

        if ( !this.pagamento[metodoDePagamento] ) return 'Forma de pagamento inválida!';
        
        if ( itens.length == 0 ) return 'Não há itens no carrinho de compra!';

        const carrinho = itens.map(item => {
            if ( item.split(",").length < 2 ) return 'Item inválido!';
            const [produto, quantidade] = item.split(',');
            return [produto, parseInt(quantidade)];
        });

        for (const item of carrinho) {
            const [codigo, quantidade] = item;

          
            if ( !this.cardapio.find(item => item.codigo === codigo) ) return 'Item inválido!';
            if ( quantidade == 0 || isNaN(quantidade) ) return 'Quantidade inválida!';

            if (codigo === 'queijo' && !carrinho.some(subarray => subarray.includes('sanduiche'))) {
                return 'Item extra não pode ser pedido sem o principal';
            }

            if (codigo === 'chantily' && !carrinho.some(subarray => subarray.includes('cafe'))) {
                return 'Item extra não pode ser pedido sem o principal';
            }

            valorTotal += (+quantidade * this.cardapio.find(item => item.codigo === codigo).valor);

        };

        const resultado = (valorTotal * this.pagamento[metodoDePagamento]).toFixed(2)

        return parseFloat(resultado).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

}

export { CaixaDaLanchonete };
