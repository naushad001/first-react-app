import React from 'react';

function App() {

    let currDate = new Date(50);
    currDate = currDate.getHours();
    let greeting = "";
    const cssStyle = {};
    if (currDate > 1 && currDate < 12) {
        greeting = "Good Morning";
        cssStyle.color = "#00b894";
    } else if (currDate >= 12 && currDate < 15) {
        greeting = "Good Afternoon";
        cssStyle.color = "#00b894";
    } else if (currDate >= 16 && currDate < 24) {
        greeting = "Good Eveing";
        cssStyle.color = "#000000";
    }

    return ( 
    <>
        <div >
            <h1 > Hello Sir:  <span style = { cssStyle } >  { greeting }  </span > </h1 > 
        </div > 
    </> 
    ) 
};

    export default App;