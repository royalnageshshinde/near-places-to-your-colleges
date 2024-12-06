// function openDive() {
//     var map = document.getElementById('map')
//     map.classList.add('hide')

//     return false
// }
var optionDiveagar = document.querySelector('option[value="qwerty"]:nth-of-type(2)'); // Select the Diveagar option
optionDiveagar.addEventListener('click', function() {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d121327.29627935373!2d73.0843864324972!3d18.141881017068698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3be82dd4c7d7b633%3A0x4ccf74c14fd84134!2sLonere%2C%20Maharashtra%20402104!3m2!1d18.1577411!2d73.32075999999999!4m5!1s0x3be84b0711036fcd%3A0x6668ccc826855e89!2sShrivardhan%20Beach%20Resort%2C%20Shrivardhan%20Beach%20Road%2C%20Bhairavnath%20Pakhadi%2C%20Shrivardhan%2C%20Maharashtra!3m2!1d18.047913899999998!2d73.0128289!5e0!3m2!1sen!2sin!4v1687289486447!5m2!1sen!2sin';
    iframe.width = '600';
    iframe.height = '450';
    iframe.style.border = '0';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    document.body.appendChild(iframe);
});