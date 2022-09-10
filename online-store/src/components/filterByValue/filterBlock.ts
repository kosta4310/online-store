import { DataCard, IPropsInput } from '../../types/addition';

// function filterByManufactured(props: IPropsInput, arr: DataCard[]) {
//     const { manufactured } = props;
//     if (!manufactured.length) return arr;
//     let i = 0;
//     const filterArr: DataCard[] = [];
//     do {
//         const tempArr = arr.filter((card) => {
//             return card.manufactured === manufactured[i];
//         });

//         filterArr.push(...tempArr);
//         i++;
//     } while (i < manufactured.length);

//     return filterArr;
// }
// function filterByNumberOfPixels(props: IPropsInput, arr: DataCard[]) {
//     const { numberOfPixels } = props;
//     if (!numberOfPixels.length) return arr;
//     let i = 0;
//     const filterArr: DataCard[] = [];
//     do {
//         const tempArr = arr.filter((card) => {
//             return card.numberOfPixels === numberOfPixels[i];
//         });

//         filterArr.push(...tempArr);
//         i++;
//     } while (i < numberOfPixels.length);

//     return filterArr;
// }
function getFilteredData(filters: IPropsInput, arr: DataCard[]): DataCard[] {
    const keyValue = Object.entries(filters);

    if (!keyValue.length) {
        return arr;
    }
    // const [name, value] = Object.entries(filters)[0];
    const name = <Partial<keyof IPropsInput>>keyValue[0][0];
    const value = keyValue[0][1];
    let res: DataCard[] = [];
    if (Array.isArray(value) && !value.length) {
        delete filters[name];
        return getFilteredData(filters, arr);
    }
    if (name === 'countOfStore') {
        res = value
    } else (Array.isArray(value)) {
        res = value.reduce((acc: DataCard[], curr) => {
            return [...acc, ...arr.filter((el) => el[name] === curr.toString())];
        }, []);
    } 
    delete filters[name];
    return getFilteredData(filters, res);
}
function checkedActiveClass(storage: IPropsInput): void {
    const copyStorage = JSON.parse(JSON.stringify(storage));
    const keyValue: [string, string[]][] = Object.entries(copyStorage);

    if (!keyValue.length) {
        return;
    }
    const name = <Partial<keyof IPropsInput>>keyValue[0][0];
    const value = keyValue[0][1];

    if (Array.isArray(value) && !value.length) {
        delete copyStorage[name];
        return checkedActiveClass(copyStorage);
    }
    if (name === 'popularity' && value[0] === 'Yes') {
        const element = document.getElementById(`${name}`) as HTMLInputElement;
        element.checked = true;
    }
    if (Array.isArray(value)) {
        value.map((id) => {
            console.log(id);

            const element = document.getElementById(`${id}`) as HTMLElement;
            console.log(element);

            element?.classList.add('active');
        });

        delete copyStorage[name];
        return checkedActiveClass(copyStorage);
    }
}
export { getFilteredData, checkedActiveClass };
