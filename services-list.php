<section class="services">

    <div class="services-container">

        <h3>Services</h3>

        <?php if( have_rows('global_services', 'option') ): ?>

            <ul class="services-slides">

            <?php while( have_rows('global_services', 'option') ): the_row(); 

                $icon = get_sub_field('services_icon');

                ?>

                <li class="slide">

                        <a href="<?php the_sub_field('service_url'); ?>">

                            <img src="<?php echo $icon['url']; ?>" alt="<?php echo $icon['alt'] ?>" />

                            <h3 class="service-title"><?php the_sub_field( 'services_title' ); ?></h3>

                        </a>

                </li>

            <?php endwhile; ?>

            </ul>

        <?php endif; ?>

    </div>

</section>