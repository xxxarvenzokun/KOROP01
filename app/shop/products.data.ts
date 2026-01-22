export type Product = {
  id: string;
  edition: string;
  title: string;
  description: string;
  image: string;
  price: number;
};

export const products: Product[] = [
  {
    id: "standard",
    edition: "Standard Edition",
    title: "KOROP NFC Chip",
    description:
      "A secure personal NFC chip designed for identity verification, access control and future decentralized integrations.",
    image: "/chip-placeholder.png",
    price: 49,
  },
  {
    id: "pro",
    edition: "Pro Edition",
    title: "KOROP NFC Chip",
    description:
      "Advanced NFC chip with enhanced security layers and extended compatibility for enterprise and private use.",
    image: "/chip-placeholder.png",
    price: 99,
  },
];
