# Lachoos Holidays — Package Schema Specification

## 💎 Specification Overview & Strategic System Contracts
*   **Document Reference:** Package Schema Specification [cite: 17]
*   **Version Code:** 2.0 (Refactored for Programmatic Routing Context)
*   **Development Priority:** Critical [cite: 10, 12, 13]
*   **Implementation Lifecycle State:** Planned / Architecture Phase [cite: 12]

This specification establishes the strict, declarative data schema contract for all travel itineraries within the Lachoos Holidays ecosystem [cite: 17]. To eliminate downstream technical debt and support seamless scaling, all presentation components parse data points from this unified schema [cite: 17]. 

```text
   DATA MODEL CONTRACT ──> INLINE INTERFACE GRID ──> PARAMETER DEEP ROUTE ──> WHATSAPP LINK
   (Universal JSON Node)    (Package Index Cards)    (/packages/:cat/:slug)     (URI Lead Engine)
```

By decoupling the data layer from visual view states, this schema remains completely identical across current static arrays and upcoming full-stack database middleware migrations [cite: 10, 17].

---

## ⚡ Core Architecture Shift: Routing State Integration (v2)
> **CRITICAL REFACTORING MANDATE:** To optimize global Search Engine Optimization (SEO), eliminate layout shifts on mobile viewports, and allow direct deep link sharing across chat platforms, **all modal popup overlay references originally mapped to this schema are completely deprecated** [cite: 12, 13]. 
> 
> Visual cards and detailed itinerary components no longer bind to transient pop-up states [cite: 10, 17]. Instead, the `slug` property is structurally used to compile independent, crawlable page routes managed natively by React Router [cite: 7, 12].

---

## 🧱 Master Package Object Template Schema

Every individual itinerary entry declared within the data directory must conform exactly to this JavaScript object dictionary layout [cite: 10, 17]:

```json
{
  "id": "honeymoon-001",
  "slug": "munnar-romantic-escape",
  "category": "honeymoon",
  "name": "Munnar Romantic Escape",
  "shortDescription": "Romantic getaway in Kerala's most beautiful hill station.",
  "duration": "3 Days / 2 Nights",
  "startingPrice": 12999,
  "coverImage": "/images/packages/munnar-romantic.jpg",
  "gallery": [],
  "destinations": [],
  "highlights": [],
  "inclusions": [],
  "exclusions": [],
  "featured": true,
  "active": true
}
```

---

## 🔍 Structural Field Definitions

### 1. `id`
*   **Purpose:** Immutable application-level unique package identifier [cite: 17].
*   **Operational Validation Rules:** Must be strictly unique across the global index data tree and must never shift after initial assignment [cite: 17].
*   *Acceptable Layout Examples:* `"honeymoon-001"`, `"family-001"`, `"pilgrimage-001"` [cite: 17].

### 2. `slug`
*   **Purpose:** URL-safe canonical string identifier [cite: 17].
*   **Architectural Target Use Case:** Directly generates independent indexable endpoint browser addresses (e.g., `/packages/honeymoon/munnar-romantic-escape`) [cite: 12, 17].
*   *Acceptable Layout Examples:* `"munnar-romantic-escape"`, `"kerala-family-tour"`, `"sabarimala-darshan-package"` [cite: 17].

### 3. `category`
*   **Purpose:** Structural taxonomy categorization and route parameter matching [cite: 10, 17].
*   **Supported Value Tokens:** `honeymoon`, `family`, `pilgrimage`, `summer`, `adventure`, `group` [cite: 17].
*   *Reserved Backlog Categories:* `luxury`, `international`, `corporate` [cite: 17].

### 4. `name`
*   **Purpose:** Standard user-facing display title [cite: 17].
*   *Acceptable Layout Example:* `"Munnar Romantic Escape"` [cite: 17].

### 5. `shortDescription`
*   **Purpose:** Compressed summary text narrative [cite: 17].
*   **Application View Placements:** Parsed into grid index listing cards, targeted search cards, and promotional home blocks [cite: 11, 17].
*   **Constraint Threshold:** Restrict string layout boundaries strictly to **50–120 characters** to preserve layout symmetry [cite: 17].

### 6. `duration`
*   **Purpose:** Explicit display metric tracking the length of the itinerary [cite: 17].
*   *Acceptable Layout Examples:* `"2 Days / 1 Night"`, `"3 Days / 2 Nights"`, `"5 Days / 4 Nights"`, `"7 Days / 6 Nights"` [cite: 17].

### 7. `startingPrice`
*   **Purpose:** Base entry cost indicator [cite: 17].
*   **Operational Validation Rules:** Must be stored strictly as an integer numeric value [cite: 17]. **Never include currency characters (`₹`) inside the data model** [cite: 17]. Currency injection, spacing, and decimal placements must be managed on the UI presentation layer [cite: 17].
*   *Acceptable Layout Example:* `12999` [cite: 17].

### 8. `coverImage`
*   **Purpose:** Primary background visual asset mapping [cite: 17].
*   **Application View Placements:** Populates category showcase banners, landing page featured carousels, and search index results cards [cite: 11, 17].

### 9. `gallery`
*   **Purpose:** Supplementary destination and experiential imagery arrays [cite: 17].
*   **Data Structure:** Array of relative visual public directory strings [cite: 17].
*   *Acceptable Layout Example:* `["/images/gallery/image1.jpg", "/images/gallery/image2.jpg"]` [cite: 17].
*   **Platform Lifecycle Scope:** Optional for current builds; recommended for version 1.4 extensions [cite: 17].

