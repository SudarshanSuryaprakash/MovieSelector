const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
let count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;
const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
};

const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
  const seatsIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
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
  setMovieData(e.target.selectedIndex, e.target.value);
});
