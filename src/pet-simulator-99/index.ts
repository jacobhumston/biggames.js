import { get, constructURL, APIResponse, URLParameter } from '../requests.js';

export class PetSimulator99 {
    #base: string = 'https://biggamesapi.io/api/';

    async collections(): Promise<APIResponse<string[]>> {
        return await get(constructURL(this.#base, 'collections'));
    }

    async collection(name: string): Promise<APIResponse<any>> {
        return await get(constructURL(this.#base, `collection/${name}`));
    }

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

    async clan(name: string): Promise<APIResponse<any>> {
        return await get(constructURL(this.#base, `clan/${name}`));
    }

    async exists(): Promise<APIResponse<any>> {
        return await get(constructURL(this.#base, 'exists'));
    }

    async rap(): Promise<APIResponse<any>> {
        return await get(constructURL(this.#base, 'rap'));
    }

    async activeClanBattle(): Promise<APIResponse<any>> {
        return await get(constructURL(this.#base, 'activeClanBattle'));
    }

    image(id: string|number): string {
        return constructURL(this.#base, `image/${id}`);
    }
}