### 10. `destinations`
*   **Purpose:** List of core geographical regions traversed in the package itinerary [cite: 17].
*   **Data Structure:** Array of text strings parsed dynamically into localized UI target tags [cite: 2, 17].
*   *Acceptable Layout Example:* `["Munnar", "Alleppey"]` [cite: 17].

### 11. `highlights`
*   **Purpose:** High-impact unique attractions listed as user-facing focus points [cite: 17].
*   **Data Structure:** Array of human-readable text labels [cite: 17].
*   *Acceptable Layout Example:* `["Tea Garden Visit", "Houseboat Stay", "Sunrise Viewpoint"]` [cite: 17].

### 12. `inclusions`
*   **Purpose:** Clear, un-fragmented checklist of covered deliverables to build transactional trust [cite: 2, 17].
*   **Data Structure:** Array of checklist text strings mapped into detailed grid rows [cite: 2, 17].
*   *Acceptable Layout Example:* `["Hotel Accommodation", "Breakfast", "Sightseeing", "Transportation"]` [cite: 17].

### 13. `exclusions`
*   **Purpose:** Explicitly outlines non-covered components to protect transparency and eliminate user misunderstandings [cite: 2, 17].
*   **Data Structure:** Array of text strings compiled alongside inclusions [cite: 2, 17].
*   *Acceptable Layout Example:* `["Flight Tickets", "Personal Expenses", "Entry Fees"]` [cite: 17].

### 14. `featured`
*   **Purpose:** Boolean parameter used for targeted landing page promotions [cite: 17].
*   **Operational Behavior:** If evaluated as `true`, the object is programmatically pulled into home marketing blocks and seasonal banner rows [cite: 6, 17].

### 15. `active`
*   **Purpose:** Boolean toggle for operational visibility control [cite: 17].
*   **Operational Behavior:** If evaluated as `false`, the system completely suppresses the endpoint layout [cite: 17]. This provides clean control over expired deals, off-season itineraries, or temporary package removals [cite: 17].

---

## 📂 Experience Verticals & Data Layout Slices

The universal category contracts partition data sets into explicit segments to address specific traveler intents [cite: 12]:

### 👥 Segment Array Distribution Models [cite: 17]

#### Honeymoon Packages [cite: 17]
*   *Target Group:* Couples looking for romantic getaways [cite: 17].
*   *Data Node Examples:* Munnar Romantic Escape, Alleppey Houseboat Honeymoon, Kerala Premium Honeymoon [cite: 17].

#### Family Vacation Packages [cite: 17]
*   *Target Group:* Multi-generational family units [cite: 17].
*   *Data Node Examples:* Kerala Highlights, Family Adventure Tour [cite: 17].

#### Pilgrimage Packages [cite: 17]
*   *Target Group:* Spiritual pilgrims requiring local logistics [cite: 2, 17].
*   *Data Node Examples:* Sabarimala Darshan, Temple Circuit Tour [cite: 17].

#### Summer Vacation Packages [cite: 17]
*   *Target Group:* General seasonal vacation travelers [cite: 17].
*   *Data Node Examples:* Munnar Summer Escape, Wayanad Nature Tour [cite: 17].

#### Adventure Packages [cite: 17]
*   *Target Group:* Young travelers seeking active trekking trails [cite: 17].
*   *Data Node Examples:* Vagamon Adventure, Wayanad Trekking [cite: 17].

#### Group Tours [cite: 17]
*   *Target Group:* Friends, corporate retreat teams, and institutional groups [cite: 17].
*   *Data Node Examples:* College Tour, Corporate Retreat [cite: 17].

---

## 💵 Pricing Transparency Rules
*   **Current Specification Scope:** Interface views must restrict pricing indicators strictly to base entry targets using the design pattern format: `"Starting From ₹12,999"` [cite: 2, 17].
*   **Justification:** Live operational package cost points fluctuate depending on winter peak seasons, room occupancy limits, vehicle choice classes, and hotel accommodations selected by the client [cite: 2, 17].

---

## 🔗 Outbound WhatsApp Content Engineering Sync
Every package data file node must cleanly map variables into the serialization engine to format outbound messages [cite: 2, 17].

```text
Hello Lachoos Holidays,
I am highly interested in the following travel itinerary package:
- Itinerary Package: {{name}} [cite: 17]
- Experience Category: {{category}} [cite: 17]
- Duration Track: {{duration}} [cite: 17]
- Base Price Guide: Starting From ₹{{startingPrice}} [cite: 17]
- Source Link Reference: [Programmatically Injected window.location.href URL]

Please verify active vehicle availability and share full details.
Thank You. [cite: 17]
```

---

## 🔮 Future Database Key Extensions
When migrating from static Javascript parameters to full relational SQL or NoSQL database clusters, developers can cleanly expand the model via these reserved optional keys without altering existing view files [cite: 10, 17]:

```json
{
  "rating": 4.8,
  "reviewsCount": 125,
  "availability": true,
  "discount": 10,
  "season": "Summer",
  "packageType": "Premium"
}
```

---

## 🏁 Quality Control Architecture Validation
Every package item added to the repository must satisfy these mandatory properties to pass compilation builds [cite: 17]:

### Mandatory Keys Checklist [cite: 17]
- [ ] `id`
- [ ] `category`
- [ ] `name`
- [ ] `shortDescription`
- [ ] `duration`
- [ ] `startingPrice`
- [ ] `coverImage`

### Optional Keys Arrays [cite: 17]
- [ ] `gallery`
- [ ] `highlights`
- [ ] `inclusions`
- [ ] `exclusions`

This schema configuration acts as the platform's immutable data standard across static structures, APIs, and administrative dashboards [cite: 17]. Any future package expansion must extend this core schema instead of replacing it to ensure long-term, low-maintenance platform growth [cite: 17].