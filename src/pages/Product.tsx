import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { QrCode, Smartphone, CreditCard, Bell, Store, RefreshCw, Settings, ArrowRight, Check, Layers, Zap, Shield } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import productFlowImage from "@/assets/product-flow.png";
import appMockup from "@/assets/app-mockup.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const userFlowSteps = [
  { icon: QrCode, title: "Scan QR Code", description: "Customer scans the table QR code with their phone camera" },
  { icon: Store, title: "Browse Restaurants", description: "View all restaurants in the food court with live menus" },
  { icon: Smartphone, title: "Add to Cart", description: "Select items from multiple restaurants into one cart" },
  { icon: CreditCard, title: "Pay Securely", description: "Complete payment via UPI, cards, or digital wallets" },
  { icon: Bell, title: "Track Order", description: "Receive real-time notifications on order status" },
];

const restaurantFlowSteps = [
  { title: "Order Received", description: "Order appears instantly on Kitchen Display System" },
  { title: "Menu Sync", description: "PetPooja POS automatically syncs menu items and prices" },
  { title: "Preparation", description: "Kitchen staff marks order progress in real-time" },
  { title: "Ready Alert", description: "Customer gets notified when order is ready" },
];

const integrationFeatures = [
  { icon: RefreshCw, title: "Auto Menu Sync", description: "Menus sync automatically from PetPooja every 15 minutes" },
  { icon: Settings, title: "Order Management", description: "Orders flow directly to KDS without manual entry" },
  { icon: Layers, title: "Inventory Tracking", description: "Real-time stock updates prevent overselling" },
  { icon: Shield, title: "Payment Reconciliation", description: "Automated daily settlement reports" },
];

const platformFeeDetails = [
  "Small percentage on each transaction",
  "No upfront costs for restaurants",
  "Transparent reporting dashboard",
  "Automated monthly settlements",
  "Revenue sharing flexibility",
];

export default function Product() {
  return (
    <Layout>
      <title>Product - WebGro Digital Food Court Ordering Platform</title>
      <meta name="description" content="Discover how WebGro's QR-based ordering system works. Learn about our unified platform, PetPooja integration, and platform fee model." />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                The Future of <span className="text-gradient">Food Court Ordering</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                A complete digital ecosystem that connects customers, restaurants, and food court operators through one seamless platform.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={productFlowImage} 
                alt="WebGro Product Flow Diagram" 
                className="w-full rounded-2xl shadow-elevated"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How QR System Works */}
      <section id="how-it-works" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              How the <span className="text-gradient">QR System</span> Works
            </h2>
            <p className="text-lg text-muted-foreground">
              From scanning to satisfied—the complete customer journey in five simple steps.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {userFlowSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 relative z-10">
                    <step.icon className="h-8 w-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Flow */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Restaurant <span className="text-gradient">Backend Flow</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Orders flow seamlessly from customer phones to kitchen displays without any manual intervention.
              </p>
              
              <div className="space-y-4">
                {restaurantFlowSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl" />
              <img 
                src={appMockup} 
                alt="Restaurant Order Management Interface" 
                className="relative w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PetPooja Integration */}
      <section id="integrations" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              Powered by PetPooja
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Seamless <span className="text-gradient">POS Integration</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              WebGro integrates directly with PetPooja, India's leading restaurant POS system, for automated operations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {integrationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Fee Model */}
      <section id="pricing" className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Platform Fee <span className="text-gradient">Revenue Model</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Food courts earn a sustainable revenue stream through our transparent platform fee structure. No upfront costs, just pure value creation.
              </p>
              
              <ul className="space-y-4 mb-8">
                {platformFeeDetails.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Discuss Pricing <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-primary via-green-600 to-green-700 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Revenue Dashboard Preview</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-background/10 backdrop-blur">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm opacity-80">Today's Revenue</span>
                      <span className="text-2xl font-bold">₹24,580</span>
                    </div>
                    <div className="w-full h-2 bg-background/20 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-background rounded-full" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-background/10 backdrop-blur text-center">
                      <div className="text-2xl font-bold">156</div>
                      <div className="text-sm opacity-80">Orders</div>
                    </div>
                    <div className="p-4 rounded-xl bg-background/10 backdrop-blur text-center">
                      <div className="text-2xl font-bold">₹158</div>
                      <div className="text-sm opacity-80">Avg. Order</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to See It in <span className="text-gradient">Action</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a personalized demo and see how WebGro can transform your food court operations.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Schedule Demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
