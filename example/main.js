var all_page_gliders_instances = [];//An array to save all our gliders instances in it!

document.addEventListener("DOMContentLoaded", function(){

    console.log("Page is Ready!");


    //First Initialize all page Gliders
    var all_gliders = document.querySelectorAll(".glide")
    let new_glider = '';
    for(var i = 0; i < all_gliders.length; i++){

        new_glider = new Glide(all_gliders[i], {
            type: 'carousel',
            perView: 3,
        }).mount();

        //Add to array to keep this glider instance
        all_page_gliders_instances.push(new_glider);
    }
    /***/


    /*--------------------------------------------------------------------*/


    //Add slide to First-Glider
    var firstglider_ins = all_page_gliders_instances[0];

    firstglider_ins.destroy();//KEY

    var slide = `<div class="glide__slide new-slide">
        <small>Added!</small>
    </div>`;//HTML-Code

    var innder_glider = document.querySelector(".first-glider ul.glide__slides");
    innder_glider.innerHTML += slide;

    var reinit_glider = new Glide(".first-glider", {
        type: 'carousel',
        perView: 3,
    }).mount();

    all_page_gliders_instances[0] = reinit_glider;//Replace new instance with the old one (*Not-Necessary*)
    /***/


    /*--------------------------------------------------------------------*/


    //Add 4-slides to second-Glider
    var secondglider_ins = all_page_gliders_instances[1];

    secondglider_ins.destroy();//KEY

    var slides = {

        s1: `<div class="glide__slide new-slide">
        <small>Added!-1</small>
        </div>`,

        s2: `<div class="glide__slide new-slide">
        <small>Added!-2</small>
        </div>`,

        s3: `<div class="glide__slide new-slide">
        <small>Added!-3</small>
        </div>`,
    }

    var innder_glider = document.querySelector(".second-glider ul.glide__slides");

    //Loop on the Object (slides)
    Object.keys(slides).forEach(function (key) {
        innder_glider.innerHTML += slides[key];
    });
    

    var reinit_glider = new Glide(".second-glider", {
        type: 'carousel',
        perView: 3,
    }).mount();

    all_page_gliders_instances[1] = reinit_glider;//Replace new instance with the old one (*Not-Necessary*)
    /***/



    /*--------------------------------------------------------------------*/



    //Remve 4-slides from third-Glider
    var thirdglider_ins = all_page_gliders_instances[2];

    thirdglider_ins.destroy();//KEY

    var innder_glider = document.querySelector(".third-glider ul.glide__slides");
    var all_slides = innder_glider.querySelectorAll(".glide__slide")

    //Loop on the slides
    for(var c = 0; c < all_slides.length; c++){

        //To remove just last 4 sliders
        if(c >= 6){
            all_slides[c].remove();
        }

    }


    var reinit_glider = new Glide(".third-glider", {
        type: 'carousel',
        perView: 3,
    }).mount();

    all_page_gliders_instances[2] = reinit_glider;//Replace new instance with the old one (*Not-Necessary*)
    /***/


    //console.log(all_page_gliders_instances) //For TEST

    /**END**/
})
