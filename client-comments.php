<?php /* Template name: Client Comments */ ?>
<?php get_header(); ?>

<main class="__client-comments main">
    <section class="client-comments-header">
        <?php $client_comments_header = get_field( 'client_comments_header' ); ?>
        <div class="comments-header-image" style="background: url(<?=$client_comments_header['url']; ?>) center/cover">

        </div>
    </section>
    <section class="client-comments">
        <div class="client-comments-content">
            <?php echo do_shortcode("[show-testimonials orderby='menu_order' order='ASC' layout='grid' options='theme:speech,info-position:info-below,text-alignment:center,columns:1,review_title:on,rating:on,charlimitextra: (...),image-size:ttshowcase_small,image-shape:circle,image-effect:none,image-link:on'] "); ?>
        </div>
    </section>

</main>
    

<?php get_footer(); ?>