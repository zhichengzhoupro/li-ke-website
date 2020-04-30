import {observable} from "mobx";
import mockData from './data';
export default class DesignStore {
    @observable designList: any = mockData;
}