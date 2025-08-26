import { useState, type JSX } from 'react';
import './FAQ.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: JSX.Element;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Do I have to pay for it?",
    answer: "No, Questium is completely free for students. We believe that access to opportunities should not be limited by financial barriers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    )
  },
  {
    id: 2,
    question: "How do you match opportunities based on my profile?",
    answer: "We use advanced algorithms to analyze your major, interests, location, and preferences to find opportunities that are perfectly tailored to you.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    )
  },
  {
    id: 3,
    question: "What problem are we solving?",
    answer: "Students miss out on amazing opportunities because they're scattered across different platforms and hard to find. We centralize and personalize opportunity discovery.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19.439 7.85c-.049.322-.059.648-.026.975.056.506.194.958.424 1.357.344.598.82 1.086 1.393 1.424.573.338 1.222.53 1.898.53.676 0 1.325-.192 1.898-.53.573-.338 1.049-.826 1.393-1.424.23-.399.368-.851.424-1.357.033-.327.023-.653-.026-.975-.049-.322-.142-.637-.274-.937-.132-.3-.305-.578-.516-.824-.211-.246-.463-.46-.747-.635-.284-.175-.598-.31-.928-.398-.33-.088-.673-.119-1.024-.091-.351.028-.695.118-1.024.266-.329.148-.635.355-.91.608-.275.253-.518.551-.724.878-.206.327-.374.684-.503 1.06-.129.376-.22.771-.272 1.176z"/>
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    )
  },
  {
    id: 4,
    question: "What's our solution?",
    answer: "A smart platform that aggregates opportunities from multiple sources and uses AI to match them with your specific profile and goals.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4"/>
        <path d="M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z"/>
      </svg>
    )
  },
  {
    id: 5,
    question: "What's our aim?",
    answer: "To ensure no student ever misses out on life-changing opportunities that could shape their future career and personal growth.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    )
  }
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="faq" id="FAQ">
      <div className="faq-container">
        <h1 className="faq-title">FAQ</h1>
        
        <div className="faq-list">
          {faqData.map((item) => (
            <div key={item.id} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
              >
                <span className="faq-icon">{item.icon}</span>
                <span className="faq-question-text">{item.question}</span>
                <span className={`faq-chevron ${openItem === item.id ? 'open' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              </button>
              
              {openItem === item.id && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}