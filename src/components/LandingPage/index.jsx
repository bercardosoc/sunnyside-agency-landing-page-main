import { MenuItems, Attribution, Container, Header } from "./styles"

import Logo from "../../assets/logo.svg"
import ArrowDown from "../../assets/icon-arrow-down.svg"

const LandingPage = () => {
    return (
        
        <Container>
        <Header>
        <div>
        <img src={Logo}/>
        <MenuItems>
          About
          Services
          Projects
          Contact
        </MenuItems>
        </div>
        <h1>We are creatives</h1>
        <img src={ArrowDown} id="arrow-down" />
        </Header>

  We are creatives

  Transform your brand

  We are a full-service creative agency specializing in helping brands grow fast. 
  Engage your clients through compelling visuals that do most of the marketing for you.

  Learn more

  Stand out to the right audience

  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 

  Learn more

  Graphic design
  Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.

  Photography
  Increase your credibility by getting the most stunning, high-quality photos that improve your business image.

  Client testimonials

  We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
  Emily R.
  Marketing Director

  Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
  Thomas S.
  Chief Operating Officer

  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
  Jennie F.
  Business Owner

  About
  Services
  Projects
  Contact

  <Attribution>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Bernardo Costa</a>.
  </Attribution>

</Container>
  )
}

export default LandingPage