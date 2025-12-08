export default function GlobalLayout({ children }: { children: React.ReactNode }) { 
    return (
        <body>
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
    )
}

function Header() {
    return (
        <header>
        <a href='/'><h1>Ouirise Initiative</h1></a>
        <nav>
        <ul>
            <li><a href="/#services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>    
        </header>
    )
}

import {SocialIcon} from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'

function Footer() {
    return (
    <footer className="footer">
        
        <section className="links">
            <h2 className="strong">Get Connected</h2>
            <a href="mailto:au.iris.30@gmail.com">au.iris.30@gmail.com</a>
            <a href="tel:+19804867595">(980) 486-7595</a>
            
            <div className="grid">
            <SocialIcon className="social" url="www.instagram.com" href="https://www.instagram.com/ouirise.initiative/" bgColor={`rgba(38, 38, 38, 0.5);`} />
            <SocialIcon className="social" url="www.facebook.com" href="https://www.facebook.com/" bgColor={`rgba(38, 38, 38, 0.5);`} />
            </div>
      </section>

              <a className="em" href="/"><h2 className="em">Ouirise Initiative</h2></a>

      
        <form id="contact" className="contact-form">
            <h2 className="strong">Contact Us</h2>
            <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
                Message
                <textarea name="message" placeholder="Your message"></textarea>
            </label>
            <button className="btn" type="button">Send</button>
            
        </form>
    

  </footer>
    )
}