"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EventPage = () => {
	const router = useRouter();

	const [checkboxes, setCheckboxes] = useState([
		{ id: 1, label: "Drekka með vinstri hendi", checked: false },
		{ id: 2, label: "Panta drykk sem þú hefur aldrei drukkið", checked: false },
		{ id: 3, label: "Boli með röri", checked: false },
		{ id: 4, label: "Hljóðlaus drykkja", checked: false },
		{ id: 5, label: "5 min max á pub", checked: false },
		{ id: 6, label: "Engin sími", checked: false },
		{ id: 7, label: "Pullu Pit Stop", checked: false },
		{ id: 8, label: "Kaupa drykk fyrir vin", checked: false },
		{ id: 9, label: "Bannað að drekka sjálfur", checked: false },
		{ id: 10, label: "Bannað að hlægja", checked: false },
		{ id: 11, label: "Tala við ókunnugan", checked: false },
		{ id: 12, label: "SIGUR njóttu drykksins", checked: false },
	]);

	const handleCheckboxChange = (id: number) => {
		setCheckboxes((prevCheckboxes) =>
			prevCheckboxes.map((checkbox) =>
				checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
			)
		);
	};

	const handlePostSubmit = () => {
		// Handle post submission logic here
	};

	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle>Event Details</CardTitle>
				</CardHeader>
				<CardContent>
					{checkboxes.map((checkbox) => (
						<Checkbox
							key={checkbox.id}
							checked={checkbox.checked}
							onChange={() => handleCheckboxChange(checkbox.id)}
						>
							{checkbox.label}
						</Checkbox>
					))}
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Post Update</CardTitle>
				</CardHeader>
				<CardContent>
					<Input type='text' placeholder='Enter your update' />

					<Input type='file' accept='image/*' />

					<Button onClick={handlePostSubmit}>Post</Button>
				</CardContent>
			</Card>
		</div>
	);
};

export default EventPage;
