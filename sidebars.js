// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  encyclopediaSidebar: [
    'intro',
    {
      type: 'category',
      label: 'History',
      items: ['history/overview', 'history/timeline', 'history/transport-history', 'history/ai-crisis-and-settlement'],
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
          label: 'AI Systems',
          items: [
            'technologies/ai/overview',
            'technologies/ai/pervasive-cognitive-infrastructure',
            'technologies/ai/bounded-artificial-cognition',
            'technologies/ai/robotic-agency-and-machine-bodies',
            'technologies/ai/human-ai-symbiosis',
            {
              type: 'category',
              label: 'Society And Work',
              items: [
                'technologies/ai/society/overview',
                'technologies/ai/society/the-ai-economy-and-human-work',
                'technologies/ai/society/ai-governance-institutions',
              ],
            },
            {
              type: 'category',
              label: 'Ethics And Survival',
              items: [
                'technologies/ai/ethics/overview',
                'technologies/ai/ethics/human-continuity-compact',
                'technologies/ai/ethics/prohibited-sovereign-ai',
                'technologies/ai/ethics/edge-cases-of-machine-personhood',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Energy Systems',
          items: [
            'technologies/energy/overview',
            'technologies/energy/annihilation-power',
            'technologies/energy/antimatter-production-and-containment',
            'technologies/energy/antimatter-foundries-traps-and-casks',
            'technologies/energy/gravity-engineering',
            'technologies/energy/antigravity-mirrors',
            'technologies/energy/micro-fusion-cells',
            'technologies/energy/energy-storage-and-transmission',
            {
              type: 'category',
              label: 'Society And Infrastructure',
              items: [
                'technologies/energy/society/overview',
                'technologies/energy/society/named-energy-infrastructure',
                'technologies/energy/society/power-authorities-and-energy-blocs',
              ],
            },
            {
              type: 'category',
              label: 'Ethics And Law',
              items: [
                'technologies/energy/ethics/overview',
                'technologies/energy/ethics/annihilation-safety-and-proliferation-law',
                'technologies/energy/ethics/energy-inequality-and-infrastructure-control',
              ],
            },
          ],
        },
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
            {
              type: 'category',
              label: 'Society And Institutions',
              items: [
                'technologies/health/society/overview',
                'technologies/health/society/hospitals-and-renewal-centers',
                'technologies/health/society/biotech-powers-and-medical-factions',
              ],
            },
            {
              type: 'category',
              label: 'Ethics And Law',
              items: [
                'technologies/health/ethics/overview',
                'technologies/health/ethics/bioethics-and-continuity-law',
                'technologies/health/ethics/illicit-biotech-and-forbidden-programs',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'New Worlds',
          items: [
            'technologies/new-worlds/overview',
            'technologies/new-worlds/matter-conversion',
            'technologies/new-worlds/planetary-reshaping-and-terraforming',
            'technologies/new-worlds/planet-belly-buttons',
            {
              type: 'category',
              label: 'Society And Failures',
              items: [
                'technologies/new-worlds/society/overview',
                'technologies/new-worlds/society/world-maker-corporations',
                'technologies/new-worlds/society/failed-and-abandoned-worlds',
              ],
            },
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
