import { Card } from './components/view/card';
import './global.scss';
import { AppView } from './components/view/appView';
import { Controller } from './components/controller/controller';
import { dataArr } from './components/sources/source';
import { DataCard } from './types/addition';


const controller = new Controller(dataArr);
controller.draw();





