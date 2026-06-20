# Lachoos Holidays — Module 07: Fleet Presentation Array Specification

## 💎 Module Overview & Strategic Engineering Objective
*   **Module Reference Name:** Module 07 — Fleet Services [cite: 2]
*   **Version Code:** 2.0 (Refactored for Programmatic Canonical Routing & Pricing Transparency)
*   **Development Priority:** High [cite: 2]
*   **Implementation Lifecycle State:** Active Build Lifecycle [cite: 2]

Transportation forms the operational backbone of Lachoos Holidays, directly supporting all core business segments including leisure tourism, honeymoon travel, multi-generational family vacations, pilgrimage operations, and large group tours. This module provides a highly structured, scannable presentation grid of the agency's available transit fleet tiers.

```text
  🏢 Fleet Landing Hub ──> 🚗 Tier Categorization ──> 📊 Capacity Grid & Rates ──> 💬 Contextual Lead Hook
    (/fleet Endpoint)       (Sedan | SUV | Traveller)    (Upfront Price Metrics)      (WhatsApp API Redirection)
```

The system is engineered to deliver strategic transparency regarding passenger capacities and vehicle features, helping users select the proper vehicle category and streamlining the enquiry process without structural layout clutter.

---

## ⚡ Core User Experience (UX) Directive: Routing Refactor (v2)
> **CRITICAL ARCHITECTURAL MANDATE:** To maintain absolute Search Engine Optimization (SEO) compliance, optimize page bundle footprints, and prevent layout issues on mobile viewports, **all historical specifications requiring the use of a floating Vehicle Details Modal are completely deprecated** [cite: 1, 2].
> 
> Detailed vehicle specifications, recommended use cases, and feature checklist blocks must compile directly within the fluid standalone grid page layout (`/fleet`) or render as nested tabs [cite: 2]. The platform replaces transient component modal states with direct contextual action handlers that trigger the outbound WhatsApp message pipeline within a strict **3-click interaction funnel**.

---

## 🛣️ Module Routing & Data Integration
*   **Path Alignment:** `/fleet` (Standalone Interface Layout) [cite: 4]
*   **Data Hydration Contract:** Programmatically maps data configurations parsed directly from the data structures defined in `state-management.md`. Components must remain strictly decoupled from hardcoded business data to support an eventual database middleware fetch API seamlessly.

---

## 🧱 Component Layout Architecture

### Section 1 — Fleet Hero Canvas
*   **Functional Intent:** Deliver immediate visual clarity regarding available transportation solutions.
*   **Copy Layout Matrix:**
    *   *Primary Headline:* **"Comfortable Travel Starts With The Right Vehicle"**
    *   *Supporting Subheadline:* "Reliable transportation solutions for tourism, pilgrimage, family trips, and group travel."
*   **Interactive CTA Block:** Large primary action button `[Enquire Now]` that performs a smooth browser window scroll down directly to the Section 4 Vehicle Grid anchor.

### Section 2 — Fleet Operational Introduction
*   **Functional Intent:** Brief text section clarifying available logistics, transport comfort levels, flexible travel options, and driver support variables.

### Section 3 — Vehicle Categories Directory
*   **Functional Intent:** Provide an high-level structural gateway allowing users to filter or hop down to specific transit classes.
*   **Niche Layout Segments:**
    1.  **Sedan:** Crafted for couples, small family units, and airport transfers (e.g., Swift Dzire, Toyota Etios; Max capacity: 4 Passengers).
    2.  **SUV:** Engineered for family road trips, long-distance circuits, and pilgrimage groups (e.g., Ertiga, Toyota Innova, premium Toyota Innova Crysta; Capacity: 6–7 Passengers).
    3.  **Traveller:** Heavy-duty group transit configured for pilgrimage circuits, college tours, corporate retreats, and large family networks (e.g., 12 Seater, 17 Seater, and 26 Seater variants).

### Section 4 — Vehicle Cards Presentation Grid & Field Enforcements

```text
  ┌─────────────────────────────────────────────────────────┐
  │                 VEHICLE CONFIGURATION CARD              │
  ├─────────────────────────────────────────────────────────┤
  │  [============ HIGH RES VEHICLE THUMBNAIL ============]  │
  │                                                         │
  │  🚗 Vehicle Name (e.g., Toyota Innova Crysta)           │
  │  👥 Capacity Tag: 7 Passengers Max                      │
  │  💵 Price Baseline: "Starting From ₹18 / Kilometre"     │
  │                                                         │
  │  🛠️ Standard Features List Grid:                         │
  │     • Air Conditioned        • Spacious Luggage Space   │
  │     • Comfortable Seating    • Professional Driver      │
  │                                                         │
  │  [ Book Vehicle Model ] <-- (Contextual WhatsApp Hook)  │
  └─────────────────────────────────────────────────────────┘
```

