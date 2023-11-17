import React, { useState } from "react";
import Birthday from "./data";
import CardList from "./components/CardList";
import Title from "./components/Title";

function App() {
  const initialBirthdayState = Birthday;
  const [birthday, setBirthday] = useState(initialBirthdayState);
  const handleDelete = (id) => {
    const updatedBirthdays = birthday.filter((b) => b.id !== id);
    setBirthday(updatedBirthdays);
  };
  const handleClearAll = () => {
    setBirthday([]);
  };
  const handleReset = () => {
    setBirthday(initialBirthdayState);
  };

  return (
    <div className="card font-Roboto flex justify-center items-center">
      <div className="main-card mt-12 site-container bg-white w-[600px] h-[634px]">
        <Title userCount={birthday.length} />
        <CardList birthday={birthday} onDelete={handleDelete} />
        <div className="flex gap-4">
          {birthday.length > 0 ? (
            <button
              onClick={handleClearAll}
              className="w-[100%] h-[29px] rounded-md bg-[#D946EF] text-[white]"
            >
              Clear All
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-[100%] h-[29px] rounded-md bg-[#3273DC] text-[white]"
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
