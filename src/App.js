import React from "react";
import BlockchainList from "./components/BlockchainList";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>BEEBOO AI - Blockchain Analytics and Services</h1>
      </header>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#faq">FAQs</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="home" className="section">
        <h2>Welcome to BEEBOO AI</h2>
        <p>
          BEEBOO AI offers powerful blockchain analytics and services, using cutting-edge artificial intelligence to help you understand and optimize your blockchain investments and strategies.
        </p>
      </section>

      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          At BEEBOO AI, we leverage the power of AI and blockchain analytics to help businesses and individuals make smarter decisions. Our platform provides deep insights into blockchain data, enabling users to track and predict market movements.
        </p>
      </section>

      <section id="services" className="section">
        <h2>Our Services</h2>
        <ul>
          <li>Real-time blockchain market tracking</li>
          <li>AI-powered predictive analytics</li>
          <li>Custom blockchain portfolio management</li>
          <li>Blockchain security and compliance services</li>
        </ul>
      </section>

      <section id="faq" className="section">
        <h2>FAQs</h2>
        <ul>
          <li>
            <strong>What is BEEBOO AI?</strong> - A blockchain analytics and AI-powered service platform that provides insights and optimizations for blockchain investments.
          </li>
          <li>
            <strong>How does it work?</strong> - We collect and analyze blockchain data using AI algorithms to help you track trends and make data-driven decisions.
          </li>
          <li>
            <strong>Is my data secure?</strong> - Yes, we prioritize security, with robust encryption and decentralized storage for all sensitive data.
          </li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:support@beebooai.com">support@beebooai.com</a></p>
      </section>

      <BlockchainList />

      <footer>
        <p>&copy; 2025 BEEBOO AI | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;

