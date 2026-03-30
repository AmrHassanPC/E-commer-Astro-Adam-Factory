export interface Product {
    id: string;
    name: string;
    title: string; // compatibility with home.ts
    price: number;
    description: string;
    category: string;
    subcategory?: string;
    stock: number;
    images: string[];
    slug: string;
    badge?: string;
    discount?: number;
    specs?: { label: string; value: string }[];
}

export const products: Product[] = [
    {
        id: "1",
        name: "MacBook Pro 16 M3 Max",
        title: "MacBook Pro 16 M3 Max",
        price: 3499,
        description: "The most powerful MacBook Pro ever. With the lightning-fast M3 Max chip, advanced thermal architecture, and a stunning Liquid Retina XDR display, it's designed for those who demand the absolute best in performance and portability.",
        category: "Computers",
        subcategory: "notebooks",
        stock: 5,
        images: [
            "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "macbook-pro-16-m3-max",
        badge: "Premium",
        discount: 5,
        specs: [
            { label: "Processor", value: "Apple M3 Max" },
            { label: "Memory", value: "32GB Unified" },
            { label: "Storage", value: "1TB SSD" },
            { label: "Display", value: "16.2-inch XDR" }
        ]
    },
    
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getRelatedProducts = (category: string, currentSlug: string) =>
    products.filter(p => p.category === category && p.slug !== currentSlug).slice(0, 4);
