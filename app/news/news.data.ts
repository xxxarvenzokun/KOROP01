export type NewsItem = {
  id: string;
  title: string;
  date: string;
  description: string;
};

export const newsData: NewsItem[] = [
  {
    id: "korop-launch",
    title: "KOROP Platform Launch",
    date: "2026-03-12",
    description:
      "We officially launched the KOROP personal NFC identity platform. This is the foundation of a secure, decentralized access system.",
  },
  {
    id: "nfc-security",
    title: "Enhanced NFC Security",
    date: "2026-03-28",
    description:
      "A new security layer has been deployed to protect NFC profiles from cloning and unauthorized access attempts.",
  },
];
