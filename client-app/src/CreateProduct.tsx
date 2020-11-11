import React from 'react'
import {Button} from 'react-bootstrap'

interface IProps{
  openCreateForm:()=>void;
}
const CreateProduct:React.FC<IProps>=({openCreateForm})=>{
return (
  <Button onClick={openCreateForm} className="float-right" variant="outline-success">Add New Product</Button>
)
};
export default CreateProduct;