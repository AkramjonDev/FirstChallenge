import React from "react";

const Title = ({ userCount }) => {
  return (
    <div>
      <h1 className="font-Roboto text-3xl mt-[24px]">
        {userCount} birthdays today
      </h1>
    </div>
  );
};

export default Title;
