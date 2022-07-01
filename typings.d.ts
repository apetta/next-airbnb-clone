type ApiRes = {
  exploreData?: CardData[];
  liveAnywhereData?: CardData[];
};

type CardData = {
  img: string;
  location?: string;
  distance?: string;
  title?: string;
};

type SearchResults = {
  img: string;
  location: string;
  lat: number;
  long: number;
  title: string;
  description: string;
  star: string;
  price: string;
  total: string;
};
