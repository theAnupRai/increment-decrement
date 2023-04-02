import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function plusHandler() {
    setCount(count+1);
  };

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">

      <h1 className='font-medium text-4xl text-[#0398d4]'>Increment & Decrement</h1>

      <div className='bg-white flex items-center justify-center g-12 py-3 pb-4 text-[#344151] rounded-lg text-[25px]'>
        <button className='border-r-2 w-20 text-center text-5xl border-[#bfbfbf] self-center' onClick={() => {
          setCount(count - 1)
        }}>
          -
        </button>

        <div className=' text-center gap-10 font-bold mx-5 text-5xl self-center'>
          {count}
        </div>

        <button onClick={plusHandler} className='border-l-2 w-20 text-center text-5xl self-center border-[#bfbfbf]'>
          +
        </button>
      </div>

      <div>
        <button className='font-medium text-2xl px-5 py-2 pb-3 rounded-lg text-[#f7eceb] bg-[#0398d4]' onClick={resetHandler}>
          Reset
        </button>
      </div>

    </div>
  )
}

export default App;
