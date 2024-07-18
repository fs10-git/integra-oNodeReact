import {React, useState, useEffect} from "react"
import { Form,Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { getData, updateData} from "../services/services"

function EditarProdutos() {
    const {id} = useParams();
    const [produto,setProduto] = useState({
        cor:"",
        tamanho:"",
        categorias_id:0,
        preco:0,
        estoque:0,
        num_serial:0,
        promocao_id:0
    })

    const navigate = useNavigate()

    useEffect(() => {
        fetchProdutos()
    },[])

    const fetchProdutos = async () => {
        const result = await getData()
        const produto = result.data.find(produto => produto.id === parseInt(id))
        setProduto(produto)
    }

    const handleUpdate = async() => {
        await updateData(id,produto)
        navigate("/")
    }

    return (
        <>
            <h1>Pagina de Editar</h1>
            <Form>
            <Form.Group controlId="formproduto">
                <Form.Label>
                    Cor
                </Form.Label>
                <Form.Control 
                    type="text"
                    value={produto.cor}
                    onChange={(e) => setProduto({...produto, cor:e.target.value})}
                />
                   <Form.Label>
                   Tamanho
                </Form.Label>
                <Form.Control 
                    type="text"
                    value={produto.tamanho}
                    onChange={(e) => setProduto({...produto, tamanho:e.target.value})}
                />
                   <Form.Label>
                   Categorias_id
                </Form.Label>
                <Form.Control 
                    type="Number"
                    value={produto.categorias_id}
                    onChange={(e) => setProduto({...produto, categorias_id:parseInt(e.target.value)})}
                />
                   <Form.Label>
                   Preco
                </Form.Label>
                <Form.Control 
                    type="Number"
                    value={produto.preco}
                    onChange={(e) => setProduto({...produto, preco:parseInt(e.target.value)})}
                />
                   <Form.Label>
                    Estoque
                </Form.Label>
                <Form.Control 
                    type="Number"
                    value={produto.estoque}
                    onChange={(e) => setProduto({...produto, estoque:parseInt(e.target.value)})}
                />
                   <Form.Label>
                    Mumero Serial 
                </Form.Label>
                <Form.Control 
                    type="Number"
                    value={produto.num_serial}
                    onChange={(e) => setProduto({...produto, num_serial:parseInt(e.target.value)})}
                />
                   <Form.Label>
                    Promocao id
                </Form.Label>
                <Form.Control 
                    type="Number"
                    value={produto.promocao_id}
                    onChange={(e) => setProduto({...produto, promocao_id:parseInt(e.target.value)})}
                />
            </Form.Group>
            <Button className="mt-2" onClick={handleUpdate}>Editar Produto</Button>
        </Form>
        </>
    )
}

export default EditarProdutos