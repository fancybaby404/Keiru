import Image from "next/image"
import React from "react";

const PreviewModal = ({ imgUrl, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-md">
      <div className="bg-white p-8 rounded shadow-md">
        <Image
          src={imgUrl}
          alt="Preview"
          className="w-full h-full object-contain"
          width={800} 
          height={600} 
        />
        <button className="absolute top-4 right-4 text-gray-600" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PreviewModal;
