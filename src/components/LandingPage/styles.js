import styled from "styled-components"
import ReactModal from "react-modal"
import MobileImageHeader from "../../assets/mobile/image-header.jpg"
import Cherry from "../../assets/mobile/image-graphic-design.jpg"
import Orange from "../../assets/mobile/image-photography.jpg"
export const Container = styled.div`
    display: flex;
    flex-direction: column;
`
export const Modal = styled(ReactModal)`
    display: flex;
    justify-content: space-between;
    width: 60%;
    height: 13rem;
    margin: 5rem auto;
    padding: 2.5rem;
    flex-direction: column;
    background: var(--white);
    text-align: center;
    color: var(--dark-grayish-blue);

    #contact {
        background: var(--yellow);
        padding: 0.8rem 0.5rem;
        margin: 0 auto;
        width: 50%;
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        border-radius: 50px;
        text-transform: uppercase;
        color: var(--desatured-blue);
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${MobileImageHeader});
    background-size: 100%;
    background-repeat: no-repeat;
    height: 505px;
    padding: 1rem;

    section {
        display: flex;
    }

    h1 {
        text-align: center;
        font-size: 5rem;
    }

    #arrow-down {
        height: 100px;
        width: 32px;
    }
`

export const Section = styled.div`
    text-align: center;

    p {
        color: var(--dark-grayish-blue);
    }

    div, img {
        width: 100%;
        height: 23rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    
`
export const GraphicSection = styled.div`
    height: 550px;
    background: url(${Cherry});
    background-size: 100%;
    background-repeat: no-repeat;
    text-align: center;
    color: var(--desatured-cyan);

    div {
        height: 550px;
        padding-top: 100%;
        background-size: 100%;
        background-repeat: no-repeat;
        text-align: center;
    }
`

export const PhotographySection = styled.div`
    height: 600px;
    background: url(${Orange});
    background-size: 100%;
    background-repeat: no-repeat;
    text-align: center;
    color: var(--dark-blue);
    div {
        height: 600px;
        padding-top: 100%;
        background-size: 100%;
        background-repeat: no-repeat;
        text-align: center;
    }
`
export const Comments = styled.div`
    text-align: center;
    color: var(--dark-grayish-blue);
`
export const UserComment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2.5rem auto;
    img {
        width: 25%;
        border-radius: 50%;
    }
    p {
        color: var(--darkest-grayish-blue);
        margin: 1rem 2.5rem;
    }
    h3 {
        color: var(--desatured-blue);
    }
`
export const Gallery = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    img {
        width: 50%;
    }
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 20rem;
    padding: 2.5rem;
    background-color: #90d4c5;
    color: var(--moderate-cyan);

    img {
        filter: invert(45%) sepia(15%) saturate(1254%) hue-rotate(116deg) brightness(90%) contrast(94%);
    }
    
    #footer_links {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }

    #footer_icons {
        display: flex;
        width: 100%;
        justify-content: center;
        img {
            margin: 0.5rem;
        }
    }
`

export const Attribution = styled.div`
    font-size: 11px; text-align: center;
    a { color: hsl(228, 45%, 44%); }
`