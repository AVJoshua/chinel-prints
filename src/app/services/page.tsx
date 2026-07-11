import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Printing Services",
  description:
    "Explore Chinel Prints services: interior frames Nigeria, acrylic signage, business cards, event branding, UV printing, and custom printing Nigeria-wide.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Printing Services — Chinel Prints Lagos",
    description: "19+ professional printing and branding services in Lagos, Nigeria.",
    url: "/services",
  },
};

type ServiceItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

type ServiceSection = {
  id: string;
  label: string;
  title: string;
  gray?: boolean;
  items: ServiceItem[];
};

const SERVICE_SECTIONS: ServiceSection[] = [
  {
    id: "frames",
    label: "Frames",
    title: "Frame Services",
    items: [
      {
        title: "Interior Frames",
        description:
          "Premium interior frames for homes, offices, and galleries. Available in various sizes, materials, and finishes. Perfect for artwork, photos, certificates, and decorative prints.",
        image: "/images/interior_frames.jpeg",
        alt: "Interior frames Nigeria by Chinel Prints",
      },
      {
        title: "Frameless Frames",
        description:
          "Modern frameless designs for a sleek, contemporary look. Ideal for minimalist interiors and professional office spaces across Lagos.",
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80&auto=format&fit=crop",
        alt: "Frameless frames printing Lagos",
      },
      {
        title: "Canvas Frames",
        description:
          "High-quality canvas prints stretched and framed to perfection. Transform your photos and artwork into stunning wall displays.",
        image:
          "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80&auto=format&fit=crop",
        alt: "Canvas frames custom printing Nigeria",
      },
    ],
  },
  {
    id: "signage",
    label: "Signage",
    title: "Signage & Banners",
    gray: true,
    items: [
      {
        title: "Acrylic Signage",
        description:
          "Elegant acrylic signs for storefronts, reception areas, and directional signage. Durable, professional, and visually striking.",
        image: "/images/acrylic_signage.jpeg",
        alt: "Acrylic signage Lagos printing company",
      },
      {
        title: "Flex Banners",
        description:
          "Weather-resistant flex banners for outdoor advertising, events, and promotions. Available in all sizes with vibrant full-color printing.",
        image:
          "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=600&q=80&auto=format&fit=crop",
        alt: "Flex banners printing Lagos",
      },
      {
        title: "Roll-Up Banners",
        description:
          "Portable roll-up banners perfect for trade shows, conferences, and retail displays. Easy setup with professional presentation.",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80&auto=format&fit=crop",
        alt: "Roll-up banners branding company Lagos",
      },
      {
        title: "Large Format Printing",
        description:
          "Billboards, building wraps, vehicle wraps, and oversized prints. High-resolution output for maximum visual impact.",
        image: "/images/large_format.jpeg",
        alt: "Large format printing Nigeria",
      },
    ],
  },
  {
    id: "branding",
    label: "Branding",
    title: "Business Branding",
    items: [
      {
        title: "Business Cards",
        description:
          "Premium business cards with various finishes — matte, gloss, embossed, and spot UV. Make a lasting first impression.",
        image:
          "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80&auto=format&fit=crop",
        alt: "Business cards printing Lagos",
      },
      {
        title: "Logo Design",
        description:
          "Professional logo design and brand identity packages. From concept to final files ready for all print and digital applications.",
        image:
          "https://images.unsplash.com/photo-1634942537034-2534966747f1?w=600&q=80&auto=format&fit=crop",
        alt: "Logo design business branding Lagos",
      },
      {
        title: "Office Branding",
        description:
          "Complete office branding solutions — wall graphics, door signs, reception displays, and branded stationery for a cohesive look.",
        image: "/images/office_branding.png",
        alt: "Office branding printing company Lagos",
      },
      {
        title: "Packaging Design",
        description:
          "Custom packaging design and printing for products, gift boxes, and retail packaging that elevates your brand presence.",
        image:
          "https://images.unsplash.com/photo-1607083206869-4c8dac5915dc?w=600&q=80&auto=format&fit=crop",
        alt: "Packaging design custom printing Nigeria",
      },
    ],
  },
  {
    id: "events",
    label: "Events",
    title: "Event & Wedding Printing",
    gray: true,
    items: [
      {
        title: "Event Branding",
        description:
          "Full event branding packages — backdrops, step-and-repeat banners, table cards, programs, and directional signage.",
        image:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80&auto=format&fit=crop",
        alt: "Event branding printing Lagos",
      },
      {
        title: "Wedding Prints",
        description:
          "Beautiful wedding invitations, programs, menus, thank-you cards, and decorative prints for your special day.",
        image:
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80&auto=format&fit=crop",
        alt: "Wedding prints custom printing Nigeria",
      },
    ],
  },
  {
    id: "promo",
    label: "Promotional",
    title: "Promotional Materials & Gifts",
    items: [
      {
        title: "Flyers & Handbills",
        description:
          "Eye-catching flyers and handbills for promotions, launches, and campaigns. Various paper stocks and finishes available.",
        image:
          "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80&auto=format&fit=crop",
        alt: "Flyers and handbills printing Lagos",
      },
      {
        title: "Sticker Printing",
        description:
          "Custom stickers in all shapes and sizes — product labels, bumper stickers, window decals, and branded seals.",
        image:
          "https://images.unsplash.com/photo-1572635196233-15949d84f9e1?w=600&q=80&auto=format&fit=crop",
        alt: "Sticker printing custom printing Nigeria",
      },
      {
        title: "Souvenirs & Corporate Gifts",
        description:
          "Branded souvenirs, gift items, and corporate giveaways — pens, notebooks, keychains, and custom merchandise.",
        image:
          "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80&auto=format&fit=crop",
        alt: "Corporate gifts souvenirs Lagos",
      },
      {
        title: "Mug Branding",
        description:
          "Custom branded mugs for corporate gifts, events, and promotions. Full-color printing with durable, dishwasher-safe finishes.",
        image:
          "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80&auto=format&fit=crop",
        alt: "Mug branding printing company Lagos",
      },
      {
        title: "T-Shirt Printing",
        description:
          "Screen printing, heat transfer, and DTG t-shirt printing for events, teams, uniforms, and promotional wear.",
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80&auto=format&fit=crop",
        alt: "T-shirt printing business branding Lagos",
      },
      {
        title: "UV Printing",
        description:
          "Advanced UV printing on diverse materials — wood, glass, metal, acrylic, and more. Vibrant colors with instant curing.",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80&auto=format&fit=crop",
        alt: "UV printing custom printing Nigeria",
      },
    ],
  },
];

