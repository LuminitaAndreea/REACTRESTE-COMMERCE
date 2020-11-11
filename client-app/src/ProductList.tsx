import {IProduct} from './models/product'
import React from 'react'
import { Item, Segment } from "semantic-ui-react";
import {Button} from 'react-bootstrap'



interface IProps{
    products:IProduct[];
    selectProduct: (id:string)=>void;
    deleteProduct: (productID:string)=>void;
}

const ProductList:React.FC<IProps>=({products,selectProduct,deleteProduct})=>{
    return (
    <Segment clearing>
        <Item.Group divided>
            {products.map(product=>(
                <Item key={product.productID}>
                    <Item.Image  src='https://react.semantic-ui.com/images/wireframe/image.png'x="0" y="0" width="20%" height="20%" />
                    <Button className="float-right" variant="outline-info" onClick={()=>selectProduct(product.productID)}>View</Button>
                    <Button className="float-right" variant="outline-danger" onClick={()=>deleteProduct(product.productID)}>Delete</Button>
                    <Item.Content>
                        <Item.Header as='a'> {product.productName}</Item.Header>
                        <Item.Meta>
                        <span className='price'>{product.price}</span>
                        </Item.Meta>
                        <Item.Meta>
                        <span className='stay'>{product.productSize}</span>
                        </Item.Meta>
                        <Item.Description >
                            <div>
                                {product.description}
                            </div>
                            
                        </Item.Description>
                        
                    </Item.Content>
                </Item>
            ))}
            
        </Item.Group>
    </Segment>
    )
}
export default ProductList