# HUSSAM | ML / AI ENGINEER Portfolio

This is my personal portfolio showcasing my work in Machine Learning, full-stack development, and applied engineering projects.

I focus on building systems that are not just functional, but actually solve real problems, especially in areas where AI can connect with real-world engineering use cases.

## System Overview
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (Custom Glassmorphism)
- **Animations:** Framer Motion & Smooth Scroll integration
- **Contact System:** Integrated via EmailJS
- **Deployment:** Vercel (Optimized for Edge Runtime)

## Core Modules
- **Persona:** Technical background and academic foundation with focus on engineering and applied systems.
- **Projects:** Selected work demonstrating practical applications and technical problem-solving.
- **Credentials:** Academic qualifications and relevant professional certifications.
- **Contact:** Standard communication channels for professional inquiries and collaboration.

## Featured project: SouqLens

SouqLens is featured on the homepage and Projects page, with direct links to its live demo and source code. It supports English, Arabic and reference-photo product search using multilingual E5, CLIP and BM25 hybrid retrieval. The demo uses an initial catalog of 18 real Black Rose products, with price, category and stock filters.

- **Live demo:** https://huggingface.co/spaces/Hussam07/souqlens
- **Source:** https://github.com/HussamDroid/Multimodal-Product-Search-and-Retrieval.
- **Project listing:** `components/Project.tsx`
- **Thumbnail:** `public/projects/souqlens.svg`

The retrieval evaluation uses draft relevance labels awaiting review; the portfolio does not present those scores as validated accuracy. The portfolio links to the hosted app; model inference remains in Hugging Face Spaces.

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone [https://github.com/hussamdroid/portfolio-v3.git](https://github.com/hussamdroid/portfolio-v3.git)
   
2. Install dependencies::
   ```bash
   npm install
   
3.  Create a .env.local for EmailJS keys:
   ```bash
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
   
4. Launch the dev environment:
   ```bash
   npm run dev

   