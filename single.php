<?php get_header(); ?>
    <main class="__single-blog __news main">
        <section class="blog-body">
            <div class="blog-wrapper">
                <div class="blog-item">
                    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
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
                                <img src="<?=$featured_img_url; ?>" alt="">
                            </a>
                        </div>
                        <div class="blog-titles">
                            <a class="permalink" href="<?php the_permalink(); ?>">
                                <h2><?php the_title(); ?></h2>
                            </a>  
                            <div class="blog-categories"><p><?php the_category(', '); ?><?php the_tags(', '); ?></p></div> 
                            <div class="blog-content"><p><?php the_content(); ?></p></div>
                        </div>
                        
                        <?php if ( comments_open() && ! post_password_required() ) { comments_template( '', true ); } ?>
                        <?php endwhile; endif; ?>  
                    <ul class="blog-sidebar"><?php dynamic_sidebar( 'blog_sidebar_area' ); ?></ul>
                </div>
            </div>
        </section>
    </main>

<?php get_footer(); ?>