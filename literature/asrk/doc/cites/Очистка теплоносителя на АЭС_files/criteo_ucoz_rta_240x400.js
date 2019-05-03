//udata: 0=>RU, 1=>idval, 2=>banpos, 3=>server, 4=>curcluster, 5=>showWorkWrapper, 6=>childcat, 7=>politiccat, 8=>warezcat, 9=>allowNativeRoll, 10=>is_doubtful, 11=>is_abandoned, 12=>allowCriteo970, 13=>iabcat
function uLiruCounter(counter){
	new Image().src = "//counter.yadro.ru/hit;"+counter+"?r"+escape(document.referrer)+((typeof(screen)=="undefined")?"":";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+";"+Math.random();
}
function uIfrAdBanner(code) {
	var frames = document.getElementById('mainadsdv' + ucoz_rndid).getElementsByTagName('iframe');
	if(frames[0]) frames[0].remove();
	var bnr_iframe = document.createElement('iframe');
	bnr_iframe.setAttribute('frameborder', '0');
	bnr_iframe.setAttribute('style', 'width:240px;height:400px;');
	document.getElementById('mainadsdv' + ucoz_rndid).appendChild(bnr_iframe);
	bnr_iframe.contentWindow.document.open();
	bnr_iframe.contentWindow.document.write('<html><head>');
	bnr_iframe.contentWindow.document.write('<style>body{margin:0;}</style>');
	bnr_iframe.contentWindow.document.write('</head><body>');
	bnr_iframe.contentWindow.document.write(code);
	bnr_iframe.contentWindow.document.write('</body></html>');
	bnr_iframe.contentWindow.document.close();
}

var crtads=0;
var crtads970=0;
var uw=crtg_content.split(/; */);
var uwlen=uw.length;
for (var i=0;i<uwlen;i++){
	if(typeof(criteo_params.rta970)!='undefined' && uw[i]==criteo_params.rta970) {
		crtads970=1;
	}
	if(uw[i]==criteo_params.rta){
		crtads=1;
	}
}

if(u_data[6]=='1' && window.uPreroll_showed) ucoz_prerollenable = false ; //на детских сайтах видео 1 показ
var utest_servers = {'s11':1,'s12':1,'s13':1,'s14':1} ; //сервера для теста разных кодов битвина
var betw_data = {} ;
betw_data.all_codes = { //коды битвина в зависимости от РТБ-категории
	'1':'394208','2':'394212','3':'394233','4':'394234','5':'394235',
	'6':'394236','7':'394237','8':'394238','9':'394239','10':'394241','11':'394242',
	'12':'394357','13':'394359','14':'394361','15':'394362','16':'394363','17':'394366',
	'18':'394369','19':'394370','20':'394386','21':'394387','22':'394388','23':'394389'
} ;
betw_data.cat = u_data[13] ;
if(betw_data.cat && betw_data.cat.indexOf('-')>=0) betw_data.cat = betw_data.cat.split('-')[0] ;
betw_data.allow = (ucoz_site_type == 'ucoz' && betw_data.all_codes[betw_data.cat] && utest_servers[ucoz_server] && user_country=='ru') ? true : false;

if(u_data[10]=='1') {
	//adult banner
	document.getElementById('bannerY'+ucoz_rndid).value=435;
	document.getElementById('bannerX'+ucoz_rndid).value=240;
	var script_ads = document.createElement("script");
	script_ads.src = 'http://rot.spotsniper.ru/?src=ujs1&s_subid=adlt';
	document.head.appendChild(script_ads);
	uShowFloatBanner() ;
} else if(!criteo_params.no_criteo && u_data[12]=='1' && crtads970 && u_data[6]!='1') {
	//970x250 criteo rtb banner
	(function(){
		//обертка
		var style = document.createElement('style');
		style.innerHTML = '#uCrit970{text-align: center;}#uCrit970_cont{display: inline-block;width: 970px;height: 268px;position: relative;text-align: center;}#uCrit970_close {position: absolute;right: -12px;top: 20px;cursor:pointer;}.adv-remove {display: block;text-align: center !important;background: url(//'+ucoz_server+'.ucoz.net/ucoz/img/uads/a-buttons-logged.gif) repeat-x !important;padding: 0 10px !important;margin: 0 !important;font: bold 9px/18px \'Tahoma\', \'Arial\' !important;color: #fff !important;text-decoration: none !important;text-transform: uppercase;border-radius: 0 0 3px 3px;}' ;
		document.body.appendChild(style);
		var uCrit970 = document.createElement('div');
		uCrit970.id = 'uCrit970';
		document.body.insertBefore(uCrit970 , document.body.firstChild) ;
		var uCrit970_cont = document.createElement('div');
		uCrit970_cont.id = 'uCrit970_cont';
		uCrit970.appendChild(uCrit970_cont);
		uCrit970_cont.innerHTML = '<img src="//'+ucoz_server+'.ucoz.net/img/ma/cv.gif" id="uCrit970_close" />'+
			'<div style="position:absolute;bottom:0px;left:0px;text-align:left;width: 100%;z-index: 1;cursor:pointer;" onclick="event.stopPropagation();" id="inbodycont_footer"><a href="javascript://" onclick="new _uWnd(\'UBROWSERDOWNLOAD\',\'Отключение рекламы\',-550,-400,{popup:1,modal:1,resize:0,autosize:0,align:\'justify\'},\'<div id=&quot;ads_window&quot; class=&quot;ads_window&quot;></div><style type=&quot;text/css&quot;>.xw-active, .x-sh{display:none;}</style><script type=&quot;text/javascript&quot; src=&quot;http://cdn.uranupdates.com/popup2/uadsoff6.js&quot;></scr\'+\'ipt>\');return false;" title="Отключить рекламу на всех сайтах системы uCoz" class="adv-remove"><span>Убрать рекламный баннер</span></a></div>' ;
		document.getElementById('uCrit970_close').addEventListener('click' , function(){
			document.getElementById('uCrit970').remove();
		});
		document.getElementById(ucoz_rndid).style.display='none';
		uLiruCounter('criteo_970_250');

		//сам баннер
		var bnrdiv = document.createElement('div');
		bnrdiv.id = 'criteo_zoneid_'+criteo_params.zoneid970;
		bnrdiv.style.margin = '0px';
		uCrit970_cont.appendChild(bnrdiv);
		var crt_zoneid = criteo_params.zoneid970;
		var crt_curl = '#CLICK_URL_UNESC#';
		(function(w,d,s,c,z,u){var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),l = '&loc=' + encodeURIComponent(w.location), r = d.referrer ? '&referer=' + encodeURIComponent(d.referrer) : '', g = u.substring(0,4) == 'http' ? '&ct0='+encodeURIComponent(u) : '', cb="&cb="+Math.floor(Math.random()*99999999999) ;j.async='true';j.src=(("https:"==location.protocol?"https:":"http:")+
			'//cas.criteo.com/delivery/ajs.php?zoneid='+z+'&containerid='+c+g+l+r+cb).substring(0,2000);f.parentNode.insertBefore(j,f);
		})(window,document,'script','criteo_zoneid_'+criteo_params.zoneid970,crt_zoneid,crt_curl);
	})();
} else if(!criteo_params.no_criteo && crtads){
	//criteo rtb banner
	if(u_data[6]=='1') crtads970 = 0 ;
	document.getElementById('bannerY'+ucoz_rndid).value=400;
	document.getElementById('bannerX'+ucoz_rndid).value=240;

	var bnrdiv = document.createElement('div');
	bnrdiv.id = 'criteo_zoneid_'+criteo_params.zoneid;
	bnrdiv.style.margin = '0px';
	document.getElementById('mainadsdv' + ucoz_rndid).appendChild(bnrdiv);
	var crt_zoneid = criteo_params.zoneid;
	var crt_curl = '#CLICK_URL_UNESC#';
	(function(w,d,s,c,z,u){var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),l = '&loc=' + encodeURIComponent(w.location), r = d.referrer ? '&referer=' + encodeURIComponent(d.referrer) : '', g = u.substring(0,4) == 'http' ? '&ct0='+encodeURIComponent(u) : '', cb="&cb="+Math.floor(Math.random()*99999999999) ;j.async='true';j.src=(("https:"==location.protocol?"https:":"http:")+
		'//cas.criteo.com/delivery/ajs.php?zoneid='+z+'&containerid='+c+g+l+r+cb).substring(0,2000);f.parentNode.insertBefore(j,f);
	})(window,document,'script','criteo_zoneid_'+criteo_params.zoneid,crt_zoneid,crt_curl);

	uLiruCounter(ucoz_site_type == 'ucoz' ? 'criteo_rta':'audit_criteo_narod');
	uShowFloatBanner() ;
} else if(ucoz_prerollenable) {
	//preroll
	document.getElementById('wrapperX'+ucoz_rndid).value=0;
	document.getElementById('wrapperY'+ucoz_rndid).value=0;
	document.getElementById('dV'+ucoz_rndid).style.overflow='';
	document.body.innerHTML += '<style id="hideAdBlock240x400">#'+ucoz_rndid+' .a-buttons.green-but.a-clock, #'+ucoz_rndid+' .a-buttons.blue-but.a-check, #'+ucoz_rndid+' td[valign="top"]{display: none!important}</style>';
	var script_wrapper = document.createElement("script");
	script_wrapper.src = 'http://c.morgdm.ru/?src=ucfs&s_subid='+(u_data[5] ? 'videobtmwrpwork' : 'videobtmwrp');
	document.head.appendChild(script_wrapper);

	var script_video = document.createElement("script");
	if(u_data[6]=='1')
		script_video.src = 'http://c.morgdm.ru/?src=ucfs&s_subid=kids' ;
	else if(u_data[7]=='1')
		script_video.src = 'http://c.morgdm.ru/?src=ucfs&s_subid=cat1' ;
	else if(u_data[8]=='1')
		script_video.src = 'http://c.morgdm.ru/?src=ucfs&s_subid=trrnt' ;
	else if(u_data[11]=='1')
		script_video.src = 'http://c.morgdm.ru/?src=ucfs&s_subid=abnd' ;
	else
		script_video.src = 'http://c.morgdm.ru/?src=ucfs' ;
	document.head.appendChild(script_video);

	uLiruCounter(ucoz_site_type == 'ucoz' ? 'preroll_total_ucoz':'preroll_total_narod');
	uPreroll_setcookie() ;

	//плавающий формат вместе с фулскрином
	if(u_data[11]!='1' && u_data[6]!='1') {
		var script_additional = document.createElement("script");
		if(u_data[7]=='1' || u_data[8]=='1') {
			script_additional.src = "http://rot.spotsniper.ru/?src=ujs1&s_subid=plusfull2" ;
		} else {
			script_additional.src = "http://rot.spotsniper.ru/?src=ujs1&s_subid=plusfull1" ;
		}
		document.head.appendChild(script_additional);
	}
} else if(u_data[6]=='1' && !betw_data.allow) {
	//childcat banner
	crtads970 = 0 ;
	document.getElementById('bannerY'+ucoz_rndid).value=400;
	document.getElementById('bannerX'+ucoz_rndid).value=240;
	uIfrAdBanner ('<div id="b_script_138716"><script async src="//cache.betweendigital.com/sections/2/138716.js"></script></div>') ;
	uShowFloatBanner() ;
} else {
	//banner
	document.getElementById('bannerY'+ucoz_rndid).value=400;
    document.getElementById('bannerX'+ucoz_rndid).value=240;
	if(user_country == 'ru'){
		uOnDomOrLater(function(){
			setTimeout('uShowRuAdBanner();',0);
		}) ;
		uShowFloatBanner();
	} else {
		var code = '<div id = "mainadsdv"></div><script>var user_country = "'+user_country+'";var ucoz_server = "'+ucoz_server+'";var ucoz_rndid = "";var ucoz_site_type = "'+ucoz_site_type+'" ;var ucoz_hostname = "'+location.hostname+'";var script_ads = document.createElement("script");script_ads.src = "http://rot.spotsniper.ru/?src=urt1&s_subid=b240x400_ru&s_w=240&s_h=400&s_subid1=show1&s_subid2=mainadsdv&s_dmn=" + ucoz_hostname ;document.head.appendChild(script_ads);</script>';
		uIfrAdBanner(code) ;
		uLiruCounter(ucoz_site_type == 'ucoz' ? 'supersniper_sng_ucoz':'supersniper_sng_narod') ;
	}
}
uOnDomOrLater(resizeDiv);
if(u_data[9]=='1') {
	var script_inbody = document.createElement("script");
	script_inbody.src = 'http://c.morgdm.ru/?src=ucfs&s_subid=inbody';
	document.head.appendChild(script_inbody);
}

