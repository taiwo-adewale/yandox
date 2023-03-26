type PaletteMode = "light" | "dark";

type customColor = {
  main: string;
};

type LayoutWidth = {
  width: number;
  rowItems: number;
};

type Agent = {
  name: string;
  role: string;
  phone: string;
  email: string;
  propertyNo: number;
  image: StaticImageData;
  location: string;
};

type Reviews = {
  name: string;
  id: string;
  dateJoined: string;
  time: string;
  rating: number;
  ratingType: string;
  ratingChips: string[];
  image: StaticImageData;
};
