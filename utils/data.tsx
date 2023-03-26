import GridViewIcon from "@mui/icons-material/GridView";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StarBorderPurple500RoundedIcon from "@mui/icons-material/StarBorderPurple500Rounded";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";

import propImage1 from "public/assets/property-1.jpg";
import propImage2 from "public/assets/property-2.jpg";
import propImage3 from "public/assets/property-3.jpg";

import agent1 from "public/assets/agent-1-large.jpg";
import agent2 from "public/assets/agent-2-large.jpg";
import agent3 from "public/assets/agent-3-large.jpg";
import agent4 from "public/assets/agent-4-large.jpg";

import rating1 from "public/assets/rating-1.jpg";
import rating2 from "public/assets/rating-2.jpg";
import rating3 from "public/assets/rating-3.jpg";
import rating4 from "public/assets/rating-4.jpg";
import rating5 from "public/assets/rating-5.jpg";

import propImageLarge1 from "public/assets/property-large-1.jpg";
import propImageLarge2 from "public/assets/property-large-2.jpg";
import propImageLarge3 from "public/assets/property-large-3.jpg";

export const dashboardCards = [
  {
    title: "Properties for Sale",
    value: 684,
    color: "#475BE8",
    progress: 77,
  },
  {
    title: "Properties for Rent",
    value: 546,
    color: "#FD8539",
    progress: 61,
  },
  {
    title: "Total Customer",
    value: 5632,
    color: "#2ED480",
    progress: 82,
  },
  {
    title: "Total City",
    value: 90,
    color: "#FE6D8E",
    progress: 58,
  },
];

export const navLinks = [
  { name: "Dashboard", url: "/", icon: <GridViewIcon /> },
  { name: "Property", url: "/property", icon: <ApartmentIcon /> },
  { name: "Agent", url: "/agent", icon: <PeopleAltOutlinedIcon /> },
  {
    name: "Review",
    url: "/review",
    icon: <StarBorderPurple500RoundedIcon />,
  },
  { name: "My Profile", url: "/profile", icon: <PermIdentityRoundedIcon /> },
];

export const latestSales = [
  {
    image: propImage1,
    name: "Metro Jayakar Apartment",
    location: "North Carolina, USA",
    price: 35,
  },
  {
    image: propImage2,
    name: "Letdo Ji Hotel & Aportment",
    location: "Carolina North, UK",
    price: 40,
  },
  {
    image: propImage3,
    name: "Metro Jayakar Apartment",
    location: "North Carolina, USA",
    price: 55,
  },
];

export const properties = [
  {
    image: propImageLarge1,
    name: "Metro Jayakar Apartment",
    location: "North Carolina, USA",
    price: 500,
  },
  {
    image: propImageLarge2,
    name: "Letdo Ji Hotel & Aportment",
    location: "Carolina North, UK",
    price: 450,
  },
  {
    image: propImageLarge3,
    name: "Metro Jayakar Apartment",
    location: "North Carolina, USA",
    price: 650,
  },
  {
    image: propImageLarge1,
    name: "Taiwo Adewale Apartment",
    location: "Lagos, Nigeria",
    price: 340,
  },
  {
    image: propImageLarge2,
    name: "Metro Jayakar Apartment",
    location: "North Carolina, USA",
    price: 500,
  },
  {
    image: propImageLarge3,
    name: "Letdo Ji Hotel & Aportment",
    location: "Carolina North, UK",
    price: 450,
  },
  {
    image: propImageLarge1,
    name: "Metro Jayakar Apartment",
    location: "North Carolina, USA",
    price: 650,
  },
  {
    image: propImageLarge2,
    name: "Taiwo Adewale Apartment",
    location: "Lagos, Nigeria",
    price: 340,
  },
];

export const referrals = [
  {
    name: "Social Media",
    value: 64,
    color: "#6C5DD3",
  },
  {
    name: "Marketplaces",
    value: 40,
    color: "#7FBA7A",
  },
  {
    name: "Websites",
    value: 50,
    color: "#FFCE73",
  },
  {
    name: "Digital Ads",
    value: 80,
    color: "#FFA2C0",
  },
  {
    name: "Others",
    value: 15,
    color: "#F45252",
  },
];

export const revenueChartData = [
  {
    id: 1,
    month: "Jan",
    lastRevenue: 800,
    runningRevenue: 420,
  },
  {
    id: 2,
    month: "Feb",
    lastRevenue: 600,
    runningRevenue: 350,
  },
  {
    id: 3,
    month: "March",
    lastRevenue: 580,
    runningRevenue: 380,
  },
  {
    id: 4,
    month: "April",
    lastRevenue: 400,
    runningRevenue: 200,
  },
  {
    id: 5,
    month: "May",
    lastRevenue: 720,
    runningRevenue: 590,
  },
  {
    id: 6,
    month: "Jun",
    lastRevenue: 710,
    runningRevenue: 580,
  },
  {
    id: 7,
    month: "Jul",
    lastRevenue: 450,
    runningRevenue: 200,
  },
];

export const agents = [
  {
    name: "Karen Eilla Boyette",
    role: "Real-Estate Agent",
    email: "kareneboyette@armyspy.com",
    location: "Manchester",
    phone: "+502-324-4194",
    propertyNo: 15,
    image: agent1,
  },
  {
    name: "Walter Devid Moye",
    role: "Real-Estate Agent",
    email: "walterdevidmoye@armyspy.com",
    location: "Chicago, Canada",
    phone: "+457-324-4147",
    propertyNo: 10,
    image: agent2,
  },
  {
    name: "David Smith Raddy",
    role: "Real-Estate Agent",
    email: "davidsmith1@armyspy.com",
    location: "Manchester",
    phone: "+584-324-7835",
    propertyNo: 15,
    image: agent3,
  },
  {
    name: "Jhon Haron Bably",
    role: "Real-Estate Agent",
    email: "haronbablye@armyspy.com",
    location: "Chicago, Canada",
    phone: "+502-324-4194",
    propertyNo: 12,
    image: agent4,
  },
];

export const reviews = [
  {
    name: "James Sullivan",
    id: "#C01234",
    dateJoined: "25-04-2022",
    time: "12:42 PM",
    rating: 5,
    ratingType: "good",
    ratingChips: ["Excellent", "Great", "Best Service"],
    image: rating1,
  },
  {
    name: "Jakir Hussen",
    id: "#C01225",
    dateJoined: "15-09-2022",
    time: "11:40 AM",
    rating: 1,
    ratingType: "bad",
    ratingChips: ["Bad Service", "Unexpected"],
    image: rating2,
  },
  {
    name: "Deborah Saragi",
    id: "#C01245",
    dateJoined: "25-10-2022",
    time: "10:22 PM",
    rating: 4,
    ratingType: "good",
    ratingChips: ["Excellent", "Great", "Best Service"],
    image: rating3,
  },
  {
    name: "Delwar Hussen",
    id: "#C01248",
    dateJoined: "15-08-2022",
    time: "12:42 AM",
    rating: 2,
    ratingType: "bad",
    ratingChips: ["Bad Service", "Unexpected"],
    image: rating4,
  },
  {
    name: "Jubed Ahmed",
    id: "#C01287",
    dateJoined: "24-04-2022",
    time: "08:42 PM",
    rating: 5,
    ratingType: "good",
    ratingChips: ["Excellent", "Great", "Best Service"],
    image: rating5,
  },
];
