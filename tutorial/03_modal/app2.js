const content = document.querySelector('.content')
const modal = document.querySelector('.modal')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    content.classList.toggle('active')
    //add, remove = toggle
    modal.classList.toggle('active')
  })
})
