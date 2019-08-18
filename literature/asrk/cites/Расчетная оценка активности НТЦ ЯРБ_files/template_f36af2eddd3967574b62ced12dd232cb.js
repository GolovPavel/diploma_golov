
; /* Start:"a:4:{s:4:"full";s:78:"/bitrix/templates/.default/components/bitrix/menu/top2/script.js?1449155530469";s:6:"source";s:64:"/bitrix/templates/.default/components/bitrix/menu/top2/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var jshover = function()
{
	var menuDiv = document.getElementById("horizontal-multilevel-menu")
	if (!menuDiv)
		return;

	var sfEls = menuDiv.getElementsByTagName("li");
	for (var i=0; i<sfEls.length; i++) 
	{
		sfEls[i].onmouseover=function()
		{
			this.className+=" jshover";
		}
		sfEls[i].onmouseout=function() 
		{
			this.className=this.className.replace(new RegExp(" jshover\\b"), "");
		}
	}
}

if (window.attachEvent) 
	window.attachEvent("onload", jshover);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:81:"/bitrix/templates/.default/components/bitrix/menu/submenu/script.js?1449155530469";s:6:"source";s:67:"/bitrix/templates/.default/components/bitrix/menu/submenu/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var jshover = function()
{
	var menuDiv = document.getElementById("horizontal-multilevel-menu")
	if (!menuDiv)
		return;

	var sfEls = menuDiv.getElementsByTagName("li");
	for (var i=0; i<sfEls.length; i++) 
	{
		sfEls[i].onmouseover=function()
		{
			this.className+=" jshover";
		}
		sfEls[i].onmouseout=function() 
		{
			this.className=this.className.replace(new RegExp(" jshover\\b"), "");
		}
	}
}

if (window.attachEvent) 
	window.attachEvent("onload", jshover);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:81:"/bitrix/templates/.default/components/bitrix/menu/bottom2/script.js?1449155530469";s:6:"source";s:67:"/bitrix/templates/.default/components/bitrix/menu/bottom2/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var jshover = function()
{
	var menuDiv = document.getElementById("horizontal-multilevel-menu")
	if (!menuDiv)
		return;

	var sfEls = menuDiv.getElementsByTagName("li");
	for (var i=0; i<sfEls.length; i++) 
	{
		sfEls[i].onmouseover=function()
		{
			this.className+=" jshover";
		}
		sfEls[i].onmouseout=function() 
		{
			this.className=this.className.replace(new RegExp(" jshover\\b"), "");
		}
	}
}

if (window.attachEvent) 
	window.attachEvent("onload", jshover);
/* End */
;; /* /bitrix/templates/.default/components/bitrix/menu/top2/script.js?1449155530469*/
; /* /bitrix/templates/.default/components/bitrix/menu/submenu/script.js?1449155530469*/
; /* /bitrix/templates/.default/components/bitrix/menu/bottom2/script.js?1449155530469*/
