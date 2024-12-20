import { useState, useEffect } from 'react';
import { typeTicket, TicketsResponse } from './types';

const FetchTickets = (): Promise<typeTicket[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('data/tickets.json')
        .then((response) => {
          if (!response.ok) {
            reject(new Error(`HTTP error! Status: ${response.status}`));
          }

          return response.json() as Promise<TicketsResponse>;
        })
        .then((data) => {
          resolve(data.tickets);
        })
        .catch((error) => {
          reject(error);
        });
    }, 2000);
  });
};

export const useFetchTickets = () => {
  const [tickets, setTickets] = useState<typeTicket[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTickets = () => {
      setIsLoading(true);
      setError(null);
      FetchTickets()
        .then((data) => {
          setTickets(data);
        })
        .catch((err) => {
          setError(err instanceof Error ? err.message : 'Unknown error');
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    loadTickets();
  }, []);

  return { tickets, isLoading, error };
};
