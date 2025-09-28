export type NavItem = {
  name: string;
  path: string;
  subItems?: NavItem[];
};

export const AUTH_NAV_ITEMS: NavItem[] = [
  { name: 'Beranda', path: '/' },
  { name: 'Materi', path: '/materi' },
  { name: 'Tryout', path: '/tryout' },
  { name: 'Jadwal', path: '/jadwal' },
  { name: 'Paket Belajar', path: '/paket-belajar' },
];

export const UNAUTH_NAV_ITEMS: NavItem[] = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang Kami', path: '/tentang-kami' },
  { name: 'Paket', path: '/paket' },
];