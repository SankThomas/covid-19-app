import React, { useState, useEffect } from 'react'

const url = 'https://api.covid19api.com/summary'

const Countries = () => {
  const [countries, setCountries] = useState([])

  const fetchData = async () => {
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>Countries</h1>

      <section>
        <ul>
          <li>{countries.ID}</li>
        </ul>
      </section>
    </>
  )
}

export default Countries
