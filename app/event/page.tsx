// app/event/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

const EventPage = () => {
  const router = useRouter();
  const [isRouterReady, setIsRouterReady] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setIsRouterReady(true);
    }
  }, [router.isReady]);

  if (!isRouterReady) {
    return <div>Loading...</div>; // Or any other loading state
  }

  const { eventId } = router.query;

  // Checklist items
  const checklistItems = [
    "Drekka með vinstri hendi",
    "Panta drykk sem þú hefur aldrei drukkið",
    "Boli með röri",
    "Hljóðlaus drykkja",
    "5 min max á pub",
    "Engin sími",
    "Pullu Pit Stop",
    "Kaupa drykk fyrir vin",
    "Bannað að drekka sjálfur",
    "Bannað að hlægja",
    "Tala við ókunnugan",
    "SIGUR njóttu drykksins"
  ];

  const handleChecklistSubmit = (event) => {
    event.preventDefault();
    // Handle checklist submission logic here
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {checklistItems.map((item, index) => (
                <div key={index} className='flex items-center mb-2'>
                  <Checkbox id={`checklist-item-${index}`} />
                  <label htmlFor={`checklist-item-${index}`} className='ml-2'>{item}</label>
                </div>
              ))}
            </div>
            <Button type='submit' className='mt-4'>Submit Checklist</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventPage;