const placeCardTemplate = document.querySelector("[data-place-template]")
const placeCardContainer = document.querySelector("[data-place-cards-container]")
const searchInput = document.querySelector("[data-search]")

let places = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  places.forEach(place => {
    const isVisible =
      place.nombre.toLowerCase().includes(value) ||
      place.etiquetas.toLowerCase().includes(value)
    place.element.classList.toggle("hide", !isVisible)
  })
})

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    places = data.map(place => {
      const card = placeCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = place.nombre
      body.textContent = place.etiquetas
      placeCardContainer.append(card)
      return { nombre: place.nombre, etiquetas: place.etiquetas, element: card }
    })
  })

