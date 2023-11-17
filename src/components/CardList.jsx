import React from "react";

const CardList = ({ birthday, onDelete }) => {
  return (
    <div>
      <div className="user-list mt-10">
        {birthday &&
          birthday.map((birthdays) => (
            <div
              className="list flex justify-between items-center pb-[24px]"
              key={birthdays.id}
            >
              <div className="image flex items-center gap-[12px]">
                <img
                  className="w-[70px] h-[70px] object-cover rounded-[50%]"
                  src={birthdays.image}
                  alt=""
                />
                <h3 className="font-medium text-[24px]">
                  {birthdays.name} <br />{" "}
                  <span className="font-normal text-[16px]">
                    {birthdays.age} years
                  </span>
                </h3>
              </div>
              <button
                onClick={() => onDelete(birthdays.id)}
                className="btn w-[133px] h-[28px] rounded-lg text-[white] bg-[#E81313]"
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardList;
  