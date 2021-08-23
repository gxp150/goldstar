const home = (function () {
    var homeMarkup = {
        template : `
        <div class="content-wrapper">
  <div class="project-group-wrapper">
    <div class="project-individual-wrapper">
      <div
        class="project-img-background"
        style="background-image: url(images/aircon_1_bw.jpg)"
      ></div>

      <div class="img-text-wrapper">
        <div class="subtitle">
          About this project. <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </div>
      </div>
    </div>

    <div class="project-individual-wrapper">
      <div
        class="project-img-background"
        style="background-image: url(images/aircond_2_bw.jpg)"
      ></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/devcamp.png" alt="" />
        </div>

        <div class="subtitle">
          About this project. <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </div>
      </div>
    </div>

    <div class="project-individual-wrapper">
      <div
        class="project-img-background"
        style="background-image: url(images/aircond_3_bw.jpg)"
      ></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/eventbrite.png" alt="" />
        </div>

        <div class="subtitle">
          About this project. <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </div>
      </div>
    </div>

    <div class="project-individual-wrapper">
      <div
        class="project-img-background"
        style="background-image: url(images/aircond_4_bw.jpg)"
      ></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/shop-hacker.png" alt="" />
        </div>

        <div class="subtitle">
          About this project. <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </div>
      </div>
    </div>

    <div class="project-individual-wrapper">
      <div
        class="project-img-background"
        style="background-image: url(images/aircond_5_bw.jpg)"
      ></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/crondose.png" alt="" />
        </div>

        <div class="subtitle">
          About this project. <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </div>
      </div>
    </div>

    <div class="project-individual-wrapper">
      <div
        class="project-img-background"
        style="background-image: url(images/aircond_6_bw.jpg)"
      ></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/dailysmarty.png" alt="" />
        </div>

        <div class="subtitle">
          About this project. <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </div>
      </div>
    </div>

    <div class="project-individual-wrapper">
      <div
        class="project-img-background"
        style="background-image: url(images/refrig_1_bw.jpg)"
      ></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/dashtrack.png" alt="" />
        </div>

        <div class="subtitle">
          About this project. <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </div>
      </div>
    </div>

    <div class="project-individual-wrapper">
      <div
        class="project-img-background"
        style="background-image: url(images/refrig_2_bw.jpg)"
      ></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/devtrunk.png" alt="" />
        </div>

        <div class="subtitle">
          About this project. <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </div>
      </div>
    </div>

    <div class="project-individual-wrapper">
      <div
        class="project-img-background"
        style="background-image: url(images/refrig_3_bw.jpg)"
      ></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/edutechional.png" alt="" />
        </div>

        <div class="subtitle">
          About this project. <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </div>
      </div>
    </div>

    <div class="project-individual-wrapper">
      <div
        class="project-img-background"
        style="background-image: url(images/refrig_4_bw.jpg)"
      ></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/ministry-safe.png" alt="" />
        </div>

        <div class="subtitle">
          About this project. <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </div>
      </div>
    </div>

    <div class="project-individual-wrapper">
      <div
        class="project-img-background"
        style="background-image: url(images/refrig_5_bw.jpg)"
      ></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/open-devos.png" alt="" />
        </div>

        <div class="subtitle">
          About this project. <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </div>
      </div>
    </div>

    <div class="project-individual-wrapper">
      <div
        class="project-img-background"
        style="background-image: url(images/refrig_6_bw.jpg)"
      ></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/toastability.png" alt="" />
        </div>

        <div class="subtitle">
          About this project. <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </div>
      </div>
    </div>
  </div>
</div>

        `
    };

    return {homeMarkup};
})();