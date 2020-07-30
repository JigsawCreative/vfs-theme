<?php /* template name: About */ ?>
<?php get_header(); ?>
    <?php $about_image = get_field( 'about_image' ); ?>
   <main class="main__about main">
        <section class="about">
            <div class="about-container">
                <div class="about-text">
                    <div class="about-title">
                        <?php the_field( 'about_title' ); ?>
                    </div>    
                    <div class="about-left-text">
                        <?php the_field( 'about_left_text' ); ?>
                    </div>
               </div>
                <div class="about-image"><img src="<?=$about_image['url']; ?>" alt="<?=$about_image['alt']; ?>"></div>
            </div>
            <div class="main-about-text"><?php the_field( 'main_about_text' ); ?></div>
        </section>
        <section class="experience-counters">
        
            <?php if(get_field('experience_counters')): ?>
                <?php while(has_sub_field('experience_counters')): ?>
                    <div class="counter">
                        <img src="<? the_sub_field( 'counter_icon' );?>">
                        <div class="timer-container">
                            <span class="number"><?php the_sub_field( 'counter_number' ); ?></span>
                            <?php the_sub_field( 'counter_title' ); ?>
                        </div>
                        <h5><?php the_sub_field( 'counter_industry' ); ?></h5>
                    </div>
                <?php endwhile; ?>

            <?php endif; ?>
        </section>
        <section class="choose-sky-copy-co">
            <div class="choose-text">
                <div class="choose-title">
                    <?php the_field( 'choose_title' ); ?>
                </div>
                <?php the_field( 'choose_sk_copy_co' ); ?>
            </div>
        </section>
        <section class="about-testimonials">
        <?php 
        echo do_shortcode( "[show-testimonials orderby='menu_order' order='ASC' limit='6' layout='slider' options='transition:fade,controls:pager,pause:4000,auto:on,columns:1,theme:none,info-position:info-below,text-alignment:left,charlimitextra: (...),image-size:ttshowcase_small,image-shape:circle,image-effect:none,image-link:on']" ); 
        ?>
        </section>
   </main>
   <script src="//cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js"></script>
   <script>
        const $ = jQuery;
            jQuery(document).ready(function($) {
            $(".number").counterUp({
                delay: 10,
                time: 1000,
            });
        });
   </script>
<?php get_footer(); ?>