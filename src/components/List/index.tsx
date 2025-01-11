import React, { useEffect, useState } from 'react'
import { Allowance } from '@/types/allowances'
import Card from '../Card';

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
      <div className='flex flex-wrap gap-3'>
        {allowances.map((allowance) => (
          <Card key={allowance.id} allowance={allowance}/>
        ))}
      </div>
    </div>
  )
}

export default List
