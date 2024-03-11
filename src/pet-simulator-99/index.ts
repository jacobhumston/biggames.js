// Import request related types and methods.
import { get, constructURL, APIResponse, URLParameter } from '../requests.js';

/**
 * API class for Pet Simulator 99.
 * - REFERENCE: https://docs.biggamesapi.io/
 */
export class PetSimulator99 {
    /** Base url. (Could also be considered/called the api url.) */
    #base: string = 'https://biggamesapi.io/api/';

    /** Core url. */
    #core: string = 'https://biggamesapi.io/';

    /**
     * Types of data from Pet Simulator 99's in-game configuration files. Each of these may be queried. These are like tables of a database.
     * @returns List of collections.
     */
    async collections(): Promise<APIResponse<string[]>> {
        return await get(constructURL(this.#base, 'collections'));
    }

    /**
     * The details from the specified collection. This contains a list of configuration data from the game configuration files. These are like rows of a database.
     * @param name The name of the collection.
     * @returns Derails from the specified collection.
     */
    async collection(name: string): Promise<APIResponse<any>> {
        return await get(constructURL(this.#base, `collection/${name}`));
    }

    /**
     * An overview of all the clans.
     * @param page Page index.
     * @param pageSize Size of the page.
     * @param sort How to sort the page.
     * @param sortOrder In what order to sort the page.
     * @returns Details of the clans within this page.
     */
    async clans(
        page?: number,
        pageSize?: number,
        sort?: 'DepositedDiamonds' | 'Points' | 'Created',
        sortOrder?: 'asc' | 'desc'
    ): Promise<APIResponse<any>> {
        const parameters: URLParameter[] = [
            {
                name: 'page',
                value: page ?? 1
            },
            {
                name: 'pageSize',
                value: pageSize ?? 100
            },
            {
                name: 'sort',
                value: sort ?? 'Points'
            },
            {
                name: 'sortOrder',
                value: sortOrder ?? 'desc'
            }
        ];
        return await get(constructURL(this.#base, 'clans', parameters));
    }

    /**
     * The details of a specific clan.
     * @param name Name of the clan.
     * @returns The details of the specified clan.
     */
    async clan(name: string): Promise<APIResponse<any>> {
        return await get(constructURL(this.#base, `clan/${name}`));
    }

    /**
     * Exists data for each item and pet in the game.
     * @returns Data for each item and pet in the game.
     */
    async exists(): Promise<APIResponse<any>> {
        return await get(constructURL(this.#base, 'exists'));
    }

    /**
     * RAP data for each item and pet in the game.
     * @returns The RAP data for each item and pet in the game.
     */
    async rap(): Promise<APIResponse<any>> {
        return await get(constructURL(this.#base, 'rap'));
    }

    /**
     * The latest clan battle, whether active or not.
     * @returns The latest clan battle, whether active or not.
     */
    async activeClanBattle(): Promise<APIResponse<any>> {
        return await get(constructURL(this.#base, 'activeClanBattle'));
    }

    /**
     * Displays a Roblox library asset as an image by proxing the request.
     * Note: `rbxassetid://` will be automatically removed for you if provided in the ID.
     * @param id The ID of the roblox image asset.
     * @returns The URL for the proxied image.
     */
    image(id: string | number): string {
        if (typeof id === 'string') id.replace('rbxassetid://', '');
        return constructURL(this.#core, `image/${id}`);
    }
}
