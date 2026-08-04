import { IMAGES } from './images';

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  imageSrc: string;
  description: string;
  features: string[];
}

export interface ProductCategoryGroup {
  id: string;
  title: string;
  description: string;
  items: ProductItem[];
}

export const productCategories: ProductCategoryGroup[] = [
  {
    id: 'five-rack-options',
    title: 'Five Core Rack Options',
    description: 'Versatile, high-strength racking options engineered for modern supermarket, grocery, and departmental store layouts.',
    items: [
      {
        id: 'wall-unit-back-panel',
        name: 'Wall Unit With Back Panel',
        category: 'Five Rack Options',
        imageSrc: IMAGES.supermarketRacks.wallUnit,
        description: 'Heavy-duty perimeter wall rack with solid or perforated back panels, ideal for organized multi-tier product displays along store walls.',
        features: [
          'Solid metal / perforated back panel options',
          'Adjustable shelf height brackets with multi-angle tilt',
          'Powder-coated scratch resistant finish',
          'High load bearing capacity per shelf (80kg - 150kg)',
        ],
      },
      {
        id: 'double-side-rack',
        name: 'Double Side Island Rack',
        category: 'Five Rack Options',
        imageSrc: IMAGES.supermarketRacks.doubleSide,
        description: 'Double-sided center aisle racking system designed to maximize store floor space and facilitate smooth customer walkthrough traffic.',
        features: [
          'Dual-sided display configuration for high storage capacity',
          'Modular extension bays for continuous aisle setup',
          'Built-in price tag holders & stopper rails',
          'Stable T-leg or flat base support structure',
        ],
      },
      {
        id: 'end-cap-display',
        name: 'End Cap Rack',
        category: 'Five Rack Options',
        imageSrc: IMAGES.supermarketRacks.endCap,
        description: 'Promotional end-of-aisle racking unit designed to highlight promotional offers, high-margin products, and seasonal impulse buys.',
        features: [
          'High-visibility end-aisle positioning',
          'Custom header branding / topper sign compatibility',
          'Compact footprint maximizing retail floor productivity',
          'Compatible with double-sided main aisle runs',
        ],
      },
      {
        id: 'corner-rack-unit',
        name: 'Corner Rack Unit',
        category: 'Five Rack Options',
        imageSrc: IMAGES.departmentalRacks.cornerRack,
        description: 'Specialized 90-degree corner racking module that seamlessly connects wall runs, converting dead corner spaces into active display areas.',
        features: [
          'Seamless 90-degree corner transition',
          'Maximizes store perimeter utilization',
          'Matches height and shelf depth of standard wall units',
          'Durable steel frame construction',
        ],
      },
      {
        id: 'wall-mounted-unit',
        name: 'Wall Mounted Unit',
        category: 'Five Rack Options',
        imageSrc: IMAGES.departmentalRacks.wallMounted,
        description: 'Direct wall-anchored shelving units providing a clean, floating aesthetic while keeping store floor space completely open.',
        features: [
          'Space-saving floor clearance',
          'Heavy-duty wall upright channels',
          'Flexible shelf depth options',
          'Ideal for boutique & departmental stores',
        ],
      },
    ],
  },
  {
    id: 'display-fixtures',
    title: 'Display Rack & Retail Fixtures',
    description: 'Category-specific retail display units crafted to showcase apparel, gifts, stationery, cosmetics, and specialty merchandise.',
    items: [
      {
        id: 'garment-fashion-display',
        name: 'Garment & Fashion Displays',
        category: 'Display Rack & Retail Fixtures',
        imageSrc: IMAGES.displayRacks.garmentDisplay,
        description: 'Stylish garment hanging and folded apparel display systems with chrome-plated hanging arms, waterfall pegs, and wooden shelves.',
        features: [
          'Integrated hanging bars and waterfall hooks',
          'Combines wooden shelving with metallic uprights',
          'Heavy-weight garment load support',
          'Modern boutique aesthetic',
        ],
      },
      {
        id: 'gift-stationery-display',
        name: 'Gift & Stationery Displays',
        category: 'Display Rack & Retail Fixtures',
        imageSrc: IMAGES.displayRacks.giftStationery,
        description: 'Multi-tiered shallow shelf units engineered for books, greeting cards, fancy gifts, and office stationery items.',
        features: [
          'Slanted magazine / card display shelves',
          'Clear acrylic front lips for product visibility',
          'Compact compartment divisions',
          'Bright aesthetic finish',
        ],
      },
      {
        id: 'gift-kids-rack',
        name: 'Gift & Kids Store Rack',
        category: 'Display Rack & Retail Fixtures',
        imageSrc: IMAGES.displayRacks.cornerRack,
        description: 'Vibrant, safe, and accessible toy & children merchandise display units designed for high visibility and easy browsing.',
        features: [
          'Child-safe rounded corner edges',
          'Colorful powder coat options',
          'Deep basket shelf compatibility for plush toys',
          'Easy customer accessibility',
        ],
      },
      {
        id: 'cosmetic-personal-care',
        name: 'Cosmetic & Personal Care Displays',
        category: 'Display Rack & Retail Fixtures',
        imageSrc: IMAGES.customSolutions.glassDisplay,
        description: 'Premium glass and LED illuminated cosmetics display cases designed to create a high-end luxury shopping environment.',
        features: [
          'Toughened glass shelves & lockable glass doors',
          'Integrated LED strip lighting channels',
          'Mirrored back panels for enhanced illumination',
          'Dust-proof enclosed display sections',
        ],
      },
      {
        id: 'wooden-metal-rack',
        name: 'Wooden Finish Display Rack',
        category: 'Display Rack & Retail Fixtures',
        imageSrc: IMAGES.displayRacks.woodenRack,
        description: 'Warm natural wood grain shelves paired with dark steel frames, perfect for organic food, bakery, liquor, and premium retail themes.',
        features: [
          'High-grade laminated / solid wood shelving',
          'Architectural matte black metal framing',
          'Warm artisan retail aesthetic',
          'Custom wood stain finishes available',
        ],
      },
    ],
  },
  {
    id: 'customized-solutions',
    title: 'Customized Retail Solutions',
    description: 'Tailor-made retail fixtures engineered around your exact store dimensions, brand identity, and merchandise specifications.',
    items: [
      {
        id: 'wooden-metal-combo',
        name: 'Wooden & Metal Combination Units',
        category: 'Customized Retail Solutions',
        imageSrc: IMAGES.customSolutions.woodenMetal,
        description: 'Hybrid racking structures seamlessly integrating solid wood elements with industrial metal uprights for high-end boutique stores.',
        features: [
          'Custom wood veneer matching store interior',
          'Modular metal support posts',
          'Integrated branding panel headers',
          'Tailored dimensions per floor plan',
        ],
      },
      {
        id: 'glass-display-units',
        name: 'Glass Display Cabinets',
        category: 'Customized Retail Solutions',
        imageSrc: IMAGES.customSolutions.glassDisplay,
        description: 'Secure, dust-free glass showcases equipped with lockable sliding glass doors and concealed LED spot lighting.',
        features: [
          'Tempered safety glass construction',
          'Keyed security plunger locks',
          'Spotlight & perimeter lighting',
          'Ideal for jewelry, electronics & luxury goods',
        ],
      },
      {
        id: 'hanging-hook-systems',
        name: 'Hanging & Hook Pegboard Systems',
        category: 'Customized Retail Solutions',
        imageSrc: IMAGES.customSolutions.hangingSystem,
        description: 'Versatile perforated pegboard and slatwall racking with single/double prong chrome hooks for carded merchandise.',
        features: [
          'Heavy-duty perforated back sheets',
          'Quick-change hook placement',
          'Assorted hook lengths (4", 6", 8", 10")',
          'Price label holder attachments',
        ],
      },
      {
        id: 'slotted-rack-custom',
        name: 'Slotted Angle Modular Systems',
        category: 'Customized Retail Solutions',
        imageSrc: IMAGES.customSolutions.slottedRack,
        description: 'Ultra-flexible slotted angle shelving built to custom heights, depths, and shelf counts for backroom or store storage.',
        features: [
          'Adjustable angle hole patterns',
          'Economical & durable storage solution',
          'Custom width/length cutting available',
          'High utility load capacity',
        ],
      },
    ],
  },
  {
    id: 'heavy-duty-racking',
    title: 'Heavy Duty Storage Racks',
    description: 'Industrial-grade pallet and bulk storage racking systems designed for logistics centers, warehouses, and commercial stockrooms.',
    items: [
      {
        id: 'warehouse-pallet-rack',
        name: 'Warehouse Pallet & Bulk Storage Rack',
        category: 'Heavy Duty Storage Racks',
        imageSrc: IMAGES.heavyDuty.warehouseRack,
        description: 'Heavy structural steel racking engineered for fork-lift access, pallet storage, and heavy industrial inventory management.',
        features: [
          'Load capacity up to 1000kg - 3000kg per level',
          'Heavy beam connection connectors with safety locks',
          'Powder-coated columns and galvanized decking',
          'Custom vertical height frame options up to 20 feet',
        ],
      },
      {
        id: 'industrial-storage-unit',
        name: 'Industrial Multi-Tier Storage Rack',
        category: 'Heavy Duty Storage Racks',
        imageSrc: IMAGES.heavyDuty.industrialStorage,
        description: 'High-density multi-tier shelving systems maximizing vertical warehouse volume for spare parts and carton storage.',
        features: [
          'Multi-level floor mezzanine integration',
          'Heavy steel shelf decking panels',
          'Impact-resistant column guard protectors',
          'Engineered structural load safety factors',
        ],
      },
    ],
  },
  {
    id: 'slotted-angle-racks',
    title: 'Slotted Angle Racks',
    description: 'Versatile steel slotted angle shelving suitable for record rooms, archives, back-office storage, and hardware shops.',
    items: [
      {
        id: 'slotted-angle-standard',
        name: 'Standard Slotted Angle Rack',
        category: 'Slotted Angle Racks',
        imageSrc: IMAGES.customSolutions.slottedRack,
        description: 'Precision-punched slotted angle posts with steel shelf plates, corner gussets, and nut-bolt assembly for reliable stock holding.',
        features: [
          'High quality cold-rolled steel channels',
          'Corrosion-proof oven-baked powder coat',
          'Corner gusset plates for rigid stability',
          'Easy reassembly & height modification',
        ],
      },
    ],
  },
  {
    id: 'retail-accessories',
    title: 'Retail Accessories & Counters',
    description: 'Essential supporting retail fixtures including checkout cash counters, shopping trolleys, dump bins, and display accessories.',
    items: [
      {
        id: 'shopping-trolleys',
        name: 'Shopping Trolleys & Baskets',
        category: 'Retail Accessories',
        imageSrc: IMAGES.accessories.trolleys,
        description: 'Smooth-rolling zinc-plated supermarket shopping trolleys and stackable hand baskets for effortless customer convenience.',
        features: [
          'Heavy-duty swivel polyurethane casters',
          'Child seat attachment option',
          'Rust-resistant chrome / zinc plating',
          'Ergonomic plastic handle grip',
        ],
      },
      {
        id: 'checkout-cash-counter',
        name: 'Checkout Cash Counter',
        category: 'Retail Accessories',
        imageSrc: IMAGES.accessories.cashCounter,
        description: 'Ergonomic checkout counter table featuring stainless steel top, conveyor/flat surface options, and lockable cash drawer space.',
        features: [
          'Stainless steel top surface sheet',
          'Integrated POS scanner & drawer cutout',
          'Front impulse candy display shelves',
          'Protective rubber bumper edges',
        ],
      },
      {
        id: 'dump-bin',
        name: 'Retail Promotional Dump Bin',
        category: 'Retail Accessories',
        imageSrc: IMAGES.accessories.dumBin,
        description: 'Adjustable bottom mesh dump bin basket designed for quick clearance sales, discounted items, and impulse buys.',
        features: [
          'Height adjustable bottom grid plate',
          'Collapsible frame for easy storage',
          'High capacity wire mesh basket',
          'Heavy-duty caster wheels',
        ],
      },
      {
        id: 'broom-stand',
        name: 'Broom & Hardware Display Stand',
        category: 'Retail Accessories',
        imageSrc: IMAGES.accessories.broomStand,
        description: 'Specialized wire rack unit for neatly organizing long-handled cleaning tools, brooms, mops, and garden implements.',
        features: [
          'Multi-slot top holding grid',
          'Deep base tray preventing tipping',
          'Compact store footprint',
          'Sturdy steel wire frame',
        ],
      },
    ],
  },
];

