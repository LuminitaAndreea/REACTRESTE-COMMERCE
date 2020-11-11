import React, {useState,useEffect,Fragment} from 'react';
import './App.css';
import axios from 'axios';
import { Container, List } from 'semantic-ui-react'
import NavBar from './NavBar';
import {IProduct} from './models/product'
import ProductDashboard from './ProductDashboard';
import { Button } from 'react-bootstrap'
import CreateProduct from './CreateProduct';

interface IProps{
  openCreateForm:()=>void;
}

const App =() => {
  
  const [products, setProducts]=useState<IProduct[]>([]);
  const[selectedProducts,setSelectedProducts]=useState<IProduct | null >(null);

  const handleSelectProduct=(id: string)=>{
    setSelectedProducts(products.filter(a=>a.productID==id)[0])
  }

  const[editMode,setEditMode]=useState(false);

  const handleOpenCreateForm=()=>{
    setSelectedProducts(null);
    setEditMode(true);

  }

  const handleCreateProduct=(product:IProduct)=>{
    setProducts([...products,product])
    setSelectedProducts(product);
    setEditMode(false);
  }

  const handleEditProduct=(product:IProduct)=>{
    setProducts([...products.filter(a=>a.productID!==product.productID),product])
    setSelectedProducts(product);
    setEditMode(false);
  }

  const handleDeleteProduct=(productID:string)=>{
    setProducts([...products.filter(a=>a.productID!==productID)])
  }

  useEffect(() => {
    axios
    .get<IProduct[]>('https://localhost:44301/api/Products')
     .then(response=>{
       setProducts(response.data)
     });
  }, []);

  return (
  <Fragment> 
       
    { <NavBar/> }
    <Container style={{marginTop:'7em'}}>
      <CreateProduct openCreateForm={handleOpenCreateForm}/>
      <ProductDashboard products={products}
       selectProduct={handleSelectProduct}
       selectedProduct={selectedProducts}
       editMode={editMode}
       setEditMode={setEditMode}
       setSelectedProducts={setSelectedProducts}
       createProduct={handleCreateProduct}
       editProduct={handleEditProduct}
       deleteProduct={handleDeleteProduct}
       />
    </Container>
        
  </Fragment>
  );

}
export default App;
