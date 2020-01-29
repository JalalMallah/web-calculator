let input = document.querySelector('.panel').textContent;
const container = document.querySelector('.container');
const divs = document.querySelectorAll('.container div');
const cursor = document.querySelector('span.cursor');

// Cursor animation
setInterval(() => {
  cursor.innerHTML = '|';
  cursor.classList.toggle('animate');
}, 500);

divs.forEach(div => {
  div.addEventListener('click', e => {
    // Nums
    if (e.target.classList.contains('number')) {
      input += e.target.textContent;
      document.querySelector('.panel').textContent = input;
    }

    // Backspace
    if (e.target.classList.contains('backspace')) {
      input = input.slice(0, -1);
      document.querySelector('.panel').textContent = input;
    }

    // Clear
    if (e.target.classList.contains('clear')) {
      input = '';
      document.querySelector('.panel').textContent = input;
    }

    // Comma
    if (e.target.classList.contains('comma')) {
      if (!input.includes('.')) {
        input += '.';
        document.querySelector('.panel').textContent = input;
      }
    }

    // Percentage
    if (e.target.classList.contains('percentage')) {
      input += '%';
      document.querySelector('.panel').textContent = input;
    }

    // Divide
    if (e.target.classList.contains('divide')) {
      input += '/';
      document.querySelector('.panel').textContent = input;
    }

    // Multiply
    if (e.target.classList.contains('multiply')) {
      input += '*';
      document.querySelector('.panel').textContent = input;
    }

    // Subtract
    if (e.target.classList.contains('subtract')) {
      input += '-';
      document.querySelector('.panel').textContent = input;
    }

    // Add
    if (e.target.classList.contains('add')) {
      input += '+';
      document.querySelector('.panel').textContent = input;
    }

    // Equals
    if (e.target.classList.contains('equals')) {
      // Divide
      if (input.includes('/')) {
        const num1 = parseFloat(input.slice(0, input.indexOf('/')));
        const num2 = parseFloat(input.slice(input.indexOf('/') + 1));

        input = num1 / num2;
        document.querySelector('.panel').textContent = input;
      }

      // Multiply
      if (input.includes('*')) {
        const num1 = parseFloat(input.slice(0, input.indexOf('*')));
        const num2 = parseFloat(input.slice(input.indexOf('*') + 1));

        input = num1 * num2;
        document.querySelector('.panel').textContent = input;
      }

      // Subtract
      if (input.includes('-')) {
        const num1 = parseFloat(input.slice(0, input.indexOf('-')));
        const num2 = parseFloat(input.slice(input.indexOf('-') + 1));

        input = num1 - num2;
        document.querySelector('.panel').textContent = input;
      }

      // Add
      if (input.includes('+')) {
        const num1 = parseFloat(input.slice(0, input.indexOf('+')));
        const num2 = parseFloat(input.slice(input.indexOf('+') + 1));

        input = num1 + num2;
        document.querySelector('.panel').textContent = input;
      }

      // Percentage
      if (input.includes('%')) {
        const num = parseFloat(input.slice(0, input.indexOf('%')));
        input = num / 100;
        document.querySelector('.panel').textContent = input;
      }
    }
  });
});
