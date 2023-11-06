import { useState } from 'react'
import {InputBox} from "./components/Input.jsx"
import useCurrencyInfo from "./customhooks/useCurrencyInfo"

function App() {
  const [amount , SetAmount] = useState(0)
  const [to , setTo] = useState("inr")
  const [from, SetFrom] = useState("usd")
  const [convertedAmount, SetConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    SetFrom(to)
    setTo(from)
    SetConvertedAmount(amount)
    SetAmount(convertedAmount)
  }
  
  const convert = ()=>{
    SetConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexals.com/photos/3532540/3532540/pexals-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>SetAmount(amount)}
                            selectCurrency={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                          label="From"
                          amount={convertedAmount}
                          currencyOptions={options}
                          onCurrencyChange={(currency)=>setTo(currency)}
                          selectCurrency={to}
                          onAmountChange = {(amount) => SetAmount(amount)}
                          amountDisable
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {inr.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
