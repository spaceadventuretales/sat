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
