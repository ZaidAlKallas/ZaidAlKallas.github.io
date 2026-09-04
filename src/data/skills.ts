import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    titleAr: "البرمجة",
    skills: ["C#", "JavaScript", "SQL", "PL/SQL"],
  },
  {
    title: ".NET / Backend",
    titleAr: ".NET / الخلفية",
    skills: [
      ".NET 10",
      "ASP.NET Core",
      "Minimal APIs",
      "ASP.NET Core MVC",
      "Blazor",
      "Entity Framework Core",
      "ADO.NET",
    ],
  },
  {
    title: "Databases",
    titleAr: "قواعد البيانات",
    skills: ["PostgreSQL", "SQL Server", "Oracle", "SQLite"],
  },
  {
    title: "Architecture & Engineering",
    titleAr: "الهندسة والعمارة",
    skills: [
      "Vertical Slice Architecture",
      "REST APIs",
      "Authentication & Authorization",
      "JWT",
      "Refresh Tokens",
      "OAuth",
      "FluentValidation",
      "Integration Testing",
      "Health Checks",
      "Rate Limiting",
    ],
  },
  {
    title: "DevOps / Infrastructure",
    titleAr: "DevOps / البنية التحتية",
    skills: [
      "Docker",
      "GitHub Actions",
      "Git",
      "GitHub",
      "Redis",
      "Serilog",
      "Hangfire",
    ],
  },
  {
    title: "Application Development",
    titleAr: "تطوير التطبيقات",
    skills: [".NET MAUI", "MVVM", "Bootstrap"],
  },
];
