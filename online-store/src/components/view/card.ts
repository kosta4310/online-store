import { DataCard } from '../../types/addition';

export class Card {
    id: number;
    name: string;
    manufactured: string;
    dimensionsOfMatrix: string;
    focus: string;
    isKit: boolean;
    numberOfPixels: string;
    popularity: string;
    price: number;
    countOfStore: number;
    linkToFoto: string;
    year: number;
    constructor(data: DataCard) {
        this.id = data.id;
        this.name = data.name;
        this.manufactured = data.manufactured;
        this.dimensionsOfMatrix = data.dimensionsOfMatrix;
        this.focus = data.focus;
        this.isKit = data.isKit;
        this.numberOfPixels = data.numberOfPixels;
        this.popularity = data.popularity;
        this.price = data.price;
        this.countOfStore = data.countOfStore;
        this.year = data.year;
        this.linkToFoto = data.linkToFoto;
    }
    create(): HTMLElement {
        const tempCard = <HTMLTemplateElement>document.querySelector('#temp-card');
        const newItem = <HTMLTemplateElement>tempCard.content.cloneNode(true);
        (newItem.querySelector('.card__name') as HTMLElement).textContent = this.name;
        (newItem.querySelector(
            '.card__manufactured'
        ) as HTMLElement).textContent = `Manufactured: ${this.manufactured}`;
        (newItem.querySelector(
            '.card__image'
        ) as HTMLElement).innerHTML = `<img src="./assets/images/${this.linkToFoto}" alt="${this.name}">`;
        (newItem.querySelector('.card__price') as HTMLElement).textContent = `Price: ${this.price}UAH`;
        (newItem.querySelector('.card__is-kit') as HTMLElement).textContent = `Lens is kit: ${
            this.isKit ? 'Yes' : 'No'
        }`;
        (newItem.querySelector(
            '.card__number-of-pixels'
        ) as HTMLElement).textContent = `Count of pixels: ${this.numberOfPixels}Mp`;
        (newItem.querySelector('.card__focus') as HTMLElement).textContent = `Focus dimension: ${this.focus}mm`;
        (newItem.querySelector(
            '.card__dimensions'
        ) as HTMLElement).textContent = `Matrix dimensions: ${this.dimensionsOfMatrix}mm x mm`;
        (newItem.querySelector('.card__popularity') as HTMLElement).textContent = `Is popular: ${
            this.popularity === 'Yes' ? 'Yes' : 'No'
        }`;
        (newItem.querySelector('.card__count') as HTMLElement).textContent = `Count of story: ${this.countOfStore}`;
        (newItem.querySelector('.card__year') as HTMLElement).textContent = `Year: ${this.year}`;

        return newItem;
    }
}
