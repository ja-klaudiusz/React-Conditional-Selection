import React from 'react';

const Loading = () => {
  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-neutral-200"></div>
      <div className="mt-4 text-neutral-300">wait a second...</div>
    </div>
  );
};

export default Loading;
