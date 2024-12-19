import { useState, useEffect } from "react";

const fetchExchangeRates = async (): Promise<{ USD: number; EUR: number }> => {
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/RUB");
    const data = await response.json();
    return {
        USD: data.rates.USD,
        EUR: data.rates.EUR,
    };
};

export const useExchangeRates = () => {
    const [exchangeRates, setExchangeRates] = useState<{ USD: number; EUR: number } | null>(null);

    useEffect(() => {
        fetchExchangeRates().then((rates) => setExchangeRates(rates));
    }, []);

    return exchangeRates;
};