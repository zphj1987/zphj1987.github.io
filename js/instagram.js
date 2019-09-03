define([], function (){

	var _collection = [];
	var _count = 0;

	var insData = [{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-03-24_1395632167.jpg","text":"","y":2014,"m":03},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-03-25_1395787676.jpg","text":"","y":2014,"m":03},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-03-26_1395839152.jpg","text":"","y":2014,"m":03},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-03-31_1396253456.jpg","text":"","y":2014,"m":03},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-04-02_1396423704.jpg","text":"","y":2014,"m":04},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-04-03_1396565265.jpg","text":"","y":2014,"m":04},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-04-04_1396613150.jpg","text":"","y":2014,"m":04},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-04-13_1397402344.jpg","text":"","y":2014,"m":04},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-04-13_1397402433.jpg","text":"","y":2014,"m":04},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-04-14_1397452446.jpg","text":"","y":2014,"m":04},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-04-14_1397489407.jpg","text":"","y":2014,"m":04},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-04-15_1397559289.jpg","text":"","y":2014,"m":04},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-04-15_1397582076.jpg","text":"","y":2014,"m":04},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-04-17_1397735711.jpg","text":"","y":2014,"m":04},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-04-18_1397803299.jpg","text":"","y":2014,"m":04},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-04-18_1397828282.jpg","text":"","y":2014,"m":04},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-04-19_1397875764.jpg","text":"","y":2014,"m":04},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-04-20_1397991107.jpg","text":"","y":2014,"m":04},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-04-23_1398236239.jpg","text":"","y":2014,"m":04},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-04-24_1398329446.jpg","text":"","y":2014,"m":04},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-05-03_1399106226.jpg","text":"","y":2014,"m":05},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-05-04_1399205576.jpg","text":"","y":2014,"m":05},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-05-04_1399213410.jpg","text":"","y":2014,"m":05},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-05-11_1399809879.jpg","text":"","y":2014,"m":05},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-05-29_1401363243.jpg","text":"","y":2014,"m":05},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-05-29_1401363252.jpg","text":"","y":2014,"m":05},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-05-29_1401377838.jpg","text":"","y":2014,"m":05},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-06-02_1401710801.jpg","text":"","y":2014,"m":06},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-06-18_1403052847.jpg","text":"","y":2014,"m":06},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-06-21_1403327510.jpg","text":"","y":2014,"m":06},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-06-30_1404143806.jpg","text":"","y":2014,"m":06},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-07-09_1404890435.jpg","text":"","y":2014,"m":07},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-07-18_1405693114.jpg","text":"","y":2014,"m":07},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-08-05_1407246790.jpg","text":"","y":2014,"m":08},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-08-13_1407906228.jpg","text":"","y":2014,"m":08},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-08-22_1408709723.jpg","text":"","y":2014,"m":08},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-08-28_1409222342.jpg","text":"","y":2014,"m":08},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-09-05_1409920723.jpg","text":"","y":2014,"m":09},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-12-18_1418909346.jpg","text":"","y":2014,"m":12},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2014-12-20_1419064224.jpg","text":"","y":2014,"m":12},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-01-24_1422095173.jpg","text":"","y":2015,"m":01},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-05-06_1430918053.jpg","text":"","y":2015,"m":05},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-05-16_1431755917.jpg","text":"","y":2015,"m":05},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-07-01_1435768869.jpg","text":"","y":2015,"m":07},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-07-17_1437147396.jpg","text":"","y":2015,"m":07},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-07-17_1437147401.jpg","text":"","y":2015,"m":07},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-07-17_1437147403.jpg","text":"","y":2015,"m":07},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-07-17_1437147637.jpg","text":"","y":2015,"m":07},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-09-25_1443160299.jpg","text":"","y":2015,"m":09},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-09-25_1443160303.jpg","text":"","y":2015,"m":09},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-09-25_1443160307.jpg","text":"","y":2015,"m":09},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-09-25_1443160315.jpg","text":"","y":2015,"m":09},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-09-25_1443160321.jpg","text":"","y":2015,"m":09},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-09-25_1443160326.jpg","text":"","y":2015,"m":09},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-10-24_1445699214.jpg","text":"","y":2015,"m":10},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-10-24_1445700024.jpg","text":"","y":2015,"m":10},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-10-24_1445700439.jpg","text":"","y":2015,"m":10},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-10-24_1445700612.jpg","text":"","y":2015,"m":10},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-10-24_1445701080.jpg","text":"","y":2015,"m":10},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-10-24_1445703337.jpg","text":"","y":2015,"m":10},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-12-26_1451146280.jpg","text":"","y":2015,"m":12},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-12-26_1451146289.jpg","text":"","y":2015,"m":12},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-12-26_1451146411.jpg","text":"","y":2015,"m":12},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2015-12-26_1451146544.jpg","text":"","y":2015,"m":12},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/2016-01-04_1451921430.jpg","text":"净化器","y":2016,"m":01}];

	var render = function(data){

		var ulTmpl = "";

		for(var em in data){
			var liTmpl = "";
			for(var i=0,len=data[em].srclist.length;i<len;i++){
				
				liTmpl += '<li>\
								<div class="img-box">\
									<a class="img-bg" rel="example_group" href="'+data[em].srclist[i]+'" title="'+data[em].text[i]+'"></a>\
									<img lazy-src="'+data[em].srclist[i]+'" alt="">\
								</div>\
							</li>';
			}
			ulTmpl = '<section class="archives album"><h1 class="year">'+data[em].year+'<em>'+data[em].month+'月</em></h1>\
				<ul class="img-box-ul">'+liTmpl+'</ul>\
				</section>'+ ulTmpl;
		}
		$(ulTmpl).appendTo($(".instagram"));

		$(".instagram").lazyload();
		
		$("a[rel=example_group]").fancybox();
	}

	var replacer = function(str){
		var arr = str.split("/");
		return "/assets/ins/"+arr[arr.length-1];
	}

	var ctrler = function(data){
		var imgObj = {};
		for(var i=0,len=data.length;i<len;i++){
			var y = data[i].y;
			var m = data[i].m;
			var src = replacer(data[i].src);
			var text = data[i].text;
			var key = y+""+((m+"").length == 1?"0"+m : m);
			if(imgObj[key]){
				imgObj[key].srclist.push(src);
				imgObj[key].text.push(text);
			}else{
				imgObj[key] = {
					year:y,
					month:m,
					srclist:[src],
					text:[text]
				}
			}
		}
		render(imgObj);
	}

	var getList = function(){
		//$(".open-ins").html("图片来自instagram，正在加载中…");
		$(".open-ins").html("图片来自instagram，点此访问");
		ctrler(insData);
	}
	

	return {
		init:function(){
			getList();
		}
	}
});