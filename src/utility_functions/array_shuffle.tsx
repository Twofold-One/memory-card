// For array elements shuffling hs been used implementation of
// Durstenfeld shuffle, an optimized version of Fisher-Yates
// algorithm.

type Arr = Array<{
    id: number;
    src: string;
    alt: string;
    text: string;
}>;

export const shuffleArray = (array: Arr) => {
    let arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};
