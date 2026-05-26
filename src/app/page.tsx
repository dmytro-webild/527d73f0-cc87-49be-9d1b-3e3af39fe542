"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmall"
        background="grid"
        cardStyle="inset"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Results",
          id: "#results",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=mrutds"
      logoAlt="HexaKore Logo"
      brandName="HexaKore"
      button={{
        text: "Get Started",
        href: "#contact",
      }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroOverlay
      title="Unlock Your Business Potential with AI"
      description="HexaKore is your partner in AI innovation, delivering custom websites, intelligent chatbots, powerful AI agents, robust automations, SEO, and social media management to drive your growth."
      buttons={[
        {
          text: "Explore Our Services",
          href: "#services",
        },
        {
          text: "Get a Free Consultation",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-young-businesswoman_23-2149153828.jpg",
          alt: "Sarah Johnson",
        },
        {
          src: "http://img.b2bpic.net/free-photo/person-surrounded-by-ai-robots-coworkers_23-2151015285.jpg",
          alt: "Michael Chen",
        },
        {
          src: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2579.jpg",
          alt: "Emily Rodriguez",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-happy-bearded-man-suit-laughing-smiling-standing-white-background_1258-155212.jpg",
          alt: "David Lee",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-home_23-2150062545.jpg",
          alt: "Sophia Miller",
        },
      ]}
      avatarText="Trusted by innovative businesses"
      imageSrc="http://img.b2bpic.net/free-photo/luxurious-modern-office-space-with-important-reports-laptop-empty-desk-showcasing-important-data_482257-133861.jpg"
      imageAlt="Futuristic AI office environment with team collaborating on holographic interfaces"
      showBlur={true}
      textPosition="bottom"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="Your Vision, Our AI Expertise. Transforming ideas into intelligent realities."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Custom Website Development",
          description: "Crafting high-performance, SEO-optimized websites that convert visitors into loyal customers.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-architect-using-tablet-with-touch-screen-analyze-building-model-architectural-development-man-engineer-working-with-device-construction-layout-design_482257-39970.jpg",
          imageAlt: "Website development on multiple devices",
          buttonIcon: "Code",
        },
        {
          title: "Intelligent Chatbot Integration",
          description: "Deploying AI-powered chatbots for 24/7 customer support, lead generation, and personalized user experiences.",
          imageSrc: "http://img.b2bpic.net/free-photo/smartphone-with-opened-ai-chat-it_1268-21624.jpg",
          imageAlt: "AI chatbot conversation interface",
          buttonIcon: "MessageSquare",
        },
        {
          title: "Advanced AI Agents",
          description: "Developing bespoke AI agents to automate complex tasks, analyze data, and provide strategic insights for your business.",
          imageSrc: "http://img.b2bpic.net/free-photo/anthropomorphic-robot-that-performs-regular-human-job_23-2151061680.jpg",
          imageAlt: "Abstract visualization of an AI agent",
          buttonIcon: "Zap",
        },
        {
          title: "Business Process Automation",
          description: "Streamlining your operations with intelligent automation to reduce costs and boost efficiency across departments.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-data-center-computer-scientist-using-tablet-deploying-servers-network-hardware-it_482257-135612.jpg",
          imageAlt: "Business process automation workflow",
          buttonIcon: "Repeat",
        },
        {
          title: "SEO & Content Strategy",
          description: "Enhancing your online visibility and ranking higher on search engines with targeted SEO and compelling content.",
          imageSrc: "http://img.b2bpic.net/free-photo/homepage-concept-with-search-bar_23-2149416733.jpg",
          imageAlt: "SEO optimization concepts",
          buttonIcon: "Search",
        },
        {
          title: "Social Media Management",
          description: "Building and managing your brand's presence across all social platforms to engage audiences and drive growth.",
          imageSrc: "http://img.b2bpic.net/free-photo/interracial-young-couple-making-video-call-digital-tablet-waving-their-hands_23-2148151879.jpg",
          imageAlt: "Social media icons connected",
          buttonIcon: "Share2",
        },
      ]}
      title="Comprehensive AI & Digital Solutions"
      description="From intelligent automation to captivating web experiences, we provide a full spectrum of services designed to elevate your business in the digital age."
    />
  </div>

  <div id="results" data-section="results">
      <MetricCardSeven
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "150+",
          title: "Projects Completed",
          items: [
            "Across diverse industries",
            "Delivered on time and budget",
          ],
        },
        {
          id: "m2",
          value: "98%",
          title: "Client Satisfaction",
          items: [
            "Long-term partnerships",
            "Positive feedback scores",
          ],
        },
        {
          id: "m3",
          value: "30%",
          title: "Average Efficiency Boost",
          items: [
            "Streamlined operations",
            "Reduced manual workloads",
          ],
        },
      ]}
      title="Driving Tangible Results with AI"
      description="Our commitment to innovation and client success is reflected in the measurable impact we deliver across various industries."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "InnovateCorp",
        "FutureTech Solutions",
        "DataDriven Inc.",
        "CloudStream Analytics",
        "Synergy AI Labs",
        "Apex Digital Group",
        "Quantum Leap Innovations",
      ]}
      title="Trusted by Innovative Companies"
      description="We empower businesses across diverse sectors to achieve their digital transformation goals with our bespoke AI solutions."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          role: "CEO",
          company: "TechCorp Solutions",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-beautiful-blonde-woman-wearing-white-shirt-standing-co-working-space-leaning-desk_74855-15151.jpg",
          imageAlt: "Portrait of Sarah Johnson",
        },
        {
          id: "2",
          name: "Michael Chen",
          role: "CTO",
          company: "Innovate Labs",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-attractive-young-mixed-race-model-with-large-afro-wearing-navy-jacket-her-naked-body-shorts_633478-1216.jpg",
          imageAlt: "Portrait of Michael Chen",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          role: "Marketing Director",
          company: "GrowthSpark Agency",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-business-woman-portrait_23-2149280776.jpg",
          imageAlt: "Portrait of Emily Rodriguez",
        },
        {
          id: "4",
          name: "David Kim",
          role: "Small Business Owner",
          company: "Local Pros Inc.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-correcting-grammar-mistakes_23-2150171372.jpg",
          imageAlt: "Portrait of David Kim",
        },
        {
          id: "5",
          name: "Olivia Wilson",
          role: "Head of Operations",
          company: "Streamline Corp",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/joyful-young-bald-call-center-man-wearing-headset-sitting-desk-with-work-tools-looking-laptop-showing-thumb-up-isolated-purple_141793-84110.jpg",
          imageAlt: "Portrait of Olivia Wilson",
        },
      ]}
      kpiItems={[
        {
          value: "5",
          label: "Star Rating",
        },
        {
          value: "90%",
          label: "Customer Retention",
        },
        {
          value: "2X",
          label: "ROI Delivered",
        },
      ]}
      title="What Our Clients Say"
      description="Hear directly from businesses who have partnered with HexaKore to achieve remarkable growth and efficiency through AI."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "What kind of AI solutions does HexaKore offer?",
          content: "HexaKore specializes in custom AI website development, intelligent chatbot integration, advanced AI agent creation, business process automation, SEO strategies, and comprehensive social media management.",
        },
        {
          id: "q2",
          title: "How long does it take to develop a custom AI website?",
          content: "The timeline for a custom AI website varies based on complexity and features. Typically, projects range from 8 to 16 weeks, including discovery, design, development, and deployment phases.",
        },
        {
          id: "q3",
          title: "Can you integrate AI into my existing systems?",
          content: "Absolutely. Our team excels at seamlessly integrating AI solutions, including chatbots and automation agents, into your current CRM, ERP, and other business platforms to enhance functionality and data flow.",
        },
        {
          id: "q4",
          title: "What industries do you serve?",
          content: "We work with businesses across various industries, including e-commerce, healthcare, finance, education, logistics, and many more, tailoring our AI solutions to specific sector needs.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Find quick answers to the most common questions about our AI services, development process, and how we can help your business."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      text="Ready to transform your business with AI? Let's build something extraordinary together."
      buttons={[
        {
          text: "Schedule a Consultation",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=mrutds"
      logoAlt="HexaKore Logo"
      logoText="HexaKore"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