export interface SeoIndustry {
  id: string;
  name: string;
  slug: string;
  imageSrc: string;
  subtitle: string;
  searchTerms: string[];
  description: string;
  recommendedRacks: string[];
}

export const seoIndustries: SeoIndustry[] = [
  {
    id: 'supermarkets',
    name: 'Supermarkets',
    slug: 'supermarkets',
    imageSrc: IMAGES.industries.supermarkets,
    subtitle: 'High-Density Double Side & Aisle Racking Systems',
    searchTerms: ['supermarket display racks', 'supermarket shelving manufacturer', 'grocery aisle racks'],
    description: 'Supermarkets require high display capacity, clear aisle navigation, and sturdy load-bearing racks to handle high product turnover. SPANO double-sided island racks and wall units maximize sales per square foot.',
    recommendedRacks: ['Double Side Island Rack', 'Wall Unit With Back Panel', 'End Cap Promotional Unit', 'Checkout Cash Counter'],
  },
  {
    id: 'grocery-stores',
    name: 'Grocery Stores',
    slug: 'grocery-stores',
    imageSrc: IMAGES.industries.grocery,
    subtitle: 'Compact FMCG & Heavy Package Display Units',
    searchTerms: ['grocery store racks', 'mini mart display racks', 'FMCG storage racks'],
    description: 'For neighborhood grocery outlets and mini marts, space efficiency is key. Our customizable wall racks and heavy bottom shelves keep grains, oil cans, and packaged foods organized and easy to restock.',
    recommendedRacks: ['Wall Mounted Shelving', 'Heavy Duty Bottom Shelves', 'Promotional Dump Bins', 'Corner Racks'],
  },
  {
    id: 'pharmacies',
    name: 'Pharmacies & Medical Stores',
    slug: 'pharmacies',
    imageSrc: IMAGES.industries.pharmacies,
    subtitle: 'Clean, Compartmentalized Medicine & Cosmetic Racks',
    searchTerms: ['pharmacy display racks', 'medical store medicine shelving', 'chemist shop racks'],
    description: 'Medical stores demand hyper-organized, clean, and quick-access storage for medicine boxes and healthcare products. Our acrylic-lip and multi-tier medicine display units ensure fast prescription fulfillment.',
    recommendedRacks: ['Glass & Acrylic Front Shelves', 'Multi-Compartment Medicine Racks', 'Wall Mounted Units', 'Lockable Glass Cabinets'],
  },
  {
    id: 'garment-stores',
    name: 'Garment & Apparel Stores',
    slug: 'garment-stores',
    imageSrc: IMAGES.industries.garmentStores,
    subtitle: 'Stylish Apparel Hanging & Folding Display Stands',
    searchTerms: ['garment display racks', 'apparel shop hanging stands', 'clothing store fixtures'],
    description: 'Showcase clothing collections elegantly with chrome-plated hanging rails, waterfall hooks, and wood-finish shelving designed to highlight apparel texture, colors, and branding.',
    recommendedRacks: ['Garment Hanging Stands', 'Waterfall Peg Systems', 'Wooden & Metal Combination Display', 'Center Island Garment Tables'],
  },
  {
    id: 'electronics',
    name: 'Electronics & Gadget Stores',
    slug: 'electronics',
    imageSrc: IMAGES.industries.electronics,
    subtitle: 'Heavy-Weight Appliance & Gadget Display Fixtures',
    searchTerms: ['electronics store display racks', 'appliance display stands', 'gadget store fixtures'],
    description: 'From televisions and home appliances to mobile accessories, electronic stores require sturdy, high-load steel shelving with cable management features and secure locking glass units.',
    recommendedRacks: ['Heavy Load Appliance Racks', 'Glass Display Cases for Gadgets', 'Perforated Pegboard for Accessories', 'Wall Display Units'],
  },
  {
    id: 'hardware',
    name: 'Hardware & Tool Shops',
    slug: 'hardware',
    imageSrc: IMAGES.industries.hardware,
    subtitle: 'Heavy-Duty Steel Racks for Tools & Equipment',
    searchTerms: ['hardware shop racks', 'tool display stands', 'slotted angle racks for hardware'],
    description: 'Hardware tools, power equipment, paint tins, and plumbing pipes require maximum load capacity. SPANO heavy-duty slotted angle and steel shelf racks withstand daily industrial wear.',
    recommendedRacks: ['Heavy Duty Steel Storage Racks', 'Slotted Angle Racking', 'Broom & Long Tool Stands', 'Pegboard Hook Displays'],
  },
  {
    id: 'warehouses',
    name: 'Warehouses & Stockrooms',
    slug: 'warehouses',
    imageSrc: IMAGES.industries.warehouses,
    subtitle: 'Industrial Pallet Racking & Bulk Inventory Systems',
    searchTerms: ['warehouse storage racks', 'industrial pallet racking', 'bulk inventory storage'],
    description: 'Optimize warehouse cube volume with engineered pallet racks and multi-tier mezzanine storage units built for forklift loading and heavy box inventory storage up to 3000kg per beam level.',
    recommendedRacks: ['Pallet Racking Systems', 'Multi-Tier Mezzanine Storage', 'Industrial Heavy Duty Racks', 'Backroom Slotted Racks'],
  },
  {
    id: 'fashion-retail',
    name: 'Fashion Retail & Boutiques',
    slug: 'fashion-retail',
    imageSrc: IMAGES.industries.fashionRetail,
    subtitle: 'Architectural Wood & Metal Premium Boutique Fixtures',
    searchTerms: ['fashion retail fixtures', 'boutique display shelving', 'luxury store interior racks'],
    description: 'Premium boutiques require sophisticated retail architecture. Our custom wooden-finish metal racks and perimeter wall units create an upscale shopping ambience that boosts brand value.',
    recommendedRacks: ['Wooden & Metal Combination Units', 'Illuminated Glass Cabinets', 'Custom Perimeter Wall Fixtures', 'Accent Display Tables'],
  },
  {
    id: 'mobile-shops',
    name: 'Mobile & Accessories Shops',
    slug: 'mobile-shops',
    imageSrc: IMAGES.industries.mobileShops,
    subtitle: 'High-Density Accessory Hook & Counter Displays',
    searchTerms: ['mobile shop display racks', 'phone accessory hanging stands', 'countertop display cases'],
    description: 'Mobile accessory shops feature hundreds of small packaged items. Our perforated pegboard hooks and glass counter units provide high-density product exposure with security.',
    recommendedRacks: ['Slatwall & Pegboard Hook Stands', 'Glass Security Counter Cases', 'LED Backlit Accessory Walls', 'Rotating Spinner Displays'],
  },
  {
    id: 'book-stores',
    name: 'Book Stores & Stationery',
    slug: 'book-stores',
    imageSrc: IMAGES.industries.bookStores,
    subtitle: 'Slanted Face-Out Book & Stationery Shelving',
    searchTerms: ['bookstore display racks', 'stationery shop shelves', 'magazine display stands'],
    description: 'Feature book covers face-out with specialized slanted shelving and acrylic lips designed for bookstores, school stationery suppliers, and library storage.',
    recommendedRacks: ['Slanted Book Display Shelves', 'Stationery Bay Units', 'Magazine & Newspaper Stands', 'Double Side Book Aisles'],
  },
];

