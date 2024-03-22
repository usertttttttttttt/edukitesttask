type PreviewImage = {
  plain: string;
  watermarked: string;
};

type MaterialFile = {
  createdAt: string;
  type: string;
};

type BestInCategory = {
  id: number;
  title: string;
  slug: string;
};

type SchoolPrice = {
  size_0_100: number;
  size_101_200: number;
  size_201_300: number;
  size_301_400: number;
  size_401_500: number;
  size_501_600: number;
  size_601_700: number;
  size_701_800: number;
  size_801_900: number;
  size_901_1000: number;
};

type AuthorDetails = {
  profileBackgroundPath: string;
  imagePath: string;
  needsSellerInfo: boolean;
  subjects: string[];
  classes: string[];
  instagramProfile: string;
  facebookProfile: string;
  world: string;
  totalMaterials: number;
  publicName: string;
  featuredPosition: number;
  subtitle: string;
  privateProfile: boolean;
  userType: number;
  teachableCertified: boolean;
  pinterestProfile: string;
};

type Author = {
  followersNumber: number;
  becameSellerAt: string;
  searchMode: boolean;
  details: AuthorDetails;
  id: number;
  slug: string;
};

type Worksheet = {
  worksheetId: string;
};

type Unit = {
  lastUpdated: string;
  creator: string;
  worksheets: Worksheet[];
  public: boolean;
  usage: {
    studentCount: number;
    handoutCount: number;
  };
  _id: string;
  locale: string;
  creationDate: string;
};

type MaterialType = {
  id: number;
  title: string;
};

type MaterialClassGrade = {
  id: number;
  title: string;
};

type SchoolType = {
  id: number;
  title: string;
  interdisciplinary: boolean;
};

export type Material = {
  coverPath: string;
  isInYellowList: boolean;
  distributionType: number;
  sources: string;
  bundleListTotal: string;
  description: string;
  customPagesTotal: number;
  language: string;
  bestInCategories: BestInCategory[];
  isActive: boolean;
  titleUpdatedByHuman: boolean;
  materialFiles: MaterialFile[];
  title: string;
  createdAt: string;
  firstPreviewImage: PreviewImage;
  world: string;
  price: number;
  inFavorites: number;
  averageRating: number;
  isUnitPublishable: boolean;
  id: number;
  isCompletedByAuthor: boolean;
  bundle: boolean;
  slug: string;
  schoolPrices: {
    price: SchoolPrice;
  };
  totalFeedbacks: number;
  ccStatus: string;
  descriptionUpdatedByHuman: boolean;
  materialTopCategories: {
    id: number;
    title: string;
  }[];
  author: Author;
  fileTypes: string;
  tags: string[];
  interactiveId: string;
  schoolTypes: SchoolType[];
  unit: Unit;
  authorFeatured: boolean;
  totalPages: number;
  isShadow: boolean;
  materialTypes: MaterialType[];
  isStandaloneInteractive: boolean;
  hasBibPreview: boolean;
  materialClassGrades: MaterialClassGrade[];
  status: string;
  hasFixedPrice: boolean;
};
