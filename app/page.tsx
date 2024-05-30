import { SignupButton } from "@/components/auth/signup-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {db} from "@/lib/db"
import { auth } from "@/auth";
import SignOutButton from "@/components/auth/signout-button";

export default async function Home() {
  const session =await auth()
    

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-orange-500">
 <div>
  <h1>
    Home Page 
  </h1>
  <h3>
    {session?.user?.name}
  </h3>
  <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">{session?.user.role}</h3>
  <h3>{session?.user.phone}</h3>
  <h3>{session?.user.email}</h3>

{
session ? <SignOutButton>

</SignOutButton> :
  <SignupButton>
  <Button variant={"default"}>
  Sign up
</Button>
  </SignupButton>

}


 </div>
    </main>
  );
}
