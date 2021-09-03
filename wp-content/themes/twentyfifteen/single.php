<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php
		// Start the loop.
		while ( have_posts() ) :
			the_post();

			/*
			 * Include the post format-specific template for the content. If you want
			 * to use this in a child theme, then include a file called content-___.php
			 * (where ___ is the post format) and that will be used instead.
			 */
			get_template_part( 'content', get_post_format() );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

			// Previous/next post navigation.
			

			// End the loop.
		endwhile;
		?>

		</main><!-- .site-main -->
	</div><!-- .content-area -->
	<div class="calendar-layer js--hidden"> </div>
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://github.com/jquery/jquery-ui/blob/master/ui/i18n/datepicker-ru.js"></script>
	<script src="http://ttktest.hostfl.ru/wp-content/themes/twentyfifteen/assets/js/main.js"></script>

<?php get_footer(); ?>
