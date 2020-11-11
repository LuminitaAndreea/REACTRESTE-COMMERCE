import React from 'react'
import { Card,Button } from 'semantic-ui-react'
import {IProduct} from './models/product'

interface IProps{
    product:IProduct
}

 const ProductDetails:React.FC<IProps>=({product})=>{
     return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{product.productName}</Card.Header>
                <Card.Meta>{product.price}</Card.Meta>
                <Card.Description>
                {product.description} <strong>{product.productSize}</strong>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button basic color='green'>
                    Edit
                </Button>
                <Button basic color='red'>
                    Delete
                </Button>
                </div>
            </Card.Content>
    </Card>
     )
 }
  export default ProductDetails