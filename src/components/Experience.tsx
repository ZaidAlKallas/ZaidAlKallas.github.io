"use client";

import { useLanguage } from "@/lib/language";
import { experience } from "@/data/experience";
import AnimatedSection from "./AnimatedSection";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.experience.sectionTitle}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t.experience.description}
            </p>
          </div>
        </AnimatedSection>

        {experience.length === 0 ? (
          <AnimatedSection>
            <p className="text-muted-foreground">{t.experience.empty}</p>
          </AnimatedSection>
        ) : (
          <div className="space-y-6">
            {experience.map((entry, index) => (
              <AnimatedSection key={index}>
                <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {language === "ar"
                              ? entry.positionAr
                              : entry.position}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {language === "ar" ? entry.companyAr : entry.company}
                            {entry.location &&
                              ` · ${
                                language === "ar"
                                  ? entry.locationAr
                                  : entry.location
                              }`}
                          </p>
                        </div>
                      </div>
                      <p className="mb-4 ms-[52px] text-sm leading-relaxed text-muted-foreground">
                        {language === "ar"
                          ? entry.descriptionAr
                          : entry.description}
                      </p>
                      <div className="ms-[52px] flex flex-wrap gap-2">
                        {entry.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="whitespace-nowrap text-sm font-medium text-muted-foreground sm:text-end">
                      {language === "ar" ? entry.dateAr : entry.date}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
