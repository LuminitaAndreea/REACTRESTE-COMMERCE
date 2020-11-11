import React,{FormEvent, useState} from 'react'
import {Form, Segment} from 'semantic-ui-react'
import {Button} from 'react-bootstrap'
import { IProduct } from './models/product'
import {v4 as uuid} from 'uuid';

interface IProps{
    setEditMode:(editMode:boolean)=> void;
    product:IProduct;
    createProduct:(product:IProduct)=>void;
    editProduct:(product:IProduct)=>void;
}

const ProductForm :React.FC<IProps>=({
    setEditMode,
    product:initialFormState,
    createProduct,
    editProduct})=>{

    const initializeForm=()=>{
        if(initialFormState){
            return initialFormState;
        }
        else{
            return{
                productID:'',
                productName: '',
                productImg1:'',
                productImg2:'',
                price:'',
                productSize:'',
                description:'',
                subCategoryID:''
            };
        }
    };

    const[product,setProduct]=useState<IProduct>(initializeForm);

    const handleSubmit=()=>{
        if(product.productID.length===0){
            let newProduct={
                ...product,
                productID: uuid()
            }
            createProduct(newProduct);
        }
        else{
            editProduct(product);
        }
    };

    const handleInputChange=(event: FormEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const{name,value}=event.currentTarget;
        setProduct({...product, [name]:value});
    };

    return(
        <Segment>
            <Form onSubmit={handleSubmit}>
                <Form.Input onChange={handleInputChange} name='productName' placeholder='productName' value={product.productName}/>
                <Form.Input onChange={handleInputChange} name='productImg1' placeholder='productImg1'value={product.productImg1}/>
                <Form.Input onChange={handleInputChange} name='productImg2' placeholder='productImg2'value={product.productImg2}/>
                <Form.Input onChange={handleInputChange} name='price' placeholder='Price'value={product.price}/>
                <Form.Input onChange={handleInputChange} name='productSize' placeholder='productSize'value={product.productSize}/>
                <Form.TextArea onChange={handleInputChange} name='description' rows={2} placeholder='description'value={product.description}/>
                <Form.Input onChange={handleInputChange} name='subcategoryID' placeholder='subcategoryID'value={product.subCategoryID}/>
                <Button className="float-left" variant="outline-success" type='submit' >Submit</Button>
                <Button onClick={()=>setEditMode(false)}
                 className="float-left" >Cancel</Button>

            </Form>
        </Segment>
    )
}
export default ProductForm