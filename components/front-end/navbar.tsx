import Link from "next/link";
import Container from "./container";
import ClientNavComponent from "./front-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./nabar-actions";

const NavbarComponent = async () => {
    const categories = await getCategories()

    return ( 
        <div className="border-b">
           <Container>
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
         <Link className="ml-4 flex lg:ml-0 gap-x-2" href={"/"}>
       <p className="font-bold text-xl pl-2">
        STORE
       </p>
         </Link>
<ClientNavComponent data={categories}/> 
<NavbarActions></NavbarActions>

                </div>
           </Container>
        </div>
     );
}
 
export default NavbarComponent;