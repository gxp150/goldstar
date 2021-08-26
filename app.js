// self executing function expression keeps code out of the global scope
(function () {
    // router paths
    var routes = [
        {
            path : "/",
            component: home.homeMarkup

        },
        {
            path : "/airconditioning",
            component: airCon.airConMarkup
            
        },
        {
            path : "/refrigeration",
            component: refrigeration.refrigerationMarkup
            
        },
        {
            path : "/contact",
            component: contact.contactMarkup
            
        }
    ];

    // router library
    const router = new VueRouter({
        routes
        }),
        vm = new Vue({
            router,
                components : {
                    "navigation" : navigation.navigationMarkup,
                    "mobile-navigation" : navigation.mobileNavigationMarkup
            },
            methods : {
                activeLink (linkClass) {
                    var slugs = window.location.href.split("/"),
                        page = slugs[slugs.length -1],
                        // taking the link from the landing page
                        activeLink = document.querySelectorAll(`${linkClass}[href="/${page}"]`),
                        allLinks = document.querySelectorAll(linkClass);

                    for (let i = 0; i < allLinks.length; i++) {
                        allLinks[i].classList.remove("active-nav-link");
                    }

                    for (let i = 0; i < activeLink.length; i++) {
                        activeLink[i].classList.add("active-nav-link");
                    }
                }
            },
            // executes once the template has mounted
            mounted () {
                this.$nextTick(function () {
                    this.activeLink(".nav-link");
                });
            },
            // executes after going to a new page
            updated () {
                this.$nextTick(function () {
                    this.activeLink(".nav-link");
                });
            }
    }).$mount("#app");
})();