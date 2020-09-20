let name = '';
let number = Math.floor(Math.random() * 100);
let guesses = 0;

const output = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');

prompt.addEventListener('submit', handleSubmit);

printMessage('Введите имя игрока:');

input.focus();

function handleSubmit(event) {
    event.preventDefault();

    processInput(input.value);

    input.value = '';
}

function printMessage(message) {
    let li = document.createElement('li');

    li.textContent = message;

    output.appendChild(li);
}

function clearOutput(){
  for (let i = 0; i < output.children.length; i++) {
    output.removeChild(output.children[i])
    
  }
}

function processInput(input){
  if(!input) return;

  if(!name){
    name = input;
    clearOutput();
    printMessage(`${name} загадано число от 0 до 100. Попробуй отгадать его за наименьшее количество попыток. После каждой попытки я скажу "мало", "много" или "верно"`);
    return;
  }

  printMessage(input);

  let gues = Number.parseInt(input)

  if(Number.isNaN(gues)) return;

  guesses += 1;

  if(gues > number){
    printMessage(` Много`)
  }else if(gues< number){
    printMessage(`Мало`)
  } else {
    printMessage(`${gues} Верно`)
    printMessage(guesses + 'Число попыток')
    printMessage('game over')

    prompt.remove();
  }
}