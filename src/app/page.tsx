'use client';

import React, { useState, useEffect, useRef } from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';
import Footer from '../components/footer';
import Contacts from '../components/contacts';

// Service Types
interface Service {
  id: string;
  title: string;
  summary: string;
  description: string;
  tip: string;
  icon: React.ReactNode;
}

// Breathing Mode Types
interface BreathingMode {
  id: 'box' | 'deep';
  name: string;
  description: string;
  sequence: { phase: 'inhale' | 'hold' | 'exhale' | 'hold-out'; duration: number }[];
}
// Breathing Sequences Static Config
const breathingModes: Record<'box' | 'deep', BreathingMode> = {
  box: {
    id: 'box',
    name: 'Box Breathing (4-4-4-4)',
    description: 'Used by athletes and responders to relieve stress and clear the mind.',
    sequence: [
      { phase: 'inhale', duration: 4 },
      { phase: 'hold', duration: 4 },
      { phase: 'exhale', duration: 4 },
      { phase: 'hold-out', duration: 4 }
    ]
  },
  deep: {
    id: 'deep',
    name: 'Deep Calm (4-7-8)',
    description: 'A deeply soothing technique designed to quiet the nervous system.',
    sequence: [
      { phase: 'inhale', duration: 4 },
      { phase: 'hold', duration: 7 },
      { phase: 'exhale', duration: 8 }
    ]
  }
};

// Services Static Dataset
const services: Service[] = [
  {
    id: 'depression',
    title: 'Depression Support',
    summary: 'Improve your energy, motivation, and mood. Break the cycle of hopelessness with proven, compassionate therapies.',
    description: 'Depression has a powerful way of telling you that you are alone and that nothing will change. Together, we will gently challenge those thoughts, rebuild your active engagement, and restore a sense of purpose and hope.',
    tip: 'A supportive starting step: Try to schedule one small, comfortable activity today, even if you do not feel motivated to do so. Often, movement begins before the motivation follows.',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    )
  },
  {
    id: 'anxiety',
    title: 'Anxiety & Panic Care',
    summary: 'Find relief from social anxiety, generalized worry, panic attacks, OCD, and phobias. Reclaim your mental peace.',
    description: 'Anxiety thrives on uncertainty and can make the world feel unsafe. Using evidence-based Cognitive Behavioral Therapy (CBT) and grounding techniques, we will work together to quieten the alarm in your mind and help you feel secure.',
    tip: 'A calming practice: When anxiety surges, name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. This returns your focus to the safe present.',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    )
  },
  {
    id: 'stress',
    title: 'Stress Management',
    summary: 'Regain health, quality sleep, and life satisfaction. Learn sustainable strategies to navigate life pressures.',
    description: 'Chronic stress damages our physical health and limits our emotional capacity. We will identify your unique triggers, establish healthy boundaries, and implement everyday habits that build real resilience and peace of mind.',
    tip: 'A quick stress release: Drop your shoulders, unclamp your jaw, and let your tongue rest away from the roof of your mouth. Exhale slowly and feel the release.',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m-9-9h1.5m15 0H21m-1.464-7.071l-1.062 1.062m-12.022 0l-1.062-1.062m12.022 12.022l-1.062-1.062m-12.022 0l-1.062 1.062M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
      </svg>
    )
  },
  {
    id: 'trauma',
    title: 'Trauma & PTSD Recovery',
    summary: 'Heal the deeply rooted impacts of child or adult trauma on your relationships, identity, and sense of self.',
    description: 'Trauma can store itself in the nervous system, leading to hyper-vigilance or feeling disconnected. We offer safe, paced, and supportive counseling to process past events, helping you safely rebuild connection and autonomy.',
    tip: 'A grounding affirmation: Breathe deeply and say gently to yourself: "That was then, and this is now. I am safe here in this moment."',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0114 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    )
  },
  {
    id: 'grief',
    title: 'Grief & Loss Counseling',
    summary: 'Receive compassionate guidance to navigate the painful life changes following loss of a loved one, pet, or life role.',
    description: 'Grief is a natural response to loss, but it can feel incredibly disorienting and exhausting. Therapy offers a dedicated space to honor your feelings, navigate the shifting changes, and gradually integrate loss into your life at your own pace.',
    tip: 'A reminder for sorrow: Grief holds no rules or timelines. Give yourself permission to feel whatever rises today—sadness, anger, relief, or numbness—without judgment.',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    )
  },
  {
    id: 'youth',
    title: 'Adolescent & Youth Support',
    summary: 'Specialized counseling for teenagers and young adults navigating emotional challenges, school pressures, and identity.',
    description: 'Transitioning into adulthood brings unique stressors. Informed by my extensive career as a school psychologist and educator, I provide a safe, respectful space for youth to express themselves, build resilience, and discover confident pathways forward.',
    tip: 'A healthy check-in: Create a regular, pressure-free time to check in with a supportive friend or family member. Simply sharing your day without feeling the need to "solve" anything is incredibly grounding.',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925-3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 006 12v6m0 0h12m-12 0v1.5m12-1.5v1.5M12 18v-6" />
      </svg>
    )
  }
];

