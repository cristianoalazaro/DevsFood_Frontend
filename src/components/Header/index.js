import React from "react";
import { useState } from "react";

import { Container, Logo, SearchInput } from './styled'

export default ({ search, onSearch }) => {
    const [inputActive, setInputActive] = useState(search == '' ? false : true);

    const handlerInputFocus = () => {
        setInputActive(true)
    }

    const handlerInputBlur = () => {
        if (search == '')
            setInputActive(false)
    }

    const handleChange = (event) => {
        onSearch(event.target.value);
    }

    return (
        <Container>
            <Logo src='/assets/logo.png' />
            <SearchInput
                type="text"
                placeholder="Digite um produto..."
                active={inputActive}
                onFocus={handlerInputFocus}
                onBlur={handlerInputBlur}
                value={search}
                onChange={handleChange}
            />
        </Container>
    )
}