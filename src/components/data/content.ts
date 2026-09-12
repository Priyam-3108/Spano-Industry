import { IMAGES } from './images';

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  imageSrc: string;
  description: string;
  features: string[];
  /** Real photographs should cover the frame; rendered product cutouts should stay fully visible (default). */
  imageFit?: 'contain' | 'cover';
}

export interface ProductCategoryGroup {
  id: string;
  title: string;
  description: string;
  items: ProductItem[];
}

export const productCategories: ProductCategoryGroup[] = [
  {
    id: 'heavy-duty-racking',
    title: 'Heavy Duty Storage Racks',
    description: 'Industrial-grade pallet and bulk storage racking systems engineered for warehouses, manufacturing plants, logistics facilities, and distribution centers.',
    items: [
      {
        id: 'warehouse-pallet-rack',
        name: 'Warehouse Pallet & Bulk Storage Rack',
        category: 'Heavy Duty Storage Racks',
        imageSrc: IMAGES.heavyDuty.warehouseRack,
        imageFit: 'cover',
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
        imageFit: 'cover',
        description: 'High-density multi-tier shelving systems maximizing vertical warehouse volume for spare parts and carton storage.',
        features: [
          'Multi-level floor mezzanine integration',
          'Heavy steel shelf decking panels',
          'Impact-resistant column guard protectors',
          'Engineered structural load safety factors',
        ],
      },
      {
        id: 'raw-material-rack',
        name: 'Raw Material & Spare Parts Rack',
        category: 'Heavy Duty Storage Racks',
        imageSrc: IMAGES.heavyDuty.rawMaterialRack,
        imageFit: 'cover',
        description: 'Structural steel racking built for manufacturing plants storing raw steel stock, pipes, and machined spare parts across long-span shelves.',
        features: [
          'Long-span beams for pipes, sections & rods',
          'Heavy-gauge decking for dense metal stock',
          'Engineered for manufacturing plants & logistics facilities',
          'Configurable bay widths for varied part sizes',
        ],
      },
      {
        id: 'bulk-material-rack',
        name: 'Bulk Material & Bagged Storage Rack',
        category: 'Heavy Duty Storage Racks',
        imageSrc: IMAGES.heavyDuty.bulkPackagingRack,
        imageFit: 'cover',
        description: 'Wide-span heavy duty racks engineered for bulk sacks, drums, cartons, and packaged bulk inventory in warehouses and distribution centers.',
        features: [
          'Wide-span shelves for sacks, drums & cartons',
          'Reinforced lower bays for palletized bulk loads',
          'Ideal for distribution centers & bulk material storage areas',
          'Corrosion-resistant powder-coated finish',
        ],
      },
    ],
  },
  {
    id: 'slotted-angle-racks',
    title: 'Slotted Angle Racks',
    description: 'Versatile steel slotted angle shelving suitable for warehouses, workshops, e-commerce inventory, record rooms, and hardware shops.',
    items: [
      {
        id: 'slotted-angle-standard',
        name: 'Industrial Slotted Angle Shelving',
        category: 'Slotted Angle Racks',
        imageSrc: IMAGES.slottedAngle.binStorage,
        imageFit: 'cover',
        description: 'Precision-punched slotted angle posts with steel shelf plates, corner gussets, and nut-bolt assembly for reliable stock holding across warehouses, workshops, and e-commerce inventory rooms.',
        features: [
          'Angle sizes: 60" | 72" | 78" | 84" | 96" (16 & 14 gauge)',
          'Shelf sizes: 36"×12"–24" & 48"×12"–24" (22, 20, 18 & 16 gauge)',
          'Corner gusset plates for rigid stability',
          'Easy reassembly & height modification',
        ],
      },
    ],
  },
  {
    id: 'cupboards-storage-systems',
    title: 'Cupboards & Storage Systems',
    description: 'Lockable steel storage cupboards for factories, libraries, institutions, and industrial facilities that need secure, organized storage rather than open shelving.',
    items: [
      {
        id: 'locker-cupboard',
        name: 'Locker Cupboard',
        category: 'Cupboards & Storage Systems',
        imageSrc: IMAGES.cupboards.lockerHero,
        imageFit: 'cover',
        description: 'Multi-door steel locker cupboards for staff changing rooms, factories, and institutions, available in 6 to 24-locker configurations.',
        features: [
          'Size: 78" × 36" × 19"',
          'Configurations: 6 / 8 / 12 / 15 / 18 / 24 locker',
          'Compartment sizes from 18"×24" down to 9"×12"',
          'For factories, staff changing rooms, hostels & institutions',
        ],
      },
      {
        id: 'library-cupboard',
        name: 'Library Cupboard',
        category: 'Cupboards & Storage Systems',
        imageSrc: IMAGES.cupboards.libraryHero,
        imageFit: 'cover',
        description: 'Glass-door steel library cupboards with adjustable shelving for organized, secure book and document storage.',
        features: [
          'Size: 78" × 36" × 18"',
          'Glass-panel lockable doors with adjustable shelves',
          'For libraries, offices & document storage rooms',
          'Suited to educational institutions',
        ],
      },
      {
        id: 'storewell-cupboard',
        name: 'Storewell Cupboard',
        category: 'Cupboards & Storage Systems',
        imageSrc: IMAGES.cupboards.storewellHero,
        imageFit: 'cover',
        description: 'Plain steel storewell cupboards built for tool, spare part, and document storage across industrial and commercial establishments.',
        features: [
          'Size: 78" × 34" × 17" (also available 78" × 36" × 18")',
          'Lockable doors with adjustable internal shelves',
          'For industrial & factory storage areas',
          'Suited to warehouses, offices & commercial establishments',
        ],
      },
    ],
  },
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
        imageSrc: IMAGES.industries.bookStores,
        imageFit: 'cover',
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
        imageSrc: IMAGES.displayRacks.giftStationery,
        imageFit: 'cover',
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
        imageFit: 'cover',
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
    imageSrc: IMAGES.brochureIndustries.supermarkets,
    subtitle: 'High-Density Double Side & Aisle Racking Systems',
    searchTerms: ['supermarket display racks', 'supermarket shelving manufacturer', 'grocery aisle racks'],
    description: 'Supermarkets require high display capacity, clear aisle navigation, and sturdy load-bearing racks to handle high product turnover. SPANO double-sided island racks and wall units maximize sales per square foot.',
    recommendedRacks: ['Double Side Island Rack', 'Wall Unit With Back Panel', 'End Cap Promotional Unit', 'Checkout Cash Counter'],
  },
  {
    id: 'grocery-stores',
    name: 'Grocery Stores',
    slug: 'grocery-stores',
    imageSrc: IMAGES.brochureIndustries.grocery,
    subtitle: 'Compact FMCG & Heavy Package Display Units',
    searchTerms: ['grocery store racks', 'mini mart display racks', 'FMCG storage racks'],
    description: 'For neighborhood grocery outlets and mini marts, space efficiency is key. Our customizable wall racks and heavy bottom shelves keep grains, oil cans, and packaged foods organized and easy to restock.',
    recommendedRacks: ['Wall Mounted Shelving', 'Heavy Duty Bottom Shelves', 'Promotional Dump Bins', 'Corner Racks'],
  },
  {
    id: 'departmental-stores',
    name: 'Departmental Stores',
    slug: 'departmental-stores',
    imageSrc: IMAGES.brochureIndustries.departmental,
    subtitle: 'Versatile Multi-Product Display Racking',
    searchTerms: ['departmental store racks', 'retail display shelving', 'general store racks'],
    description: 'Optimize product density and categorization across multi-category store layouts with our modular gondola shelves, pegboards, and dynamic custom storefront arrangements.',
    recommendedRacks: ['Gondola Aisle Shelving', 'Pegboard Display Racks', 'Wall Channel Systems', 'Product Display Stands'],
  },
  {
    id: 'gift-shops',
    name: 'Gift Shops',
    slug: 'gift-shops',
    imageSrc: IMAGES.brochureIndustries.giftShops,
    subtitle: 'Aesthetic Specialty & Novelty Display Fixtures',
    searchTerms: ['gift shop display stands', 'wooden gift racks', 'novelty display shelving'],
    description: 'Create an inviting shopping environment with specialized wooden-finish display shelving, customizable peg hook walls, and countertop glass cases designed to showcase fancy merchandise.',
    recommendedRacks: ['Specialty Wooden Racks', 'Slanted Shelves', 'Countertop Showcases', 'Pegboard Hook Displays'],
  },
  {
    id: 'footwear-stores',
    name: 'Footwear Stores',
    slug: 'footwear-stores',
    imageSrc: IMAGES.brochureIndustries.footwear,
    subtitle: 'Premium Shoe & Footwear Display Shelving',
    searchTerms: ['shoe display racks', 'footwear shop stands', 'slipper display shelves'],
    description: 'Elegantly exhibit shoes, sneakers, and slippers with modular floating wall shelves, slanted rack attachments, and backlit display panels designed to enhance product textures.',
    recommendedRacks: ['Slanted Shoe Shelves', 'Wall Channel Units', 'Center Island Shoe Display', 'Backlit Shelving Bars'],
  },
  {
    id: 'electronics',
    name: 'Electronics Stores',
    slug: 'electronics',
    imageSrc: IMAGES.brochureIndustries.electronics,
    subtitle: 'Heavy-Weight Appliance & Gadget Display Fixtures',
    searchTerms: ['electronics store display racks', 'appliance display stands', 'gadget store fixtures'],
    description: 'From televisions and home appliances to mobile accessories, electronic stores require sturdy, high-load steel shelving with cable management features and secure locking glass units.',
    recommendedRacks: ['Heavy Load Appliance Racks', 'Glass Display Cases for Gadgets', 'Perforated Pegboard for Accessories', 'Wall Display Units'],
  },
  {
    id: 'cosmetics-stores',
    name: 'Cosmetic Stores',
    slug: 'cosmetics-stores',
    imageSrc: IMAGES.brochureIndustries.cosmetics,
    subtitle: 'Elegant Glass & LED Illuminated Cosmetics Displays',
    searchTerms: ['cosmetic display racks', 'makeup shop shelving', 'beauty counter displays'],
    description: 'Create a high-end luxury cosmetics showroom with premium LED illuminated glass display cases, lockable sliding glass doors, and modular product organizers.',
    recommendedRacks: ['LED Backlit Display Walls', 'Lockable Glass Cabinets', 'Acrylic Shelf Organizers', 'Countertop Beauty Stands'],
  },
  {
    id: 'stationery-shops',
    name: 'Stationery Shops',
    slug: 'stationery-shops',
    imageSrc: IMAGES.brochureIndustries.stationery,
    subtitle: 'High-Density Book, Writing, & Stationery Racks',
    searchTerms: ['stationery shop shelves', 'bookstore display racks', 'notebook display stands'],
    description: 'Neatly organize magazines, cover books, art supplies, and writing tools with slanted face-out bookshelves, pegboard racks, and compartmentalized stationery bays.',
    recommendedRacks: ['Slanted Book Displays', 'Stationery Bay Units', 'Multi-tier Wire Baskets', 'Pegboard Hook Displays'],
  },
  {
    id: 'warehouses',
    name: 'Warehouses',
    slug: 'warehouses',
    imageSrc: IMAGES.brochureIndustries.warehouses,
    subtitle: 'Industrial Pallet Racking & Bulk Inventory Systems',
    searchTerms: ['warehouse storage racks', 'industrial pallet racking', 'bulk inventory storage'],
    description: 'Optimize warehouse cube volume with engineered pallet racks and multi-tier mezzanine storage units built for forklift loading and heavy box inventory storage up to 3000kg per beam level.',
    recommendedRacks: ['Pallet Racking Systems', 'Multi-Tier Mezzanine Storage', 'Industrial Heavy Duty Racks', 'Backroom Slotted Racks'],
  },
  {
    id: 'textile-rack',
    name: 'Textile Rack',
    slug: 'textile-rack',
    imageSrc: IMAGES.brochureIndustries.textile,
    subtitle: 'Fabric Roll & Bulk Textile Storage Racks',
    searchTerms: ['textile roll racks', 'fabric storage shelving', 'saree display stands'],
    description: 'Store heavy fabric rolls, sarees, and suiting materials on heavy-duty custom steel structures designed to prevent fabric snagging and support high bulk weights.',
    recommendedRacks: ['Roll Storage Steel Racks', 'Heavy Duty Textile Shelves', 'Multi-tier Fabric Bins', 'Bespoke Saree Racks'],
  },
  {
    id: 'garment-stores',
    name: 'Garment Stores',
    slug: 'garment-stores',
    imageSrc: IMAGES.brochureIndustries.garments,
    subtitle: 'Modular Apparel Hanging & Garment Display Rails',
    searchTerms: ['garment display racks', 'clothing store fixtures', 'hanging apparel stands'],
    description: 'Showcase clothing collections elegantly with chrome-plated hanging rails, waterfall hooks, and wood-finish shelving designed to highlight apparel texture, colors, and branding.',
    recommendedRacks: ['Garment Hanging Stands', 'Waterfall Peg Systems', 'Wooden & Metal Combination Display', 'Center Island Garment Tables'],
  },
  {
    id: 'slotted-rack',
    name: 'Slotted Rack',
    slug: 'slotted-rack',
    imageSrc: IMAGES.brochureIndustries.slotted,
    subtitle: 'Versatile Slotted Angle Storage Shelving',
    searchTerms: ['slotted angle racks', 'utility storage shelving', 'file archival racks'],
    description: 'Cost-effective, highly adjustable slotted angle shelving units built for record archives, backroom parts storage, hardware shops, and general commercial stockrooms.',
    recommendedRacks: ['Standard Slotted Angle Racks', 'Adjustable Utility Shelving', 'Hardware Storage Units', 'File Archival Racks'],
  },
  {
    id: 'educational-institutional-storage',
    name: 'Educational & Institutional Storage',
    slug: 'educational-institutional-storage',
    imageSrc: IMAGES.cupboards.libraryHero,
    subtitle: 'Library, Locker & Staff Storage for Institutions',
    searchTerms: ['library cupboard manufacturer', 'school locker cupboards', 'hostel locker storage', 'institutional storage cupboards'],
    description: 'Schools, colleges, hostels, and libraries need secure, organized storage for books, documents, and personal belongings. Our library and locker cupboards outfit staff changing rooms, reading rooms, and administrative offices across educational institutions.',
    recommendedRacks: ['Library Cupboard', 'Locker Cupboard', 'Storewell Cupboard', 'Industrial Slotted Angle Shelving'],
  },
];

