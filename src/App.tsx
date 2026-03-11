import React, { useState } from 'react';
import { Terminal, User, ArrowRight, Cpu, Zap, Brain, ShieldCheck, Shield, Settings2, Clock, CheckCircle2, MessageCircle, ArrowUpRight, Wallet, Headphones, Github, Twitter, Linkedin, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { InlineWidget } from 'react-calendly';

function Header({ onBookClick, onHomeClick }: { onBookClick: () => void, onHomeClick: () => void }) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    onHomeClick();
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }, 100);
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-[#0a0c08]/40 backdrop-blur-md p-1.5 flex items-center gap-8 shadow-2xl">
      <div className="flex items-center gap-2 pl-4 cursor-pointer" onClick={onHomeClick}>
        <div className="size-5 rounded-full bg-primary/20 flex items-center justify-center relative overflow-hidden">
          <div className="absolute w-[120%] h-[2px] bg-primary rotate-45"></div>
        </div>
        <span className="text-white font-bold tracking-tight text-sm">Relay</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-400">
        <a className="hover:text-white transition-colors" href="#features" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
        <a className="hover:text-white transition-colors" href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
        <a className="hover:text-white transition-colors" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
      </nav>
      <button onClick={onBookClick} className="flex items-center justify-center rounded-full h-9 px-5 bg-white text-black text-xs font-bold transition-transform hover:scale-105 gap-2">
        Book a Call
        <span className="text-[8px]">▶</span>
      </button>
    </header>
  );
}

function FixedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none pixelator-mask" style={{ isolation: 'isolate' }}>
      <div className="blob-shockwave wave-1"></div>
      <div className="blob-shockwave wave-2"></div>
      <div className="blob-shockwave wave-3"></div>
      <div className="blob-shockwave wave-4"></div>
    </div>
  );
}

