import React, { useState } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles, User, CheckCircle2 } from 'lucide-react';

export default function LiveChatModal({ onOpenBooking }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I am your AI Dental Concierge at RadiantAlign. How can I assist you today? Feel free to ask about our clear aligners, pain management, pricing, or instant booking!"
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInput('');

    // Simulate AI Concierge smart responses
    setTimeout(() => {
      let botReply = "Thank you for reaching out! One of our VIP Patient Coordinators will review your inquiry immediately. You can also click below to schedule an instant priority appointment.";
      
      const lower = userText.toLowerCase();
      if (lower.includes('aligner') || lower.includes('invisalign') || lower.includes('cost') || lower.includes('price')) {
        botReply = "Our clear aligners start at just $120/month with 0% interest financing! They are custom 3D-printed, virtually invisible, and typically achieve perfect alignment in 4 to 6 months.";
      } else if (lower.includes('pain') || lower.includes('hurt') || lower.includes('emergency')) {
        botReply = "Our treatments use digital laser dentistry and sedation protocols for 100% painless care. If you are in acute pain, please call our 24/7 VIP Helpline at +1 (800) 555-SMILE right away.";
      } else if (lower.includes('book') || lower.includes('appoint') || lower.includes('schedule')) {
        botReply = "I can help you lock in a priority slot right now! Click the 'Book VIP Appointment' button below to choose your doctor and time.";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 800);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
      {open && (
        <div
          className="glass-panel"
          style={{
            position: 'absolute',
            bottom: '72px',
            right: 0,
            width: '380px',
            height: '520px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(29, 43, 42, 0.28)',
            border: '1px solid rgba(126, 217, 183, 0.5)'
          }}
        >
          {/* Header */}
          <div style={{ padding: '18px 20px', background: 'var(--dark-slate)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={20} color="#1D2B2A" />
              </div>
              <div>
                <h4 style={{ color: 'var(--white)', fontSize: '1rem', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Radiant AI Concierge <Sparkles size={14} color="#7ED9B7" />
                </h4>
                <span style={{ fontSize: '0.75rem', color: '#7ED9B7', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7ED9B7', display: 'inline-block' }} /> Online & Ready
                </span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'transparent', border: 'none', color: '#A0B2B2', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>

          {/* Messages List */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px', background: 'rgba(244, 255, 251, 0.6)' }}>
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '82%',
                  padding: '12px 16px',
                  borderRadius: m.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: m.sender === 'user' ? 'var(--dark-slate)' : 'var(--white)',
                  color: m.sender === 'user' ? 'var(--white)' : 'var(--dark-slate)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                  fontSize: '0.92rem',
                  lineHeight: 1.5,
                  border: m.sender === 'bot' ? '1px solid rgba(126, 217, 183, 0.3)' : 'none'
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Quick Action Pill */}
          <div style={{ padding: '8px 16px', background: 'rgba(234, 251, 245, 0.9)', borderTop: '1px solid rgba(126, 217, 183, 0.3)', display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={() => { setOpen(false); onOpenBooking(); }}
              style={{
                background: 'transparent',
                border: '1px dashed var(--theme-color-dark)',
                padding: '6px 14px',
                borderRadius: '99px',
                fontFamily: 'var(--font-subheading)',
                fontWeight: 700,
                fontSize: '0.8rem',
                color: 'var(--dark-slate)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <CheckCircle2 size={14} color="#59C29D" /> Click here to Book VIP Appointment
            </button>
          </div>

          {/* Input Bar */}
          <form onSubmit={handleSend} style={{ padding: '14px', background: 'var(--white)', display: 'flex', gap: '8px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about aligners, pricing..."
              style={{
                flex: 1,
                padding: '10px 16px',
                borderRadius: '99px',
                border: '1px solid rgba(0,0,0,0.15)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--gradient-primary)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--dark-slate)'
              }}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        title="Live AI Dental Concierge"
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'var(--gradient-primary)',
          color: 'var(--dark-slate)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 12px 30px rgba(126, 217, 183, 0.6)',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(6deg)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
      >
        {open ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
}
