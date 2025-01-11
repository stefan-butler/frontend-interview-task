import { Allowance } from '@/types/allowances'
interface CardProps {
  allowance: Allowance
}

const Card = ({ allowance }: CardProps) => {
  return (
    <div className="border border-gray-200 shadow-sm rounded-lg w-[380px] h-[190px] flex flex-col justify-between">
      <div className="flex-grow p-5">
        <h3 className="text-lg ">{allowance.name}</h3>
        {allowance.type === 'card' ? (
          <p className="text-sm text-gray-300 font-light">Spend Card</p>
        ) : (
          <p className="text-sm text-gray-300 font-light">Expense</p>
        )}
      </div>
      {allowance.active && (
        <div className="flex-grow px-5 mt-9">
          <div className="flex justify-between text-sm mb-1">
            <p>
              {Math.round(
                (Number(allowance.spent) / Number(allowance.amount)) * 100
              )}
              % utilised
            </p>
            <p className="text-gray-300">
              {allowance.currency}
              {Number(allowance.amount).toFixed(2)} /{' '}
              {allowance.renewal.charAt(0).toUpperCase() +
                allowance.renewal.slice(1)}
            </p>
          </div>
          <div className="w-full bg-gray-200 h-1 rounded-lg">
            <div
              className="bg-lime-400 h-1 rounded-lg"
              style={{
                width: `${Math.round((Number(allowance.spent) / Number(allowance.amount)) * 100)}%`,
              }}
            />
          </div>
        </div>
      )}
      {!allowance.active && (
        <div className="bg-gray-100 flex flex-grow justify-start items-center w-full h-5 rounded-lg">
          <p className="text-lime-500 px-5">Activate card</p>
        </div>
      )}
    </div>
  )
}

export default Card
