// TODO: limit to a .js class
const inputs = document.querySelectorAll('.c-bolt-input');

let thousandsDecimal = [',', '.'];

for (let i = 0, len = inputs.length; i < len; i++) {
  const input = inputs[i];
  const inputType = input.dataset.boltFormatInput;

  const typeBehaviors = (input, inputType) => {
    if (inputType && input.value.length > 0) {
      const rawNumber = input.parentNode.getElementsByClassName('rawnumber')[0];

      switch (inputType) {
        case 'currency-us':
          rawNumber.setAttribute('data-before-raw-value', '$');
          rawNumber.setAttribute(
            'data-after-raw-value',
            addThousands(input.value, thousandsDecimal[0], thousandsDecimal[1]),
          );
          break;
        case 'currency-ja':
          rawNumber.setAttribute('data-before-raw-value', '¥');
          rawNumber.setAttribute(
            'data-after-raw-value',
            addThousands(input.value, thousandsDecimal[0], thousandsDecimal[1]),
          );
          break;
        case 'percent':
          rawNumber.setAttribute(
            'data-before-raw-value',
            addThousands(input.value, thousandsDecimal[0], thousandsDecimal[1]),
          );
          rawNumber.setAttribute('data-after-raw-value', '%');
          break;
        case 'number':
          rawNumber.setAttribute(
            'data-after-raw-value',
            addThousands(input.value, thousandsDecimal[0], thousandsDecimal[1]),
          );
          break;
        default:
      }
    }
  };

  const addThousands = (string, thousands, decimal) => {
    const rgx = /(\d+)(\d{3})/;
    string += '';
    const x = string.split(decimal);
    let x1 = x[0];
    const x2 = x.length > 1 ? decimal + x[1] : '';
    if (thousands) {
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + thousands + '$2');
      }
    }
    return x1 + x2;
  };

  // Check if the field has pre-filled text from the server side
  if (input.value) {
    input.classList.add('is-filled');
  }

  if (inputType) {
    let langTag = document.documentElement.lang;
    // Tempoarary until we have more direction on what we are covering
    // const formLang = inputs[0].closest('form');

    // if (formLang.dataset.boltLang) {
    //   langTag = formLang.dataset.boltLang;
    // }

    // const periodComma = ['fr-fr', 'fr', 'de', 'de-de', 'it', 'it-it'];
    // const spaceComma = ['pl-PL'];
    // const commaPeriod = ['en-us', 'en', 'pt-br', 'es'];
    // const nonePeriod = ['ja-jp', 'ja'];

    // const determineFormat = lang => {
    // Tempoarary until we have more direction on what we are covering
    // const langCompare = (langArray, lang) => {
    //   return langArray.indexOf(lang.toLowerCase()) > -1;
    // };
    // if (langCompare(periodComma, lang)) {
    //   thousandsDecimal = ['.', ','];
    // } else if (langCompare(spaceComma, lang)) {
    //   thousandsDecimal = [' ', ','];
    // } else if (langCompare(commaPeriod, lang)) {
    //   thousandsDecimal = [',', '.'];
    // } else if (langCompare(nonePeriod, lang)) {
    //   thousandsDecimal = ['', '.'];
    // }
    // };

    // determineFormat(langTag);

    const rawNumber = document.createElement('span');
    rawNumber.className += 'rawnumber';
    input.after(rawNumber);
  }

  input.onchange = function() {
    if (input.value) {
      input.classList.add('is-filled');
      if (inputType) {
        typeBehaviors(input, inputType);
      }
    } else {
      input.classList.remove('is-filled');
    }
  };

  input.onfocus = function() {
    input.classList.remove('is-touched');
    // In there were server-side errors, the 'is-invalid' class will be present
    // but should be removed on focus because the user is trying to fix them.
    input.classList.remove('is-invalid');

    if (input.errors) {
      input.errors.remove();
    }
  };

  input.onblur = function(e) {
    if (!e.isTrusted) {
      // This blur event was triggered by a script, not a human, so don't mark
      // the input as is-touched (because it actually wasn't) or show errors.

      // Note that Mozilla claims that isTrusted shouldn't work in IE, but
      // based on testing, it does.
      // https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted
      return;
    }

    input.showErrors();
  };

  // A custom event listener that allows other scripts to manually show errors.
  input.addEventListener(
    'showerrors',
    function() {
      input.showErrors();
    },
    false,
  );

  // Callback function to display validation errors for a given input.
  input.showErrors = function() {
    input.classList.add('is-touched');

    // Clear existing errors.
    if (input.errors) {
      input.errors.remove();
    }

    if (input.validationMessage) {
      let error = document.createElement('div');
      let messageText = document.createTextNode(input.validationMessage);
      error.classList.add('c-bolt-input-message');
      error.classList.add('c-bolt-input-message--invalid');
      error.appendChild(messageText);

      input.errors = input.insertAdjacentElement('afterend', error);
    }
  };
}

const customInputWrappers = document.querySelectorAll('.c-bolt-custom-input');

for (let i = 0, len = customInputWrappers.length; i < len; i++) {
  const wrapper = customInputWrappers[i];
  const input = wrapper.querySelector('.c-bolt-input');

  input.onfocus = function() {
    wrapper.classList.add('is-active');
  };

  input.onblur = function() {
    wrapper.classList.remove('is-active');
  };
}
