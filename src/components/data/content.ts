import { IMAGES } from './images';

export interface Product {
  id: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  anchor: string;
}

export const products: Product[] = [
  {
    id: 'supermarket-racks',
    title: 'Supermarket Racks',
    imageSrc: IMAGES.supermarketRacks.wallUnit,
    anchor: '#supermarket-racks',
  },
  {
    id: 'display-racks',
    title: 'Display Racks',
    imageSrc: IMAGES.displayRacks.cornerRack,
    anchor: '#display-racks',
  },
  {
    id: 'departmental-racks',
    title: 'Departmental Store Racks',
    imageSrc: IMAGES.departmentalRacks.cornerRack,
    anchor: '#departmental-racks',
  },
  {
    id: 'slotted-angle',
    title: 'Slotted Angle Racks',
    imageSrc: IMAGES.displayRacks.wallMounted,
    anchor: '#display-racks',
  },
  {
    id: 'heavy-duty',
    title: 'Heavy Duty Storage',
    imageSrc: IMAGES.heavyDuty.warehouseRack,
    anchor: '#heavy-duty-racks',
  },
  {
    id: 'custom-fixtures',
    title: 'Custom Display Fixtures',
    imageSrc: IMAGES.customSolutions.glassDisplay,
    anchor: '#custom-solutions',
  },
  {
    id: 'cash-counters',
    title: 'Cash Counters & Accessories',
    imageSrc: IMAGES.accessories.cashCounter,
    anchor: '#heavy-duty-racks',
  },
  {
    id: 'locker-cupboards',
    title: 'Locker Cupboards',
    imageSrc: IMAGES.customSolutions.woodenMetal,
    anchor: '#custom-solutions',
  },
];

export const processSteps = [
  { number: '01', title: 'Requirement\nUnderstanding' },
  { number: '02', title: 'Store Measurement\n& Planning' },
  { number: '03', title: 'Design & Layout\nDevelopment' },
  { number: '04', title: 'Manufacturing' },
  { number: '05', title: 'Final Quality\nInspection' },
  { number: '06', title: 'Delivery &\nInstallation' },
];

export interface Industry {
  number: string;
  label: string;
  imageSrc: string;
}

export const industries: Industry[] = [
  { number: '01', label: 'Supermarkets', imageSrc: IMAGES.industries.photo1 },
  { number: '02', label: 'Grocery Stores', imageSrc: IMAGES.industries.photo2 },
  { number: '03', label: 'Departmental Stores', imageSrc: IMAGES.industries.photo3 },
  { number: '04', label: 'Gift Shops', imageSrc: IMAGES.industries.photo4 },
  { number: '05', label: 'Footwear Stores', imageSrc: IMAGES.industries.photo5 },
  { number: '06', label: 'Electronics Stores', imageSrc: IMAGES.industries.photo6 },
  { number: '07', label: 'Cosmetic Stores', imageSrc: IMAGES.industries.photo7 },
  { number: '08', label: 'Stationery Shops', imageSrc: IMAGES.industries.photo8 },
];

export interface Client {
  id: string;
  imageSrc: string;
  alt: string;
}

export const clients: Client[] = [
  { id: 'c1', imageSrc: IMAGES.clients.logo1, alt: 'Client 1' },
  { id: 'c2', imageSrc: IMAGES.clients.logo2, alt: 'Client 2' },
  { id: 'c3', imageSrc: IMAGES.clients.logo3, alt: 'Client 3' },
  { id: 'c4', imageSrc: IMAGES.clients.logo4, alt: 'Client 4' },
  { id: 'c5', imageSrc: IMAGES.clients.logo5, alt: 'Client 5' },
  { id: 'c6', imageSrc: IMAGES.clients.logo6, alt: 'Client 6' },
  { id: 'c7', imageSrc: IMAGES.clients.logo7, alt: 'Client 7' },
  { id: 'c8', imageSrc: IMAGES.clients.logo8, alt: 'Client 8' },
  { id: 'c9', imageSrc: IMAGES.clients.logo9, alt: 'Client 9' },
  { id: 'c10', imageSrc: IMAGES.clients.logo10, alt: 'Client 10' },
  { id: 'c11', imageSrc: IMAGES.clients.logo11, alt: 'Client 11' },
  { id: 'c12', imageSrc: IMAGES.clients.logo12, alt: 'Client 12' },
];
