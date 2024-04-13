import { SignupButton } from "@/components/auth/signup-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-orange-500">
 <div>
  <h1>
    Home Page 
  </h1>
  <SignupButton>
  <Button variant={"default"}>
  Sign up
</Button>
  </SignupButton>

 </div>
    </main>
  );
}
