import React from 'react';
import {Link} from 'react-router-dom';
import Product from '../components/Product';

const ProductPage = ({match}) => {
    
    return ( 
        <>
            <div>Product page</div> 
            <Product id={match.params.id}/>
            <Link to="/products" >Return to Products List.</Link>
        </>
     );
}
 
export default ProductPage;