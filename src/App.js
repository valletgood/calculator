import React, { useEffect, useState } from 'react';
import './App.css';
import Calculator from './Calculator';
import ShowData from './ShowData';

function App() {

  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.' ];

  const [selectData, setSelectData] = useState([]);

  const [checkingMethod, setCheckingMethod] = useState(true)

  const [result, setResult] = useState()

  // !--- 숫자 출력 ---!
  const getNum = (e) => {
      setSelectData((prev) => prev + e.target.value)
      setCheckingMethod(true)
  }

  // !--- 연산자 출력
  const getMethod = (e) => {
    checkMethod();
    if(e.target.value === '=') {
      resultData();
    } else if(checkingMethod === true) {
      setSelectData((prev) => prev + e.target.value)
    } else {
      alert('숫자를 입력해주세요')
    }
  }
  // !--- 직전 입력 문자 판별
  const checkMethod = () => {
    setCheckingMethod(false)    
  }

  // !--- 값 계산
  const resultData = () => {
    const calculator = eval(`${selectData}`)
    console.log(calculator)
    setResult(calculator)
    setSelectData([])
  }

  // !--- 값 초기화 ---!
  const allClearData = () => {
    setSelectData([])
    setResult(0)
  }

  // !--- 마지막 입력 취소 ---!
  const clearData = () => {
    const data = selectData.slice(0, -1)
    setSelectData(data)
  }



  return (
    <div className="App">
      <ShowData selectData={selectData} />
      <Calculator result={result} setResult={setResult} />
      <div className='btns'>
        <div className='left_btns'>
          <div className='function_btns'>
            <button className='function_btn' value={'AC'} onClick={allClearData}>AC</button>
            <button className='function_btn' value={'C'} onClick={clearData}>C</button>
            <button className='function_btn' value={'+/-'} >+/-</button>
          </div>
          <div className='number_btns'>
            {numberArray && numberArray.map((value, index) => index !==9? <button className='number_btn' key={index} onClick={getNum} value={value} >{value}</button> :
            <button style={{gridColumn:'1/3',width:'90%' ,borderRadius:'100px'}} className='number_btn' key={index} onClick={getNum} value={value} >{value}</button>
            )}
          </div>
        </div>
        <div className='sign_btns'>
          <button className='sign_btn' onClick={getMethod} value={'/'}>÷</button>
          <button className='sign_btn' onClick={getMethod} value={'*'}>x</button>
          <button className='sign_btn' onClick={getMethod} value={'-'}>-</button>
          <button className='sign_btn' onClick={getMethod} value={'+'}>+</button>
          <button className='sign_btn' onClick={getMethod} value={'='}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
