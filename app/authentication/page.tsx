"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";  // Import useState
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Google from "next-auth/providers/google";

export default function AuthenticationPage() {
    const router = useRouter();
    const { data: session } = useSession();
    const [email, setEmail] = useState('');  // Create a state variable to hold the email input

    useEffect(() => {
        if (session && session.user) {
            router.push('/profile');
        }
    }, [session, router]);

    const handleGoogleSignIn = () => {
        signIn('google');
    };
    
    const handleEmailSignIn = async () => {
        signIn('email', { email });  // Trigger Email sign-in and pass the email address
    };

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);  // Update the email state variable whenever the input changes
    };

    return (
        <main>
            <Card>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Welcome to OZ Studio</CardTitle>
                    <CardDescription>
                        Signin with email and we will send you a login link. You can also choose any of our other login options.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <Button variant="outline" onClick={handleGoogleSignIn}>
                            <Icons.google className="mr-2 h-4 w-4" />
                            Google
                        </Button>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="ozer@oz.com" onChange={handleEmailChange} />
                        {/* Assuming the Button component triggers the handleEmailSignIn function when clicked */}
                        <Button variant='outline' onClick={handleEmailSignIn}>Sign In with Email</Button>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button>Create account</Button>
                </CardFooter>
            </Card>
        </main>
    );
}
