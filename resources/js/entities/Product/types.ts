export type TProduct = {
    id: number;
    name: string;
    slug: string;
    category_id: number;
    brand_id: number;
    images: string[];
    description?: string;
    price: number;
    is_active: boolean;
    is_stock: boolean;
    is_featured: boolean;
    is_sale: boolean;
};
