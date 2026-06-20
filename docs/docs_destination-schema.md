# Lachoos Holidays — Destination Schema Specification

## 💎 Specification Overview & Strategic System Contracts
*   **Document Reference:** Destination Schema Specification [cite: 17]
*   **Version Code:** 2.0 (Refactored for Programmatic Canonical Routing)
*   **Development Priority:** High [cite: 2, 11]
*   **Implementation Lifecycle State:** Planned / Architecture Phase [cite: 12]

This specification defines the strict, declarative data schema contract for all geographic destinations managed within the Lachoos Holidays platform [cite: 17]. To protect codebase scalability and ensure smooth maintainability, destination datasets are architected to exist completely independently of package datasets [cite: 17]. 

```text
   DESTINATION CONTRACT ──> INLINE INTERFACE GRID ──> RELATED PACKAGE HOOKS ──> SEO TARGET PAGE
   (Independent JSON Node)   (Homepage Discovery Cards)  (Dynamic Cross-References)   (/destinations/:slug)
```

Travel packages programmatically reference these unique destination identifiers rather than duplicating content, ensuring a clean architecture as the website expands into an API-driven system [cite: 10, 17].

---

## ⚡ Core Architecture Shift: Routing State Integration (v2)
> **CRITICAL REFACTORING MANDATE:** To achieve structural alignment with modern Search Engine Optimization (SEO) criteria, ensure fast page loading, and fix mobile viewport formatting, **all navigation properties mapping to popups are completely deprecated** [cite: 1, 12]. 
> 
> Discover and explore buttons located on destination cards no longer trigger floating component modals [cite: 8, 17]. Instead, the `slug` property is structurally reserved to generate independent, crawlable page routes managed natively by React Router (e.g., `/destinations/[slug]`) during later development stages [cite: 7, 12, 17].

---

## 🧱 Master Destination Object Template Schema

Every individual destination entry declared within the data directory must conform exactly to this JavaScript object dictionary layout [cite: 10, 17]:

```json
{
  "id": "munnar",
  "slug": "munnar",
  "name": "Munnar",
  "state": "Kerala",
  "coverImage": "/images/destinations/munnar.jpg",
  "gallery": [],
  "shortDescription": "Kerala's most famous hill station known for tea plantations and cool climate.",
  "highlights": [],
  "bestTimeToVisit": "October to May",
  "featured": true,
  "active": true
}
```

---

## 🔍 Structural Field Definitions [cite: 17]

### 1. `id`
*   **Purpose:** Unique destination lookup identifier [cite: 17].
*   **Operational Validation Rules:** Must be strictly unique and lowercase [cite: 17].
*   *Acceptable Layout Examples:* `"munnar"`, `"wayanad"`, `"alleppey"`, `"thekkady"` [cite: 17].

### 2. `slug`
*   **Purpose:** URL-safe canonical string identifier for future web paths [cite: 17].
*   *Acceptable Layout Examples:* `"munnar"`, `"wayanad"`, `"alappuzha"`, `"varkala"` [cite: 17].

### 3. `name`
*   **Purpose:** User-facing display title [cite: 17].
*   *Acceptable Layout Example:* `"Munnar"` [cite: 17].

### 4. `state`
*   **Purpose:** Regional location grouping [cite: 17].
*   *Current Framework Scope:* Restricted mainly to `"Kerala"` [cite: 17].
*   *Future Framework Scope:* Built to cleanly scale across `"Tamil Nadu"`, `"Karnataka"`, and `"Andhra Pradesh"` [cite: 17].

### 5. `coverImage`
*   **Purpose:** Primary background visual asset mapping [cite: 17].
*   **Application View Placements:** Populates Homepage cards, Category showcase banners, and destination grid components [cite: 11, 17].

### 6. `gallery`
*   **Purpose:** Supplementary regional and attraction imagery arrays [cite: 17].
*   **Data Structure:** Array of relative image paths (e.g., `["/images/destinations/munnar-1.jpg", "/images/destinations/munnar-2.jpg"]`) [cite: 17].
*   **Scope:** Optional for current builds; recommended for future destination subpage expansion [cite: 17].

### 7. `shortDescription`
*   **Purpose:** Brief destination summary text narrative [cite: 17].
*   **Constraint Threshold:** Restrict string layout boundaries strictly to **80–150 characters** to preserve visual symmetry across component cards [cite: 17].
*   *Example Layout Text:* "Munnar is a picturesque hill station famous for tea plantations, mist-covered mountains, waterfalls, and pleasant weather." [cite: 17]

