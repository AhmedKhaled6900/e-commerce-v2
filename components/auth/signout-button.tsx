import { signOut } from "@/auth"
import { Button } from "../ui/button";

const SignOutButton =  async () => {
    
return (
    <form action = { async () => { "use server"; await signOut( )}} >
<Button type="submit">
    Sign out
    </Button> 
    
      </form>
)
}
export default SignOutButton