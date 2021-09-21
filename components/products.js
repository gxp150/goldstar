// self executing function
var products = (function () {

    var items = [
        // Creating an array to display products this was touched on from Week 1 onwards
        {
            id : 1,
            title : "Rinnai J-Series 5.0kW Reverse Cycle Split System Air Conditioner",
            image : "hsnrjxxb-rinnai-j-series-reverse-cycle-split-system-air-conditioner_1.jpg",
            price : 1299
        },
        {
            id : 2,
            title : "Goldair 2.0kW Cooling Only Portable Air Conditioner",
            image : "gcpac200-goldair-7000btu-cooling-only-portable-air-conditioner.jpg",
            price : 368
        },
        {
            id : 3,
            title : "Samsung AR9500 Wind-Free Geo 2.5kW Reverse Cycle Split System Air Conditioner",
            image : "samsung-ar9500-wind-free-geo-reverse-cycle-split-system-air-conditioner_3.jpg",
            price : 999
        },
        {
            id : 4,
            title : "Dimplex 4.0kW Multi Directional Portable Air Conditioner with Dehumidifier",
            image : "dcp14multi-dimplex-multi-directional-portable-air-conditioner.jpg",
            price : 789
        },
        {
            id : 5,
            title : "Polo PC47C 4.7kW Cooling Only Portable Air Conditioner",
            image : "pc47c-polo-cooling-only-portable-air-conditioner.jpg",
            price : 999
        },
        {
            id : 6,
            title : "Fujitsu 2.5kW Lifestyle Range KMTC Reverse Cycle Split System Air Conditioner",
            image : "astg09kmtc_astg12kmtc_front_open.jpg",
            price : 654
        },
        {
            id : 7,
            title : "Teco 2.9kW Cooling Only Portable Air Conditioner",
            image : "tpo29cfat-teco-cooling-only-portable-air-conditioner.jpg",
            price : 2333
        },
        {
            id : 8,
            title : "Samsung AR9500 Wind-Free Geo 7.0kW Reverse Cycle Split System Air Conditioner",
            image : "samsung-ar9500-wind-free-geo-reverse-cycle-split-system-air-conditioner.jpg",
            price : 1899
        },
        {
            id : 9,
            title : "Mitsubishi 1.7kW Reverse Cycle Split System Air Conditioner",
            image : "mitsubishi_1_7kW.png",
            price : 679
        },
        
        {
            id : 10,
            title : "Mitsubishi 3.2kW Inverter Split System Air Conditioner",
            image : "mitsubishi_3_2kW.jpeg",
            price : 546
        },
        {
            id : 11,
            title : "Mitsubishi 5.0kw Inverter Split System Air Conditioner",
            image : "mitsubishi_5_0kW.jpeg",
            price : 727
        },
        {
            id : 12,
            title : "Mitsubishi 7.1kW Inverter Split System Air Conditioner",
            image : "mitsubishi_7_1kW.jpeg",
            price : 777
        },
        {
            id : 13,
            title : "Mitsubishi 8kW Inverter Split System Air Conditioner",
            image : "mitsubishi_8kW.jpeg",
            price : 890
        },
        {
            id : 14,
            title : "Mitsubishi 9kW Inverter Split System Air Conditioner",
            image : "mitsubishi_9kW.jpeg",
            price : 980
        },
        {
            id : 15,
            title : "Fujitsu 7.1kW Reverse Cycle Inverter Split System",
            image : "fujitsu_71kw.jpeg",
            price : 1890
        },
        {
            id : 16,
            title : "Fujitsu 5kW Reverse Cycle Inverter Split System",
            image : "fujitsu_5kW.jpeg",
            price : 1395
        },
        {
            id : 17,
            title : "Dimplex 5kW Reverse Cycle Air Conditioner",
            image : "dimplex_5kW.png",
            price : 1590
        },
        {
            id : 18,
            title : "Hisense 5kW Reverse Cycle Air Conditioner",
            image : "hisense_5kW.jpeg",
            price : 1399
        },
        {
            id : 19,
            title : "Dimplex 3.5kW Inverter Split System Air Conditioner",
            image : "Dimplex_35kW.jpeg",
            price : 1100
        },
        {
            id : 20,
            title : "Samsung 5kW Reverse Cycle Split System Air Conditioner",
            image : "samsung_5kW.jpeg",
            price : 1590
        },
        {
            id : 21,
            title : "Samsung 3.5kW Reverse Cycle Split System Air Conditioner",
            image : "samsung_35kW.jpeg",
            price : 1100
        },
        {
            id : 22,
            title : "Kelvinator 7.1kW Reverse Cycle Inverter Split System",
            image : "kelvinator_71kW.jpeg",
            price : 1405
        },
        {
            id : 23,
            title : "Kelvinator 3.5kW Inverter Air Conditioner",
            image : "kelvinator_35kW.jpeg",
            price : 950
        },
        {
            id : 24,
            title : "Kelvinator 5kW Inverter Air Conditioner",
            image : "Kelvinator_5kW.jpeg",
            price : 1199
        },
        {
            id : 25,
            title : "Kelvinator 2.5kW Inverter Air Conditioner",
            image : "kelvinator_25kW.jpeg",
            price : 1199
        },
        {
            id : 26,
            title : "Apac 3.5kW Reverse Cycle Inverter Split System",
            image : "APAC_HSNAP35_35kW.jpeg",
            price : 780
        },
        {
            id : 27,
            title : "Apac 7kW Reverse Cycle Inverter Split System",
            image : "APAC_HSNAP70_7kW.jpeg",
            price : 1299
        },
        {
            id : 28,
            title : "Hisense 3.5kW Reverse Cycle Air Conditioner",
            image : "hisense_35kW.jpeg",
            price : 999
        },
        {
            id : 29,
            title : "Hisense 5kW Reverse Cycle Air Conditioner",
            image : "hisense_5kW.jpeg",
            price : 1400
        },
        {
            id : 30,
            title : "Hisense 7.1kW Reverse Cycle Air Conditioner",
            image : "hisense_71kW.jpeg",
            price : 1699
        },
    ];
// Creating a function to randomly assign dimensions to each product
// To use for the estimator feature
    function dimensions (items) {
        // for loop iterating through the list of products returning it to products
        for (let i = 0; i < items.length; i++) {
            var rand = Math.ceil(Math.random(1) * 10);

            items[i]["dimensions"] = rand;
        }
    }

    dimensions(items);

    return items;
})();