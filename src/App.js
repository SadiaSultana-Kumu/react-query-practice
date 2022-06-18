import React, { useState } from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import { ReactQueryDevtools } from 'react-query-devtools';

function App() {
  const [page, setPage] = useState('Planets')
  return (
    <>
      <div className="App">
        <h1>Star wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === 'Planets' ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