export const homeProductsSummary = [
  {
    title: 'Supermarket Racks',
    imageSrc: IMAGES.supermarketRacks.wallUnit,
    href: '/products#five-rack-options',
    desc: 'Wall units, double-sided island aisles, and end-cap displays for high footfall stores.',
  },
  {
    title: 'Display Racks & Fixtures',
    imageSrc: IMAGES.displayRacks.garmentDisplay,
    href: '/products#display-fixtures',
    desc: 'Specialty stands for garments, gifts, toys, and cosmetics.',
  },
  {
    title: 'Customized Retail Solutions',
    imageSrc: IMAGES.customSolutions.woodenMetal,
    href: '/products#customized-solutions',
    desc: 'Bespoke wooden & metal combo fixtures crafted for your floor plan.',
  },
  {
    title: 'Heavy Duty Storage Racks',
    imageSrc: IMAGES.heavyDuty.warehouseRack,
    href: '/products#heavy-duty-racks',
    desc: 'Industrial pallet & bulk storage racking for warehouses and stockrooms.',
  },
  {
    title: 'Slotted Angle Racks',
    imageSrc: IMAGES.customSolutions.slottedRack,
    href: '/products#slotted-angle-racks',
    desc: 'Economical, multi-purpose modular shelving for backrooms and archives.',
  },
  {
    title: 'Retail Accessories & Counters',
    imageSrc: IMAGES.accessories.cashCounter,
    href: '/products#retail-accessories',
    desc: 'Checkout cash counters, shopping trolleys, dump bins, and broom stands.',
  },
];

