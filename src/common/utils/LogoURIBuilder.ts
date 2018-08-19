/**
 * Возвращает урл логотипа авиакомпании
 */
export function buildAirlineLogoURI(airlineCode: string): string {
    return `/airlines-logo/${airlineCode}.png`;
}
