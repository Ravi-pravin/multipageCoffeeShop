// function handleSubmit(event) {
//   event.preventDefault();
//   alert("Thank you! Your reservation has been submitted.");
//   document.getElementById("bookingForm").reset();
// }


document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert('Your table has been booked.');
});
