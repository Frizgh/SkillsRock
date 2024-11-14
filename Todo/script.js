let btn = document.querySelector('#add_todo')
let input_text = document.querySelector('input[type="text"]')
let container = document.querySelector('#todo_list')
let complete = document.querySelector('#complete')
let inProgress = document.querySelector('#inProgress')
function add_todo() {
  let taskElement = document.createElement('p')
  let text = input_text.value
  if (text === '') {
    return
  }
  taskElement.className = 'task'
  taskElement.innerHTML = `
        <strong>${text}</strong>
        <span>
            <input type="checkbox" class="complete_tasks">
            <button class="delete_btn">X</button>
        </span>
        `

  let checkbox = taskElement.querySelector('.complete_tasks')
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      taskElement.style.backgroundColor = ' #999'
      taskElement.classList.add('completed')
    } else {
      taskElement.style.backgroundColor = ''
      taskElement.classList.remove('completed')
    }
  })

  container.appendChild(taskElement)
  input_text.value = ''

  let delete_btn = taskElement.querySelector('.delete_btn')
  delete_btn.addEventListener('click', () => {
    container.removeChild(taskElement)
  })
}

btn.addEventListener('click', add_todo)
