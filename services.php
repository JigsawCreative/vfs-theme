<?php /* Template name: Services */?>
<?php get_header(); ?>

    <main class="__main-services main">

        <section class="banner__image">

            <?php $banner_image = get_field( 'banner_image' ); ?>

            <div class="banner__image-container" style="background: url('<?=$banner_image['url']; ?>') center/cover no-repeat;" alt="<?=$banner_image['alt']; ?>">

                <div class="banner__image-wrapper"></div>

                <div class="banner__titles-container">

                    <div class="banner__titles">

                        <div class="banner__title-container">

                            <h3 class="title"><?php the_title(); ?></h3>

                        </div>

                        <div class="banner__subtitle-container">

                            <h4 class="banner-subtitle"><?php the_field( 'banner_subtitle' ); ?></h4>

                        </div>
                        
                    </div>           

                </div>

            </div>

        </section>

        <section class="services">
            
            <div class="services-container">
            
            <h1 class="title"><?php the_title(); ?></h1>

                <div class="service-icon-and-text">

                    <div class="service-text">
                    
                        <?php the_field( 'service_text' ); ?>
                    
                    </div>
                
                </div>

            </div>
        
        </section>

        <section class="contact-numbers">

            <div class="contact-numbers-container">

                <?php the_field( 'contact_numbers' ); ?>

            </div>
            
        </section>

        <?php $service_bullets = get_field( 'service_bullets' );

        if($service_bullets) : ?>

            <section class="bullets">

                <div class="service-bullets">

                    <?php the_field( 'service_bullets' ); ?>

                </div>

            </section>

        <?php endif; ?>

        <!-- Get Services Template -->
        <?php get_template_part('services-list'); ?>

    </main>

<?php get_footer(); ?>