import { SizeLimit } from "next"

export interface Billboard{
    id:string
    label:string
    imgUrl:string
}
export interface Category{
    id:string
    name:string
    billboard:Billboard
}
export interface Product{
    id:string
    category:Category
    name:string
    price:number
    isFeatured:boolean
    size:Size
    color:Color
    images:Image[]
   reviews:Review[]
   description:string

 
}
export interface Image{
    id:string
url:string
}
export interface Size{
    id:string
    name:string
    value:string
}
export interface Color{
    id:string
    name:string
    value:string
}
interface UserReview {
    id: string;
    name: string | null;
    image: string | null;
  }
  
  // Define the Review interface including User
 export interface Review {
    id: string;
    productId: string;
    userId: string;
    rating: number;
    comment: string | null;
    createdAt: string; // ISO 8601 string
    updatedAt: string; // ISO 8601 string
    user: UserReview; // Nested User information
  }