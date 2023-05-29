import React, { useState, useEffect  } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const Search = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [gender, setGender] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Perform API query with the form data
    // Example: fetch('api-url', { method: 'POST', body: { firstName, lastName, zipCode, state, gender } })
    // Handle the API response accordingly
  };
 
  const cardData = [
    { id: 1, title: 'NFT 1', description: 'Description for NFT 1', image: 'https://via.placeholder.com/200x200' },
    { id: 2, title: 'NFT 2', description: 'Description for NFT 2', image: 'https://via.placeholder.com/200x200' },
    { id: 3, title: 'NFT 3', description: 'Description for NFT 3', image: 'https://via.placeholder.com/200x200' },
    { id: 4, title: 'NFT 4', description: 'Description for NFT 4', image: 'https://via.placeholder.com/200x200' },
    { id: 5, title: 'NFT 5', description: 'Description for NFT 5', image: 'https://via.placeholder.com/200x200' },
    { id: 6, title: 'NFT 6', description: 'Description for NFT 6', image: 'https://via.placeholder.com/200x200' },
    { id: 7, title: 'NFT 7', description: 'Description for NFT 7', image: 'https://via.placeholder.com/200x200' },
    { id: 8, title: 'NFT 8', description: 'Description for NFT 8', image: 'https://via.placeholder.com/200x200' },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    if (currentCardIndex === cardData.length - 4) {
      setCurrentCardIndex(0);
    } else {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePreviousCard = () => {
    if (currentCardIndex === 0) {
      setCurrentCardIndex(cardData.length - 4);
    } else {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };
  
  return (
    <main className=' w-full'>
      <div className="mx-auto  flex justify-center items-center px-6 pt-4">
        <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
          <div className="p-6 sm:p-8 lg:p-16 space-y-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-cyan-600">
              Search for Offenders
            </h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="firstName" className="text-sm font-medium text-cyan-600 block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="lastName" className="text-sm font-medium text-cyan-600 block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="zipCode" className="text-sm font-medium text-cyan-600 block mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="number"
                    name="zipCode"
                    id="zipCode"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                    placeholder="ZIP Code"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="state" className="text-sm font-medium text-cyan-600 block mb-2">
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  >
                    <option value="">Select State</option>
                    <option value="state1">State 1</option>
                    <option value="state2">State 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around  mt-9">
        <FaArrowLeft className="text-black text-2xl -mr-4  z-40 cursor-pointer " onClick={handlePreviousCard} />
        <div className="flex overflow-x-hidden ">
          {cardData.slice(currentCardIndex, currentCardIndex + 4).map((card) => (
            <div key={card.id} className="w-64 bg-blueviolet rounded-lg p-2 mt-2 border rounded-lg ">
              <div className="  ">
                <img src={card.image} alt={card.title} className="w-full h-auto mb-4" />
                <h3 className="text-2xl mb-2">{card.title}</h3>
                <p className=" ">{card.description}</p>
                <p className=" ">{card.description}</p>
                <p className="">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <FaArrowRight className="text-black text-2xl -ml-7  z-40 cursor-pointer" onClick={handleNextCard} />
      </div>

      
    </main>
  );
};
export default Search;