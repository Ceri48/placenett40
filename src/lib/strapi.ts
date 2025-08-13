import qs from 'qs';

const BASE =
    import.meta.env.PUBLIC_STRAPI_URL ??
    import.meta.env.STRAPI_URL ??
    'http://localhost:1337';

const TOKEN =
    import.meta.env.PUBLIC_STRAPI_TOKEN ??
    import.meta.env.STRAPI_TOKEN ??
    '';

type FetchOpts = {
    query?: Record<string, any>;
    init?: RequestInit; // pour passer d'autres options fetch si besoin
};

export async function strapiGet<T>(path: string, opts: FetchOpts = {}): Promise<T> {
    const url = new URL(path.startsWith('http') ? path : `${BASE}${path}`);

    if (opts.query) {
        url.search = qs.stringify(opts.query, {
            encodeValuesOnly: true,
            arrayFormat: 'brackets',
        });
    }

    const headers: Record<string, string> = {
        ...(TOKEN ? {Authorization: `Bearer ${TOKEN}`} : {}),
        ...(opts.init?.headers as Record<string, string> | undefined),
    };

    const res = await fetch(url.toString(), {...opts.init, headers});

    if (!res.ok) {
        throw new Error(`Strapi ${res.status}: ${await res.text()}`);
    }
    return res.json() as Promise<T>;
}

export function absUrl(url?: string) {
    if (!url) return null;
    return url.startsWith('http') ? url : `${BASE}${url}`;
};