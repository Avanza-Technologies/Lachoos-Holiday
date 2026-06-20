import { WHATSAPP_CONFIG } from '../config/whatsapp';

/**
 * Generates a pre-filled WhatsApp link for a specific travel package.
 * Injects name, category, duration, price, and current window location as source context.
 */
export const getPackageWhatsAppLink = (pkg) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const message = `Hello Lachoos Holidays,
I am highly interested in the following travel package:
- Itinerary Package: ${pkg.name}
- Category Niche: ${pkg.category}
- Duration Track: ${pkg.duration}
- Price Guideline: Starting From ₹${pkg.startingPrice.toLocaleString('en-IN')}
- Source Context Link: ${currentUrl}

Please share complete package details and verify seasonal availability.
Thank You.`;

  return `${WHATSAPP_CONFIG.baseEndpoint}/${WHATSAPP_CONFIG.targetNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Generates a pre-filled general inquiry WhatsApp link.
 */
export const getGeneralWhatsAppLink = () => {
  const message = `Hello Lachoos Holidays,
I would like more information regarding your travel services and South India packages. Please contact me.
Thank You.`;
  return `${WHATSAPP_CONFIG.baseEndpoint}/${WHATSAPP_CONFIG.targetNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Generates a pre-filled WhatsApp link for Sabarimala pilgrimage services.
 * Supports both direct CTA click (default template) and custom form submission query.
 */
export const getSabarimalaWhatsAppLink = (formFields = null) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  let message;
  
  if (formFields) {
    const dateStr = formFields.date ? formFields.date : 'Not Specified';
    const countStr = formFields.count ? formFields.count : 'Not Specified';
    const notesStr = formFields.notes ? formFields.notes : 'None';
    
    message = `Hello Lachoos Holidays,
I am interested in your dedicated Sabarimala pilgrimage services.
Please provide details regarding:
- Name: ${formFields.name}
- Travel Date: ${dateStr}
- Pilgrim Count: ${countStr}
- Special Requirements: ${notesStr}
- Reference Source: ${currentUrl}

Thank You.`;
  } else {
    message = `Hello Lachoos Holidays,
I am interested in your dedicated Sabarimala pilgrimage services.
Please provide details regarding:
- Available packages
- Transportation options
- Travel planning assistance
- Reference Source: ${currentUrl}

Thank You.`;
  }
  
  return `${WHATSAPP_CONFIG.baseEndpoint}/${WHATSAPP_CONFIG.targetNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Generates a pre-filled WhatsApp link for a specific vehicle model.
 */
export const getFleetWhatsAppLink = (vehicle) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const categoryStr = vehicle.category || (vehicle.id === 1 ? 'Premium Sedan' : 'Luxury SUV');
  const capacityStr = vehicle.capacity || (vehicle.id === 1 ? '4' : '7');
  
  const message = `Hello Lachoos Holidays,
I would like information regarding the following vehicle:
- Vehicle Model: ${vehicle.name}
- Category Tier: ${categoryStr}
- Seating Capacity: ${capacityStr} Passengers Max
- Source Reference: ${currentUrl}

Please share pricing frameworks and availability details.
Thank You.`;

  return `${WHATSAPP_CONFIG.baseEndpoint}/${WHATSAPP_CONFIG.targetNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Generates a pre-filled WhatsApp link for the fleet sidebar quote form.
 */
export const getFleetQuoteWhatsAppLink = (quoteData) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const emailLine = quoteData.email ? `\n- Email: ${quoteData.email}` : '';
  const routeLine = quoteData.route ? `\n- Route / Destination: ${quoteData.route}` : '';
  
  const message = `Hello Lachoos Holidays,
I am looking for reliable transportation services across South India.
Please suggest suitable vehicle options for my customized travel requirements:
- Name: ${quoteData.name}
- Phone: ${quoteData.phone}${emailLine}${routeLine}
- Source Reference: ${currentUrl}

Thank You.`;

  return `${WHATSAPP_CONFIG.baseEndpoint}/${WHATSAPP_CONFIG.targetNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Generates a pre-filled WhatsApp link for the fleet filter availability form.
 */
export const getFleetAvailabilityWhatsAppLink = (filterData) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const dateStr = filterData.pickupDate ? filterData.pickupDate : 'Not Specified';
  
  const message = `Hello Lachoos Holidays,
I am looking for reliable transportation services across South India.
Please check availability for:
- Vehicle Type: ${filterData.vehicleType}
- Pick-up Date: ${dateStr}
- Duration: ${filterData.duration} Days
- Source Reference: ${currentUrl}

Please suggest suitable options and share rates.
Thank You.`;

  return `${WHATSAPP_CONFIG.baseEndpoint}/${WHATSAPP_CONFIG.targetNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Generates a pre-filled general fleet inquiry WhatsApp link (General Logistical Suggestion Template).
 */
export const getFleetGeneralWhatsAppLink = () => {
  const message = `Hello Lachoos Holidays,
I am looking for reliable transportation services across South India.
Please suggest suitable vehicle options for my customized travel requirements.
Thank You.`;
  return `${WHATSAPP_CONFIG.baseEndpoint}/${WHATSAPP_CONFIG.targetNumber}?text=${encodeURIComponent(message)}`;
};