export default function IndexPage() {
  const { contactEmail } = useSiteMetadata();

  // Guided Breathing Tool ("Calm Space") State
  const [breathingActive, setBreathingActive] = useState<boolean>(false);
  const [breathingMode, setBreathingMode] = useState<'box' | 'deep'>('box');
  const [breathPhase, setBreathPhase] = useState<'idle' | 'inhale' | 'hold' | 'exhale' | 'hold-out'>('idle');
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [_phaseIndex, setPhaseIndex] = useState<number>(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentMode = breathingModes[breathingMode];

  // Guided Breathing Logic (using event-driven state initialization to prevent linter errors)
  useEffect(() => {
    if (!breathingActive) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          let nextDuration = 0;
          setPhaseIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % currentMode.sequence.length;
            const nextPhase = currentMode.sequence[nextIndex];
            setBreathPhase(nextPhase.phase);
            nextDuration = nextPhase.duration;
            return nextIndex;
          });
          return nextDuration;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [breathingActive, breathingMode, currentMode.sequence]);

  const handleStartPause = () => {
    const nextActive = !breathingActive;
    setBreathingActive(nextActive);
    if (!nextActive) {
      setBreathPhase('idle');
      setTimeLeft(0);
      setPhaseIndex(0);
    } else {
      // Set first phase
      const initialPhase = currentMode.sequence[0];
      setBreathPhase(initialPhase.phase);
      setTimeLeft(initialPhase.duration);
      setPhaseIndex(0);
    }
  };

  const handleModeChange = (mode: 'box' | 'deep') => {
    setBreathingActive(false);
    setBreathingMode(mode);
    setBreathPhase('idle');
    setTimeLeft(0);
    setPhaseIndex(0);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="badge">Welcome to Rosemary Jovanovic Psychology</span>
            <h1>Caring, Effective & Grounded Psychological Support</h1>
            <p className="hero-lead">
              A gentle, reassuring space to heal, grow, and restore your mental wellbeing. Providing experienced, professional psychological care on the Gold Coast for over 20 years.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Schedule Consultation</a>
              <a href="#calm-space" className="btn btn-secondary">Enter Calm Space</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-frame">
              <img src="/images/profile-photo.jpg" alt="Rosemary Jovanovic - Gold Coast Psychologist" />
            </div>
            <div className="hero-shape-decorator"></div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section section-padding">
        <div className="container about-grid">
          <div className="about-image-container">
            <div className="about-image-card">
              <img src="/images/profile-photo-s.jpg" alt="Rosemary Jovanovic - Gold Coast Psychologist" />
              <div className="about-image-caption">Rosemary Jovanovic</div>
            </div>
            <div className="about-image-decor"></div>
          </div>
          <div className="about-content">
            <span className="badge">About Me</span>
            <h2>Dedicated to Healing and Mental Health Education</h2>
            <p>
              I am a Gold Coast-based Registered Psychologist and an accredited Youth Mental Health First Aid (YMHFA) Instructor. Over my 20-year career, I have supported children, adolescents, and adults as a school psychologist, private practitioner, and high school teacher.
            </p>
            <p>
              My philosophy centers on creating a safe, non-judgmental atmosphere where individuals feel truly heard and supported. I am deeply passionate about helping clients navigate mental health problems, reduce stress, and cultivate lasting wellbeing.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-num">20+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">100%</div>
                <div className="stat-label">Caring & Supportive</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">QLD</div>
                <div className="stat-label">Gold Coast & Region</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services-section section-padding">
        <div className="container">
          <div className="services-header">
            <span className="badge">Therapeutic Services</span>
            <h2>Areas of Professional Care</h2>
            <p>
              Every individual's path to wellness is unique. I tailor evidence-based therapies to support you through life's most challenging transitions.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              return (
                <div 
                  key={service.id} 
                  className="service-card"
                >
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p className="service-summary">{service.summary}</p>
                  
                  <div className="service-detail-content">
                    <p>{service.description}</p>
                    <div className="coping-tip">
                      <strong>Coping Tip:</strong> {service.tip}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INNOVATIVE CALM SPACE BREATHING TOOL */}
      <section id="calm-space" className="section-padding container" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="calm-space-section">
          <div className="calm-space-container">
            <div className="calm-space-info">
              <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#ffffff' }}>Innovative Self-Care Space</span>
              <h2>The Calm Space</h2>
              <p>
                Take a pause. Whenever you feel overwhelmed, anxious, or stressed, enter our interactive guided breathing tool. Choose a breathing pattern below and allow the visual guide to calm your nervous system.
              </p>

              <div className="breathing-modes">
                <button 
                  className={`mode-btn ${breathingMode === 'box' ? 'active' : ''}`}
                  onClick={() => handleModeChange('box')}
                >
                  <span className="mode-title">{breathingModes.box.name}</span>
                  <span className="mode-desc">{breathingModes.box.description}</span>
                </button>
                <button 
                  className={`mode-btn ${breathingMode === 'deep' ? 'active' : ''}`}
                  onClick={() => handleModeChange('deep')}
                >
                  <span className="mode-title">{breathingModes.deep.name}</span>
                  <span className="mode-desc">{breathingModes.deep.description}</span>
                </button>
              </div>
            </div>

            <div className="breathing-widget-wrapper">
              <div className="breathing-ring-outer">
                <div className="breathing-circle-glow" style={{
                  transform: breathPhase === 'inhale' ? 'scale(1.4)' : breathPhase === 'exhale' ? 'scale(0.8)' : 'scale(1)'
                }}></div>
                <div className={`breathing-circle ${breathPhase}`}>
                  <span className="breathing-instruction">
                    {breathPhase === 'idle' && 'Quiet Your Mind'}
                    {breathPhase === 'inhale' && 'Breathe In'}
                    {breathPhase === 'hold' && 'Hold'}
                    {breathPhase === 'exhale' && 'Breathe Out'}
                    {breathPhase === 'hold-out' && 'Rest'}
                  </span>
                  {breathingActive && (
                    <span className="breathing-timer">{timeLeft}s</span>
                  )}
                </div>
              </div>

              <div className="widget-controls">
                <button onClick={handleStartPause} className="btn btn-cta">
                  {breathingActive ? (
                    <>
                      <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: '4px' }}>
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                      </svg>
                      Pause Space
                    </>
                  ) : (
                    <>
                      <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: '4px' }}>
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      Begin Breathing
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YOUTH MENTAL HEALTH FIRST AID */}
      <section id="ymhfa" className="ymhfa-section section-padding">
        <div className="container ymhfa-grid">
          <div className="ymhfa-content">
            <span className="badge">Accredited Education</span>
            <h2>Youth Mental Health First Aid Courses</h2>
            <p>
              Mental health problems often emerge during adolescence. As an accredited Youth Mental Health First Aid (YMHFA) Instructor, I teach parents, teachers, and workplace coordinators how to identify signs of mental illness and support young people effectively.
            </p>
            <p>
              This evidence-based curriculum empowers individuals with practical tools to intervene early and assist adolescents in times of mental health crisis.
            </p>
            
            <ul className="ymhfa-bullets">
              <li>Learn to recognize developmental shifts versus signs of distress</li>
              <li>Practice standard, safe crisis-first-aid action steps</li>
              <li>Provide comforting support to teenagers experiencing depression, anxiety, or self-harm</li>
              <li>Receive official course certification upon completion</li>
            </ul>
            
            <a href={`mailto:${contactEmail}?subject=YMHFA Course Booking Enquiry`} className="btn btn-primary">
              Book a Course for Your Organisation
            </a>
          </div>

          <div className="ymhfa-card">
            <div className="badge-certified">
              <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Accredited Instructor
            </div>
            <h3>YMHFA Course Inquiries</h3>
            <p>
              Ideal for secondary schools, sports leagues, community groups, and family networks. Get in touch to schedule a specialized workshop.
            </p>
            <a href={`mailto:${contactEmail}?subject=YMHFA Course Syllabus Request`} className="btn btn-secondary" style={{ width: '100%' }}>
              Request Course Syllabus
            </a>
          </div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section id="contact" className="contact-section section-padding">
        <div className="container">
          <div className="contact-card-centered">
            <div className="contact-info">
              <span className="badge">Get in Touch</span>
              <h2>Let's Start a Conversation</h2>
              <p className="contact-intro">
                Seeking support can feel like a major step. Please reach out directly with any questions about session availability, booking options, or mental health workshops.
              </p>

              <div className="contact-details-row">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Email Directly</h4>
                    <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Gold Coast, QLD, Australia</p>
                  </div>
                </div>
              </div>

              <div className="social-links-wrapper">
                <span className="social-title">Connect Socially</span>
                <Contacts />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
