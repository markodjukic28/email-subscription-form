const scriptURL =
  'https://script.google.com/macros/s/AKfycbymRF29VL3Gzs3S8RHtPFg2szwUoEK9fJ1LA1U-emi03yEE6ajL350oMB5XXD2Hu3jCLA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = 'Thank You For Subscribing!';
      setTimeout(() => {
        msg.innerHTML = '';
      }, 5000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});
