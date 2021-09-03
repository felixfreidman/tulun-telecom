<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php echo esc_url( get_bloginfo( 'pingback_url' ) ); ?>">
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js?ver=3.7.0"></script>
	<![endif]-->
	
	
	
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div class="header-section--mobile">
    <div class="logo-section"><img src="http://ttktest.hostfl.ru//wp-content/themes/twentyfifteen/assets/images/static/logo-mobile.svg" alt="Логотип компании"></div>
    <div class="control-section"><label class="control-section__search" for="inputSearchFieldMobile" id="labelOpenMenu"><img src="http://ttktest.hostfl.ru//wp-content/themes/twentyfifteen/assets/images/static/searchIcon.svg" alt="Логотип компании"></label><span class="control-section__menu-open" id="openMenu"><span class="menu-open" id="firstLine"> </span>
        <span
            class="menu-open" id="secondLine"> </span><span class="menu-open" id="thirdLine"> </span></span>
    </div>
</div>
<div id="page" class="hfeed site">
	<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'twentyfifteen' ); ?></a>

	<div id="sidebar" class="sidebar">
		<header id="masthead" class="site-header" role="banner">
			<div class="site-branding">
				<?php
					twentyfifteen_the_custom_logo();

				if ( is_front_page() && is_home() ) :
					?>
						<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<?php else : ?>
						<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
						<?php
					endif;

					$description = get_bloginfo( 'description', 'display' );
					if ( $description || is_customize_preview() ) :
						?>
						<p class="site-description"><?php echo $description; ?></p>
						<?php
					endif;
					?>
				<button class="secondary-toggle"><?php _e( 'Menu and widgets', 'twentyfifteen' ); ?></button>
			</div><!-- .site-branding -->
		</header><!-- .site-header -->

		<?php get_sidebar(); ?>
	</div><!-- .sidebar -->
	
	<div id="content" class="site-content">
