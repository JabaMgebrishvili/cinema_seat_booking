
let seats = document.getElementsByClassName('seat');
    let selectedSeats = [];

    function toggleSeatSelection(seatIndex) {
      seats[seatIndex].classList.toggle('selected');
    }

    function bookSeats() {
      selectedSeats = Array.from(document.getElementsByClassName('selected'));

      if (selectedSeats.length === 0) {
        showNotification('error', 'Please select at least one seat.');
      } else {
        let seatNumbers = selectedSeats.map(function(seat) {
          return Array.from(seats).indexOf(seat) + 1;
        });

        let totalCost = selectedSeats.length * 10;

        showNotification('success', 'Congratulations! Seats ' + seatNumbers.join(', ') + ' have been reserved. Total cost: $' + totalCost + '.');
      }
    }

    function showNotification(type, message) {
      let notification = document.getElementById('notification');
      notification.textContent = message;

      if (type === 'error') {
        notification.classList.add('error');
        notification.classList.remove('success');
      } else if (type === 'success') {
        notification.classList.add('success');
        notification.classList.remove('error');
      }

      setTimeout(function() {
        notification.textContent = '';
        notification.classList.remove('success', 'error');
      }, 7000);
    }