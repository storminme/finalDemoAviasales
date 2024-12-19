export interface FiltersProps {
    onFilterChange: (filters: { currency: "RUB" | "USD" | "EUR"; stops: number[] }) => void;
}