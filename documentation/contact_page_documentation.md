# Contact Us Page Documentation

This document provides a comprehensive technical and structural overview of the **Contact Us** page (`src/pages/Contact.jsx`) for the **Lachoos Holidays** web application. It is designed to help developers, designers, or stakeholders understand how the page is built, what technologies are used, and how it functions.

## 1. Overview
The Contact Us page serves as the primary touchpoint for users wanting to book tours, inquire about Sabarimala pilgrimage packages, or get general travel advice. Rather than using a traditional backend to process emails, the page is optimized for immediate, direct communication by redirecting inquiries straight to a dedicated **WhatsApp** number.

- **File Path:** `[src/pages/Contact.jsx](file:///c:/Users/AARON/Desktop/NSK/Lachoos-Holiday/src/pages/Contact.jsx)`
- **Stylesheet:** `[src/pages/Contact.css](file:///c:/Users/AARON/Desktop/NSK/Lachoos-Holiday/src/pages/Contact.css)`

---

## 2. Tech Stack & Dependencies

The page is built using modern front-end technologies and relies on the following libraries:

| Technology / Library | Purpose |
| :--- | :--- |
| **React (Functional)** | The core library used for UI rendering. Utilizes React hooks like `useState` for managing form state and submission UI feedback. |
| **Framer Motion** | Used for all animations, including the hero section's entrance (`fadeIn`) and scroll-triggered animations (`whileInView`, `staggerChildren`) across the page. |
| **Lucide React** | Provides modern, lightweight SVG icons (`MapPin`, `Phone`, `Mail`, `MessageCircle`, etc.) used in the contact cards and sidebar. |
| **Vanilla CSS** | The styling is purely handled by standard CSS (`Contact.css`), utilizing CSS variables, Flexbox, and Grid for responsive layouts. |
| **Custom SEO Component** | A reusable `SEO` component (`src/components/SEO.jsx`) is injected at the top to handle meta tags, title, and Open Graph data for social sharing. |

---

## 3. Structural Layout

The page is structurally divided into five distinct semantic sections:

### A. Search Engine Optimization (SEO) Head
The page injects a custom `<SEO />` component right at the start. It automatically updates the document title, description, and keywords specifically tailored for "Kerala Tour Booking in Pathanamthitta."

### B. Hero Section (`.ct-hero`)
A highly visual introductory block.
- **Background:** Features an auto-scaling background image of Kerala.
- **Content:** Animated "GET IN TOUCH" badge, the main page title, and a subtitle explaining the direct-contact guarantee.
- **Badges:** Three small informational pills highlighting "Under 2 hours response", "500+ Happy Travellers", and the "Pathanamthitta" base location.

### C. Quick Contact Info Cards (`.ct-info-section`)
A horizontal 4-column grid displaying the primary methods of contact.
- Each card acts as an actionable link (`<a>` tag) with hover animations.
- Actions include: **Direct Call** (`tel:`), **WhatsApp** (`https://wa.me/`), **Email** (`mailto:`), and **Google Maps Directions**.

### D. Main Content Layout (Form & Sidebar)
Implemented using a CSS Grid layout (`.ct-main-layout`) that splits the screen into a wide form area and a narrower informational sidebar.

#### 1. The Inquiry Form (`.ct-form-wrapper`)
- Captures standard user data: Name, Phone, Email, Service of Interest, and Message.
- The `I'm interested in` dropdown dynamically loads from a predefined `services` array.
- **Submission Logic:** Instead of an API call, the `handleSubmit` function formats the form data into a readable text string and opens the WhatsApp API (`wa.me`) in a new browser tab, pre-filling a message to the business's number (`+91 90748 85337`).

#### 2. The Sidebar Info (`.ct-sidebar`)
- **"Why Choose Us" Card:** Highlights the business's unique selling propositions (USPs) like "Direct Specialists" and "Transparent Pricing" in a bulleted list format.
- **"Office Hours" Card:** Displays operating hours for the week and features a prominent "Chat on WhatsApp" call-to-action button.

### E. Interactive Map Section (`.ct-map-section`)
The bottom of the page embeds a live Google Map via an `<iframe>`. It points to Pathanamthitta, Kerala, reinforcing the local roots of the agency.

---

## 4. Key Behaviors & UX Details

> [!TIP]
> **Performance Optimization**
> Scroll animations are triggered using Framer Motion's `viewport={{ once: true }}` prop. This ensures elements animate in smoothly when the user scrolls down, but won't re-animate constantly if the user scrolls back up, saving browser rendering power.

- **Responsive Design:** 
  The grid layouts gracefully collapse on smaller screens.
  - On tablets (`max-width: 1100px`), the main layout switches to a single column, pushing the sidebar below the form.
  - On mobile (`max-width: 640px`), the 4-column contact cards stack vertically into a single column.
- **Form Feedback:** 
  When the user submits the form, the submit button text changes from "Send via WhatsApp" to "✓ Sent! Check your WhatsApp" for exactly 5 seconds using a `setTimeout` function, providing clear UI feedback.
- **Accessibility / Interaction:**
  Hovering over contact cards features a subtle "spring" animation (`type: "spring", stiffness: 300`) and widens the gap between the action label and the directional arrow, creating a premium, interactive feel.
