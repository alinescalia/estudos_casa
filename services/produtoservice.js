import { produtos } from "../db/produtos.js"


export const produtoservice = {

    buscarprodutos: (req, res) => {
        return (produtos)
    },

    buscarprodutosporid: (req, res) => {

        let reqid = req.params.id
        let produto = produtos.find(p => p.id === parseInt(reqid)) ?? 'produto nao encontrado' // verificar esse codigo
        // if (produto.length === 0) { return ('produto nao encontrado') }
        return produto

    },

    criarproduto: (req, res) => {

        let produtoadd = req.body
        return (produtos.push(produtoadd))
    },

    atualizarproduto: (req, rez) => {

        const id = req.params.id

        let produto = produtos.find(p => p.id === parseInt(id));

        // !produto -> se não existir 
        if (!produto) { //undefined, null, 0
            res.status(404).send({ message: 'Produto não encontrado' }
            )



            produto.nome = req.body.nome ?? produto.nome // usar no caso de nao existir
            produto.preco = req.body.preco ?? produto.preco
            produto.off = req.body.off ?? produto.off

            res.status(201).send(produto)
        }


    }
}
