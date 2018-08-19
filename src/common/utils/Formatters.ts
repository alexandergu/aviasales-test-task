import { PriceBuilders } from "./PriceBuilder";

/**
 * Возвращает отформатированное число
 */
export function formatNumber(num: number): string {
    return String(Math.ceil(num).toString()).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
}

/**
 * Возвращает склонение
 */
export function declineOfNumber(n: number, titles: string[]): string {
    return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
}

/**
 * Возвращает цену со значком валюты
 */
export function formatPrice(price: string, currency: string): string {
    const builder = PriceBuilders[currency];

    return builder(price);
}
