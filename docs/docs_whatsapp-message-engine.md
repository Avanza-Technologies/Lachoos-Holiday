# Lachoos Holidays — WhatsApp Message Engine Specification

## 💎 Specification Overview & Strategic System Contracts
*   **Document Reference:** WhatsApp Message Engine Specification [cite: 2]
*   **Version Code:** 2.0 (Refactored for Programmatic Routing Context)
*   **Development Priority:** Critical [cite: 2]
*   **Implementation Lifecycle State:** Planned / Architecture Phase [cite: 2]

The WhatsApp Message Engine serves as the core conversion engine and the single transactional bridge across the entire Lachoos Holidays platform [cite: 2]. Rather than employing heavy backend databases, user state trackers, or third-party checkouts, this engine turns high-intent user interest into structured, context-aware direct messaging links [cite: 2]. Every primary exploration track across the site must route through this central point [cite: 2].

```text
   UI INTERACTION ──> CONTEXT BINDING ──> ALPHANUMERIC ENCODING ──> NATIVE DEEP LINK
   (User Clicks CTA)    (Extract Object Data)    (URI-Safe String Stream)      (Open WhatsApp Tab)
```

---

## ⚡ Core Architecture Shift: Dynamic Context Injection (v2)
> **CRITICAL DEV MANDATE:** To optimize organic search engine rankings, eliminate page layout fragmentation on mobile devices, and capture the exact source path of a customer, **all message templates must programmatically capture and inject the canonical URL of the current page (`window.location.href`)** [cite: 2].
> 
> Old popup visibility states are completely deprecated in favor of standalone routes managed by React Router [cite: 7]. This allows the message engine to capture the user's explicit browsing coordinates, preventing loss of context down the funnel [cite: 2].

---

## 📁 System Modules Map
The engine handles dynamic data injection across these core application terminals [cite: 2]:
*   **Module 01 (Home Landing Page):** Main Hero banner quick-contact actions [cite: 2].
*   **Module 02 & 03 (Package Directories):** Direct categorical collection checkouts [cite: 2].
*   **Module 04 (Deep-Dive Itinerary Pages):** Deep item destination booking actions [cite: 2].
*   **Module 06 (Sabarimala Pilgrimage Hub):** Direct routes to specialized pilgrimage desks [cite: 2].
*   **Module 07 (Fleet Presentation Grid):** Model-specific vehicle leasing and transit inquiries [cite: 2].
*   **Module 09 (Central Contact Page):** General agency customer inquiry capture [cite: 2].

---

## ⚙️ Operational Configuration & URL Layout

### Centralized Source Configuration
To prevent code duplication and track number assignments safely, the application must read coordinates from a single configuration source rather than hardcoding numbers directly inside view layers [cite: 2]:

```javascript
// Located within /src/config/whatsapp.js
export const WHATSAPP_CONFIG = {
  targetNumber: "91XXXXXXXXXX", // Unified regional agency help desk phone [cite: 2]
  baseEndpoint: "https://wa.me"    // Canonical native redirect path [cite: 2]
};
```

### URL Compilation Format
Outbound links compile dynamically on the client side using the standard format [cite: 2]:
$$	ext{URL} = 	ext{baseEndpoint} + "/" + 	ext{targetNumber} + "?text=" + 	ext{encodeURIComponent}(	ext{Template})$$

Every compiled text string must open automatically in a new browser tab, preserve clear formatting line-breaks, and execute instantly without server-side processing [cite: 2].

---

## 📝 Documented Message Category Templates [cite: 2]

The engine matches user actions to distinct structural templates, eliminating the need for travelers to type things manually [cite: 2]:

### 1. Travel Package Enquiry Template [cite: 2]
*   **Trigger Location:** Programmatic Deep Itinerary Pages (`/packages/:category/:slug`) [cite: 2].
*   **Dynamic Variables:** `packageName`, `category`, `duration`, `startingPrice` [cite: 2].
*   *Text Layout Format:*
```text
Hello Lachoos Holidays,
I am highly interested in the following travel package:
- Itinerary Package: {{packageName}} [cite: 2]
- Category Niche: {{category}} [cite: 2]
- Duration Track: {{duration}} [cite: 2]
- Price Guideline: Starting From ₹{{startingPrice}} [cite: 2]
- Source Context Link: [Programmatically Injected window.location.href URL]

Please share complete package details and verify seasonal availability.
Thank You. [cite: 2]
```

### 2. Fleet Rental Transit Template [cite: 2]
*   **Trigger Location:** Fleet Presentation Grid Modules (`/fleet`) [cite: 2].
*   **Dynamic Variables:** `vehicleName`, `category`, `capacity` [cite: 2].
*   *Text Layout Format:*
```text
Hello Lachoos Holidays,
I would like information regarding the following vehicle:
- Selected Fleet Model: {{vehicleName}} [cite: 2]
- Classification Tier: {{category}} [cite: 2]
- Max Cabin Capacity: {{capacity}} Passengers [cite: 2]

Please share pricing frameworks and availability details.
Thank You. [cite: 2]
```

### 3. Specialized Sabarimala Pilgrimage Template [cite: 2]
*   **Trigger Location:** Sabarimala Strategic Wing Hub (`/sabarimala`) [cite: 2].
*   *Text Layout Format:*
```text
Hello Lachoos Holidays,
I am interested in your dedicated Sabarimala pilgrimage services.
Please share complete details regarding available family packages, specialized transportation options, and local travel planning assistance.
Thank You. [cite: 2]
```

