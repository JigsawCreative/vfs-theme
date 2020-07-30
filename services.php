<?php /* Template name: Services */?>
<?php get_header(); ?>

    <main class="__main-services main">

        <section class="services">
            
            <div class="services-container">

                <h1 class="title"><?php the_title(); ?></h1>

                <div class="service-icon-and-text">
                
                    <div class="service-icon">

                        <?php $service_icon = get_field( 'service_icon' ); ?>
                    
                        <img src="<?=$service_icon['url']; ?>" alt="<?=$service_icon['alt']; ?>">
                    
                    </div>

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