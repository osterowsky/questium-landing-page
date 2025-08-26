import { useState } from 'react';
import './WaitlistButton.css';

export default function WaitlistButton() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add email submission logic here in future
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <div className="waitlist-input-container">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e-mail address"
          className="waitlist-input"
          required
        />
        <button type="submit" className="waitlist-submit">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </form>
  );
}
