// self executing function expression keeps code out of the global scope
var airCon = (function () {
    var airConMarkup = {
        template : `
        <div class="one-column-wrapper">
            <header class="contact-image-wrapper">
                <div class="search-wrapper">
                <input
                    type="text"
                    class="input"
                    v-model="search"
                    placeholder="Search for a product..."/>
                </div>
                <img src="images/black_banner.png" alt="geometric black and yellow image"/>
            </header>

            <div class="content-wrapper">
                <h1>Air Conditioning Systems</h1>
                <p>
                "Use our search to find the system you need" Try our online estimator,
                enter your measurements and we will show you products to suit your
                needs
                </p>
                <section class="product-wrapper">
                <!-- Create Transition for products -->
                    <transition-group
                        name="staggered-fade"
                        v-bind:css="false"
                        v-on:before-enter="beforeEnter"
                        v-on:enter="enter"
                        v-on:leave="leave"    
                    >
                        <article class="product-item" v-for="(item, index) in computedList" v-bind:key="item.id">

                        <div class="product-item-thumb" :style="{ backgroundImage : 'url(products/' + item.image + ')' }">
                        </div>

                        <p class="product-item-price">
                        {{ "$" + item.price }}
                        </p>

                        <p class="product-item-title">
                        {{ item.title }}
                        </p>


                        </article>
                    </transition-group>
                </section>
            </div>
        </div>
        
        `,
        // creating a function for the product search
        data : function () {
            return {
                list : products,
                search : ""
            }
        },
        computed : {
            computedList : function() {
                var vm = this;

                return this.list.filter((item) => {
                    var reg = new RegExp(`${this.escape(vm.search)}`, "igm");

                    return item.title.match(reg);
                });
            }
        },
        methods : {
            // preventing reg exp errors
            escape (text) {
                text = text.replace(/(\.)/, "\\$1");
                text = text.replace(/(\^)/, "\\$1");
                text = text.replace(/(\[])/, "\\$1");
                text = text.replace(/(\])/, "\\$1");
                text = text.replace(/(\()/, "\\$1");
                text = text.replace(/(\))/, "\\$1");
                text = text.replace(/(\*)/, "\\$1");
                text = text.replace(/(\?)/, "\\$1");
                text = text.replace(/(\/)/, "\\$1");
                text = text.replace(/(\\)/, "\\$1");

                return text;
            },

            beforeEnter : function (e) {
                e.style.cssText = `
                    opacity: 0;
                    `;
            },
            // creating error checks    
            enter : function (e) {
                setTimeout(() => {
                    e.style.cssText = `
                        opacity: 1;
                    `;
                }, 500);
            },

            leave : function (e) {
                setTimeout(() => {
                    // inline css reference, position absolute so products reshuffle
                    e.style.cssText = `
                    opacity: 0;
                    position: absolute;
                    `;
                // 500 milisecond time out
                }, 500);    
            }
        }
    };

    return {airConMarkup};
})();