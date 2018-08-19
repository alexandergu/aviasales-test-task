import * as React from 'react';

import './style.css';

/**
 * Свойства компонента списка чекбоксов
 */
interface CheckboxListProps {
    /**
     * Текущие активные чекбоксы листа
     */
    value: string[]

    /**
     * Колбэк на изменение значения активных чекбоксов
     */
    onChange: (values: string[], customParams?: any) => void
}

const defaultProps = {
    value: [] as string[]
};

/**
 * Компонент списка чекбоксов
 */
export class CheckboxList extends React.Component<CheckboxListProps, {}> {
    static defaultProps = defaultProps

    /**
     * Обратный вызов в случае изменения значения чекбокса
     */
    private handleChange(checkboxValue: string, active: boolean, ...customParams: any[]): void {
        if (active) {
            this.props.onChange(
                [
                    ...this.props.value,
                    checkboxValue
                ],
                ...customParams
            );
        } else {
            this.props.onChange(
                this.props.value.filter((value: string) => value !== checkboxValue),
                ...customParams
            );
        }
    }

    /**
     * Возвращает признак уже выбранного значения
     */
    private hasActive(value: string): boolean {
        return this.props.value.indexOf(value) > -1;
    }

    /**
     * Рисует DOM
     */
    public render(): React.ReactNode {
        const children = React.Children.map(this.props.children, (child: React.ReactElement<any>) => {
            return <div className="checkbox-list__item">
                {React.cloneElement(child, {
                    onChange: (value: string, active: boolean, ...customParams: any[]) => this.handleChange(value, active, ...customParams),
                    active: this.hasActive(child.props.value)
                })}
            </div>
        });

        return (
            <div className="checkbox-list">
                {children}
            </div>
        );
    }
}
