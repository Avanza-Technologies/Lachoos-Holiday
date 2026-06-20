# Lachoos Holidays — Fleet Schema Specification

## 💎 Specification Overview & Strategic System Contracts
*   **Document Reference:** Fleet Schema Specification [cite: 17]
*   **Version Code:** 2.0 (Refactored for Programmatic Canonical Routing & Pricing Transparency)
*   **Development Priority:** High [cite: 2]
*   **Implementation Lifecycle State:** Planned / Architecture Phase [cite: 12]

This specification establishes the strict, declarative data schema contract for all transportation assets and transit vehicle data managed within the Lachoos Holidays platform [cite: 17]. To eliminate downstream technical debt and support seamless scalability, all presentation components and enquiry modules parse data parameters from this unified schema [cite: 17]. 

```text
   DATA MODEL CONTRACT ──> INLINE PRESENTATION GRID ──> RATE TRANSPARENCY ROW ──> WHATSAPP LINK
   (Universal JSON Node)     (Fleet Service Cards)       (Upfront Price Metrics)     (URI Lead Engine)
```

By decoupling the data layer from visual view states, this schema remains completely identical across current static arrays and upcoming full-stack database middleware migrations [cite: 10, 17].

---

## ⚡ Core Architecture Shift: Routing State Integration (v2)
> **CRITICAL REFACTORING MANDATE:** To rescue Search Engine Optimization (SEO), ensure lightweight page bundles, and eliminate layout fragmentation on mobile screens, **all historical references requiring floating Vehicle Details Modals are completely deprecated** [cite: 1, 2, 17]. 
> 
> Technical specifications, recommended use cases, and vehicle features no longer bind to transient component popup states [cite: 2, 10, 17]. Instead, they compile natively directly onto the standalone fluid fleet page (`/fleet`) or utilize layout-stable nested tabs [cite: 2]. The `slug` parameter is structurally reserved to generate independent, crawlable page routes managed natively by React Router (e.g., `/fleet/[slug]`) during later development targets [cite: 7, 12, 17].

---

## 🧱 Master Vehicle Object Template Schema

Every individual transportation entry declared within the fleet data directory must conform exactly to this JavaScript object dictionary layout [cite: 10, 17]:

```json
{
  "id": "innova-crysta",
  "slug": "toyota-innova-crysta",
  "category": "SUV",
  "name": "Toyota Innova Crysta",
  "capacity": 7,
  "baseRate": "₹18 / km",
  "coverImage": "/images/fleet/innova-crysta.jpg",
  "gallery": [],
  "shortDescription": "Premium SUV suitable for families and long-distance travel.",
  "features": [
    "Air Conditioned",
    "Comfortable Seating",
    "Large Luggage Space"
  ],
  "recommendedFor": [
    "Family Tours",
    "Pilgrimage Travel",
    "Airport Transfers"
  ],
  "featured": true,
  "active": true
}
```

---

## 🔍 Structural Field Definitions [cite: 17]

### 1. `id`
*   **Purpose:** Immutable application-level unique vehicle identifier [cite: 17].
*   **Operational Validation Rules:** Must be strictly unique across the global index data tree [cite: 17].
*   *Acceptable Layout Examples:* `"dzire"`, `"etios"`, `"ertiga"`, `"innova"`, `"innova-crysta"`, `"traveller-12"`, `"traveller-17"`, `"traveller-26"` [cite: 17].

### 2. `slug`
*   **Purpose:** URL-safe canonical string identifier for future web paths [cite: 17].
*   *Acceptable Layout Examples:* `"toyota-innova-crysta"`, `"maruti-dzire"`, `"force-traveller-17"` [cite: 17].

### 3. `category`
*   **Purpose:** Vehicle classification taxonomy matching [cite: 17].
*   **Supported Value Tokens:** `Sedan`, `SUV`, `Traveller` [cite: 17].
*   *Reserved Backlog Categories:* `Luxury`, `Bus`, `Premium Coach` [cite: 17].

### 4. `name`
*   **Purpose:** Standard user-facing display title [cite: 17].
*   *Acceptable Layout Example:* `"Toyota Innova Crysta"` [cite: 17].

### 5. `capacity`
*   **Purpose:** Maximum passenger capacity count [cite: 17].
*   **Operational Validation Rules:** Must be stored as an integer numeric value [cite: 17].
*   *Acceptable Layout Examples:* `4`, `7`, `12`, `17`, `26` [cite: 17].

### 6. `baseRate`
*   **Purpose:** Mandatory rate metric token added to prevent premature funnel drop-offs [cite: 2].
*   *Acceptable Layout Examples:* `"₹18 / km"` or `"₹3,500 / Day (inclusive of driver allowances)"` [cite: 2].

### 7. `coverImage`
*   **Purpose:** Primary vehicle layout image vector [cite: 17].
*   **Application View Placements:** Populates fleet index listing cards, landing page featured sections, and deep vehicle layouts [cite: 11, 17].

### 8. `gallery`
*   **Purpose:** Additional interior cabin and asset visual imagery arrays [cite: 17].
*   **Data Structure:** Array of relative visual public directory paths [cite: 17].
*   *Acceptable Layout Example:* `["/images/fleet/innova1.jpg", "/images/fleet/innova2.jpg"]` [cite: 17].
*   **Scope:** Optional for current builds; recommended for version 1.4 extensions [cite: 17].

### 9. `shortDescription`
*   **Purpose:** Compressed summary text narrative [cite: 17].
*   *Example Layout Text:* "Comfortable SUV ideal for family tours and pilgrimage travel." [cite: 17]

