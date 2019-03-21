<script type='text/javascript'>
	var x = 300;
	var slider = document.getElementById("slider");
	var slideArray = slider.getElementsByTagName("li");
	var slideMax = slideArray.length - 1;
	var curSlideNo = 0;
	for (i = 0; i <= slideMax; i++) {
		if (i == curSlideNo) slideArray[i].style.left = 0;
		else slideArray[i].style.left = -x + "px";
	}
</script>
