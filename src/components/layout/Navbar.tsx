import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/webgro-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  // { name: "Product", path: "/product" },
  { name: "Features", path: "/product#features" },
  { name: "How It Works", path: "/product#how-it-works" },
  { name: "Integrations", path: "/product#integrations" },
  { name: "Pricing", path: "/product#pricing" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  // Track which section is currently in view
  useEffect(() => {
    if (location.pathname !== "/product") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["features", "how-it-works", "integrations", "pricing"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
      }
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.includes("#")) {
      e.preventDefault();
      const [pathname, hash] = path.split("#");

      if (location.pathname === pathname) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        navigate(pathname);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
      setIsOpen(false);
    }
  };

  // Check if a nav link should be highlighted
  const isLinkActive = (link: { name: string; path: string }) => {
    // For hash-based links on Product page
    if (link.path.includes("#")) {
      const hash = link.path.split("#")[1];
      return location.pathname === "/product" && activeSection === hash;
    }

    // For Product page link - only highlight if no section is active
    if (link.path === "/product") {
      return location.pathname === "/product" && activeSection === "";
    }

    // For other regular pages
    return location.pathname === link.path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 ">
            <img src={logo} alt="WebGro" className="h-[150px]  w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`relative text-sm font-medium transition-colors duration-200 ${isLinkActive(link)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="hero" size="sm" asChild>
              <Link to="/contact">Request Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => {
                    handleNavClick(e, link.path);
                    if (!link.path.includes("#")) {
                      setIsOpen(false);
                    }
                  }}
                  className={`block py-2 text-sm font-medium transition-colors ${isLinkActive(link)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-2 border-t border-border">
                <Button variant="ghost" size="sm" className="w-full justify-center">
                  Login
                </Button>
                <Button variant="hero" size="sm" className="w-full justify-center" asChild>
                  <Link to="/contact">Request Demo</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
