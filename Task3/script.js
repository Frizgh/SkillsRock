const container = document.querySelector('#user_container')
const loader = container.querySelector('#loader')

function showLoader(state) {
  if (state) {
    loader.style.display = 'block'
  } else {
    loader.style.display = 'none'
  }
}

async function fetchRandomUsers() {
  try {
    showLoader(true)
    const response = await fetch('https://randomuser.me/api/?results=10')
    response.json().then((data) => {
      data.results.forEach((user) => {
        container.innerHTML += `
        <div class="user_card">
            <h2 id="user_name">${user.name.first} ${user.name.last}</h2>
            <img id="user_image" src="${user.picture.large}" alt="User Image" />
            <p id="user_email">${user.email}</p>
        </div>
        `
      })
    })
    showLoader(false)
  } catch (e) {
    container.innerHTML = `${e.message}`
  }
}

fetchRandomUsers()
