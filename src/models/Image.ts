import type {StrapiItem} from "./StrapiItem.ts";

export interface Image extends StrapiItem {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    format: FormatImage;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: unknown | null;
}

export type FormatImageName = "large" | "small" | "medium" | "thumbnail";

export interface FormatImageData {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
}

export interface FormatImage extends Record<FormatImageName, FormatImageData> {
}