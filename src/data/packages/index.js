import { honeymoonPackages } from './honeymoon';
import { familyPackages } from './family';
import { pilgrimagePackages } from './pilgrimage';
import { summerPackages } from './summer';
import { adventurePackages } from './adventure';
import { groupToursPackages } from './groupTours';

export const ALL_PACKAGES = [
  ...honeymoonPackages,
  ...familyPackages,
  ...pilgrimagePackages,
  ...summerPackages,
  ...adventurePackages,
  ...groupToursPackages
];

export const CATEGORIES_CONFIG = {
  honeymoon: {
    slug: 'honeymoon',
    name: 'Honeymoon Packages',
    shortDescription: 'Romantic journeys crafted for unforgettable memories in premium destinations.',
    coverImage: '/images/packages/honeymoon-bg.jpg',
    packages: honeymoonPackages
  },
  family: {
    slug: 'family',
    name: 'Family Vacation Packages',
    shortDescription: 'Reliable, comfortable, and fun-filled itineraries designed for families of all sizes.',
    coverImage: '/images/packages/Family-cover.jpg',
    packages: familyPackages
  },
  pilgrimage: {
    slug: 'pilgrimage',
    name: 'Pilgrimage Packages',
    shortDescription: 'Stress-free schedules, dedicated transport, and local guidance for spiritual temple tours.',
    coverImage: '/images/packages/pilgrim-cover.jpg',
    packages: pilgrimagePackages
  },
  summer: {
    slug: 'summer',
    name: 'Summer Vacation Packages',
    shortDescription: 'Cool mountain escapes and refreshing lake stays to beat the summer heat.',
    coverImage: '/images/packages/MunnarMist_1.jpg',
    packages: summerPackages
  },
  adventure: {
    slug: 'adventure',
    name: 'Adventure Packages',
    shortDescription: 'Thrill-filled trekking trails, eco-forest safaris, and action-packed mountain tours.',
    coverImage: '/images/packages/gavi-1.jpg',
    packages: adventurePackages
  },
  group: {
    slug: 'group',
    name: 'Group Tours',
    shortDescription: 'Perfect group outings, college tours, and team-building corporate retreats.',
    coverImage: '/images/packages/Fort_kochi.jpg',
    packages: groupToursPackages
  }
};
