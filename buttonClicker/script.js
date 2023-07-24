//######## Single Event Method

// const log = document.getElementById('log');

// log.addEventListener("click", function handleClick() {
//     console(log.innerHTML = 'Logout')
// })


// ######## Reusable Click method
const log = document.getElementById('log');

log.addEventListener("click", function handleClick() {
const initialText = 'Login';
if (log.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    log.textContent = 'Logout';
  } else {
    log.textContent = initialText;
  }
});


// ################ dissappearing button

const byebye = document.getElementById('byebye');

byebye.addEventListener('click', () => {
  byebye.remove();
});

