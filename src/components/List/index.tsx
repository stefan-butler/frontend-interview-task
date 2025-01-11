import React, { useEffect, useState } from 'react'
import { Allowance } from '@/types/allowances'

const List = () => {
  const [allowances, setAllowances] = useState<Allowance[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/allowances')
      const { result } = await response.json()
      setAllowances(result)
    }

    fetchData()
  }, [])

  return (
    <div className='p-7'>
      <h2 className='text-green-500 font-semibold text-2xl mb-4'>Allowances</h2>
      <div>
        {allowances.map((allowance) => (
          <div key={allowance.id}>{JSON.stringify(allowance)}</div>
        ))}
      </div>
    </div>
  )
}

export default List
