export const cardRepeatCheck = (arr1: any[], arr2: any[]) => {
    const check = arr1.some((element) => arr2.includes(element));
    return check;
};
