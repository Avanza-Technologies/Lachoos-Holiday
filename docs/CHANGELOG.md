# Lachoos Holidays — Operational Project Changelog

All notable architectural adjustments, version releases, and code structural revisions for the Lachoos Holidays project are indexed chronologically within this file.

## 📐 Versioning Paradigm & Control
The repository enforces a strict Semantic Versioning format: `MAJOR.MINOR.PATCH`
*   **MAJOR:** Structural paradigm changes, baseline framework shifts, or core routing refactors.
*   **MINOR:** Implementation of distinct application modules, data models, or feature pathways.
*   **PATCH:** Micro-adjustments, stylesheet fixes, dependency upgrades, or content modifications.

---

## ⏳ [Unreleased - Active Pipeline Sprints]

### Planned Deliverables (Active Sprints):
*   **Module 8 & 9 Finalization:** Integrating production Google Places reviews API and final telephone routing.

## 🟢 [1.3.0] — Module 10: 3D Travel Memories Cylinder

### 📅 Release Date: June 19, 2026
*   **Platform State Lifecycle:** Active Development Release (Module 10 Integration)
*   **Operational Core Strategy:** Upgrade the right-hand column visual presentation in Heritage & Values section from a static grid to a premium, infinitely rotating 3D Travel Memories Cylinder. This has been formalized as a new independent module (Module 10) with a dedicated specifications document. Removed the mobile swiper fallback in favor of a universal 3D cylinder layout scaled via responsive CSS.

