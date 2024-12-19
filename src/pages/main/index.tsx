import React, { useState } from 'react';
import { Ticket } from '../../features/ticket/ui/Ticket';
import { Filters } from '../../widgets/filters/ui/Filters';
import { typeTicket } from '../../features/ticket/model/types';
import { useFetchTickets } from '../../features/ticket/model/useFetchTickets';
import { useExchangeRates } from '../../features/ticket/model/useExchangeRates';
import { useFilteredTickets } from '../../features/ticket/model/useFilteredTickets';
import { Error } from '../../widgets/error/Error';
import { Loading } from '../../widgets/loading/Loading';

const Index: React.FC = () => {
  const { tickets, isLoading, error } = useFetchTickets();
  const [filters, setFilters] = useState<{
    currency: 'RUB' | 'USD' | 'EUR';
    stops: number[];
  }>({ currency: 'RUB', stops: [] });
  const exchangeRates = useExchangeRates();
  const filteredTickets = useFilteredTickets(tickets, filters, exchangeRates);

  const isSuccess = !isLoading && !error;

  return (
    <div className="flex flex-col md:flex-row  p-8 items-start justify-center">
      <Filters onFilterChange={setFilters} />

      {error && <Error />}
      {isLoading && <Loading />}

      {isSuccess && (
        <div className="mt-8 md:mt-0 md:ml-5">
          {filteredTickets.map((ticket: typeTicket) => (
            <Ticket
              key={`${ticket.price}-${ticket.stops}`}
              ticket={ticket}
              currency={filters.currency}
              exchangeRates={exchangeRates}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
