/**
 * Свойства фильтра
 */
export interface FilterItem {
    /**
     * Идентификатор фильтра
     */
    name: string;

    /**
     * Обратный вызов при изменении
     */
    onChange?: (value: any) => {},

    /**
     * Значение фильтра
     */
    value?: any
}
