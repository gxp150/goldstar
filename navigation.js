const navigation = (function () {
    var navigationMarkup = {
        template : 
        `
        <div class="container">
            <div class="nav-wrapper">
                <div class="left-side">
                    <div class="brand">
                        <a href="index.html">
                            <img src="images/gs_logo.png" alt="Goldstar Services"/>
                        </a>    
                    </div>
                </div>

                <div class="right-side">
                    <div>
                        <button class="hamburger" id ="hamburger">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                        <div class="nav-link-wrapper active-nav-link">                    
                    
                                <a href="index.html">HOME</a>
                            </div>
                            <div class="nav-link-wrapper">
                                <a href="airconditioning.html">AIR CONDITIONING</a>
                            </div>
                            <div class="nav-link-wrapper">
                                <a href="refrigeration.html">REFRIGERATION</a>
                            </div>
                            <div class="nav-link-wrapper">
                                <a href="contact.html">CONTACT US</a>
                        
                            </div>
                    </div>
                </div>
            </div>

            
    `
    },
    mobileNavigationMarkup = {
        template: `
        <div class="mobile-navigation-wrapper">
            <a class="hamburger fas fa-bars" id="hamburger" v-on:click="toggleNav"></a>
        
            <nav class="mobile-menu" v-if="isOpen">
                <div class="nav-link-wrapper active-nav-link">                    
                    <a href="index.html">HOME</a>
                </div>
                <div class="nav-link-wrapper">
                    <a href="airconditioning.html">AIR CONDITIONING</a>
                </div>
                <div class="nav-link-wrapper">
                    <a href="refrigeration.html">REFRIGERATION</a>
                </div>
                <div class="nav-link-wrapper">
                    <a href="contact.html">CONTACT US</a>
                </div>
            </nav>
        </div>
        `,
        data : function(){
            return{
                isOpen : false

            }

        },
        methods : {
            toggleNav ({target}) {
                this.isOpen = !this.isOpen;

                if(this.isOpen) {
                    target.classList.remove("fa-bars");
                    target.classList.add("fa-times");

                    return;
                }
                target.classList.remove("fa-times");
                target.classList.add("fa-bars");
            }

        }
    }

    return {navigationMarkup, mobileNavigationMarkup};
})();