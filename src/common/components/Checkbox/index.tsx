import * as React from 'react';

import './style.css';

/**
 * Свойства компонента чекбокс
 */
interface CheckboxProps {
    /**
     * Название чекбокса
     */
    label: string;

    /**
     * Значение чекбокса
     */
    value: string;

    /**
     * Обратный вызов на событие клика
     */
    onChange?: (value: string, active: boolean) => void

    /**
     * Активность чекбокса
     */
    active?: boolean
}

/**
 * Компонент чекбокс
 */
export class Checkbox extends React.Component<CheckboxProps> {
    /**
     * Обратный вызов при клике
     */
    handleClick(e: any) {
        e.preventDefault();

        this.props.onChange(this.props.value, !this.props.active)
    }

    /**
     * Рисует DOM
     */
    public render(): React.ReactNode {
        return (
            <label className="checkbox-container" onClick={(e) => this.handleClick(e)} htmlFor={this.props.value}>
                <span className="checkbox">
                    <input id={this.props.value} className="checkbox__input" type="checkbox" checked={this.props.active}/>
                    <span className="checkbox__face"/>
                </span>
                {this.props.label}
            </label>
        );
    }
}
