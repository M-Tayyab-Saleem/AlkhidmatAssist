import React from 'react';

const JoinUsSection = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-[url('https://i.pinimg.com/736x/1c/63/b0/1c63b0bf2bad9348b7795a7a6b09a51c.jpg')] bg-cover bg-center bg-no-repeat p-6 md:p-12 space-y-6 md:space-y-0 min-h-[60vh]"
    >

      <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
        <h1 className="text-6xl md:text-6xl font-bold text-[#00529B] leading-snug">
          Join Us in Making a <br />
          <span className="text-[#00529B]">Difference</span>
        </h1>
      </div>


      <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
        <p className="text-gray-700 text-lg leading-relaxed mb-6 bg-gray-100/80 p-4 rounded-md">
          Your support can transform lives and uplift communities. Whether you <br />
          choose to donate, volunteer, or spread the word, every action counts <br />
          towards creating a better tomorrow.
        </p>

        
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-[#00529B] text-white font-bold py-2 px-6 rounded hover:bg-[#003f73]">
            Donate
          </button>
          <button className="bg-gray-500 text-white font-bold py-2 px-6 rounded hover:bg-gray-700">
            Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
