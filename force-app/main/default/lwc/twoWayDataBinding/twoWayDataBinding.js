import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
    /*
    HTML only speaks with the Local or public properties in JS.
    */
    inputName;
    inputTittle;

    hanleChangeName(event){
        var fullName = event.target.value;
        this.inputName=fullName;
    }

    handleChangeTitle(event){
       var title = event.target.value;
       this.inputTittle=title;
    }

}