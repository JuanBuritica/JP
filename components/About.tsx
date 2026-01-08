
import React from 'react';
import { EXPERIENCE } from '../constants';

const About: React.FC = () => {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-24 items-start">
        {/* Left Column: Portrait and Skills */}
        <div className="space-y-12">
          {/* 
            Professional Portrait Container 
            Precision-tuned to match the user's design reference.
          */}
          <div className="relative aspect-[4/5] w-full bg-[#0a0a0a] overflow-hidden rounded-sm border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] group">
             <img 
               src="https://lh3.googleusercontent.com/d/1o2G0PF8h4YiGlKuTLpi59YhQy2DR4-Q4" 
               alt="Juan Pablo Buriticá Portrait"
               className="w-full h-full object-cover grayscale brightness-75 contrast-[1.1] transition-all duration-[2.5s] ease-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
               onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://drive.google.com/uc?export=view&id=1o2G0PF8h4YiGlKuTLpi59YhQy2DR4-Q4";
               }}
             />
             
             {/* Subtle Dark Overlay for Text Legibility */}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
             
             {/* Design Matching Text Overlay */}
             <div className="absolute bottom-16 left-12 text-white space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1.5px] bg-white"></div>
                  <p className="text-[10px] tracking-[0.5em] uppercase text-white font-black opacity-100">Technical Architect</p>
                </div>
                <h1 className="flex flex-col text-5xl sm:text-6xl tracking-tighter uppercase leading-[0.85] text-white">
                  <span className="font-light">JUAN PABLO</span>
                  <span className="font-black">BURITICÁ</span>
                </h1>
             </div>
          </div>

          {/* Refined Skills Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 pt-12 border-t border-white/20 relative">
            <div className="absolute -top-[1px] left-0 w-12 h-[2px] bg-white"></div>
            {[
              { 
                label: 'Technical Core', 
                items: ['REST APIs & Webhooks', 'Coupa P2P / BSM', 'SQL & DAX', 'PBI & Excel'] 
              },
              { 
                label: 'AI & Automation', 
                items: ['Prompt Engineering', 'AI-Driven Flows', 'Agentic Workflows'] 
              },
              { 
                label: 'Expertise', 
                items: ['Solution Design', 'Data Visualization', 'BI Architecture'] 
              }
            ].map((skill, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-[9px] uppercase tracking-[0.4em] font-black text-white">{skill.label}</h4>
                <ul className="space-y-4">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-[11px] font-light text-white tracking-wider flex items-center gap-2.5 group cursor-default">
                      <span className="w-1.5 h-1.5 bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Statement and Curriculum */}
        <div className="space-y-24 pt-0 lg:pt-12 text-white">
          {/* Mission Statement & Title: Styled like a CV item */}
          <div className="group relative pl-10 transition-all duration-700 hover:translate-x-2">
            <div className="absolute left-0 top-1.5 w-[1px] h-full bg-white/20 group-hover:bg-white transition-colors"></div>
            <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border border-white bg-black transition-all"></div>
            
            <div className="space-y-8">
              <p className="text-3xl font-extralight text-white/90 leading-tight tracking-tight max-w-lg">
                Designing high-performance <span className="text-white font-bold text-glow-white">SaaS ecosystems</span> that connect core business logic with global ERP infrastructure.
              </p>
              
              <div className="flex items-center gap-4 pt-2">
                <div className="w-6 h-[1px] bg-white/40 group-hover:bg-white transition-colors"></div>
                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-white/60 group-hover:text-white transition-colors">Software Engineer</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex items-center justify-between border-b border-white/20 pb-6">
              <h3 className="text-[10px] uppercase tracking-[0.5em] font-black text-white">Curriculum Vitae</h3>
            </div>
            <div className="space-y-10">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="group relative pl-10 hover:translate-x-2 transition-transform duration-500">
                  <div className="absolute left-0 top-1.5 w-[1px] h-full bg-white/20 group-hover:bg-white transition-colors"></div>
                  <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border border-white bg-black transition-all"></div>
                  
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-2xl font-light group-hover:font-medium transition-all duration-500 text-white">{exp.firm}</h4>
                      <p className="text-[9px] uppercase tracking-widest text-white/60 font-black">{exp.period}</p>
                    </div>
                    <p className="text-xs font-bold text-white uppercase tracking-widest opacity-100">{exp.role}</p>
                    <p className="text-[13px] font-light text-white/70 leading-relaxed max-w-sm">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
