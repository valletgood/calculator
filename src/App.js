import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '/'];

  const calArray = ['÷', 'x', '−', '+', '=']

  const [selectData, setSelectData] = useState([]);

  // !--- 선택한 값 출력 ---!
  const showData = (value) => {
    if (value === '=') {
      return;
    } else
      setSelectData(selectData.concat(value))
  }

  // !--- 값 초기화 ---!
  const allClearData = () => {
    setSelectData([])
  }

  // !--- 마지막 입력 취소 ---!
  const clearData = () => {
    const data = selectData.pop()
    const result = selectData.filter((it) => it !== data.index)
    setSelectData(result)
  }
  return (
    <div className="App">
      <div className='show_data'>
        {selectData.length === 0 ? 0 : selectData}
      </div>
      <div className='btns'>
        <div className='left_btns'>
          <div className='function_btns'>
            <button className='function_btn' onClick={allClearData}>AC</button>
            <button className='function_btn' onClick={clearData}>C</button>
            <button className='function_btn'>+/−</button>
          </div>
          <div className='number_btns'>
            {numberArray && numberArray.map((value, index) => <button className='number_btn' key={index} onClick={() => showData(value)}>{value}</button>)}
          </div>
        </div>
        <div className='sign_btns'>
          {calArray && calArray.map((sign, index) => <button key={index} className='sign_btn' onClick={() => showData(sign)}>{sign}</button>)}
        </div>
      </div>
    </div>
  );
}

export default App;
