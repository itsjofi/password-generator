import React from 'react';

//UI
import { Button, Container, Card, TextField } from './styles/App.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';

//UTILS
import { generatePassword } from './utils';

const App = (): JSX.Element => {
  const [passwordLength, setPasswordLength] = React.useState(32);

  const copyToClipBoard = () => {
    const element = document.getElementById('password') as HTMLInputElement;

    if (element.value != '') {
      element.select();
      element.setSelectionRange(0, passwordLength);
      document.execCommand('copy');
      alert('Password copied to clipboard');
    }
  };

  const handlePasswordGenerate = () => {
    const input = document.getElementById('password') as HTMLInputElement;
    const upperEl = document.getElementById('upper') as HTMLInputElement;
    const lowerEl = document.getElementById('lower') as HTMLInputElement;
    const numberEl = document.getElementById('number') as HTMLInputElement;
    const symbolEl = document.getElementById('symbol') as HTMLInputElement;

    if (input) {
      input.value = generatePassword(
        passwordLength,
        lowerEl.checked,
        upperEl.checked,
        numberEl.checked,
        symbolEl.checked
      );
    }
  };

  return (
    <Container>
      <Card>
        <h3>Password Generator</h3>
        <TextField>
          <input type="text" readOnly={true} id="password" />
          <div onClick={copyToClipBoard} title={'Copy to clipboard'}>
            <FontAwesomeIcon icon={faClipboard} />
          </div>
        </TextField>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <label>LENGTH: {passwordLength}</label>
          <input
            type="range"
            max={32}
            min={4}
            value={passwordLength}
            onChange={(event) => setPasswordLength(+event.target.value)}
          />
        </div>
        <label>
          Include Uppercase
          <input type="checkbox" id="upper" />
        </label>
        <label>
          Include Lowercase
          <input type="checkbox" id="lower" />
        </label>
        <label>
          Include Numbers
          <input type="checkbox" id="number" />
        </label>
        <label>
          Include Symbols
          <input type="checkbox" id="symbol" />
        </label>
        <Button onClick={handlePasswordGenerate}>GENERATE</Button>
      </Card>
    </Container>
  );
};

export default App;
