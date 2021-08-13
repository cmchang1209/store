<template>
    <div class="ct-carousel">
        <b-carousel id="carousel-1" :interval="4000" indicators background="#92D1CC" img-width="1043" img-height="490" >
            <!-- Text slides with image -->
            <b-carousel-slide caption="" text="" img-src="images/banner_1.png"></b-carousel-slide>
            <!-- Slides with custom text -->
            <b-carousel-slide img-src="images/banner_2.jpg">
            </b-carousel-slide>
            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide caption="" img-blank img-alt="Blank image">
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>
