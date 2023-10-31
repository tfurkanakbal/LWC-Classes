import { LightningElement } from 'lwc';

export default class Introduction extends LightningElement {

/*  Usa-Case: Please display the following sentence dynamically in the template.
        Hello World!
        My name is Isaac and I have 3 certifications in salesforce. 
        I am from USA and I live in Houston, TX, 54350.
        My favorite color is blue and I like swimming. Finally , My favorite food is pizza.
*/
    //Primitve Data Types
    fullName="Bilbo Baggings";
    certification=5;

    //Objects Data Types
    location={
        country:"USA",
        city:"Boston",
        state:"MA",
        zipCode:"02145"
    }

    hobby={
        color:"blue",
        sport:"hiking",
        food:"burger"
    }

}