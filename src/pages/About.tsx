import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Heart, Lightbulb, Users, Zap, Shield, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import teamPhoto from "@/assets/team-photo.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We constantly push boundaries to create technology that truly simplifies lives."
  },
  {
    icon: Users,
    title: "Customer Obsession",
    description: "Every feature we build starts with understanding real user pain points."
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We believe in honest communication with our partners and customers."
  },
  {
    icon: Zap,
    title: "Speed of Execution",
    description: "We move fast, iterate quickly, and deliver value continuously."
  },
];

const differences = [
  {
    traditional: "Multiple apps for different restaurants",
    webgro: "One QR for all restaurants"
  },
  {
    traditional: "Manual order taking with errors",
    webgro: "Automated digital ordering"
  },
  {
    traditional: "Long queues at counters",
    webgro: "Order from your table"
  },
  {
    traditional: "No order tracking",
    webgro: "Real-time status updates"
  },
  {
    traditional: "Separate bills for each restaurant",
    webgro: "Unified cart and checkout"
  },
];

const milestones = [
  { year: "2023", title: "Founded", description: "Started with a vision to revolutionize food court dining" },
  { year: "2023", title: "First Pilot", description: "Launched in 5 food courts across Bangalore" },
  { year: "2024", title: "PetPooja Integration", description: "Partnered with India's leading restaurant POS" },
  { year: "2024", title: "50+ Food Courts", description: "Expanded across major cities in India" },
];

export default function About() {
  return (
    <Layout>
      <title>About Us - WebGro | Our Mission, Vision & Story</title>
      <meta name="description" content="Learn about WebGro's mission to transform food court ordering. Discover our founding story, values, and commitment to frictionless dining experiences." />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              We're on a Mission to <span className="text-gradient">Simplify Dining</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              WebGro was born from a simple frustration—why is ordering food in a food court so complicated?
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-10 rounded-3xl bg-secondary/30 border border-border"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To eliminate friction from food court ordering by providing a unified digital platform that connects customers with every restaurant through a single scan. We believe ordering food should be as easy as unlocking your phone.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-primary via-green-600 to-green-700 text-primary-foreground"
            >
              <div className="w-14 h-14 rounded-2xl bg-background/10 backdrop-blur flex items-center justify-center mb-6">
                <Heart className="h-7 w-7" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Our Vision</h2>
              <p className="opacity-90 leading-relaxed">
                A world where every food court, mall, and dining hub offers seamless digital ordering. We envision becoming the operating system for food courts globally—powering millions of orders while creating value for all stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                The Story <span className="text-gradient">Behind WebGro</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  It all started with a frustrating lunch break. Our founders were at a busy mall food court, hungry and in a hurry. They spent 20 minutes just figuring out which restaurant had what, standing in multiple queues, and waiting for orders they couldn't track.
                </p>
                <p>
                  "There has to be a better way," they thought. In an era where you can book flights, order groceries, and manage your entire life from your phone—why was ordering food in a food court still stuck in the Stone Age?
                </p>
                <p>
                  That moment of frustration sparked WebGro. We set out to build the platform we wished existed—one where a single QR scan opens up the entire food court, where you can order from multiple restaurants in one cart, and where you know exactly when your food will be ready.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <img 
                src={teamPhoto} 
                alt="WebGro Team" 
                className="relative w-full rounded-2xl shadow-elevated"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Difference */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              What Makes Us <span className="text-gradient">Different</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We're not just another food ordering app. We're building infrastructure for the future of food courts.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-4 mb-4 px-4">
              <div className="text-center font-semibold text-muted-foreground">Traditional Way</div>
              <div className="text-center font-semibold text-primary">WebGro Way</div>
            </div>
            
            {differences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="grid grid-cols-2 gap-4 mb-4"
              >
                <div className="p-4 rounded-xl bg-secondary/50 border border-border text-sm text-muted-foreground">
                  {item.traditional}
                </div>
                <div className="p-4 rounded-xl bg-accent border border-primary/20 text-sm font-medium text-accent-foreground">
                  {item.webgro}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide every decision we make.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start gap-6 pb-8 last:pb-0"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-sm font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  {index < milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold mb-1">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-green-600 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Join Us in Shaping the Future
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Whether you're a food court operator, restaurant owner, or just someone who shares our vision—let's connect.
            </p>
            <Button size="xl" className="bg-background text-primary hover:bg-background/90" asChild>
              <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
