import React from "react";

import { Container, ModalBody } from './style'

export default ({status, setStatus, children }) => {

    const handleModalClick = (event) => {
        if (event.target.classList.contains('modalBg'))
            setStatus(false);
    }

    return (
        <Container 
            className="modalBg"
            status={status} 
            onClick={handleModalClick}>
            <ModalBody>
                {children}
            </ModalBody>
        </Container>
    )
}