import React, { useEffect, useState } from 'react'
import { instance } from '../../axios/instance'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add } from '../../store/cartSlice';


function Product() {

    const [products, getProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        instance.get('')
            .then(product => getProducts(product.data))
            .catch(error => console.log(error))
    }, [])

    const addTocart = (product) => {
        dispatch(add(product))
    }

    console.log(products);

    const card = products.map(product =>
        <div key={product.id} className='col-md-3'>
            <Card style={{ width: '18rem', height: '28rem', margin: '10px' }}>
                <Card.Img variant="top" height={200} src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title.slice(0, 25)}</Card.Title>
                    <Card.Text>
                        {product.description.slice(0, 50)}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button onClick={() => addTocart(product)}>Add To Cart</Button>

                </Card.Body>
            </Card>
        </div>
    )

    return (
        <>
            <div className='row'>
                {card}
            </div>
        </>
    )

}

export default Product