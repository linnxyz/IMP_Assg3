function generateTimeSlots() {
    const timeSlots = document.getElementById('timeSlots');
    for (let hour = 8; hour < 24; hour++) {
        for (let minute of ['00', '30']) {
            const time = `${hour.toString().padStart(2, '0')}:${minute}`;
            const slot = document.createElement('div');
            slot.className = 'time-slot';
            slot.textContent = time;
            slot.onclick = () => selectTimeSlot(slot);
            timeSlots.appendChild(slot);
        }
    }
}

function selectTimeSlot(slot) {
    document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
    slot.classList.add('selected');
    // Store selected time slot in localStorage
    localStorage.setItem('selectedTime', slot.textContent);
}

// Location selection
document.querySelectorAll('.location-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.location-option').forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');
        // Store selected location in localStorage
        localStorage.setItem('selectedLocation', option.dataset.location);
    });
});

// Form submission
document.getElementById('lockerBookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const passport = document.getElementById('passport').value;
    const flightNumber = document.getElementById('flightNumber').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const selectedTime = localStorage.getItem('selectedTime');
    const selectedLocation = localStorage.getItem('selectedLocation');

    if (!selectedTime) {
        alert('Please select a storage time');
        return;
    }

    if (!selectedLocation) {
        alert('Please select a locker location');
        return;
    }

    // Store form data in localStorage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('passport', passport);
    localStorage.setItem('flightNumber', flightNumber);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);

    alert('Booking confirmed! **CONFIRMED BOOKING PAGE TO BE IMPLEMENTED**');
});

// Initialize time slots
generateTimeSlots();
