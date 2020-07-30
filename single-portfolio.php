<?php get_header(); ?>
<main class="single__portfolio main">
    <section class="portfolio-content">
        <div class="portfolio-content-wrapper">
            <div class="portfolio-text"> 
                    <!-- Start the loop. -->
                    <?php while ( have_posts() ) : the_post(); ?>
                        <h3><?php the_title(); ?></h3>
                    
                        <div class="portfolio-content">
                            <?php the_content(); ?>
                        </div><!-- .entry-content -->
                    <!-- End of the loop. -->
                    <?php endwhile; ?>
            </div>
            <div class="portfolio-image">
                <?php the_post_thumbnail(); ?>
            </div>
        </div>
    </section>

    <section class="portfolio-slider-container">
        <div class="portfolio-slider-titles">
                <h4>RELATED PROJECTS</h4>
                <h2>You might be also interested in...</h2>
        </div>
 
            <div class="portfolio-slider">
            <?php 
                // the query
                $wpb_all_query = new WP_Query(array('post_type'=> 'portfolio', 'post_status'=>'publish', 'posts_per_page'=>6, 'order'=>'DSC')); 

            ?>
            <ul class="related-projects slides">
            <?php if ( $wpb_all_query->have_posts() ) : ?>
                
                    <?php while ( $wpb_all_query->have_posts() ) : $wpb_all_query->the_post(); ?>
                        <li class="project">
                            <a class="portfolio-link" href="<?php the_permalink(); ?>">
                            <?php $featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); ?>
                                <div class="portfolio-thumbnail" style="background: url(<?=$featured_img_url; ?>) center center/contain no-repeat;">
                                   
                                </div>    
                            </a>
                            <div class="card-content">
                                <a class="permalink" href="<?php the_permalink(); ?>">
                                    <h3><?php the_title(); ?></h3>
                                </a>    
                                <h4><?php the_category(); ?></h4>
                            </div> 
                        </li>
                    <?php endwhile; ?>
                
            <?php endif; ?>
            </ul>
            </div>
    </section>
</main>

<?php get_footer(); ?>