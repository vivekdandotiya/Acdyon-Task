# Design & Architecture Decisions — AcdyOn Pathway AI

## 1. Why this approach?

Rather than creating a conventional, text-heavy education landing page, I selected an **AI-guided pathway discovery experience** ("Pathway AI"). This approach directly translates AcdyOn’s core positioning—executive learning, applied AI capability, doctoral research, and personalized consultation—into an interactive frontend product concept.

By placing an actual, reactive product UI preview inside the hero section alongside a multi-step interactive pathway generator ("From ambition to a clearer pathway"), the visitor can instantly understand *what* the product does within 3 seconds. The experience guides executives to explore tailored learning directions based on their specific goals and current experience level, creating high user engagement while staying grounded in authentic AcdyOn program tracks.

## 2. Trade-off

**Prioritizing a polished client-side pathway prototype over a real LLM backend.**

With the project timeframe focused on frontend craft and UX strategy, I built a deterministic, explainable client-side state machine using structured pathway data. With additional engineering time, I would connect this prototype to a production recommendation service (e.g., an LLM agent with vector search grounding user resumes/goals against AcdyOn’s full academic catalog), persist user pathway profiles, add analytics tracking, and integrate calendly/CRM endpoints for consultation booking.

## 3. AI usage

AI tools were used for initial structural brainstorming, implementation assistance, refactoring Tailwind class layouts, and auditing edge-case responsiveness (e.g., 390px mobile viewports). I personally reviewed and adjusted the design system tokens, crafted the typography hierarchy, designed the interactive product preview component logic, ensured 0 console errors, verified accessibility/reduced-motion support, and validated that all prompt rules around honesty and data integrity were strictly enforced.
