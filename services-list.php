<section class="services">

    <div class="services-container">

        <h3>Services</h3>

        <?php if( have_rows('services') ): ?>

            <ul class="services-slides">

            <?php while( have_rows('services') ): the_row(); 

                $icon = get_sub_field('icon');

                ?>

                <li class="slide">

                        <img src="<?php echo $icon['url']; ?>" alt="<?php echo $icon['alt'] ?>" />

                        <h3 class="service-title"><?php the_sub_field( 'title' ); ?></h3>

                        <div class="service-body"><?php the_sub_field( 'body' ); ?></div>

                    <a href="<?php the_sub_field( 'button' ); ?>" class="more-info">Read More</a>

                </li>

            <?php endwhile; ?>

            </ul>

        <?php endif; ?>

    </div>

</section>