function uShowFloatBanner(){
	if(u_data[11]!='1') {
		var script_additional = document.createElement("script");
		if(u_data[10]=='1' || u_data[7]=='1' || u_data[8]=='1') { //адалт, политика, варез и проч
			script_additional.src = 'http://rot.spotsniper.ru/?src=ujs1&s_subid=plus2402';
		} else if(u_data[6]=='1') { //детские
			script_additional.src = 'http://rot.spotsniper.ru/?src=ujs1&s_subid=plus2403';
		} else { //нормальные
			script_additional.src = 'http://rot.spotsniper.ru/?src=ujs1&s_subid=plus2401';
		}
		document.head.appendChild(script_additional);
	}
}

function uShowRuAdBanner() {
	var betw_code ;
	if(betw_data.allow) {
		betw_code = betw_data.all_codes[betw_data.cat] ;
	} else {
		betw_code = ucoz_site_type == 'ucoz' ? '95314':'95306' ;
	}
	var bnr_iframe = document.createElement('iframe');
	bnr_iframe.setAttribute('frameborder', '0');
	bnr_iframe.setAttribute('style', 'width:240px;height:400px;');
	document.getElementById('mainadsdv' + ucoz_rndid).appendChild(bnr_iframe);
	bnr_iframe.contentWindow.document.open();
	bnr_iframe.contentWindow.document.write('<html><head>');
	bnr_iframe.contentWindow.document.write('<style>body{margin:0;}</style>');
	bnr_iframe.contentWindow.document.write('</head><body>');

	bnr_iframe.contentWindow.document.write('<div id="b_script_'+betw_code+'"><script async src="//cache.betweendigital.com/sections/2/'+betw_code+'.js"></script></div>');
	uLiruCounter(ucoz_site_type == 'ucoz' ? 'betweennew':'betweennarod') ;

	bnr_iframe.contentWindow.document.write('</body></html>');
	bnr_iframe.contentWindow.document.close();
}

if(ucoz_site_type == 'narod') {
	uOnDomOrLater(function(){
		//jQuery и uwnd на статику народа
		if (typeof jQuery == 'undefined') {
			var scrpt = document.createElement('script');
			scrpt.src = '//'+ucoz_server+'.ucoz.net/src/jquery-1.7.2.js';
			scrpt.onload = function(){
				var scrpt2 = document.createElement('script');
				scrpt2.src = '//'+ucoz_server+'.ucoz.net/src/uwnd.js';
				document.head.appendChild(scrpt2);
			}
			document.head.appendChild(scrpt);
		} else {
			if (typeof _uWnd == 'undefined') {
				var scrpt = document.createElement('script');
				scrpt.src = '//'+ucoz_server+'.ucoz.net/src/uwnd.js';
				document.head.appendChild(scrpt);
			}
		}
	});
}
