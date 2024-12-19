export interface typeTicket {
    "origin": string,
    "origin_name": string,
    "destination": string,
    "destination_name": string,
    "departure_date": string,
    "departure_time": string,
    "arrival_date": string,
    "arrival_time": string,
    "carrier": string,
    "stops": number,
    "price": number
}

export interface TicketProps {
    ticket: typeTicket;
    currency: "RUB" | "USD" | "EUR";
    exchangeRates: { USD: number; EUR: number } | null;
}

export interface TicketsResponse {
    tickets: typeTicket[];
}