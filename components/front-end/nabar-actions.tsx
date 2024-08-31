

import { auth } from '@/auth';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import SignOutButton from '../auth/signout-button';
import { SignupButton } from '../auth/signup-button';

const NavbarActions = async () => {
    const session = await auth(

    )
    return ( 
        <div className="ml-auto flex items-center gap-x-2 justify-between  p-2  ">
            <Link className=' flex items-center gap-x-2  p-2 bg-black rounded-full text-white ' href={"/"}>
            <ShoppingCart size={20}>     
     </ShoppingCart>
     <span>
        0
     </span>
            </Link>
            {
session ? <SignOutButton>

</SignOutButton> :
  <SignupButton>
  <Button variant={"default"}>
  Sign up
</Button>
  </SignupButton>

}
<Link href={"/dashboard"}>
<button>
Dashboard
</button>
</Link>
      
 
        </div>
     );
}
 
export default NavbarActions;