import React from "react";
// Components 
import Header from "./components/Header";
import WilderCard from "./components/WilderCard";
// Mui 
import { CssBaseline } from '@mui/material';

const wilderExample = {
  "_id": "6228cc82f6b4850ed0fa3e3e",
  "name": "New Seb",
  "skills": [
      {
          "title": "Java",
          "votes": 600,
          "_id": "6229b898bdff75156b0248fb"
      },
      {
          "title": "React",
          "votes": 1000,
          "_id": "6229c7f47245869cba25bab6"
      },
      {
          "title": "Css",
          "votes": 10000,
          "_id": "6229cbeaa9930126254071e3"
      }
  ],
  "completed": "in progress",
  "__v": 2
}


function App() {
  return (
    <div className="App">
        <CssBaseline enableColorScheme/>
        <Header />
        {/* <WilderCard wilder={wilderExample} />  */}
    </div>
  );
}

export default App;
