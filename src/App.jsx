import React, { useState } from "react";
import servicesData from "./servicesData.json";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: Arial, sans-serif; }
        body { background: #f5f5f5; }
        a { text-decoration: none; color: inherit; }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          background: #08c334ce;
          color: #fff;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .logo { font-size: 22px; font-weight: bold; }
        nav ul { list-style: none; display: flex; gap: 20px; }
        nav li { cursor: pointer; }
        .menu-btn { display: none; font-size: 24px; cursor: pointer; }

        @media (max-width: 768px) {
          nav ul {
            position: absolute;
            top: 60px;
            right: 0;
            background: #0cae2768;
            flex-direction: column;
            width: 200px;
            padding: 15px;
            display: none;
          }
          nav ul.open { display: flex; }
          .menu-btn { display: block; }
        }

        section { padding: 60px 20px; }
        h2 { text-align: center; margin-bottom: 30px; }

        .home { background: #fff; display: flex; justify-content: center; }
        .slider {
          width: 100%;
          max-width: 800px;
          height: 300px;
          background: url('/page.jpeg') center/cover no-repeat;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }
        .card {
          background: #fff;
          color:black;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .card img { width: 80px; margin-bottom: 15px; }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(64, 198, 84, 0.15);
        }

        .about {
          background: #fff;
          color:black;
          max-width: 900px;
          margin: auto;
          border-radius: 10px;
        }
        form { display: grid; gap: 10px; margin-top: 20px; }
        input, textarea {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        button {
          background: #0b8a1cff;
          color: #fff;
          border: none;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
        }

        .sticky-icons {
          position: fixed;
          bottom: 20px;
          left: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 1000;
        }
        .sticky-icons a {
          width: 50px;
          height: 50px;
          background: #25d366;
          color: #fff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
        }
          nav a {
  color: #fff;
}

      `}</style>

      <header>
        <div className="logo">TaxCellent Consultants</div>
        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
        <nav>
          <ul className={menuOpen ? "open" : ""}>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="home">
        <div className="slider"></div>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          {servicesData.map(service => (
            <div className="card" key={service.id}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p><b>Address:</b> #39, Chakra Arcade, F4. Indian Bank Colony, 4th Main Road</p>
        <p><b>Phone:</b> +91 8248017114, +91 7418020011</p>
        <p><b>Email:</b> brucelee.cma.com</p>

        <h3 id="contact">Send Message</h3>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="4" placeholder="Your Message"></textarea>
          <button type="button">Send</button>
        </form>
      </section>

      <div className="sticky-icons">
        <a href="https://wa.me/918248017114" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <img src="/whatsapp.jfif"  alt="WhatsApp"
  style={{ borderRadius: "50%", width: "40px", height: "40px" }} />
        </a>
      </div>
    </>
  );
}
