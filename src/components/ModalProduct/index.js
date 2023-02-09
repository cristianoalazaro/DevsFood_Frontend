import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux"; 

import { Container, 
         ProductArea, 
         ProductButtons, 
         ProductPhoto, 
         ProductInfoArea, 
         ProductDetails,
         ProductQuantityArea,
         ProductName,
         ProductIngredients,
         ProductButton,
         ProductQuantity,
         ProductPrice,
         ProductQtImage,
         ProductQtText
    } from './styled'

export default ({ data, setStatus }) => {
    const dispatch = useDispatch()

    const [qt, setQt] = useState(1);

    useEffect(() => {
        setQt(1)
    }, [data])

    const handleCancelButton = () => {
        setStatus(false);
    }

    const handleMinusQt = () => {
        if (qt > 1)
            setQt(qt - 1)
    }

    const handlePlusQt = () => {
        setQt(qt + 1)
    }

    const handleAddToCart = () => {
        //juntar as informações
        //enviar para o reducer
        //fechar o modal
        dispatch({
            type: 'ADD_PRODUCT',
            payload: { data, qt }
        })
        setStatus(false)
    }

    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtImage src="/assets/minus.png" alt="" onClick={handleMinusQt} />
                            <ProductQtText>{qt}</ProductQtText>
                            <ProductQtImage src="/assets/plus.png" alt="" onClick={handlePlusQt} />
                        </ProductQuantity>
                        <ProductPrice>
                            R$ {(data.price * qt).toFixed(2)}
                        </ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true} onClick={handleCancelButton}>Cancelar</ProductButton>
                <ProductButton onClick={handleAddToCart}>Adicionar ao carrinho</ProductButton>
            </ProductButtons>
        </Container>
    )
}