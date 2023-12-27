// app/event/page.tsx
import React from 'react';
import { GetServerSideProps } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

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

const EventPage = ({ eventId }) => {
  const handleChecklistSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const eventId = context.params?.eventId as string;
  // Fetch additional event data here if necessary

  return {
    props: {
      eventId,
    },
  };
};

export default EventPage;