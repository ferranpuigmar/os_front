export type RouteTrasnlations = {
  [key: string]: {
    [key: string]: string;
  };
};

export const pathTranslations: RouteTrasnlations = {
  ca: {
    "/about": "/sobre-nosaltres",
  },
  es: {
    "/about": "/sobre-nosotros",
  },
  en: {
    "/about": "/about-us",
  },
};
