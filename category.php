<?php get_header(); ?>

<main class="__news main">

    <section class="blog-posts">
        <div class="blog-wrapper">
            <div class="blog-tile-layout">
                    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                            <div class="blog-item">
                                <div class="blog-meta">
                                    <div class="blog-date">
                                        <div class="blog-month">
                                            <?php echo get_the_date(" M "); ?>
                                        </div>
                                        <div class="blog-day">
                                            <?php echo get_the_date(" d "); ?>
                                        </div>
                                    </div>
                                    <div class="blog-author">
                                        <img src="/wp-content/uploads/user-3.jpg" alt="blog author">
                                        <p><?php the_author(); ?></p>
                                    </div>
                                </div>
                                <div class="blog-image">
                                    <a class="blog-item-link" href="<?php the_permalink(); ?>">
                                        <?php $featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); ?>
                                        <div class="blog-item-thumbnail"><img src="<?=$featured_img_url; ?>" alt=""></div>
                                    </a>
                                </div>
                                <div class="blog-titles">
                                    <a class="permalink" href="<?php the_permalink(); ?>">
                                        <h4><?php the_title(); ?></h4>
                                    </a>  
                                    <div class="blog-categories"><p><?php the_category(); ?></p></div> 
                                    <div class="blog-excerpt"><p><?php the_excerpt(); ?></p></div>
                                </div>
                            </div>
                        <?php endwhile; ?>
                        <div class="pagination"><?php echo paginate_links(); ?></div>
                    <?php endif; ?>
                </div>
            <ul class="blog-sidebar"><?php dynamic_sidebar( 'blog_sidebar_area' ); ?></ul>
            </div>
    </section>
    
</main>

<?php get_footer(); ?>