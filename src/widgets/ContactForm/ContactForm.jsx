import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { SERVICES } from '../../data/services';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceRequired: 'web',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      setErrorMsg('Please populate all mandatory fields (Name, Email, and Project Details).');
      return;
    }
    
    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate server call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="badge font-semibold">Initiate Engagement</span>
        <h2>Let's Build Your Next Software Solution</h2>
        <p className="subtitle">Let us build your next digital platform. Fill out the details below, or use the interactive Estimator to customize your specs first.</p>
      </div>

      <div className="contact-grid-container">
        {/* Left Side: Contact details */}
        <div className="contact-info-panel glass-card">
          <h3>Let's Refactor Your Product</h3>
          <p className="panel-desc">Our team responds within 12 business hours with a complete technical breakdown and preliminary architectural roadmap.</p>
          
          <div className="contact-channels">
            <div className="channel-card">
              <Mail className="channel-icon cyan" size={20} />
              <div className="channel-details">
                <span className="channel-label">Email Direct</span>
                <a href="mailto:solutions@rebornlux.com" className="channel-link">solutions@rebornlux.com</a>
              </div>
            </div>

            <div className="channel-card">
              <MessageSquare className="channel-icon purple" size={20} />
              <div className="channel-details">
                <span className="channel-label">Secure Encrypted Chat</span>
                <span className="channel-link">t.me/rebornlux_ops</span>
              </div>
            </div>
          </div>

          <div className="testimonial-snippet">
            <p className="quote">"REBORNLUX modernized our entire trading stack in less than 3 months. Our infra bill dropped 75% while throughput doubled."</p>
            <span className="author">— CTO, Apex Asset Solutions</span>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form-panel glass-card">
          {isSuccess ? (
            <div className="success-state">
              <CheckCircle size={64} className="success-icon" />
              <h3>Inquiry Transmitted</h3>
              <p>Thank you, <strong>{formData.name}</strong>. Your project brief has been compiled and dispatched to our engineering team.</p>
              
              <button 
                type="button" 
                className="btn-success-reset"
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    serviceRequired: 'web',
                    details: ''
                  });
                }}
              >
                Configure Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="actual-form">


              {errorMsg && <div className="error-alert-banner">{errorMsg}</div>}

              <div className="form-group">
                <label htmlFor="contact-name">Your Full Name *</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  name="name" 
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row-double">
                <div className="form-group">
                  <label htmlFor="contact-email">Corporate Email Address *</label>
                  <input 
                    type="email" 
                    id="contact-email" 
                    name="email" 
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input 
                    type="text" 
                    id="contact-phone" 
                    name="phone" 
                    placeholder="e.g. +1 (555) 019-2834"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row-double">
                <div className="form-group">
                  <label htmlFor="contact-company">Company Name</label>
                  <input 
                    type="text" 
                    id="contact-company" 
                    name="company" 
                    placeholder="e.g. Acmo Corp"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-service-type">Service Required</label>
                  <select 
                    id="contact-service-type" 
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                  >
                    {SERVICES.map(opt => (
                      <option key={opt.id} value={opt.id}>{opt.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-details">Project Objectives & Requirements *</label>
                <textarea 
                  id="contact-details" 
                  name="details" 
                  rows="5"
                  placeholder="Outline what needs to be built, redesigned, or scaled..."
                  value={formData.details}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn-form-submit ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Transmitting Brief...</span>
                ) : (
                  <>
                    <span>Submit Project Brief</span>
                    <Send size={16} className="submit-icon" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
