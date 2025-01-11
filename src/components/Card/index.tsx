import { Allowance } from "@/types/allowances";

const Card = ({allowance}) => {

  return (
    <div>
      <h3>{allowance.name}</h3>
      {allowance.type === 'spend' ?
        <p>Spend Card</p>
        :
        <p>Expense</p>
      }
      {allowance.active ? 
        <div>
          <div>
            <p>{Math.round((Number(allowance.spent) / Number(allowance.amount)) *100)}% utilised</p>
            <p>{allowance.currency} {allowance.amount} / {allowance.renewal.charAt(0).toUpperCase() + allowance.renewal.slice(1)}</p>
          </div>
          <div className="w-full bg-gray-200 h-1 rounded-lg">
            <div 
              className="bg-lime-400 h-1 rounded-lg"
              style={{
                width: `${Math.round((Number(allowance.spent) / Number(allowance.amount)) *100)}%`
              }}
            />
              
          </div>
        </div>
        :
        <div>
          <p>Activate Card</p>
        </div>
      }
    </div>
  )
}

export default Card;