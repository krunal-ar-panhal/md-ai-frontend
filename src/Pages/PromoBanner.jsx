import React from 'react';

const PromoBanner = () => {
  return (
    <section className="max-w-screen-2xl mx-auto p-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center">
        <span className="text-4xl text-primary"><i className="ri-truck-line"></i></span>
        <h4 className="text-lg font-semibold text-gray-800 mt-2">Free Delivery</h4>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
      </div>

      <div className="text-center">
        <span className="text-4xl text-primary"><i className="ri-money-dollar-circle-line"></i></span>
        <h4 className="text-lg font-semibold text-gray-800 mt-2">100% Money Back Guarantee</h4>
        <p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, repellendus?</p>
      </div>

      <div className="text-center">
        <span className="text-4xl text-primary"><i className="ri-user-voice-fill"></i></span>
        <h4 className="text-lg font-semibold text-gray-800 mt-2">Strong Support</h4>
        <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, reprehenderit!</p>
      </div>
    </section>
  );
}

export default PromoBanner;
