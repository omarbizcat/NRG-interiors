<?php
/**
 * @package     Joomla.Site
 * @subpackage  mod_camera_slideshow
 *
 * @copyright   Copyright (C) 2005 - 2012 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

?>
<div class="mod_caroufredsel mod_caroufredsel__<?php echo $moduleclass_sfx; ?>">
	<div id="list_carousel_<?php echo $params->get('carousel_id'); ?>" class="list_carousel">

		<ul id="caroufredsel_<?php echo $params->get('carousel_id'); ?>">
			<?php
			foreach ($list as $key => $item) : ?>
				<li class="item">
					<div class="item_content"><?php require JModuleHelper::getLayoutPath('mod_caroufredsel', '_item'); ?></div>
				</li>
			<?php endforeach;	?>
		</ul>

		<?php if ($params->get('navigation')): ?>
			<div id="carousel_<?php echo $params->get('carousel_id'); ?>_prev" class="caroufredsel_prev"><span>&lt;</span></div>
			<div id="carousel_<?php echo $params->get('carousel_id'); ?>_next" class="caroufredsel_next"><span>&gt;</span></div>
		<?php endif; ?>

		<div id="carousel_<?php echo $params->get('carousel_id'); ?>_pag" class="caroufredsel_pagination"></div>
		<div class="clearfix"></div>
	</div>
</div>

<script type="text/javascript">if (jQuery.browser.msie &&jQuery.browser.version<9) {
	jQuery(document).ready(function() {

		var carouselConteiner = jQuery("#caroufredsel_<?php echo $params->get('carousel_id'); ?>");

		carouselConteiner.carouFredSel({
			responsive	: true,
			width: '100%',
			items		: {
				width : <?php echo $params->get('max_width'); ?>,
				height: 'variable',
				visible		: {
					min			: <?php echo $params->get('min_items');?>,
					max			: <?php echo $params->get('max_items');?>
				},
				minimum: 1
			},
			scroll: {
				items: 1,
				fx: "<?php echo $params->get('fx'); ?>",
				easing: "<?php echo $params->get('easing'); ?>",
				duration: <?php echo $params->get('duration'); ?>,
				queue: true
			},
			auto: false,
			<?php if ($params->get('navigation')): ?>
				next: "#carousel_<?php echo $params->get('carousel_id'); ?>_next",
				prev: "#carousel_<?php echo $params->get('carousel_id'); ?>_prev",
			<?php endif; ?>
			<?php if ($params->get('pagination')): ?>
				pagination: "#carousel_<?php echo $params->get('carousel_id'); ?>_pag",
			<?php endif; ?>
			swipe:{
				onTouch: true
			}
		});
	});
} else {
	jQuery(window).load(function() {

		var carouselConteiner = jQuery("#caroufredsel_<?php echo $params->get('carousel_id'); ?>");

		carouselConteiner.carouFredSel({
			responsive	: true,
			width: '100%',
			items		: {
				width : <?php echo $params->get('max_width'); ?>,
				height: 'variable',
				visible		: {
					min			: <?php echo $params->get('min_items');?>,
					max			: <?php echo $params->get('max_items');?>
				},
				minimum: 1
			},
			scroll: {
				items: 1,
				fx: "<?php echo $params->get('fx'); ?>",
				easing: "<?php echo $params->get('easing'); ?>",
				duration: <?php echo $params->get('duration'); ?>,
				queue: true
			},
			auto: false,
			<?php if ($params->get('navigation')): ?>
				next: "#carousel_<?php echo $params->get('carousel_id'); ?>_next",
				prev: "#carousel_<?php echo $params->get('carousel_id'); ?>_prev",
			<?php endif; ?>
			<?php if ($params->get('pagination')): ?>
				pagination: "#carousel_<?php echo $params->get('carousel_id'); ?>_pag",
			<?php endif; ?>
			swipe:{
				onTouch: true
			}
		});
	});
}
</script>
