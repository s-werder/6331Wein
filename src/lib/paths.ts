const base = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const withBase = (path: string) => `${base}${path.replace(/^\/+/, "")}`;
