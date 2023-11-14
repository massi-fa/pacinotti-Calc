import React, { useState } from 'react';
import styled from 'styled-components';

//Dichiarazione Styled Components:
const Container = styled.div`
  margin: 100px auto;
  padding: 50px;
  background-color: #66A182;
  border: 2px solid #2E4057;
  max-width: 600px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
const CommandContainer = styled.div`
  margin: 100px auto;
  padding: 50px;
  background-color: #66A182;
  border: 2px solid #2E4057;
  max-width: 400px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
`;

const ContainerResult = styled.div`
  border: 2px solid #2E4057;
`;

const H1 = styled.h1`
  color: #2E4057;
  margin: auto;
  text-align: center;
  font-size: 70px;
`;

const ContainerNumbers = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
`;

const ContainerOperators = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 100px;
  margin: 5px;
  font-size: 20px;
`;

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleRelust = () => {
    setResult(eval(input));
  };

  const handleReset = () => {
    setResult(0);
    setInput("");
  };

  return(
    <Container>
      <ContainerResult>
      {input === '' ? (
        <H1>Operazione</H1>
      ) : (
        <H1>{input}</H1>
      )}
        <H1>{result}</H1>
      </ContainerResult>
      <CommandContainer>
        <ContainerNumbers>
          <Button onClick={() => handleButtonClick('1')}>1</Button>
          <Button onClick={() => handleButtonClick('2')}>2</Button>
          <Button onClick={() => handleButtonClick('3')}>3</Button>
          <Button onClick={() => handleButtonClick('4')}>4</Button>
          <Button onClick={() => handleButtonClick('5')}>5</Button>
          <Button onClick={() => handleButtonClick('6')}>6</Button>
          <Button onClick={() => handleButtonClick('7')}>7</Button>
          <Button onClick={() => handleButtonClick('8')}>8</Button>
          <Button onClick={() => handleButtonClick('9')}>9</Button>
          <Button onClick={() => handleButtonClick('0')}>0</Button>
        </ContainerNumbers>
        <ContainerOperators>
          <Button onClick={() => handleButtonClick('+')}>+</Button>
          <Button onClick={() => handleButtonClick('-')}>-</Button>
          <Button onClick={() => handleButtonClick('*')}>x</Button>
          <Button onClick={() => handleButtonClick('/')}>/</Button>
          <Button onClick={handleRelust}>=</Button>
          <Button onClick={handleReset}>AC</Button>
        </ContainerOperators>
      </CommandContainer>
    </Container>
  )
};

export default App;
