<?php /* Template Name: Contact */ ?>
<?php get_header(); ?>

<main class="main__contact main">

    <div class="contact-container">

        <div class="contact-container-inner">

            <div class="contact-form">

                <h3>Get in touch</h3>    

                <?php echo do_shortcode("[contact-form-7 id='126' title='Contact form 1]"); ?>

            </div>

            <div class="contact-wrapper">
        
                <div class="contact-map">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.319499323847!2d-2.20732888420643!3d52.14669907974528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870e062d71c56d5%3A0x66de25dda2c134b4!2sVale%20Fire%20%26%20Security!5e0!3m2!1sen!2suk!4v1594888054976!5m2!1sen!2suk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                </div>

                <div class="contact-address">

                    <?php if( have_rows('contact_details') ): ?>

                        <ul class="contact-details">

                            <?php while( have_rows('contact_details') ): the_row(); 

                                $contact_icon = get_sub_field('contact_icon');

                                ?>

                                <li class="contact-item">

                                        <img src="<?php echo $contact_icon['url']; ?>" alt="<?php echo $contact_icon['alt'] ?>" class="contact-icon" />

                                        <p class="contact-text"><?php the_sub_field( 'contact_text' ); ?></p>
                                </li>

                            <?php endwhile; ?>

                        </ul>

                    <?php endif; ?>
                    
                </div>

            </div>
        </div>

    </div>

</main>

<?php get_footer(); ?>