### 10. `features`
*   **Purpose:** Array of vehicle amenities displayed to the traveler [cite: 17].
*   *Acceptable Layout Example:* `["Air Conditioned", "Comfortable Seating", "Large Luggage Space"]` [cite: 17].

### 11. `recommendedFor`
*   **Purpose:** Helping users map vehicles to their specific logistical needs [cite: 17].
*   *Acceptable Layout Example:* `["Family Tours", "Pilgrimage Travel", "Airport Transfers"]` [cite: 17].

### 12. `featured`
*   **Purpose:** Boolean parameter used for targeted landing page and home promotions [cite: 17].
*   **Operational Behavior:** If evaluated as `true`, the vehicle object is programmatically pulled into the home fleet highlights row and marketing campaigns [cite: 11, 17]. If `false`, it is suppressed from featured layout areas [cite: 17].

### 13. `active`
*   **Purpose:** Boolean availability control toggle [cite: 17].
*   **Operational Behavior:** If evaluated as `false`, the vehicle node is hidden from frontend components, allowing for clean database management of out-of-service or unavailable models [cite: 17].

---

## 📂 Fleet Vehicle Tiers & Operational Distribution [cite: 17]

The universal transit contracts partition data sets into explicit segments to address specific group sizes and comfort profiles [cite: 2, 17]:

### 👥 Segment Array Capacity Models [cite: 17]

#### 1. Sedan [cite: 17]
*   *Operational Purpose:* Affordable and comfortable transportation for small groups and couples [cite: 17].
*   *Ideal Use Cases:* Couples, small family configurations, airport transfers [cite: 17].
*   *Data Node Examples:* Swift Dzire, Toyota Etios (Max Capacity: **4 Passengers**) [cite: 17].

#### 2. SUV [cite: 17]
*   *Operational Purpose:* Comfortable and premium travel for family groups and long-distance circuits [cite: 17].
*   *Ideal Use Cases:* Families, localized pilgrimage groups, long tours [cite: 17].
*   *Data Node Examples:* Ertiga, Toyota Innova, premium Toyota Innova Crysta (Max Capacity: **6–7 Passengers**) [cite: 17].

#### 3. Traveller [cite: 17]
*   *Operational Purpose:* High-occupancy group transportation [cite: 17].
*   *Ideal Use Cases:* Pilgrimage circuits, college study tours, corporate retreats, large family networks [cite: 17].
*   *Data Node Examples:* 12 Seater Traveller, 17 Seater Traveller, 26 Seater Traveller (Max Capacity: **12–26 Passengers**) [cite: 17].

---

## 📐 Fleet Presentation Component Grid Specifications [cite: 17]

On the standalone `/fleet` interface layout page, every vehicle entry maps dynamic properties to a uniform, clean, and hardware-accelerated component block [cite: 2, 8, 17]:

### 📋 Fleet Card Rendering Requirements [cite: 17]
*   **Card Contents Matrix:** Vehicle Image, Vehicle Name, Seating Capacity metadata tag, Short Description text, base pricing transparency row, and a primary interactive action conversion button [cite: 2, 17].
*   *Card Context Example:*
    *   **Title Header:** Toyota Innova Crysta [cite: 17]
    *   **Capacity Indicator:** 7 Passengers [cite: 17]
    *   **Price Guide Tag:** Starting from ₹18 / Kilometre [cite: 2]
    *   **Description Hook:** Premium SUV suitable for long-distance travel [cite: 17].
    *   **Primary CTA Button:** `[ Book Vehicle Model ]` [cite: 2, 17]

---

## 🔗 Outbound WhatsApp Inquiry Logic & Templates [cite: 17]

Every vehicle asset entry must support dynamic query formatting [cite: 17]. Clicking a primary fleet conversion button programmatically extracts required fields (**name, category, capacity**) and compiles a sanitized, URI-encoded text string launched inside a new tab [cite: 17].

```text
Hello Lachoos Holidays,
I would like to request availability and pricing details regarding the following vehicle:
- Selected Vehicle Model: {{name}} [cite: 17]
- Vehicle Classification: {{category}} [cite: 17]
- Max Cabin Capacity: {{capacity}} Passengers [cite: 17]
- Source Reference Link: [Programmatically Injected window.location.href URL]

Please share pricing frameworks and availability details.
Thank You. [cite: 17]
```

---

## 🔮 Future Database Key Extensions [cite: 17]
When migrating from static local schemas to full relational SQL backend databases or centralized fleet management systems, developers can cleanly expand the data model via these reserved optional keys [cite: 10, 17]:

```json
{
  "dailyRate": 0,
  "driverIncluded": true,
  "fuelIncluded": false,
  "availability": true,
  "rating": 4.8
}
```

---

## 🏁 Quality Control Architecture Validation [cite: 17]
Every automotive entry updated within the project repository must satisfy these configuration boundaries before passing build checks [cite: 17]:

### Mandatory Keys Checklist [cite: 17]
- [ ] `id` [cite: 17]
- [ ] `category` [cite: 17]
- [ ] `name` [cite: 17]
- [ ] `capacity` [cite: 17]
- [ ] `coverImage` [cite: 17]
- [ ] `shortDescription` [cite: 17]

### Optional Keys Arrays [cite: 17]
- [ ] `gallery` [cite: 17]
- [ ] `features` [cite: 17]
- [ ] `recommendedFor` [cite: 17]

This schema configuration acts as the platform's immutable data standard across static structures, APIs, and administrative fleet systems [cite: 17]. Any future transit expansion must extend this core schema instead of replacing it to ensure long-term, low-maintenance platform growth [cite: 17].