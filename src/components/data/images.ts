const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Central image registry — all 56 latexImage_*.png files mapped by section
export const IMAGES = {
  hero: {
    background: `${basePath}/images/latexImage_70350cf6c45042108f648c67e4b0f4b8.png`,
  },
  about: {
    main: `${basePath}/images/latexImage_86599dc0152c691e6b3f8bc495560d35.png`,
  },
  productsOverview: {
    collage1: `${basePath}/images/latexImage_2427faa3fdc7e151fdbe284bc1655853.png`,
    collage2: `${basePath}/images/latexImage_e641b9ed108fd8baff4fb098248186da.png`,
    storefront: `${basePath}/images/latexImage_963965ae44d1cc056fa9ce5aaeced96b.png`,
  },
  industries: {
    photo1: `${basePath}/images/latexImage_4829dc80931c1c8db89cceeabb8111db.png`,
    photo2: `${basePath}/images/latexImage_46f2e72c416ccd9dee7646782ea9138c.png`,
    photo3: `${basePath}/images/latexImage_82bfabc4ba8abd0a728257a744eab45e.png`,
    photo4: `${basePath}/images/latexImage_a71a165289d853f7ed0b9ee6d0558e8d.png`,
    photo5: `${basePath}/images/latexImage_c51862a88d575ef4da1751100fe955cb.png`,
    fullBleed: `${basePath}/images/latexImage_a7dfd594390c28ee1c76accb29d6882b.png`,
    photo6: `${basePath}/images/latexImage_5bd8f11c9556bf2b7e5151b2ca912fc8.png`,
    photo7: `${basePath}/images/latexImage_abded6b2cbcc29737e96695bfa1e622f.png`,
    photo8: `${basePath}/images/latexImage_de7502084c36c2bcc3809480eab3fea1.png`,
  },
  supermarketRacks: {
    fullBleed: `${basePath}/images/latexImage_b8cf7241b05b3494b1862a13f088f030.png`,
    wallUnit: `${basePath}/images/latexImage_fe2c10473f1ef2b94b0bf25d4afcbbf5.png`,
  },
  departmentalRacks: {
    cornerRack: `${basePath}/images/latexImage_aae68edf4d1012dbbb34afbcc205a271.png`,
    wallMounted: `${basePath}/images/latexImage_5b4666c151563aeef90b8ffc2db24139.png`,
  },
  displayRacks: {
    cornerRack: `${basePath}/images/latexImage_8fbf6f4c8a59b233c634ba456a77bf02.png`,
    wallMounted: `${basePath}/images/latexImage_b9d3a052be13f68fafe2e9875e468dad.png`,
    garmentDisplay: `${basePath}/images/latexImage_db8f8ff239edd3d0e4ef3e9503297745.png`,
    giftStationery: `${basePath}/images/latexImage_7605745bfab44f4e606b023d86f4c0bd.png`,
  },
  customSolutions: {
    woodenMetal: `${basePath}/images/latexImage_fe68958a4c8215e592fa81f2c3f49b90.png`,
    glassDisplay: `${basePath}/images/latexImage_82fd2529ed9d289924c84b0316415357.png`,
    hangingSystem: `${basePath}/images/latexImage_5baee02d56ef52e8f4d8c58c02de59a6.png`,
    slottedRack: `${basePath}/images/latexImage_db282988c4348a6dde930cb27e8212ad.png`,
  },
  heavyDuty: {
    warehouseRack: `${basePath}/images/latexImage_f4bf288ceaad27909d14e73744e9d21b.png`,
  },
  accessories: {
    trolleys: `${basePath}/images/latexImage_2e2739fffceacef8cff2798ddf84ce96.png`,
    dumBin: `${basePath}/images/latexImage_4e4e360a7025480a980bd28b50bd912c.png`,
    broomStand: `${basePath}/images/latexImage_dac55bb4bf301fc5741f0e40219305ee.png`,
    cashCounter: `${basePath}/images/latexImage_1cfd79d11a92672cf9fe1e031a5676ae.png`,
    p5: `${basePath}/images/latexImage_58186365b90fca7f690f1eb45edc4e01.png`,
    p6: `${basePath}/images/latexImage_3fe3ce43b3ccedc9e9db1efaf498cb2e.png`,
    p7: `${basePath}/images/latexImage_bbadb91d47498fd08d1604f5d6f54475.png`,
    p8: `${basePath}/images/latexImage_8424ff3ed76a8c5ea7f1e229b82af70e.png`,
    p9: `${basePath}/images/latexImage_9a004d8c4f8174631cd736909ffb9e71.png`,
    p10: `${basePath}/images/latexImage_a174d1aeacc37afe4695fc4eb1e97315.png`,
  },
  clients: {
    logo1: `${basePath}/images/latexImage_0237888ad37242fabdc28f7cc0d95778.png`,
    logo2: `${basePath}/images/latexImage_5d1b784347ae40157b3e9389d5bf084c.png`,
    logo3: `${basePath}/images/latexImage_4ad1ad357e26c7c27718faacd187d928.png`,
    logo4: `${basePath}/images/latexImage_09b732c38f7607f9fdf394e8b0ba7cea.png`,
    logo5: `${basePath}/images/latexImage_ca6ab5f5a9630f454b18cb4b2d1d3aa4.png`,
    logo6: `${basePath}/images/latexImage_3373b66f20e3266c9a38b3d85f9dbaf5.png`,
    logo7: `${basePath}/images/latexImage_7f5f865c4f1000d0d312512660ac42df.png`,
    logo8: `${basePath}/images/latexImage_7db7474380eba1ae42c4ea43d517a087.png`,
    logo9: `${basePath}/images/latexImage_dcb577721ac9d7d05d4c4ce071dcdce3.png`,
    logo10: `${basePath}/images/latexImage_3a465ecb14a1a0b5b92237a4d7c84e13.png`,
    logo11: `${basePath}/images/latexImage_bb4d17f4349ed66596fd9e2be0b61927.png`,
    logo12: `${basePath}/images/latexImage_c0cf6edda283a6348898d49ac90bc2f5.png`,
  },
} as const;
