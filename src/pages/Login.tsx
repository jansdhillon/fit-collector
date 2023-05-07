import React from "react";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";



const Login = () => {

  const user = useUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div>
        <button className="btn-secondary btn-active btn">
          {!user.isSignedIn && <SignInButton />}
          {!!user.isSignedIn && <SignOutButton />}
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </button>
      </div>
    </main>
  );
};

export default Login;
