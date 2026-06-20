# Lachoos Holidays — Module 06: Sabarimala Pilgrimage Services Specification

## 💎 Module Overview & Strategic Commercial Core
*   **Module Reference Name:** Module 06 — Sabarimala Pilgrimage Services [cite: 2]
*   **Version Code:** 2.0 (Refactored for Programmatic Canonical Routing)
*   **Development Priority:** Critical [cite: 2]
*   **Implementation Lifecycle State:** Active Build Lifecycle [cite: 2]

Among all system blocks within the Lachoos Holidays ecosystem, the Sabarimala platform requires structural priority [cite: 2]. This module represents the agency's primary geographic unique selling point (USP) and competitive differentiator over generic travel networks due to its physical headquarters location near the pilgrimage site [cite: 2]. 

The interface is engineered to establish immediate transactional trust, provide clear local logistical guidance, and channel pilgrims into dedicated, context-aware WhatsApp communication tracks [cite: 2].

```text
  🎯 Visual Entry ──> 🛡️ Trust Validation ──> 📂 Discovery Route ──> 💬 Context Lead
   (/sabarimala Hub)    (Why Choose Baseline)   (Itinerary Deep Dives)    (WhatsApp Line)
```

---

## ⚡ Core User Experience (UX) Directive: Routing Refactor (v2)
> **CRITICAL ARCHITECTURAL MANDATE:** To achieve structural compliance with modern Search Engine Optimization (SEO) criteria, ensure lightweight page bundles, and enable link distribution across platforms, **all dynamic itinerary details previously planned as modal popup layers within Section 4 are completely deprecated** [cite: 1, 2]. 
> 
> The platform replaces popups with standalone, crawlable URL endpoints managed dynamically by React Router [cite: 7]. This structure ensures a friction-free, intuitive mobile viewport layout where users reach direct WhatsApp lead redirection pipelines within a maximum path threshold of **3 interaction clicks** [cite: 2].

---

## 🛣️ Module Routing & Data Integration
*   **Path Alignment:** `/sabarimala` (Dedicated Application Feature Page) [cite: 4]
*   **Data Hydration Contract:** Programmatically maps data values parsed directly from the static array schemas established inside `state-management.md` [cite: 2, 10]. Components must decouple layout structures from business data to allow a painless migration to an external database API later [cite: 10].

---

## 📐 Component Layout Architecture

### Section 1 — Hero Experience Canvas [cite: 2]
*   **Functional Intent:** Establish a deeply respectful, trustworthy, and premium first impression [cite: 2].
*   **Visual Requirements:** Clean background elements displaying regional travel landscapes, natural environments, or pilgrimage routes to invoke a devotional, calm, and professional atmosphere [cite: 2]. Avoid flashy visual effects or motion loops [cite: 2].
*   **Copy Matrix Layout:**
    *   *Primary Headline:* **"Your Trusted Partner for a Comfortable Sabarimala Pilgrimage"** [cite: 2]
    *   *Supporting Subheadline:* "Travel with confidence through carefully planned pilgrimage support and transportation services." [cite: 2]
*   **Interactive CTA Block:** Large primary action button `[Enquire on WhatsApp]` that links directly to the serialized query string [cite: 2].

### Section 2 — About Our Services & Expertise [cite: 2]
*   **Functional Intent:** Establish regional authority and profile the company's localized logistical expertise [cite: 2].
*   **Core Messaging Statement:** "Lachoos Holidays helps pilgrims focus on their spiritual journey while we assist with travel planning and logistics." [cite: 2]
*   **Layout Rule:** Two-column fluid grid on desktop viewports (visual left, typography block right), collapsing to single-column vertical stacks on mobile screens [cite: 8].

### Section 3 — Available Logistical Offerings [cite: 2]
*   **Functional Intent:** Clearly present core pilgrimage-specific services [cite: 2].
*   **Service Card Matrix Array:**
    1.  *Transportation Assistance:* Covers transit pickup points, terminal drop-offs, and micro-route tracking planning [cite: 2].
    2.  *Family Pilgrimage Packages:* Customized travel paths explicitly tailored for families, senior citizens, and private small groups [cite: 2].
    3.  *Accommodation Guidance:* Dedicated helper parameters providing guidance to ensure pilgrims source reliable regional housing options [cite: 2].
    4.  *Customized Travel Planning:* High-flexibility logistical support mapped dynamically to unique user criteria [cite: 2].

### Section 4 — Programmatic Pilgrimage Itineraries (Refactored Route Integration) [cite: 2]
*   **Functional Intent:** Present pre-planned, localized pilgrimage packages [cite: 2].
*   **Showcase Cards Specification:** Each item renders a dedicated thumbnail container, duration tag, explicit seating capacity context indicator, upfront baseline pricing tracking parameters, and dual interaction buttons [cite: 2].
*   **Target Core Packages Dataset:**
    *   *Sabarimala Quick Darshan:* (2 Days / 1 Night) – Optimized for individuals and private groups. Pricing template rule: `"Starting From ₹4,999"` [cite: 2].
    *   *Family Pilgrimage Package:* (3 Days / 2 Nights) – Optimized for multi-generational domestic family units. Pricing template rule: `"Starting From ₹8,999"` [cite: 2].
    *   *Kerala Temple Circuit:* (5 Days / 4 Nights) – Connects deep routes through Sabarimala, Guruvayur, and Chottanikkara. Pricing template rule: `"Starting From ₹14,999"` [cite: 2].
*   **Refactored Redirection Rules:**
    *   *Button A (Secondary Border Token):* `[View Details]` $ightarrow$ Triggers an indexable browser route push directly to the standalone package deep-dive subpage (`/packages/pilgrimage/sabarimala-quick-darshan`) [cite: 2].
    *   *Button B (Primary Green Token):* `[Book Now]` $ightarrow$ Instantly compiles the dynamic object data parameters into the Module 05 WhatsApp query string launcher [cite: 2].

