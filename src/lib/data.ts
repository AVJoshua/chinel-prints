export const SERVICES = [
  "Interior Frames",
  "Frameless Frames",
  "Acrylic Signage",
  "Roll-Up Banners",
  "Business Cards",
  "Flyers & Handbills",
  "Sticker Printing",
  "Mug Branding",
  "T-Shirt Printing",
  "Packaging Design",
  "Large Format Printing",
  "Event Branding",
  "Wedding Prints",
  "Office Branding",
] as const;

export const SERVICE_BACKGROUNDS: Partial<
  Record<(typeof SERVICES)[number], string>
> = {
  "Business Cards": "/images/business_card.png",
  "T-Shirt Printing": "/images/t_shirt.jpeg",
  "Mug Branding": "/images/MUGS.jpeg",
  "Frameless Frames": "/images/FRAMES.jpeg",
  "Flyers & Handbills": "/images/flyer.jpeg",
  "Roll-Up Banners": "/images/ROLL UP.jpeg",
  "Sticker Printing": "/images/sticker.jpeg",
  "Packaging Design": "/images/packaging.jpeg",
  "Acrylic Signage": "/images/acrylic_signage.jpeg",
  "Interior Frames": "/images/interior_frames.jpeg",
  "Large Format Printing": "/images/large_format.jpeg",
  "Office Branding": "/images/office_branding.png",
  "Event Branding": "/images/event_branding.jpeg",
  "Wedding Prints": "/images/wedding_print.jpeg",
};

export const WHY_CHOOSE_US = [
  {
    title: "Fast Turnaround",
    text: "Most orders ready within 24–48 hours. Rush jobs available for urgent projects.",
  },
  {
    title: "Premium Quality",
    text: "High-grade materials and professional finishing on every single project we deliver.",
  },
  {
    title: "Affordable Pricing",
    text: "Competitive rates without compromising quality. Transparent quotes with no hidden fees.",
  },
  {
    title: "Creative Branding Support",
    text: "Our design team helps bring your ideas to life with professional creative guidance.",
  },
  {
    title: "Nationwide Delivery",
    text: "Reliable delivery across Lagos and all 36 states. Your prints arrive safely and on time.",
  },
  {
    title: "Excellent Customer Service",
    text: "Responsive support via WhatsApp, phone, and email. We're here when you need us.",
  },
] as const;

export const STEPS = [
  { title: "Send Design or Idea", text: "Share your artwork, logo, or concept via WhatsApp or our quote form." },
  { title: "Receive Quote & Confirmation", text: "We send a detailed quote with pricing, timeline, and specifications." },
  { title: "Production Begins", text: "Our team starts printing with premium materials and quality checks." },
  { title: "Pickup or Delivery", text: "Collect at our Lagos office or get nationwide delivery to your doorstep." },
] as const;

