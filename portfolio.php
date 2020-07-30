<?php /* Template name: Portfolio */ ?>
<?php get_header(); ?>

<main class="main__portfolio main">
    <section class="portfolio-header">
        <?php $portfolio_header_image = get_field( 'portfolio_header_image' ); ?>
        <div class="portfolio-header-image" style="background: url(<?=$portfolio_header_image['url']; ?>) top/cover">

        </div>
    </section>
        <div class="portfolio-tile-layout">
            <?php 
                // the query
                $wpb_all_query = new WP_Query(array('post_type'=> 'portfolio', 'post_status'=>'publish', 'posts_per_page'=> -1, 'order'=>'DSC')); 

            ?>
            <div class="portfolio-items">
            <?php if ( $wpb_all_query->have_posts() ) : ?>
                
                    <?php while ( $wpb_all_query->have_posts() ) : $wpb_all_query->the_post(); ?>
                    <div class="portfolio-wrapper">
                        <div class="portfolio-item">
                            <a class="portfolio-item-link" href="<?php the_permalink(); ?>">
                            <?php $featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); ?>
                                <img src="<?=$featured_img_url; ?>" alt="" class="portfolio-item-thumbnail">
                            </a>
                        </div>
                        <div class="card-content">
                            <a class="permalink" href="<?php the_permalink(); ?>">
                                <h4><?php the_title(); ?></h4>
                            </a>    
                            <h5><?php the_category(); ?></h5>
                        </div> 
                    </div>
                    <?php endwhile; ?>
                
            <?php endif; ?>
            </div>
        </div>


</main>



<?php get_footer(); ?>