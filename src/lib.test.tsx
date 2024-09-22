/**
 * Importing React for use in the component.
 */






import React from "react"















/**
 * Importing the Button, Spinner, and Alert components from the index file.
 */



import { Button, Spinner, Alert } from "./index"










/**
 * Creating instances of the Button, Spinner, and Alert components.
 */


/*

Types ( Buttons )
    Primary = 1,
    Secondary = 2,
    Success = 3,
    Danger = 4,
    Warning = 5,
    Info = 6,
    Light = 7,
    Dark = 8




    Types ( Alert )
    Primary = 1,
    Secondary = 2,
    Success = 3,
    Danger = 4,
    Warning = 5,
    Info = 6,
    Dark = 7




    Types ( Spinner )

    1 = Defualt Spinner Type


*/


/*


const BtnFunction = new Button(1).build()
const SpinnerFunction = new Spinner().build()
const AlertFunction = new Alert().build()


*/











/**
 * Creating an icon for the Alert component.
const Icon = () => {
    return (
        <>
            <i className="bi bi-exclamation-triangle-fill"></i>
        </>
    )
}
*/









/**
 * Creating the main App component.
 
const App = () => {
    return (
        <div>
            <BtnFunction text="Hello World" />
            <SpinnerFunction />
            <AlertFunction text="Hello World" icon={Icon} />
        </div>
    );
};

*/












/**
 * Exporting the App component as the default export.
 

export default App;

*/