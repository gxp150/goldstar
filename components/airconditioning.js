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
                    v-on:keyup="searchProducts"
                    placeholder="Search for a product..."
                />
                <a class="searchbtn fas fa-search"></a>
                </div>
                <img
                src="images/black_banner.png"
                alt="geometric black and yellow image"
                />
            </header>

            <div class="content-wrapper">
                <h1>Air Conditioning Systems</h1>
                <p>
                "Use our search to find the system you need" Try our online estimator,
                enter your measurements and we will show you products to suit your
                needs
                </p>
                <section class="product-wrapper">
                    <article class="product-item" v-for="product in products">
                    <div class="product-item-thumb" :style="{ backgroundImage : 'url(products/' + product.image + ')' }">
                    </div>

                    <p class="product-item-price">
                    {{ "$" + product.price }}
                    </p>

                    <p class="product-item-title">
                    {{ product.title }}
                    </p>


                    </article>
                </section>
            </div>
        </div>
        `,
        data : function () {
            return {
                products : products
            }
        },
        methods : {
            searchProducts ({target}) {
                this.products = products.filter((product) => {
                    var reg = new RegExp(`${this.escape(target.value)}`, "igm");

                    // alter the array
                    if (product.title.match(reg)) return product;
                });
            },
            // reducing errors
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
            }
        }
    };
// Call the function
    return {airConMarkup};
})();