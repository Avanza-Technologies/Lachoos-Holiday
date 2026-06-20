# Lachoos Holidays — Module 10: 3D Travel Memories Cylinder Specification

## 💎 Module Overview & Strategic Commercial Core
*   **Module Reference Name:** Module 10 — 3D Travel Memories Cylinder
*   **Version Code:** 1.0 (Single-layout 3D Cylinder on all viewports)
*   **Development Priority:** High
*   **Implementation Lifecycle State:** Active Build Lifecycle

The 3D Travel Memories Cylinder serves as a premium visual showcase for Lachoos Holidays' customer experiences and journey moments across Kerala and South India. Designed as a continuous rotating 3D gallery on all screen sizes, it captures user attention, elevates the visual premium feel of the homepage, and drives engagement directly towards conversion loops.

```text
  🎡 Continuous Rotation ──> ⏸️ Pause on Hover ──> 🔎 Dynamic Zoom ──> 💬 Conversion CTAs
       (3D Orbit)             (User Focus)        (Image Scale)         (Context Links)
```

---

## ⚡ Core User Experience (UX) Directive: Single Layout 3D Orbit
> **CRITICAL ARCHITECTURAL MANDATE:** To maximize visual premium impact and preserve consistency across all screen resolutions, the 3D rotating cylinder is utilized on all device types (Desktop, Tablet, and Mobile).
> 
> A static grid or horizontal flat scrolling swiper is deprecated. Instead, CSS 3D transforms scale the orbit proportionally down to fit mobile viewports (< 768px) dynamically, avoiding any viewport layout overflow or horizontal clipping.

---

## 🛣️ Module Layout & Component Integration
*   **Path Alignment:** Integrated as the right-hand column inside the Section 3 **Heritage & Values** split-container on the Home Page.
*   **Data Hydration Contract:** Parses details directly from the localized `memories` array schema inside `HeritageValues.jsx`, mapping 6 core memories:
    1.  *Honeymoons:* Romantic trips.
    2.  *Pilgrimages:* Devotional paths.
    3.  *Houseboats:* Backwater stays.
    4.  *Hill Stations:* Scenic viewports.
    5.  *Premium Fleet:* Chauffeur services.
    6.  *Group Tours:* Family/Corporate packages.

---

## 📐 Component Layout Architecture

### Section 1 — 3D Perspective Wrapper Container
*   **Functional Intent:** Establishes the 3D depth space coordinate mapping.
*   **CSS Perspective Configuration:**
    *   `perspective: 1000px;` combined with `perspective-origin: 50% 50%` to generate realistic depth perspective.
    *   `transform-style: preserve-3d;` applied on the rotating container to propagate the coordinate geometry to child elements.

### Section 2 — 3D Rotating Orbit (The Cylinder)
*   **Functional Intent:** Hosts the cards and performs continuous rotation.
*   **Geometry Math Formulation:**
    *   Total Cards ($N$): 6 cards.
    *   Rotation Angle Increment ($\Delta \theta$): $60^\circ$ ($i \times 60^\circ$).
    *   Translation Radius ($Z$): $150\text{px}$ outward translation along the Z-axis.
    *   Card Dimensions: Width: `150px`, Height: `210px`.
*   **Animation Protocols:**
    *   *Continuous Loop:* `hv-rotate-cylinder 28s linear infinite` spinning counter-clockwise.
    *   *Pause-on-Hover:* Desktop hover states pause the rotation (`animation-play-state: paused`) so users can inspect individual cards.

### Section 3 — Travel Memory Card Items
*   **Functional Intent:** Render high-resolution images, tag overlays, and scale animations.
*   **Visual Styling Elements:**
    *   `border: 1px solid rgba(223, 169, 49, 0.45)` gold tints.
    *   `box-shadow: 0 10px 25px rgba(8, 37, 22, 0.18)` soft card shadows.
    *   `border-radius: 12px` rounded margins.
    *   *Linear Gradient Overlay:* Dark contrast layer (`linear-gradient(180deg, transparent 40%, rgba(8, 37, 22, 0.85) 100%)`) protecting tag readability.
    *   *Zoom Hover:* Hovering card elements scale images up smoothly (`transform: scale(1.1)`) over a `0.6s` bezier curve.

---

## 📱 Mobile Architecture & Responsive Scaling
To fit the 3D rotating cylinder on smaller device resolutions without causing layout overflow, the container utilizes CSS transform scales:
1.  **Tablet Viewports (< 920px):** Cylinder is centered and grid adapts to a single vertical column structure.
2.  **Mobile Viewports (< 767px):** Container scales down to `82%` (`transform: scale(0.82)`) and container height reduces to `240px`.
3.  **Micro-Mobile Viewports (< 480px):** Container scales down to `68%` (`transform: scale(0.68)`) and container height reduces to `200px`.

---

## 🎨 Animation Protocols & Visual Constraints
*   **Visual Direction System:** Modern, premium, highly dynamic, and travel-focused.
*   **Allowed Motion Tokens:** Staggered fade-up entrances for card items during page scrolls via Framer Motion, slow infinite 3D rotations, and hover-triggered image scaling.
*   **Forbidden Actions:** High-speed rotations, bounce effects, or abrupt rotation transitions that degrade scrolling performance.

---

## 🏁 Quality Control Success Rubric
The component setup is verified as production-ready when meeting these metrics:
- [ ] **3D Space Preserved:** Cards maintain realistic depth distortion on rotation with zero clipping.
- [ ] **Viewport Fit:** Cylinder fits perfectly on small screens down to 320px width without layout shifts.
- [ ] **Zero Overlap:** Card width and Z-axis translation are mathematically matched to avoid cards colliding.
- [ ] **Interactive Pause:** Hovering over the cylinder halts rotation immediately, and hover zooms function correctly.
