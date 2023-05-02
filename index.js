const countValue=document.querySelector('#counter');

const increment= () =>{
    //Get the value from UI
    let value=parseInt(countValue.innerText);  //convert string value into integer value.
    //update the value
    value=value+1;
    //Set the value IN UI.
    countValue.innerText=value;
};


const decrement= () =>{
    //Get the value from UI
    let value=parseInt(countValue.innerText);  //convert string value into integer value.
    //update the value
    value=value-1;
    //Set the value IN UI.
    countValue.innerText=value;
};