function ServiceDetailCard({ item }: { item: ServiceItem }) {
  return (
    <article className="service-detail-card">
      <div className="service-detail-card__image">
        <Image
          src={item.image}
          alt={item.alt}
          width={600}
          height={338}
        />
      </div>
      <div className="service-detail-card__content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <Link href="/#quote" className="btn btn--primary btn--sm">
          Get Quote
        </Link>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </nav>
          <h1>Our Printing Services</h1>
          <p>
            From interior frames to large format printing — comprehensive
            solutions for every branding need in Lagos and beyond.
          </p>
        </div>
      </section>

      {SERVICE_SECTIONS.map((section) => (
        <section
          key={section.id}
          className={`section${section.gray ? " section--gray" : ""}`}
          id={section.id}
        >
          <div className="container">
            <div className="section-header">
              <span className="section-label">{section.label}</span>
              <h2 className="section-title">{section.title}</h2>
            </div>
            <div className="services-page-grid">
              {section.items.map((item) => (
                <ServiceDetailCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section" id="gifts">
        <div className="container">
          <div className="cta-banner">
            <h2>Need a Custom Solution?</h2>
            <p>
              Don&apos;t see exactly what you need? We handle custom projects of
              all kinds. Tell us your idea and we&apos;ll make it happen.
            </p>
            <div className="cta-banner__actions">
              <Link href="/#quote" className="btn btn--primary">
                Request Quote
              </Link>
              <a
                href={getWhatsAppUrl()}
                className="btn btn--whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}