### 4. General Support Contact Template [cite: 2]
*   **Trigger Location:** Global Footer and Central Contact Page (`/contact`) [cite: 2].
*   *Text Layout Format:*
```text
Hello Lachoos Holidays,
I would like more information regarding your travel services and South India packages. Please contact me.
Thank You. [cite: 2]
```

### 5. Custom Tour Planner Template (Future Backlog Extension) [cite: 2]
*   **Trigger Location:** Multi-Step Custom Trip Forms Block [cite: 2].
*   **Dynamic Variables:** `destination`, `duration`, `travelerCount` [cite: 2].
*   *Text Layout Format:*
```text
Hello Lachoos Holidays,
I am looking for a customized travel package.
- Target Destination: {{destination}} [cite: 2]
- Timeline Duration: {{duration}} [cite: 2]
- Total Travelers: {{travelerCount}} Count [cite: 2]

Please contact me with suitable travel options and itineraries.
Thank You. [cite: 2]
```

---

## 📐 Button Placement & Label Hierarchy Enforcements [cite: 2]

Primary CTA booking buttons must remain highly visible, clearly legible, and accessible across all user pathways to maximize enquiry volume [cite: 2].

```text
  ┌──────────────────────────────────────────────────────────────────────┐
  │                         BUTTON INTERACTION HIERARCHY                 │
  ├──────────────────────────────────────────────────────────────────────┤
  │ PRIMARY CONVERSION LABELS (Green Theme):                            │
  │ • "Book Now" | • "Enquire Now" | • "Contact on WhatsApp"             │
  ├──────────────────────────────────────────────────────────────────────┤
  │ SECONDARY EXPLORATION LABELS (Transparent/Border Theme):             │
  │ • "Learn More" | • "View Details"                                    │
  └──────────────────────────────────────────────────────────────────────┘
```
*❌ Anti-Patterns to Avoid:* Banned UI button labels include generic or mechanical verbs like `"Submit"`, `"Send Request"`, or other generic strings [cite: 2].

---

## 📱 Mobile Architecture & Optimization Standards [cite: 2]
*   **Mobile Experience Priority:** Critical, as the vast majority of consumer queries originate directly on mobile smartphone layouts [cite: 2].
*   **Ergonomics Mandate:** Enforce clean, one-tap launch mechanics that fire native app redirects flawlessly without freezing or dropping string variables [cite: 2]. Spacing and sizes must conform to strict touch standards, placing checkout nodes within natural thumb reach [cite: 8].

---

## 🚨 Robust Fail-Safe Error Handling
If an itinerary dataset is incomplete, data fields return unparsed variables, or client components face structural property failures, the engine must intercept the script error dynamically [cite: 2]:
*   **Operational Presentation Rule:** Block broken layout strings or raw code tokens from displaying to the visitor [cite: 10].
*   **Fallback Template Injected:** Cleanly downgrade the link query to standard text fields [cite: 2]:
```text
Hello Lachoos Holidays,
I am interested in learning more about your travel services. Please contact me.
Thank You. [cite: 2]
```

---

## 🔒 Security & Privacy Boundary Controls
To maintain a fast frontend structure and ensure compliance with digital privacy standards, the system scope enforces specific boundaries [cite: 2]:
*   ❌ Do NOT capture, cache, or store customer message strings locally or via client cookies [cite: 2].
*   ❌ Do NOT collect personally identifiable information (PII) or harvest phone numbers [cite: 2].
*   ❌ Do NOT log private conversations [cite: 2]. The platform acts strictly as a secure, stateless link compiler [cite: 2].

---

## 🔮 Future Scalability Backlog (Non-Breaking Architectural Paths) [cite: 2]
*   **Departmental Routing Rails:** Dynamic script updates routing pilgrimage enquiries straight to Sabarimala coordinators while funneling transits to fleet logicians [cite: 2].
*   **Outbound Analytics Tracking:** Lightweight event hooks logging conversion click velocities to analyze marketing channel success [cite: 2].

---

## 🔗 Module Dependencies & Intersects
The message generation loop relies on properties extracted from across these repository documentation files:
1.  **`docs/state-management.md`:** Standardizes universal package schema variables and vehicle parameters [cite: 2, 10].
2.  **`docs/UI-GUIDELINES.md`:** Standardizes visual green color tokens, sizes, and layout borders [cite: 2].
3.  **`docs/modules/01-home-landing.md`:** Details the baseline hero canvas CTA buttons grid map [cite: 2].

---

## 🏁 Quality Control Success Rubric
The implementation of the conversion system is verified as production-ready when meeting these metrics:
- [ ] **One-Tap Conversion Handshake:** Users successfully trigger direct chat launches across desktop and mobile browsers in a single action [cite: 2].
- [ ] **Context-Aware Link Injections:** Inbound messages contain accurate page URL links (`window.location.href`) alongside itinerary data fields [cite: 2].
- [ ] **Immediate Intent Recognition:** Agency desk staff can quickly understand a traveler's exact intent within seconds of reading the structured request text [cite: 2].
- [ ] **Zero Friction Flow:** The platform operates as an intuitive lead-generation engine that completely eliminates communication barriers for traveling clients [cite: 2].