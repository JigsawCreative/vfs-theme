<footer id="footer">
    <div class="sweep-wrapper">
        
        <div class="footer-widgets">
            <ul class="footer-list-one"><?php dynamic_sidebar( 'footer_area_one' ); ?></ul>
            <ul class="footer-list-two"><?php dynamic_sidebar( 'footer_area_two' ); ?></ul>
            <ul class="footer-list-three"><?php dynamic_sidebar( 'footer_area_three' ); ?></ul>
            <ul class="footer-list-four"><?php dynamic_sidebar( 'footer_area_four' ); ?></ul>
        </div>
    </div>

    <div class="copyright-container">
        <div id="copyright">
            <p>&copy; All rights reserved.</p>
            <p>Vale Fire & Security Ltd <?php echo esc_html( date_i18n( __( 'Y', 'blankslate' ) ) ); ?></p>
        </div>
    </div>
</footer>
</div>
<?php wp_footer(); ?>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.7.2/jquery.flexslider-min.js"></script>
</body>
</html>