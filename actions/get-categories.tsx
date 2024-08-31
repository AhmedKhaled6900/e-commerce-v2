// import { Category } from "@/types"

// const url =`${process.env.Next_PUBLIC_API_URL}/categories`

// const getCategories = async():Promise<Category[]>=>{
//     const res = await fetch (url)
//     return res.json()

// }
// export default getCategories

import { Category } from "@/types";

// Ensure the environment variable is accessed correctly
const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    console.error('NEXT_PUBLIC_API_URL is not defined');
    throw new Error('API URL is not defined');
  }

  try {
    const res = await fetch(url);

    // Check if the response is okay (status 200-299)
    if (!res.ok) {
      throw new Error(`Failed to fetch categories: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error; // Re-throw the error after logging it
  }
};

export default getCategories;
