# Lachoos Holidays — System State Management & Data Schema Contract

## 🧠 State Management Philosophy
The platform operates as a **Frontend-Only Application** powered by structured **Static Data Files** [cite: 10]. However, to eliminate future development technical debt, the data layer is decoupled from visual component logic [cite: 10]. This guarantees that local static files can be seamlessly swapped out for external **REST API middleware fetches** linked to a live database without rewriting frontend view components [cite: 10].

```text
  ┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
  │     DATA LAYER       │      │   VIEW COMPONENTS    │      │    USER INTERFACE    │
  ├──────────────────────┤      ├──────────────────────┤      ├──────────────────────┤
  │ Isolated Data Files  │ ───> │ Dynamic UI Elements  │ ───> │ Indexable Canonical  │
  │ (/src/data/*)        │      │ (Independent of Src) │      │ Web Layout Render     │
  └──────────────────────┘      └──────────────────────┘      └──────────────────────┘
```

---

## ⚡ Core Architecture Shift: Routing State Integration (v2)
> **CRITICAL REFACTORING MANDATE:** To optimize search engine crawling, fix mobile viewport breaking, and resolve deep link sharing, **all component-based pop-up modal states from the original blueprint are completely deprecated** [cite: 1, 10]. 
> 
> Transient component state tracking variables (`isPackageModalOpen`, `isDetailsModalOpen`, `isFleetModalOpen`) have been discarded [cite: 10]. They are replaced by **URL Parametric Route States** via React Router [cite: 7, 10]. The active app state is determined naturally by the browser's link parameters, rendering dedicated standalone subpages natively [cite: 10].

---

## 📂 Target Project Directory Tree
All localized static configuration modules must match this strict directory mapping exactly [cite: 10]:
```text
src/
└── data/
    ├── packages/
    │   ├── honeymoon.js    # Honeymoon Packages Index Array
    │   ├── family.js       # Family Packages Index Array
    │   ├── pilgrimage.js   # Generic Spiritual Packages Index Array
    │   ├── summer.js       # Seasonal Escape Packages Index Array
    │   ├── adventure.js    # Multi-Terrain Trekking Packages Index Array
    │   └── groupTours.js   # Corporate & Institutional Packages Index Array
    ├── fleet/
    │   └── vehicles.js     # Transit Fleet Capacity & Pricing Array
    ├── destinations/
    │   └── destinations.js # Localized Tourist Hotspot Metadata Array
    └── testimonials/
        └── testimonials.js # Customer Verification Feedback Cache Array
```

---

## 🧱 Declarative Object Schemas & Contracts

### 1. Unified Package Object Interface
Every individual travel itinerary item inserted within `/src/data/packages/` must structurally conform to this dictionary contract [cite: 10]. Missing keys will break the automated routing build compilation [cite: 10].

```json
{
  "id": "string (Unique URL-safe canonical slug, e.g., 'honeymoon-001')",
  "category": "string (honeymoon | family | pilgrimage | summer | adventure | group)",
  "name": "string (Display title shown natively to visitors)",
  "duration": "string (Explicit timeline string, e.g., '3 Days / 2 Nights')",
  "price": "number (Integer baseline package value, e.g., 12999)",
  "coverImage": "string (Relative web asset public folder path)",
  "destinations": ["array of strings tracking included locations"],
  "highlights": ["array of strings tracking premium visual attractions"],
  "inclusions": ["array of strings listing standard services covered"],
  "exclusions": ["array of strings listing explicit non-covered fields"],
  "description": "string (Rich text summary narrative block)",
  "featured": "boolean (true = displays on homepage terminal; false = structural hide)"
}
```

### 2. Destination Object Interface
Tracks individual travel highlight spots for the destination directory block [cite: 10].
```json
{
  "id": "string (Unique landmark lookup identifier, e.g., 'munnar')",
  "name": "string (Geographic display label)",
  "image": "string (Relative layout vector public file path)",
  "description": "string (Short regional discovery overview text)",
  "highlights": ["array of strings mapping iconic attractions"],
  "featured": "boolean (Controls homepage discovery component visibility)"
}
```

### 3. Fleet Transit Object Interface
Maintains transport asset fields, adding pricing metrics to prevent premature user drop-offs [cite: 10].
```json
{
  "id": "string (Unique car node lookup handle, e.g., 'innova-crysta')",
  "category": "string (SUV | Sedan | Traveller)",
  "name": "string (Exact manufacturer car model label)",
  "capacity": "number (Integer tracking exact seat allocations)",
  "image": "string (Relative asset path mapping vehicle outline)",
  "features": ["array of strings tracking accessories, e.g., 'Air Conditioned'"],
  "baseRate": "string (Transparent rate identifier, e.g., '₹18 / km' or '₹3,500 / Day')",
  "featured": "boolean (Controls home matrix visibility parameters)"
}
```