export const allRackOptions = [
  {
    title: 'Wall Unit With Back Panel',
    imageSrc: IMAGES.supermarketRacks.wallUnit,
    href: '/products#five-rack-options',
    desc: 'Perimeter wall rack with solid or perforated back panel for maximum multi-tier store display.',
  },
  {
    title: 'Double Side Island Rack',
    imageSrc: IMAGES.supermarketRacks.doubleSide,
    href: '/products#five-rack-options',
    desc: 'Center aisle double-sided racking designed to optimize customer footfall flow.',
  },
  {
    title: 'End Cap Promotional Rack',
    imageSrc: IMAGES.supermarketRacks.endCap,
    href: '/products#five-rack-options',
    desc: 'High-visibility aisle-end display designed for promotional offers and fast-moving impulse goods.',
  },
  {
    title: 'Corner Rack Unit',
    imageSrc: IMAGES.supermarketRacks.corner,
    href: '/products#five-rack-options',
    desc: 'Specialized 90-degree corner shelving unit providing seamless continuous wall transitions.',
  },
  {
    title: 'Wall Mounted Unit',
    imageSrc: IMAGES.departmentalRacks.wallMounted,
    href: '/products#five-rack-options',
    desc: 'Floor-clearing direct wall-anchored shelving with clean floating appearance.',
  },
  {
    title: 'Heavy Duty Warehouse Pallet Rack',
    imageSrc: IMAGES.heavyDuty.warehouseRack,
    href: '/products#heavy-duty-racks',
    desc: 'Heavy-duty pallet racking system designed for industrial storage, warehouses, and bulk inventory.',
  },
  {
    title: 'Heavy Duty Industrial Storage System',
    imageSrc: IMAGES.heavyDuty.industrialStorage,
    href: '/products#heavy-duty-racks',
    desc: 'High load capacity structural steel shelving engineered for manufacturing plants and distribution centers.',
  },
  {
    title: 'Garment & Fashion Display',
    imageSrc: IMAGES.displayRacks.garmentDisplay,
    href: '/products#display-fixtures',
    desc: 'Apparel display system featuring hanging bars, waterfall hooks, and wooden shelves.',
  },
  {
    title: 'Gift & Stationery Display',
    imageSrc: IMAGES.displayRacks.giftStationery,
    href: '/products#display-fixtures',
    desc: 'Multi-tier shallow shelving designed for books, greeting cards, and fancy gift items.',
  },
  {
    title: 'Toys & Kids Store Rack',
    imageSrc: IMAGES.displayRacks.cornerRack,
    href: '/products#display-fixtures',
    desc: 'Child-safe rounded corner display unit with colorful wire basket shelves for toys.',
  },
  {
    title: 'Wood & Metal Combo Fixture',
    imageSrc: IMAGES.customSolutions.woodenMetal,
    href: '/products#customized-solutions',
    desc: 'Premium boutique fixture blending warm textured wooden panels with structural steel uprights.',
  },
  {
    title: 'Glass Showcase Cabinet',
    imageSrc: IMAGES.customSolutions.glassDisplay,
    href: '/products#customized-solutions',
    desc: 'Lockable toughened glass cabinet with integrated LED lighting for high-value merchandise.',
  },
  {
    title: 'Slotted Angle Shelving',
    imageSrc: IMAGES.customSolutions.slottedRack,
    href: '/products#slotted-angle-racks',
    desc: 'Multi-purpose economical slotted steel shelving for backrooms and document storage.',
  },
  {
    title: 'Checkout Cash Counter',
    imageSrc: IMAGES.accessories.cashCounter,
    href: '/products#retail-accessories',
    desc: 'Ergonomic cash counter with stainless steel top sheet and lockable cash drawer space.',
  },
  {
    title: 'Shopping Trolleys & Baskets',
    imageSrc: IMAGES.accessories.trolleys,
    href: '/products#retail-accessories',
    desc: 'Smooth swivel casters shopping trolleys and hand baskets for customer convenience.',
  },
  {
    title: 'Promotional Dump Bin',
    imageSrc: IMAGES.accessories.dumBin,
    href: '/products#retail-accessories',
    desc: 'Height-adjustable wire mesh dump bin for quick clearance sales and impulse items.',
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

export const clientLogos = [
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
