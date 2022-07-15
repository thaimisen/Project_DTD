import $ from 'jquery';
function Slider(){
    return(
        
        $(document).ready(function () {
            $('.product-best-sale-slider').slick({
                slidesToShow: 4,
                autoplay: true,
                autoplaySpeed: 1000,
                ifinite: true,
                dots: true,
                prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
                nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
            });
        })
        
    );
}
export default Slider;