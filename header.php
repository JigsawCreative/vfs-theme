<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width" />
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

    <header id="header">
        <nav id="menu">
            <div id="menu-links">

                <div id="branding">
                    <div id="site-title">
                        <a href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_html(get_bloginfo('name')); ?>" rel="home"><img class="logo" src="/wp-content/uploads/2020/05/vale-logo-horiz-small.png" /></a>
                    </div>
                </div>

                <div id="mobile-menu">
                    <div class="menu-button">
                        <span class="menu-span"></span>
                        <span class="menu-span"></span>
                        <span class="menu-span"></span>
                    </div>
                </div>
                <?php wp_nav_menu(array(
                    'theme_location' => 'main-menu',
                ));
                ?>
            </div>
        </nav>
        <div class="sub-links-container">
            <div class="sub-links">
                <div class="email sub-link">
                <a href="mailto:info@valefireandsecurity.co.uk"><img src="/wp-content/uploads/2020/05/email.png" alt="email us"></a>
                    <p>
                        <a href="mailto:info@valefireandsecurity.co.uk">info@valefireandsecurity.co.uk</a>
                    </p>
                </div>
                <div class="phone sub-link">
                <a href="tel:03333 440812"><img src="/wp-content/uploads/2020/05/phone.png" alt="call us"></a>
                    <div class="sub-link-text">
                        <a href="tel:03333 440812">
                            <p>03333 440812</p>
                            <p>24/7 Customer Support</p>
                        </a>
                    </div>
                </div>
                <div class="find-us sub-link">
                    <a href="https://bit.ly/2X6PrA5"><img src="/wp-content/uploads/2020/05/find-us.png" alt="find us"></a>
                    <div class="sub-link-text">
                        <a href="https://bit.ly/2X6PrA5">
                            <p>Unit 4 Brookend Farm Kempsey,</p> 
                            <p>Worcester WR5 3LF.</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="scroll-to-top"><a href="#" class="scroll-up"></a></div>
    </header>
    <div id="wrapper">