import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import {IProduct} from './models/product'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails';
import ProductForm from './ProductForm';


interface IProps{
    products:IProduct[]
    selectProduct: (id:string)=>void;
    selectedProduct:IProduct | null;
}

const ProductDashboard:React.FC<IProps>=({products,selectProduct,selectedProduct})=>{
    return (
        <Grid>
            <Grid.Column width={10}>
                <ProductList products={products} selectProduct={selectProduct}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedProduct && <ProductDetails product={selectedProduct}/>}
                <ProductForm/>
            </Grid.Column>
        </Grid>
    )
}
export default ProductDashboard