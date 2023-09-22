// base de dados para mock , 

import {randomUUID} from 'node:crypto'

export class DataBaseTemp{

    produtos = []
    
    listarTodos = () => this.produtos;

    listarPorId = (idParam) => this.produtos.find(produto => produto.id === idParam)

    adicionar = (produto) => {
       produto.id = randomUUID()
       
       console.log('prdito-depois', produto)
       return this.produtos.push(produto) 
    }; // se usar a chave precisa do return

    atualizar = () =>{

    }

    excluir = () =>{

    }
}