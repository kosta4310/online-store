import noUiSlider from 'nouislider';
import { IPropsInput } from '../../types/addition';
import _default, { target } from '../nouislider';

const sliderRangeQuantity = document.getElementById('rangeQuantity') as target;
const sliderRangeYear = document.getElementById('rangeYear') as target;

const sliderRangeQuantityLeft = document.querySelector(
    '.filter-by-range__quantity-of-stock .left-count span'
) as HTMLElement;
const sliderRangeQuantityRight = document.querySelector(
    '.filter-by-range__quantity-of-stock .right-count span'
) as HTMLElement;

const sliderRangeYearLeft = document.querySelector('.filter-by-range__production-year .left-count span') as HTMLElement;
const sliderRangeYearRight = document.querySelector(
    '.filter-by-range__production-year .right-count span'
) as HTMLElement;

const formatForSlider = {
    from: function (formattedValue: string) {
        return Number(formattedValue);
    },
    to: function (numericValue: number) {
        return Math.round(numericValue);
    },
};

noUiSlider.create(sliderRangeQuantity, {
    start: [20, 80],
    step: 1,
    connect: true,
    range: {
        min: 0,
        max: 100,
    },
    format: formatForSlider,
});

sliderRangeQuantity?.noUiSlider?.on('update', (values) => {
    const [left, right] = values;
    sliderRangeQuantityLeft.innerHTML = '' + left;
    sliderRangeQuantityRight.innerHTML = '' + right;
    // const filterProps: IPropsInput = JSON.parse(sessionStorage.getItem('onlineStore') as string);
    // filterProps.rangeQuantity = filterProps.rangeQuantity ? filterProps.rangeQuantity : [+left, +right];
    // sessionStorage.setItem('onlineStore', JSON.stringify(filterProps));
});

noUiSlider.create(sliderRangeYear, {
    start: [20, 80],
    step: 1,
    connect: true,
    range: {
        min: 0,
        max: 100,
    },
    format: formatForSlider,
});

sliderRangeYear?.noUiSlider?.on('update', (values) => {
    const [left, right] = values;
    sliderRangeYearLeft.innerHTML = '' + left;
    sliderRangeYearRight.innerHTML = '' + right;
});
