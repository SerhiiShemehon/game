const start = document.getElementById('btn-start');
const stop = document.getElementById('btn-stop');
const figure = document.querySelectorAll('.figure');

const showHideField = (val) => {
  figure.forEach((elem)=> {
    val === 'show'
      ? elem.classList.add('show')
      : elem.classList.remove('show')
  })
}

start.addEventListener('click', () => showHideField('show'));
stop.addEventListener('click', () => showHideField('hide'));