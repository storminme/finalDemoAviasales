import React, { useEffect, useState } from 'react';

export interface FiltersProps {
  onFilterChange: (filters: {
    currency: 'RUB' | 'USD' | 'EUR';
    stops: number[];
  }) => void;
}

export const Filters = ({ onFilterChange }: FiltersProps) => {
  const [currency, setCurrency] = useState<'RUB' | 'USD' | 'EUR'>('RUB');
  const [stops, setStops] = useState<number[]>([]);
  const currencies: ('RUB' | 'USD' | 'EUR')[] = ['RUB', 'USD', 'EUR'];

  const toggleStop = (stop: number) => {
    if (stops.includes(stop)) {
      setStops(stops.filter((s) => s !== stop));
    } else {
      setStops([...stops, stop]);
    }
  };

  const handleCurrencyChange = (newCurrency: 'RUB' | 'USD' | 'EUR') => {
    setCurrency(newCurrency);
  };

  const handleStopsChange = (stop: number) => {
    if (stop === -1) {
      setStops([]);
    } else {
      toggleStop(stop);
    }
  };

  useEffect(() => {
    onFilterChange({ currency, stops });
  }, [currency, stops]);

  return (
    <div className="bg-white p-4 shadow-md rounded-lg w-full max-w-lg min-w-72 md:w-64 h-auto border mb-4">
      <h2 className="font-semibold mb-4 text-gray-600">ВАЛЮТА</h2>
      <div className="flex mb-6">
        {currencies.map((curr, index) => (
          <button
            key={curr}
            className={`
                        flex-1 min-h-[60px] min-w-[75px] max-w-[150px] 
                        ${index === 0 ? 'border-l rounded-l-lg' : 'border-l-0'}
                        ${index === currencies.length - 1 ? 'rounded-r-lg' : ''}
                        border-gray-400 border
                        ${currency === curr ? 'bg-primary text-white' : 'bg-white text-primary hover:border-primary hover:bg-primary-ultra-light'}
                        `}
            onClick={() => handleCurrencyChange(curr)}
          >
            {curr}
          </button>
        ))}
      </div>
      <h2 className="font-semibold mb-4 text-gray-600">КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <div className="text-md">
        {[
          { label: 'Все', value: -1 },
          { label: 'Без пересадок', value: 0 },
          { label: '1 пересадка', value: 1 },
          { label: '2 пересадки', value: 2 },
          { label: '3 пересадки', value: 3 },
        ].map((stop) => (
          <div
            key={stop.value}
            className={`flex items-center justify-between ${stop.value !== -1 ? 'mt-2' : ''}`}
          >
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                checked={
                  stop.value === -1
                    ? stops.length === 0
                    : stops.includes(stop.value)
                }
                onChange={() => handleStopsChange(stop.value)}
                className="appearance-auto focus:outline-none focus:ring-0 mr-2"
              />
              <span>{stop.label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
