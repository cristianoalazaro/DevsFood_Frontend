import React from "react";
import { useHistory, useLocation } from 'react-router-dom';

import { LinkArea, LinkIcon } from './styled'

export default ({ title, icon, link }) => {
    const history = useHistory();
    const location = useLocation();

    let isActive = location.pathname == link;

    const handleClink = (event) => {
        event.preventDefault();
        history.push( link )
    }

    return (
        <LinkArea id="tip-right" data-tip={title} data-for="tip-right" active={ isActive } href={link} onClick={handleClink}>
            <LinkIcon src={ icon } />
        </LinkArea>
    )
}