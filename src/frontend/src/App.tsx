import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  ChevronDown,
  Loader2,
  Mail,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { useActor } from "./hooks/useActor";

// ─── Floral SVG Dividers ───────────────────────────────────────────────────
function FloralDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className={`w-full flex justify-center py-2 ${
        flip ? "scale-x-[-1]" : ""
      }`}
    >
      <svg
        role="img"
        aria-label="Floral decorative divider"
        width="480"
        height="48"
        viewBox="0 0 480 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full"
      >
        {/* Center rose */}
        <g transform="translate(240,24)">
          <circle
            cx="0"
            cy="0"
            r="6"
            fill="oklch(0.37 0.135 13)"
            opacity="0.85"
          />
          <path
            d="M0-12 C4-8 8-4 6 0 C4 4 -4 4 -6 0 C-8-4 -4-8 0-12Z"
            fill="oklch(0.37 0.135 13)"
            opacity="0.7"
          />
          <path
            d="M0-12 C-4-8 -8-4 -6 0 C-4 4 4 4 6 0 C8-4 4-8 0-12Z"
            fill="oklch(0.55 0.10 13)"
            opacity="0.6"
          />
          <path
            d="M12 0 C8 4 4 8 0 6 C-4 4 -4-4 0-6 C4-8 8-4 12 0Z"
            fill="oklch(0.37 0.135 13)"
            opacity="0.7"
          />
          <path
            d="M-12 0 C-8 4 -4 8 0 6 C4 4 4-4 0-6 C-4-8 -8-4 -12 0Z"
            fill="oklch(0.55 0.10 13)"
            opacity="0.6"
          />
          <path
            d="M0 12 C4 8 8 4 6 0 C4-4 -4-4 -6 0 C-8 4 -4 8 0 12Z"
            fill="oklch(0.37 0.135 13)"
            opacity="0.7"
          />
        </g>
        {/* Left stems */}
        <path
          d="M228 24 Q180 18 140 24"
          stroke="oklch(0.37 0.135 13)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M228 24 Q180 30 140 24"
          stroke="oklch(0.37 0.135 13)"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
        {/* Right stems */}
        <path
          d="M252 24 Q300 18 340 24"
          stroke="oklch(0.37 0.135 13)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M252 24 Q300 30 340 24"
          stroke="oklch(0.37 0.135 13)"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
        {/* Left small flowers */}
        <g transform="translate(140,24)">
          <circle
            cx="0"
            cy="0"
            r="4"
            fill="oklch(0.65 0.10 13)"
            opacity="0.7"
          />
          <path
            d="M0-8 C3-5 5-2 4 0 C3 3 -3 3 -4 0 C-5-2 -3-5 0-8Z"
            fill="oklch(0.55 0.10 13)"
            opacity="0.6"
          />
          <path
            d="M8 0 C5 3 2 5 0 4 C-3 3 -3-3 0-4 C2-5 5-3 8 0Z"
            fill="oklch(0.55 0.10 13)"
            opacity="0.6"
          />
          <path
            d="M-8 0 C-5 3 -2 5 0 4 C3 3 3-3 0-4 C-2-5 -5-3 -8 0Z"
            fill="oklch(0.65 0.12 13)"
            opacity="0.5"
          />
          <path
            d="M0 8 C3 5 5 2 4 0 C3-3 -3-3 -4 0 C-5 2 -3 5 0 8Z"
            fill="oklch(0.55 0.10 13)"
            opacity="0.6"
          />
        </g>
        {/* Right small flowers */}
        <g transform="translate(340,24)">
          <circle
            cx="0"
            cy="0"
            r="4"
            fill="oklch(0.65 0.10 13)"
            opacity="0.7"
          />
          <path
            d="M0-8 C3-5 5-2 4 0 C3 3 -3 3 -4 0 C-5-2 -3-5 0-8Z"
            fill="oklch(0.55 0.10 13)"
            opacity="0.6"
          />
          <path
            d="M8 0 C5 3 2 5 0 4 C-3 3 -3-3 0-4 C2-5 5-3 8 0Z"
            fill="oklch(0.55 0.10 13)"
            opacity="0.6"
          />
          <path
            d="M-8 0 C-5 3 -2 5 0 4 C3 3 3-3 0-4 C-2-5 -5-3 -8 0Z"
            fill="oklch(0.65 0.12 13)"
            opacity="0.5"
          />
          <path
            d="M0 8 C3 5 5 2 4 0 C3-3 -3-3 -4 0 C-5 2 -3 5 0 8Z"
            fill="oklch(0.55 0.10 13)"
            opacity="0.6"
          />
        </g>
        {/* Leaf accents */}
        <path
          d="M170 22 Q178 16 186 22 Q178 28 170 22Z"
          fill="oklch(0.45 0.08 140)"
          opacity="0.4"
        />
        <path
          d="M294 22 Q302 16 310 22 Q302 28 294 22Z"
          fill="oklch(0.45 0.08 140)"
          opacity="0.4"
        />
        {/* Outer buds */}
        <circle
          cx="100"
          cy="24"
          r="3"
          fill="oklch(0.65 0.10 13)"
          opacity="0.45"
        />
        <circle
          cx="380"
          cy="24"
          r="3"
          fill="oklch(0.65 0.10 13)"
          opacity="0.45"
        />
        <path
          d="M88 24 L100 24"
          stroke="oklch(0.37 0.135 13)"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          d="M380 24 L392 24"
          stroke="oklch(0.37 0.135 13)"
          strokeWidth="1"
          opacity="0.3"
        />
        <circle
          cx="60"
          cy="24"
          r="2"
          fill="oklch(0.55 0.10 13)"
          opacity="0.3"
        />
        <circle
          cx="420"
          cy="24"
          r="2"
          fill="oklch(0.55 0.10 13)"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

