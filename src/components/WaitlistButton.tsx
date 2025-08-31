import { useState } from 'react';
import './WaitlistButton.css';
import validator from 'validator';

export default function WaitlistButton() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'error' | 'success' | ''>(''); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
    } else {
      setStatus('success');
      setMessage('Email looks good!');
      console.log('Email submitted:', email);
      setEmail('');
    }
    
    // Auto-hide popup
    setTimeout(() => {
      setStatus('');
      setMessage('');
    }, 2500);
  };

  return (
    <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
      <div className="waitlist-input-container">
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus(''); // clear error when typing
          }}
          placeholder="e-mail address"
          className={`waitlist-input`}
        />
        <button type="submit" className="waitlist-submit">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>

        {status && (
          <div className={`waitlist-popup ${status === 'success' ? 'waitlist-popup-success' : 'waitlist-popup-error'}`}>
            {message}
          </div>
        )}
      </div>
    </form>
  );
}
