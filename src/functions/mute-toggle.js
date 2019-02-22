function muteToggle(soundtrack) {
    const speakerIcon = document.getElementById('speaker-icon');

    speakerIcon.addEventListener('click', function() {
        if(soundtrack.muted === false) {
            soundtrack.muted = true;
            speakerIcon.src = '../assets/img/icons/speaker.png';
            speakerIcon.alt = 'Un-mute button';
        } else {
            soundtrack.muted = false;
            speakerIcon.src = '../assets/img/icons/mute.png';
            speakerIcon.alt = 'Mute button';
        }
    });
}

export default muteToggle;