// Utilise Week 7 Dynamic to assist in creating an interactive UX for the estimator
var refrigeration = (function() {
    var refrigerationMarkup = {
    template : `
        <div class="one-column-wrapper">
            <header class="contact-image-wrapper">
                <img src="images/black_banner2.png" alt="geometric mono refrigeration system image"/>
            </header>
            

            <section class="contact-group-wrapper">
                <div class="contact-group">
                    <section class="contact-info-wrapper content-wrapper">
                        <h1>Refrigeration Specialists that guarantee Goldstar service</h1>
                        <h2>Emergency call outs and scheduled maintenance we have you covered</h2>
                        <p>
                        Combining over 45 years in the industry our qualified technicians are skilled in servicing both natural cooling and artificial refrigeration systems.
                        <br><br> We service: Chillers, Condensing Units, Cool Rooms, Freezers and Blast Freezers, Fridges and Refrigeration Controls <br>
                        </p>
                        <br>
                        <h2>Contact our friendly sales team direct</h2>
                        <p>Call 0401 215 592</p>
                        <p>Email info@goldstar.com</p>
                        <p>Our team guarantee to respond within 24 hours, thank you</p> 
                    </section>
                </div>
                
                <div class="contact-group">
                    <section class="contact-info-wrapper content-wrapper">
                        <h2> Send us a Query </h2>

                        <form action="" method="POST">
                            <label>
                                First Name:
                            </label>

                            <input type="text" required="required" placeholder="First Name" name="first-name">

                            <label>
                                Last Name:
                            </label>

                            <input type="text" required="required" placeholder="Last Name" name="last-name">

                            <label>
                                Company Name:
                            </label>

                            <input type="text" required="required" placeholder="Valid email address" name="email">

                            <label>
                                Email:
                            </label>

                            <input type="text" required="required" placeholder="Valid email address" name="email">

                            <label>
                                Phone Number:
                            </label>

                            <input type="text" required="required" placeholder="Mobile or Landline" name="phone-number">

                            <label>
                                Product Type:
                            </label>
                            
                            
                            <select name="local-area">
                                <option v-for="option in options" v-bind:value="option.value">
                                    {{ option.text }}
                                </option>
                            </select>

                            <label>
                                Quote Request:
                            </label>

                            <textarea name="message" required="required" placeholder="Please include as much detail as possible for size, specifications, property type..."></textarea>

                            <br>

                            <button class="searchbtn" type="submit" name="submit" mailto="gxp150@gmail.com">Submit</button>
                        </form>
                        <br>
                   
                          
                    </section>
                </div> 
            </section> 
        
        </div>`,
        data : function () {
            return {
            options : [
                    {text : "Select", value : "Select"},
                    {text : "chillers", value : "Chillers"},
                    {text : "condensing", value : "Condensing Units"},
                    {text : "cool-rooms", value : "Cool Rooms"},
                    {text : "freezers", value : "Freezers"},
                    {text : "fridges", value : "Fridges"},
                    {text : "refrigeration-controls", value : "Refrigeration Controls"}
                ]
            }
        }
    };
return {refrigerationMarkup};

})();