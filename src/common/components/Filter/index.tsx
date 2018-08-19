import * as React from 'react';

import './style.css';

import {FilterItem} from "../../models/FilterItem";

/**
 * Свойства компонента фильтр
 */
export interface FilterProps {
    /**
     * Критерии фильтра (св-во.FilterItem)
     */
    children: React.ReactNode,

    /**
     * Колбэк изменения значений критерия фильтра
     */
    onChange: (filterName: string, filterValue: any) => void,

    /**
     * Значения фильтров
     */
    value: any
}

/**
 * Фильтр
 */
export class Filter extends React.Component<FilterProps, {}> {
    /**
     * Рисует DOM
     */
    public render(): React.ReactNode {
        const children = React.Children.map(
            this.props.children,
            (filter: React.ReactElement<any> & FilterItem) =>
                React.cloneElement(filter, {
                    onChange: (filterValue: any) => {
                        this.props.onChange(filter.props.name, filterValue)
                    },
                    value: this.props.value[filter.props.name],
                    filtersValue: this.props.value
                })
        );

        return (
            <div className="filters">
                { children }
            </div>
        );
    }
}
