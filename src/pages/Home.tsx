import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { QrCode, ShoppingCart, CreditCard, Clock, Store, TrendingUp, Users, Shield, ArrowRight, Star, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";
import appMockup from "@/assets/app-mockup.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const features = [
  {
    icon: QrCode,
    title: "Unified QR for All",
    description: "One QR code grants access to every restaurant in the food court. No more hunting for different menus."
  },
  {
    icon: Clock,
    title: "Real-Time Tracking",
    description: "Track your order from kitchen to table with live status updates on your phone."
  },
  {
    icon: Store,
    title: "PetPooja Integration",
    description: "Seamlessly syncs with PetPooja POS for automated order management and inventory."
  },
  {
    icon: TrendingUp,
    title: "Platform Revenue",
    description: "Food courts earn a platform fee on every transaction, creating a sustainable revenue stream."
  },
];

const processSteps = [
  { step: "01", title: "Scan", description: "Scan the QR code at your table" },
  { step: "02", title: "Order", description: "Browse all restaurants, add items to cart" },
  { step: "03", title: "Pay", description: "Pay securely via UPI, cards, or wallets" },
  { step: "04", title: "Track", description: "Get real-time updates until delivery" },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Food Court Manager, Phoenix Mall",
    content: "WebGro transformed our operations. Order wait times dropped by 40% and customer satisfaction soared.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Restaurant Owner, Curry House",
    content: "The PetPooja integration is seamless. Orders flow directly to our kitchen display without any manual entry.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Operations Head, Select Citywalk",
    content: "The platform fee model creates real value for us. It's a win-win for the food court and restaurants.",
    rating: 5
  }
];

const benefits = [
  "Zero app downloads required",
  "Works on any smartphone",
  "Multi-language support",
  "Real-time menu updates",
  "Split billing support",
  "Digital receipts"
];

export default function Home() {
  return (
    <Layout>
      {/* SEO */}
      <title>WebGro - One QR for the Entire Food Court | Digital Ordering Platform</title>
      <meta name="description" content="WebGro is a QR-based digital ordering platform for food courts. Customers scan once, browse all restaurants, order, pay, and track in real time." />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-glow opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Trusted by 50+ Food Courts
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                One QR for the{" "}
                <span className="text-gradient">Entire Food Court</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Customers scan once, browse all restaurants, order, pay, and track in real time. No apps. No hassle.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-green-600 border-2 border-background flex items-center justify-center text-primary-foreground text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">500K+</span> orders processed
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-green-500/20 rounded-3xl blur-3xl" />
              <img 
                src={heroImage} 
                alt="WebGro Food Court Digital Ordering Platform" 
                className="relative w-full rounded-2xl shadow-elevated"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              As Simple as <span className="text-gradient">1-2-3-4</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From scanning to savoring, the entire journey takes just minutes.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="text-6xl font-bold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Built for Modern <span className="text-gradient">Food Courts</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every feature is designed to enhance customer experience while maximizing operational efficiency for food court operators.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-background/50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl" />
              <img 
                src={appMockup} 
                alt="WebGro Mobile App Interface" 
                className="relative w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-accent/50 border border-border"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Why Customers <span className="text-gradient">Love It</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                No app downloads, no registrations. Just scan and start ordering from any restaurant instantly.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/product">Learn More <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Loved by <span className="text-gradient">Industry Leaders</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              See what food court operators and restaurant owners say about WebGro.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-green-600 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Food Court?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join the digital revolution. Get started with WebGro today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="bg-background text-primary hover:bg-background/90" asChild>
                <Link to="/contact">Request Demo</Link>
              </Button>
              <Button size="xl" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
