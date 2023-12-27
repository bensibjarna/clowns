// app/event/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

const checklistItems = [
  // ... your checklist items
];

const EventPage = () => {
  const router = useRouter();
  const [eventId, setEventId] = useState<string | null>(null);

  useEffect(() => {
    if (router.isReady) {
      // Ensure eventId is a string
      const currentEventId = Array.isArray(router.query.eventId) 
        ? router.query.eventId[0] 
        : router.query.eventId;
      setEventId(currentEventId || null);
    }
  }, [router.isReady, router.query.eventId]);

  if (!eventId) {
    return <div>Loading...</div>;
  }

  const handleChecklistSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Checklist submitted");
  };

  return (
    <div className='container mx-auto p-4'>
      <Card>
        <CardHeader>
          <CardTitle>Event: {eventId}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleChecklistSubmit}>
            {checklistItems.map((item, index) => (
              <div key={index} className='flex items-center mb-2'>
                <Checkbox id={`checklist-item-${index}`} />
                <label htmlFor={`checklist-item-${index}`} className='ml-2'>{item}</label>
              </div>
            ))}
            <Button type='submit' className='mt-4'>Submit Checklist</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventPage;