export default function GlobalLayout({ children }: { children: React.ReactNode }) { 
    return (
        <>
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
}

import { useState, type FormEvent } from 'react'
import {SocialIcon} from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'
import { MdOutlineMenu } from "react-icons/md";
import { supabase } from '~/supabaseClient'

function Header() {
    const [active, setActive] = useState(true)

    if (active) return (
        <header>
            <h1 onClick={() => setActive(false)}>OuiRise Initiative</h1>
            <MdOutlineMenu className="nav" onClick={() => setActive(false)} />
            
            
        </header>
    )

    return (
        <header>
            <a href="/"><h1 onClick={() => setActive(true)}>OuiRise</h1></a>
            <nav className="new">
                <a className="desktop" href="/" onClick={() => setActive(true)}>Home</a>
                <a href="/#services">Services</a>
                <a href="#contact">Contact</a>
                <a href="/about">About</a>
            </nav>
        </header>
    )
}



function Footer() {
    return (
    <footer id="footer" className="footer">
        
        <section className="links">
            <h2 className="strong">get connected</h2>
            <a href="mailto:au.iris.30@gmail.com">au.iris.30@gmail.com</a>
            <a href="tel:+19804867595">(980) 486-7595</a>
            <div></div>
            
            <div className="grid">
            <SocialIcon className="social" url="www.instagram.com" href="https://www.instagram.com/ouirise.initiative/" bgColor={`rgba(38, 38, 38, 0.5)`} />
            <SocialIcon className="social" url="www.facebook.com" href="https://www.facebook.com/" bgColor={`rgba(38, 38, 38, 0.5)`} />
            </div>
            <div></div>
      </section>
           
                <a className="heading" href="/" id="contact">
                <h2>OuiRise Initiative</h2>
                <img src={`/images/iris-logo.png`} alt="OuiRise Initiative Logo"/>
                </a>

      
        {/* <Contact /> */}
    

  </footer>
    )
}


import { MessageSchema } from "~/schemas/message"; // adjust path if needed



function Contact() {
    const [displayError, setDisplayError] = useState()
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    function toast(msg: string) {
    const div = document.createElement("div");
    div.innerText = msg;

    div.style.position = "fixed";
    div.style.bottom = "20px";
    div.style.left = "50%";
    div.style.transform = "translateX(-50%)";
    div.style.background = "black";
    div.style.color = "white";
    div.style.padding = "10px 16px";
    div.style.borderRadius = "6px";
    div.style.zIndex = "9999";

    document.body.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 3000);
    }

    function checkRateLimit() {
    const now = Date.now();
    const last = Number(localStorage.getItem("last_message_submit") || 0);

    // 30 seconds cooldown example
    if (now - last < 30000) {
        return false; // too soon
    }

    localStorage.setItem("last_message_submit", now.toString());
    return true;
    }



  // Rate limit check
  if (!checkRateLimit()) {
    toast("Too many requests. Please wait a moment.");
    return;
  }

  const form = new FormData(e.currentTarget);

  const data = {
    name: form.get("name"),
    email: form.get("email"),
    message: form.get("message"),
  };

  // Zod validation
  const parsed = MessageSchema.safeParse(data);

  if (!parsed.success) {
    toast(parsed.error.issues[0].message);
    return;
  }

  const { error } = await supabase.from("messages").insert(parsed.data);

  if (error) {
    console.error(error);
    toast("Something went wrong.");
    return;
  }

  toast("Message sent!");
  e.currentTarget.reset();
}

    return (
    <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
            <h2 className="strong">Leave a message</h2>
            <label>Name
                <input type="text" name="name" placeholder="" />
            </label>
            <label>Email
                <input type="email" name="email" placeholder="ouirise@mail.org" />
            </label>
            <label>
                Message
                <textarea name="message" placeholder="..."></textarea>
            </label>
            <button className="btn" type="button">Send</button>
            
            <div id="contact" className="hidden">.</div>
        </form>
 )
}