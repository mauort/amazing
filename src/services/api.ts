export interface Product{
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

const BASE_URL = 'https://fakestoreapi.com';

export const apiService  = {

    async getProducts(): Promise<Product[]> {
        const response= await fetch(`${BASE_URL}/products`);
        if (!response.ok) throw new Error('Could not obtain products');
        return await response.json();
    },

    async getCategories(): Promise<string[]> {
        const response = await fetch(`${BASE_URL}/products/categories`);
        if (!response.ok) throw new Error('Could not obtain categories');
        return await response.json();
    },

    async getProductsByCategory(category: string): Promise<Product[]> {
        const response = await fetch(`${BASE_URL}/products/category/${category}`);
        if (!response.ok) throw new Error(`Could not obtain ${category}`);
        return await response.json();
    },

    async getProductById(id: number): Promise<Product> {
        const response = await fetch(`${BASE_URL}/products/${id}`);
        if (!response.ok) throw new Error(`Could not obtain product ${id}`);
        return await response.json();
    },

};
