import { useEffect } from 'react';

const BASE_URL = 'https://lachoosholidays.com';
const DEFAULT_IMAGE = `${BASE_URL}/images/packages/lachoos-home-cover.png`;

/**
 * Custom SEO hook — updates document.head tags dynamically (no external dependency needed).
 * Works with any React router setup.
 */
const useSEO = ({
  title,
  description,
  keywords,
  path = '/',
  image = DEFAULT_IMAGE,
}) => {
  useEffect(() => {
    const canonicalUrl = `${BASE_URL}${path}`;

    // Helper: update or create a meta tag
    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrVal] = attr.split('=');
        el.setAttribute(attrName, attrVal.replace(/"/g, ''));
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // Helper: update or create a link tag
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Title
    document.title = title;

    // Primary meta
    setMeta('meta[name="description"]', 'name=description', description);
    setMeta('meta[name="keywords"]', 'name=keywords', keywords);

    // Canonical
    setLink('canonical', canonicalUrl);

    // Open Graph
    setMeta('meta[property="og:title"]', 'property=og:title', title);
    setMeta('meta[property="og:description"]', 'property=og:description', description);
    setMeta('meta[property="og:url"]', 'property=og:url', canonicalUrl);
    setMeta('meta[property="og:image"]', 'property=og:image', image);

    // Twitter
    setMeta('meta[name="twitter:title"]', 'name=twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name=twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name=twitter:image', image);
  }, [title, description, keywords, path, image]);
};

/**
 * SEO Component — drop this at the top of any page component.
 */
const SEO = ({
  title = 'Kerala Tour Packages | Lachoos Holidays – Sabarimala, Munnar, Alleppey',
  description = 'Lachoos Holidays – Kerala\'s trusted travel experts in Pathanamthitta. Book Kerala tour packages, Sabarimala pilgrimage, honeymoon tours, backwater cruises, hill station trips.',
  keywords = 'Kerala tour packages, Sabarimala pilgrimage booking, Kerala tourism, Pathanamthitta travel agent, Kerala honeymoon packages, Alleppey houseboat, Munnar packages',
  path = '/',
  image = DEFAULT_IMAGE,
}) => {
  useSEO({ title, description, keywords, path, image });
  return null;
};

export default SEO;
