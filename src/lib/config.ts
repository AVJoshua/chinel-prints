export const SITE_CONFIG = {
  name: "Chinel Prints",
  tagline: "Professional Printing & Branding Solutions in Lagos",
  phone: "+2347063848710",
  phoneDisplay: "+234 706 384 8710",
  email: "hello@chinelprints.com",
  address: "Lagos, Nigeria",
  whatsappMessage:
    "Hello Chinel Prints! I'd like to inquire about your printing services.",
  social: {
    instagram: "https://instagram.com/chinelprints",
    facebook: "https://facebook.com/chinelprints",
    twitter: "https://twitter.com/chinelprints",
    linkedin: "https://linkedin.com/company/chinelprints",
  },
  services: [
    "Interior Frames",
    "Frameless Frames",
    "Acrylic Signage",
    "Flex Banners",
    "Roll-Up Banners",
    "Business Cards",
    "Flyers & Handbills",
    "Sticker Printing",
    "Souvenirs",
    "Mug Branding",
    "T-Shirt Printing",
    "Packaging Design",
    "Logo Design",
    "Large Format Printing",
    "Event Branding",
    "Wedding Prints",
    "Canvas Frames",
    "Office Branding",
    "UV Printing",
  ],
} as const;

export function getWhatsAppUrl(message?: string) {
  const phone = SITE_CONFIG.phone.replace(/\D/g, "");
  const text = encodeURIComponent(message || SITE_CONFIG.whatsappMessage);
  return `https://wa.me/${phone}?text=${text}`;
}