import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import ReactTooltip from 'react-tooltip';

import Header from '../../components/Header';
import { Container, 
         CategoryArea, 
         CategoryList, 
         ProductArea, 
         ProductList,
         ProductPaginationArea,
         ProductPaginationItem
        } from './styled';
import CategoryItem from '../../components/CategoryItem'
import api from '../../api'
import ProductItem from '../../components/ProductItem';

export default () => {
    const history = useHistory();

    const [headerSearch, setHeaderSearch] = useState('')
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    const [activeCategory, setActiveCategory] = useState(0)
    const [activePage, setActivePage] = useState(0)

    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategorias();
            if (cat.error == '')
                setCategories(cat.result)

            ReactTooltip.rebuild();
        }
        getCategories()
    }, [])

    useEffect(() => {
        setProducts([])
        getProducts()
    }, [activeCategory, activePage])

    const getProducts = async () => {
        const prods = await api.getProducts();
        if (prods.error == ''){
            console.log(prods.result.pages)
            setProducts(prods.result.data)
            setTotalPages(prods.result.pages)
            setActivePage(prods.result.page)
        }
    }


    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />

            {categories.length > 0 &&
                <CategoryArea>
                    Selecione uma categoria
                    <CategoryList>
                        <CategoryItem
                            data={{
                                id: 0,
                                name: 'Todas as categorias',
                                image: '/assets/food-and-restaurant.png'
                            }}
                            active={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                        {categories.map((item, index) => (
                            <CategoryItem
                                key={index}
                                data={item}
                                active={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        ))}
                    </CategoryList>
                </CategoryArea>
            }
            <ProductArea>
                <ProductList>
                    {products.map((item, index) => (
                        <ProductItem 
                            key={index}
                            data={item}
                        />
                    ))}
                </ProductList>
            </ProductArea>

            {totalPages > 0 && 
                <ProductPaginationArea>
                    {Array(totalPages).fill(0).map((_, index) => (
                        <ProductPaginationItem 
                            key={index}
                            active={activePage}
                            current={index + 1}
                            onClick={() => setActivePage(index + 1)}
                        >
                            {index + 1}
                        </ProductPaginationItem>
                    ))}
                </ProductPaginationArea>
            }
        </Container>
    );
}