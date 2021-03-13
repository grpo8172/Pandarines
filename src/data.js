import RecentPost from "./Component/BlogComponent/recentPost";

export let catagories = [
  { label: "Chinese Language", value: 1 },
  { label: "Life in China", value: 2 },
  { label: "Work in China", value: 3 },
];

export let posts = [
  {
    title: "New course for level 1",
    id: 1,
    imgUrl: [
      "https://i.postimg.cc/bwkgG5KN/jeswin-thomas-t-JUjea-NIOZs-unsplash-1.jpg",
      "https://i.postimg.cc/d3crKQV2/cdc-Pha-TJPdta-CU-unsplash.jpg",
      "https://via.placeholder.com/860x380",
    ],
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a
      `,
    vidUrl: "",
    timestamp: new Date("November 28 2020 12:30"),
    catagory: { label: "Chinese Language", value: 1 },
  },
  {
    title: "New course for level 2",
    id: 2,
    imgUrl: [
      "https://via.placeholder.com/860x380",
      "https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg",
      "https://mdbootstrap.com/img/Photos/Slides/img%20(146).jpg",
    ],
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      `,

    vidUrl: "",
    timestamp: new Date("January 31 2020 12:30"),

    catagory: { label: "Life in China", value: 2 },
  },
  {
    title: "New course for business",
    id: 3,
    imgUrl: [
      "https://via.placeholder.com/353x235",
      "https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg",
      "https://mdbootstrap.com/img/Photos/Slides/img%20(146).jpg",
    ],
    text: ` Some quick example text to build on the card title and make up
    the bulk of the card's content. Some quick example text to
    build on the card title and make up the bulk of the card's
    content. Some quick example text to build on the card title
    and make up the bulk of the card's content. Some quick example
    text to build on the card title and make up the bulk of the
    card's content. Some quick example text to build on the card
    title and make up the bulk of the card's content. Some quick
    example text to build on the card title and make up the bulk
    of the card's content. Some quick example text to build on the
    card title and make up the bulk of the card's content.  
      `,

    vidUrl: "",
    timestamp: new Date("October 29 2020 12:30"),
    catagory: { label: "Work in China", value: 3 },
  },
  {
    title: "New course for Math",
    id: 4,
    imgUrl: [
      "https://via.placeholder.com/353x235",
      "https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg",
      "https://mdbootstrap.com/img/Photos/Slides/img%20(146).jpg",
    ],
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    vidUrl: "",
    timestamp: new Date("October 25 2020 12:30"),
    catagory: { label: "Life in China", value: 2 },
  },
];
