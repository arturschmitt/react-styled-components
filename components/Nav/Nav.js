import React from "react"
import { MenuVertical, MenuVerticalBotao } from "./styled"

function Nav (){
    return(
        <>
            <MenuVertical>
                <ul>
                    <MenuVerticalBotao>Início</MenuVerticalBotao>
                    <MenuVerticalBotao>Em alta</MenuVerticalBotao>
                    <MenuVerticalBotao>Inscrições</MenuVerticalBotao>
                    <hr></hr>
                    <MenuVerticalBotao>Originais</MenuVerticalBotao>
                    <MenuVerticalBotao>Histórico</MenuVerticalBotao>
                </ul>
            </MenuVertical>
        </>
    )
}

export default Nav