### 8. `highlights`
*   **Purpose:** Array of major localized attractions [cite: 17].
*   *Acceptable Layout Example:* `["Tea Plantations", "Mattupetty Dam", "Echo Point", "Top Station"]` [cite: 17].

### 9. `bestTimeToVisit`
*   **Purpose:** Travel planning guidance and season data modeling [cite: 17].
*   *Acceptable Layout Examples:* `"October to May"`, `"June to September"`, `"Year Round"` [cite: 17].

### 10. `featured`
*   **Purpose:** Boolean parameter controlling landing page component inclusion [cite: 17].
*   **Operational Behavior:** If evaluated as `true`, the object programmatically builds cards on the main Homepage discovery section [cite: 11, 17].

### 11. `active`
*   **Purpose:** Boolean toggle for visibility control [cite: 17].
*   **Operational Behavior:** If evaluated as `false`, the destination is completely hidden from the user interface, allowing for clean database management of seasonal options or temporary removals [cite: 17].

---

## 🏔️ Core Featured Destinations Dataset [cite: 17]

To establish a premium, high-conversion presence for Kerala Tourism, the dataset initializes with these six primary, highly popular locations [cite: 11, 17]:

### 👥 Geographic Data Profiles [cite: 17]

#### 1. Munnar (Hill Station) [cite: 17]
*   *Highlights:* Tea Plantations, Waterfalls, Scenic Views [cite: 17].
*   *Best Window:* October to May [cite: 17].

#### 2. Wayanad (Nature Destination) [cite: 17]
*   *Highlights:* Forests, Trekking, Wildlife [cite: 17].
*   *Best Window:* September to May [cite: 17].

#### 3. Alleppey (Backwater Destination) [cite: 17]
*   *Highlights:* Houseboats, Backwaters, Village Experiences [cite: 17].
*   *Best Window:* October to March [cite: 17].

#### 4. Thekkady (Wildlife Destination) [cite: 17]
*   *Highlights:* Periyar Wildlife Sanctuary, Boating, Nature Walks [cite: 17].
*   *Best Window:* September to May [cite: 17].

#### 5. Vagamon (Hill Station) [cite: 17]
*   *Highlights:* Pine Forest, Meadows, Adventure Activities [cite: 17].
*   *Best Window:* October to May [cite: 17].

#### 6. Varkala (Beach Destination) [cite: 17]
*   *Highlights:* Cliff Beach, Sunset Views, Cafes [cite: 17].
*   *Best Window:* October to March [cite: 17].

---

## 🔮 Future Scalability Backlog (Non-Breaking Architectural Paths) [cite: 17]

### 1. Categorical Niche Grouping [cite: 17]
The schema supports upcoming client-side filtering arrays to slice locations by category types [cite: 12, 17]:
*   **Hill Stations:** Munnar, Vagamon, Ponmudi [cite: 17].
*   **Beaches:** Varkala, Kovalam [cite: 17].
*   **Backwaters:** Alleppey, Kumarakom [cite: 17].
*   **Wildlife:** Thekkady, Wayanad [cite: 17].
*   **Pilgrimage:** Sabarimala, Guruvayur [cite: 17].

### 2. Standalone Target Destination Pages [cite: 17]
The platform is pre-wired to handle independent URL routes (e.g., `/destinations/munnar`) featuring [cite: 17]:
*   Full destination overview, attractions, gallery, related package arrays, travel tips, and a primary contact CTA [cite: 17].
*   **SEO Optimization Parameters:** Integrated configurations for custom dynamic Meta Titles, Meta Descriptions, Open Graph Images, and Search Keywords [cite: 17].

---

## 📐 Homepage Discovery Component Specifications [cite: 17]
On the Home landing interface terminal, every destination card maps data values to a modern, scannable layout block [cite: 8, 17]:
*   **Component Structure:** Destination Image, Destination Name, Short Description text hook, and a primary interactive `[ Explore ]` action button [cite: 17].
*   *Card Context Example:*
    *   **Title:** Munnar [cite: 17]
    *   **Copy text:** Misty hills, tea gardens, and unforgettable views [cite: 17].

---

## 🏁 Quality Control Architecture Validation [cite: 17]
Every destination object entry compiled into the project repository must satisfy this verification checklist before passing compilation builds [cite: 17]:

### Mandatory Keys Checklist [cite: 17]
- [ ] `id` [cite: 17]
- [ ] `slug` [cite: 17]
- [ ] `name` [cite: 17]
- [ ] `coverImage` [cite: 17]
- [ ] `shortDescription` [cite: 17]

### Optional Keys Arrays [cite: 17]
- [ ] `gallery` [cite: 17]
- [ ] `highlights` [cite: 17]
- [ ] `bestTimeToVisit` [cite: 17]