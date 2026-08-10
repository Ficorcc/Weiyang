export const taxonomySlug = (value: string) => value.trim().toLowerCase().replace(/\s+/g, "-");

export const categoryUrl = (category: string) => `/categories/${taxonomySlug(category)}/`;

export const tagUrl = (tag: string) => `/tags/${taxonomySlug(tag)}/`;
