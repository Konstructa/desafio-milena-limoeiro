import { Item } from "./Item.js";
import { ItemExtra } from "./ItemExtra.js";

class Cardapio {
    constructor() { 
        this.itens = [];
        this.itensExtra = [];
    }

    adicionarItem(codigo, descricao, valor) {
        const novoItem = new Item(codigo, descricao, valor);
        this.itens.push(novoItem);
    }

    adicionarItemExtra(codigo, descricao, valor, itemPrincipal) { 
        const novoItemExtra = new ItemExtra(codigo, descricao, valor, itemPrincipal);
        this.itens.push(novoItemExtra);
        this.itensExtra.push(novoItemExtra);
    }

    encontrarItemPorCodigo(codigo) {
        return this.itens.find(item => item.codigo === codigo);
    }
}

const cardapio = new Cardapio();

export default cardapio;

