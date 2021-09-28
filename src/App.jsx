import './App.css';
import { useState } from "react"

const math = require("mathjs")

const App = () => {
  const [total, setTotal] = useState("")

  const handleClick = (val) => {
    setTotal(total.concat(val.target.name));
  }

  const handleClickClear = () => {
    setTotal("")
  }

  const handleClickEqual = () => {
    try {
      setTotal(math.evaluate(total).toString())
    } catch(err) {
      setTotal("Error")
    }
   
  }

  return (
    <div className = "container">

      <form>
        <input type="text" value={total}></input>
      </form>

      <div className = "keypad">

        <button className = "clearBtn" onClick={handleClickClear}>clear</button>
        <button className = "totalBtn" onClick={handleClickEqual}>=</button>
        <button name = "+" onClick={handleClick}>+</button>
        <button name = "-" onClick={handleClick}>-</button>
        <button name = "*" onClick={handleClick}>*</button>
        <button name = "/" onClick={handleClick}>/</button>
        <button name = "1" onClick={handleClick}>1</button>
        <button name = "2" onClick={handleClick}>2</button>
        <button name = "3" onClick={handleClick}>3</button>
        <button name = "4" onClick={handleClick}>4</button>
        <button name = "5" onClick={handleClick}>5</button>
        <button name = "6" onClick={handleClick}>6</button>
        <button name = "7" onClick={handleClick}>7</button>
        <button name = "8" onClick={handleClick}>8</button>
        <button name = "9" onClick={handleClick}>9</button>
        <button name = "0" onClick={handleClick}>0</button>


      </div>

    </div>  
  )

}

export default App