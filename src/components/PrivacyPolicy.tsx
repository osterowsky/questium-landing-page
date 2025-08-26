import Nav from "./Nav";
import Footer from "./Footer";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main className="privacy-page">
        <div className="privacy-container">
          <h1 className="privacy-title">Privacy Policy</h1>
          
          <div className="privacy-content">
            <section className="privacy-section">
              <h2>1. Data Controller</h2>
              <p>
              The operator of this website and responsible entity under the GDPR is:<br />
                Company name: Questium<br />
                Legal representative: Patryk Ostern<br />
                Email: patryk.ostern@questium.de
              </p>
            </section>

            <section className="privacy-section">
              <h2>2. What Data We Collect</h2>
              <p>
              When you voluntarily submit your email address via our waiting list form, we collect and store this information. No other personal data is collected unless you provide it to us directly.
              </p>
            </section>

            <section className="privacy-section">
              <h2>3. Purpose of Processing</h2>
              <p>We use your email address exclusively to:</p>
              <ul>
                <li>Maintain our waiting list,</li>
                <li>Inform you about updates, future products, or services from Questium.</li>
              </ul>
              <p>We do not sell or share your personal data with third parties for advertising purposes.</p>
            </section>

            <section className="privacy-section">
              <h2>4. Legal Basis</h2>
              <p>
                The processing of your data is based on your consent (Art. 6(1)(a) GDPR). You may withdraw your consent at any time by contacting us at the email above.
              </p>
            </section>

            <section className="privacy-section">
              <h2>5. Storage and Retention</h2>
              <p>
                Your data will be stored until you withdraw your consent or until the waiting list is no longer required. After that, your data will be securely deleted.
              </p>
            </section>

            <section className="privacy-section">
              <h2>6. Third-Party Services</h2>
              <p>
                Our website may be hosted by external providers (e.g., [Insert Hosting Provider, such as Netlify, Vercel, or similar]). These providers may process data on our behalf but are bound by GDPR-compliant agreements (Art. 28 GDPR).
              </p>
              <p>
                If we use an email service provider (e.g., Mailchimp, Brevo, Sendinblue), your email address will be processed through their systems solely for the purposes described above.
              </p>
            </section>

            <section className="privacy-section">
              <h2>7. Data Security</h2>
              <p>
                We take reasonable technical and organizational measures to protect your personal data against unauthorized access, alteration, or loss.
              </p>
            </section>

            <section className="privacy-section">
              <h2>8. Your Rights under GDPR</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Request access to your personal data (Art. 15 GDPR)</li>
                <li>Request rectification (Art. 16 GDPR)</li>
                <li>Request erasure ("right to be forgotten", Art. 17 GDPR)</li>
                <li>Restrict processing (Art. 18 GDPR)</li>
                <li>Data portability (Art. 20 GDPR)</li>
                <li>Withdraw your consent at any time (Art. 7(3) GDPR)</li>
                <li>Lodge a complaint with a supervisory authority (Art. 77 GDPR).</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The latest version will always be available on this page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
