const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const basePath = rawBasePath ? (rawBasePath.startsWith('/') ? rawBasePath : `/${rawBasePath}`) : '';

function getImg(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}

// Central image registry — mapped across all brochure and flyer assets
export const IMAGES = {
  hero: {
    background: getImg('/images/latexImage_70350cf6c45042108f648c67e4b0f4b8.webp'),
    flyerCover: getImg('/images/latexImage_73bf32ac93819be6231b5a9f2923671b.webp'),
  },
  about: {
    main: getImg('/images/latexImage_86599dc0152c691e6b3f8bc495560d35.webp'),
    facility: getImg('/images/latexImage_b20371fa4ca4162780466c89dfe91fbc.webp'),
    quality: getImg('/images/latexImage_9bf90f30fca99c8c8ca697be2b2ae8da.webp'),
  },
  productsOverview: {
    collage1: getImg('/images/latexImage_2427faa3fdc7e151fdbe284bc1655853.webp'),
    collage2: getImg('/images/latexImage_e641b9ed108fd8baff4fb098248186da.webp'),
    storefront: getImg('/images/latexImage_963965ae44d1cc056fa9ce5aaeced96b.webp'),
    flyerBanner: getImg('/images/latexImage_1e168b4b49c6bca50805d6060842d895.webp'),
  },
  industries: {
    supermarkets: getImg('/images/latexImage_a43e6d34eddc5a5ad1e550a85723ee77.webp'), // Real supermarket aisle with snacks, double side racks & end caps
    grocery: getImg('/images/latexImage_a71a165289d853f7ed0b9ee6d0558e8d.webp'), // Organic grocery store with oil cans, packaged food & wooden shelving
    departmental: getImg('/images/latexImage_a43e6d34eddc5a5ad1e550a85723ee77.webp'), // Departmental store display
    pharmacies: getImg('/images/latexImage_9a004d8c4f8174631cd736909ffb9e71.webp'), // Glass cabinet medicine & cosmetic showcase
    garmentStores: getImg('/images/latexImage_abded6b2cbcc29737e96695bfa1e622f.webp'), // Clothing store shirts & apparel hanging rails
    electronics: getImg('/images/latexImage_82bfabc4ba8abd0a728257a744eab45e.webp'), // Electronics & Appliance store (AC units: Blue Star, Carrier, Mitsubishi)
    hardware: getImg('/images/latexImage_8fdb0aeab6963c906f6b42388245500d.webp'), // Heavy duty steel slotted angle storage racks
    warehouses: getImg('/images/latexImage_51f2c6cdafe28a3591a6431c3af1341e.webp'), // Industrial warehouse pallet racking system
    fashionRetail: getImg('/images/latexImage_de7502084c36c2bcc3809480eab3fea1.webp'), // Boutique apparel store with ethnic wear & hanging displays
    mobileShops: getImg('/images/latexImage_5baee02d56ef52e8f4d8c58c02de59a6.webp'), // Perforated pegboard & accessory hanging wall system
    bookStores: getImg('/images/latexImage_8d7a631159769401f90bf5e1eb93926e.webp'), // Bookstore & stationery aisle with pens, notebooks, and toys
    fullBleed: getImg('/images/latexImage_a7dfd594390c28ee1c76accb29d6882b.webp'),
  },
  supermarketRacks: {
    fullBleed: getImg('/images/latexImage_b8cf7241b05b3494b1862a13f088f030.webp'),
    wallUnit: getImg('/images/latexImage_2acfa9b56df287af51f1ede0aaab0cff.webp'),
    doubleSide: getImg('/images/latexImage_7df375c97e169caa86c5e6b8cb2b449d.webp'),
    endCap: getImg('/images/latexImage_bd9f5db0815e3f70b625db59a6e3df8f.webp'),
    corner: getImg('/images/latexImage_e38d059eedc3fa5d80b0b25a363c6ffa.webp'),
  },
  departmentalRacks: {
    cornerRack: getImg('/images/latexImage_e38d059eedc3fa5d80b0b25a363c6ffa.webp'),
    wallMounted: getImg('/images/latexImage_2acfa9b56df287af51f1ede0aaab0cff.webp'),
  },
  displayRacks: {
    cornerRack: getImg('/images/latexImage_e38d059eedc3fa5d80b0b25a363c6ffa.webp'),
    wallMounted: getImg('/images/latexImage_2acfa9b56df287af51f1ede0aaab0cff.webp'),
    garmentDisplay: getImg('/images/latexImage_82fd2529ed9d289924c84b0316415357.webp'), // Wooden shelves with folded shirts & hanging garments
    giftStationery: getImg('/images/latexImage_db282988c4348a6dde930cb27e8212ad.webp'), // Kids bags, diaper bags & boys wear wall display
    woodenRack: getImg('/images/latexImage_db8f8ff239edd3d0e4ef3e9503297745.webp'), // Wooden finish shelving with bottles
  },
  customSolutions: {
    woodenMetal: getImg('/images/latexImage_8424ff3ed76a8c5ea7f1e229b82af70e.webp'), // Wood & metal combination display fixture render
    glassDisplay: getImg('/images/latexImage_9a004d8c4f8174631cd736909ffb9e71.webp'),
    hangingSystem: getImg('/images/latexImage_bbadb91d47498fd08d1604f5d6f54475.webp'),
    slottedRack: getImg('/images/latexImage_fc9d4e9d2595b8ae31831f46d19a0086.webp'),
  },
  heavyDuty: {
    warehouseRack: getImg('/images/latexImage_f4bf288ceaad27909d14e73744e9d21b.webp'),
    industrialStorage: getImg('/images/latexImage_a87a5cee743afd5ac722c2499ada302a.webp'), // Yellow & grey multi-tier slotted angle industrial storage
  },
  accessories: {
    trolleys: getImg('/images/latexImage_1cfd79d11a92672cf9fe1e031a5676ae.webp'), // Shopping trolley with green basket
    dumBin: getImg('/images/latexImage_4e4e360a7025480a980bd28b50bd912c.webp'),
    broomStand: getImg('/images/latexImage_dac55bb4bf301fc5741f0e40219305ee.webp'), // Wire basket stand
    cashCounter: getImg('/images/latexImage_2e2739fffceacef8cff2798ddf84ce96.webp'), // L-shaped checkout cash counter with stainless top
  },
  clients: {
    logo1: getImg('/images/latexImage_0237888ad37242fabdc28f7cc0d95778.webp'),
    logo2: getImg('/images/latexImage_5d1b784347ae40157b3e9389d5bf084c.webp'),
    logo3: getImg('/images/latexImage_4ad1ad357e26c7c27718faacd187d928.webp'),
    logo4: getImg('/images/latexImage_09b732c38f7607f9fdf394e8b0ba7cea.webp'),
    logo5: getImg('/images/latexImage_ca6ab5f5a9630f454b18cb4b2d1d3aa4.webp'),
    logo6: getImg('/images/latexImage_3373b66f20e3266c9a38b3d85f9dbaf5.webp'),
    logo7: getImg('/images/latexImage_7f5f865c4f1000d0d312512660ac42df.webp'),
    logo8: getImg('/images/latexImage_7db7474380eba1ae42c4ea43d517a087.webp'),
    logo9: getImg('/images/latexImage_dcb577721ac9d7d05d4c4ce071dcdce3.webp'),
    logo10: getImg('/images/latexImage_3a465ecb14a1a0b5b92237a4d7c84e13.webp'),
    logo11: getImg('/images/latexImage_bb4d17f4349ed66596fd9e2be0b61927.webp'),
    logo12: getImg('/images/latexImage_c0cf6edda283a6348898d49ac90bc2f5.webp'),
  },
} as const;
