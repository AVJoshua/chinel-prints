export const SERVICES = [
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

export const CATEGORIES = [
  { title: "Frames", href: "/services#frames", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80&auto=format&fit=crop", alt: "Interior frames printing in Lagos" },
  { title: "Business Branding", href: "/services#branding", image: "https://images.unsplash.com/photo-1634942537034-2534966747f1?w=500&q=80&auto=format&fit=crop", alt: "Business branding services Lagos" },
  { title: "Event Printing", href: "/services#events", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&q=80&auto=format&fit=crop", alt: "Event printing and branding Nigeria" },
  { title: "Corporate Gifts", href: "/services#gifts", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80&auto=format&fit=crop", alt: "Corporate gifts and souvenirs printing" },
  { title: "Signage", href: "/services#signage", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&q=80&auto=format&fit=crop", alt: "Acrylic signage and flex banners Lagos" },
  { title: "Promotional Materials", href: "/services#promo", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&q=80&auto=format&fit=crop", alt: "Promotional materials custom printing Nigeria" },
] as const;

export const STEPS = [
  { title: "Send Design or Idea", text: "Share your artwork, logo, or concept via WhatsApp or our quote form." },
  { title: "Receive Quote & Confirmation", text: "We send a detailed quote with pricing, timeline, and specifications." },
  { title: "Production Begins", text: "Our team starts printing with premium materials and quality checks." },
  { title: "Pickup or Delivery", text: "Collect at our Lagos office or get nationwide delivery to your doorstep." },
] as const;

export const PORTFOLIO_PREVIEW = [
  { title: "Interior Frames", category: "Frames", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80&auto=format&fit=crop" },
  { title: "Event Branding", category: "Events", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&q=80&auto=format&fit=crop" },
  { title: "Acrylic Signage", category: "Signage", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&q=80&auto=format&fit=crop" },
  { title: "Office Branding", category: "Corporate", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80&auto=format&fit=crop" },
  { title: "Wedding Prints", category: "Weddings", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80&auto=format&fit=crop" },
  { title: "Corporate Printing", category: "Corporate", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&q=80&auto=format&fit=crop" },
] as const;

export const PORTFOLIO_ITEMS = [
  { title: "Gallery Wall Frames", category: "frames", filter: "Frames", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80&auto=format&fit=crop" },
  { title: "Frameless Office Art", category: "frames", filter: "Frameless Frames", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80&auto=format&fit=crop" },
  { title: "Canvas Portrait Series", category: "frames", filter: "Canvas Frames", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&q=80&auto=format&fit=crop" },
  { title: "Corporate Launch Event", category: "events", filter: "Event Branding", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&q=80&auto=format&fit=crop" },
  { title: "Trade Show Display", category: "events", filter: "Event Branding", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80&auto=format&fit=crop" },
  { title: "Tech Conference Branding", category: "events", filter: "Event Branding", image: "https://images.unsplash.com/photo-1505373877841-8d25c298c456?w=500&q=80&auto=format&fit=crop" },
  { title: "Storefront Acrylic Sign", category: "signage", filter: "Acrylic Signage", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&q=80&auto=format&fit=crop" },
  { title: "Outdoor Flex Banner", category: "signage", filter: "Flex Banners", image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=500&q=80&auto=format&fit=crop" },
  { title: "UV Printed Panel", category: "signage", filter: "UV Printing", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80&auto=format&fit=crop" },
  { title: "Office Reception Branding", category: "corporate", filter: "Office Branding", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80&auto=format&fit=crop" },
  { title: "Premium Business Cards", category: "corporate", filter: "Corporate Printing", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&q=80&auto=format&fit=crop" },
  { title: "Brand Identity Package", category: "corporate", filter: "Business Branding", image: "https://images.unsplash.com/photo-1634942537034-2534966747f1?w=500&q=80&auto=format&fit=crop" },
  { title: "Elegant Wedding Suite", category: "weddings", filter: "Wedding Prints", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80&auto=format&fit=crop" },
  { title: "Wedding Reception Decor", category: "weddings", filter: "Wedding Prints", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&q=80&auto=format&fit=crop" },
  { title: "Custom Wedding Signage", category: "weddings", filter: "Wedding Prints", image: "https://images.unsplash.com/photo-1522673606300-8d963e8a2f48?w=500&q=80&auto=format&fit=crop" },
  { title: "Corporate Gift Set", category: "corporate", filter: "Corporate Gifts", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80&auto=format&fit=crop" },
] as const;