import React from 'react';

const DealSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-10 mb-10 bg-primary-light rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="relative h-full flex justify-center">
        <img src="./deals.png" alt="Deals" className="h-full" />
      </div>
      <div className="max-w-lg space-y-6 text-center lg:text-left">
        <h5 className="text-lg font-semibold text-gray-700">GET UP TO 20% DISCOUNT</h5>
        <h4 className="text-4xl font-bold text-gray-800">Deal of This Week</h4>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ducimus, accusamus veniam eaque voluptates earum magni nulla sequi assumenda enim ex. Sed, alias. Doloremque, provident.
        </p>
        <div className="flex justify-center lg:justify-start gap-4 mt-6">
          <div className="flex flex-col items-center justify-center h-20 w-20 bg-white rounded-full shadow-md">
            <h4 className="text-2xl font-bold text-gray-800">14</h4>
            <p className="text-sm text-gray-500">Days</p>
          </div>
          <div className="flex flex-col items-center justify-center h-20 w-20 bg-white rounded-full shadow-md">
            <h4 className="text-2xl font-bold text-gray-800">20</h4>
            <p className="text-sm text-gray-500">Hours</p>
          </div>
          <div className="flex flex-col items-center justify-center h-20 w-20 bg-white rounded-full shadow-md">
            <h4 className="text-2xl font-bold text-gray-800">15</h4>
            <p className="text-sm text-gray-500">Mins</p>
          </div>
          <div className="flex flex-col items-center justify-center h-20 w-20 bg-white rounded-full shadow-md">
            <h4 className="text-2xl font-bold text-gray-800">05</h4>
            <p className="text-sm text-gray-500">Secs</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DealSection;
