import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "budgetfriend-api",
    title: "BudgetFriend API",
    titleAr: "واجهة برمجة تطبيقات BudgetFriend",
    description:
      "A personal finance REST API built with modern .NET, designed to manage accounts, transactions, categories, transfers, authentication, and financial summaries. Built using Vertical Slice Architecture with comprehensive validation, logging, and testing.",
    descriptionAr:
      "واجهة برمجة تطبيقات REST للتمويل الشخصي مبنية بتقنيات .NET الحديثة، مصممة لإدارة الحسابات والمعاملات والتصنيفات والتحويلات والمصادقة والملخصات المالية. مبنية باستخدام Vertical Slice Architecture مع التحقق الشامل والتسجيل والاختبارات.",
    technologies: [
      "C#",
      ".NET 10",
      "ASP.NET Core",
      "Minimal APIs",
      "PostgreSQL",
      "Entity Framework Core",
      "JWT",
      "Refresh Tokens",
      "FluentValidation",
      "Serilog",
      "Docker",
      "GitHub Actions",
      "Health Checks",
      "Rate Limiting",
      "Redis",
    ],
    category: "web",
    categoryAr: "ويب",
    featured: true,
    githubUrl: "https://github.com/ZaidAlKallas/BudgetFriend",
  },
  {
    id: "budgetfriend-maui",
    title: "BudgetFriend .NET MAUI",
    titleAr: "BudgetFriend .NET MAUI",
    description:
      "A cross-platform personal finance application built with .NET MAUI, featuring MVVM architecture, SQLite local storage, bilingual support (Arabic/English), and encrypted backups.",
    descriptionAr:
      "تطبيق تمويل شخصي متعدد المنصات مبني بـ .NET MAUI، يتميز بعمارية MVVM وتخزين محلي SQLite ودعم ثنائي اللغة (العربية/الإنجليزية) ونسخ احتياطي مشفر.",
    technologies: [
      ".NET MAUI",
      "MVVM",
      "SQLite",
      "Localization",
      "Encryption",
    ],
    category: "mobile",
    categoryAr: "محمول",
    githubUrl: "https://github.com/ZaidAlKallas/BudgetFriend",
  },
  {
    id: "click-eat",
    title: "Click&Eat",
    titleAr: "Click&Eat",
    description:
      "A full-stack restaurant management system with role-based workflows, secure authentication, order management, and background job processing using Hangfire.",
    descriptionAr:
      "نظام متكامل لإدارة المطاعم، يتضمن سير عمل قائمًا على الأدوار، ومصادقة آمنة، وإدارة الطلبات، ومعالجة المهام في الخلفية باستخدام Hangfire.",
    technologies: [
      "C#",
      ".NET 8",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "SQL Server",
      "Identity",
      "Bootstrap",
      "jQuery",
      "Hangfire",
    ],
    category: "web",
    categoryAr: "ويب",
    githubUrl: "",
    liveUrl: "http://click-and-eat.runasp.net/",
  },
];
