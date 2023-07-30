

// ::::::::::::::::::::Workshop tabs::::::::::::::::::/

const tabs = document.querySelector(".workshop--list")
const tabButton = document.querySelectorAll(".tab_button")
const contents = document.querySelectorAll(".tab_content")

tabs.onclick = e => {
  const id = e.target.dataset.id
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active")
    });
    e.target.classList.add("active")

    contents.forEach(content => {
      content.classList.remove("active")
    });
    const element = document.getElementById(id)
    element.classList.add("active")
  }
}

// :::::::::::::::End of wokshop tabs::::::::::::::::::::://
