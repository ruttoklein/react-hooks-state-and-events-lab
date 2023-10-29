import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const appclass = isDarkMode ? "App dark" : "App light";
  
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={appclass}>
      <header>
        <h2>Shopster</h2>
         {/* Step 3: Add an event handler to the button */}
         <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
