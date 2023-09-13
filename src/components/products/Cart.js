import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../store/cartSlice'

function Cart() {

  const cartProducts = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const removeFromCart = (product) => {
    dispatch(remove(product))
  }

  const card = cartProducts.map(product =>
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
          <Button variant='danger' onClick={() => removeFromCart(product.id)}>Remove From Cart</Button>
        </Card.Body>
      </Card>
    </div>
  )
  const image = <img src='https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png?f=webp' width={'80%'} height={600} />
  return (
    <div className='row'>
      {
        cartProducts.length > 0 ? card : image
      }
    </div>
  )
}

export default Cart