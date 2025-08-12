import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function AboutPage() {
  return (
    <>
      <Header />

      <main style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Dreamsky tech</strong>!  
          We are committed to providing the best travel experience with comfort, safety, 
          and great service. Our mission is to make your journey memorable and enjoyable.
        </p>

        <h2>Our Vision</h2>
        <p>
          To be the most trusted and customer-focused airline, offering world-class service 
          across the globe.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>Customer Satisfaction</li>
          <li>Safety First</li>
          <li>Innovation & Excellence</li>
        </ul>
      </main>

      <Footer />
    </>
  );
}
