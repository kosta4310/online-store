type DataCard = {
    id: number;
    name: string;
    manufactured: string;
    price: number;
    isKit: boolean;
    numberOfPixels: string;
    focus: string;
    dimensionsOfMatrix: string;
    popularity: string;
    countOfStore: number;
    year: number;
    linkToFoto: string;
};
type Manufactured = 'Canon' | 'Sony' | 'Nikon';
type NumberOfPixels = '18' | '24' | '26' | '30';
type Popularity = 'Yes' | 'No';

type IPropsInput = {
    manufactured: Manufactured[];
    numberOfPixels: NumberOfPixels[];
    popularity: Popularity[];
    countOfStore: [ number,  number];
};
export { DataCard, IPropsInput };