### 4. Testimonial Feedback Object Interface
Manages localized customer reviews for social proof deck verification cards [cite: 10].
```json
{
  "id": "string (Unique evaluation marker key)",
  "name": "string (Client display name baseline)",
  "location": "string (Origin / Regional context indicator)",
  "review": "string (Verbatim text testimonial statement copy)",
  "rating": "number (Integer restricted from 1 to 5 mapping star elements)"
}
```

---

## 🔗 Asynchronous WhatsApp Message Encoding Engine
The entire inquiry flow depends on this text generation engine [cite: 10]. Upon user initialization, the component parses raw object attributes and injects the live route parameters directly into alphanumeric, URI-safe query strings [cite: 10].

### Template Parameter Enforcements:

#### Itinerary Package Request Template [cite: 10]
```text
Hello Lachoos Holidays,
I am highly interested in the following travel itinerary package:
- Package Name: {{name}}
- Duration Track: {{duration}}
- Experience Category: {{category}}
- Canonical Source Link: [Programmatically injected window.location.href URL]

Please share customized booking price quotes and vehicle availability details.
Thank You.
```

#### Fleet Rental Request Template [cite: 10]
```text
Hello Lachoos Holidays,
I would like to check availability for the following transit vehicle:
- Selected Fleet Model: {{name}}
- Cabin Passenger Capacity: {{capacity}} Passengers Max
- Base Billing Metric Ref: {{baseRate}}

Please contact me to finalize pickup schedules and driver allocations.
Thank You.
```

#### Specialized Sabarimala Request Template [cite: 10]
```text
Hello Lachoos Holidays,
I am interested in your dedicated Sabarimala pilgrimage services.
Please provide scheduling details regarding regional family packages, specialized transport allocations, and local accommodation support options.
Thank You.
```

#### Direct Contact General Request Template [cite: 10]
```text
Hello Lachoos Holidays,
I would like to know more about your comprehensive travel packages and transit options across Kerala. Please connect with me at your earliest convenience.
Thank You.
```

---

## 🚫 State Constraints & Dependency Avoidance
*   **Global Libraries Prohibited:** To optimize load speeds and minimize project bundle size, the integration of heavy external state managers is strictly forbidden [cite: 10]. Do **NOT** install Redux, MobX, or Zustand [cite: 10]. The current platform scale relies perfectly on standard local component states and React Router parameters [cite: 7, 10].
*   **Data Isolation Enforcements:** Components are prohibited from hardcoding operational values directly inside user views [cite: 10]. Content must flow directly from data modules into the component layers to guarantee future REST API readiness [cite: 10].

---

## 🚧 API Readiness & Future Database Target Mapping
When upgrading the application infrastructure from static local layouts to a full-stack backend server platform, the frontend architectural layers are designed to seamlessly map to these precise schema environments [cite: 10]:

### Target REST API Endpoint Mapping [cite: 10]
*   `GET /api/packages` — Extracts the full collection of package files [cite: 10].
*   `GET /api/packages/:id` — Retains deep-dive parameter matching for independent package IDs [cite: 10].
*   `GET /api/fleet` — Resolves transit array collections natively [cite: 10].
*   `GET /api/destinations` — Fetches geographical target assets [cite: 10].

### Target Database Relational Table Strategy [cite: 10]
1.  **`Packages` Table:** Retains data configurations matching the universal package schema properties [cite: 10].
2.  **`Destinations` Table:** Stores regional landmark overview descriptions [cite: 10].
3.  **`Fleet` Table:** Manages vehicle capacity constraints and base rate tracking parameters [cite: 10].
4.  **`Testimonials` Table:** Houses customer rating rows for social validation components [cite: 10].
5.  **`Enquiries` Table:** Logs outbound data streams capturing parsed customer details [cite: 10].
6.  **`Bookings` Table:** Reserved for transactional reservation state histories down the line [cite: 10].

---

## 🚨 Robust Error Handling Protocols
If static file reads fail, network requests drop, or specific data variables return blank arrays, developers must comply with the following boundaries [cite: 10]:
*   **Visual Guardrail:** Never allow broken structural layouts, empty content boxes, or raw fallback `undefined` keywords to display inside view sections [cite: 10].
*   **Fallback Rendering Mandate:** Use clean component conditional renderings to display a professional state alert notice: *"No information available at the moment."* [cite: 10]