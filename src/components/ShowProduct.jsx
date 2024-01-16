import React, {useEffect, useState} from 'react'

import {Link} from 'react-router-dom'

const endpoint= 'http://localhost:8000/api'
export const ShowProduct = () => {

    //al poner el hook le decimos al componenete que va a tener que cambiar de valor despues de renderizarse
    const [products, setProduct] = useState([])

    //Se usa en el primer renderizado
    useEffect( () =>{
        getAllProduct() //tras el primer renderizado obtenemos los datos
    },[])




    const getAllProduct= ()=>{
        fetch(endpoint+'/products')
        .then(respuesta => respuesta.json())
        .then(data => {

            console.log(data)
            setProduct(data)});
        
    }

    const deleteProduct = (id) => {
        fetch(endpoint+'/product/'+id)
        .then(respuesta => respuesta.json())
        .then(getAllProduct());
    }

    return (
        <div>
            <div>
                <Link to="/create">Para crear registro</Link>

            </div>
            <table>
                <thead>
                    <tr>
                        <th>Descripciones</th>
                        <th>Precio</th>
                        <th>Stock</th>

                    </tr>
                </thead>
                <tbody>
                    {products.map( (product) => (
                        <tr key={product.id}>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button onClick={()=>deleteProduct(product.id)}>borrar</button>
                            </td>
                        </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}
