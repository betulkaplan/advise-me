import React from "react";

function LoadingWrapper({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        children
      )}
    </>
  );
}

export default LoadingWrapper;
