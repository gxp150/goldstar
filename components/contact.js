// self executing function 
var contact = (function(){
    var contactMarkup = {
        template : `
            <div class="content-wrapper">
            <div class="two-column-wrapper">
            <div class="profile-image-wrapper">
                <img src="images/building_mono.jpg" alt="External Building Image" />
            </div>
            <div class="content-wrapper">
                <h1>Contact us for a Quotation today</h1>
                <p>
                "Our team will go to any height to find the ideal refigeration and
                air conditioning systems to not only meet but exceed your
                expectations!"
                </p>
                <p>"Visit our estimator for a price guide"</p>
                <p>
                "Already know what you need, fill in our quotation form and one of
                our sales specialists will commence your order today"
                </p>
                
            </div>
            </div>
        </div>
      `
    };
    // Call it
    return {contactMarkup};


})();