<link rel="stylesheet" href="hedr.less.css" />

#`hedr`, The Responsive Header
This component shows 3 columns, and collapses into alternate layouts based on viewport width:

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
	<div class="clearfix">
		<div class="col-md-4 col-sm-6">
			<div class="hedr__pull-card__container">
				Pull card
			</div>
		</div>
		<div class="col-md-4 col-md-push-4 col-sm-6">
			<div class="hedr__amount__container hedr__amount__status--paid">
				<div class="hedr__amount__indicator"></div>
				Amount
			</div>
		</div>
		<div class="col-md-4 col-md-pull-4 col-sm-12">
			<div class="hedr__info__container">
				<div class="hedr__info__indicator"></div>
				Info
				<hr class="hedr__perf" />
			</div>
		</div>
	</div>
</div>

##Source
```html
<div class="hedr__container">
	<div class="clearfix">
		<div class="col-md-4 col-sm-6">
			<div class="hedr__pull-card__container">
				Pull card
			</div>
		</div>
		<div class="col-md-4 col-md-push-4 col-sm-6">
			<div class="hedr__amount__container hedr__amount__status--paid">
				<div class="hedr__amount__indicator"></div>
				Amount
			</div>
		</div>
		<div class="col-md-4 col-md-pull-4 col-sm-12">
			<div class="hedr__info__container">
				<div class="hedr__info__indicator"></div>
				Info
				<hr class="hedr__perf" />
			</div>
		</div>
	</div>
</div>

```