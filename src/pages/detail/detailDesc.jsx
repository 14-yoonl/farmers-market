import React from "react";

const DetailDesc = () => {
  const arr = [
    { id: 1, name: "javascript" },
    { id: 2, name: "HTML" },
  ];

  const getHeart = (arr) => {
    console.log(arr);
  };
  return (
    <div>
      <div>
        {arr.map((item, index) => {
          return (
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.1)",
                padding: "16px",
                margin: "16px",
              }}
              onClick={() => getHeart(arr)}
              key={index}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailDesc;
