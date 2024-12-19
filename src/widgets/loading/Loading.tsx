import React from 'react';
import { TicketSkeleton } from '../../features/ticket/ui/TicketSkeleton';

export const Loading = () => {
  return (
    <div className="w-full md:w-auto mt-8 md:mt-0 md:ml-5">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <TicketSkeleton key={index} />
        ))}
    </div>
  );
};
