import React, { useState } from 'react';
import { Check, ArrowRight, ShoppingCart, RefreshCw, Printer, ShieldCheck } from 'lucide-react';
import './PosShowcase.css';

const POS_FEATURES = [
  { name: 'Fast Billing', desc: 'Accelerate checkouts with optimized keypads and quick hotkeys.' },
  { name: 'Inventory Tracking', desc: 'Stock level notifications, automated purchase orders, and audit history.' },
  { name: 'Sales Analytics', desc: 'Analyze margins, product performance, and employee transaction metrics.' },
  { name: 'Customer Loyalty Programs', desc: 'Points balance tracking, customer segments, and integrated promotional campaigns.' },
  { name: 'Multi-Branch Management', desc: 'Centralized controls for configurations, price tables, and stock allocations.' },
  { name: 'Cloud Dashboard', desc: 'Real-time sales monitoring and report extraction from any browser.' },
  { name: 'Receipt Printing', desc: 'Flexible templates supporting thermal printers, digital PDFs, or email receipts.' },
  { name: 'Barcode Support', desc: 'Instant item lookup compatible with all USB and wireless scanners.' }
];

const POS_BENEFITS = [
  { name: 'Reduce Manual Work', desc: 'Dismantle spreadsheets. Let automation handle invoicing, bookkeeping, and tax calculations.' },
  { name: 'Improve Business Efficiency', desc: 'Synchronize front-counter transactions with back-office inventory instantly.' },
  { name: 'Real-Time Reporting', desc: 'Keep direct pulse on sales spikes, active ticket values, and immediate cash flow.' },
  { name: 'Better Inventory Control', desc: 'Stop dead-stock accumulation and avoid front-shelf stock-outs.' },
  { name: 'Increased Revenue Tracking', desc: 'Verify drawer balances and minimize employee register leaks.' }
];

const MOCK_ITEMS = [
  { name: 'Premium Coffee Blend', price: 12.50 },
  { name: 'Organic Whole Milk', price: 4.80 },
  { name: 'Gluten-Free Bread', price: 6.20 },
  { name: 'Fresh Apple Pack', price: 8.90 }
];

export default function PosShowcase() {
  const [activeTab, setActiveTab] = useState('features'); // 'features' or 'benefits'
  
  // Interactive Terminal State
  const [cart, setCart] = useState([
    { name: 'Premium Coffee Blend', price: 12.50, qty: 1 },
    { name: 'Organic Whole Milk', price: 4.80, qty: 2 }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handleAddItem = () => {
    if (isPaid) return;
    const randomItem = MOCK_ITEMS[Math.floor(Math.random() * MOCK_ITEMS.length)];
    const existing = cart.find(i => i.name === randomItem.name);
    
    if (existing) {
      setCart(cart.map(i => i.name === randomItem.name ? { ...i, qty: i.qty + 1 } : i));
    } else {
      setCart([...cart, { ...randomItem, qty: 1 }]);
    }
  };

  const handlePay = () => {
    if (cart.length === 0 || isPaid) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
    }, 1500);
  };

  const handleReset = () => {
    setCart([]);
    setIsPaid(false);
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <section id="pos-showcase" className="pos-showcase-section">
      <div className="section-header">
        <span className="badge">Retail & Restaurant Core</span>
        <h2>Smart POS Software Systems</h2>
        <p className="subtitle">
          Intelligent Point of Sale solutions built for high-throughput retail stores, supermarkets, cafes, pharmacies, and multi-branch operations.
        </p>
      </div>

      <div className="pos-showcase-container glass-card">
        {/* Left Column: Details (Tabs for Features/Benefits) */}
        <div className="pos-details">
          <div className="pos-tabs">
            <button
              type="button"
              className={`pos-tab-btn ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              System Features
            </button>
            <button
              type="button"
              className={`pos-tab-btn ${activeTab === 'benefits' ? 'active' : ''}`}
              onClick={() => setActiveTab('benefits')}
            >
              Business Benefits
            </button>
          </div>

          {activeTab === 'features' ? (
            <div className="pos-features-list">
              {POS_FEATURES.map((feat) => (
                <div key={feat.name} className="pos-feature-item">
                  <Check size={18} />
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.92rem' }}>{feat.name}</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="pos-benefits-list">
              {POS_BENEFITS.map((benefit) => (
                <div key={benefit.name} className="pos-benefit-item">
                  <div className="pos-benefit-icon-box">
                    <ShieldCheck size={18} />
                  </div>
                  <div className="pos-benefit-details">
                    <h3>{benefit.name}</h3>
                    <p>{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div style={{ marginTop: '20px' }}>
            <a href="#contact" className="portfolio-cta-btn">
              <span>Request POS Demo</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive POS Terminal Simulator */}
        <div className="pos-terminal-mockup">
          <div className="pos-terminal-card glass-card">
            <div className="pos-term-header">
              <span className="pos-term-logo">REBORNLUX_POS v4.2</span>
              <span className="pos-term-meta">Register #01 - Active</span>
            </div>

            {/* Receipt Items list */}
            <div className="pos-term-items">
              {cart.length === 0 ? (
                <div style={{ padding: '30px 0', textSelf: 'center', textAlign: 'center', color: 'var(--text-muted)' }}>
                  <ShoppingCart size={32} style={{ margin: '0 auto 10px', display: 'block', opacity: 0.5 }} />
                  <span>Terminal drawer is empty.</span>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.name} className="pos-item-row">
                    <span className="pos-item-name">{item.name} (x{item.qty})</span>
                    <span className="pos-item-price">${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                ))
              )}
            </div>

            {/* Totals Section */}
            <div className="pos-term-totals">
              <div className="pos-total-row">
                <span style={{ color: 'var(--text-muted)' }}>Subtotal:</span>
                <span style={{ color: 'var(--text-secondary)' }}>${subtotal.toFixed(2)}</span>
              </div>
              <div className="pos-total-row">
                <span style={{ color: 'var(--text-muted)' }}>Tax (5%):</span>
                <span style={{ color: 'var(--text-secondary)' }}>${tax.toFixed(2)}</span>
              </div>
              <div className="pos-total-row grand-total">
                <span>Grand Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Action Bar */}
            {isPaid ? (
              <div style={{ textAlign: 'center', padding: '10px 0', background: 'rgba(0, 242, 254, 0.08)', borderRadius: '8px', border: '1px solid rgba(0, 242, 254, 0.2)', marginBottom: '16px' }}>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <Printer size={16} /> Receipt Printed Successfully!
                </span>
              </div>
            ) : null}

            <div className="pos-term-actions">
              <button
                type="button"
                className="pos-btn-print"
                onClick={handleAddItem}
                disabled={isProcessing || isPaid}
                style={{ cursor: (isProcessing || isPaid) ? 'not-allowed' : 'pointer' }}
              >
                Scan Item
              </button>
              
              <button
                type="button"
                className="pos-btn-pay"
                onClick={handlePay}
                disabled={cart.length === 0 || isProcessing || isPaid}
                style={{ cursor: (cart.length === 0 || isProcessing || isPaid) ? 'not-allowed' : 'pointer' }}
              >
                {isProcessing ? 'Authorizing Card...' : isPaid ? 'Paid' : 'Checkout Register'}
              </button>

              <button
                type="button"
                className="pos-btn-print"
                onClick={handleReset}
                title="Reset POS simulator"
              >
                <RefreshCw size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
