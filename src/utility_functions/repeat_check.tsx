import { Card } from '../App';

export const cardRepeatCheck = (
    element: Card | undefined,
    arr: any
): boolean => {
    const check = arr.includes(element);
    return check;
};
