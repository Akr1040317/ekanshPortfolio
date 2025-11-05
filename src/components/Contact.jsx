import React from 'react';
import resumePdf from '../assets/Ekansh_Rastogi_Resume (1).pdf';

const Contact = () => {
  const email = 'erastogi@hivespelling.com';
  const linkedin = 'https://www.linkedin.com/in/ekansh-rastogi-378b41315/';

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-actions">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            LinkedIn
          </a>
          <a href={`mailto:${email}`} className="cta-button secondary">
            {email}
          </a>
          <a href={resumePdf} className="cta-button primary" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;


