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
        name: "انتريه سيركل",
        title: "انتريه سيركل", // compatibility with home.ts
        price: 26500,
        description: "طقم انتريه سيركل مكون من 2 كنبة + 2 كرسي، الكنب قابل للفتح سرير ومناسب للاستخدام اليومي واستقبال الضيوف. الخامات تشمل خشب زان، إسفنج سوفت كثافة 35، وقماش BOSS مستورد.",
        category: "انتريهات",
        stock: 1,
        images: [
            "/images/products/circle/1.jpeg",
            "/images/products/circle/2.jpeg",
            "/images/products/circle/3.jpeg",
            "/images/products/circle/4.jpeg",
            "/images/products/circle/5.jpeg"
        ],
        slug: "circle-set",
        badge: "New",
        discount: 0,
        specs: [
            { label: "العدد", value: "2 كنبة + 2 كرسي" },
            { label: "الكنب", value: "قابل للفتح سرير" },
            { label: "الخشب", value: "زان" },
            { label: "السفنج", value: "سوفت كثافة 35" },
            { label: "القماش", value: "BOSS مستورد" }
        ]
    },
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getRelatedProducts = (category: string, currentSlug: string) =>
    products.filter(p => p.category === category && p.slug !== currentSlug).slice(0, 4);