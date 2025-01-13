import Result from "./components/Result"
import Summary from "./components/Summary"

function App() {

  return (
    <div className="md:h-screen md:flex md:justify-center md:items-center bg-verylightblue">
      <div className="flex flex-col font-sans md:flex-row md:w-[736px] md:m-auto bg-white md:rounded-tr-[32px] md:rounded-br-[32px]">
        <Result />
        <Summary />
      </div>
    </div>
  )
}

export default App
