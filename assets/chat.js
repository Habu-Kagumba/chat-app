let socket = null
const msgBox = document.getElementById('message')
const messages = document.getElementById('messages')
const addr = document.getElementById('port').value

document.getElementById('message-form').addEventListener('submit', e => {
  e.preventDefault()

  if (msgBox.value === '') {
    window.alert('Please Enter your message')
    return false
  }

  if (!socket) {
    window.alert('Error: There is no socket connection!')
    return false
  }

  socket.send(msgBox.value)
  msgBox.value = ''
  return false
})

if (!('WebSocket' in window)) {
  window.alert('Error: Your browser doesn\'t support web sockets. What the hell are you using?')
} else {
  socket = new WebSocket(`ws://${addr}/room`)
  socket.onclose = () => {
    window.alert('Connection has been closed')
  }
  socket.onmessage = (e) => {
    messages.innerHTML += `<li class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
        <img class="w2 h2 w3-ns h3-ns br-100" src="https://api.adorable.io/avatars/135/${Math.random().toString(36).substring(7)}" />
        <div class="pl3 flex-auto">
          <span class="f6 db black-70">${e.data}</span>
        </div>
      </li>`
  }
}
