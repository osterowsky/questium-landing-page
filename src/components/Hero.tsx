import './Hero.css';
import WaitlistButton from './WaitlistButton'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-purple">Stop missing</span>
            <br />
            <span className="hero-title-black">more opportunities</span>
          </h1>
          
          <p className="hero-description">
            Questium enables students in the European Union (EU) like you to 
            never miss out on upcoming opportunities that exactly match your major, interests 
            and location. Executive exchanges to New York, hackathons at Google's office, or a 
            €1,000 scholarship. Do you want to miss out on opportunities like these?
          </p>
          
          <div className="hero-waitlist">
            <p className="waitlist-title">Join the waitlist</p>
            <p className="waitlist-subtitle">Be the first to not miss any opportunities</p>
            <WaitlistButton />
          </div>
        </div>
      </div>
    </section>
  );
}