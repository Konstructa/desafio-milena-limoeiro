import { Item } from "./Item.js";

class ItemExtra extends Item {
    constructor(codigo, descricao, valor, itemPrincipal) {
        super(codigo, descricao, valor);
        this.itemPrincipal = itemPrincipal;
    }
}

export { ItemExtra };