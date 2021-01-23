import React from 'react'

const Search = () => {
  return (
    <section className="bg-gray-900">
      <form className="w-9/12 mx-auto pt-3 pb-10 lg:w-1/2">
        <input
          type="text"
          name="Search Countries"
          id="searchCountries"
          placeholder="Search For a Country"
          className="bg-green-500 text-white text-xl placeholder-white font-bold tracking-widest w-full py-2 px-5 rounded"
        />
        <input
          type="submit"
          value="Search"
          className="uppercase border w-full mt-4 bg-green-500 text-white text-xl placeholder-white font-bold tracking-widest w-full py-2 px-5 rounded cursor-pointer transition-all hover:bg-transparent hover:text-green-500"
        />
      </form>
    </section>
  )
}

export default Search
