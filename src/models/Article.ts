import type {StrapiItem} from "./StrapiItem.ts";

export interface Article {
    titre: string;
    slug: string;
    excerpt?: string;
    content?: string;
    cover?: { data?: StrapiItem & { url: string; alternativeText?: string } };
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        canonicalURL?: string;
        noindex?: boolean;
        shareImage?: { data?: StrapiItem & { url: string; alternativeText?: string } }
    };
    locale?: string;
    localizations?: { data: Array<StrapiItem & Article> };
}