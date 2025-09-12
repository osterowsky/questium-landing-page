import './About.css';
import patryk from '../assets/patryk.JPG';

export default function About() {
  return (
    <section className="about" id="About">
      <div className="about-container">
        <h1 className="about-title">About</h1>
        
        <div className="about-content">
          <div className="about-image">
            <img src={patryk} alt="Patryk - Founder of Questium" />
          </div>
          
          <div className="about-text">
            <p>
              Hey, I'm <strong>Patryk</strong>. I grew up in a small town with very <strong>limited resources</strong>. 
              Throughout high school and the beginning of university, I missed out on <strong>countless opportunities</strong> from 
              scholarships to summer schools. Simply because I <strong>didn't even know</strong> they existed. 
              This is <strong>not just</strong> my story. Surveys in education access show that one of <strong>the biggest barriers</strong> for students is not 
              ability or motivation, but <strong>awareness</strong>. My goal is simple: to <strong>close this awareness gap</strong>. 
              I'm building a decentralized platform that <strong>brings all</strong> scholarships, programs, events, fellowships and funding 
              opportunities into <strong>one place</strong>. Students in<strong> EU</strong> won't 
              have to rely on luck, chance, or connections. <strong>Just sign to</strong> the 
              waitlist, follow, and stay updated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}