function EdgeGlow() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none pixelator-mask">
      <div className="edge-glow"></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center px-6 md:px-16 py-20">
      {/* Faint Grid Background */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <div className="flex flex-col gap-8 relative z-10" style={{ isolation: 'isolate' }}>
          <div className="flex items-center gap-3 text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
            <div className="size-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]"></div>
            System Operational
          </div>
          <h1 className="font-serif-calligraphy text-5xl md:text-7xl leading-[1.1] italic tracking-tight">
            <span className="text-primary drop-shadow-[0_0_15px_rgba(108,242,13,0.3)]">Architect your<br/>systems</span><br />
            <span className="text-white">with absolute automation.</span>
          </h1>
          <p className="max-w-md text-slate-400 text-lg leading-relaxed">
            Advanced workflow automation merged with intuitive design. We provide the infrastructure to eliminate manual labor and boost your ROI.
          </p>
          <div className="flex flex-wrap gap-6 mt-4 items-center">
            <button className="animated-border-btn h-14 px-8 text-white font-medium text-sm hover:bg-white/5 transition-all flex items-center justify-center shadow-[0_0_30px_rgba(108,242,13,0.15)]">
              Initialize System
            </button>
            <button className="h-12 px-6 rounded-full border border-slate-800 bg-transparent text-slate-300 font-medium text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              View Workflows
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Live Workflow Feed / Right Side Visual */}
        <div className="relative h-[500px] w-[130%] -ml-[15%] -translate-x-[60px] hidden lg:block z-10" style={{ isolation: 'isolate' }}>
          {/* SVG Curves */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1100 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Faint background paths */}
            <path d="M 0 -50 C 300 -50, 300 250, 550 250" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <path d="M 1100 -50 C 800 -50, 800 250, 550 250" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <path d="M 0 550 C 300 550, 300 250, 550 250" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <path d="M 1100 550 C 800 550, 800 250, 550 250" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            
            {/* Animated path segments feeding inwards */}
            <path className="trace-line trace-anim-1" d="M 0 -50 C 300 -50, 300 250, 550 250" stroke="var(--color-primary)" strokeWidth="1" />
            <path className="trace-line trace-anim-2" d="M 1100 -50 C 800 -50, 800 250, 550 250" stroke="var(--color-primary)" strokeWidth="1" />
            <path className="trace-line trace-anim-3" d="M 0 550 C 300 550, 300 250, 550 250" stroke="var(--color-primary)" strokeWidth="1" />
            <path className="trace-line trace-anim-4" d="M 1100 550 C 800 550, 800 250, 550 250" stroke="var(--color-primary)" strokeWidth="1" />
          </svg>

          {/* Central Target */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            {/* Rotating Dashed Circle */}
            <div className="absolute size-[160px] rounded-full border border-slate-700/40 border-dashed animate-[spin_20s_linear_infinite]" style={{ willChange: 'transform' }}></div>
            <div className="absolute size-[120px] rounded-full border border-slate-700/60 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]" style={{ willChange: 'transform' }}>
               <div className="absolute top-0 w-1 h-2 bg-slate-500"></div>
               <div className="absolute bottom-0 w-1 h-2 bg-slate-500"></div>
               <div className="absolute left-0 w-2 h-1 bg-slate-500"></div>
               <div className="absolute right-0 w-2 h-1 bg-slate-500"></div>
            </div>
            
            <div className="absolute size-[40px] rounded-full border border-primary/50 border-dashed animate-dashed-expand"></div>
            <div className="absolute size-[80px] rounded-full border border-slate-700"></div>
            <div className="absolute size-[40px] rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center">
              <div className="size-3 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]"></div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-[20%] left-[20%] text-[10px] font-mono text-primary tracking-widest uppercase border-b border-primary/30 pb-1">
            Data Transfer
          </div>
          <div className="absolute bottom-[20%] right-[30%] text-[10px] font-mono text-primary tracking-widest uppercase border-b border-primary/30 pb-1">
            Workflow Sync
          </div>
          
          {/* Small decorative dots */}
          <div className="absolute top-[48%] right-[30%] flex gap-1">
            <div className="size-1 bg-slate-600"></div>
            <div className="size-1 bg-slate-600"></div>
            <div className="size-1 bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="relative py-32 px-6 md:px-16 bg-[#0a0c08]/75 backdrop-blur-xl z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-widest uppercase">
          <div className="size-1.5 rounded-full bg-primary"></div>
          System Capabilities
        </div>
        <h2 className="font-serif-calligraphy text-5xl md:text-6xl text-white italic">
          Process automation <span className="text-slate-400">made<br/>effortless.</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm md:text-base mb-12">
          Streamline your operations with AI-driven systems designed to simplify, automate, and enhance your business architecture.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {/* Card 1 */}
          <div className="flex flex-col p-8 rounded-3xl border border-border-subtle bg-[#0a0c08] hover:border-primary/30 transition-all h-[480px]">
            <h3 className="text-xl font-bold text-white tracking-tight mb-3">Automated Execution</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-auto">
              Generate high-ROI workflows and execute complex tasks in milliseconds with our intelligent automation engine.
            </p>
            {/* Mock UI */}
            <div className="mt-8 rounded-2xl border border-border-subtle bg-[#11130f] p-4 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-1">
                  <div className="size-1.5 rounded-full bg-slate-600"></div>
                  <div className="size-1.5 rounded-full bg-slate-600"></div>
                </div>
                <div className="text-[10px] font-mono text-slate-500">RELAY_05 v2.1</div>
              </div>
              <div className="rounded-xl bg-[#1a1d16] p-4 mb-4 border border-white/5">
                <div className="text-xs text-slate-300">Initialize data sync for <span className="text-white font-bold">CRM Alpha</span>. Target <span className="text-primary">100% Accuracy</span>.</div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-primary mb-2">
                <Zap size={10} /> RELAY PROTOCOL
              </div>
              <div className="text-xs text-slate-400 mb-4">
                Analyzing data pipelines across 4 platforms. Optimal route secured.
              </div>
              <div className="flex justify-between text-[10px] font-mono text-primary mb-1">
                <span>EXECUTING</span>
                <span>1,240 TASKS</span>
              </div>
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-2/3"></div>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="flex flex-col p-8 rounded-3xl border border-border-subtle bg-[#0a0c08] hover:border-primary/30 transition-all h-[480px] md:translate-y-12 relative overflow-hidden">
            <h3 className="text-xl font-bold text-white tracking-tight mb-3 flex items-center gap-2">
              <Zap size={20} className="text-primary" /> Seamless Integration
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-auto relative z-10">
              Connect to deep data pools across your tech stack to ensure zero-friction execution on enterprise workflows.
            </p>
            {/* Visual */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[280px] flex items-center justify-center">
              <div className="absolute w-[240px] h-[240px] rounded-full border border-slate-800/50"></div>
              <div className="absolute w-[160px] h-[160px] rounded-full border border-slate-700/50 border-dashed animate-[spin_30s_linear_infinite]"></div>
              <div className="absolute w-[80px] h-[80px] rounded-2xl bg-[#11130f] border border-border-subtle flex items-center justify-center z-10 shadow-[0_0_30px_rgba(108,242,13,0.05)]">
                <div className="flex flex-col gap-1">
                  <div className="w-8 h-1 rounded-full bg-slate-400"></div>
                  <div className="w-8 h-1 rounded-full bg-slate-500"></div>
                  <div className="w-8 h-1 rounded-full bg-slate-600"></div>
                </div>
              </div>
              {/* Orbiting elements */}
              <div className="absolute w-[240px] h-[240px] animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 size-6 rounded-lg border border-slate-700 bg-[#0a0c08] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]"></div>
                </div>
              </div>
              <div className="absolute w-[160px] h-[160px] animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 size-5 rounded-md border border-slate-700 bg-[#0a0c08] -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
                  <div className="size-1 rounded-full bg-white"></div>
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-[#11130f] border border-border-subtle text-[8px] font-mono text-slate-400 flex items-center gap-2 z-20">
                <div className="size-1.5 rounded-full bg-primary shadow-[0_0_5px_var(--color-primary)]"></div>
                NETWORK ACTIVE
              </div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="flex flex-col p-8 rounded-3xl border border-border-subtle bg-[#0a0c08] hover:border-primary/30 transition-all h-[480px]">
            <h3 className="text-xl font-bold text-white tracking-tight mb-3">Quality Control</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-auto">
              Manage automated operations with enterprise-grade oversight. Set permissions, approve workflows, and audit logs.
            </p>
            {/* Mock UI */}
            <div className="mt-8 rounded-2xl border border-border-subtle bg-[#11130f] p-5 relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 text-[10px] font-mono text-white">
                  <div className="size-1.5 rounded-full bg-primary"></div>
                  WORKFLOW_V4
                </div>
                <div className="flex -space-x-2">
                  <div className="size-6 rounded-full bg-slate-700 border-2 border-[#11130f] flex items-center justify-center text-[8px]">JD</div>
                  <div className="size-6 rounded-full bg-primary/20 border-2 border-[#11130f] flex items-center justify-center text-[8px] text-primary">AS</div>
                  <div className="size-6 rounded-full bg-slate-800 border-2 border-[#11130f] flex items-center justify-center text-[8px]">+3</div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between text-[8px] font-mono text-slate-500 mb-3 items-end">
                  <span>EXECUTION LIMIT</span>
                  <span className="text-white bg-slate-800 px-2 py-1 rounded-md border border-white/10">Signed by Alex</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full relative">
                  <div className="absolute left-0 top-0 h-full bg-white w-3/4 rounded-full"></div>
                  <div className="absolute left-3/4 top-1/2 -translate-y-1/2 size-4 bg-white rounded-full shadow-lg border-2 border-[#11130f]"></div>
                </div>
              </div>
              
              <div className="flex gap-3 mt-auto">
                <button className="flex-1 py-2.5 rounded-xl border border-border-subtle bg-transparent text-slate-400 text-[10px] font-bold flex items-center justify-center gap-1.5 hover:bg-white/5 transition-colors">
                  <Clock size={12} /> Audit Log
                </button>
                <button className="flex-1 py-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold flex items-center justify-center gap-1.5 hover:bg-primary/20 transition-colors">
                  <CheckCircle2 size={12} /> Approve Tx
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <button className="mt-16 rounded-full h-12 px-8 bg-white text-black text-sm font-bold transition-transform hover:scale-105 flex items-center gap-2">
          Explore Capabilities <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}

function Technical() {
  return (
    <section id="about" className="relative z-10 px-6 md:px-16 py-32 overflow-hidden bg-[#0a0c08]/75 backdrop-blur-xl border-t border-white/5">
      <div className="data-line top-10 right-0 opacity-10 animate-pulse-data"></div>
      <div className="data-line bottom-10 left-0 opacity-10 animate-pulse-data" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex flex-col gap-10 lg:w-1/2">
          <h2 className="font-serif-calligraphy text-5xl md:text-7xl text-white leading-tight italic">
            Stop wasting time on repetitive manual tasks.
          </h2>
          <div className="flex flex-col gap-6">
            <p className="text-slate-300 text-xl font-light max-w-lg leading-relaxed">
              We design tailored automation systems that bridge the gap between your legacy software and modern cloud apps, turning bottlenecks into high-throughput workflows.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-border-subtle pt-8 mt-4">
              <div>
                <div className="text-primary text-3xl font-bold font-display">10x Faster</div>
                <div className="text-slate-500 text-sm uppercase tracking-widest mt-1">Task Completion</div>
              </div>
              <div>
                <div className="text-primary text-3xl font-bold font-display">100%</div>
                <div className="text-slate-500 text-sm uppercase tracking-widest mt-1">Process Accuracy</div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <a className="inline-flex items-center gap-3 text-primary font-bold group" href="#">
              Explore Our Solutions
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
            </a>
          </div>
        </div>
        
        {/* Mesh Network Visualization */}
        <div className="lg:w-1/2 w-full relative group">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border-subtle bg-neutral-dark flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
            <div className="w-full h-full relative">
              <motion.svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 300">
                <motion.path d="M0 150 H400 M200 0 V300" stroke="#6cf20d" strokeDasharray="10 10" strokeWidth="0.2" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}></motion.path>
                <g className="nodes">
                  <motion.circle cx="200" cy="150" fill="none" r="10" stroke="#6cf20d" strokeWidth="1.5" animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }}></motion.circle>
                  <circle cx="200" cy="150" fill="#6cf20d" r="4"></circle>
                  <motion.circle cx="100" cy="80" fill="none" r="6" stroke="#6cf20d" strokeWidth="0.5" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, delay: 0, repeat: Infinity }}></motion.circle>
                  <motion.circle cx="300" cy="80" fill="none" r="6" stroke="#6cf20d" strokeWidth="0.5" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }}></motion.circle>
                  <motion.circle cx="100" cy="220" fill="none" r="6" stroke="#6cf20d" strokeWidth="0.5" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, delay: 1, repeat: Infinity }}></motion.circle>
                  <motion.circle cx="300" cy="220" fill="none" r="6" stroke="#6cf20d" strokeWidth="0.5" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, delay: 1.5, repeat: Infinity }}></motion.circle>
                  <motion.path d="M200 150 L100 80 M200 150 L300 80 M200 150 L100 220 M200 150 L300 220" opacity="0.4" stroke="#6cf20d" strokeDasharray="5 5" strokeWidth="1" animate={{ strokeDashoffset: [0, -10] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}></motion.path>
                  <motion.path d="M100 80 L300 80 L300 220 L100 220 Z" fill="rgba(108, 242, 13, 0.05)" stroke="#6cf20d" strokeWidth="0.5" animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }}></motion.path>
                </g>
                <motion.circle cx="150" cy="115" fill="#6cf20d" r="2" animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }} transition={{ duration: 2, repeat: Infinity }}></motion.circle>
                <motion.circle cx="250" cy="185" fill="#6cf20d" r="2" animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}></motion.circle>
              </motion.svg>
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="bg-background-dark/80 backdrop-blur-sm border border-border-subtle p-2 rounded">
                    <div className="text-[8px] text-slate-500 font-mono">LATENCY_MAP</div>
                    <div className="text-xs text-primary font-bold font-mono">&lt; 1.2MS</div>
                  </div>
                  <div className="bg-background-dark/80 backdrop-blur-sm border border-border-subtle p-2 rounded">
                    <div className="text-[8px] text-slate-500 font-mono">ACTIVE_CHANNELS</div>
                    <div className="text-xs text-primary font-bold font-mono">14,204</div>
                  </div>
                </div>
                <div className="bg-background-dark/80 backdrop-blur-sm border border-border-subtle p-3 rounded-lg w-fit">
                  <div className="text-[10px] text-slate-400 font-mono mb-1">SYSTEM_STATUS</div>
                  <div className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_#6cf20d]"></div>
                    <span className="text-xs font-bold text-white font-mono tracking-tighter">RELAY_SYSTEM_ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -z-10 -bottom-10 -right-10 size-64 bg-primary/10 rounded-full blur-[100px]"></div>
        </div>
      </div>
    </section>
  );
}

