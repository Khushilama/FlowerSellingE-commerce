import React from "react";
import PropTypes from "prop-types";
import { CiSearch } from "react-icons/ci";

const InputSearch = ({ label, value, onChange, type }) => {
  return (
    <form>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        {label}
      </label>
      <div className="relative flex flex-row border border-gray-300 w-267 rounded-lg overflow-hidden">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-600">
          <CiSearch className="h-5 w-5" />
        </div>
        <input
          type="search"
          value={value}
          id="default-search"
          className="block w-full py-2 px-10 text-sm text-gray-900 outline-none bg-transparent"
          placeholder="Search"
        />
      </div>
    </form>
  );
};

InputSearch.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default InputSearch;
