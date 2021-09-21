// Use Week 8 prac to modify and create a clean contact form
// self executing function 
var contact = (function(){
  var contactMarkup = {
    template : `
		<div class="one-column-wrapper contact-page">
			<header class="contact-image-wrapper">
				<img src="images/black_banner3.png" alt="geometric mono refrigeration system image"/>
			</header>
		
			<section class="contact-group-wrapper">
				<div class="contact-group">
					<section class="contact-info-wrapper content-wrapper">
						<h1>How to contact Goldstar Services</h1>
						<p>
							Our team will go to any height to find the ideal refigeration and
							air conditioning systems to not only meet but exceed your
							expectations!
						</p>
						<p>
						Already know the system you need and want a formal quotation and time estimate? Fill in our quotation form and one of
						our sales specialists will commence your order today
						</p>
						
						<h2>General enquiries are welcome</h2>
						<p>We can help with your custom Air Conditioning System requirements</p>
						<p>We have qualified service technicians capable of installing and servicing your Commercial Refrigeration Systems</p>

						<h2>Find us in Wollongong somewhere...</h2>
						<p>We have no shop which equals, less overheads and lower costs for our customers.</p>
						<p>We provide quality service Sydney, Greater Western Sydney and the Illawarra</p>

						<div class=container>
							<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13163.439014644757!2d150.89583135!3d-34.43031735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1631581246790!5m2!1sen!2sau" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
						</div>
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
							Email:
							</label>

							<input type="text" required="required" placeholder="Valid email address" name="email">

							<label>
							Phone Number:
							</label>

							<input type="text" required="required" placeholder="Mobile or Landline" name="phone-number">

							<label>
							Local Area:
							</label>
              <!-- Form Options populated by Vue -->
							<select name="local-area">
							<option v-for="option in options" v-bind:value="option.value">
								{{ option.text }}
							</option>
							</select>

							<label>
							Subject:
							</label>

							<input type="text" required="required" name="subject">

							<label>
							Message:
							</label>

							<textarea name="message" required="required" placeholder="Please include as much detail as possible for size, specifications, property type..."></textarea>

							<br>

							<button class="searchbtn" type="submit" name="submit" mailto="gxp150@gmail.com">Submit</button>
						</form>
							
						<h2>Contact our friendly sales team direct</h2>
						<p>Call 0401 215 592</p>
						<p>Email info@goldstar.com</p>
						<p>Our team guarantee to respond within 24 hours, thank you</p>   
					</section>
				</div> 
			</section> 
		</div>
          
    `,
  data : function () {
    return {
      options : [
        {text : "Select Local Area", value : "select"},
        {text : "Bayside", value : "bayside"},
        {text : "Blacktown", value : "blacktown"},
        {text : "Blue Mountains", value : "blue mountains"},
        {text : "Burwood", value : "burwood"},
        {text : "Camden", value : "camden"},
        {text : "Campbelltown", value : "campbelltown"},
        {text : "Canada Bay", value : "canada bay"},
        {text : "Canterbury-Bankstown", value : "canterbury-bankstown"},
        {text : "Central Coast", value : "central coast"},
        {text : "Cumberland", value : "cumberland"},
        {text : "Fairfield", value : "fairfield"},
        {text : "Georges River", value : "georges river"},
        {text : "Hawkesbury", value : "hawkesbury"},
        {text : "Hornsby", value : "hornsby"},
        {text : "Hunters Hill", value : "huntershill"},
        {text : "Inner West", value : "inner-west"},
        {text : "Ku-ring-gai", value : "ku-ring-gai"},
        {text : "Lane Cove", value : "lanecove"},
        {text : "Liverpool", value : "liverpool"},
        {text : "Mosman", value : "mosman"},
        {text : "North Sydney", value : "north-sydney"},
        {text : "Northern Beaches", value : "northern-beaches"},
        {text : "Parramatta", value : "parramatta"},
        {text : "Penrith", value : "penrith"},
        {text : "Randwick", value : "randwick"},
        {text : "Ryde", value : "ryde"},
        {text : "Shoalhaven", value : "shoalhaven"},
        {text : "Strathfield", value : "strathfield"},
        {text : "The Gong", value : "wollongong"},
        {text : "The Shire", value : "sutherland-shire"},
        {text : "The Hills Shire", value : "the-hills-shire"},
        {text : "Waverley", value : "waverley"},
        {text : "Willoughby", value : "willoughby"},
        {text : "Wollondilly", value : "wollondilly"}
      ]
    }
  }
  };
  // Call it
  return {contactMarkup};
})();