import { useMemo } from "react";
import { typeTicket } from "./types";

export const useFilteredTickets = (tickets: typeTicket[] | null, filters: { currency: "RUB" | "USD" | "EUR"; stops: number[] }, exchangeRates: { USD: number; EUR: number } | null) => {
    return useMemo(() => {
        if (!tickets) return [];
        let result = [...tickets];
        if (filters.stops.length > 0) {
            result = result.filter((ticket) => filters.stops.includes(ticket.stops));
        }
        return result;
    }, [filters, tickets, exchangeRates]);
};