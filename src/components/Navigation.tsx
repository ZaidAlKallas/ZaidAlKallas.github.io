"use client";

import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/lib/language";
import { useTheme } from "@/lib/theme";
import { siteConfig } from "@/data/site";
import {
  Sun,
  Moon,
  Globe,
  Menu,
  X,
} from "lucide-react";
import { GithubIcon, LanguageIcon } from "./icons";

const navItems = [
  { key: "home" as const, href: "#home" },
  // { key: "experience" as const, href: "#experience" },
  { key: "education" as const, href: "#education" },
  { key: "skills" as const, href: "#skills" },
  { key: "projects" as const, href: "#projects" },
  { key: "contact" as const, href: "#contact" },
];

export default function Navigation() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    const sections = navItems.map((item) => item.href.replace("#", ""));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const id = requestAnimationFrame(handleScroll);
    return () => cancelAnimationFrame(id);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label={language === "ar" ? "التنقل الرئيسي" : "Main navigation"}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
          >
            {siteConfig.name}
            <span className="text-xs block font-normal text-muted-foreground">
              {t.hero.subtitle}
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  activeSection === item.key
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.nav[item.key]}
                {activeSection === item.key && (
                  <span className="absolute inset-x-1 -bottom-[1px] h-0.5 rounded-full bg-accent" />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={toggleLanguage}
              className="flex h-12 w-20 items-center justify-center rounded-lg text-muted-foreground transition-colors border  hover:bg-accent/10 hover:text-foreground"
              aria-label={
                language === "en" ? t.common.switchToArabic : t.common.switchToEnglish
              }
              title={
                language === "en" ? t.common.switchToArabic : t.common.switchToEnglish
              }
            >
              <Globe className="h-4 w-4" />
              <span className="ms-1 text-xs font-medium">
                {language === "en" ? "العربية" : "English"}
              </span>
            </button>

            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
              aria-label={
                theme === "dark" ? t.common.switchToLight : t.common.switchToDark
              }
              title={
                theme === "dark" ? t.common.switchToLight : t.common.switchToDark
              }
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground sm:flex"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground md:hidden"
              aria-label={
                mobileOpen
                  ? language === "ar"
                    ? "إغلاق القائمة"
                    : "Close menu"
                  : language === "ar"
                  ? "فتح القائمة"
                  : "Open menu"
              }
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex h-full flex-col items-center justify-center gap-2 pt-16">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`text-2xl font-medium transition-colors py-3 ${
                  activeSection === item.key
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.nav[item.key]}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
