"use client";

import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DiscordIconSvg, FacebookIconSvg, GoogleIconSvg } from "@/assets/Icons";

const SignupPage = () => {
  const handleGoogleLogin = async () => {};
  const handleFacebookLogin = async () => {};
  const handleDiscordLogin = async () => {};

  return (
    <section className="flex h-full items-center justify-center">
      <Card>
        <CardHeader>
          <h3 className="text-2xl font-bold">Organization Access</h3>
          <p>Login or sign up with google, facebook or discord</p>
        </CardHeader>

        <CardContent className="flex flex-col items-center justify-center">
          <Alert>
            <AlertTitle>
              This is only for people within the organization.
            </AlertTitle>
            <AlertDescription>
              If you are not part of the organization, please go back to home
              page.
            </AlertDescription>
          </Alert>
        </CardContent>

        <CardFooter className="flex justify-center">
          <div className="flex w-max flex-col gap-4">
            <Button
              className="w-full cursor-pointer border border-b-gray-300 bg-white text-black hover:bg-black/10"
              onClick={handleGoogleLogin}
            >
              <GoogleIconSvg className="h-4 w-4" />
              Login/sign up with Google
            </Button>

            <Button
              className="bg-facebook-primary hover:bg-facebook-primary/90 w-full cursor-pointer"
              onClick={handleFacebookLogin}
            >
              <FacebookIconSvg className="h-4 w-4" />
              Login/sign up with Facebook
            </Button>

            <Button
              className="bg-discord-primary hover:bg-discord-primary/90 w-full cursor-pointer"
              onClick={handleDiscordLogin}
            >
              <DiscordIconSvg className="h-4 w-4" />
              Login/sign up with Discord
            </Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default SignupPage;
