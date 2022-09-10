import { DataCard } from '../../types/addition';
import { Card } from './card';
import './RrangeSlider';

export class AppView {
    start(dataArray: DataCard[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        dataArray.forEach((data) => {
            const card = new Card(data);

            const temp = card.create();
            fragment.append(temp);
        });
        (document.querySelector('.block-goods') as HTMLElement).innerHTML = '';

        (document.querySelector('.block-goods') as HTMLElement).appendChild(fragment);
    }
}
