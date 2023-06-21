import React from "react"
import { StyledHeader } from "./styled"


function Header(){
    return(
        <>
            <StyledHeader>
                <h1>Video</h1>
                <input type="text" placeholder="Busca" id="campoDeBusca"></input>
            </StyledHeader>
        </>
    )
}

export default Header;