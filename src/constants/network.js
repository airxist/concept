import {
  mumbai,
  nagpur,
  nagshik,
  navi,
  panaja,
} from '../assets'

export const network = [
  { action: "All", active: false },
  { action: "West", active: true },
  { action: "East", active: false },
  { action: "South", active: false },
  { action: "North", active: false },
];

export const network_location = [
  {
    name: "Mumbai",
    location: "east",
    active: false,
    img: mumbai,
    offices: [
      {
        title: "Coworking Space in Mumbai",
        brief: "Mumbai is the capital city of the Indian state of Maharashtra.",
        titleImage: "",
        amenities: [
          {
            icon: "",
            title: "Fully furnished offices",
          },
          {
            icon: "",
            title: "House keeping services",
          },
          {
            icon: "",
            title: "Training Room",
          },
          {
            icon: "",
            title: "Instant business presence",
          },
          {
            icon: "",
            title: "private cabin",
          },
          {
            icon: "",
            title: "power backup service",
          },
          {
            icon: "",
            title: "IT Support executive",
          },
          {
            icon: "",
            title: "Meeting Room",
          },
          {
            icon: "",
            title: "Air conditioned",
          },
        ],
        distance: {
          air: 4,
          bus: 1,
          train: 2,
        },
        text: 'MyBranch offers shared office space in Mumbai region. Companies wishing to develop themselves while saving the cost on infrastructure should opt for coworking or managed office space. A conference room, meeting room and private cabin are provided with complete air conditioning and a customised interior.',
        images: ['','','']
      },
      {},
    ],
  },
  {
    name: "Nagpur",
    location: "west",
    active: false,
    img: nagpur,
  },
  {
    name: "Nashik",
    location: "south",
    active: false,
    img: nagshik,
  },
  {
    name: "Navi Mumbai",
    location: "north",
    active: false,
    img: navi,
  },
  {
    name: "Panaji",
    location: "east",
    active: false,
    img: panaja,
  },
];