function CTA({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section id="contact" className="relative z-50 px-6 md:px-16 py-32 flex justify-center items-center min-h-[600px] bg-[#0a0c08] overflow-hidden">
      {/* Blurred Shockwave behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] z-0 pointer-events-none pixelator-mask" style={{ isolation: 'isolate' }}>
         <div className="blob-shockwave wave-1" style={{ borderColor: '#6cf20d', animationDuration: '15s' }}></div>
         <div className="blob-shockwave wave-2" style={{ borderColor: '#6cf20d', animationDuration: '15s' }}></div>
         <div className="blob-shockwave wave-3" style={{ borderColor: '#6cf20d', animationDuration: '15s', animationDelay: '7.5s' }}></div>
         <div className="blob-shockwave wave-4" style={{ borderColor: '#6cf20d', animationDuration: '15s', animationDelay: '7.5s' }}></div>
      </div>
      <div className="absolute inset-0 z-0 bg-[#0a0c08]/80 backdrop-blur-3xl"></div>

      {/* The Card */}
      <div className="relative z-10 w-full max-w-5xl rounded-[40px] bg-gradient-to-br from-[#84f536] to-[#6cf20d] overflow-hidden p-12 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 shadow-[0_0_100px_rgba(108,242,13,0.15)]">
        
        <div className="relative z-10 flex flex-col gap-10 md:w-1/2">
          <h2 className="font-serif-calligraphy text-5xl md:text-6xl text-[#0a0c08] leading-[1.1] italic tracking-tight">
            Uncertain about your<br/>automation strategy?
          </h2>
          
          <button onClick={onBookClick} className="group relative overflow-hidden rounded-2xl bg-[#0a0c08]/5 border border-[#0a0c08]/10 p-6 w-fit text-left hover:bg-[#0a0c08]/10 transition-colors backdrop-blur-sm">
            <div className="absolute top-4 right-4 text-[#0a0c08]/50 group-hover:text-[#0a0c08] transition-colors">
              <ArrowUpRight size={20} />
            </div>
            <div className="size-10 rounded-full bg-[#0a0c08]/10 flex items-center justify-center mb-4 text-[#0a0c08]">
              <MessageCircle size={20} fill="currentColor" />
            </div>
            <div className="text-[#0a0c08] font-bold text-lg mb-1">Consult Architect</div>
            <div className="text-[#0a0c08]/60 text-[10px] font-bold tracking-widest uppercase">Priority Access</div>
          </button>
        </div>

        <div className="relative z-10 md:w-5/12 flex flex-col items-end text-right gap-6">
          <p className="text-[#0a0c08]/80 text-xl leading-relaxed font-medium">
            Our system architects are standing by to model your workflows and build a custom automation solution.
          </p>
          <div className="flex items-center gap-1.5 opacity-40">
            <div className="size-1.5 rounded-full bg-[#0a0c08]"></div>
            <div className="size-1.5 rounded-full bg-[#0a0c08]"></div>
            <div className="h-1.5 w-8 rounded-full bg-[#0a0c08]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ onBookClick, onFaqClick }: { onBookClick: () => void, onFaqClick: () => void }) {
  return (
    <footer className="bg-[#050505] relative overflow-hidden text-slate-400 pt-20 pb-8 border-t border-white/5">
      {/* Vertical Grid Lines */}
      <div className="absolute inset-0 z-0 flex justify-between pointer-events-none px-6 md:px-16">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="h-full w-px bg-white/[0.03]"></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 flex flex-col gap-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Left Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="size-6 rounded-full bg-[#6cf20d] flex items-center justify-center relative overflow-hidden">
                <div className="absolute w-[120%] h-[2px] bg-[#050505] rotate-45"></div>
              </div>
              <span className="text-white font-bold tracking-tight text-xl">Relay</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Engineering the bedrock of the automated enterprise. Secure, scalable, and instant.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><Github size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><MessageSquare size={18} /></a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold text-sm mb-2">Solutions</h4>
              <a href="#" className="text-sm hover:text-white transition-colors">Workflow Automation</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Data Sync</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Custom Integrations</a>
              <a href="#" className="text-sm hover:text-white transition-colors flex items-center gap-2">
                Enterprise Architecture
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold text-sm mb-2">Resources</h4>
              <a href="#" className="text-sm hover:text-white transition-colors">Case Studies</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Blog</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Guides</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Webinars</a>
            </div>
          </div>

          {/* Right Cards */}
          <div className="md:col-span-4 flex flex-col sm:flex-row gap-4">
            <button onClick={onBookClick} className="flex-1 rounded-2xl bg-[#0a0c08] border border-white/5 p-6 flex flex-col justify-between hover:border-white/10 transition-colors group min-h-[160px] text-left">
              <div className="flex justify-between items-start">
                <span className="text-white font-bold text-sm">Contact Sales</span>
                <ArrowUpRight size={16} className="text-slate-600 group-hover:text-white transition-colors" />
              </div>
              <div className="text-[#6cf20d]">
                <Wallet size={24} />
              </div>
            </button>
            <button onClick={onFaqClick} className="flex-1 rounded-2xl bg-[#0a0c08] border border-white/5 p-6 flex flex-col justify-between hover:border-white/10 transition-colors group min-h-[160px] text-left">
              <div className="flex justify-between items-start">
                <span className="text-white font-bold text-sm">FAQ</span>
                <ArrowUpRight size={16} className="text-slate-600 group-hover:text-white transition-colors" />
              </div>
              <div className="text-[#6cf20d]">
                <Headphones size={24} />
              </div>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>© 2026 Relay Solutions. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span className="font-bold text-slate-300 tracking-widest">stripe</span>
            <span className="font-bold text-slate-300 tracking-widest italic">VISA</span>
            <span className="border-l border-white/10 pl-6 py-1">SOC2 Type II Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function BookPage() {
  return (
    <section className="relative min-h-screen pt-40 pb-20 px-6 md:px-16 flex flex-col items-center">
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center gap-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-widest uppercase">
          <div className="size-1.5 rounded-full bg-primary"></div>
          Priority Access
        </div>
        <h1 className="font-serif-calligraphy text-5xl md:text-6xl text-white italic">
          Schedule your <span className="text-primary">consultation</span>
        </h1>
        <p className="text-slate-400 max-w-xl text-sm md:text-base">
          Select a time below to speak with our system architects. We'll discuss your current workflows and map out a custom automation strategy.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-4xl bg-[#0a0c08] border border-white/5 rounded-3xl shadow-2xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        <div className="h-[900px] overflow-y-auto custom-scrollbar">
          <InlineWidget 
            url="https://calendly.com/relayplatformltd/30min"
            styles={{
              height: '1000px',
              width: '100%'
            }}
            pageSettings={{
              backgroundColor: '0a0c08',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: '6cf20d',
              textColor: 'ffffff'
            }}
          />
        </div>
        {/* Decorative elements to make it "part of the UI" */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>
    </section>
  );
}

function FAQPage() {
  const faqs = [
    {
      q: "What kind of systems do you automate?",
      a: "We specialize in connecting disparate legacy software with modern cloud applications, automating data transfer, CRM updates, and complex multi-step workflows."
    },
    {
      q: "How long does a typical implementation take?",
      a: "Depending on the complexity of your existing infrastructure, most custom automation systems are deployed within 2 to 4 weeks."
    },
    {
      q: "Do I need technical knowledge to maintain the system?",
      a: "Not at all. We build intuitive dashboards and provide full documentation so your team can manage the workflows without writing a single line of code."
    },
    {
      q: "Is my data secure during transfer?",
      a: "Absolutely. We use enterprise-grade encryption and zero-trust architecture to ensure your data is secure at rest and in transit."
    }
  ];

  return (
    <section className="relative min-h-screen pt-40 pb-20 px-6 md:px-16 flex flex-col items-center">
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center gap-6 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-widest uppercase">
          <div className="size-1.5 rounded-full bg-primary"></div>
          Knowledge Base
        </div>
        <h1 className="font-serif-calligraphy text-5xl md:text-6xl text-white italic">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        <p className="text-slate-400 max-w-xl text-sm md:text-base">
          Everything you need to know about our automation systems, implementation process, and security protocols.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-[#0a0c08] border border-white/5 hover:border-primary/20 transition-colors rounded-2xl p-6 md:p-8">
            <h3 className="text-white font-bold text-lg mb-3">{faq.q}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState<'home' | 'book' | 'faq'>('home');

  return (
    <div className="overflow-x-hidden bg-background-dark min-h-screen">
      <Header onBookClick={() => setPage('book')} onHomeClick={() => setPage('home')} />
      {page === 'home' ? (
        <>
          <FixedBackground />
          <main className="relative z-10">
            <EdgeGlow />
            <Hero />
            <Features />
            <Technical />
          </main>
          <CTA onBookClick={() => setPage('book')} />
        </>
      ) : page === 'book' ? (
        <main className="relative">
          <BookPage />
        </main>
      ) : (
        <main className="relative">
          <FAQPage />
        </main>
      )}
      <Footer onBookClick={() => setPage('book')} onFaqClick={() => setPage('faq')} />
    </div>
  );
}
