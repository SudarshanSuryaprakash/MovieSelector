const container = document.querySelector('.container');
const seats = document.querySelector('.row .seat:not(.occupied)');
let count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

const updateSelectedCount = () => {
  const selectedSeatsCount = document.querySelectorAll('.row .seat.selected')
    .length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
};

container.addEventListener('click', (e) => {
  e.target.classList.contains('seat') &&
  !e.target.classList.contains('occupied')
    ? (e.target.classList.toggle('selected'), updateSelectedCount())
    : null;
});

movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});
