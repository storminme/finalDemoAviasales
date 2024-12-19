import React from 'react';

export const Error = () => {
  return (
    <div
      className={
        'flex justify-center items-center min-h-screen w-[50%] mt-8 md:mt-0 md:ml-5'
      }
    >
      <div className="text-black text-lg font-bold justify-center">
        Произошла ошибка при загрузке данных :(
      </div>
    </div>
  );
};
