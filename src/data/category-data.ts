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
]

export default category_data;
