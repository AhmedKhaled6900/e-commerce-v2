import { db } from "@/lib/db";
import { UserButton } from "../auth/user-button";
import  StoreSwitcher from "./store-switcher";
import { auth } from "@/auth";
import { MainNav } from "./main-nav";
const Navbar = async  () => {
    const  userId = await auth();

    const stores = await db.store.findMany({
        where: {
            userId: userId?.user.id
        }
    })
    return ( 
        <div className="border-b-2">
         <div className="flex h-16 items-center px-4">
           <StoreSwitcher items={stores} />

           <MainNav></MainNav>
            <div className="ml-auto flex items-center space-x-4">
                <UserButton></UserButton>
            </div>
         </div>
        </div>
     );
}
 
export default Navbar;