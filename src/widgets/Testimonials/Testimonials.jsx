import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Quote } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const { t } = useLanguage();

  const title = t('testimonials.title') || 'What Our Clients Say';
  const subtitle = t('testimonials.subtitle') || "Real experiences from businesses we've transformed";
  const badge = t('testimonials.badge') || 'CLIENT REVIEWS';
  const items = t('testimonials.items') || [];

  if (!Array.isArray(items) || items.length === 0) return null;

  // Distribute items into 3 distinct column sets for desktop, tablet, and mobile views
  const col1Items = [items[0], items[3], items[6], items[1], items[4]].filter(Boolean);
  const col2Items = [items[1], items[4], items[2], items[5], items[0]].filter(Boolean);
  const col3Items = [items[2], items[5], items[0], items[3], items[6]].filter(Boolean);

  const renderCard = (review, uniqueKey) => (
    <div key={uniqueKey} className="testimonial-card">
      <div className="quote-icon-wrapper">
        <Quote size={22} className="quote-icon" />
      </div>
      <p className="testimonial-quote">{review.quote}</p>
      <div className="testimonial-author">
        <img
          src={review.avatar}
          alt={review.name}
          className="author-avatar"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=0077b6&color=ffffff&bold=true`;
          }}
        />
        <div className="author-info">
          <h4 className="author-name">{review.name}</h4>
          <span className="author-role">{review.role}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="reviews" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-badge">{badge}</span>
          <h2 className="testimonials-title">{title}</h2>
          <p className="testimonials-subtitle">{subtitle}</p>
        </div>

        {/* 3-Column Automatic Moving Carousel Wrapper */}
        <div className="marquee-wrapper">
          {/* Top and Bottom Gradient Mask Overlays */}
          <div className="marquee-fade-top" />
          <div className="marquee-fade-bottom" />

          <div className="marquee-grid">
            {/* Column 1 (Moving Up - Speed 1) */}
            <div className="marquee-column col-1">
              <div className="marquee-track track-fast">
                {col1Items.map((item, idx) => renderCard(item, `col1-orig-${idx}`))}
                {col1Items.map((item, idx) => renderCard(item, `col1-dup-${idx}`))}
              </div>
            </div>

            {/* Column 2 (Moving Up - Speed 2) */}
            <div className="marquee-column col-2">
              <div className="marquee-track track-medium">
                {col2Items.map((item, idx) => renderCard(item, `col2-orig-${idx}`))}
                {col2Items.map((item, idx) => renderCard(item, `col2-dup-${idx}`))}
              </div>
            </div>

            {/* Column 3 (Moving Up - Speed 3) */}
            <div className="marquee-column col-3">
              <div className="marquee-track track-slow">
                {col3Items.map((item, idx) => renderCard(item, `col3-orig-${idx}`))}
                {col3Items.map((item, idx) => renderCard(item, `col3-dup-${idx}`))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
