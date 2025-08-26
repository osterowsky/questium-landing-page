import './TermsOfService.css';
import Nav from './Nav';
import Footer from './Footer';

export default function TermsOfService() {
  return (
    <>
      <Nav />
      <main className="terms-page">
        <div className="terms-container">
          <h1 className="terms-title">Terms of Service</h1>
          
          <div className="terms-content">
            <section className="terms-section">
              <h2>1. Operator Information</h2>
              <p>
                This website ("Questium", "we", "our") is operated by:<br />
                Company name: Questium<br />
                Legal representative: Patryk Ostern<br />
                Email: patryk.ostern@questium.de
              </p>
            </section>

            <section className="terms-section">
              <h2>2. Scope of Service</h2>
              <p>
                Questium currently provides a landing page where users may submit their email address to join a waiting list for future updates, products, or services.
              </p>
              <p>
                By providing your email address, you agree to be contacted by Questium with information related to our upcoming offerings. No purchase, account creation, or contractual obligation arises from joining the waiting list.
              </p>
            </section>

            <section className="terms-section">
              <h2>3. Eligibility</h2>
              <p>
                You must be at least 16 years old to submit your email address. By using this website, you confirm that you meet this requirement.
              </p>
            </section>

            <section className="terms-section">
              <h2>4. Data Collection & Privacy</h2>
              <p>
                When you provide your email address, we collect and store it solely for the purpose of maintaining our waiting list and sending relevant updates.
              </p>
              <p>
                Further details can be found in our <a href="#privacy" className="terms-link">Privacy Policy</a>.
              </p>
            </section>

            <section className="terms-section">
              <h2>5. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and design, is the property of Questium or its licensors and may not be copied, modified, or redistributed without prior written permission.
              </p>
            </section>

            <section className="terms-section">
              <h2>6. Liability Disclaimer</h2>
              <p>
                Questium makes no guarantees about the availability, accuracy, or completeness of the information on this website. We reserve the right to modify or discontinue the landing page at any time.
              </p>
              <p>
                To the extent permitted by law, we disclaim liability for any damages arising from the use or inability to use this website.
              </p>
            </section>

            <section className="terms-section">
              <h2>7. Changes to These Terms</h2>
              <p>
                We may update these Terms of Service from time to time. The most recent version will always be available on this page.
              </p>
            </section>

            <section className="terms-section">
              <h2>8. Governing Law & Jurisdiction</h2>
              <p>
                These Terms of Service are governed by the laws of the Federal Republic of Germany. Any disputes shall be subject to the exclusive jurisdiction of the courts in Munich, Germany.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

