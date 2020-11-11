import {IProduct} from './models/product'
import React from 'react'
import { Button, Item, Segment } from "semantic-ui-react";


interface IProps{
    products:IProduct[];
    selectProduct: (id:string)=>void;
}

const ProductList:React.FC<IProps>=({products,selectProduct})=>{
    return (
    <Segment clearing>
        <Item.Group divided>
            {products.map(product=>(
                <Item key={product.productID}>
                    <Item.Image  src='https://react.semantic-ui.com/images/wireframe/image.png'x="0" y="0" width="20%" height="20%" />

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
                        <Button onClick={()=>selectProduct(product.productID)} 
                        floated='right' content='view' color='blue'/>
                    </Item.Content>
                </Item>
            ))}
            
        </Item.Group>
    </Segment>
    )
}
export default ProductList