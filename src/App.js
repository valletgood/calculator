import React, {  useEffect, useState } from 'react';
import './App.css';
import Calculator from './Calculator';
import ShowData from './ShowData';

function App() {

  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];

  const [selectData, setSelectData] = useState([]);

  const [checkingMethod, setCheckingMethod] = useState(true)

  const [result, setResult] = useState()

  const [preview, setPreview] = useState([])

  const [mark, setMark] = useState(true);

  // !--- 숫자 출력 ---!
  const getNum = (e) => {
      setSelectData((prev) => prev + e.target.value)
      setPreview((prev) => prev + e.target.value)
      setCheckingMethod(true)
  }

  // !--- 연산자 출력
  const getMethod = (e) => {
    checkMethod();
    if(e.target.value === '=') {
      resultData();
    } else if(checkingMethod === true) {
      setSelectData((prev) => prev + e.target.value)
      setPreview((prev) => prev + e.target.innerText)
    }else {
      alert('숫자를 입력해주세요')
    }
  }

  // !--- 직전 입력 문자 판별 true : 연산자 올 수 있음, false : 연산자 올 수 없음
  const checkMethod = () => {
    setCheckingMethod(false)    
  }

  // !--- 값 계산
  const resultData = () => {
    const calculator = eval(`${selectData}`)
    setResult(calculator)
    setSelectData([])
    setPreview([])
    setMark(true)
  }

  // !--- 값 초기화 ---!
  const allClearData = () => {
    setSelectData([])
    setPreview([])
    setResult(0)
    setMark(true)
  }

  // !--- 마지막 입력 취소 ---!
  const clearData = () => {
    const data = selectData.slice(0, -1)
    setSelectData(data)
    setPreview(data)
    setCheckingMethod(true)
  }

  // !--- 부호 변환 
  const toggleMark = () => {
    if(mark === true) {
      setSelectData((prev) => `-${prev}`)
      setPreview((prev) => `-${prev}`)
      setMark(false)
    } else if (mark === false) {
      setSelectData((prev) => prev.slice(1))
      setPreview((prev) => prev.slice(1))
      setMark(true)
    }
  }

  // !--- 렌더링이 직후 연산자를 첫번째로 선택할 수 없음
  useEffect(() => {
    setCheckingMethod(false)
  }, [])

  return (
    <div className="App">
      <ShowData preview={preview} />
      <Calculator result={result} setResult={setResult} />
      <div className='btns'>
        <div className='left_btns'>
          <div className='function_btns'>
            <button className='function_btn' value={'AC'} onClick={allClearData}>AC</button>
            <button className='function_btn' value={'C'} onClick={clearData}>C</button>
            <button className='function_btn' value={'+/-'} onClick={toggleMark} >+/-</button>
          </div>
          <div className='number_btns'>
            {numberArray && numberArray.map((value, index) => index !==9? <button className='number_btn' key={index} onClick={getNum}  value={value} >{value}</button> :
            <button style={{gridColumn:'1/3',width:'90%' ,borderRadius:'100px'}} className='number_btn' key={index} onClick={getNum} value={value} >{value}</button>
            )}
          <button className='number_btn' onClick={getMethod} value={'.'}>.</button>
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
