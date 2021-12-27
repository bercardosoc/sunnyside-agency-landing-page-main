import styled from "styled-components"
import MobileImageHeader from "../../assets/mobile/image-header.jpg"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${MobileImageHeader});
    background-size: 100%;
    background-repeat: no-repeat;
    height: 538px;
    padding: 1rem;

    h1 {
        text-align: center;
        font-size: 5rem;
    }

    #arrow-down {
        height: 100px;
        width: 32px;
    }
`

export const MenuItems = styled.div`
    display: none;
`
export const Attribution = styled.div`
    font-size: 11px; text-align: center;
    a { color: hsl(228, 45%, 44%); }
`