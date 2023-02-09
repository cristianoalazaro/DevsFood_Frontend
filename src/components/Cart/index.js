import React, { useState } from "react";
import { useSelector } from "react-redux";

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
    ProductsQuantityArea
} from './styled';

export default () => {
    const [show, setShow] = useState(true)

    const products = useSelector(state => state.cart.products)
    console.log(products)

    const handleCartClick = () => {
        setShow(!show)
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
                                {item.qt}
                            </ProductsQuantityArea>
                        </ProductsItem>
                    ))}

                </ProductsArea>
            </CartBody>
        </CartArea>
    )
}