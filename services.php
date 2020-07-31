<?php /* Template name: Services */?>
<?php get_header(); ?>

    <main class="__main-services main">

        <section class="banner__image">

            <div class="banner__image-container">

                <div class="banner__image-wrapper">

                    <?php $banner_image = get_field( 'banner_image' ); ?>

                    <img src="<?=$banner_image['url']; ?>" alt="<?=$banner_image['alt']; ?>" class="banner-image">

                </div>

                <div class="banner__titles-container">

                    <div class="banner__titles">

                        <div class="banner__title-container">

                            <h1 class="title"><?php the_title(); ?></h1>

                        </div>

                        <div class="banner__subtitle-container">

                            <h3 class="banner-subtitle"><?php the_field( 'banner_subtitle' ); ?></h3>

                        </div>
                        
                    </div>           

                </div>

            </div>

        </section>

        <section class="services">
            
            <div class="services-container">

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

        <section class="bullets">

            <div class="service-bullets">

                <?php the_field( 'service_bullets' ); ?>

            </div>

        </section>

        <!-- Get Services Template -->
        <?php get_template_part('services-list'); ?>

    </main>

<?php get_footer(); ?>