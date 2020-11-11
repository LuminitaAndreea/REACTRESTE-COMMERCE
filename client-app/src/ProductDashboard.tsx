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
    editMode:boolean;
    setEditMode:(editMode:boolean)=>void;
    setSelectedProducts :(product:IProduct | null)=>void;
    createProduct:(product:IProduct)=>void;
    editProduct:(product:IProduct)=>void;
    deleteProduct:(productID:string)=>void;
}

const ProductDashboard:React.FC<IProps>=({
    editMode,
    setEditMode,
    products,
    selectProduct,
    selectedProduct,
    setSelectedProducts,
    createProduct,
    editProduct,
    deleteProduct
    })=>{
    return (
        <Grid>
            <Grid.Column width={10}>
                <ProductList products={products} selectProduct={selectProduct}
                deleteProduct={deleteProduct}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedProduct && !editMode &&(
                <ProductDetails 
                product={selectedProduct}
                setEditMode={setEditMode}
                setSelectedProducts={setSelectedProducts}/>
                )}
                {editMode &&(
                <ProductForm setEditMode={setEditMode} product={selectedProduct!} 
                createProduct={createProduct} editProduct={editProduct}/>
                 )}
            </Grid.Column>
        </Grid>
    )
}
export default ProductDashboard