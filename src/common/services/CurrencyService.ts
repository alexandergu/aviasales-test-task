import { Currency } from "../models/Currency";

/**
 * Сервис актуальных данных о валюте
 */
export class CurrencyService {
    public static CURRENCIES: Currency[] = [
        {
            base: 'RUB',
            label: 'RUB'
        },
        {
            base: 'USD',
            label: 'USD'
        },
        {
            base: 'EUR',
            label: 'EUR'
        }
    ];

    /**
     * Возвращает сконвертируемую цену
     */
    public static getConvertedPrice(price: number, currency: string): number {
        if (currency === 'RUB') return price;
        if (currency === 'USD') return price / 68;
        if (currency === 'EUR') return price / 80;
    }
}
