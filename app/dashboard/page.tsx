// app/dashboard/page.tsx
"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
	const handleSignOut = () => {
		signOut({
			callbackUrl: "/",
		});
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen p-4'>
			<h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				<Link href='/events/pobba-rolt-2023' passHref>
					<Card>
						<CardHeader>
							<CardTitle>Pöbba Rölt 2023</CardTitle>
						</CardHeader>
						<CardContent>
							<p>Join the exciting Pöbba Rölt 2023 event!</p>
						</CardContent>
					</Card>
				</Link>
			</div>
			<button onClick={handleSignOut} className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
				Sign Out
			</button>
		</div>
	);
}
