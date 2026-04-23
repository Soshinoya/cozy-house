import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface HowYouCanHelpProps {
  title?: string;
  description?: string;
  className?: string;
}

const HowYouCanHelp: React.FC<HowYouCanHelpProps> = ({
  title = "How You Can Help",
  description = "Your support helps us continue growing and providing the best experiences.",
  className = ""
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className={`how-you-can-help ${className}`}>
      <div className="how-you-can-help__container">
        <div className="how-you-can-help__content">
          <h2 className="how-you-can-help__title">{title}</h2>
          <p className="how-you-can-help__description">{description}</p>

          {!submitted ? (
            <form className="how-you-can-help__form" onSubmit={handleSubmit}>
              <div className="how-you-can-help__form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="how-you-can-help__form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="how-you-can-help__form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                />
              </div>
              <button type="submit" className="how-you-can-help__submit-btn">
                Send Message
              </button>
            </form>
          ) : (
            <div className="how-you-can-help__success">
              <p>Thank you for your message!</p>
              <button
                onClick={() => setSubmitted(false)}
                className="how-you-can-help__reset-btn"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowYouCanHelp;
