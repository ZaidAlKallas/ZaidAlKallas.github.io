"use client";

import { useLanguage } from "@/lib/language";
import { skillCategories } from "@/data/skills";
import AnimatedSection from "./AnimatedSection";

export default function Skills() {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.skills.sectionTitle}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t.skills.description}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index}>
              <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 h-full">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                  {language === "ar" ? category.titleAr : category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-lg bg-muted px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors group-hover:bg-accent/10 group-hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
