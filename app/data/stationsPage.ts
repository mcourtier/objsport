import type { StationsPageContent } from '~/types/station'

export const stationsPageContent: StationsPageContent = {
  title: 'Stations',
  description:
    'Découvrez les stations Sport-Santé partenaires d’Objectif Sport — lieux de soins, de réadaptation et de performance.',
  hero: {
    title: 'Nos stations',
    titleAccent: 'Sur le terrain',
    tagline: 'Soins • Réadaptation • Performance',
    showTagline: true,
    description:
      'Des établissements partenaires pour accompagner la <strong>réadaptation</strong> et la reprise d’activité, au plus près des besoins des patients et des sportifs.',
    backgroundImage: '/images/hero/stations.png',
    backgroundImageAlt:
      'Athlète en posture d’équilibre — stations Sport-Santé Objectif Sport',
  },
  intro: {
    title: 'Des',
    titleAccent: 'professionnels',
    titleSuffix: 'au cœur du concept',
    features: [
      {
        title: 'Des dirigeants engagés',
        body: 'Chaque Station est dirigée par des professionnels de santé et du sport, experts dans leur domaine. Ils portent le projet localement et garantissent la qualité, la cohérence et l’excellence des services proposés.',
      },
      {
        title: 'Un réseau plus grand',
        body: 'Toutes les Stations sont connectées au réseau Objectif Sport. Partage d’expertises, formations, outils communs, événements et standards de qualité. Une force collective au service de la santé et de la performance.',
      },
    ],
  },
  stations: [
    {
      id: 'clinique-les-trois-tours',
      name: 'Clinique les Trois Tours',
      location: 'La Destrousse (13112)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR), spécialisée en réhabilitation respiratoire et ORL.',
      image: '/images/stations/clinique-des-3-tours.jpg',
      imageAlt: 'Façade de la Clinique les Trois Tours à La Destrousse',
      website:
        'https://www.inicea.fr/smr/clinique-les-trois-tours-bouches-du-rhone-13112',
    },
    {
      id: 'centre-ambulatoire-aubergenville',
      name: 'Centre Ambulatoire Aubergenville',
      location: 'Aubergenville (78410)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Centre Ambulatoire Aubergenville — Aubergenville (78410)',
      website:
        'https://www.inicea.fr/sante-mentale/centre-ambulatoire-aubergenville-78410',
    },
    {
      id: 'centre-ambulatoire-benesse-maremne',
      name: 'Centre Ambulatoire Bénesse-Maremne',
      location: 'Bénesse-Maremne (40230)',
      description:
        'Hôpital de jour.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Centre Ambulatoire Bénesse-Maremne — Bénesse-Maremne (40230)',
      website:
        'https://www.inicea.fr/sante-mentale/centre-ambulatoire-benesse-maremne-landes-40230',
    },
    {
      id: 'centre-ambulatoire-cenon',
      name: 'Centre Ambulatoire Cenon',
      location: 'Cenon (33150)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Centre Ambulatoire Cenon — Cenon (33150)',
      website:
        'https://www.inicea.fr/sante-mentale/centre-ambulatoire-cenon-33150',
    },
    {
      id: 'centre-ambulatoire-de-readaptation-du-xxeme',
      name: 'Centre ambulatoire de réadaptation du XXème',
      location: 'Paris (75020)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Centre ambulatoire de réadaptation du XXème — Paris (75020)',
      website:
        'https://www.inicea.fr/smr/centre-ambulatoire-de-readaptation-du-20eme-paris-75020',
    },
    {
      id: 'centre-ambulatoire-epinal',
      name: 'Centre Ambulatoire Epinal',
      location: 'Épinal (88000)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Centre Ambulatoire Epinal — Épinal (88000)',
      website:
        'https://www.inicea.fr/sante-mentale/centre-ambulatoire-epinal-88000',
    },
    {
      id: 'centre-ambulatoire-livry-gargan',
      name: 'Centre Ambulatoire Livry-Gargan',
      location: 'Livry-Gargan (93130)',
      description:
        'Hôpital de jour.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Centre Ambulatoire Livry-Gargan — Livry-Gargan (93130)',
      website:
        'https://www.inicea.fr/sante-mentale/centre-ambulatoire-livry-gargan-seine-saint-denis-93130',
    },
    {
      id: 'centre-ambulatoire-lyon',
      name: 'Centre Ambulatoire Lyon',
      location: 'Lyon (69006)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Centre Ambulatoire Lyon — Lyon (69006)',
      website:
        'https://www.inicea.fr/sante-mentale/centre-ambulatoire-lyon-69006',
    },
    {
      id: 'centre-ambulatoire-mont-de-marsan',
      name: 'Centre Ambulatoire Mont-de-Marsan',
      location: 'Saint-Pierre-du-Mont (40280)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Centre Ambulatoire Mont-de-Marsan — Saint-Pierre-du-Mont (40280)',
      website:
        'https://www.inicea.fr/sante-mentale/centre-ambulatoire-mont-de-marsan-saint-pierre-du-mont-40280',
    },
    {
      id: 'centre-ambulatoire-saint-avold',
      name: 'Centre Ambulatoire Saint-Avold',
      location: 'Saint-Avold (57500)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Centre Ambulatoire Saint-Avold — Saint-Avold (57500)',
      website:
        'https://www.inicea.fr/sante-mentale/centre-ambulatoire-saint-avold-57500',
    },
    {
      id: 'centre-ambulatoire-tours',
      name: 'Centre Ambulatoire Tours',
      location: 'Tours (37000)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Centre Ambulatoire Tours — Tours (37000)',
      website:
        'https://www.inicea.fr/sante-mentale/centre-ambulatoire-tours-37000',
    },
    {
      id: 'centre-ambulatoire-villefranche-sur-saone',
      name: 'Centre Ambulatoire Villefranche-sur-Saône',
      location: 'Villefranche-sur-Saône (69400)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Centre Ambulatoire Villefranche-sur-Saône — Villefranche-sur-Saône (69400)',
      website:
        'https://www.inicea.fr/sante-mentale/centre-ambulatoire-villefranche-sur-saone-69400',
    },
    {
      id: 'clinique-alma-sante',
      name: 'Clinique Alma santé',
      location: 'Montrond-les-Bains (42210)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Alma santé — Montrond-les-Bains (42210)',
      website:
        'https://www.inicea.fr/smr/clinique-alma-sante-loire-42210',
    },
    {
      id: 'clinique-bellecombe',
      name: 'Clinique Bellecombe',
      location: 'Lyon (69003)',
      description:
        'Unité de soins longue durée (USLD) et EHPAD.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Bellecombe — Lyon (69003)',
      website:
        'https://www.inicea.fr/smr/clinique-bellecombe-rhone-69003',
    },
    {
      id: 'clinique-broceliande',
      name: 'Clinique Brocéliande',
      location: 'Caen (14000)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Brocéliande — Caen (14000)',
      website:
        'https://www.inicea.fr/smr/clinique-broceliande-calvados-14000',
    },
    {
      id: 'clinique-canal-de-lourcq',
      name: 'Clinique Canal de l’Ourcq',
      location: 'Paris (75019)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Canal de l’Ourcq — Paris (75019)',
      website:
        'https://www.inicea.fr/smr/clinique-canal-de-l-ourcq-paris-75019',
    },
    {
      id: 'clinique-cap-ferrieres',
      name: 'Clinique Cap Ferrières',
      location: 'Martigues (13500)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Cap Ferrières — Martigues (13500)',
      website:
        'https://www.inicea.fr/smr/clinique-cap-ferrieres-bouches-du-Rhone-13500',
    },
    {
      id: 'clinique-cote-normande',
      name: 'Clinique Côte Normande',
      location: 'Ifs (14123)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Côte Normande — Ifs (14123)',
      website:
        'https://www.inicea.fr/smr/clinique-cote-normande-ifs-14123',
    },
    {
      id: 'clinique-de-blagnac',
      name: 'Clinique de Blagnac',
      location: 'Blagnac (31700)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique de Blagnac — Blagnac (31700)',
      website:
        'https://www.inicea.fr/smr/clinique-blagnac-haute-garonne-31700',
    },
    {
      id: 'clinique-de-gargan',
      name: 'Clinique de Gargan',
      location: 'Livry-Gargan (93190)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique de Gargan — Livry-Gargan (93190)',
      website:
        'https://www.inicea.fr/smr/clinique-gargan-seine-saint-denis-93190',
    },
    {
      id: 'clinique-de-gleize',
      name: 'Clinique de Gleizé',
      location: 'Gleizé (69400)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique de Gleizé — Gleizé (69400)',
      website:
        'https://www.inicea.fr/smr/clinique-gleize-rhone-69400',
    },
    {
      id: 'clinique-de-la-mare-o-dans',
      name: 'Clinique de la Mare Ô Dans',
      location: 'Damps (27340)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique de la Mare Ô Dans — Damps (27340)',
      website:
        'https://www.inicea.fr/sante-mentale/clinique-la-mare-o-dans-damps-27340',
    },
    {
      id: 'clinique-de-lossau',
      name: 'Clinique de l’Ossau',
      location: 'Gan (64290)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique de l’Ossau — Gan (64290)',
      website:
        'https://www.inicea.fr/smr/clinique-l-ossau-pyrenees-atlantiques-64290',
    },
    {
      id: 'clinique-de-regennes',
      name: 'Clinique de Régennes',
      location: 'Appoigny (89380)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique de Régennes — Appoigny (89380)',
      website:
        'https://www.inicea.fr/sante-mentale/clinique-de-regennes-appoigny-89380',
    },
    {
      id: 'clinique-de-vontes',
      name: 'Clinique de Vontes',
      location: 'Esvres-sur-Indre (37320)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique de Vontes — Esvres-sur-Indre (37320)',
      website:
        'https://www.inicea.fr/sante-mentale/clinique-de-vontes-esvres-sur-indre-37320',
    },
    {
      id: 'clinique-des-deux-lions',
      name: 'Clinique des Deux Lions',
      location: 'Salon-de-Provence (13300)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique des Deux Lions — Salon-de-Provence (13300)',
      website:
        'https://www.inicea.fr/smr/clinique-des-deux-lions-salon-de-provence-13300',
    },
    {
      id: 'clinique-des-vallees',
      name: 'Clinique des Vallées',
      location: 'Annemasse (74108)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique des Vallées — Annemasse (74108)',
      website:
        'https://www.inicea.fr/sante-mentale/clinique-des-vallees-annemasse-74108',
    },
    {
      id: 'clinique-du-pays-de-seine',
      name: 'Clinique du Pays de Seine',
      location: 'Bois-le-Roi (77590)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique du Pays de Seine — Bois-le-Roi (77590)',
      website:
        'https://www.inicea.fr/sante-mentale/clinique-du-pays-de-seine-bois-le-roi-77590',
    },
    {
      id: 'clinique-du-perreux',
      name: 'Clinique du Perreux',
      location: 'Le Perreux-sur-Marne (94170)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique du Perreux — Le Perreux-sur-Marne (94170)',
      website:
        'https://www.inicea.fr/smr/clinique-le-perreux-sur-marne-val-de-marne-94170',
    },
    {
      id: 'clinique-du-souffle-la-solane',
      name: 'Clinique du Souffle la Solane',
      location: 'Osséja (66340)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique du Souffle la Solane — Osséja (66340)',
      website:
        'https://www.inicea.fr/smr/clinique-souffle-la-solane-pyrenees-orientales-66340',
    },
    {
      id: 'clinique-du-souffle-la-vallonie',
      name: 'Clinique du Souffle La Vallonie',
      location: 'Lodève (34700)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique du Souffle La Vallonie — Lodève (34700)',
      website:
        'https://www.inicea.fr/smr/clinique-du-souffle-la-vallonie-herault-34700',
    },
    {
      id: 'clinique-du-souffle-le-pontet',
      name: 'Clinique du Souffle Le Pontet',
      location: 'Plateau d\'Hauteville (01110)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique du Souffle Le Pontet — Plateau d\'Hauteville (01110)',
      website:
        'https://www.inicea.fr/smr/clinique-du-souffle-le-pontet-ain-01110',
    },
    {
      id: 'clinique-du-souffle-les-acacias',
      name: 'Clinique du Souffle Les Acacias',
      location: 'Briançon (05107)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique du Souffle Les Acacias — Briançon (05107)',
      website:
        'https://www.inicea.fr/smr/clinique-du-souffle-les-acacias-hautes-alpes-05107',
    },
    {
      id: 'clinique-du-souffle-les-clarines',
      name: 'Clinique du Souffle Les Clarines',
      location: 'Riom-ès-Montagnes (15400)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique du Souffle Les Clarines — Riom-ès-Montagnes (15400)',
      website:
        'https://www.inicea.fr/smr/clinique-souffle-les-clarines-cantal-15400',
    },
    {
      id: 'clinique-du-senonais',
      name: 'Clinique du Sénonais',
      location: 'Sens (89100)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique du Sénonais — Sens (89100)',
      website:
        'https://www.inicea.fr/smr/clinique-du-senonais-sens-89100',
    },
    {
      id: 'clinique-du-val-de-seine',
      name: 'Clinique du Val de Seine',
      location: 'Louveciennes (78430)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique du Val de Seine — Louveciennes (78430)',
      website:
        'https://www.inicea.fr/smr/clinique-val-de-seine-yvelines-78430',
    },
    {
      id: 'clinique-du-val-josselin',
      name: 'Clinique du Val Josselin',
      location: 'Yffiniac (22120)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique du Val Josselin — Yffiniac (22120)',
      website:
        'https://www.inicea.fr/sante-mentale/clinique-du-val-josselin-yffiniac-22120',
    },
    {
      id: 'clinique-du-velay',
      name: 'Clinique du Velay',
      location: 'Le Puy-en-Velay (43000)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique du Velay — Le Puy-en-Velay (43000)',
      website:
        'https://www.inicea.fr/smr/clinique-du-velay-haute-loire-43000',
    },
    {
      id: 'clinique-dangoulins-sur-mer',
      name: 'Clinique d’Angoulins-sur-Mer',
      location: 'Angoulins (17690)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique d’Angoulins-sur-Mer — Angoulins (17690)',
      website:
        'https://www.inicea.fr/smr/clinique-angoulins-sur-mer-charente-maritime-17690',
    },
    {
      id: 'clinique-dosny',
      name: 'Clinique d’Osny',
      location: 'Osny (95520)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique d’Osny — Osny (95520)',
      website:
        'https://www.inicea.fr/sante-mentale/centre-de-psychotherapie-dosny-95520',
    },
    {
      id: 'clinique-estela',
      name: 'Clinique Estela',
      location: 'Toulouse (31100)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Estela — Toulouse (31100)',
      website:
        'https://www.inicea.fr/smr/clinique-estela-haute-garonne-31100',
    },
    {
      id: 'clinique-glanum',
      name: 'Clinique Glanum',
      location: 'Saint-Rémy-de-Provence (13210)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Glanum — Saint-Rémy-de-Provence (13210)',
      website:
        'https://www.inicea.fr/smr/clinique-glanum-bouches-du-rhone-13210',
    },
    {
      id: 'clinique-gustav-zander',
      name: 'Clinique Gustav Zander',
      location: 'Aix-les-Bains (73100)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Gustav Zander — Aix-les-Bains (73100)',
      website:
        'https://www.inicea.fr/smr/clinique-gustav-zander-savoie-73100',
    },
    {
      id: 'clinique-jouvence-nutrition',
      name: 'Clinique Jouvence Nutrition',
      location: 'Messigny-et-Vantoux (21380)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Jouvence Nutrition — Messigny-et-Vantoux (21380)',
      website:
        'https://www.inicea.fr/smr/clinique-jouvence-nutrition-messigny-et-vantoux-21380',
    },
    {
      id: 'clinique-la-bressane',
      name: 'Clinique la Bressane',
      location: 'Varennes-Saint-Sauveur (71480)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique la Bressane — Varennes-Saint-Sauveur (71480)',
      website:
        'https://www.inicea.fr/smr/clinique-la-bressane-saone-et-loire-71480',
    },
    {
      id: 'clinique-la-condamine',
      name: 'Clinique la Condamine',
      location: 'Thueyts (07330)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique la Condamine — Thueyts (07330)',
      website:
        'https://www.inicea.fr/smr/clinique-la-condamine-ardeche-07330',
    },
    {
      id: 'clinique-la-marette',
      name: 'Clinique La Marette',
      location: 'Saclas (91690)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique La Marette — Saclas (91690)',
      website:
        'https://www.inicea.fr/smr/clinique-la-marette-essonne-91690',
    },
    {
      id: 'clinique-la-vernede',
      name: 'Clinique La Vernède',
      location: 'Conques sur Orbiel (11600)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique La Vernède — Conques sur Orbiel (11600)',
      website:
        'https://www.inicea.fr/smr/clinique-la-vernede-aude-11600',
    },
    {
      id: 'clinique-le-balcon-lyonnais',
      name: 'Clinique le Balcon Lyonnais',
      location: 'Sainte-Foy-Lès-Lyon (69110)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique le Balcon Lyonnais — Sainte-Foy-Lès-Lyon (69110)',
      website:
        'https://www.inicea.fr/smr/clinique-le-balcon-lyonnais-rhone-69110',
    },
    {
      id: 'clinique-le-chateau',
      name: 'Clinique Le Château',
      location: 'Cahuzac (81540)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Le Château — Cahuzac (81540)',
      website:
        'https://www.inicea.fr/smr/clinique-le-chateau-tarn-81540',
    },
    {
      id: 'clinique-le-clos-montaigne',
      name: 'Clinique Le Clos Montaigne',
      location: 'Montrond-les-Bains (42210)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Le Clos Montaigne — Montrond-les-Bains (42210)',
      website:
        'https://www.inicea.fr/sante-mentale/clinique-le-clos-montaigne-loire-42210',
    },
    {
      id: 'clinique-le-golfe',
      name: 'Clinique Le Golfe',
      location: 'Cogolin (83310)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Le Golfe — Cogolin (83310)',
      website:
        'https://www.inicea.fr/sante-mentale/clinique-le-golfe-var-83310',
    },
    {
      id: 'clinique-le-grand-parc',
      name: 'Clinique Le Grand Parc',
      location: 'Guyancourt (78280)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Le Grand Parc — Guyancourt (78280)',
      website:
        'https://www.inicea.fr/smr/clinique-le-grand-parc-yvelines-78280',
    },
    {
      id: 'clinique-le-haut-lignon',
      name: 'Clinique le Haut Lignon',
      location: 'Le Chambon-sur-Lignon (43400)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique le Haut Lignon — Le Chambon-sur-Lignon (43400)',
      website:
        'https://www.inicea.fr/sante-mentale/clinique-le-haut-lignon-haute-loire-43400',
    },
    {
      id: 'clinique-le-mas-blanc',
      name: 'Clinique Le Mas Blanc',
      location: 'Jarnac (16200)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Le Mas Blanc — Jarnac (16200)',
      website:
        'https://www.inicea.fr/smr/clinique-le-mas-blanc-charente-16200',
    },
    {
      id: 'clinique-le-mont-ventoux',
      name: 'Clinique Le Mont Ventoux',
      location: 'Carpentras (84200)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Le Mont Ventoux — Carpentras (84200)',
      website:
        'https://www.inicea.fr/smr/clinique-mont-ventoux-vaucluse-84200',
    },
    {
      id: 'clinique-le-mont-veyrier',
      name: 'Clinique Le Mont Veyrier',
      location: 'Argonay (74370)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Le Mont Veyrier — Argonay (74370)',
      website:
        'https://www.inicea.fr/smr/clinique-le-mont-veyrier-haute-savoie-74370',
    },
    {
      id: 'clinique-le-tinailler',
      name: 'Clinique le Tinailler',
      location: 'Hurigny (71870)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique le Tinailler — Hurigny (71870)',
      website:
        'https://www.inicea.fr/smr/clinique-le-tinailler-saone-et-loire-71870',
    },
    {
      id: 'clinique-le-verdon',
      name: 'Clinique le Verdon',
      location: 'Gréoux-les-Bains (04800)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique le Verdon — Gréoux-les-Bains (04800)',
      website:
        'https://www.inicea.fr/smr/clinique-le-verdon-alpes-de-haute-provence-04800',
    },
    {
      id: 'clinique-les-4-fontaines',
      name: 'Clinique les 4 Fontaines',
      location: 'Narbonne (11100)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique les 4 Fontaines — Narbonne (11100)',
      website:
        'https://www.inicea.fr/smr/clinique-les-quatre-fontaines-aude-11100',
    },
    {
      id: 'clinique-les-arbelles',
      name: 'Clinique Les Arbelles',
      location: 'Bourg-en-Bresse (01000)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Les Arbelles — Bourg-en-Bresse (01000)',
      website:
        'https://www.inicea.fr/smr/clinique-les-arbelles-ain-01000',
    },
    {
      id: 'clinique-les-bruyeres',
      name: 'Clinique Les Bruyères',
      location: 'Létra (69620)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Les Bruyères — Létra (69620)',
      website:
        'https://www.inicea.fr/smr/clinique-les-bruyeres-rhone-69620',
    },
    {
      id: 'clinique-les-cypres',
      name: 'Clinique Les Cyprès',
      location: 'Montfavet (84140)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Les Cyprès — Montfavet (84140)',
      website:
        'https://www.inicea.fr/smr/clinique-les-cypres-vaucluse-84140',
    },
    {
      id: 'clinique-les-deux-lys',
      name: 'Clinique Les Deux Lys',
      location: 'Thyez (74300)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Les Deux Lys — Thyez (74300)',
      website:
        'https://www.inicea.fr/smr/clinique-les-deux-lys-haute-savoie-74300',
    },
    {
      id: 'clinique-les-flots',
      name: 'Clinique Les Flots',
      location: 'Talence (33400)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Les Flots — Talence (33400)',
      website:
        'https://www.inicea.fr/smr/clinique-flots-gironde-33400',
    },
    {
      id: 'clinique-les-grands-chenes',
      name: 'Clinique Les Grands Chênes',
      location: 'Bordeaux (33021)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Les Grands Chênes — Bordeaux (33021)',
      website:
        'https://www.inicea.fr/smr/clinique-les-grands-chenes-gironde-33021',
    },
    {
      id: 'clinique-les-granges',
      name: 'Clinique Les Granges',
      location: 'Échirolles (38130)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Les Granges — Échirolles (38130)',
      website:
        'https://www.inicea.fr/smr/clinique-les-granges-isere-38130',
    },
    {
      id: 'clinique-les-hauts-de-cenon',
      name: 'Clinique les Hauts de Cenon',
      location: 'Cenon (33150)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique les Hauts de Cenon — Cenon (33150)',
      website:
        'https://www.inicea.fr/smr/clinique-les-hauts-de-cenon-gironde-33150',
    },
    {
      id: 'clinique-les-hellenides',
      name: 'Clinique les Hellenides',
      location: 'Contes (06390)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique les Hellenides — Contes (06390)',
      website:
        'https://www.inicea.fr/smr/clinique-les-hellenides-alpes-maritimes-06390',
    },
    {
      id: 'clinique-les-horizons',
      name: 'Clinique Les Horizons',
      location: 'Cambes (33880)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Les Horizons — Cambes (33880)',
      website:
        'https://www.inicea.fr/sante-mentale/clinique-les-horizons-cambes-33880',
    },
    {
      id: 'clinique-les-lilas-bleus',
      name: 'Clinique les Lilas Bleus',
      location: 'Lyon (69007)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique les Lilas Bleus — Lyon (69007)',
      website:
        'https://www.inicea.fr/smr/clinique-les-lilas-bleus-rhone-69007',
    },
    {
      id: 'clinique-les-oliviers',
      name: 'Clinique les Oliviers',
      location: 'Le-Puy-Sainte-Réparade (13610)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique les Oliviers — Le-Puy-Sainte-Réparade (13610)',
      website:
        'https://www.inicea.fr/smr/clinique-oliviers-bouches-du-rhone-13610',
    },
    {
      id: 'clinique-les-palmiers',
      name: 'Clinique Les Palmiers',
      location: 'Ceyreste (13600)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Les Palmiers — Ceyreste (13600)',
      website:
        'https://www.inicea.fr/smr/clinique-les-palmiers-bouches-du-rhone-13600',
    },
    {
      id: 'clinique-les-vergers',
      name: 'Clinique Les Vergers',
      location: 'Saint-André-les-Vergers (10120)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Les Vergers — Saint-André-les-Vergers (10120)',
      website:
        'https://www.inicea.fr/smr/clinique-les-vergers-aube-10120',
    },
    {
      id: 'clinique-lestran',
      name: 'Clinique L’Estran',
      location: 'Siouville-Hague (50340)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique L’Estran — Siouville-Hague (50340)',
      website:
        'https://www.inicea.fr/smr/clinique-l-estran-manche-50340',
    },
    {
      id: 'clinique-lobservatoire',
      name: 'Clinique L’Observatoire',
      location: 'Juvisy-sur-Orge (91260)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique L’Observatoire — Juvisy-sur-Orge (91260)',
      website:
        'https://www.inicea.fr/smr/clinique-l-observatoire-juvisy-orge-91260',
    },
    {
      id: 'clinique-loregon',
      name: 'Clinique L’Orégon',
      location: 'Civray (86400)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique L’Orégon — Civray (86400)',
      website:
        'https://www.inicea.fr/smr/clinique-l-oregon-vienne-86400',
    },
    {
      id: 'clinique-marienia',
      name: 'Clinique Marienia',
      location: 'Cambo-les-Bains (64250)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Marienia — Cambo-les-Bains (64250)',
      website:
        'https://www.inicea.fr/smr/clinique-marienia-pyrenees-atlantiques-64250',
    },
    {
      id: 'clinique-massilia-les-pins',
      name: 'Clinique Massilia Les Pins',
      location: 'Marseille (13009)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Massilia Les Pins — Marseille (13009)',
      website:
        'https://www.inicea.fr/smr/clinique-massilia-les-pins-bouches-du-rhone-13009',
    },
    {
      id: 'clinique-maylis',
      name: 'Clinique Maylis',
      location: 'Narrosse (40180)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Maylis — Narrosse (40180)',
      website:
        'https://www.inicea.fr/sante-mentale/clinique-maylis-narrosse-40180',
    },
    {
      id: 'clinique-montjoy',
      name: 'Clinique Montjoy',
      location: 'Briançon (05100)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Montjoy — Briançon (05100)',
      website:
        'https://www.inicea.fr/smr/clinique-montjoy-hautes-alpes-05100',
    },
    {
      id: 'clinique-napoleon',
      name: 'Clinique Napoléon',
      location: 'Saint-Paul-lès-Dax (40990)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Napoléon — Saint-Paul-lès-Dax (40990)',
      website:
        'https://www.inicea.fr/smr/clinique-napoleon-landes-40990',
    },
    {
      id: 'clinique-parc-de-gasville',
      name: 'Clinique Parc de Gasville',
      location: 'Gasville (28300)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Parc de Gasville — Gasville (28300)',
      website:
        'https://www.inicea.fr/smr/clinique-parc-de-gasville-eure-et-loir-28300',
    },
    {
      id: 'clinique-pietat',
      name: 'Clinique Piétat',
      location: 'Barbazan Debat (65690)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Piétat — Barbazan Debat (65690)',
      website:
        'https://www.inicea.fr/sante-mentale/clinique-pietat-hautes-pyrenees-65690',
    },
    {
      id: 'clinique-pediatrique-montpribat',
      name: 'Clinique pédiatrique Montpribat',
      location: 'Montfort-en-Chalosse (40380)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique pédiatrique Montpribat — Montfort-en-Chalosse (40380)',
      website:
        'https://www.inicea.fr/smr/clinique-montpribat-landes-40380',
    },
    {
      id: 'clinique-quai-de-bezons',
      name: 'Clinique Quai de Bezons',
      location: 'Bezons (95870)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Quai de Bezons — Bezons (95870)',
      website:
        'https://www.inicea.fr/smr/clinique-quai-de-bezons-val-doise-95870',
    },
    {
      id: 'clinique-rougemont',
      name: 'Clinique Rougemont',
      location: 'Le Mans (72000)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Rougemont — Le Mans (72000)',
      website:
        'https://www.inicea.fr/smr/clinique-rougemont-sarthe-72000',
    },
    {
      id: 'clinique-saint-martin-de-seignanx',
      name: 'Clinique Saint Martin de Seignanx',
      location: 'Saint-Martin-de-Seignanx (40390)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Saint Martin de Seignanx — Saint-Martin-de-Seignanx (40390)',
      website:
        'https://www.inicea.fr/smr/clinique-saint-martin-de-seignanx-landes-40390',
    },
    {
      id: 'clinique-saint-maurice',
      name: 'Clinique Saint Maurice',
      location: 'La Jonchère-Saint-Maurice (87340)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Saint Maurice — La Jonchère-Saint-Maurice (87340)',
      website:
        'https://www.inicea.fr/sante-mentale/clinique-saint-maurice-haute-vienne-87340',
    },
    {
      id: 'clinique-saint-jean-lez-cedres',
      name: 'Clinique Saint-Jean Lez Cèdres',
      location: 'Brive-la-Gaillarde (19100)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Saint-Jean Lez Cèdres — Brive-la-Gaillarde (19100)',
      website:
        'https://www.inicea.fr/smr/clinique-saint-jean-les-cedres-correze-19100',
    },
    {
      id: 'clinique-solisana',
      name: 'Clinique Solisana',
      location: 'Guebwiller (68500)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Solisana — Guebwiller (68500)',
      website:
        'https://www.inicea.fr/sante-mentale/clinique-solisana-haut-rhin-68500',
    },
    {
      id: 'clinique-sur-moreau',
      name: 'Clinique Sur Moreau',
      location: 'Saintes (17100)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Sur Moreau — Saintes (17100)',
      website:
        'https://www.inicea.fr/smr/clinique-sur-moreau-charente-maritime-17100',
    },
    {
      id: 'clinique-thalatta',
      name: 'Clinique Thalatta',
      location: 'Ouistreham (14150)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Thalatta — Ouistreham (14150)',
      website:
        'https://www.inicea.fr/smr/clinique-thalatta-ouistreham-14150',
    },
    {
      id: 'clinique-val-de-saune',
      name: 'Clinique Val de Saune',
      location: 'Quint-Fonsegrives (31130)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Val de Saune — Quint-Fonsegrives (31130)',
      website:
        'https://www.inicea.fr/smr/clinique-val-de-saune-haute-garonne-31130',
    },
    {
      id: 'clinique-val-du-coudray',
      name: 'Clinique Val du Coudray',
      location: 'Le Coudray (28630)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Val du Coudray — Le Coudray (28630)',
      website:
        'https://www.inicea.fr/smr/clinique-val-du-coudray-eure-et-loir-28630',
    },
    {
      id: 'clinique-val-du-fenouillet',
      name: 'Clinique Val du Fenouillet',
      location: 'La Crau (83260)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Val du Fenouillet — La Crau (83260)',
      website:
        'https://www.inicea.fr/sante-mentale/clinique-val-du-fenouillet-var-83260',
    },
    {
      id: 'clinique-val-pyrene',
      name: 'Clinique Val Pyrène',
      location: 'Font-Romeu-Odeillo-Via (66120)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Val Pyrène — Font-Romeu-Odeillo-Via (66120)',
      website:
        'https://www.inicea.fr/smr/clinique-val-pyrene-pyrenees-orientales-66120',
    },
    {
      id: 'clinique-valdonne',
      name: 'Clinique Valdonne',
      location: 'Peypin (13124)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Valdonne — Peypin (13124)',
      website:
        'https://www.inicea.fr/smr/clinique-valdonne-bouches-du-rhone-13124',
    },
    {
      id: 'clinique-villa-bleue',
      name: 'Clinique Villa Bleue',
      location: 'Jarnac (16200)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Villa Bleue — Jarnac (16200)',
      website:
        'https://www.inicea.fr/sante-mentale/clinique-villa-bleue-haut-rhin-16200',
    },
    {
      id: 'clinique-villa-des-roses',
      name: 'Clinique Villa des Roses',
      location: 'Lyon (69005)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique Villa des Roses — Lyon (69005)',
      website:
        'https://www.inicea.fr/sante-mentale/clinique-villa-des-roses-lyon-69005',
    },
    {
      id: 'clinique-william-harvey',
      name: 'Clinique William Harvey',
      location: 'Saint-Martin-d\'Aubigny (50190)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Clinique William Harvey — Saint-Martin-d\'Aubigny (50190)',
      website:
        'https://www.inicea.fr/smr/clinique-william-harvey-manche-50190',
    },
    {
      id: 'foyer-de-vie-et-mas-les-alcides',
      name: 'Foyer de vie et MAS Les Alcides',
      location: 'Saint-Chamas (13250)',
      description:
        'Maison d’accueil spécialisée (MAS).',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Foyer de vie et MAS Les Alcides — Saint-Chamas (13250)',
      website:
        'https://www.inicea.fr/smr/maison-d-accueil-specialisee-les-alcides-bouches-du-rhone-13250',
    },
    {
      id: 'jeanne-darc-hopital-prive-parisien',
      name: 'Jeanne d’Arc Hôpital Privé Parisien',
      location: 'Saint-Mandé (94160)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Jeanne d’Arc Hôpital Privé Parisien — Saint-Mandé (94160)',
      website:
        'https://www.inicea.fr/sante-mentale/jeanne-darc-hopital-prive-parisien-val-de-marne-94160',
    },
    {
      id: 'pole-de-sante-mentale-la-confluence',
      name: 'Pôle de Santé Mentale La Confluence',
      location: 'Saint-Cyr-sur-Loire (37540)',
      description:
        'Clinique de santé mentale.',
      image: '/images/stations/objectif-sport-station.jpg',
      imageAlt: 'Pôle de Santé Mentale La Confluence — Saint-Cyr-sur-Loire (37540)',
      website:
        'https://www.inicea.fr/sante-mentale/pole-de-sante-mentale-la-confluence-saint-cyr-sur-loire-37540',
    },
  ],
}
