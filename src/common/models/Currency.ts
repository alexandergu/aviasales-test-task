import { CurrencyBase } from "./CurrencyBase";

/**
 * Валюта
 */
export interface Currency {
    /**
     * Код валюты
     */
    base: CurrencyBase;

    /**
     * Отображаемое название валюты
     */
    label: string;
}
