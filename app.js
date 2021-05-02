const $ = document.querySelector.bind(document);

let input = $('.panel').textContent;
const container = $('.container');
const divs = document.querySelectorAll('.container div');
const cursor = $('span.cursor');

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
      $('.panel').textContent = input;
    }

    // Backspace
    if (e.target.classList.contains('backspace')) {
      input = input.slice(0, -1);
      $('.panel').textContent = input;
    }

    // Clear
    if (e.target.classList.contains('clear')) {
      input = '';
      $('.panel').textContent = input;
    }

    // Comma
    if (e.target.classList.contains('comma')) {
      if (!input.includes('.')) {
        input += '.';
        $('.panel').textContent = input;
      }
    }

    // Percentage
    if (e.target.classList.contains('percentage')) {
      input += '%';
      $('.panel').textContent = input;
    }

    // Divide
    if (e.target.classList.contains('divide')) {
      input += '/';
      $('.panel').textContent = input;
    }

    // Multiply
    if (e.target.classList.contains('multiply')) {
      input += '*';
      $('.panel').textContent = input;
    }

    // Subtract
    if (e.target.classList.contains('subtract')) {
      input += '-';
      $('.panel').textContent = input;
    }

    // Add
    if (e.target.classList.contains('add')) {
      input += '+';
      $('.panel').textContent = input;
    }

    // Equals
    if (e.target.classList.contains('equals')) {
      // Divide
      if (input.includes('/')) {
        const num1 = parseFloat(input.slice(0, input.indexOf('/')));
        const num2 = parseFloat(input.slice(input.indexOf('/') + 1));

        input = num1 / num2;
        $('.panel').textContent = input;
      }

      // Multiply
      if (input.includes('*')) {
        const num1 = parseFloat(input.slice(0, input.indexOf('*')));
        const num2 = parseFloat(input.slice(input.indexOf('*') + 1));

        input = num1 * num2;
        $('.panel').textContent = input;
      }

      // Subtract
      if (input.includes('-')) {
        const num1 = parseFloat(input.slice(0, input.indexOf('-')));
        const num2 = parseFloat(input.slice(input.indexOf('-') + 1));

        input = num1 - num2;
        $('.panel').textContent = input;
      }

      // Add
      if (input.includes('+')) {
        const num1 = parseFloat(input.slice(0, input.indexOf('+')));
        const num2 = parseFloat(input.slice(input.indexOf('+') + 1));

        input = num1 + num2;
        $('.panel').textContent = input;
      }

      // Percentage
      if (input.includes('%')) {
        const num = parseFloat(input.slice(0, input.indexOf('%')));
        input = num / 100;
        $('.panel').textContent = input;
      }
    }
  });
});
