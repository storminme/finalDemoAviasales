import React, {useState} from "react";
import { Ticket } from "../features/ticket/ui/Ticket";
import { Filters } from "../features/filters/ui/Filters";
import { typeTicket } from "../features/ticket/model/types";
import { useFetchTickets } from "../features/ticket/model/useFetchTickets";
import {useExchangeRates} from "../features/ticket/model/useExchangeRates";
import { TicketSkeleton } from "../features/ticket/ui/TicketSkeleton";
import {useFilteredTickets} from "../features/ticket/model/useFilteredTickets";

const App: React.FC = () => {
    const {tickets, isLoading, error } = useFetchTickets();
    const [filters, setFilters] = useState<{ currency: "RUB" | "USD" | "EUR"; stops: number[] }>({ currency: "RUB", stops: [] });
    const exchangeRates= useExchangeRates();
    const filteredTickets = useFilteredTickets(tickets, filters, exchangeRates);

    if (isLoading) {
        return (
            <div className="flex flex-col md:flex-row p-8 items-start justify-center">
                <Filters onFilterChange={setFilters}/>
                <div className='w-full md:w-auto mt-8 md:mt-0 md:ml-5'>
                    {Array(5)
                        .fill(0)
                        .map((_, index) => <TicketSkeleton key={index}/>)}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col md:flex-row p-8 items-start justify-center">
                <Filters onFilterChange={setFilters}/>
                <div className={"flex justify-center items-center min-h-screen w-[50%] mt-8 md:mt-0 md:ml-5"}>
                    <div className="text-black text-lg font-bold justify-center">Произошла ошибка при загрузке данных :(</div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="flex flex-col md:flex-row  p-8 items-start justify-center">
            <Filters onFilterChange={setFilters}/>
            <div className='mt-8 md:mt-0 md:ml-5'>
                {(filteredTickets.map((ticket: typeTicket) => (
                        <Ticket
                            key={`${ticket.price}-${ticket.stops}`}
                            ticket={ticket}
                            currency={filters.currency}
                            exchangeRates={exchangeRates}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default App;