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
}

// Location selection
document.querySelectorAll('.location-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.location-option').forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');
    });
});

// Form submission
document.getElementById('lockerBookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const selectedTime = document.querySelector('.time-slot.selected');
    const selectedLocation = document.querySelector('.location-option.selected');
    
    if (!selectedTime) {
        alert('Please select a storage time');
        return;
    }
    
    if (!selectedLocation) {
        alert('Please select a locker location');
        return;
    }

    alert('Booking confirmed! **CONFIRMED BOOKING PAGE TO BE IMPLEMENTED**');
});

// Initialize time slots
generateTimeSlots();