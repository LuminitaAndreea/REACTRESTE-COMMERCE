import React, {useState,useEffect,Fragment} from 'react';
import './App.css';
import axios from 'axios';
import { Container, List } from 'semantic-ui-react'
import NavBar from './NavBar';
import {IProduct} from './models/product'
import ProductDashboard from './ProductDashboard';



const App =() => {
  
  const [products, setProducts]=useState<IProduct[]>([]);
  const[selectedProducts,setSelectedProducts]=useState<IProduct | null >(null);

  const handleSelectProduct=(id: string)=>{
    setSelectedProducts(products.filter(a=>a.productID==id)[0])
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
      <ProductDashboard products={products}
       selectProduct={handleSelectProduct}
       selectedProduct={selectedProducts}
       />
    </Container>
        
  </Fragment>
  );

}
export default App;
