import { IMAGES } from '@/components/data/images';

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string;
  mainImage: {
    asset?: {
      url: string;
    };
    imageUrl?: string;
    alt: string;
  };
  categories: {
    _id: string;
    title: string;
    slug: string;
  }[];
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  bodyHtml?: string;
  body?: any[];
}

export const MOCK_POSTS: BlogPost[] = [
  {
    _id: 'post-1',
    title: 'How to Choose the Right Heavy Duty Pallet Racks for Industrial Warehouses',
    slug: 'heavy-duty-pallet-racks-guide',
    excerpt:
      'A comprehensive guide to selecting selective pallet racking, beam capacities, upright frames, and safety factors for warehouse storage efficiency.',
    publishedAt: '2026-03-15T09:00:00.000Z',
    readTime: '6 min read',
    seoTitle: 'Heavy Duty Pallet Racks Guide | Industrial Warehouse Storage | SPANO',
    seoDescription:
      'Expert guide to choosing heavy duty warehouse pallet racks, load ratings, selective beam systems, and vertical space optimization in India.',
    keywords: 'heavy duty pallet racks, warehouse racking, industrial storage solutions, selective pallet racking',
    mainImage: {
      imageUrl: IMAGES.industries.warehouses,
      alt: 'Industrial Warehouse Heavy Duty Pallet Racking by SPANO Industry',
    },
    categories: [
      { _id: 'cat-1', title: 'Warehouse Storage', slug: 'warehouse-storage' },
      { _id: 'cat-2', title: 'Industrial Engineering', slug: 'industrial-engineering' },
    ],
    author: {
      name: 'SPANO Technical Engineering Team',
      role: 'Storage Systems Consultant',
      avatarUrl: IMAGES.logo,
    },
    bodyHtml: `
      <h2>The Critical Role of Heavy Duty Pallet Racks</h2>
      <p>In modern industrial logistics and manufacturing facilities, vertical storage efficiency directly impacts operating margins. Selective heavy duty pallet racking remains the gold standard for high-density palletised cargo, providing 100% immediate accessibility to every pallet location.</p>
      
      <h2>1. Understanding Weight Loads: UDL vs Point Load</h2>
      <p>Before ordering pallet racking, engineers must calculate the <strong>Uniformly Distributed Load (UDL)</strong> per pair of beams. At SPANO Industry, our box-beam profiles are cold-rolled from high-tensile steel to support between 1,000 kg and 4,000 kg per level without beam deflection exceeding L/200 structural standards.</p>
      
      <h2>2. Calculating Upright Frame Height and Aisle Width</h2>
      <p>Your warehouse clear ceiling height, sprinkler clearance, and material handling equipment (Counterbalance forklift vs Reach truck) dictate your aisle width:</p>
      <ul>
        <li><strong>Standard Aisle (Counterbalance Forklifts):</strong> 3.5m to 4.2m width required.</li>
        <li><strong>Narrow Aisle (Reach Trucks):</strong> 2.7m to 3.0m width, saving up to 30% floor area.</li>
        <li><strong>Very Narrow Aisle (VNA Turret Trucks):</strong> 1.6m to 1.8m width for maximum cubic volume.</li>
      </ul>

      <h2>3. Electrostatic Powder Coating & Durability</h2>
      <p>Industrial environments expose racking to humidity, abrasion, and chemicals. SPANO racking undergoes multi-stage chemical pretreatment followed by pure polyester electrostatic powder coating baked at 200°C for exceptional corrosion resistance.</p>

      <h2>Need a Customized Layout Plan?</h2>
      <p>Our sales engineering team provides complimentary 2D CAD warehouse layout design and load calculation assistance across India. Contact SPANO Industry today for factory-direct quotes.</p>
    `,
  },
  {
    _id: 'post-2',
    title: 'Slotted Angle Shelving vs Heavy Duty Racks: Which Is Right for Your Facility?',
    slug: 'slotted-angle-shelving-vs-heavy-duty-racks',
    excerpt:
      'Comparing slotted angle multi-tier shelving with heavy pallet racking for factories, spare parts stores, archives, and institutional warehouses.',
    publishedAt: '2026-03-22T10:30:00.000Z',
    readTime: '5 min read',
    seoTitle: 'Slotted Angle Shelving vs Heavy Duty Racks | SPANO Industry Comparison',
    seoDescription:
      'Learn the difference between industrial slotted angle racks and heavy duty pallet racking. Discover load limits, customization options, and cost analysis.',
    keywords: 'slotted angle racks, industrial shelving, warehouse storage comparison, storewell cupboard',
    mainImage: {
      imageUrl: IMAGES.industries.hardware,
      alt: 'Slotted Angle Steel Storage Racks in Industrial Facility',
    },
    categories: [
      { _id: 'cat-3', title: 'Industrial Shelving', slug: 'industrial-shelving' },
      { _id: 'cat-1', title: 'Warehouse Storage', slug: 'warehouse-storage' },
    ],
    author: {
      name: 'SPANO Technical Engineering Team',
      role: 'Storage Systems Consultant',
      avatarUrl: IMAGES.logo,
    },
    bodyHtml: `
      <h2>Storage Versatility: Matching Rack Types to Cargo</h2>
      <p>Warehouse managers often face a choice between slotted angle shelving and heavy duty pallet racking. While both provide durable steel storage, their target applications, weight limits, and material handling methods are distinctly different.</p>

      <h2>When to Choose Slotted Angle Shelving</h2>
      <p>Slotted angle racks excel in manual picking environments where goods are handled by hand rather than forklifts. Key advantages include:</p>
      <ul>
        <li><strong>Modular Customization:</strong> Adjustable shelf heights at 25mm pitch increments.</li>
        <li><strong>Cost-Effective:</strong> Lower initial capital expenditure for small parts, hardware stores, and document archives.</li>
        <li><strong>Multi-Tier Mezzanine Potential:</strong> Can be engineered into 2-tier and 3-tier catwalk structures to double floor space.</li>
      </ul>

      <h2>When Heavy Duty Racks Are Essential</h2>
      <p>If your inventory is palletised, exceeds 500 kg per shelf level, or requires forklift loading, heavy duty pallet racking is non-negotiable for safety and operational throughput.</p>

      <h2>Expert Recommendation</h2>
      <p>Most advanced manufacturing plants combine both systems: heavy duty pallet racking for raw material bulk pallets, and slotted angle shelving in tool cribs and assembly lines.</p>
    `,
  },
  {
    _id: 'post-3',
    title: 'Maximizing Supermarket Aisles: High-Density Retail Display Rack Strategies',
    slug: 'maximizing-supermarket-aisles-retail-display-racks',
    excerpt:
      'Proven retail merchandising techniques: wall racks, island gondolas, end-cap displays, and perforated panels that drive higher basket sizes.',
    publishedAt: '2026-04-02T11:00:00.000Z',
    readTime: '5 min read',
    seoTitle: 'Supermarket Display Racking Strategies | Retail Shelving | SPANO',
    seoDescription:
      'Boost store profitability and foot traffic flow with ergonomic supermarket display racks, double side gondolas, and custom retail fixtures.',
    keywords: 'supermarket racks, retail display racks, grocery gondola shelving, retail fixtures manufacturer',
    mainImage: {
      imageUrl: IMAGES.industries.supermarkets,
      alt: 'Modern Supermarket Aisle Display Racks by SPANO Industry',
    },
    categories: [
      { _id: 'cat-4', title: 'Retail & Supermarket', slug: 'retail-supermarket' },
    ],
    author: {
      name: 'SPANO Retail Design Studio',
      role: 'Retail Merchandising Specialist',
      avatarUrl: IMAGES.logo,
    },
    bodyHtml: `
      <h2>The Science of Modern Supermarket Layouts</h2>
      <p>Supermarket profitability is closely tied to customer dwell time and shelf visual clarity. High-performance retail racking does more than hold merchandise; it guides foot traffic, highlights promotional SKUs, and minimizes stock-out friction.</p>

      <h2>1. Center Store Double-Sided Gondola Racks</h2>
      <p>Double-sided island gondolas form the backbone of retail aisles. SPANO supermarket racks feature heavy-gauge uprights and reinforced bottom feet to support heavy beverage cases, oils, and grains without wobbling.</p>

      <h2>2. The High-Conversion Power of End Caps</h2>
      <p>End-cap displays situated at aisle intersections capture up to 40% more consumer attention than middle-shelf positions. Equipping end caps with header branding boards and LED light recesses dramatically increases impulsive impulse purchase rates.</p>

      <h2>3. Modular Perforated Back Panels & Accessories</h2>
      <p>By using perforated pegboard backings, retailers can easily interchange shelf brackets with Euro-hooks, wire baskets, acrylic dividers, and price data strips as product promotions rotate throughout the year.</p>
    `,
  },
];
