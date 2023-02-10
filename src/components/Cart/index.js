import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    CartArea,
    CartHeader,
    CartIcon,
    CartText,
    CartBody,
    CartDown,
    ProductsArea,
    ProductsItem,
    ProductsPhoto,
    ProductsInfoArea,
    ProductsName,
    ProductsPrice,
    ProductsQuantityArea,
    ProductsQtIcon,
    ProductsQtText
} from './styled';

export default () => {
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()
    const products = useSelector(state => state.cart.products)
    console.log(products)

    const handleCartClick = () => {
        setShow(!show)
    }

    const handleProductChange = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: { key, type }
        })      
    }

    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src="/assets/cart.png" />
                <CartText>Meu carrinho ({products.length})</CartText>
                {show &&
                    <CartDown src="/assets/down.png" />
                }
            </CartHeader>
            <CartBody show={show}>
                <ProductsArea>
                    {products.map((item, index) => (
                        <ProductsItem key={index}>
                            <ProductsPhoto src={item.image} />
                            <ProductsInfoArea>
                                <ProductsName>{item.name}</ProductsName>
                                <ProductsPrice>R$ {item.price.toFixed(2)}</ProductsPrice>
                            </ProductsInfoArea>
                            <ProductsQuantityArea>
                                <ProductsQtIcon 
                                    src="/assets/minus.png" 
                                    onClick={() => handleProductChange(index, '-')}    
                                />
                                <ProductsQtText>{item.qt}</ProductsQtText>
                                <ProductsQtIcon 
                                    src="/assets/plus.png" 
                                    onClick={() => handleProductChange(index, '+')}        
                                />                                
                            </ProductsQuantityArea>
                        </ProductsItem>
                    ))}

                </ProductsArea>
            </CartBody>
        </CartArea>
    )
}