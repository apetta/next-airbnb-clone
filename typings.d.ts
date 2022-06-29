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
