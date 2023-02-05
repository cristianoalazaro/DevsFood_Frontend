import React from "react";

import { Container, CategoryImage } from './styled'

export default ({ data, active, setActiveCategory }) => {
    const handleCategoryClick = () => {
        setActiveCategory(data.id)
    }

    return (
        <Container
            active={active}
            id={data.id}
            onClick={handleCategoryClick}
            data-tip={data.name}
            data-for="tip-top"
        >
            <CategoryImage src={data.image} />
        </Container>
    )
}