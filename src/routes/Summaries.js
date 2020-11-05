import React, { useState, useEffect } from 'react'
import Http from '../libs/http'
import Summary from '../components/summary'

const Summaries = () => {
  const [data, setData] = useState({})
  const [details, setDetails] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const [toggleSearch, setToggleSearch] = useState(false)

  const fetchWeek = (param) => {
    Http.instance.get(`days/${param}`)
      .then(data => {
        const { body } = data
        const { detailsPerEmployee, ...rest } = body
        console.log(data)
        setIsFetching(false)
        setDetails(detailsPerEmployee)
        setData(rest)
      })
      .catch(err => console.log(err))
  }

  const handleToggle = () => {
    setToggleSearch(prev => !prev)
  }

  const handleChange = (date) => {
    fetchWeek(`week=${date}`)
    setToggleSearch(false)
  }

  useEffect(() => {
    fetchWeek('')
  }, [])

  return (
    <Summary
      isFetching={isFetching}
      data={data}
      details={details}
      showCalendar={toggleSearch}
      onClick={handleToggle}
      onChange={handleChange}
    />
  )
}

export default Summaries
