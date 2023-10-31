import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    /* The containers in Js are called as properties. There are two type of properties.
        1. Local Properties : They are the (variables)/containers that are available only in this component.
        2. Public Properties : They are the(variables)/containers that are available for external  components as well.
           We will focus on this concept in chapter-5: Component communications.
    */

        name = "Alex Ferguson";
        title= "Salesforce Developer";
        experience = 3;
        fruits = ["Apple", "Pear", "Orange", "Kiwi"];
        location = {
            city : "Atlanta",
            state : "Georgia",
            postalCode:30028
        }

        fullName = "Elizabeth Town";  //fullName is my Local property
        certNumber= 3;

}

  /* 
  Please write the following sentence in our LWC component and display the name and certifications dynamically by using one-way data binding.

    Hello World!
    My name is Isaac and I have  3 certifications in salesforce.
        Steps:
        1.Prepare your local properties and store the name  and number values
        2.write your sentence and do data binding with name and number values
  */

    
