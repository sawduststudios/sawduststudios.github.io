# TASKS

- stop cycling carousel when shown details
- scroll bar on mozilla


 click doleva -> zapnuti filteru = fail FIXED???


disconnect buttons from bootstrap carousel and make my own implementation?


 To skip slides in a Bootstrap carousel, you can use JavaScript or jQuery to manipulate the carousel's data-slide attribute. You can use the .carousel('next') or .carousel('prev') method to move to the next or previous slide, respectively. To skip multiple slides, you can call the .carousel() method multiple times in succession.
You can also use the .carousel(number) method to move to a specific slide, where number is the index of the slide you want to move to.
For example, to move to the 3rd slide you can use:

Copy code
$('.carousel').carousel(2);
You can also use the data-slide-to attribute on each slide's li element to jump to a specific slide, like so:

Copy code
<li data-target="#myCarousel" data-slide-to="2"></li>
You can also use the .carousel('dispose') to remove all the event handlers, and .carousel(options) to re-initialize the carousel with new options