import React, { useEffect, useState } from 'react';

const App = () => {

  const [firstInput, setFirstInput] = useState({id: 1, value: '', checked: false});
  const [secondInput, setSecondInput] = useState({id: 2, value: '', checked: false});
  const [lastInput, setLastInput] = useState({id: 3, value: '', checked: false});
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [operator, setOperator] = useState('');

  const inputController = () => {
    const firstInputForm = document.querySelector('#first-input');
    const secondInputForm = document.querySelector('#second-input');
    const lastInputForm = document.querySelector('#last-input');
    setFirstInput(getCopy => ({...getCopy, value: firstInputForm.value === '' ? '' : parseInt(firstInputForm.value)}));
    setSecondInput(getCopy => ({...getCopy, value: secondInputForm.value === '' ? '' : parseInt(secondInputForm.value)}));
    setLastInput(getCopy => ({...getCopy, value: lastInputForm.value === '' ? '' : parseInt(lastInputForm.value)}));
  }

  const checkboxController  = () => {
    const firstCheckbox = document.querySelector('#first-checkbox').checked;
    const secondCheckbox = document.querySelector('#second-checkbox').checked;
    const lastCheckbox = document.querySelector('#last-checkbox').checked;
    setFirstInput(getCopy => ({...getCopy, checked: firstCheckbox}));
    setSecondInput(getCopy => ({...getCopy, checked: secondCheckbox}));
    setLastInput(getCopy => ({...getCopy, checked: lastCheckbox}));
  }

  const radioButtonController  = (e) => {
    setOperator(e.target.value);
  }

  useEffect(() => {
    const calculate = () => {
      let tmpResult = null;
      let number = [];
      let numbers = [];
      let countTrue = 0;
      number = [...number, firstInput.value === '' ? 0 : firstInput.value, secondInput.value === '' ? 0 : secondInput.value, lastInput.value === '' ? 0 : lastInput.value];
      numbers = [...numbers, firstInput, secondInput, lastInput];
      numbers.forEach((number) => {
        if(number.checked === true) {
          countTrue = countTrue + 1;
        }
      })
      if(operator !== '') {
        if(countTrue > 1 || countTrue === 0) {
          for(let i = 0; i < numbers.length; i++) {
            if(numbers[i].checked === true) {
              if(tmpResult === null) {
                 tmpResult = number[i];
              }
              else {
                if(operator === 'plus') {
                  tmpResult = tmpResult + number[i];
                }
                else if(operator === 'minus') {
                  tmpResult = tmpResult - number[i];
                }
                else if(operator === 'times') {
                  tmpResult = tmpResult * number[i];
                }
                else if(operator === 'divide') {
                  tmpResult = tmpResult / number[i];
                }
              }
            }
          }
          setError(false);
        }
        else {
          setError(true);
        }
        setResult(tmpResult);
      }
    }
    calculate();
  }, [firstInput, secondInput, lastInput, operator]);

  return (
    <div className="page-container">
      <div className="input-group-container">
        <div className="input-group animate__animated animate__fadeInLeft">
          <input type="number" value={firstInput.value} onChange={inputController} id="first-input" className="input-number" placeholder="First number..."/>
          <label htmlFor="first-checkbox" className='label-group'>
            <input type="checkbox" onChange={checkboxController} id="first-checkbox" className="checkbox"/>
            <i className="fas fa-toggle-on"></i>
          </label>
        </div>
        <div className="input-group animate__animated animate__fadeInLeft animate__fast">
          <input type="number" value={secondInput.value} onChange={inputController} id="second-input" className="input-number" placeholder="Second number..." />
          <label htmlFor="second-checkbox" className='label-group'>
            <input type="checkbox" onChange={checkboxController} id="second-checkbox" className="checkbox"/>
            <i className="fas fa-toggle-on"></i>
          </label>
        </div>
        <div className="input-group animate__animated animate__fadeInLeft animate__faster">
          <input type="number" value={lastInput.value} onChange={inputController} id="last-input" className="input-number" placeholder="Last number..." />
          <label htmlFor="last-checkbox" className='label-group'>
            <input type="checkbox" onChange={checkboxController} id="last-checkbox" className="checkbox"/>
            <i className="fas fa-toggle-on"></i>
          </label>
        </div>
      </div>
      <div className="radio-group-container">
        <div className="radio-group animate__animated animate__bounceIn animate__delay-1s">
          <div className="radio-card">
            <input type="radio" value="plus" name="operator" id="plus" onChange={radioButtonController} className="radio-button" />
            <label htmlFor="plus" className="operator-value" title="Plus">
              <i className="fas fa-plus"></i>
            </label>
          </div>
        </div>
        <div className="radio-group animate__animated animate__bounceIn animate__delay-1s">
          <div className="radio-card">
            <input type="radio" value="minus" name="operator" id="minus" onChange={radioButtonController} className="radio-button" />
            <label htmlFor="minus" className="operator-value" title="Minus">
              <i className="fas fa-minus"></i>
            </label>
          </div>
        </div>
        <div className="radio-group animate__animated animate__bounceIn animate__delay-1s">
          <div className="radio-card">
            <input type="radio" value="times" name="operator" id="times" onChange={radioButtonController} className="radio-button" />
            <label htmlFor="times" className="operator-value" title="Times">
              <i className="fas fa-times"></i>
            </label>
          </div>
        </div>
        <div className="radio-group animate__animated animate__bounceIn animate__delay-1s">
          <div className="radio-card">
            <input type="radio" value="divide" name="operator" id="divide" onChange={radioButtonController} className="radio-button" />
            <label htmlFor="divide" className="operator-value" title="Divide">
              <i className="fas fa-divide"></i>
            </label>
          </div>
        </div>
      </div>
      <div className="result-container">
        <div className="line-break animate__animated animate__fadeInUp animate__delay-2s animate__faster"></div>
        <div className="result-value animate__animated animate__fadeInUp animate__delay-2s animate__fast">
          <span>Result:</span>
          <span><span className="valid-value">{result}</span> {error ? <span className="error-value">Error!</span> : <></>}</span>
        </div>
      </div>
    </div>
  )
}

export default App;
