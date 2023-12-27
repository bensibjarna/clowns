// app/event/page.tsx
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox"; // Adjust the import path as needed
import { Button } from "@/components/ui/button"; // Adjust the import path as needed

const EventPage = () => {
	const router = useRouter();
	const { eventId } = router.query;
	const { register, handleSubmit } = useForm();
	const [posts, setPosts] = useState([]); // Replace with actual data fetching logic

	// Dummy checklist items
	const checklistItems = ["Rule 1", "Rule 2", "Rule 3", "Rule 4"]; // Replace with actual data

	const onSubmitChecklist = (data) => {
		// Handle checklist submission logic
		console.log("Checklist Data:", data);
	};

	const onSubmitPost = (data) => {
		// Handle post submission logic
		console.log("Post Data:", data);
	};

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-2xl font-bold mb-4'>Event: {eventId}</h1>

			{/* Checklist Section */}
			<form onSubmit={handleSubmit(onSubmitChecklist)}>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{checklistItems.map((item, index) => (
						<div key={index}>
							<Checkbox {...register(`checklistItem${index}`)} />
							<label htmlFor={`checklistItem${index}`}>{item}</label>
						</div>
					))}
				</div>
				<Button type='submit'>Update Checklist</Button>
			</form>

			{/* User Post Section */}
			<form onSubmit={handleSubmit(onSubmitPost)} className='mt-8'>
				<textarea {...register("content")} placeholder='Write something...' />
				<input type='file' {...register("image")} />
				<Button type='submit'>Post</Button>
			</form>

			{/* Display Posts */}
			<div className='mt-8'>
				{posts.map((post, index) => (
					<div key={index} className='mb-4'>
						<p>{post.content}</p>
						{post.image && <img src={post.image} alt='Post' />}
					</div>
				))}
			</div>
		</div>
	);
};

export default EventPage;
