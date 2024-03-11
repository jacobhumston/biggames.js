/**
 * Represents a response from the API.
 */
export type APIResponse<Data> = {
    /** The status of the response. */
    status: 'ok';
    /** The data returned by the response. */
    data: Data;
    /** The url used to get this response. */
    url: URL;
};

/** A URL parameter used to make requests. */
export type URLParameter = {
    /** Value of this parameter. */
    name: string;
    /** Value of this parameter. */
    value: string | number;
};

/**
 * Make a GET request.
 * @param url The url to get the response from.
 * @returns The returned data.
 */
export async function get(url: string): Promise<APIResponse<any>> {
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) throw `Request failed with status ${response.status}.`;
    const json = await response.json();
    return {
        status: json.status,
        data: json.data,
        url: new URL(url)
    };
}

/**
 * Construct a URL.
 * @param base The base of the URL.
 * @param path The path of the URL.
 * @param parameters The parameter of the URL, if any.
 * @returns The created URL.
 */
export function constructURL(base: string, path: string, parameters?: URLParameter[]): string {
    let url = `${base}${path}`;
    if (parameters) url = `${url}/?${parameters.map((value) => `${value.name}=${value.value}`).join('&')}`;
    return url;
}