### Added Feature Ledger:
- **Module 10 Specification Document:** Created [docs_modules_10-memories-cylinder.md](file:///c:/Desktop/Netwokzsystems/newBranch/Lachoos-Holiday/docs/docs_modules_10-memories-cylinder.md) detailing 3D perspective architecture, keyframes, geometry calculations, and scaling.
- **Universal 3D Cylinder Orbit:** Refactored [HeritageValues.jsx](file:///c:/Desktop/Netwokzsystems/newBranch/Lachoos-Holiday/src/components/HeritageValues.jsx) to display the 3D rotating cylinder on all screen resolutions and removed the temporary `.hv-mobile-swiper` mobile touch cards.
- **CSS 3D Cylinder Scaling:** Modified [HeritageValues.css](file:///c:/Desktop/Netwokzsystems/newBranch/Lachoos-Holiday/src/components/HeritageValues.css) to add responsive scaling (transform scales at `0.82` and `0.68`) to ensure the 3D cylinder fits perfectly on mobile and tablet screens without horizontal viewport overflow.
- **Linter & Build Compliances:** Verified 100% build compile pass and clean ESLint status.

## 🟢 [1.2.1] — HeritageValues Storytelling Repurposing

### 📅 Release Date: June 19, 2026
*   **Platform State Lifecycle:** Active Development Release (Section 3 Repurposing)
*   **Operational Core Strategy:** Remove duplicated trust items from HeritageValues (consolidated into WhyChoose) and repurpose it into a visual memories scroller.

### Added Feature Ledger:
- **Memories & Moments Gallery (Section 3):** Replaced the right-column list in `HeritageValues.jsx` with a 2x3 grid of responsive travel memory cards showcasing Honeymoons, Pilgrimages, Houseboats, Hill Stations, Fleet Services, and Group Tours.
- **Visual Grid styling:** Added `.hv-gallery-grid`, `.hv-gallery-card`, hover scales (`1.08`), and linear overlays to `HeritageValues.css` for a modern photography feel.
- **Document updates:** Updated homepage modules documentation, changelogs, and module logs.

## 🟢 [1.2.0] — Itinerary Timeline & WhatsApp Lead Engine Serialization

### 📅 Release Date: June 19, 2026
*   **Platform State Lifecycle:** Active Development Release (Modules 04, 05, 06, and 07 Completed)
*   **Operational Core Strategy:** Finalize package details timelines, style itinerary views, and compile specialized/model-specific WhatsApp enquiry messages.

### Added Feature Ledger:

#### 1. Itinerary Timeline Page & Layout (Module 04)
- Implemented visual timeline cards in `PackageDetails.jsx` and styled them in `PackageDetails.css` with vertical line connectors, custom green badges, and responsive touch borders.
- Embedded smooth, staggered fade-in entrance scroll animations to list items for dynamic user experience.

#### 2. WhatsApp Query String Serialization (Module 05)
- Standardized query string compilation inside `src/utils/whatsapp.js` with dynamic environment variables and current canonical location (`window.location.href`) injection.
- Defined specific constructors for Travel Package inquiries, Sabarimala pilgrimage inquiries, and Fleet transits.

#### 3. Sabarimala Specialized Template Integration (Module 06)
- Modified `Sabarimala.jsx` form submit callback to compile and encode the official Specialized Sabarimala Pilgrimage template with user-filled fields (name, travel date, pilgrim count, and custom notes).
- Updated the primary hero CTA in `SabarimalaSection.jsx` to invoke the context-aware WhatsApp link.

#### 4. Fleet Price Transparency & Booking Hooks (Module 07)
- Upgraded vehicle data schema in `Fleet.jsx` to include explicit `category` and `capacity` metadata properties.
- Converted vehicle card "Reserve Now" buttons to direct WhatsApp links compiling the Model-Specific Vehicle template.
- Bound top availability check filters and sidebar quote forms in `Fleet.jsx` to specialized WhatsApp generators (`getFleetAvailabilityWhatsAppLink` and `getFleetQuoteWhatsAppLink`).

## 🟢 [1.1.1] — Homepage Restructuring & Section Enhancements

### 📅 Release Date: June 19, 2026
*   **Platform State Lifecycle:** Active Development Release (Homepage Layout Refactored)
*   **Operational Core Strategy:** Refactor homepage layout sequence and add high-conversion promotional sections.

### Added Feature Ledger:

#### 1. Homepage Layout & Component Reordering
- Reordered home page structure: Hero $\rightarrow$ Quick Service Highlights $\rightarrow$ Heritage & Values $\rightarrow$ Package Categories $\rightarrow$ Featured Packages $\rightarrow$ Why Choose Lachoos Holidays $\rightarrow$ Popular Destinations $\rightarrow$ Signature Experiences $\rightarrow$ Specialized Sabarimala Services $\rightarrow$ Fleet Highlight $\rightarrow$ Testimonials $\rightarrow$ Contact CTA $\rightarrow$ Footer.

#### 2. New Promotional & Trust Sections
- **Quick Service Highlights:** Created `QuickServiceHighlights.jsx` (strip for Kerala Tours, Honeymoons, Sabarimala, Fleet).
- **Why Choose Lachoos Holidays:** Created `WhyChoose.jsx` (defining five key value pillars).
- **Featured Packages:** Created `FeaturedPackages.jsx` rendering 3 selected package cards with direct links and booking triggers.
- **Fleet Highlight:** Created `FleetHighlight.jsx` presenting a compact Sedan & SUV preview with a button directing to `/fleet`.

#### 3. Section Enhancements
- Renamed and expanded Sabarimala highlight to "Specialized Sabarimala Services" in `SabarimalaSection.jsx`.
- Cleaned unused React imports and hooks to ensure zero dev warnings.

---

## 🟢 [1.1.0] — Programmatic Package Discovery & Dynamic Category Routing

### 📅 Release Date: June 19, 2026
*   **Platform State Lifecycle:** Active Development Release (Module 02 & 03 Completed)
*   **Operational Core Strategy:** Standalone dynamic category routing page structures and dynamic WhatsApp compiler.

### Added Feature Ledger:

#### 1. Routing & Global Navigation Updates
- Updated routes in `App.jsx` to map `/packages`, `/packages/:categorySlug`, and `/packages/:categorySlug/:packageId`.
- Added backward compatibility redirect from `/honeymoon` to `/packages/honeymoon`.
- Updated global links in `Navbar.jsx`, `Footer.jsx`, and `MobileBottomNav.jsx` to `/packages/honeymoon`.

#### 2. Package Categories & Catalogue Pages
- Implemented `PackageCategoriesGrid.jsx` to showcase the six core categories (Honeymoon, Family, Pilgrimage, Summer Vacation, Adventure, Group Tours) with dynamic volume badges and hover motion animations.
- Created `Packages.jsx` to serve as a standalone catalog landing page.
- Embedded `PackageCategoriesGrid` on the Home page (Section 5).

#### 3. Category Showcase & Package Details Pages
- Created `CategoryShowcase.jsx` to dynamically load, filter, and render packages matching category parameters.
- Implemented `PackageDetails.jsx` as a detailed split-column itinerary page (Inclusions/Exclusions, highlights, and sidebar with booking CTAs).
- Built empty state fallback controls with general inquiry actions if category length evaluates to zero.

#### 4. WhatsApp Message Engine & Central Config
- Centralized WhatsApp contact configuration in `src/config/whatsapp.js`.
- Implemented dynamic, context-aware query serializer in `src/utils/whatsapp.js` that programmatically captures the current browser location (`window.location.href`) and compiles safe, alphanumeric pre-filled enquiry links.

---

## 🟢 [1.0.0] — Initial Baseline Demonstration Release

### 📅 Release Date: June 19, 2026
*   **Platform State Lifecycle:** Current Validated Baseline Build
*   **Operational Core Strategy:** Non-database digital presentation storefront and lead-capture platform.

### Added Feature Ledger:

#### 1. Core Engineering & Infrastructure
*   React runtime execution framework initialized and compiled through Vite. [cite: 7]
*   Local Git repository and unified GitHub branch workflow established.
*   Modular, component-driven atomic folder directories created (`/components`, `/pages`, `/data`).
*   Global wrapper styling sheets deployed, defining a premium, nature-focused Kerala visual aesthetic (forest greens and sand-tinted earth tokens).

#### 2. Navigation & Shell Layouts
*   Application-wide base routing configuration deployed via React Router. [cite: 7]
*   **Responsive Global Framework:** Deployed sticky header navigation bars, automated mobile drawer panels, fluid footer layouts, a scrolling contextual quick-contact action floating bubble, and a performance-tuned scroll-to-top feature.

#### 3. Module 1: Home Landing Terminal
*   **Hero Showcase Canvas:** Smooth Framer Motion viewport transitions rendering premium high-res travel media assets.
*   **Heritage & Brand Trust Component:** Section detailing physical regional presence in Kerala to build early user confidence.
*   **Niche Destination Grid:** High-impact showcase links providing discoverability across primary regional targets (Munnar, Wayanad, Alleppey, Kochi, Thekkady, Vagamon, Varkala).

#### 4. Module 6: Sabarimala Pilgrimage Terminal Base
*   Dedicated `/sabarimala` landing component architecture compiled. [cite: 7]
*   Promotional informational blocks highlighting targeted pilgrim transit assistance, local layout guidance, and family spiritual routing layouts.

#### 5. Module 7: Fleet Presentation Array Base
*   Responsive grid component mapping vehicles across three core capacity configurations: Sedans, SUVs, and luxury Travellers. [cite: 7]
*   Metadata integration detailing basic layout traits and cabin seat allocations.

#### 6. Support & Feedback Interfaces
*   **Module 8 Testimonials Layer:** Auto-sliding layout looping localized hardcoded user validation arrays.
*   **Module 9 Contact Hub:** Static address detail nodes, interactive telephone protocol action triggers (`tel:`), and a generic lead inquiry form.

### 📐 Architecture State Compliance Checklist:
*   **Database:** ❌ No database layer or state engine integrated (Pure localized static arrays utilized).
*   **Authentication:** ❌ Zero user login portals or cryptographic identity storage.
*   **E-Commerce Platform:** ❌ No automated booking logic or third-party digital payment gateway nodes.

---

## 🔮 Future Product Lifecycle Schedule

### Version 1.1.0 — Static Route Directories
*   Compilation of dynamic category routes (`/packages/:categorySlug`) and package view templates (`/packages/:categorySlug/:packageId`).
*   Integration of localized static index arrays within `/src/data/packages/`.

### Version 1.2.0 — Alphanumeric WhatsApp Serialization
*   Deployment of the global asynchronous query string converter hook to parse route signatures directly into the outbound WhatsApp chat pipeline.

### Version 1.3.0 — Seasonal Sabarimala Overhaul
*   Activation of the automated seasonal hero layout flag, pulling specialized pilgrim itineraries to top structural hierarchy spots during peak winter months.

### Version 1.4.0 — Fleet Transactional Metrics
*   Integration of upfront base pricing thresholds directly onto the vehicle profile presentation grids.

### Version 2.0.0 — Scaled Application Middleware Shift
*   System-wide refactoring replacing static local `.js` files with active API fetch middleware modules reading from an external headless CMS (e.g., Strapi, Sanity) or a centralized SQL database.

---

## ✍️ Contributor Maintenance Protocol
To prevent project tracking drift, every active developer making code changes inside a feature branch must follow these documentation steps:
1.  Complete the component feature branch code changes.
2.  Log all structural adjustments with semantic subheadings directly inside this `CHANGELOG.md` file.
3.  Synchronize completion state data variables within `PROJECT-STATUS.md`.
4.  Re-prioritize and check off next-up tasks inside `ROADMAP.md` if business rules or development paths shift.