import React, { useState } from 'react';
import { Mail, ArrowRight, Linkedin, Github, FileDown, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  // Direct download link for the Google Drive file
  const cvLink = "https://drive.google.com/uc?export=download&id=1FyQb3te1oW0zKGF9bepsnu33HBwDdRZS";
  
  // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree ID (e.g., 'xoqykpww')
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ID";

  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (FORMSPREE_ENDPOINT.includes('YOUR_FORMSPREE_ID')) {
      alert("Please update the FORMSPREE_ENDPOINT in Contact.tsx with your actual ID to receive real emails.");
      return;
    }

    setStatus('SENDING');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch (err) {
      setStatus('ERROR');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact-section" className="container mx-auto max-w-6xl scroll-mt-32 px-6 lg:px-0">
      <div className="grid lg:grid-cols-12 gap-24 items-stretch">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-16 text-black">
          <div className="space-y-8">
            <div className="w-12 h-[2px] bg-black"></div>
            <h2 className="text-7xl font-extralight tracking-tighter leading-[0.9]">
              Let's <br />
              <span className="italic font-serif">Collaborate</span>.
            </h2>
            <p className="text-xl font-light text-black/60 leading-relaxed max-w-sm">
              Ready to architect the next system? Reach out below.
            </p>
          </div>

          <div className="space-y-12 font-light">
            <div className="space-y-12">
              <div className="flex gap-8 items-center group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500 border border-black/5">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 mb-1 font-black">Direct Inquiry</p>
                  <a href="mailto:juanpabloburiticaruiz@gmail.com" className="text-xl font-medium break-all">juanpabloburiticaruiz@gmail.com</a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-12 pt-4">
                <a 
                  href="https://www.linkedin.com/in/juanburitica/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-3 text-black/60 hover:text-black transition-all"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/JuanBuritica" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-3 text-black/60 hover:text-black transition-all"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black">GitHub</span>
                </a>
                <a 
                  href={cvLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-black/60 hover:text-black transition-all"
                >
                  <FileDown className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black">Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <div className="relative crystal-light p-10 lg:p-16 rounded-[2.5rem] shadow-2xl border border-black/5 min-h-[500px] flex flex-col justify-center overflow-hidden">
            
            {status === 'SUCCESS' ? (
              <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-700">
                <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold tracking-tight uppercase">Transmission Received</h3>
                  <p className="text-black/60 font-light max-w-xs mx-auto">
                    Your inquiry has been successfully logged into my system. I will respond within 24 hours.
                  </p>
                </div>
                <button 
                  onClick={() => setStatus('IDLE')}
                  className="text-[10px] uppercase tracking-[0.4em] font-black border-b border-black/20 pb-1 hover:border-black transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-12 transition-all duration-500">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-black text-black opacity-40">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:outline-none focus:border-black transition-all text-black font-medium"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-black text-black opacity-40">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:outline-none focus:border-black transition-all text-black font-medium"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black text-black opacity-40">Message</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:outline-none focus:border-black transition-all text-black font-medium resize-none" 
                    placeholder="Describe your project goals or architecture needs..."
                  ></textarea>
                </div>

                {status === 'ERROR' && (
                  <div className="flex items-center gap-3 text-red-600 animate-pulse">
                    <AlertCircle size={18} />
                    <span className="text-[10px] uppercase font-black tracking-widest">Transmission failed. Please try again.</span>
                  </div>
                )}

                <div className="pt-8">
                  <button 
                    disabled={status === 'SENDING'}
                    className={`group relative flex items-center justify-between w-full bg-black text-white px-10 py-7 rounded-2xl uppercase text-[11px] tracking-[0.5em] font-black transition-all duration-500 ${
                      status === 'SENDING' ? 'opacity-50 cursor-not-allowed scale-[0.98]' : 'hover:scale-[1.02] shadow-[0_20px_40px_rgba(0,0,0,0.1)]'
                    }`}
                  >
                    <span>{status === 'SENDING' ? 'Processing Protocol...' : 'Execute Submission'}</span>
                    {status === 'SENDING' ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;