### Section 5 — Why Choose Lachoos Holidays (Social Validation Layout) [cite: 2]
*   **Functional Intent:** Reassure users and establish solid transactional credibility [cite: 2].
*   **Value Pillars Layout:**
    *   *Local Expertise:* Strong familiarity with pilgrimage routes and travel requirements [cite: 2].
    *   *Reliable Transportation:* Focus on well-maintained, premium, and comfortable vehicle fleet tiers [cite: 2].
    *   *Personalized Assistance:* Customized tracking configurations tailored specifically to customer parameters [cite: 2].
    *   *Flexible Planning:* Full capability to customize packages and adapt services freely [cite: 2].

### Section 6 — Frequently Asked Questions Accordion [cite: 2]
*   **Functional Intent:** Reduce client uncertainty and eliminate booking friction prior to chat redirection [cite: 2].
*   **Interface Component:** Performance-optimized, touch-friendly interactive accordion element [cite: 2].
*   **Mandatory QA Dataset Matrix:**
    *   *Q:* Do you provide transportation? $ightarrow$ *A:* Yes. Transportation assistance is available for individuals, families, and groups [cite: 2].
    *   *Q:* Can packages be customized? $ightarrow$ *A:* Yes. Travel plans can be tailored according to requirements [cite: 2].
    *   *Q:* Do you assist family groups? $ightarrow$ *A:* Yes. Family-friendly options are available [cite: 2].
    *   *Q:* How do I enquire? $ightarrow$ *A:* Simply contact us through WhatsApp [cite: 2].

### Section 7 — Centralized Conversion Interceptor CTA [cite: 2]
*   **Functional Intent:** Final conversion point on the page to capture remaining leads [cite: 2].
*   **Headline Matrix:** **"Need Help Planning Your Sabarimala Journey?"** [cite: 2]
*   **Action Anchor Button:** High-visibility `[Contact on WhatsApp]` button mapped straight to the specialized template [cite: 2].

---

## 🔗 Module 05 — WhatsApp Lead Engine Template
Upon interaction triggering across any conversion node within Module 06, the core engine parses properties dynamically and encodes an automated text string [cite: 2, 10]. Users must never be forced to manually write itinerary constraints [cite: 2].

```text
Hello Lachoos Holidays,
I am interested in your dedicated Sabarimala pilgrimage services.
Please provide details regarding:
- Available packages
- Transportation options
- Travel planning assistance
- Reference Source: [Programmatically Injected window.location.href URL]

Thank You. [cite: 2]
```

---

## 🎨 Animation Protocols & Visual Constraints
*   **Visual Direction System:** Calm, respectful, clean, spiritual, and highly professional [cite: 2]. 
*   **Motion Framework Limits:** Banned items include flashing animations, bouncy effects, or complex visual transitions that create scrolling performance lag [cite: 2]. Allowed motion tokens are restricted to subtle Framer Motion page fade-ins, gentle vertical slide-ups on viewport scroll intersections, and smooth scale card hovers over a `0.3s` duration cap [cite: 2, 8].

---

## 📱 Mobile Architecture & Optimization Standards
*   **Mobile Interface Priority:** High [cite: 2]. On smartphone layouts, typography sizing values must adjust smoothly to fit small screens, preventing clipping [cite: 8]. Touch interactive elements must maintain a clear sizing footprint (`44px x 44px` minimum layout boundaries) with large, explicit conversion buttons [cite: 2, 8].
*   **Image Compression Guardrail:** All background graphics and route illustration items must pass WebP formatting standards and use lazy loading properties to guarantee fast page loads on mobile networks [cite: 2, 8].

---

## 🔮 Future Scalability Backlog (Non-Breaking Architectural Paths)
*The following items are deliberately excluded from current production deliverables. Features listed here will only be initialized once the core static lead routing system reaches full feature validation.* [cite: 2]

*   **Seasonal Pilgrimage Status Banner:** Dynamic component overlay displaying real-time temple opening dates and line tracking info during the Mandala-Makaravilakku season [cite: 2].
*   **Multi-Temple Circuit Expanders:** Adding static file array sets to expand packages into comprehensive South Indian spiritual maps (Guruvayur, Chottanikkara, Padmanabhaswamy, Madurai) [cite: 2].
*   **Verified Accommodation Directory:** Direct lookups for regional pilgrim housing options filtered by group sizes and amenity criteria [cite: 2].

---

## 🔗 Module Dependencies & Intersects
The execution of the Sabarimala platform page relies on coordination maps from across these project documentation files:
1.  **`docs/state-management.md`:** Governs schema data models and object fields [cite: 2, 10].
2.  **`docs/modules/04-05-itinerary.md`:** Sets terminal page targets whenever users click programmatic detail view actions [cite: 2].
3.  **`docs/UI-GUIDELINES.md`:** Controls visual green tokens, font configurations, and component padding boundaries [cite: 2].

---

## 🏁 Quality Control Success Rubric
The component setup is verified as production-ready when meeting these metrics:
- [ ] **USP Visibility:** The Sabarimala module is highly visible and functions as a primary lead-generation track [cite: 2].
- [ ] **Modal Deprecation:** Package click selections redirect to standalone route configurations, with zero floating popups mounted [cite: 1, 2].
- [ ] **Frictionless Formats:** The WhatsApp URL string parses parameters cleanly across both mobile and desktop browsers [cite: 2].
- [ ] **Visual Respect Contract:** Spacing maps, fonts, and photography options match a calm, clean, spiritual visual style [cite: 2].