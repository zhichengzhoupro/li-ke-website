import {action, observable} from "mobx";
import mockData from './data';
export default class DesignStore {
    @observable designList: any = mockData;

    @action
    searchInDesignList = (word: string) => {
        if(word) {
            this.designList = mockData.filter((d:any) => d.title.includes(word) || d.title.includes(word));
        } else {
            this.designList = mockData;
        }
    };

}