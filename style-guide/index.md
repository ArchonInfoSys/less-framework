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
	<div class="row">
		<div class="col-md-4 col-sm-6">
			left
		</div>
		<div class="col-md-4 col-md-push-4 col-sm-6">
			right
		</div>
		<div class="col-md-4 col-md-pull-4 col-sm-12">
			middle
		</div>
	</div>
</div>

##Source
```html
<div class="hedr__container">
	<div class="row">
		<div class="col-md-4 col-sm-6">
			left
		</div>
		<div class="col-md-4 col-md-push-4 col-sm-6">
			right
		</div>
		<div class="col-md-4 col-md-pull-4 col-sm-12">
			middle
		</div>
	</div>
</div>

```