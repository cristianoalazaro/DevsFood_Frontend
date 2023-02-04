import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Header from '../../components/Header';
import { Container } from './styled';

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('')

    const handleButtonClick = () => {
        history.push('/tela2/testador');
    }


    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
        </Container>
    );
}