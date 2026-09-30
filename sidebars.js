// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  encyclopediaSidebar: [
    'intro',
    {
      type: 'category',
      label: 'History',
      items: ['history/overview', 'history/timeline', 'history/transport-history'],
    },
    {
      type: 'category',
      label: 'Worlds & Territories',
      items: ['worlds/overview'],
    },
    {
      type: 'category',
      label: 'Characters',
      items: ['characters/overview'],
    },
    {
      type: 'category',
      label: 'Animals',
      items: ['animals/overview'],
    },
    {
      type: 'category',
      label: 'Plants & Bioforms',
      items: ['plants/overview'],
    },
    {
      type: 'category',
      label: 'Technologies',
      items: [
        'technologies/overview',
        {
          type: 'category',
          label: 'Health And Biotech',
          items: [
            'technologies/health/overview',
            'technologies/health/body-renewal-and-soma-transfer',
            'technologies/health/last-chance-cube',
            'technologies/health/genetic-uplift-and-speciation',
            'technologies/health/augmentation-and-cyborgization',
            'technologies/health/nanomedical-repair-systems',
            'technologies/health/cosmetic-biotech-and-living-aesthetics',
            'technologies/health/autonomous-surgery-and-medical-robotics',
            'technologies/health/rapid-diagnostics-and-on-demand-therapeutics',
            'technologies/health/brain-preservation-restoration-and-identity',
            'technologies/health/anabiosis',
            'technologies/health/engineered-non-humanoid-beings',
          ],
        },
        {
          type: 'category',
          label: 'Travel Systems',
          items: [
            'technologies/travels/overview',
            'technologies/travels/wrap-engine',
            'technologies/travels/hole-teleportation',
            'technologies/travels/travel-doctrine',
            'technologies/travels/transport-geography',
            'technologies/travels/gate-classes',
            'technologies/travels/ftl-myths',
            'technologies/travels/major-hubs-and-corridors',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Devices',
      items: ['devices/overview'],
    },
    {
      type: 'category',
      label: 'Starships',
      items: [
        'starships/overview',
        'starships/wrap-capable-starships',
        'starships/ship-classes',
        'starships/notable-vessels',
      ],
    },
    {
      type: 'category',
      label: 'Factions & Companies',
      items: ['factions/overview'],
    },
    {
      type: 'category',
      label: 'Ideologies & Regimes',
      items: ['ideologies/overview'],
    },
    {
      type: 'category',
      label: 'Events & Festivals',
      items: ['events/overview'],
    },
  ],
};

export default sidebars;
