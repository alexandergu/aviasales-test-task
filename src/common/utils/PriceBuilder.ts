/**
 * Свойства билдера цены
 */
interface PriceBuilder {
    [currency: string]: (price: string) => string
}

/**
 * Билдер цены на каждый тип валюты
 */
export const PriceBuilders: PriceBuilder = {
    'RUB': (price: string) => `${price}₽`,
    'EUR': (price:  string) => `€${price}`,
    'USD': (price: string) => `$${price}`
};