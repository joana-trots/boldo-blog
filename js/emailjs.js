
(function(){
    emailjs.init("uEvqLwIMS_CzlJXGA");
})();
window.onload = function() {
    document.getElementById('cta-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_aot765o', 'template_udrsbps', this)
            .then(function() {
                alert('We will contact you shortly');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
