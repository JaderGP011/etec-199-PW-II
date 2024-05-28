// PRODUTO
class Produto {
    constructor(codigo, nome, preco, quantidade, descricao, fabricante){
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.descricao = descricao;
        this.fabricante = fabricante;
    }
}

//MAIN

let produto2 = new produto(2, 'feijão', 8.50, 30, 'pacote 1kg', 'camil');
console.log(produto2.codigo)