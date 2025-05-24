"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Frame, Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      // Cache le header quand on scroll vers le bas, et le réaffiche quand on remonte
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      // Ferme le menu mobile si on scrolle
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]); // Ajout de isMobileMenuOpen dans les dépendances

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
      <header
          className={cn(
              "fixed top-0 w-full z-50 transition-all duration-200",
              isScrolled && !isMobileMenuOpen ? "bg-background/80 backdrop-blur-md border-b" : "bg-background md:bg-transparent"
          )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Frame className="h-6 w-6" />
            <span>Portfolio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-foreground/80",
                        pathname === item.href ? "text-foreground" : "text-foreground/60",
                    )}
                >
                  {item.label}
                </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
            <div className="md:hidden fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm">
              <nav className="container flex flex-col items-center justify-center gap-6 p-8 h-full">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                            "text-lg font-medium transition-colors hover:text-foreground/80",
                            pathname === item.href ? "text-foreground" : "text-foreground/60",
                        )}
                    >
                      {item.label}
                    </Link>
                ))}
              </nav>
            </div>
        )}
      </header>
  )
}