import { IMAGES } from './images';

export interface ProductSpecItem {
  label: string;
  value: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductDetail {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  tagline: string;
  imageSrc: string;
  imageFit?: 'contain' | 'cover';
  shortDescription: string;
  detailedDescription: string[];
  specifications: ProductSpecItem[];
  keyFeatures: string[];
  advantages: string[];
  applications: string[];
  faqs: ProductFaq[];
  relatedProductIds: string[];
  seoDescription?: {
    heading: string;
    text: string;
  };
  cta?: {
    heading: string;
    description: string;
  };
  seo: {
    title: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const productsData: ProductDetail[] = [
  // ==========================================
  // 1. HEAVY DUTY STORAGE RACKS
  // ==========================================
  {
    id: 'warehouse-pallet-rack',
    name: 'Warehouse Pallet & Bulk Storage Rack',
    category: 'Heavy Duty Storage Racks',
    categoryId: 'heavy-duty-racking',
    tagline: 'High-Capacity Selective Structural Steel Racking for Warehouses & 3PL Logistics',
    imageSrc: IMAGES.heavyDuty.warehouseRack,
    imageFit: 'cover',
    shortDescription: 'Heavy structural steel racking engineered for forklift accessibility, multi-tier pallet storage, and heavy industrial inventory management.',
    detailedDescription: [
      'SPANO Heavy Duty Warehouse Pallet Racking systems are engineered using certified high-yield structural steel to safely support massive inventory loads. The selective beam arrangement provides 100% immediate accessibility to every pallet position while optimizing vertical clear height in industrial warehouses and distribution centers.',
      'Our upright frames are roll-formed with heavy-duty teardrop and diamond punch patterns, reinforced by heavy bracing struts and anchored securely with heavy base plates. Beams feature multi-claw welded connectors with integral safety locks to eliminate beam dislodgement risks during aggressive forklift operations.',
      'Every rack undergoes an advanced 7-tank anti-rust phosphating pre-treatment followed by high-durability electrostatic pure polyester powder coating, ensuring decades of corrosion resistance even in demanding humid and factory environments.',
    ],
    specifications: [
      { label: 'Load Capacity', value: '1,000 kg – 3,500 kg per level (UDL)' },
      { label: 'Standard Upright Heights', value: '8 ft to 24 ft (Up to 7.3 meters)' },
      { label: 'Standard Bay Widths', value: '4 ft, 6 ft, 8 ft, 9 ft, 10 ft, 12 ft' },
      { label: 'Frame Depths', value: '30 in, 36 in, 42 in, 48 in' },
      { label: 'Material Grade', value: 'High Tensile CRCA / Structural Steel (IS 2062 / IS 10748)' },
      { label: 'Surface Finish', value: '7-Tank Phosphated Electrostatic Epoxy-Polyester Powder Coating' },
      { label: 'Standard Colors', value: 'SPANO Green, Industrial Orange, Traffic Blue, Dark Charcoal' },
      { label: 'Decking Options', value: 'Galvanized Steel Panels, Wire Mesh Decks, Wooden Flush Decking' },
      { label: 'Safety Accessories', value: 'Column Upright Guards, Row Spacers, Safety Locking Pins, Base Shims' },
    ],
    keyFeatures: [
      'Engineered load capacities up to 3500 kg per level with rigorous structural safety factor',
      'Heavy beam connectors featuring automatic spring-action safety locks',
      'Modular teardrop / keyhole punching on 50mm / 75mm pitch for easy height adjustment',
      'Heavy-duty floor base plates designed for chemical anchor fastening',
    ],
    advantages: [
      'Maximizes vertical warehouse cubic volume without expanding real estate footprint',
      '100% direct selectivity allows immediate picking of any pallet SKU',
      'Custom fabricated to suit standard Indian and Euro pallet dimensions',
      'Impact-resistant column guards protect uprights from forklift damage',
    ],
    applications: [
      'Third-Party Logistics (3PL) Facilities',
      'FMCG & Consumer Goods Warehouses',
      'Cold Storage & Controlled Temperature Rooms',
      'Automotive Spares & Heavy Machinery Storage',
      'Pharmaceutical Distribution Hubs',
    ],
    faqs: [
      {
        question: 'What is the maximum load capacity of SPANO warehouse pallet racks?',
        answer: 'Our standard selective pallet racks support from 1,000 kg up to 3,500 kg per beam level uniformly distributed load (UDL). For specialized heavy industrial applications, custom-engineered beam profiles can support higher capacities.',
      },
      {
        question: 'Can the shelf beam heights be adjusted later?',
        answer: 'Yes. Uprights feature precision pitch punchings at 50mm or 75mm intervals. Beams can easily be unhooked and re-positioned as pallet sizes or inventory requirements change.',
      },
      {
        question: 'Do you provide warehouse layout design and CAD drawings?',
        answer: 'Yes, our engineering team provides complimentary warehouse measurement, floor layout optimization, and CAD drawings to maximize pallet positions while ensuring optimal forklift aisle clearances.',
      },
    ],
    relatedProductIds: ['industrial-storage-unit', 'raw-material-rack', 'bulk-material-rack', 'slotted-angle-standard'],
    seoDescription: {
      heading: "Heavy Duty Warehouse Pallet Storage Racks in Surat",
      text: "SPANO Industry manufactures heavy duty storage racks and industrial pallet racking systems in Surat for warehouses, factories, logistics centers, and distribution facilities. Our steel storage racks support organized bulk inventory, efficient material handling, and optimal warehouse space utilization.",
    },
    cta: {
      heading: "Maximize Your Warehouse Storage",
      description: "From pallet racks to bulk storage, we deliver industrial solutions across India.",
    },
    seo: {
      title: "Warehouse Pallet & Bulk Storage Racks in Surat",
      metaDescription: "Find heavy duty warehouse pallet racks and bulk storage solutions in Surat for factories, warehouses, logistics hubs and distribution centers.",
      keywords: ['warehouse pallet rack', 'heavy duty storage racks', 'industrial pallet racking', 'selective pallet rack manufacturer', 'warehouse storage systems India'],
    },
  },
  {
    id: 'industrial-storage-unit',
    name: 'Industrial Multi-Tier Storage Rack',
    category: 'Heavy Duty Storage Racks',
    categoryId: 'heavy-duty-racking',
    tagline: 'High-Density Multi-Tier Mezzanine & Heavy Carton Storage Systems',
    imageSrc: IMAGES.heavyDuty.industrialStorage,
    imageFit: 'cover',
    shortDescription: 'High-density multi-tier shelving systems maximizing vertical warehouse volume for spare parts, carton storage, and manual order picking.',
    detailedDescription: [
      'SPANO Industrial Multi-Tier Storage Racks are designed for facilities with substantial vertical headroom that need high-density manual order fulfillment. By integrating catwalk walkways and multi-level floor decking directly into the heavy-duty racking structure, usable storage space is multiplied without requiring additional floor space.',
      'Constructed with rigid cold-rolled steel columns, slotted box beams, and galvanized steel decking panels, these multi-tier units provide exceptional stability under heavy foot traffic and continuous inventory loading.',
      'Our systems include integrated safety staircases, handrails with kick plates, goods lift access gates, and safety mesh partitions to comply fully with industrial factory safety regulations.',
    ],
    specifications: [
      { label: 'System Configuration', value: 'Single Tier, 2-Tier, or 3-Tier Multi-Level Catwalk' },
      { label: 'Walkway Load Capacity', value: '250 kg – 500 kg/sqm' },
      { label: 'Shelf Load Capacity', value: '300 kg – 1,000 kg per level' },
      { label: 'Aisle Widths', value: '800 mm to 1200 mm' },
      { label: 'Floor Decking', value: 'Perforated Galvanized Steel Planks, Chequered Plates, MDF Boards' },
      { label: 'Safety Features', value: 'Safety Handrails (1m height), Kick Plates (150mm), Self-Closing Safety Gates' },
      { label: 'Finish', value: 'Anti-Scratch Powder Coating with Anti-Slip Flooring Surface' },
    ],
    keyFeatures: [
      'Doubles or triples accessible storage space within existing factory ceiling clearance',
      'Structural steel staircases with non-slip grooved tread steps and secure handrails',
      'Interlocking galvanized floor panels that allow light penetration and sprinkler compliance',
      'Integrated wire mesh back and side screens for inventory retention',
    ],
    advantages: [
      'Eliminates the cost of building new warehouse extensions',
      'Enables simultaneous multi-level order picking for fast turnaround',
      'Completely modular design that can be dismantled, expanded, or relocated',
      'Cost-effective alternative to concrete civil mezzanine construction',
    ],
    applications: [
      'Automotive Component & Spare Parts Warehouses',
      'E-Commerce Sorting & Multi-SKU Fulfillment Centers',
      'Textile Garment & Fabric Carton Storage',
      'Hardware & Industrial Tooling Distribution',
    ],
    faqs: [
      {
        question: 'Does a multi-tier rack require municipal civil building approval?',
        answer: 'Generally, multi-tier racking systems are classified as modular capital equipment / internal demountable fixtures rather than permanent civil structures, making deployment faster and simpler.',
      },
      {
        question: 'Can forklifts deliver pallets directly onto the upper mezzanine levels?',
        answer: 'Yes. We engineer safety pallet drop gates (up-and-over or sliding gates) on the upper walkways so forklifts can place pallets directly onto mezzanine landing zones.',
      },
    ],
    relatedProductIds: ['warehouse-pallet-rack', 'slotted-angle-standard', 'raw-material-rack'],
    seoDescription: {
      heading: "Multi-Tier Industrial Storage Racking Systems in Surat",
      text: "Maximize vertical space with industrial multi-tier storage racks designed for warehouses, manufacturing units, and commercial facilities. SPANO Industry provides durable industrial racking systems in Surat that help businesses organize inventory, improve accessibility, and increase storage capacity.",
    },
    cta: {
      heading: "Make Every Storage Level Count",
      description: "From vertical storage planning to installation, we deliver across India.",
    },
    seo: {
      title: "Industrial Multi-Tier Storage Racks in Surat",
      metaDescription: "Optimize vertical space with industrial multi-tier storage racks in Surat, designed for warehouses, factories and efficient inventory management.",
      keywords: ['multi tier storage racks', 'rack supported mezzanine', 'industrial two tier shelving', 'warehouse catwalk racking', 'spare parts storage system'],
    },
  },
  {
    id: 'raw-material-rack',
    name: 'Raw Material & Spare Parts Rack',
    category: 'Heavy Duty Storage Racks',
    categoryId: 'heavy-duty-racking',
    tagline: 'Heavy Structural Steel Cantilever & Long-Span Racks for Pipes, Bars & Raw Stock',
    imageSrc: IMAGES.heavyDuty.rawMaterialRack,
    imageFit: 'cover',
    shortDescription: 'Structural steel racking built for manufacturing plants storing raw steel stock, pipes, coils, and machined spare parts across heavy-duty long-span shelves.',
    detailedDescription: [
      'Engineered specifically for heavy fabrication facilities, engineering shops, and raw material stores, the SPANO Raw Material Rack handles awkward, heavy, and dense industrial loads including solid metal bars, structural tubing, plastic pipes, and foundry tooling.',
      'Constructed with extra-heavy gauge cold-formed channels and reinforced gusset joints, this racking system withstands abusive handling, crane loading, and intensive daily manufacturing usage.',
      'Available with long unobstructed spans or cantilever arms for side-loading elongated material profiles without upright post interference.',
    ],
    specifications: [
      { label: 'Span Length', value: 'Up to 14 ft unobstructed clear beam width' },
      { label: 'Weight Capacity', value: 'Up to 2,000 kg per beam level' },
      { label: 'Upright Section', value: 'Heavy C-Channel Profile with Reinforced Footings' },
      { label: 'Decking', value: 'Heavy Reinforced Steel Planks / Open Beam Saddle Supports' },
      { label: 'Finish', value: 'Industrial Heavy Duty Electrostatic Powder Coating' },
    ],
    keyFeatures: [
      'Wide clear entry bays designed for overhead crane or long-load forklift handling',
      'Custom cradles and saddle dividers for circular pipes, coils, and rod bundles',
      'Rigid bracing diagonals preventing sway under heavy non-uniform industrial loads',
    ],
    advantages: [
      'Eliminates dangerous floor stacking of heavy raw steel stock and tubing',
      'Improves inventory visibility and material traceability in manufacturing shops',
      'Resistant to structural bending under concentrated metal payloads',
    ],
    applications: [
      'Steel Fabrication Plants & Machine Shops',
      'Pipe & Tube Wholesalers',
      'Automotive Tool & Die Toolrooms',
      'Plastic Extrusion & Injection Molding Facilities',
    ],
    faqs: [
      {
        question: 'Can this rack accommodate crane loading from above?',
        answer: 'Yes. We fabricate open-top and stepped cantilever configurations specifically designed for overhead EOT crane drop-in loading.',
      },
      {
        question: 'Is it suitable for storing oil-coated raw metal stock?',
        answer: 'Yes. The powder-coated steel panels and optional drip trays prevent oil absorption and make regular factory cleaning straightforward.',
      },
    ],
    relatedProductIds: ['warehouse-pallet-rack', 'bulk-material-rack', 'slotted-angle-standard'],
    seoDescription: {
      heading: "Industrial Racks for Raw Materials and Spare Parts Storage",
      text: "SPANO Industry offers industrial storage racks in Surat for organizing raw materials, machinery components, tools, and spare parts. These steel racks provide practical storage solutions for workshops, factories, maintenance departments, and industrial warehouses requiring efficient inventory management.",
    },
    cta: {
      heading: "Organise Your Materials Smarter",
      description: "From spare parts shelving to industrial racks, we deliver across India.",
    },
    seo: {
      title: "Raw Material & Spare Parts Racks in Surat",
      metaDescription: "Organize tools, raw materials and components with durable industrial storage racks in Surat for factories, workshops and warehouses.",
      keywords: ['raw material rack', 'steel pipe storage rack', 'long span heavy duty rack', 'toolroom rack', 'industrial stock racking'],
    },
  },
  {
    id: 'bulk-material-rack',
    name: 'Bulk Material & Bagged Storage Rack',
    category: 'Heavy Duty Storage Racks',
    categoryId: 'heavy-duty-racking',
    tagline: 'Wide-Span Heavy Capacity Racks for Sacks, Drums, Cartons & Packaged Inventory',
    imageSrc: IMAGES.heavyDuty.bulkPackagingRack,
    imageFit: 'cover',
    shortDescription: 'Wide-span heavy duty racks engineered for bulk sacks, chemical drums, oversized cartons, and packaged bulk inventory in warehouses and distribution centers.',
    detailedDescription: [
      'Storing bulk goods such as bagged grains, chemical drums, plastic pellets, and master cartons requires extra-deep, highly rigid shelf spans that distribute point loads safely. The SPANO Bulk Material Rack delivers high surface area and extreme rigidity.',
      'Features heavy stepped box beams equipped with recessed drop-in steel decking panels or heavy-duty galvanized wire mesh decking that prevents dust accumulation and allows air circulation around bulk sacks.',
      'Lower bays can be configured with extra clearance to park heavy pallet jacks or bottom pallet loads directly on the warehouse floor slab.',
    ],
    specifications: [
      { label: 'Shelf Depth', value: '3 ft, 4 ft, 5 ft, or custom' },
      { label: 'Load Rating', value: '800 kg – 2,500 kg per shelf level' },
      { label: 'Beam Height Adjustment', value: '50mm increment teardrop locks' },
      { label: 'Decking', value: 'Reinforced 1.6mm / 2.0mm Galvanized Steel Deck or Wire Deck' },
      { label: 'Protection', value: 'Column Wrap Guards & Corner Deflector Barriers' },
    ],
    keyFeatures: [
      'Reinforced shelf under-bracing channels preventing sagging under heavy sacks and drums',
      'Smooth, snag-free steel decking edges preventing bag tearing and inventory spillages',
      'Configurable bay depths up to 5 feet for oversized palletized bulk containers',
    ],
    advantages: [
      'Protects bottom bags from crushing typically caused by excessive floor stacking',
      'Allows First-In-First-Out (FIFO) bulk stock rotation',
      'Improves warehouse hygiene and pest control by elevating bulk bags off bare concrete',
    ],
    applications: [
      'Agro-Chemical & Fertilizer Warehouses',
      'Food Grains & Flour Mill Storage',
      'Chemical & Polymer Drum Storage',
      'Bulk Packaging & Corrugated Box Distribution',
    ],
    faqs: [
      {
        question: 'Can these racks store 200-liter oil or chemical drums?',
        answer: 'Yes. We supply specialized drum chocks and sump spill containment trays that integrate into the rack beams for safe liquid drum storage.',
      },
    ],
    relatedProductIds: ['warehouse-pallet-rack', 'industrial-storage-unit', 'slotted-angle-standard'],
    seoDescription: {
      heading: "Heavy Duty Racks for Bulk Material and Bagged Storage",
      text: "Our heavy duty industrial storage racks in Surat help businesses store packaged goods, bagged materials, and bulk inventory systematically. Designed for demanding industrial environments, these steel storage racks support organized stock management and efficient warehouse operations.",
    },
    cta: {
      heading: "STORE MORE WITH CONFIDENCE",
      description: "From bulk materials to bagged goods, we provide storage solutions across India.",
    },
    seo: {
      title: "Bulk Material & Bagged Storage Racks in Surat",
      metaDescription: "Store bagged goods and bulk materials efficiently with heavy duty storage racks from SPANO Industry in Surat for industrial facilities.",
      keywords: ['bulk storage rack', 'bagged goods rack', 'drum storage racking', 'heavy duty wide span shelving', 'warehouse sack rack'],
    },
  },

  // ==========================================
  // 2. SLOTTED ANGLE RACKS
  // ==========================================
  {
    id: 'slotted-angle-standard',
    name: 'Industrial Slotted Angle Shelving',
    category: 'Slotted Angle Racks',
    categoryId: 'slotted-angle-racks',
    tagline: 'Versatile, Multi-Purpose Steel Slotted Angle Shelving for Workshops & Stores',
    imageSrc: IMAGES.slottedAngle.binStorage,
    imageFit: 'cover',
    shortDescription: 'Precision-punched slotted angle posts with steel shelf plates, corner gussets, and nut-bolt assembly for reliable stock holding across warehouses, workshops, and record rooms.',
    detailedDescription: [
      'SPANO Slotted Angle Shelving is India’s most proven, adaptable, and economical steel storage system. Manufactured from high-grade cold-rolled steel angles precision-punched with elongated slots, these racks assemble rapidly using standard M8 high-tensile hardware.',
      'Corner gusset plates at top and bottom shelf levels deliver triangular rigidity that prevents racking sway. Shelf panels feature triple-bend front and rear safety flanges with welded channel stiffeners on the underside for zero deflection under load.',
      'Finished with a multi-stage anti-corrosion chemical wash and tough powder coating, SPANO slotted angle units outperform traditional painted racks in durability, scratch resistance, and aesthetic appeal.',
    ],
    specifications: [
      { label: 'Standard Angle Sizes', value: '40x40mm (1.5"x1.5"), 60x40mm (2.25"x1.5"), 80x40mm (3"x1.5")' },
      { label: 'Angle Gauges', value: '14 Gauge (2.0mm) & 16 Gauge (1.6mm)' },
      { label: 'Standard Post Heights', value: '60", 72", 78", 84", 96", 120" (Up to 10 feet)' },
      { label: 'Shelf Plate Sizes', value: '36"x12", 36"x15", 36"x18", 36"x24", 48"x15", 48"x18", 48"x24"' },
      { label: 'Shelf Gauges', value: '18 Gauge, 20 Gauge, 22 Gauge (Heavy to Light Duty)' },
      { label: 'Load Capacity', value: '80 kg – 250 kg per shelf level' },
      { label: 'Assembly Hardware', value: 'High Tensile M8 Bolts & Nuts with Corner Gusset Plates' },
      { label: 'Finishing', value: 'Phosphated Pure Polyester Powder Coating (Grey, Olive Green, Custom)' },
    ],
    keyFeatures: [
      'Precision punched slotted hole matrix for micro-adjustment of shelf spacings at 1-inch intervals',
      'Heavy-duty corner triangular gussets providing rigid structural sway resistance',
      'Triple-fold safety hemmed edges on all shelves ensuring operator safety against sharp cuts',
      'Bottom plastic shoe caps protecting factory and office flooring from scratches',
    ],
    advantages: [
      'Extremely economical cost per storage bin position',
      'Can be customized with plastic bins, steel partition dividers, back sheets, and side cladding',
      'Easy to dismantle, resize, or extend as your inventory storage demands grow',
      'In stock for rapid delivery and immediate on-site assembly',
    ],
    applications: [
      'Factory Maintenance Toolrooms & Workshop Storage',
      'E-Commerce Picking Shelves & Small Parts Bin Bins',
      'Office Archive Rooms, Legal Document & File Storage',
      'Hardware, Electrical & Plumbing Retail Outlets',
      'Hospital Medical Records & Pharmacy Stores',
    ],
    faqs: [
      {
        question: 'What is the standard load capacity of a slotted angle shelf?',
        answer: 'Standard 20-gauge shelves hold approximately 100 kg to 120 kg uniformly distributed. With heavy 18-gauge plates and welded bottom stiffener ribs, capacity increases up to 200 kg to 250 kg per shelf.',
      },
      {
        question: 'Can we add side or back steel panels to make it a closed cabinet rack?',
        answer: 'Yes! SPANO manufactures matching side cladding sheets, rear back panels, and vertical bin dividers that bolt directly onto standard slotted angles.',
      },
      {
        question: 'How easy is it to assemble or modify shelf heights later?',
        answer: 'Slotted angle racks use standard bolt-and-nut fasteners. Loosening the bolts allows adjusting shelf elevations in 1-inch increments whenever needed.',
      },
    ],
    relatedProductIds: ['storewell-cupboard', 'locker-cupboard', 'warehouse-pallet-rack', 'wall-unit-back-panel'],
    seoDescription: {
      heading: "Adjustable Steel Slotted Angle Racks in Surat",
      text: "SPANO Industry manufactures adjustable steel rack and slotted angle shelving solutions for workshops, warehouses, retail stores, and record rooms. These versatile steel shelf racks offer flexible configurations, making them suitable for tools, spare parts, documents, and general-purpose industrial storage.",
    },
    cta: {
      heading: "Build Your Flexible Storage System",
      description: "From adjustable steel shelving to installation, we deliver across India.",
    },
    seo: {
      title: "Slotted Angle Steel Racks in Surat | SPANO",
      metaDescription: "Explore adjustable steel slotted angle racks in Surat for workshops, warehouses, shops and flexible, organized industrial storage.",
      keywords: ['slotted angle racks', 'slotted angle shelving manufacturer', 'industrial storage racks', 'record room shelving', 'steel angle racks India'],
    },
  },

  // ==========================================
  // 3. CUPBOARDS & STORAGE SYSTEMS
  // ==========================================
  {
    id: 'locker-cupboard',
    name: 'Industrial Locker Cupboard',
    category: 'Cupboards & Storage Systems',
    categoryId: 'cupboards-storage-systems',
    tagline: 'Multi-Compartment Steel Lockers for Staff Changing Rooms, Factories & Hostels',
    imageSrc: IMAGES.cupboards.lockerHero,
    imageFit: 'cover',
    shortDescription: 'Multi-door steel locker cupboards for staff changing rooms, factories, educational institutions, and hostels, available in 6 to 24-compartment configurations.',
    detailedDescription: [
      'SPANO Locker Cupboards are engineered for secure, organized personal belongings storage across factories, industrial manufacturing units, corporate gyms, staff changing areas, and educational hostels.',
      'Manufactured from premium cold-rolled closed annealed (CRCA) steel sheets, each locker door is reinforced with full-length vertical stiffeners, ventilation louvers for fresh airflow, and index label holders for staff numbering.',
      'Equipped with independent lock options including individual key cylinder cam locks, padlock hasp clasps, or numeric combo locks, ensuring privacy and personal security for every employee.',
    ],
    specifications: [
      { label: 'Overall Dimensions', value: '78" Height × 36" Width × 19" Depth (Standard)' },
      { label: 'Compartment Configurations', value: '6, 8, 12, 15, 18, 24 Locker Units' },
      { label: 'Material', value: 'Heavy Gauge CRCA Steel Sheet (0.8mm – 1.2mm)' },
      { label: 'Locking Mechanism', value: 'Individual 6-lever cam locks with duplicate master keys or padlock hasps' },
      { label: 'Ventilation', value: 'Stamped vertical airflow louvers on every door' },
      { label: 'Internal Fittings', value: 'Hanging coat hooks & shelf divider (on larger 6/8-tier units)' },
      { label: 'Finish', value: 'Anti-Rust Phosphated Epoxy-Polyester Powder Coating' },
      { label: 'Standard Colors', value: 'Dual-Tone Grey, Industrial Olive, Blue & White, Customized' },
    ],
    keyFeatures: [
      'Louvered ventilation slots on each compartment preventing odor and moisture buildup',
      'Name card / employee badge holder embossed onto each locker door',
      'Full-height concealed piano hinges or heavy pivot pins resisting forced pry entry',
      'Sturdy plinth base preventing dust ingress and moisture contact from wet floors',
    ],
    advantages: [
      'Provides secure personal storage for employee valuables, uniforms, and helmets',
      'Heavy-duty CRCA steel construction withstands rough industrial shift use',
      'Master key override systems available for corporate facility managers',
      'Powder-coated smooth surface is easy to sanitize and wipe clean',
    ],
    applications: [
      'Factory Staff Changing Rooms & Industrial Locker Rooms',
      'Hospital Nurses & Doctors Duty Stations',
      'College Hostels, Schools & Sports Academies',
      'Gymnasiums, Fitness Clubs & Swimming Complexes',
      'Police Stations & Security Guard Quarters',
    ],
    faqs: [
      {
        question: 'What happens if an employee loses their locker key?',
        answer: 'Each unit is keyed with unique serial numbers, and we supply master keys to HR or facility management that can open any locker compartment in an emergency.',
      },
      {
        question: 'Can we install padlocks instead of built-in keys?',
        answer: 'Yes, we provide heavy-duty swivel hasp and staple fittings designed for users to attach their own personal padlocks.',
      },
    ],
    relatedProductIds: ['storewell-cupboard', 'library-cupboard', 'slotted-angle-standard'],
    seoDescription: {
      heading: "Industrial Steel Locker Cupboards in Surat",
      text: "Our steel locker cupboards provide secure personal storage for employees in factories, offices, schools, and commercial establishments. SPANO Industry offers durable steel storage solutions in Surat that help maintain organized workplaces while protecting personal belongings, uniforms, and essential items.",
    },
    cta: {
      heading: "Secure Your Everyday Storage",
      description: "From workplace lockers to steel cupboards, we supply solutions across India.",
    },
    seo: {
      title: "Steel Locker Cupboards in Surat | SPANO Industry",
      metaDescription: "Find durable steel locker cupboards in Surat for secure personal storage in factories, offices, schools and commercial workplaces.",
      keywords: ['locker cupboard', 'industrial staff lockers', 'steel locker manufacturer', 'factory worker lockers', 'multi compartment locker'],
    },
  },
  {
    id: 'library-cupboard',
    name: 'Steel Glass Door Library Cupboard',
    category: 'Cupboards & Storage Systems',
    categoryId: 'cupboards-storage-systems',
    tagline: 'Lockable Glass-Panel Steel Storage Cabinets for Books, Files & Sensitive Documents',
    imageSrc: IMAGES.cupboards.libraryHero,
    imageFit: 'cover',
    shortDescription: 'Glass-door steel library cupboards with adjustable internal shelving for organized, dust-free, and secure book, record, and document storage.',
    detailedDescription: [
      'SPANO Glass Door Library Cupboards blend clear inventory visibility with robust steel cabinet security. Designed for institutional libraries, university archives, corporate offices, and legal firms, they keep precious books and documents dust-free and neatly organized.',
      'Constructed with prime CRCA steel outer casing and framed toughened or annealed glass panel doors that lock securely via a three-way locking mechanism with brass cylinder locks.',
      'Internal shelves are height-adjustable on internal rack slots to accommodate standard letter files, legal folios, bound binders, or oversized reference volumes.',
    ],
    specifications: [
      { label: 'Overall Dimensions', value: '78" Height × 36" Width × 18" Depth' },
      { label: 'Door Style', value: 'Twin Hinged Doors with Clear Glass Window Panels' },
      { label: 'Number of Shelves', value: '4 Height-Adjustable Shelves (5 Storage Compartments)' },
      { label: 'Shelf Load Capacity', value: '60 kg – 80 kg per shelf' },
      { label: 'Lock Type', value: 'Three-Way Bolting Security Lock with Dual Keys' },
      { label: 'Steel Gauge', value: '0.8mm – 1.0mm CRCA Sheet' },
      { label: 'Finish', value: 'Corrosion-Resistant Fine Textured Powder Coat (Beige, Grey, Dark Olive)' },
    ],
    keyFeatures: [
      'Transparent glass door inserts allowing visual spine browsing without opening the cabinet',
      'Three-way locking rods securing the top, bottom, and center door points simultaneously',
      'Reinforced shelf plates with anti-tilt brackets that stay level under heavy paper loads',
      'Concealed rubber buffer gaskets on door frames ensuring quiet, slam-free closure',
    ],
    advantages: [
      'Protects valuable books and records from humidity, dust, and unauthorized access',
      'Smart executive appearance suitable for corporate boardrooms and principal offices',
      'Heavy steel frame will never warp or succumb to termite damage like wooden cupboards',
    ],
    applications: [
      'School, College & University Libraries',
      'Government Record Offices & Court Clerks',
      'Law Offices & Chartered Accountant Archives',
      'Research Laboratories & Engineering Drawings Storage',
    ],
    faqs: [
      {
        question: 'Are the glass panels prone to breakage during transit or use?',
        answer: 'We use thick toughened/annealed glass panels mounted in rubber-lined steel door frames to dampen vibrations and withstand institutional daily handling.',
      },
    ],
    relatedProductIds: ['storewell-cupboard', 'locker-cupboard', 'slotted-angle-standard'],
    seoDescription: {
      heading: "Steel Library Cupboards and Storage Solutions",
      text: "SPANO Industry supplies steel library cupboards in Surat for educational institutions, offices, libraries, and training centers. Designed for organized storage of books, documents, and reference materials, these cupboards provide a practical alternative to open shelving where secure storage is required.",
    },
    cta: {
      heading: "Organize Your Knowledge Space",
      description: "From book storage to steel cupboards, we deliver solutions across India.",
    },
    seo: {
      title: "Steel Library Cupboards in Surat | SPANO Industry",
      metaDescription: "Discover steel library cupboards in Surat for organized storage of books, files and reference materials in schools, offices and institutions.",
      keywords: ['library cupboard', 'glass door book cupboard', 'steel library cabinet', 'office book storage cupboard', 'document storage cabinet'],
    },
  },
  {
    id: 'storewell-cupboard',
    name: 'Industrial Storewell Steel Cupboard',
    category: 'Cupboards & Storage Systems',
    categoryId: 'cupboards-storage-systems',
    tagline: 'Heavy-Duty Plain Steel Storage Cupboards for Tools, Spares & Commercial Storage',
    imageSrc: IMAGES.cupboards.storewellHero,
    imageFit: 'cover',
    shortDescription: 'Heavy-gauge plain steel storewell cupboards built for tool, spare part, document, and office supplies storage across industrial, workshop, and commercial establishments.',
    detailedDescription: [
      'The SPANO Storewell Cupboard is an industrial-strength, general-purpose steel storage cabinet trusted across Indian factories, maintenance toolrooms, and administrative offices for safe, enclosed storage.',
      'Built from heavy-gauge CRCA steel with double-walled reinforced doors, seamless full-height piano hinges, and an integrated three-way shoot-bolt locking mechanism with a brass cylinder lock.',
      'Comes standard with four adjustable steel shelves forming five distinct compartments capable of bearing heavy toolboxes, hardware parts, files, and high-value equipment.',
    ],
    specifications: [
      { label: 'Standard Sizes', value: '78"H × 34"W × 17"D & 78"H × 36"W × 18"D' },
      { label: 'Material', value: '0.8mm to 1.2mm Heavy-Duty CRCA Steel' },
      { label: 'Number of Shelves', value: '4 Adjustable Shelves (5 Compartments)' },
      { label: 'Shelf Capacity', value: '75 kg – 100 kg per shelf uniformly distributed' },
      { label: 'Lock Mechanism', value: '3-Way Shoot Bolt Lock with Lever Handle & 2 Keys' },
      { label: 'Finish', value: 'Pure Polyester Electrostatic Powder Coating' },
      { label: 'Optional Fittings', value: 'Internal Secret Locker Box, Hanging Rod, Drawer Inserts' },
    ],
    keyFeatures: [
      'Heavy double-flanged doors with full-length vertical stiffener ribs preventing door flex',
      'Multi-point three-way locking bars engaging top, center, and bottom frame holes',
      'Removable and repositionable shelves on heavy shelf clips for flexible spacing',
      'Robust die-cast chrome handle with integrated keyhole',
    ],
    advantages: [
      'Fire-resistant and pest-proof protection for sensitive tools and paper files',
      'Long lifespan of 25+ years with zero maintenance',
      'Smooth, scratch-resistant powder coat finish available in multiple corporate colors',
    ],
    applications: [
      'Factory Workshop Tool & Instrument Storage',
      'Commercial Offices, Banking & Administration',
      'Warehouses & Distribution Backoffices',
      'Educational Institutions & Administrative Staff Rooms',
    ],
    faqs: [
      {
        question: 'Can we order storewell cupboards with an internal secret locker?',
        answer: 'Yes! We manufacture custom storewell models featuring a lockable internal sub-locker compartment at the top or center for confidential documents or petty cash.',
      },
    ],
    relatedProductIds: ['locker-cupboard', 'library-cupboard', 'slotted-angle-standard'],
    seoDescription: {
      heading: "Steel Storewell Cupboards for Organized Storage in Surat",
      text: "Our storewell cupboards provide practical storage for documents, office supplies, tools, uniforms, and institutional materials. SPANO Industry manufactures durable steel storage cupboards in Surat for factories, offices, schools, and commercial facilities seeking reliable and space-efficient storage solutions.",
    },
    cta: {
      heading: "Create a More Organized Space",
      description: "From document storage to steel cupboards, we deliver across India.",
    },
    seo: {
      title: "Storewell Steel Cupboards in Surat | SPANO Industry",
      metaDescription: "Explore storewell steel cupboards in Surat for secure, space-saving storage of documents, supplies and equipment in offices and institutions.",
      keywords: ['storewell cupboard', 'steel cupboard manufacturer', 'industrial steel almirah', 'office storage cupboard', 'heavy duty tool cupboard'],
    },
  },

  // ==========================================
  // 4. FIVE CORE RACK OPTIONS (SUPERMARKET RACKS)
  // ==========================================
  {
    id: 'wall-unit-back-panel',
    name: 'Supermarket Wall Unit With Back Panel',
    category: 'Five Rack Options',
    categoryId: 'five-rack-options',
    tagline: 'Perimeter Wall Display Rack with Solid or Perforated Back Panels',
    imageSrc: IMAGES.supermarketRacks.wallUnit,
    shortDescription: 'Heavy-duty single-sided perimeter wall rack with solid or perforated back panels, ideal for organized multi-tier product displays along retail store walls.',
    detailedDescription: [
      'SPANO Wall Units with Back Panels are the foundational perimeter fixtures for modern supermarkets, departmental stores, FMCG outlets, and grocery chains. Engineered to mount flush against perimeter walls, they convert empty wall space into vibrant, organized retail sales real estate.',
      'Constructed with rigid slotted upright posts and heavy base feet, these units feature interchangeable back panels available in solid metal sheet, perforated pegboard pattern (for hook displays), or wire mesh.',
      'Shelves are cantilever-supported on multi-tooth brackets that adjust both vertically and at angled tilt positions (0° and 15° forward tilt) to enhance eye-level merchandising visibility.',
    ],
    specifications: [
      { label: 'Standard Heights', value: '5 ft, 6 ft, 7 ft, 8 ft (1500mm – 2400mm)' },
      { label: 'Bay Widths', value: '3 ft (900mm) & 4 ft (1200mm)' },
      { label: 'Shelf Depths', value: 'Top Shelves: 300mm, 350mm, 400mm; Base Shelf: 450mm, 500mm' },
      { label: 'Back Panel Types', value: 'Plain Solid Sheet, Perforated Pegboard, Wire Mesh Grid' },
      { label: 'Shelf Load Capacity', value: '80 kg – 150 kg per shelf level' },
      { label: 'Tilt Adjustment', value: 'Dual-angle bracket (Horizontal 0° and Forward 15° Tilt)' },
      { label: 'Accessories', value: 'Front Acrylic Stoppers, Price Tag Channels, Wire Baskets' },
      { label: 'Finish', value: 'High Gloss / Matte Pure Polyester Powder Coating' },
    ],
    keyFeatures: [
      'Heavy base foot structure ensuring rock-solid stability along store walls without wall drilling',
      'Dual-tilt shelf brackets allowing angled displays for confectionery, cosmetics, and packaged food',
      'Integrated plastic price tag channels with transparent protective flaps',
      'Perforated back sheet options compatible with single and double prong hanging hooks',
    ],
    advantages: [
      'Maximizes perimeter floor productivity and drives higher customer basket size',
      'Modular extension bays allow seamless continuous runs of any desired wall length',
      'Easy shelf re-positioning allows quick seasonal and promotional merchandise resets',
    ],
    applications: [
      'Supermarkets & Hypermarket Perimeter Walls',
      'Departmental Stores & Grocery Outlets',
      'Hardware & DIY Retail Chains',
      'Stationery, Book & Gift Outlets',
    ],
    faqs: [
      {
        question: 'Do these wall units need to be screwed into the wall?',
        answer: 'No. Our heavy-duty base feet and balanced uprights are completely self-standing. However, for heights above 8 feet, optional top wall anchoring brackets are provided for extra earthquake and crowd safety.',
      },
    ],
    relatedProductIds: ['double-side-rack', 'end-cap-display', 'corner-rack-unit', 'checkout-cash-counter'],
    seoDescription: {
      heading: "Supermarket Wall Display Racks with Back Panels",
      text: "SPANO Industry manufactures supermarket display racks in Surat with back panels for neatly presenting packaged products, groceries, household essentials, and everyday merchandise. These wall-mounted retail fixtures help maximize floor space, organize product categories, and create an attractive shopping environment.",
    },
    cta: {
      heading: "Transform Your Store Walls",
      description: "From wall display racks to custom fixtures, we deliver across India.",
    },
    seo: {
      title: "Supermarket Wall Units with Back Panels | SPANO",
      metaDescription: "Shop supermarket wall units with back panels for organized product displays and efficient use of retail space. Made by SPANO Industry in Surat.",
      keywords: ['supermarket wall rack', 'grocery display rack', 'retail wall unit with back panel', 'perforated supermarket rack', 'store display fixtures India'],
    },
  },
  {
    id: 'double-side-rack',
    name: 'Supermarket Double Side Island Rack',
    category: 'Five Rack Options',
    categoryId: 'five-rack-options',
    tagline: 'Center-Aisle Gondola Racking System for Optimal Retail Footfall Traffic Flow',
    imageSrc: IMAGES.supermarketRacks.doubleSide,
    shortDescription: 'Double-sided center aisle racking system designed to maximize store floor space, display merchandise on both sides, and facilitate smooth customer walkthrough traffic.',
    detailedDescription: [
      'SPANO Double Sided Island Racks (Gondola Racks) form the structural backbone of modern supermarket aisle architecture. Positioned in the center of the sales floor, they display products on both faces, effectively doubling merchandising space while creating orderly, inviting shopping aisles.',
      'Engineered with a heavy central T-leg or inverted-T upright column and balanced cantilever base shelves that prevent tipping even when one side is fully loaded and the other is being replenished.',
      'Our island racks connect seamlessly with End-Cap promotional units at both aisle extremities, producing high-impact promotional zones that drive impulse purchasing.',
    ],
    specifications: [
      { label: 'Standard Heights', value: '4.5 ft, 5 ft, 5.5 ft, 6 ft, 7 ft' },
      { label: 'Bay Widths', value: '3 ft (900mm) & 4 ft (1200mm)' },
      { label: 'Total Depth', value: '750mm, 900mm, 1050mm (both sides combined)' },
      { label: 'Shelf Levels', value: 'Base Shelf + 3 to 5 Upper Shelves per side' },
      { label: 'Load Capacity', value: '100 kg – 160 kg per shelf (up to 1,200 kg per double bay)' },
      { label: 'Back Panel', value: 'Solid Metal, Perforated Pegboard, or Wire Mesh Center Barrier' },
      { label: 'Accessories', value: 'End-Cap Integration, PVC Data Strip, Wire Dividers, Front Wire Fences' },
      { label: 'Finish', value: 'Scratch-Resistant Electrostatic Powder Coating' },
    ],
    keyFeatures: [
      'Double-sided cantilever display maximizing merchandise exposure per square foot',
      'Heavy-duty T-post construction engineered with balanced center of gravity',
      'Interlocking starter and adder bay system for endless aisle continuity',
      'Dual-color accent trim options on ticket rails to match corporate brand themes',
    ],
    advantages: [
      'Guides customer foot traffic logically through your store aisles for higher dwell time',
      'Supports high-density SKU displays without feeling cluttered or overwhelming',
      'Quick tool-less shelf height adjustments for seasonal category changes',
    ],
    applications: [
      'Supermarket Central Grocery & FMCG Aisles',
      'Departmental Stores & Hypermarket Floor Layouts',
      'Pharmacies & Health & Beauty Stores',
      'Pet Food & Household Supply Retailers',
    ],
    faqs: [
      {
        question: 'What is the recommended aisle width between two double-sided racks?',
        answer: 'We recommend maintaining an aisle width of 3.5 to 5 feet (1.1m to 1.5m) to allow smooth two-way trolley navigation and comfortable customer browsing.',
      },
    ],
    relatedProductIds: ['end-cap-display', 'wall-unit-back-panel', 'corner-rack-unit', 'shopping-trolleys'],
    seoDescription: {
      heading: "Double-Sided Supermarket Island Display Racks in Surat",
      text: "Our double-sided island racks provide accessible product displays from both sides, making them ideal for supermarkets, grocery stores, and departmental stores. SPANO Industry supplies supermarket racks in Surat designed to improve aisle organization, merchandise visibility, and efficient retail space utilization.",
    },
    cta: {
      heading: "Make Every Aisle Work Smarter",
      description: "From double-sided racks to supermarket displays, we deliver across India.",
    },
    seo: {
      title: "Double-Sided Supermarket Island Racks in Surat",
      metaDescription: "Discover double-sided supermarket island racks in Surat to improve aisle organization, product visibility and space use in grocery and retail stores.",
      keywords: ['double side supermarket rack', 'gondola racking system', 'center aisle display rack', 'supermarket island rack manufacturer', 'grocery aisle shelving'],
    },
  },
  {
    id: 'end-cap-display',
    name: 'Supermarket End Cap Promotional Rack',
    category: 'Five Rack Options',
    categoryId: 'five-rack-options',
    tagline: 'High-Impact Aisle-End Promotional Display Unit for Fast-Moving Impulse Items',
    imageSrc: IMAGES.supermarketRacks.endCap,
    shortDescription: 'Promotional end-of-aisle racking unit designed to highlight promotional offers, high-margin products, and seasonal impulse buys at high-traffic aisle entry points.',
    detailedDescription: [
      'In modern retail merchandising, end-caps generate up to 30% of total supermarket impulse sales. SPANO End Cap Racks are designed specifically to cap the ends of double-sided island runs, capturing customer attention at the most valuable visual intersection of the retail floor.',
      'Configured with custom widths that match the total depth of the adjoining double-sided island run, creating a unified, professional architectural appearance with zero unsightly gaps.',
      'Compatible with illuminated header branding boxes, branded promotional toppers, and side wing baskets to maximize promotional conversions for FMCG brands.',
    ],
    specifications: [
      { label: 'Widths', value: '650mm, 750mm, 900mm (Engineered to match island rack depths)' },
      { label: 'Heights', value: '4.5 ft to 6.5 ft (Matches adjoining gondola height)' },
      { label: 'Shelf Depth', value: '300mm to 400mm' },
      { label: 'Header Options', value: 'Curved Metal Header, Branded Acrylic Topper, Backlit LED Sign' },
      { label: 'Load Capacity', value: '70 kg – 120 kg per shelf' },
      { label: 'Back Panel', value: 'Perforated Pegboard for blister packs or Solid Steel Sheet' },
    ],
    keyFeatures: [
      'High-visibility end-aisle orientation facing main arterial customer walkways',
      'Custom header signage bracket for discount pricing and brand sponsorships',
      'Seamless aesthetic alignment with standard SPANO double-sided runs',
    ],
    advantages: [
      'Drives impulse purchases and accelerates promotional inventory turnover',
      'Can be leased out as premium co-op advertising display space to FMCG brands',
      'Flexible shelf and pegboard hook combinations for mixed merchandise display',
    ],
    applications: [
      'Supermarket Impulse Confectionery & Snack Displays',
      'New Product Launches & Seasonal Discount Offers',
      'Beverage & Personal Care Promo End-Aisles',
    ],
    faqs: [
      {
        question: 'Does the end-cap stand independently or attach to the double-side rack?',
        answer: 'Both options are available. Our end-caps feature their own sturdy base feet and can also clamp securely onto the adjoining double-sided upright for maximum stability.',
      },
    ],
    relatedProductIds: ['double-side-rack', 'wall-unit-back-panel', 'dump-bin', 'checkout-cash-counter'],
    seoDescription: {
      heading: "Supermarket End Cap Display Racks for Promotional Products",
      text: "SPANO Industry offers end cap racks in Surat for showcasing promotional products, seasonal merchandise, special offers, and fast-moving consumer goods. These supermarket display racks make effective use of aisle ends, helping retailers improve product visibility and create organized promotional displays.",
    },
    cta: {
      heading: "Make Your Promotions Stand Out",
      description: "From end cap racks to retail displays, we deliver across India.",
    },
    seo: {
      title: "Supermarket End Cap Display Racks in Surat",
      metaDescription: "Showcase offers and popular products with supermarket end cap display racks in Surat, designed for organized, high-visibility retail displays.",
      keywords: ['end cap display rack', 'gondola end rack', 'promotional supermarket rack', 'impulse display fixture', 'retail end cap manufacturer'],
    },
  },
  {
    id: 'corner-rack-unit',
    name: 'Supermarket 90-Degree Corner Rack Unit',
    category: 'Five Rack Options',
    categoryId: 'five-rack-options',
    tagline: 'Specialized 90-Degree Corner Module Connecting Wall Runs Seamlessly',
    imageSrc: IMAGES.supermarketRacks.corner,
    shortDescription: 'Specialized 90-degree corner racking module that seamlessly connects wall runs, converting dead corner spaces into active, profitable display areas.',
    detailedDescription: [
      'Unutilized 90-degree retail corners represent lost revenue and interrupted merchandise flow. The SPANO Corner Rack Unit is precision-engineered to bridge perpendicular perimeter wall shelving runs seamlessly.',
      'Featuring curved or mitered shelf plates that align flush with adjacent standard wall units in height, depth, and color, maintaining a continuous aesthetic line around the store perimeter.',
      'Robust triangular base support provides full structural capacity for heavy bottles, spices, jars, or packaged dry goods.',
    ],
    specifications: [
      { label: 'Angle', value: '90-Degree Internal Corner Transition' },
      { label: 'Heights', value: '5 ft, 6 ft, 7 ft (Matches adjoining wall units)' },
      { label: 'Shelf Depths', value: 'Matches adjacent straight bay shelf depths' },
      { label: 'Load Capacity', value: '70 kg – 100 kg per corner shelf' },
      { label: 'Back Panel', value: 'Solid Sheet or Perforated Steel' },
    ],
    keyFeatures: [
      'Transforms dead 90-degree store corners into fully productive display shelving',
      'Matches shelf tiers and bracket angles of adjacent straight wall units',
      'Heavy-duty corner upright and base construction ensuring zero sagging',
    ],
    advantages: [
      'Creates a continuous unbroken ribbon of merchandise around the store',
      'Eliminates awkward gaps where dust and misplaced products typically accumulate',
      'Improves store aesthetic and premium supermarket ambiance',
    ],
    applications: [
      'Supermarket & Departmental Store Wall Corners',
      'Liquor & Wine Store Corner Displays',
      'Grocery & Organic Food Corner Displays',
    ],
    faqs: [
      {
        question: 'Does the corner unit work with any wall unit height?',
        answer: 'Yes, we manufacture corner units matching the exact upright heights and shelf depth configurations of your primary SPANO wall runs.',
      },
    ],
    relatedProductIds: ['wall-unit-back-panel', 'wall-mounted-unit', 'double-side-rack'],
    seoDescription: {
      heading: "Corner Display Racks for Supermarkets and Retail Stores",
      text: "Our corner rack units help retailers utilize underused corners and create organized product displays in compact spaces. SPANO Industry provides supermarket display racks in Surat for groceries, packaged goods, household products, and general merchandise, supporting efficient store layouts.",
    },
    cta: {
      heading: "Turn Every Corner Into Opportunity",
      description: "From corner shelving to custom display racks, we deliver across India.",
    },
    seo: {
      title: "Corner Display Racks for Retail Stores | SPANO",
      metaDescription: "Make better use of store corners with practical corner display racks in Surat for supermarkets, shops and modern retail spaces.",
      keywords: ['corner rack unit', 'supermarket corner display', '90 degree retail rack', 'corner shelving module', 'grocery store corner unit'],
    },
  },
  {
    id: 'wall-mounted-unit',
    name: 'Wall Mounted Shelving Unit',
    category: 'Five Rack Options',
    categoryId: 'five-rack-options',
    tagline: 'Floating Floor-Clearance Shelving for Boutiques, Pharmacies & Compact Stores',
    imageSrc: IMAGES.departmentalRacks.wallMounted,
    shortDescription: 'Direct wall-anchored shelving units providing a clean, floating aesthetic while keeping store floor space completely open for easy cleaning and shopping.',
    detailedDescription: [
      'For retail spaces with limited floor square footage or stores desiring a modern, floating, minimalist look, SPANO Wall Mounted Shelving Units mount directly to structural brick or concrete walls.',
      'Constructed with heavy-gauge slotted channel uprights that anchor firmly with expansion bolts, supporting cantilever shelf brackets that adjust to any desired elevation.',
      'Keeping the floor clear of bottom legs simplifies daily floor scrubbing, prevents dust buildup, and creates an airy, uncluttered boutique shopping atmosphere.',
    ],
    specifications: [
      { label: 'Upright Heights', value: '3 ft, 4 ft, 5 ft, 6 ft' },
      { label: 'Shelf Depths', value: '250mm, 300mm, 350mm, 400mm' },
      { label: 'Shelf Widths', value: '2 ft, 3 ft, 4 ft' },
      { label: 'Load Rating', value: '40 kg – 80 kg per shelf (Dependent on masonry anchor strength)' },
      { label: 'Shelf Materials', value: 'Powder Coated Steel, Toughened Glass, Wooden Laminated Planks' },
    ],
    keyFeatures: [
      'Direct wall-anchored channel posts leaving floor completely open and unobstructed',
      'Versatile bracket slots supporting steel, glass, or wooden shelves',
      'Clean architectural appearance favored by high-end pharmacies and gift stores',
    ],
    advantages: [
      'Maximizes narrow walkway clearances in compact city retail shops',
      'Makes floor sanitation and mop maintenance fast and hassle-free',
      'Highly economical modular wall strip system',
    ],
    applications: [
      'Retail Pharmacies & Chemists',
      'Cosmetic & Skincare Boutiques',
      'Stationery & Gift Stores',
      'Kitchenware & Compact Convenience Outlets',
    ],
    faqs: [
      {
        question: 'Can these units be installed on drywall or gypsum partitions?',
        answer: 'They require solid brick, concrete, or internal structural steel stud reinforcement to support commercial weight loads safely.',
      },
    ],
    relatedProductIds: ['wall-unit-back-panel', 'corner-rack-unit', 'cosmetic-personal-care'],
    seoDescription: {
      heading: "Wall Mounted Steel Display Racks in Surat",
      text: "SPANO Industry manufactures wall-mounted steel racks for supermarkets, hardware shops, departmental stores, and commercial spaces. These space-saving display fixtures help organize merchandise along walls while keeping products accessible, making them suitable for retail environments with limited floor space.",
    },
    cta: {
      heading: "Make More Room For Display",
      description: "From wall mounted steel racks to retail fixtures, we deliver across India.",
    },
    seo: {
      title: "Wall-Mounted Steel Racks in Surat | SPANO",
      metaDescription: "Explore wall-mounted steel racks in Surat for space-saving product displays in supermarkets, hardware shops and retail stores.",
      keywords: ['wall mounted unit', 'wall mounted retail shelving', 'floating store racks', 'pharmacy wall rack', 'commercial wall shelf system'],
    },
  },

  // ==========================================
  // 5. DISPLAY RACK & RETAIL FIXTURES
  // ==========================================
  {
    id: 'garment-fashion-display',
    name: 'Garment & Fashion Apparel Display',
    category: 'Display Rack & Retail Fixtures',
    categoryId: 'display-fixtures',
    tagline: 'Modern Boutique Hanging & Folded Apparel Displays with Wood and Chrome Accents',
    imageSrc: IMAGES.displayRacks.garmentDisplay,
    shortDescription: 'Stylish garment hanging and folded apparel display systems combining chrome hanging arms, waterfall pegs, and textured wooden shelves for apparel showrooms.',
    detailedDescription: [
      'Fashion retail demands fixtures that elevate apparel collections without competing for visual dominance. SPANO Garment & Fashion Displays blend architectural matte black or metallic uprights with bright chrome hanging rails and warm wooden presentation shelves.',
      'Engineered with versatile multi-tier hanging rods, forward-facing waterfall hooks, and flat presentation decks to showcase folded denim, t-shirts, hanging shirts, dresses, and ethnic wear.',
      'Available as wall-anchored boutique fixtures or freestanding center-floor four-way garment stands equipped with heavy-duty hidden casters or stable architectural feet.',
    ],
    specifications: [
      { label: 'Frame Material', value: 'Precision Hollow Steel Tube with Architectural Matte Finish' },
      { label: 'Hanging Accessories', value: 'Straight Chrome Hanging Rails, 7-Ball Waterfall Arms, Slanted Arms' },
      { label: 'Shelving Options', value: 'Pre-Laminated Wood, Solid Teak Grain, Frosted Glass' },
      { label: 'Standard Dimensions', value: '7 ft Height × 4 ft Width × 1.5 ft Depth' },
      { label: 'Finish', value: 'Matte Black, Brushed Brass, Rose Gold, Chrome Plating, White' },
    ],
    keyFeatures: [
      'Hybrid combination of heavy garment hanging capacity and folded apparel shelf display',
      'High-grade chrome plating that resists hanger scratching and metal friction wear',
      'Custom luxury color themes to align with branded clothing store interiors',
    ],
    advantages: [
      'Creates a high-end designer showroom ambiance that commands premium price points',
      'Enables rapid visual merchandising re-arrangements for new seasonal fashion drops',
      'Heavy structural steel framework prevents tipping under heavy winter wear or denim loads',
    ],
    applications: [
      'Men’s, Women’s & Kids Apparel Showrooms',
      'Ethnic Wear, Sarees & Bridal Boutiques',
      'Denim & Casualwear Retail Chains',
      'Sports Apparel & Activewear Outlets',
    ],
    faqs: [
      {
        question: 'Can the hanging arms hold heavy winter coats and lehengas?',
        answer: 'Yes. Our hanging rails are fabricated from heavy-gauge steel tubing welded with reinforced bracket inserts designed specifically for heavy apparel payloads.',
      },
    ],
    relatedProductIds: ['wooden-metal-rack', 'wooden-metal-combo', 'wall-unit-back-panel'],
    seoDescription: {
      heading: "Clothes Racks and Garment Display Solutions in Surat",
      text: "Our garment display racks help clothing stores, boutiques, and fashion outlets present apparel in an organized and accessible manner. SPANO Industry offers clothes racks in Surat, including practical retail display solutions for hanging garments, showcasing collections, and improving the shopping experience.",
    },
    cta: {
      heading: "Showcase Your Style With Confidence",
      description: "From clothes racks to garment displays, we deliver retail solutions across India.",
    },
    seo: {
      title: "Garment & Clothes Display Racks in Surat",
      metaDescription: "Find clothes racks and garment display solutions in Surat for boutiques, fashion outlets and apparel stores seeking organized product presentation.",
      keywords: ['garment fashion display', 'clothing store rack', 'apparel display fixture', 'boutique garment stand', 'garment showroom rack manufacturer'],
    },
  },
  {
    id: 'gift-stationery-display',
    name: 'Gift & Stationery Display Rack',
    category: 'Display Rack & Retail Fixtures',
    categoryId: 'display-fixtures',
    tagline: 'Multi-Tiered Slanted Shelf Display for Books, Greeting Cards & Fine Gifts',
    imageSrc: IMAGES.industries.bookStores,
    imageFit: 'cover',
    shortDescription: 'Multi-tiered shallow shelf units engineered for books, greeting cards, fancy gifts, and office stationery items with clear acrylic front retaining lips.',
    detailedDescription: [
      'Stationery, notebooks, greeting cards, and gift merchandise require shallow, tiered, and angled presentation to prevent covers from slumping while showcasing vibrant front-cover artwork.',
      'SPANO Gift & Stationery Display Racks feature stepped and slanted multi-tier shelves equipped with crystal-clear acrylic or wire front retainers that keep cards, books, and art supplies upright and organized.',
      'Available in bright powder-coated metal finishes with optional lower under-counter storage compartments for backup boxed inventory.',
    ],
    specifications: [
      { label: 'Shelf Configuration', value: 'Multi-Tier Slanted Step Shelves with Clear Retaining Lip' },
      { label: 'Material', value: 'High-Grade CRCA Steel + Clear Acrylic Front Lip' },
      { label: 'Dimensions', value: '5 ft to 6.5 ft Height × 3 ft Width × 1.25 ft Depth' },
      { label: 'Shelf Lip Height', value: '40mm – 60mm Transparent Acrylic Barrier' },
      { label: 'Finish', value: 'Pure White, Ivory, Pastel Mint, Custom Powder Coat' },
    ],
    keyFeatures: [
      'Angled tier shelving delivering 100% cover visibility for cards and books',
      'Durable crystal-clear acrylic front lips that keep thin stationery items upright',
      'Compact footprint designed for tight bookstore and gift shop layouts',
    ],
    advantages: [
      'Encourages customer browsing and significantly lifts impulse greeting card sales',
      'Prevents merchandise dog-earing and damage caused by deep-shelf rummaging',
      'Long-lasting steel structure far more durable than corrugated cardboard display stands',
    ],
    applications: [
      'Bookstores & University Stationers',
      'Greeting Card & Gift Boutiques',
      'Art & Craft Supply Stores',
      'Toy & Novelty Gift Shops',
    ],
    faqs: [
      {
        question: 'Are the shelf angles adjustable?',
        answer: 'Yes. Brackets can be set at flat horizontal or at 15° / 30° forward tilt angles depending on whether you are displaying thick books or thin greeting cards.',
      },
    ],
    relatedProductIds: ['gift-kids-rack', 'wooden-metal-rack', 'wall-unit-back-panel'],
    seoDescription: {
      heading: "Gift and Stationery Display Racks for Retail Shops",
      text: "SPANO Industry provides gift and stationery display racks in Surat for presenting notebooks, greeting cards, gift items, art supplies, and everyday stationery. These retail fixtures help shop owners organize products by category, improve visibility, and make better use of available display space.",
    },
    cta: {
      heading: "Make Every Product Visible",
      description: "From stationery shelving to gift displays, we deliver across India.",
    },
    seo: {
      title: "Gift & Stationery Display Racks in Surat",
      metaDescription: "Display cards, stationery and gifts neatly with retail display racks in Surat, designed for stationery shops, gift stores and specialty retailers.",
      keywords: ['gift stationery display', 'greeting card rack', 'bookstore display shelving', 'stationery store rack', 'tiered retail display stand'],
    },
  },
  {
    id: 'gift-kids-rack',
    name: 'Gift & Kids Store Display Rack',
    category: 'Display Rack & Retail Fixtures',
    categoryId: 'display-fixtures',
    tagline: 'Child-Safe, Colorful Display Units with Deep Baskets for Toys & Novelties',
    imageSrc: IMAGES.displayRacks.giftStationery,
    imageFit: 'cover',
    shortDescription: 'Vibrant, safe, and accessible toy & children merchandise display units designed for high visibility, child-safe rounded corners, and deep wire basket shelves.',
    detailedDescription: [
      'Retail spaces catering to children require lively aesthetics combined with stringent structural safety. SPANO Gift & Kids Store Racks feature smooth, rounded-edge steel frames with no sharp corners and non-toxic powder-coat finishes.',
      'Equipped with deep front wire mesh baskets to securely contain plush soft toys, balls, and boxed games, alongside flat tiers for action figures, board games, and craft sets.',
      'Engineered with low-center-of-gravity wide base feet to eliminate any tipping risk even when enthusiastic young shoppers browse lower shelves.',
    ],
    specifications: [
      { label: 'Safety Engineering', value: 'Rounded Corner Profiles, Deburred Hemmed Edges, Non-Toxic Finish' },
      { label: 'Basket Depths', value: '150mm – 250mm Wire Drop Baskets' },
      { label: 'Standard Heights', value: '4.5 ft to 5.5 ft (Kid-accessible heights)' },
      { label: 'Colors', value: 'Vibrant Yellow, Cherry Red, Sky Blue, Lime Green, Crisp White' },
      { label: 'Load Capacity', value: '50 kg – 80 kg per shelf/basket' },
    ],
    keyFeatures: [
      'Child-safe rounded corner caps and smooth rounded-tube metal frame construction',
      'Deep mesh basket shelves that prevent lightweight plush toys from falling onto floors',
      'Accessible lower tiers allowing young children to select items easily',
    ],
    advantages: [
      'Creates a cheerful, colorful family shopping atmosphere',
      'Extremely sturdy steel frame resists shaking and leaning',
      'Non-toxic, lead-free certified powder coating',
    ],
    applications: [
      'Toy Stores & Children’s Novelty Shops',
      'Kids Apparel & Footwear Stores',
      'Theme Parks & Entertainment Gift Outlets',
      'School Supply & Stationery Centers',
    ],
    faqs: [
      {
        question: 'Are the paints child-safe?',
        answer: 'Yes. All SPANO powder coatings are lead-free, non-toxic, and baked at high temperatures to produce an inert, chip-resistant finish.',
      },
    ],
    relatedProductIds: ['gift-stationery-display', 'dump-bin', 'wooden-metal-rack'],
    seoDescription: {
      heading: "Gift Shop and Kids Store Display Racks in Surat",
      text: "Our gift and kids store racks are designed for displaying toys, gifts, games, accessories, and children's merchandise. SPANO Industry supplies retail display racks in Surat that help specialty stores create attractive product arrangements while keeping merchandise organized and accessible.",
    },
    cta: {
      heading: "Create a Display That Delights",
      description: "From kids' store racks to gift displays, we deliver across India.",
    },
    seo: {
      title: "Gift & Kids Store Display Racks in Surat",
      metaDescription: "Explore gift and kids store display racks in Surat for organized, accessible presentation of toys, games, gifts and children's products.",
      keywords: ['gift kids rack', 'toy store display rack', 'kids showroom shelving', 'children store fixture', 'wire basket toy display'],
    },
  },
  {
    id: 'cosmetic-personal-care',
    name: 'Cosmetic & Personal Care Display Case',
    category: 'Display Rack & Retail Fixtures',
    categoryId: 'display-fixtures',
    tagline: 'Illuminated Luxury Glass & Steel Showcases for Premium Beauty & Cosmetics',
    imageSrc: IMAGES.customSolutions.glassDisplay,
    imageFit: 'cover',
    shortDescription: 'Premium glass and LED-illuminated cosmetics display cases designed to create a high-end luxury shopping environment for perfumes, skincare, and cosmetics.',
    detailedDescription: [
      'Beauty, perfume, and personal care products command premium margins and demand display cases that convey luxury and purity. SPANO Cosmetic Displays integrate architectural steel frames with crystal-clear toughened glass shelves, concealed LED lighting, and lockable security doors.',
      'Mirrored back panels amplify lighting and visually double product volume, while concealed warm-white or cool-white LED channel strips bring out the brilliant clarity of glass perfume bottles and luxury cosmetics packaging.',
      'Equipped with smooth-sliding lockable glass doors with plunger security locks to prevent product tampering while maintaining complete visual transparency.',
    ],
    specifications: [
      { label: 'Glass Specs', value: '8mm / 10mm Clear Toughened Safety Glass with Polished Pencil Edges' },
      { label: 'Lighting', value: 'Concealed Integrated Aluminum LED Profile Channels (4000K Natural White)' },
      { label: 'Frame', value: 'Architectural Slim-Line Steel Uprights in Matte Black / Champagne Gold / White' },
      { label: 'Back Panel', value: 'Full Mirror Reflection Panel or High-Gloss Acrylic' },
      { label: 'Security', value: 'Keyed Glass Sliding Door Plunger Locks' },
      { label: 'Base Storage', value: 'Lower Lockable Wooden/Steel Under-Counter Stock Cupboard' },
    ],
    keyFeatures: [
      'Concealed LED strip channels highlighting bottle silhouettes with zero harsh glare',
      'Mirrored rear panel doubling reflected light and visual merchandise depth',
      'Lockable sliding tempered glass doors safeguarding high-value perfumes and serums',
    ],
    advantages: [
      'Transforms cosmetic counters into an inviting, high-end beauty boutique',
      'Protects expensive testers and high-value perfumes from theft and dust',
      'Integrated lower storage keeps backup inventory ready for instant restocking',
    ],
    applications: [
      'Cosmetics, Skincare & Fragrance Showrooms',
      'Luxury Salon & Spa Product Display Counters',
      'High-End Departmental Store Beauty Counters',
      'Watch, Eyewear & Fine Accessories Boutiques',
    ],
    faqs: [
      {
        question: 'Does the unit come pre-wired for LED lighting?',
        answer: 'Yes. We supply integrated LED channels with concealed internal cable routing and a certified plug-and-play SMPS power adapter ready for standard wall socket connection.',
      },
    ],
    relatedProductIds: ['glass-display-units', 'wooden-metal-combo', 'wall-mounted-unit'],
    seoDescription: {
      heading: "Cosmetic and Personal Care Display Racks in Surat",
      text: "SPANO Industry offers cosmetic display racks for beauty stores, pharmacies, supermarkets, and personal care retailers. Designed to showcase skincare, haircare, cosmetics, and grooming products, these retail fixtures help organize merchandise, enhance product visibility, and create appealing displays.",
    },
    cta: {
      heading: "Put Your Best Products Forward",
      description: "From cosmetic racks to personal care displays, we deliver across India.",
    },
    seo: {
      title: "Cosmetic & Personal Care Display Racks in Surat",
      metaDescription: "Showcase beauty and grooming products with cosmetic and personal care display racks in Surat for retail shops, pharmacies and supermarkets.",
      keywords: ['cosmetic personal care display', 'perfume showcase cabinet', 'beauty store display rack', 'illuminated cosmetic counter', 'glass display showcase'],
    },
  },
  {
    id: 'wooden-metal-rack',
    name: 'Wooden Finish Display Rack',
    category: 'Display Rack & Retail Fixtures',
    categoryId: 'display-fixtures',
    tagline: 'Warm Artisan Retail Fixtures Blending Textured Natural Wood & Industrial Steel',
    imageSrc: IMAGES.displayRacks.woodenRack,
    shortDescription: 'Warm natural wood grain shelves paired with architectural dark steel frames, perfect for organic food, bakery, liquor, and premium retail themes.',
    detailedDescription: [
      'Modern supermarket chains and organic specialty stores are increasingly shifting toward warm, organic, and artisanal retail interiors. The SPANO Wooden Finish Display Rack pairs the structural strength of heavy industrial steel posts with the organic warmth of pre-laminated or solid wooden shelves.',
      'Finished with textured dark charcoal or matte black powder-coated uprights that contrast elegantly against natural oak, walnut, or pine wood grain patterns.',
      'Delivers the high weight-bearing capacity of steel with the sensory warmth of wood, making it the preferred choice for gourmet food markets, wineries, organic grocers, and designer clothing boutiques.',
    ],
    specifications: [
      { label: 'Upright Frame', value: 'High-Tensile Cold-Rolled Steel in Textured Matte Black / Antique Gold' },
      { label: 'Shelving Material', value: '25mm Heavy-Duty Laminated Engineered Wood with 2mm PVC Edge Banding' },
      { label: 'Wood Finishes', value: 'Natural Oak, Smoked Walnut, Rustic Teak, Wenge, Pine' },
      { label: 'Shelf Load Capacity', value: '70 kg – 110 kg per shelf level' },
      { label: 'Standard Dimensions', value: '6 ft to 7.5 ft Height × 3 ft & 4 ft Bay Widths' },
    ],
    keyFeatures: [
      'Artisan visual appeal bringing a rustic, farm-fresh feel to supermarket departments',
      'Heavy-duty steel concealed shelf support under-brackets preventing wood sag',
      'Modular bay connectors allowing continuous wood-and-metal aisle runs',
    ],
    advantages: [
      'Elevates perceived product quality and drives higher margins for organic goods',
      'PVC-sealed wood edges resist moisture, liquid spills, and humidity',
      'Combines timeless aesthetic appeal with long-term industrial durability',
    ],
    applications: [
      'Organic & Gourmet Food Supermarkets',
      'Artisanal Bakeries, Confectioneries & Cafés',
      'Wine, Beer & Liquor Showrooms',
      'Natural Cosmetics, Tea & Specialty Coffee Outlets',
    ],
    faqs: [
      {
        question: 'Is the wood finish resistant to water spills?',
        answer: 'Yes. We use commercial-grade melamine pre-laminated boards sealed with hot-melt 2mm PVC edge banding to ensure high moisture and scratch resistance.',
      },
    ],
    relatedProductIds: ['wooden-metal-combo', 'garment-fashion-display', 'wall-unit-back-panel'],
    seoDescription: {
      heading: "Wooden Finish Retail Display Racks in Surat",
      text: "Our wooden finish display racks combine practical storage with an attractive retail appearance, making them suitable for boutiques, gift shops, showrooms, and specialty stores. SPANO Industry provides retail display solutions in Surat that help showcase merchandise while complementing modern store interiors.",
    },
    cta: {
      heading: "Add Style To Your Product Display",
      description: "From wooden finish racks to custom retail fixtures, we deliver across India.",
    },
    seo: {
      title: "Wooden Finish Display Racks in Surat | SPANO",
      metaDescription: "Add a refined look to product presentation with wooden finish display racks in Surat for boutiques, showrooms and specialty retail stores.",
      keywords: ['wooden metal display rack', 'wood grocery store rack', 'bakery display shelving', 'organic food display rack', 'rustic retail shelving'],
    },
  },

  // ==========================================
  // 6. CUSTOMIZED RETAIL SOLUTIONS
  // ==========================================
  {
    id: 'wooden-metal-combo',
    name: 'Wooden & Metal Combination Units',
    category: 'Customized Retail Solutions',
    categoryId: 'customized-solutions',
    tagline: 'Architectural Hybrid Fixtures Tailored to Custom Store Floor Plans',
    imageSrc: IMAGES.customSolutions.woodenMetal,
    shortDescription: 'Hybrid racking structures seamlessly integrating solid wood elements with industrial metal uprights for high-end boutique stores and premium brand showrooms.',
    detailedDescription: [
      'When off-the-shelf retail fixtures fail to capture your brand identity or floor plan requirements, SPANO Wooden & Metal Combination Units deliver fully bespoke retail engineering. We fabricate custom structural metal skeletons clad with precision-milled timber panels, integrated lighting, and branded header accents.',
      'Our engineering team works directly from your interior design drawings or 3D store renders to execute custom dimensions, curved metal profiles, powder-coat color matching, and special shelf depths.',
      'Ideal for flagship brand retail environments that require cohesive merchandising across apparel, accessories, cosmetics, and lifestyle products.',
    ],
    specifications: [
      { label: 'Customization Scope', value: '100% Custom Dimensions, Wood Stains, Metal Coatings & Configurations' },
      { label: 'Metal Materials', value: 'Structural CRCA Tubes, Perforated Sheets, Laser-Cut Branding Panels' },
      { label: 'Wood Materials', value: 'Marine Ply, HDF, Solid Wood, Natural Veneers with PU Coating' },
      { label: 'Lighting Options', value: 'Concealed LED Strip Diffusers with Dimmer Controls' },
      { label: 'Lead Time', value: 'Custom engineered and manufactured in 10–20 days' },
    ],
    keyFeatures: [
      'Bespoke architectural engineering executed precisely to your retail architect’s CAD plans',
      'Laser-cut backlit metal brand logos and custom header signage integration',
      'Seamless concealed joinery hiding all structural screws and welding marks',
    ],
    advantages: [
      'Gives your retail brand a unique signature aesthetic that differentiates from competitors',
      'Maximizes odd architectural niches, curved walls, and column wrap-arounds',
      'Factory-built quality with rapid modular on-site bolting assembly',
    ],
    applications: [
      'Flagship Retail Brand Showrooms',
      'Luxury Lifestyle & Home Décor Stores',
      'Eyewear, Watch & Jewelry Boutiques',
      'High-End Departmental Store Shop-in-Shops',
    ],
    faqs: [
      {
        question: 'Can you manufacture directly from our architect’s 3D renders?',
        answer: 'Yes! Our in-house design and structural engineering team converts conceptual 3D renders into shop fabrication drawings and delivers exact prototypes.',
      },
    ],
    relatedProductIds: ['wooden-metal-rack', 'glass-display-units', 'garment-fashion-display'],
    seoDescription: {
      heading: "Wooden and Metal Combination Retail Display Racks",
      text: "SPANO Industry manufactures wooden and metal combination display units in Surat for retailers seeking a balance of durability and contemporary design. These versatile fixtures suit boutiques, showrooms, gift shops, and departmental stores, providing organized shelving and attractive product presentation.",
    },
    cta: {
      heading: "Combine Strength With Modern Style",
      description: "From wooden and metal racks to custom displays, we deliver across India.",
    },
    seo: {
      title: "Wood & Metal Retail Display Units in Surat",
      metaDescription: "Explore wooden and metal retail display units in Surat, combining practical shelving and contemporary style for shops, boutiques and showrooms.",
      keywords: ['wooden metal combo unit', 'custom retail fixtures', 'bespoke store display manufacturer', 'architectural shop fixtures', 'custom showroom racks'],
    },
  },
  {
    id: 'glass-display-units',
    name: 'Glass Display Cabinets',
    category: 'Customized Retail Solutions',
    categoryId: 'customized-solutions',
    tagline: 'Lockable Dust-Free Glass Showcases with Integrated LED Illumination',
    imageSrc: IMAGES.customSolutions.glassDisplay,
    shortDescription: 'Secure, dust-free glass showcases equipped with lockable sliding glass doors and concealed LED spot lighting for luxury and high-value merchandise.',
    detailedDescription: [
      'High-value merchandise like electronic gadgets, cameras, designer sunglasses, luxury watches, and jewelry requires maximum 360-degree visibility coupled with uncompromising security against shoplifting and accidental handling.',
      'SPANO Glass Display Cabinets feature high-strength aluminum or steel structural frames enclosing 8mm to 10mm clear toughened safety glass panels. Heavy-duty ball-bearing sliding or hinged glass doors are fitted with keyed cylinder plunger locks.',
      'Concealed overhead and vertical track LED spotlights provide focused illumination that makes metallic surfaces, gemstones, and premium packaging sparkle under store lights.',
    ],
    specifications: [
      { label: 'Glass Specification', value: 'Toughened Safety Glass (8mm Shelves, 6mm / 8mm Doors)' },
      { label: 'Frame Material', value: 'Anodized Aluminum Profiles or Matte Black Powder-Coated Steel' },
      { label: 'Lock Type', value: 'Keyed Cylinder Plunger Lock on Sliding Track with Master Key Options' },
      { label: 'Lighting', value: 'Top LED Canopy Downlights + Vertical Corner LED Strip Profiles' },
      { label: 'Base', value: 'Lockable Wooden / Steel Base Plinth with Concealed Storage' },
    ],
    keyFeatures: [
      'Full-perimeter tempered safety glass offering unobstructed 360-degree viewing',
      'Keyed plunger lock securing sliding glass doors against unauthorized slide access',
      'Concealed rubber dust seals preventing dust entry and keeping merchandise sparkling clean',
    ],
    advantages: [
      'Reduces inventory shrinkage and shoplifting to zero for valuable SKUs',
      'Enhances the premium perception of jewelry, watches, and smart electronics',
      'Integrated base storage allows immediate on-the-spot stock retrieval',
    ],
    applications: [
      'Electronics, Mobile Phone & Camera Stores',
      'Jewelry, Silverware & Watch Boutiques',
      'Optical & Luxury Sunglasses Showrooms',
      'Museums, Galleries & Award Trophy Showcases',
    ],
    faqs: [
      {
        question: 'Are the glass shelves height-adjustable?',
        answer: 'Yes. Glass shelves rest on precision adjustable shelf clamps mounted on internal vertical corner profiles, allowing easy height adjustments.',
      },
    ],
    relatedProductIds: ['cosmetic-personal-care', 'wooden-metal-combo', 'wall-mounted-unit'],
    seoDescription: {
      heading: "Glass Display Cabinets for Retail Stores and Showrooms",
      text: "Our glass display cabinets help retailers present valuable merchandise, accessories, gifts, and specialty products while maintaining a neat, professional appearance. SPANO Industry supplies retail display solutions in Surat for showrooms, boutiques, and commercial establishments requiring organized product presentation and visibility.",
    },
    cta: {
      heading: "Present Your Products Beautifully",
      description: "From glass display cabinets to retail fixtures, we deliver across India.",
    },
    seo: {
      title: "Glass Display Cabinets for Retail Stores | SPANO",
      metaDescription: "Discover glass display cabinets for retail stores in Surat to present accessories, gifts and specialty products in a neat, professional setting.",
      keywords: ['glass display units', 'glass showcase cabinet', 'jewelry display case', 'mobile phone glass counter', 'lockable retail showcase'],
    },
  },
  {
    id: 'hanging-hook-systems',
    name: 'Hanging & Hook Pegboard Systems',
    category: 'Customized Retail Solutions',
    categoryId: 'customized-solutions',
    tagline: 'Versatile Perforated Pegboard & Slatwall Fixtures for Hanging Merchandise',
    imageSrc: IMAGES.customSolutions.hangingSystem,
    shortDescription: 'Versatile perforated pegboard and slatwall racking with single/double prong chrome hooks for carded merchandise, accessories, and packaged hardware.',
    detailedDescription: [
      'Hanging blister-pack merchandise—such as mobile phone covers, charging cables, kitchen gadgets, hardware tools, and toy blister packs—delivers the highest sales density per square foot when organized on pegboards or slatwalls.',
      'SPANO Hanging & Hook Systems feature heavy-gauge cold-rolled perforated steel sheets with precision CNC-punched hole matrices or horizontal slatwall channels that securely hold heavy chrome-plated wire hooks.',
      'Available in freestanding center-floor double-sided rotating spinner towers, wall-mounted modules, or integrated within standard supermarket gondola bays.',
    ],
    specifications: [
      { label: 'Pegboard Hole Matrix', value: '25mm (1 inch) Center-to-Center Spacing, 6mm Hole Diameter' },
      { label: 'Hook Types', value: 'Single Prong, Double Prong, Scanner Tag Price Label Hooks' },
      { label: 'Hook Lengths', value: '4", 6", 8", 10", 12" (Heavy 5mm / 6mm Chrome Wire)' },
      { label: 'Sheet Thickness', value: '1.2mm Heavy-Gauge CRCA Perforated Steel Sheet' },
      { label: 'Load Rating', value: 'Up to 25 kg per hook (Depending on length and gauge)' },
      { label: 'Finish', value: 'Pure Polyester Powder Coated Sheet with Mirror Chrome Wire Hooks' },
    ],
    keyFeatures: [
      'Precision CNC-punched hole grid allowing instant tool-free hook repositioning',
      'Heavy-duty chrome hooks with built-in plastic price tag label flips',
      'Reinforced steel back sheet preventing hole tear-out under heavy hardware loads',
    ],
    advantages: [
      'Maximizes hanging merchandise capacity in otherwise wasted flat vertical areas',
      'Customers can easily inspect and browse blister-packed items without tearing packaging',
      'Hooks can be rearranged in seconds to accommodate different package sizes',
    ],
    applications: [
      'Mobile Phone & Electronics Accessory Shops',
      'Hardware, Tools & Electrical Stores',
      'Supermarket Impulse Hanging Aisles',
      'Automotive Spares & Bicycle Accessory Outlets',
    ],
    faqs: [
      {
        question: 'Do you supply the hanging hooks along with the perforated rack?',
        answer: 'Yes! We manufacture a complete range of single prong, double prong, waterfall multi-hooks, and scanner tag label holder hooks in 4", 6", 8", 10", and 12" lengths.',
      },
    ],
    relatedProductIds: ['slotted-rack-custom', 'wall-unit-back-panel', 'dump-bin'],
    seoDescription: {
      heading: "Retail Pegboard Display Systems with Hooks in Surat",
      text: "SPANO Industry offers hanging and hook pegboard systems for displaying tools, hardware, accessories, packaged products, and small merchandise. These flexible retail fixtures help maximize wall space, simplify product arrangement, and improve accessibility in hardware shops and modern retail stores.",
    },
    cta: {
      heading: "Organize Your Display With Ease",
      description: "From hook pegboards to hanging systems, we deliver across India.",
    },
    seo: {
      title: "Pegboard Hook Display Systems in Surat | SPANO",
      metaDescription: "Organize tools and packaged merchandise with hook pegboard display systems in Surat for hardware shops, supermarkets and retail stores.",
      keywords: ['hanging hook systems', 'perforated pegboard rack', 'slatwall display fixtures', 'retail hanging hooks', 'mobile accessory display stand'],
    },
  },
  {
    id: 'slotted-rack-custom',
    name: 'Slotted Angle Modular Systems',
    category: 'Customized Retail Solutions',
    categoryId: 'customized-solutions',
    tagline: 'Tailor-Made Modular Angle Racks for Backrooms, Mezzanines & Narrow Storage',
    imageSrc: IMAGES.customSolutions.slottedRack,
    shortDescription: 'Ultra-flexible slotted angle shelving built to custom heights, depths, and shelf counts for backroom, stockroom, or retail floor inventory storage.',
    detailedDescription: [
      'Every retail stockroom and backroom has challenging architectural obstacles—low overhead pipes, staircase under-spaces, structural columns, and uneven wall alcoves. SPANO Slotted Angle Modular Systems are custom-cut and engineered to fit your exact storage space.',
      'Manufactured with cold-formed slotted steel angles cut to your precise heights, fitted with custom-width shelf plates, and reinforced with corner gussets and cross-bracing.',
      'Can be configured into continuous L-shaped corners, back-to-back runs, or multi-shelf pigeonhole pigeon rack configurations for small SKU segregation.',
    ],
    specifications: [
      { label: 'Customization', value: 'Custom Height Cuts, Non-Standard Shelf Widths & Depths' },
      { label: 'Steel Gauge', value: '14 Gauge, 16 Gauge, 18 Gauge Options' },
      { label: 'Shelf Spacing', value: 'Fully adjustable in 25mm (1 inch) increments' },
      { label: 'Accessories', value: 'Steel Pigeon Hole Dividers, Side Cladding Sheets, Retaining Front Lips' },
      { label: 'Finish', value: 'Industrial Anti-Rust Powder Coating (Grey, Blue, Green, Custom)' },
    ],
    keyFeatures: [
      'Tailored cutting to fit difficult under-staircase and narrow storeroom alcoves',
      'Optional full-height partition dividers creating compartmentalized pigeon holes',
      'High structural load safety factor supporting dense retail backroom reserve stock',
    ],
    advantages: [
      'Zero wasted square footage in expensive retail stockrooms and backrooms',
      'Keeps reserve stock organized, counted, and fast to retrieve during busy sales hours',
      'Extremely economical cost per cubic meter of storage',
    ],
    applications: [
      'Retail Store Backroom & Stockroom Storage',
      'Hospitality Linen & Kitchen Utensil Storage',
      'Automotive Garage Fasteners & Small Parts Pigeonholes',
      'Archives, Document Storage & Bank Record Rooms',
    ],
    faqs: [
      {
        question: 'Can you provide custom-cut sizes on short notice?',
        answer: 'Yes, because we manufacture slotted angle components in-house, custom length cutting, punching, and powder coating are completed within fast turnaround times.',
      },
    ],
    relatedProductIds: ['slotted-angle-standard', 'storewell-cupboard', 'warehouse-pallet-rack'],
    seoDescription: {
      heading: "Modular Slotted Angle Steel Racking Systems in Surat",
      text: "Our modular slotted angle systems provide flexible storage configurations for warehouses, workshops, factories, and commercial facilities. SPANO Industry manufactures adjustable steel racks in Surat that can be configured to suit changing inventory requirements, helping businesses maintain organized and space-efficient storage.",
    },
    cta: {
      heading: "Design Storage That Adapts",
      description: "From adjustable slotted angle racks to modular systems, we deliver across India.",
    },
    seo: {
      title: "Modular Slotted Angle Racking in Surat | SPANO",
      metaDescription: "Explore modular slotted angle racking in Surat with adjustable steel shelving for warehouses, workshops, stockrooms and commercial storage.",
      keywords: ['slotted rack custom', 'modular slotted angle rack', 'custom backroom shelving', 'pigeon hole storage rack', 'stockroom steel racks'],
    },
  },

  // ==========================================
  // 7. RETAIL ACCESSORIES & COUNTERS
  // ==========================================
  {
    id: 'shopping-trolleys',
    name: 'Shopping Trolleys & Hand Baskets',
    category: 'Retail Accessories',
    categoryId: 'retail-accessories',
    tagline: 'Zinc-Plated Supermarket Trolleys & Ergonomic Hand Baskets for Effortless Shopping',
    imageSrc: IMAGES.accessories.trolleys,
    shortDescription: 'Smooth-rolling zinc-plated supermarket shopping trolleys and stackable hand baskets designed for effortless customer convenience and long-term durability.',
    detailedDescription: [
      'Smooth, easy-to-maneuver shopping trolleys directly influence customer dwell time and shopping cart volume. SPANO Shopping Trolleys are fabricated from high-tensile steel wire with spot-welded precision joints and electro-galvanized zinc plating with clear acrylic powder protection.',
      'Equipped with 360-degree swivel polyurethane (PU) wheels with sealed precision bearings that roll effortlessly, absorb floor vibrations, and prevent black scuff marks on supermarket tiles.',
      'Features a fold-out child safety seat with safety belt, protective corner plastic bumpers to prevent checkout counter damage, and space-saving nesting design for compact parking outside store entrances.',
    ],
    specifications: [
      { label: 'Trolley Capacities', value: '60 Liters, 80 Liters, 100 Liters, 125 Liters, 150 Liters, 180 Liters' },
      { label: 'Basket Options', value: 'Stackable 22L & 28L Hand Baskets with Metal Handles' },
      { label: 'Wheel Specification', value: '4" / 5" Heavy-Duty Polyurethane (PU) Swivel Wheels with Sealed Bearings' },
      { label: 'Plating', value: 'Bright Zinc Electroplating with Clear Baked Lacquer Topcoat' },
      { label: 'Child Seat', value: 'Fold-out ergonomically contoured baby seat with safety strap' },
      { label: 'Corner Protection', value: 'Four heavy-duty impact-absorbing rubber corner bumpers' },
    ],
    keyFeatures: [
      '360-degree silent swivel wheels providing effortless one-hand maneuvering down aisles',
      'Deep anti-rust zinc plating resisting moisture, humidity, and rainy outdoor parking',
      'Telescoping nested storage taking up minimal space in front entrance trolley corrals',
    ],
    advantages: [
      'Increases average customer basket spending by making large purchases effortless',
      'Heavy-duty wheels eliminate noisy rattling and customer frustration',
      'Child seat option keeps families shopping comfortably for longer durations',
    ],
    applications: [
      'Supermarkets & Hypermarkets',
      'Departmental Stores & Grocery Chains',
      'Cash & Carry Wholesale Depots',
      'Hardware & Garden Centers',
    ],
    faqs: [
      {
        question: 'Are replacement wheels available?',
        answer: 'Yes, we stock complete replacement wheel sets, caster forks, handles, and plastic corner bumpers for fast maintenance.',
      },
    ],
    relatedProductIds: ['checkout-cash-counter', 'dump-bin', 'double-side-rack'],
    seoDescription: {
      heading: "Shopping Trolleys and Baskets for Supermarkets in Surat",
      text: "SPANO Industry provides shopping trolleys and baskets for supermarkets, grocery stores, and departmental retailers. These essential retail accessories support convenient product collection and smooth customer movement, helping stores improve shopping convenience and maintain efficient day-to-day operations.",
    },
    cta: {
      heading: "Make Every Shopping Trip Easier",
      description: "From shopping trolleys to baskets, we supply retail essentials across India.",
    },
    seo: {
      title: "Shopping Trolleys & Baskets for Retail | SPANO",
      metaDescription: "Find shopping trolleys and baskets for supermarkets and retail stores from SPANO Industry, supporting convenient shopping and smooth store operations.",
      keywords: ['shopping trolleys', 'supermarket shopping cart manufacturer', 'grocery hand baskets', 'retail shopping trolley India', 'zinc plated supermarket cart'],
    },
  },
  {
    id: 'checkout-cash-counter',
    name: 'Supermarket Checkout Cash Counter',
    category: 'Retail Accessories',
    categoryId: 'retail-accessories',
    tagline: 'Ergonomic Cashier Counter Tables with Stainless Steel Work Surfaces',
    imageSrc: IMAGES.accessories.cashCounter,
    shortDescription: 'Ergonomic checkout counter table featuring stainless steel top, POS scanner space, lockable cash drawer, and front impulse confectionery shelves.',
    detailedDescription: [
      'The checkout counter is the final and most critical customer touchpoint in your store. SPANO Checkout Cash Counters are engineered to maximize billing speed, cashier ergonomics, and impulse sales at checkout.',
      'Manufactured with an architectural steel cabinet base and an anti-scratch 304-grade stainless steel top work surface with protective PVC edge bumpers that prevent trolley impact damage.',
      'Equipped with cutouts for barcode scanner wells, monitor display mounts, cash drawer enclosure, and front merchandising shelves for high-margin impulse chocolates and chewing gums.',
    ],
    specifications: [
      { label: 'Overall Dimensions', value: '5 ft, 6 ft, 7 ft, 8 ft Length × 3 ft Width × 34 in Height' },
      { label: 'Top Surface', value: 'Grade 304 Heavy-Gauge Brushed Stainless Steel Sheet' },
      { label: 'Cabinet Body', value: 'Powder-Coated CRCA Steel in Matching Brand Colors' },
      { label: 'Cash Drawer', value: 'Heavy-Duty Lockable Sliding Steel Drawer with Bill & Coin Tray' },
      { label: 'POS Integration', value: 'Cable routing grommets, scanner cutout, POS terminal swivel mount' },
      { label: 'Impulse Display', value: 'Front Multi-Tier Candy & Battery Impulse Wire Racks' },
      { label: 'Edge Protection', value: 'Full-Perimeter Impact-Resistant Heavy Rubber Bumper Profile' },
    ],
    keyFeatures: [
      'Premium grade 304 brushed stainless steel top resisting scratches from metal cans and barcode swipes',
      'Heavy rubber impact-absorbing bumper edge absorbing shopping trolley collisions',
      'Front impulse mini-shelving capturing high-margin last-minute impulse sales',
      'Internal lockable cash drawer and CPU storage shelf with wire management grommets',
    ],
    advantages: [
      'Accelerates billing throughput and significantly reduces customer checkout wait times',
      'Ergonomically designed height reducing cashier fatigue during long peak-hour shifts',
      'Heavy steel base prevents counter shifting or wobbling under constant customer rush',
    ],
    applications: [
      'Supermarket Checkout Counters & Express Lanes',
      'Departmental Store POS Billing Desks',
      'Convenience Stores & Mini Marts',
      'Bakery, Gourmet & Confectionery Billing Counters',
    ],
    faqs: [
      {
        question: 'Is the counter available in both Left-Hand and Right-Hand orientations?',
        answer: 'Yes! We manufacture both Left-Hand and Right-Hand configurations so billing lanes can be paired mirror-fashion for maximum queue efficiency.',
      },
      {
        question: 'Can the stainless steel top accommodate automated conveyor belts?',
        answer: 'We manufacture both flat static stainless steel checkout tables and extended motorized conveyor belt checkout counters for hypermarkets.',
      },
    ],
    relatedProductIds: ['shopping-trolleys', 'end-cap-display', 'dump-bin', 'double-side-rack'],
    seoDescription: {
      heading: "Retail Checkout Cash Counters for Modern Supermarkets",
      text: "Our checkout cash counters are designed for supermarkets, grocery stores, and departmental stores requiring an organized billing area. SPANO Industry supplies retail counters in Surat that support efficient checkout operations, practical workspace organization, and a professional retail environment.",
    },
    cta: {
      heading: "Create a Better Checkout Experience",
      description: "From cash counters to checkout fixtures, we deliver retail solutions across India.",
    },
    seo: {
      title: "Retail Checkout Cash Counters in Surat | SPANO",
      metaDescription: "Explore retail checkout cash counters in Surat for organized billing areas and efficient checkout operations in supermarkets and departmental stores.",
      keywords: ['checkout cash counter', 'supermarket billing counter', 'cashier counter table', 'retail POS desk', 'supermarket checkout counter manufacturer'],
    },
  },
  {
    id: 'dump-bin',
    name: 'Retail Promotional Dump Bin',
    category: 'Retail Accessories',
    categoryId: 'retail-accessories',
    tagline: 'Height-Adjustable Mobile Wire Dump Bins for Clearance Sales & Impulse Promotions',
    imageSrc: IMAGES.accessories.dumBin,
    shortDescription: 'Adjustable-bottom wire mesh dump bin basket designed for fast clearance sales, discounted items, and impulse buys in central store aisles.',
    detailedDescription: [
      'Promotional dump bins are one of retail’s most powerful visual cues for value, discounts, and bargains. SPANO Promotional Dump Bins feature an adjustable false-bottom mesh grid that elevates inventory as stock depletes, ensuring the bin always looks abundantly full.',
      'Constructed with heavy-gauge welded steel wire mesh panels mounted on a rigid square-tube perimeter base frame with four heavy-duty lockable caster wheels.',
      'Can be moved effortlessly anywhere across the retail floor to target high-traffic arterial intersections or entrance promotions, and folds flat when not in use for compact backroom storage.',
    ],
    specifications: [
      { label: 'Basket Sizes', value: '2 ft × 2 ft, 2.5 ft × 2.5 ft, 3 ft × 3 ft (Square or Rectangular)' },
      { label: 'Basket Height', value: '30 in to 34 in (Optimal customer reach height)' },
      { label: 'Bottom Elevation', value: '3-Position Adjustable Bottom Wire Grid Plate' },
      { label: 'Mobility', value: 'Four 2.5" Swivel Caster Wheels (2 Lockable with Foot Brakes)' },
      { label: 'Material', value: 'Heavy Welded Steel Wire with Reinforced Tube Frame' },
      { label: 'Finishing', value: 'Bright Chrome Plating or Electrostatic Pure White / Silver Powder Coat' },
    ],
    keyFeatures: [
      '3-position adjustable internal floor keeping merchandise elevated and easy to reach',
      'Smooth 360-degree caster wheels with foot brake locks for effortless floor relocation',
      'Collapsible fold-flat construction allowing compact storage during non-promotional periods',
    ],
    advantages: [
      'Triggers customer "bargain hunting" psychological shopping impulses',
      'Rapidly liquidates overstocked, end-of-season, or discounted promotional items',
      'Mobile flexibility allows rolling outdoors for weekend sidewalk sales',
    ],
    applications: [
      'Supermarket Central Aisle Clearance Promotions',
      'Apparel & Socks Bargain Dump Baskets',
      'Packaged Food & FMCG BOGO (Buy One Get One) Offers',
      'Toy & Sports Ball Promotional Displays',
    ],
    faqs: [
      {
        question: 'How much weight can the adjustable bottom hold?',
        answer: 'The reinforced wire bottom grid plate holds up to 75 kg of packaged merchandise uniformly distributed.',
      },
    ],
    relatedProductIds: ['end-cap-display', 'shopping-trolleys', 'checkout-cash-counter'],
    seoDescription: {
      heading: "Promotional Dump Bins and Retail Display Fixtures in Surat",
      text: "SPANO Industry offers promotional dump bins for supermarkets, discount stores, and retail outlets displaying offers, clearance items, packaged goods, and impulse purchases. These practical retail display fixtures help highlight promotional merchandise, encourage product discovery, and keep store layouts organized.",
    },
    cta: {
      heading: "Put Your Special Offers In Focus",
      description: "From promotional dump bins to display fixtures, we deliver across India.",
    },
    seo: {
      title: "Retail Promotional Dump Bins in Surat | SPANO",
      metaDescription: "Promote offers and clearance products with retail dump bins in Surat, ideal for supermarkets, discount stores and promotional merchandise displays.",
      keywords: ['dump bin', 'promotional dump basket', 'retail clearance bin', 'supermarket wire dump bin', 'mobile promotion basket'],
    },
  },
  {
    id: 'broom-stand',
    name: 'Broom & Hardware Display Stand',
    category: 'Retail Accessories',
    categoryId: 'retail-accessories',
    tagline: 'Specialized Multi-Slot Wire Display Stand for Long-Handled Cleaning Tools & Mops',
    imageSrc: IMAGES.accessories.broomStand,
    shortDescription: 'Specialized wire rack unit for neatly organizing long-handled cleaning tools, brooms, mops, wipers, and garden implements in hardware and retail stores.',
    detailedDescription: [
      'Long-handled products such as brooms, floor wipers, mops, dusters, and garden rakes are notorious for toppling over, tangling, and cluttering retail floor aisles. The SPANO Broom & Hardware Stand provides an orderly, vertical storage solution.',
      'Engineered with a heavy-duty grid divider on the upper tier that holds up to 36 individual handles securely upright, paired with a deep lower containment tray that captures handles and prevents bases from sliding out.',
      'Fabricated from heavy welded steel tubing and wire mesh with a wide anti-tip base frame and tough powder-coated finish.',
    ],
    specifications: [
      { label: 'Dimensions', value: '4 ft Height × 3 ft Width × 1.5 ft Depth' },
      { label: 'Handle Capacity', value: 'Holds 24 to 36 Long-Handled Cleaning Tools' },
      { label: 'Grid Dividers', value: 'Upper welded wire separator matrix' },
      { label: 'Base Tray', value: 'Deep welded steel retaining tray preventing handle slip' },
      { label: 'Frame', value: 'Square Hollow Steel Tubing with Floor Levelers' },
      { label: 'Finish', value: 'Anti-Rust Powder Coated (Industrial Black, Silver, or Custom)' },
    ],
    keyFeatures: [
      'Upper wire grid matrix holding each broom and mop strictly vertical without tangling',
      'Deep enclosed base tray preventing dirty broom heads or mops from sliding on the floor',
      'Wide anti-tip footprint maintaining stability even when loaded unevenly',
    ],
    advantages: [
      'Turns messy, tangled broom corners into a tidy, organized, and attractive display',
      'Allows shoppers to easily inspect and pull out a single broom without toppling the rest',
      'Compact floor footprint frees up valuable retail floor space',
    ],
    applications: [
      'Supermarket Cleaning & Household Supply Aisles',
      'Hardware, Paint & Building Material Stores',
      'Wholesale Cleaning Equipment & Janitorial Suppliers',
      'Garden Centers & Nursery Tool Outlets',
    ],
    faqs: [
      {
        question: 'Can this stand accommodate heavy industrial mops and rakes?',
        answer: 'Yes. The heavy welded steel frame and deep retaining tray are engineered to hold heavy commercial mops, garden rakes, and squeegees without tipping.',
      },
    ],
    relatedProductIds: ['dump-bin', 'wall-unit-back-panel', 'slotted-rack-custom'],
    seoDescription: {
      heading: "Broom and Hardware Display Stands for Retail Shops",
      text: "Our broom and hardware display stands help retailers organize cleaning tools, household accessories, hand tools, and related merchandise. SPANO Industry provides steel display racks in Surat for hardware shops, home improvement stores, and supermarkets seeking durable, space-efficient product presentation solutions.",
    },
    cta: {
      heading: "Display Every Product With Purpose",
      description: "From broom stands to hardware racks, we deliver retail solutions across India.",
    },
    seo: {
      title: "Broom & Hardware Display Stands in Surat",
      metaDescription: "Display brooms, tools and hardware with sturdy retail display stands in Surat for hardware shops, supermarkets and home improvement stores.",
      keywords: ['broom stand', 'mop display stand', 'cleaning tool display rack', 'hardware retail stand', 'broom organizer rack'],
    },
  },
];

// ==========================================
// QUERY HELPERS
// ==========================================

export function getAllProducts(): ProductDetail[] {
  return productsData;
}

export function getAllProductSlugs(): string[] {
  return productsData.map((p) => p.id);
}

export function getProductById(id: string): ProductDetail | undefined {
  return productsData.find((p) => p.id === id);
}

export function getRelatedProducts(currentId: string, limit: number = 3): ProductDetail[] {
  const current = getProductById(currentId);
  if (!current) return [];

  const explicitRelated: ProductDetail[] = [];
  for (const relId of current.relatedProductIds) {
    const found = getProductById(relId);
    if (found && found.id !== currentId) {
      explicitRelated.push(found);
    }
  }

  if (explicitRelated.length >= limit) {
    return explicitRelated.slice(0, limit);
  }

  // Fallback to other products in same category
  const sameCategory = productsData.filter(
    (p) => p.categoryId === current.categoryId && p.id !== currentId && !explicitRelated.some((er) => er.id === p.id)
  );

  return [...explicitRelated, ...sameCategory].slice(0, limit);
}