// ─── Products Data ─────────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    name: "Rose Resin Tray",
    desc: "Dried roses preserved in clear epoxy resin",
    img: "/assets/generated/product-1.dim_600x600.jpg",
  },
  {
    id: 2,
    name: "Fluid Art Coasters",
    desc: "Set of 4 swirling rose gold coasters",
    img: "/assets/generated/product-2.dim_600x600.jpg",
  },
  {
    id: 3,
    name: "Floral Jewelry Dish",
    desc: "Pressed flowers in a delicate resin dish",
    img: "/assets/generated/product-3.dim_600x600.jpg",
  },
  {
    id: 4,
    name: "Botanical Wall Art",
    desc: "Large statement floral resin panel",
    img: "/assets/generated/product-4.dim_600x600.jpg",
  },
  {
    id: 5,
    name: "Pressed Flower Bookmarks",
    desc: "Delicate keepsake bookmarks",
    img: "/assets/generated/product-5.dim_600x600.jpg",
  },
  {
    id: 6,
    name: "Floral Resin Clock",
    desc: "Functional art with rose embeds",
    img: "/assets/generated/product-6.dim_600x600.jpg",
  },
];

// ─── App ───────────────────────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    product: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const { actor } = useActor();
  const homeRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const orderRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleInquire = (productName: string) => {
    setForm((prev) => ({ ...prev, product: productName }));
    orderRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.contact || !form.message) return;
    setSubmitStatus("loading");
    try {
      await actor?.submitInquiry(
        form.name,
        form.contact,
        form.product,
        form.message,
      );
      setSubmitStatus("success");
      setForm({ name: "", contact: "", product: "", message: "" });
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ── Navigation ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-xs">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo(homeRef)}
            className="font-script text-3xl text-primary leading-none tracking-wide hover:opacity-80 transition-opacity"
          >
            Petal &amp; Resin
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", ref: homeRef, ocid: "nav.home.link" },
              { label: "Gallery", ref: galleryRef, ocid: "nav.gallery.link" },
              { label: "Order", ref: orderRef, ocid: "nav.order.link" },
              { label: "Contact", ref: contactRef, ocid: "nav.contact.link" },
            ].map(({ label, ref, ocid }) => (
              <button
                type="button"
                key={label}
                data-ocid={ocid}
                onClick={() => scrollTo(ref)}
                className="font-serif text-sm font-medium text-foreground/75 hover:text-primary transition-colors tracking-wider uppercase"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-background border-t border-border overflow-hidden"
            >
              <nav className="flex flex-col py-4 px-6 gap-4">
                {[
                  { label: "Home", ref: homeRef, ocid: "nav.home.link" },
                  {
                    label: "Gallery",
                    ref: galleryRef,
                    ocid: "nav.gallery.link",
                  },
                  { label: "Order", ref: orderRef, ocid: "nav.order.link" },
                  {
                    label: "Contact",
                    ref: contactRef,
                    ocid: "nav.contact.link",
                  },
                ].map(({ label, ref, ocid }) => (
                  <button
                    type="button"
                    key={label}
                    data-ocid={ocid}
                    onClick={() => scrollTo(ref)}
                    className="text-left font-serif text-base font-medium text-foreground/75 hover:text-primary transition-colors tracking-wide"
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HOME ── */}
      <section
        ref={homeRef}
        data-ocid="home.section"
        className="relative pt-16 min-h-screen flex flex-col"
      >
        {/* Hero image */}
        <div className="relative flex-1 min-h-[520px] overflow-hidden">
          <img
            src="/assets/generated/hero-banner.dim_1200x500.jpg"
            alt="Petal and Resin hero"
            className="w-full h-full object-cover absolute inset-0"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />

          {/* Hero content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[520px] text-center px-6 py-24">
            <motion.p
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-script text-2xl text-white/80 mb-2 tracking-widest"
            >
              Handmade with love
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-xl"
            >
              Petal &amp; Resin
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-sans text-lg md:text-xl text-white/85 max-w-md mb-10 leading-relaxed"
            >
              Handcrafted resin art blooming with beauty
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                data-ocid="home.gallery.button"
                onClick={() => scrollTo(galleryRef)}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif text-base px-8 py-3 shadow-rose-lg rounded-full border border-white/20"
              >
                View Gallery
              </Button>
              <Button
                data-ocid="home.order.button"
                onClick={() => scrollTo(orderRef)}
                size="lg"
                variant="outline"
                className="border-white text-white bg-white/10 hover:bg-white/20 font-serif text-base px-8 py-3 rounded-full backdrop-blur-sm"
              >
                Order Now
              </Button>
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-1"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown size={22} />
          </motion.div>
        </div>

        {/* Floral divider */}
        <div className="bg-background pt-4 pb-2">
          <FloralDivider />
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section
        ref={galleryRef}
        data-ocid="gallery.section"
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="font-script text-xl text-primary/70 mb-1 tracking-widest">
              Explore
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Our Collection
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Each piece is a unique blend of nature's finest flowers and
              handcrafted resin artistry.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                data-ocid={`gallery.item.${product.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="group overflow-hidden border border-border shadow-xs hover:shadow-rose-lg transition-all duration-300 rounded-2xl bg-card">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-serif font-semibold text-foreground text-base md:text-lg leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                      {product.desc}
                    </p>
                    <Button
                      data-ocid={`gallery.inquire.button.${product.id}`}
                      onClick={() => handleInquire(product.name)}
                      size="sm"
                      variant="outline"
                      className="mt-3 w-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all rounded-full font-serif text-xs tracking-wider uppercase"
                    >
                      Inquire
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floral divider */}
        <div className="pt-14 pb-2">
          <FloralDivider flip />
        </div>
      </section>

      {/* ── ORDER ── */}
      <section
        ref={orderRef}
        data-ocid="order.section"
        className="py-20 bg-secondary/20"
      >
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="font-script text-xl text-primary/70 mb-1 tracking-widest">
              Let's create
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Place an Order
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fill in the form below and we'll get back to you, or reach us
              directly on WhatsApp
            </p>
          </motion.div>

          {/* WhatsApp Quick Button */}
          <div className="flex justify-center mb-8">
            <a
              href="https://wa.me/+1234567890"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="order.whatsapp.button"
            >
              <Button className="bg-[#25D366] hover:bg-[#1ebe5c] text-white rounded-full px-7 py-3 font-serif text-sm gap-2 shadow-md">
                <MessageCircle size={18} />
                Chat on WhatsApp
              </Button>
            </a>
          </div>

          {/* Order Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border border-border shadow-rose rounded-2xl bg-card">
              <CardContent className="p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {submitStatus === "success" ? (
                    <motion.div
                      key="success"
                      data-ocid="order.success_state"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center gap-4 py-10 text-center"
                    >
                      <CheckCircle className="text-primary" size={52} />
                      <h3 className="font-serif text-2xl font-semibold text-foreground">
                        Inquiry Sent!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you
                        shortly with details about your order.
                      </p>
                      <Button
                        onClick={() => setSubmitStatus("idle")}
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full mt-2"
                      >
                        Send Another
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div>
                        <Label
                          htmlFor="order-name"
                          className="font-serif text-sm font-medium text-foreground/80"
                        >
                          Your Name
                        </Label>
                        <Input
                          id="order-name"
                          data-ocid="order.name.input"
                          placeholder="e.g. Sarah Johnson"
                          value={form.name}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, name: e.target.value }))
                          }
                          required
                          className="mt-1.5 rounded-xl border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="order-contact"
                          className="font-serif text-sm font-medium text-foreground/80"
                        >
                          Email or WhatsApp Number
                        </Label>
                        <Input
                          id="order-contact"
                          data-ocid="order.contact.input"
                          placeholder="email@example.com or +1 234 567 8900"
                          value={form.contact}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, contact: e.target.value }))
                          }
                          required
                          className="mt-1.5 rounded-xl border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="order-product"
                          className="font-serif text-sm font-medium text-foreground/80"
                        >
                          Product of Interest
                        </Label>
                        <Input
                          id="order-product"
                          data-ocid="order.product.input"
                          placeholder="e.g. Rose Resin Tray, Custom Order..."
                          value={form.product}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, product: e.target.value }))
                          }
                          className="mt-1.5 rounded-xl border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="order-message"
                          className="font-serif text-sm font-medium text-foreground/80"
                        >
                          Message
                        </Label>
                        <Textarea
                          id="order-message"
                          data-ocid="order.message.textarea"
                          placeholder="Tell us about your order, preferred size, colors, or any special requests..."
                          value={form.message}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, message: e.target.value }))
                          }
                          required
                          rows={4}
                          className="mt-1.5 rounded-xl border-border focus:border-primary resize-none"
                        />
                      </div>

                      {submitStatus === "error" && (
                        <p
                          data-ocid="order.error_state"
                          className="text-destructive text-sm text-center"
                        >
                          Something went wrong. Please try again or contact us
                          directly.
                        </p>
                      )}

                      <Button
                        type="submit"
                        data-ocid="order.submit_button"
                        disabled={submitStatus === "loading"}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-serif text-base py-3 shadow-rose tracking-wide"
                      >
                        {submitStatus === "loading" ? (
                          <span
                            data-ocid="order.loading_state"
                            className="flex items-center gap-2"
                          >
                            <Loader2 className="animate-spin" size={16} />
                            Sending...
                          </span>
                        ) : (
                          "Send Inquiry"
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Floral divider */}
        <div className="pt-14 pb-2">
          <FloralDivider />
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        ref={contactRef}
        data-ocid="contact.section"
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="font-script text-xl text-primary/70 mb-1 tracking-widest">
              We'd love to hear from you
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Get in Touch
            </h2>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border border-border rounded-2xl shadow-xs hover:shadow-rose transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={26} />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-foreground">
                    Email Us
                  </h3>
                  <a
                    href="mailto:petalandresin@gmail.com"
                    className="text-primary hover:underline text-sm break-all"
                  >
                    petalandresin@gmail.com
                  </a>
                  <p className="text-muted-foreground text-xs">
                    We'll reply within 24 hours
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border border-border rounded-2xl shadow-xs hover:shadow-rose transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageCircle className="text-[#25D366]" size={26} />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-foreground">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/+1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline text-sm"
                  >
                    +1 (234) 567-890
                  </a>
                  <p className="text-muted-foreground text-xs">
                    Chat with us directly
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* About blurb */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-xl mx-auto"
          >
            <div className="inline-block mb-4">
              <FloralDivider />
            </div>
            <p className="font-serif italic text-lg text-foreground/75 leading-relaxed">
              Each piece is handcrafted with love, preserving nature's beauty in
              resin. Custom orders welcome — tell us your vision and we'll bring
              it to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-primary/5 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-script text-2xl text-primary mb-2">
            Petal &amp; Resin
          </p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Petal &amp; Resin. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
