import { MenuItems, Attribution, Container, Header, Section, GraphicSection, PhotographySection, UserComment, Comments, Gallery, Footer } from "./styles"

import Logo from "../../assets/logo.svg"
import ArrowDown from "../../assets/icon-arrow-down.svg"
import Egg from "../../assets/mobile/image-transform.jpg"
import PinkCup from "../../assets/mobile/image-stand-out.jpg"
import Emily from "../../assets/image-emily.jpg"
import Thomas from "../../assets/image-thomas.jpg"
import Jennie from "../../assets/image-jennie.jpg"
import Milks from "../../assets/mobile/image-gallery-milkbottles.jpg"
import Orange from "../../assets/mobile/image-gallery-orange.jpg"
import Cone from "../../assets/mobile/image-gallery-cone.jpg"
import Sugars from "../../assets/mobile/image-gallery-sugar-cubes.jpg"
import Facebook from "../../assets/icon-facebook.svg"
import Instagram from "../../assets/icon-instagram.svg"
import Twitter from "../../assets/icon-twitter.svg"
import Pinterest from "../../assets/icon-pinterest.svg"

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
        <Section>
        <div>
          <img src={Egg}/>
        </div>
        <div className="content">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.
          </p>
          <h3>
          Learn more
          </h3>
        </div>
        </Section>
        <Section>
          <div>
            <img src={PinkCup} />
          </div>
          <div>
            <h2>
              Stand out to the right audience
            </h2>
            <p>
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
            </p>
            <h3>
            Learn more
            </h3>
          </div>
        </Section>
        <GraphicSection>
        <div>
          <h2>Graphic design</h2>
          <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>
        </GraphicSection>
        <PhotographySection>
        <div>
          <h2>Photography</h2>
          <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
        </PhotographySection>
        <Comments>
          <h4>Client testimonials</h4>
          <UserComment>
            <img src={Emily}/>
            <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <h3>Emily R.</h3>
            <span>Marketing Director</span>
          </UserComment>
          <UserComment>
            <img src={Thomas}/>
            <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
            <h3>Thomas S.</h3>
            <span>Chief Operating Officer</span>
          </UserComment>
          <UserComment>
          <img src={Jennie}/>
            <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
            <h3>Jennie F.</h3>
            <span>Business Owner</span>
          </UserComment>
        </Comments>
        <Gallery>
          <img src={Milks}/>
          <img src={Orange}/>
          <img src={Cone}/>
          <img src={Sugars}/>
        </Gallery>
        <Footer>
          <img src={Logo}/>
          <div id="footer_links">
            <span>About</span>
            <span>Services</span>
            <span>Projects</span>
            <span>Contact</span>
          </div>
          <div id="footer_icons">
            <img src={Facebook}/>
            <img src={Instagram}/>
            <img src={Twitter}/>
            <img src={Pinterest}/>
          </div>

          <Attribution>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/bercardosoc" target="_blank" >Bernardo Costa</a>.
          </Attribution>

        </Footer>
</Container>
  )
}

export default LandingPage