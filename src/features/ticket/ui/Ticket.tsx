import React from "react";
import {TicketProps} from "../model/types";

const airlineLogos: Record<string, string> = {
    S7: "assets/s7.png",
    SU: "assets/aeroflot.png",
    TK: "assets/turkish.png",
    BA: "assets/british.png",
};

const currencySymbol = {
    RUB: "₽",
    USD: "$",
    EUR: "€",
}

function formatDate(inputDate: string): string {
    const [day, month, year] = inputDate.split('.').map(Number);

    const fullYear = year < 100 ? 2000 + year : year;

    const date = new Date(fullYear, month - 1, day);

    const dateOptions: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    };
    const weekdayOptions: Intl.DateTimeFormatOptions = {
        weekday: 'short',
    };

    let formattedDate = date.toLocaleDateString('ru-RU', dateOptions);
    const formattedWeekday = date.toLocaleDateString('ru-RU', weekdayOptions);

    formattedDate = formattedDate.replace(' г.', '').replace('.', '');

    return `${formattedDate}, ${formattedWeekday}`;
}

export const LineWithArrow = () => {
    return (
        <div className="relative flex items-center justify-between w-[30px] md:w-[55px] h-px bg-gray-300">
            <svg
                className="w-6 h-3 text-gray-300 my-translate-x-15 md:my-translate-x-40"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14 7l5 5m0 0l-5 5m5-5H3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export const Ticket = ({ ticket, currency, exchangeRates }: TicketProps) => {
    const rate = currency === "RUB" ? 1 : exchangeRates?.[currency];
    const visiblePrice = rate !== undefined ? Math.round(ticket.price * rate).toLocaleString() : "Loading...";

    return (
<div className="flex max-w-lg min-w-72 max-h-[146px] md:max-h-[120px] flex-col-reverse md:flex-row items-center border rounded-lg shadow-md p-1 bg-white mb-4">
    <div className="md:w-[30%] w-[80%] md:h-auto flex md:flex-col flex-row justify-between items-center md:border-r md:border-t-0 border-t p-1">
        <img src={airlineLogos[ticket.carrier]} alt={ticket.carrier} className="w-[40%] md:min-w-[90%] md:h-[50%]"/>
        <button
            className="md:min-w-[90%] w-[40%] text-[9px] md:text-sm bg-orange text-white font-semibold py-2 px-2 mt-1 md:mt-2 rounded-lg hover:bg-orange-dark transition">
            Купить<br/>за {visiblePrice}{currencySymbol[currency]}
        </button>
    </div>
    <div className="flex md:w-[70%] md:h-auto w-[90%] flex-row justify-between text-lg font-semibold p-2">
        <div className="flex flex-col">
            <span className="md:text-3xl text-xl text-gray-600"> {ticket.departure_time}</span>
            <span
                className="text-[11px] whitespace-nowrap text-gray-600 md:mt-2 mt-1">{ticket.origin}, {ticket.origin_name}</span>
            <span
                className="text-[11px] whitespace-nowrap text-gray-400 md:mt-2 mt-1">{formatDate(ticket.departure_date)}</span>
        </div>
        <div className="flex flex-col items-center">
            <span className="text-[7px] whitespace-nowrap mb-1">{ticket.stops === 0 ? "Прямой" : `${ticket.stops} пересадка`}</span>
            <LineWithArrow/>
        </div>
        <div className="flex flex-col items-end">
            <span className="md:text-3xl text-xl text-gray-600"> {ticket.arrival_time}</span>
            <span
                className="text-[11px] whitespace-nowrap text-gray-600 md:mt-2 mt-1">{ticket.destination}, {ticket.destination_name}</span>
            <span
                className="text-[11px] whitespace-nowrap text-gray-400 md:mt-2 mt-1">{formatDate(ticket.arrival_date)}</span>
        </div>
    </div>
</div>
);
};