*   **Mandatory Transparency Parameter:** To combat user drop-off, every vehicle card component must expose a baseline price metrics placeholder row mapped straight to its data object property (e.g., `"Starting from ₹18 / km"` or `"Fixed ₹3,500 / Day inclusive of driver beta allowances"`).
*   **Standard Feature Array Guidelines:** Every layout card item requires clear metadata fields showing specific passenger capacities, vehicle names, optimized asset graphics with consistent aspect ratios, and bulleted amenity checks (Air Conditioning, Spacious Seating, Long Distance Travel, Large Luggage Space, Group Travel Friendly, Professional Driver Support).
*   **Responsive Layout Rules:**
    *   *Desktop Containers (`1024px+`):* Balanced 3-column rows.
    *   *Tablet Containers (`768px - 1023px`):* Multi-column 2-card grids.
    *   *Mobile Containers (`0px - 767px`):* Collapse cleanly to vertical card stacks.

### Section 5 — Why Choose Our Fleet (Value Validation)
*   **Functional Intent:** Reassure consumers and build trust regarding transit operations.
*   **Core Value Icons Matrix:** Reliable Vehicles, Comfortable Travel, Professional Drivers, Flexible Travel Plans, and Specialized Suitability for Tourism & Pilgrimage Circuits.

### Section 6 — Fleet Enquiry Action Block (Funnel Termination CTA)
*   **Headline Matrix:** **"Need Transportation For Your Journey?"**
*   **Action Anchor Button:** High-visibility `[Contact On WhatsApp]` primary button triggering a fallback recommendation text script.

---

## 🔗 Module 05 — WhatsApp Query String Serialization
Whenever a transport component CTA is clicked, the engine captures specific asset fields and encodes an automated query string. Actions must launch inside a new browser window tab, preserving clear string structure formatting.

### 1. Model-Specific Vehicle Rental Template
```text
Hello Lachoos Holidays,
I would like information regarding the following vehicle:
- Vehicle Model: {{vehicleName}}
- Category Tier: {{category}}
- Seating Capacity: {{capacity}} Passengers Max
- Source Reference: [Programmatically Injected window.location.href URL]

Please share pricing frameworks and availability details.
Thank You.
```

### 2. General Logistical Suggestion Template
```text
Hello Lachoos Holidays,
I am looking for reliable transportation services across South India.
Please suggest suitable vehicle options for my customized travel requirements.
Thank You.
```

---

## 🎬 Animation Protocols & Visual Constraints
*   **Visual Styling System:** Professional, clean, premium, and trustworthy. All vehicle images require crisp clipping over uniform backgrounds with identical aspect ratios to block uneven card scaling.
*   **Motion Framework Limits:** Motion configurations are restricted to hardware-accelerated loops consisting of basic Framer Motion card hover scales (`1.02` to `1.04` maximum translations), soft backdrop shadow elevation depth changes, and fade-ins on scroll intersections over a strict `0.3s` curve.

---

## 📱 Mobile Architecture & Optimization Standards
*   **Mobile Experience Priority:** High. Layout elements collapse cleanly to vertical formats on small viewports. Font tracking metrics, spacing tokens, and touch interactive targets must scale smoothly to handle mobile ergonomics without clipping content or hiding primary CTA elements.
*   **Image Compression Guardrail:** All automotive graphic files must pass WebP formatting standards and use lazy loading properties to guarantee fast page loads on mobile networks.

---

## 🔮 Future Scalability Backlog (Non-Breaking Architectural Paths)
*The following items are deliberately excluded from current production deliverables. Features listed here will only be initialized once the core static lead routing system reaches full feature validation.*

*   **Interactive Vehicle Image Gallery:** Responsive slider widgets providing interior cabin view lookups for premium fleet models.
*   **Live Category Filtering Rails:** Clean tabs allows users to sort vehicles instantly by capacity thresholds or vehicle class types.
*   **Driver Information Hub:** Specialized sections linking specific verified driver cards to seasonal pilgrimage transport profiles.

---

## 🔗 Module Dependencies & Intersects
The execution of the Fleet Presentation page relies on coordination maps from across these documentation layout files:
1.  **`docs/state-management.md`:** Governs schema data contracts and explicit automotive database variables.
2.  **`docs/UI-GUIDELINES.md`:** Dictates visual green tokens, spacing dimensions, and container boundary controls.
3.  **`docs/modules/04-05-itinerary.md`:** Synchronizes query string variables with the outbound booking engine.

---

## 🏁 Quality Control Success Rubric
The component setup is verified as production-ready when meeting these metrics:
- [ ] **Cross-Functional Scannability:** Available vehicle listings, seat allocations, and baseline price strings are perfectly legible across all breakpoints.
- [ ] **Modal Deprecation Compliance:** Detail check buttons operate via direct routing or inline tab variations, keeping the interface clear of floating modal frames.
- [ ] **Frictionless Lead Handshake:** Alphanumeric encoders compile model-specific vehicle text parameters without query string corruption.
- [ ] **Asset Alignment Stability:** Grid cards maintain consistent dimensions with no layout distortion caused by variant image aspect ratios.