$(document).ready(function(){inputOperations.initDatePicker(),panchangOps.initCraousel()});var inputOperations={initDatePicker:function(){$("#PredictionDate").datepicker({format:"D, M dd, yyyy",startView:"decade"}).on("changeDate",function(a){$("#PredictionDate").datepicker("hide")}),$("#RequestDate").datepicker({format:"D, M dd, yyyy",startView:"decade"}).on("changeDate",function(a){$("#RequestDate-error").hide(),$("#RequestDate").datepicker("hide")})}},panchangOps={onBeginForm:function(a){$("#PanchangForm").find("[type='submit']").text("Please wait...")},panchangSuccess:function(a,e){$("#panchangDetail").html(a),$("#PanchangForm").find("[type='submit']").text("Submit")},initCraousel:function(){var a=[{minWidth:800,maxWidth:5e3,sliderCount:4},{minWidth:0,maxWidth:800,sliderCount:1}];$("#articlescarsousel02").adaptCarousel(a),$(window).resize(function(){$("#articlescarsousel02").adaptCarousel(a)})}};function setMantras(a){var e,t="";e="https://images.astroyogi.com/astroyogi2017/english/images/astro/zodiacbasic/"+a+".png",$("#ZodiacImage").attr("src",e),"Aries"==a?t="Om hrim shri lakshminarayana namah":"Taurus"==a?t="Om Gopalaya Uttardhvajaya Namah":"Gemini"==a?t="Om Kleem Krishnaya Namah":"Cancer"==a?t="Om Hiranya Garbhaya Avyakta Rupine Namah":"Leo"==a?t="Om Kleem Brahmne Jagadadharaya Namah":"Virgo"==a?t="Om Namo Prim Pitambaraya Namah":"Libra"==a?t="Om Tatva Niranjanaya Tarakramaya Namah":"Scorpio"==a?t="Om Narayanaya Sursinmhaya Namah":"Sagittarius"==a?t="Om Shreem Devakrishnaya Urdhvashantaya Namah":"Capricorn"==a?t="Om Shreem Upendraya Achutaya Namah":"Aquarius"==a?t="Om Shreem Upendraya Achutaya Namah":"Pisces"==a&&(t="Om Kleem Uddhritaya Udharine Namah");var i=document.getElementById("ltrsign"),n=document.getElementById("ltrmantra");i.innerHTML=a,n.innerHTML=t,$("#result").show()}$("#ddlZodiac").change(function(){var a=$("#ddlZodiac option:selected").text();if("Select"==a)return $("#ErrorText").show(),!1;setMantras(a)});