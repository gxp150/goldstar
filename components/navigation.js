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
    mobileNavigationMarkup = {
        template: `
        <div class="mobile-navigation-wrapper">
            <a class="hamburger fas fa-bars" id="hamburger" v-on:click="toggleNav"></a>
        
            <nav class="mobile-menu" v-if="isOpen">
                <div>
                    <button class="hamburger" id ="hamburger">
                    <i class="fas fa-bars"></i>
                    </button>
                </div>

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