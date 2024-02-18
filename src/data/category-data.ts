import { ICategoryType } from "../types/category-d-t";

const category_data:ICategoryType[] = [
  {
    id: 1,
    img: '/assets/img/shop/product/cookies_1.png',
    parentTitle: "Bakery",
    children:['Chocolate','Bakery']
  },
  {
    id: 2,
    img: '/assets/img/shop/product/rasiley_1.png',
    parentTitle: "Refreshing Beverages",
    children:['Beverages']
  },
  {
    id: 3,
    img: '/assets/img/shop/banner/Ragi FLour.png',
    parentTitle: "Daily Need Products",
    children:['Daily']
  },
  {
    id: 4,
    img: '/assets/img/shop/banner/02/banner-1.webp',
    parentTitle: "FASHION FOR MEN’S",
    children:['Shirt'],
    smDesc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
  },
  {
    id: 5,
    img: '/assets/img/shop/banner/02/banner-2.webp',
    parentTitle: "FASHION FOR WOMEN’S",
    children:['Shoes'],
    smDesc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
  },
  {
    id: 6,
    img: '/assets/img/shop/banner/02/banner-3.webp',
    parentTitle: "FASHION FOR BABY",
    children:['Shoes'],
    smDesc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
  },
]

export default category_data;
