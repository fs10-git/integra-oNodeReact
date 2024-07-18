import React from "react"
import {createData} from "../services/services"
import { Form,Button  } from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import { useState } from "react"

function CadastrarProduto() {
    const [newProduto,setNewProduto] = useState({
        cor:"",
        tamanho:"",
        categorias_id:0,
        preco:0,
        estoque:0,
        num_serial:0,
        promocao_id:0
    })


    const navigate = useNavigate()

    const cadastroProdutos = async()=> {
        console.log(newProduto)
        await createData(newProduto)
        navigate("/")
    }
  return (
    <>
        <h1>Cadastrar Produto</h1>
        <Form>
            <Form.Group controlId="formNewProduto">
                <Form.Label>
                    Cor
                </Form.Label>
                <Form.Control 
                    type="text"
                    value={newProduto.cor}
                    onChange={(e) => setNewProduto({...newProduto, cor:e.target.value})}
                />
                   <Form.Label>
                   Tamanho
                </Form.Label>
                <Form.Control 
                    type="text"
                    value={newProduto.tamanho}
                    onChange={(e) => setNewProduto({...newProduto, tamanho:e.target.value})}
                />
                   <Form.Label>
                   Categorias_id
                </Form.Label>
                <Form.Control 
                    type="Number"
                    value={newProduto.categorias_id}
                    onChange={(e) => setNewProduto({...newProduto, categorias_id:parseInt(e.target.value)})}
                />
                   <Form.Label>
                   Preco
                </Form.Label>
                <Form.Control 
                    type="Number"
                    value={newProduto.preco}
                    onChange={(e) => setNewProduto({...newProduto, preco:parseInt(e.target.value)})}
                />
                   <Form.Label>
                    Estoque
                </Form.Label>
                <Form.Control 
                    type="Number"
                    value={newProduto.estoque}
                    onChange={(e) => setNewProduto({...newProduto, estoque:parseInt(e.target.value)})}
                />
                   <Form.Label>
                    Mumero Serial 
                </Form.Label>
                <Form.Control 
                    type="Number"
                    value={newProduto.num_serial}
                    onChange={(e) => setNewProduto({...newProduto, num_serial:parseInt(e.target.value)})}
                />
                   <Form.Label>
                    Promocao id
                </Form.Label>
                <Form.Control 
                    type="Number"
                    value={newProduto.promocao_id}
                    onChange={(e) => setNewProduto({...newProduto, promocao_id:parseInt(e.target.value)})}
                />
            </Form.Group>
            <Button className="mt-2" onClick={cadastroProdutos}>Adicionar Produto</Button>
        </Form>
    </>
  )
}


export default CadastrarProduto
