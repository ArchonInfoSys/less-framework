---
title: Responsive Header
description: This component shows 3 columns, and collapses into alternate layouts based on viewport width
styles: hedr/hedr.less
draft: true
---

Large/Medium:
```
left  middle  right
```

Small:
```
 left right
   middle
```

Extra Small:
```
left
right
middle
```

##Example

<div class="hedr__container">
	<div class="hedr__col--l">
		<div class="hedr__pull-card__container">
			<h2 class="hedr__pull-card__identifier">The Thing</h2>
		</div>
	</div>
	<div class="hedr__col--r">
		<div class="hedr__amount__container hedr__amount__status--paid">
			<div class="hedr__amount__indicator"></div>
			<div class="text-center">
				<h2 class="prop-hed__amount__status prop-hed__amount__status--paid">$1,555<sup>.55</sup></h2>
			</div>
		</div>
	</div>
	<div class="hedr__col--m">
		<div class="hedr__info__container">
			<div class="hedr__info__indicator"></div>
			<h4 class="hedr__info__headline">Here, Some Info</h4>
			<hr class="hedr__perf" />
		</div>
	</div>
</div>

##Source
```html
<div class="hedr__container">
		<div class="hedr__col--l">
		<div class="hedr__pull-card__container">
			<h2 class="hedr__pull-card__identifier">The Thing</h2>
		</div>
	</div>
	<div class="hedr__col--r">
		<div class="hedr__amount__container hedr__amount__status--paid">
			<div class="hedr__amount__indicator"></div>
			<div class="text-center">
				<h2 class="prop-hed__amount__status prop-hed__amount__status--paid">$1,555<sup>.55</sup></h2>
			</div>
		</div>
	</div>
	<div class="hedr__col--m">
		<div class="hedr__info__container">
			<div class="hedr__info__indicator"></div>
			<h4 class="hedr__info__headline">Here, Some Info</h4>
			<hr class="hedr__perf" />
		</div>
	</div>
</div>

```
