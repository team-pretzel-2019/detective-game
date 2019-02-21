function updateStatusBar(user) {
    const daysLeft = document.getElementById('days-left');
    daysLeft.textContent = 'Days Left: ' + user.daysLeft;
}

export default updateStatusBar;