import React from 'react'
import { Card } from 'semantic-ui-react'
import {IProduct} from './models/product'
import {Button} from 'react-bootstrap'

interface IProps{
    product:IProduct
    setEditMode:(editMode:boolean)=>void;
    setSelectedProducts: (product:IProduct | null)=>void;
}

 const ProductDetails:React.FC<IProps>=({product,setEditMode,setSelectedProducts})=>{
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
                <Button className="float-left"  variant="outline-success" onClick={()=>setEditMode(true)}>
                    Edit
                </Button>
                <Button onClick={()=>setSelectedProducts(null)} className="float-left" >
                    Cancel
                </Button>
                </div>
            </Card.Content>
    </Card>
     )
 }
  export default ProductDetails