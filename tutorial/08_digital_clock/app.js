const clock = document.querySelector('.clock')

function getTime() {
  const now = new Date()

  const hour = now.getHours()
  const minute = now.getMinutes()
  const second = now.getSeconds()

  const s = `${second}` < 10 ? `0${second}` : `${second}`
  const h = `${hour}` < 10 ? `0${hour}` : `${hour}`
  const m = `${minute}` < 10 ? `0${minute}` : `${minute}`

  clock.textContent = `${h} : ${m} : ${s}`
}

getTime()

setInterval(function () {
  getTime()
}, 1000)
