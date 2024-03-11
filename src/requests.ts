/**
 * Represents a response from the API.
 */
export type APIResponse<Data> = {
    status: 'ok';
    data: Data;
    url: string;
};

export type URLParameter = {
    name: string;
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
        url: url
    };
}

export function constructURL(base: string, path: string, parameters?: URLParameter[]): string {
    let url = `${base}${path}`;
    if (parameters) url = `${url}/?${parameters.map((value) => `${value.name}=${value.value}`).join('&')}`;
    return url;
}
