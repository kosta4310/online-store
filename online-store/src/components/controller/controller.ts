import { AppView } from '../view/appView';

import { getFilteredData, checkedActiveClass } from '../filterByValue/filterBlock';
import { DataCard, IPropsInput } from '../../types/addition';

export class Controller {
    arrayData: DataCard[];
    appView: AppView;
    filterProps: IPropsInput;
    constructor(arrayData: DataCard[]) {
        this.arrayData = arrayData;
        this.appView = new AppView();
        this.filterProps = {
            manufactured: [],
            numberOfPixels: [],
            popularity: [],
        };
    }
    draw() {
        sessionStorage.getItem('onlineStore')
            ? (this.filterProps = JSON.parse(sessionStorage.getItem('onlineStore') as string))
            : sessionStorage.setItem('onlineStore', JSON.stringify(this.filterProps));
        console.log(`start: ${sessionStorage.getItem('onlineStore')}`);

        const manufactured = <HTMLElement>document.querySelector('.manufactured__list');
        manufactured?.addEventListener('click', (e) => {
            this.handlerManufactured(e, this.appView, this.arrayData);
        });

        const numberOfPixels = <HTMLElement>document.querySelector('.number-of-pixel__list');
        numberOfPixels?.addEventListener('click', (e) => {
            this.handlerNumberOfPixels(e, this.appView, this.arrayData);
        });

        const popularity = <HTMLElement>document.getElementById('popularity');
        popularity?.addEventListener('change', (e) => {
            this.handlerPopularity(e, this.appView, this.arrayData);
        });
        // const temp: IPropsInput = {
        //     manufactured: [],
        //     numberOfPixels: ['18', '24'],
        //     popularity: [],
        // };
        // console.log(temp);

        const storage: IPropsInput = JSON.parse(sessionStorage.getItem('onlineStore') as string);
        checkedActiveClass(storage);
        const filterArr = getFilteredData(storage, this.arrayData);

        this.appView.start(filterArr);
    }
    handlerPopularity(e: Event, appView: AppView, arrayData: DataCard[]) {
        const onlineStoreText = <string>sessionStorage.getItem('onlineStore');
        const onlineStore = JSON.parse(onlineStoreText);
        let { popularity } = onlineStore;
        popularity = popularity ? popularity : [];
        if (!popularity.length || popularity[0] === 'No') {
            popularity = ['Yes'];
        } else popularity = [];
        onlineStore.popularity = popularity;
        sessionStorage.setItem('onlineStore', JSON.stringify(onlineStore));
        console.log(onlineStore);

        appView.start(getFilteredData(onlineStore, arrayData));
    }
    handlerNumberOfPixels(e: MouseEvent, appView: AppView, arrayData: DataCard[]) {
        const tar = <HTMLElement>e.target;
        if (tar.closest('button')) {
            const onlineStoreText = <string>sessionStorage.getItem('onlineStore');
            const onlineStore = JSON.parse(onlineStoreText);
            let { numberOfPixels } = onlineStore;
            numberOfPixels = numberOfPixels ? numberOfPixels : [];
            if (!numberOfPixels.includes(tar.id)) {
                tar.classList.add('active');
                numberOfPixels.push(tar.id);
            } else {
                numberOfPixels.splice(numberOfPixels.indexOf(tar.id), 1);
                tar.classList.remove('active');
            }

            onlineStore.numberOfPixels = numberOfPixels;
            sessionStorage.setItem('onlineStore', JSON.stringify(onlineStore));
            console.log(onlineStore);

            appView.start(getFilteredData(onlineStore, arrayData));
        }
    }

    private handlerManufactured(e: MouseEvent, appView: AppView, arrayData: DataCard[]) {
        const tar = <HTMLElement>e.target;
        if (tar.closest('button')) {
            const onlineStoreText = <string>sessionStorage.getItem('onlineStore');
            const onlineStore = JSON.parse(onlineStoreText);
            let { manufactured } = onlineStore;
            manufactured = manufactured ? manufactured : [];
            if (!manufactured.includes(tar.id)) {
                manufactured.push(tar.id);
                tar.classList.add('active');
            } else {
                manufactured.splice(manufactured.indexOf(tar.id), 1);
                tar.classList.remove('active');
            }

            onlineStore.manufactured = manufactured;
            sessionStorage.setItem('onlineStore', JSON.stringify(onlineStore));
            console.log(onlineStore);
            appView.start(getFilteredData(onlineStore, arrayData));
        }
    }
}
