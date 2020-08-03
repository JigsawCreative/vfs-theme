<?php

/** Template name: Front Page */ ?>
<?php get_header(); ?>
<main class="main__front-page main">
    <section class="welcome-slider">
        <div class="welcome-slider-container">
            <?php 
            $images = get_field('welcome_slider');
            if( $images ): ?>
                <div id="slider" class="flexslider">
        <ul class="slides">
            <?php foreach( $images as $image ): ?>
                <li style="background-image: url(<?=$image['url']; ?>) center/cover">
                    <img src="<?=$image['url']; ?>" alt="">
                    <p><?php echo esc_html($image['caption']); ?></p>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
                
            <?php endif; ?>
        </div>
    </section>
    <section class="welcome-text">
        <div class="welcome-container">
            <?php the_field( 'welcome_text' ); ?>
        </div>
    </section>
    
    <section class="services">

    <div class="services-container">

        <h3>Services</h3>

        <?php if( have_rows('services') ): ?>

            <ul class="services-slides">

            <?php while( have_rows('services') ): the_row(); 

                $icon = get_sub_field('icon');

                ?>

                <li class="slide">

                        <img src="<?php echo $icon['url']; ?>" alt="<?php echo $icon['alt'] ?>" />

                        <h3 class="service-title"><?php the_sub_field( 'title' ); ?></h3>

                        <div class="service-body"><?php the_sub_field( 'body' ); ?></div>

                    <a href="<?php the_sub_field( 'button' ); ?>" class="more-info">Read More</a>

                </li>

            <?php endwhile; ?>

            </ul>

        <?php endif; ?>

    </div>

</section>

    <section class="contact-numbers">
        <div class="contact-numbers-container">
            <?php the_field( 'contact_numbers' ); ?>
        </div>
    </section>
    <section class="testimonials">
        <div class="testimonials-container flexslider">
        <?php if( have_rows('testimonials') ): ?>

            <ul class="slides">

                <?php while( have_rows('testimonials') ): the_row(); ?>

                    <li class="slide">
                        <div class="slide-container">
                            <img src="/wp-content/uploads/2020/05/Speech-bubble.png" />
                            <div class="testimonial-content">
                                <div class="testimonial-body"><?php the_sub_field( 'testimonial_body' ); ?></div>
                                <div class="testimonial-name"><?php the_sub_field( 'customer_name_and_area' ); ?></div>
                            </div>
                        </div>
                    </li>

                <?php endwhile; ?>

            </ul>

            <?php endif; ?>
        </div>
    </section>
</main>


<?php get_footer(); ?>