export const homeProductsSummary = [
  {
    title: 'Heavy Duty Storage Racks',
    imageSrc: IMAGES.heavyDuty.warehouseRack,
    href: '/products#heavy-duty-racking',
    desc: 'Industrial pallet & bulk storage racking for warehouses, manufacturing plants, and logistics facilities.',
  },
  {
    title: 'Slotted Angle Racks',
    imageSrc: IMAGES.slottedAngle.binStorage,
    href: '/products#slotted-angle-racks',
    desc: 'Economical, multi-purpose modular shelving for warehouses, workshops, and archives.',
  },
  {
    title: 'Cupboards & Storage Systems',
    imageSrc: IMAGES.cupboards.lockerHero,
    href: '/products#cupboards-storage-systems',
    desc: 'Locker, library, and storewell cupboards for factories, institutions, and offices.',
  },
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
    title: 'Retail Accessories & Counters',
    imageSrc: IMAGES.accessories.cashCounter,
    href: '/products#retail-accessories',
    desc: 'Checkout cash counters, shopping trolleys, dump bins, and broom stands.',
  },
];

export const allRackOptions = [
  {
    title: 'Heavy Duty Warehouse Pallet Rack',
    imageSrc: IMAGES.heavyDuty.warehouseRack,
    href: '/products#heavy-duty-racking',
    desc: 'Heavy-duty pallet racking system designed for industrial storage, warehouses, and bulk inventory.',
  },
  {
    title: 'Heavy Duty Industrial Storage System',
    imageSrc: IMAGES.heavyDuty.industrialStorage,
    href: '/products#heavy-duty-racking',
    desc: 'High load capacity structural steel shelving engineered for manufacturing plants and distribution centers.',
  },
  {
    title: 'Raw Material & Spare Parts Rack',
    imageSrc: IMAGES.heavyDuty.rawMaterialRack,
    href: '/products#heavy-duty-racking',
    desc: 'Long-span structural steel racking for raw steel stock, pipes, and machined spare parts.',
  },
  {
    title: 'Bulk Material & Bagged Storage Rack',
    imageSrc: IMAGES.heavyDuty.bulkPackagingRack,
    href: '/products#heavy-duty-racking',
    desc: 'Wide-span heavy duty racks for bulk sacks, drums, cartons, and packaged inventory.',
  },
  {
    title: 'Industrial Slotted Angle Shelving',
    imageSrc: IMAGES.slottedAngle.binStorage,
    href: '/products#slotted-angle-racks',
    desc: 'Multi-purpose slotted steel shelving for warehouses, workshops, and document storage.',
  },
  {
    title: 'Locker Cupboard',
    imageSrc: IMAGES.cupboards.lockerHero,
    href: '/products#cupboards-storage-systems',
    desc: 'Multi-door steel locker cupboards for staff changing rooms, factories, and institutions.',
  },
  {
    title: 'Library Cupboard',
    imageSrc: IMAGES.cupboards.libraryHero,
    href: '/products#cupboards-storage-systems',
    desc: 'Glass-door steel cupboards with adjustable shelving for libraries and document storage.',
  },
  {
    title: 'Storewell Cupboard',
    imageSrc: IMAGES.cupboards.storewellHero,
    href: '/products#cupboards-storage-systems',
    desc: 'Plain steel storewell cupboards for tool, spare part, and document storage.',
  },
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
  { id: 'c13', imageSrc: IMAGES.clients.logo13, alt: 'TNS Pharma' },
  { id: 'c14', imageSrc: IMAGES.clients.logo14, alt: 'Avadh Utopia' },
  { id: 'c15', imageSrc: IMAGES.clients.logo15, alt: 'Jio' },
  { id: 'c16', imageSrc: IMAGES.clients.logo16, alt: 'PP Savani University' },
  { id: 'c17', imageSrc: IMAGES.clients.logo17, alt: 'DGVCL' },
  { id: 'c18', imageSrc: IMAGES.clients.logo18, alt: 'Rajhans Desai-Jain Group' },
  { id: 'c19', imageSrc: IMAGES.clients.logo19, alt: 'FirstCry' },
  { id: 'c20', imageSrc: IMAGES.clients.logo20, alt: 'Bharat Petroleum' },
];
