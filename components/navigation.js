const navigation = (function () {
    // desktop navigation
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
                        <div class="nav-link-wrapper">                       
                                <router-link class="nav-link" to="/">HOME</router-link>
                            </div>
                            <div class="nav-link-wrapper">
                                
                                <router-link class="nav-link" to="/airconditioning">AIR CONDITIONING</router-link>
                            </div>
                            <div class="nav-link-wrapper">
                                
                                <router-link class="nav-link" to="/refrigeration">REFRIGERERATION</router-link>
                            </div>
                            <div class="nav-link-wrapper">
                                
                                <router-link class="nav-link" to="/contact">CONTACT US</router-link>
                        
                            </div>
                    </div>
                </div>
            </div>

            
    `
    },
    // mobile navigation menu
    mobileNavigationMarkup = {
        template: `
        <div>
            <div class="mobile-navigation-wrapper">
                <a class="hamburger fas fa-bars" id="hamburger" v-on:click="toggleNav"></a>
            </div>

            <div class="navigation-menu-wrapper" v-if="isOpen">
                <nav class="mobile-menu">
                    <div class="nav-link-wrapper">                       
                        <router-link to="/">HOME</router-link>
                    </div>

                    <div class="nav-link-wrapper">
                        <router-link to="/airconditioning">AIR CONDITIONING</router-link>
                    </div>

                    <div class="nav-link-wrapper">
                        <router-link to="/refrigeration">REFRIGERERATION</router-link>
                    </div>

                    <div class="nav-link-wrapper">
                        <router-link to="/contact">CONTACT US</router-link>
                    </div>
                </nav>
            </div>
        </div>
        `,
        data : function(){
            return{
                isOpen : false
            }

        },
        watch : {
            $route () {
                var menuToggle = document.querySelector(".hamburger");

                this.isOpen = false;

                menuToggle.classList.remove("fa-times");
                menuToggle.classList.add("fa-bars");
                menuToggle.removeAttribute("style");
            }
        },
        methods : {
            // opens and closes the mobile navigation menu
            toggleNav ({target}) {
                // set isOpen to opposite of current value
                this.isOpen = !this.isOpen;

                // if isOpen = true (guardian clause)
                if(this.isOpen) {
                    target.classList.remove("fa-bars");
                    target.classList.add("fa-times");

                    target.style.cssText = `
                        color: #000;
                    `;

                    return;
                }

                // if isOpen = false
                target.classList.remove("fa-times");
                target.classList.add("fa-bars");
                target.removeAttribute("style");
            }

        }
    }

    return {navigationMarkup, mobileNavigationMarkup};
})();