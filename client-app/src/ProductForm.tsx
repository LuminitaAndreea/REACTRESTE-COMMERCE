import React from 'react'
import {Form, Segment} from 'semantic-ui-react'

const ProductForm =()=>{
    return(
        <Segment>
            <Form>
                <Form.Input placeholder='Name'/>
                <Form.Input placeholder='Img1'/>
                <Form.Input placeholder='Img2'/>
                <Form.Input placeholder='Price'/>
                <Form.Input placeholder='Size'/>
                <Form.TextArea rows={2} placeholder='Description'/>
                <Form.Input placeholder='Subcategory'/>
            </Form>
        </Segment>
    )
}
export default ProductForm