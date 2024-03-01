import { useState } from "react";

const MainUI = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      <form className="max-w-sm mx-auto flex mt-4">
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-red-600">Select an option</label>
        <select id="countries" className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected >Choose a country</option>
          <option className="py-4" value="US">United States</option>
          <option className="py-4" value="CA">Canada</option>
          <option className="py-4" value="FR">France</option>
          <option className="py-4" value="DE">Germany</option>
        </select>
      </form>


    </>
  );
};

export default MainUI;
