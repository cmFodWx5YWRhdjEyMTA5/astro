$(document).ready(function(){var adaptCarouselOption=[{"minWidth":800,"maxWidth":5000,"sliderCount":4},{"minWidth":0,"maxWidth":800,"sliderCount":1}];$("#articlescarsousel02").adaptCarousel(adaptCarouselOption);$(window).resize(function(){$("#articlescarsousel02").adaptCarousel(adaptCarouselOption);});});$(function(){var dt=new Date();var year=dt.getFullYear()+10;var range='1920:'+year;$("#DOB").datepicker({changeMonth:true,yearRange:range,changeYear:true,dateFormat:'dd MM yy'});$("#Dateofbirth").datepicker({changeMonth:true,yearRange:range,changeYear:true,dateFormat:'dd MM yy'});$("#YourDateofbirth").datepicker({changeMonth:true,yearRange:range,changeYear:true,dateFormat:'dd MM yy'});});$(".yourgender").change(function(){var val=$('input[name=YourGender]:checked').val();if(val=="Female")
{$("#partnerFemale").prop("checked",false);$("#partnerMale").prop("checked",true);}
else{$("#partnerMale").prop("checked",false);$("#partnerFemale").prop("checked",true);}});$(".partnergender").change(function(){var val=$('input[name=partnergender]:checked').val();if(val=="Female")
{$("#yourMale").prop("checked",true);$("#yourFemale").prop("checked",false);}
else{$("#yourMale").prop("checked",false);$("#yourFemale").prop("checked",true);}});function sunsignresult(value)
{var language=$("#language").val();if(value=="")
{alert("Please enter Date Of Birth");return false;}
var dateofBirth=value;$.ajax({type:'GET',url:'/ContentSyn/horoscope/sunsignresult',dataType:"json",data:{_dob:dateofBirth},success:function(response){if(response.success){var sign=response.data;if(language=="en"){sign=response.data.toLowerCase();window.location="/zodiac-signs/"+sign;}
else{if(sign=="मेष"){sign="mesh";}
else if(sign=="वृष"||sign=="वृषभ"){sign="vrishabha";}
else if(sign=="मिथुन"){sign="mithun";}
else if(sign=="कर्क"){sign="kark";}
else if(sign=="सिंह"){sign="singh";}
else if(sign=="कन्या"){sign="kanya";}
else if(sign=="तुला"){sign="tula";}
else if(sign=="वृश्चिक"){sign="vrishchik";}
else if(sign=="धनु"){sign="dhanu";}
else if(sign=="मकर"){sign="makar";}
else if(sign=="कुम्भ"){sign="kumbh";}
else if(sign=="मीन"){sign="meen";}
window.location="/rashi/"+sign;}}},failure:function(response){}});}
function zodiaccompat(gender,yoursign,partnersign,partnergender)
{var language=$("#language").val();var url="";if(language=="en"){url="/zodiac-signs/compatibility/"+yoursign.toLowerCase()+"-"+gender.toLowerCase()+"-"+partnersign.toLowerCase()+"-"+partnergender.toLowerCase();}
else
{url="/rashi/compatibility/"+yoursign.toLowerCase()+"-"+gender.toLowerCase()+"-"+partnersign.toLowerCase()+"-"+partnergender.toLowerCase();}
top.location=url;}
function GetZodiacCompatibility()
{var yoursign=$("#yoursign option:selected").val();var partnersign=$("#partnersign option:selected").val();var yourgender=$('input[name=YourGender]:checked').val();var partnergender=$('input[name=partnergender]:checked').val();var language=$("#language").val();if(typeof yourgender==="undefined")
{alert("Please Select Your Gender");return false;}
if(typeof partnergender==="undefined")
{alert("Please Select your partner Gender");return false;}
var url="";if(language=="en"){url="/zodiac-signs/compatibility/"+yoursign.toLowerCase()+"-"+yourgender.toLowerCase()+"-"+partnersign.toLowerCase()+"-"+partnergender.toLowerCase();}
else
{url="/rashi/compatibility/"+yoursign.toLowerCase()+"-"+yourgender.toLowerCase()+"-"+partnersign.toLowerCase()+"-"+partnergender.toLowerCase();}
$(location).attr('href',url)
return false;}
function moonsignresult()
{var language=$("#language").val();var data={};var date=$('#YourDateofbirth').val();if(date==""){var date=new Date();data.Day=date.getDate();data.Month=date.getMonth()+1;data.Year=date.getFullYear();}else{var date=new Date(date);console.log(date);data.Day=date.getDate();data.Month=date.getMonth()+1;data.Year=date.getFullYear();}
var time=moment($('#BirthTime').val(),'HH:mm A');console.log(time)
data.Day=date.getDate();data.Month=date.getMonth()+1;data.Year=date.getFullYear();data.Hour=time.get('hour');data.Min=time.get('minute');data.Lat=$('#Latitude').val();data.Lon=$('#Longitude').val();data.Tzone=$('#Timezone').val();data.Name=$('#Name').val();InputData=data;$.ajax({type:'GET',url:'/ContentSyn/horoscope/MoonSignResult',dataType:"json",data:{objStr:JSON.stringify(data)},success:function(response){var sign=response.data[1].sign;if(response.success){if(language=="en"){sign=sign.toLowerCase();window.location="/zodiac-signs/"+sign;}
else{if(sign=="मेष"){sign="mesh";}
else if(sign=="वृष"){sign="vrishabha";}
else if(sign=="मिथुन"){sign="mithun";}
else if(sign=="कर्क"){sign="kark";}
else if(sign=="सिंह"){sign="singh";}
else if(sign=="कन्या"){sign="kanya";}
else if(sign=="तुला"){sign="tula";}
else if(sign=="वृश्चिक"){sign="vrishchik";}
else if(sign=="धनु"){sign="dhanu";}
else if(sign=="मकर"){sign="makar";}
else if(sign=="कुम्भ"){sign="kumbh";}
else if(sign=="मीन"){sign="meen";}
window.location="/rashi/"+sign;}}},failure:function(response){}});}
$("#Dateofbirth").datetimepicker({format:"DD/MM/YYYY"}).on("changeDate",function(e){}),$("#BirthTime").datetimepicker({format:"LTS"}).on("dp.change",function(e){}),document.querySelector("#kundliRegistrationFrm").addEventListener("submit",function(e){if($("#MobileError").hide(),$("#errorKundalimsg").hide(),$(this).valid()){e.preventDefault();var t=$("#kundliRegistrationFrm"),n=$('input[name="__RequestVerificationToken"]',t).val(),i={Name:$("#Name").val(),Dateofbirth:$("#Dateofbirth").val(),EmailAddress:$("#EmailAddress").val(),BirthTime:$("#BirthTime").val(),BirthPlace:$("#BirthPlace").val(),PhoneNumber:$("#PhoneNumber").val(),PhoneCode:$("#PhoneCode").val(),UtmCampaign:$("#UtmCampaign").val(),UtmSource:$("#UtmSource").val(),UtmContent:$("#UtmContent").val(),UtmMedium:$("#UtmMedium").val(),UtmTerm:$("#UtmTerm").val(),Latitude:$("#Latitude").val(),Longitude:$("#Longitude").val(),Timezone:$("#Timezone").val(),__RequestVerificationToken:n,SignUpType:"KundliRegistration"};var a=$("#kundliRegistrationFrm").find("[type='submit']").text();if($("#kundliRegistrationFrm").find("[type='submit']").text("Please wait.."),$("#kundliRegistrationFrm").find("[type='submit']").attr("disabled",!0),"True"==Isuser)return void $.ajax({type:"POST",url:"/contentsyn/kundli/kundliresults",data:i,success:function(e){},failure:function(e){$("#kundliRegistrationFrm").find("[type='submit']").removeAttr("disabled"),$("#kundliRegistrationFrm").find("[type='submit']").text(a)}});$.ajax({type:"POST",url:"/contentsyn/kundli/kundliresults",data:i,success:function(e){},failure:function(e){$("#kundliRegistrationFrm").find("[type='submit']").removeAttr("disabled"),$("#kundliRegistrationFrm").find("[type='submit']").text(a)}})}});var appendUtmParamKundaliOp={initiate:function(){$.when(astroyogiUtmParamOps.utmParamSetStat).then(function(){var e=astroyogiUtmParamOps.getUtmParam();null!=e&&($("#UtmSource").val(e.utmSource),$("#UtmCampaign").val(e.utmCampaign),$("#UtmContent").val(e.utmContent),$("#UtmMedium").val(e.utmMedium),$("#UtmTerm").val(e.utmTerm))})}};var array=null;$('#BirthPlace').keyup(function(){if($("#BirthPlace").val().length>=1){$.ajax({type:"GET",url:"/staticdata/getgeolocationasync",data:{_searchText:$("#BirthPlace").val()},success:function(result){if(result.success==true){array=result.data;var jsonString=JSON.parse(JSON.stringify(result.data));$('#BirthPlace').autocomplete({source:$.map(jsonString,function(item){return item.location+","+item.state+","+item.countryCode;}),select:function(event,ui){var nameArr=ui.item.value.split(',');var details=array.filter(x=>x.location===nameArr[0]&&x.state===nameArr[1]&&x.countryCode===nameArr[2])[0];$("#Latitude").val(details.latitute);$("#Longitude").val(details.longitutde);$("#Timezone").val(details.timeZone);if(details.timeZone==null)
{n=details.latitute,i=details.longitutde;var d=new Date,u="https://maps.googleapis.com/maps/api/timezone/json?location="+n+","+i+"&timestamp="+(d.getTime()/1e3+60*d.getTimezoneOffset())+"&key=AIzaSyCFuOlkFwvEa9kplV3RP7wnbtQHmSvZMsQ",a=new XMLHttpRequest;a.open("GET",u),a.onload=function(){if(200===a.status){var e=JSON.parse(a.responseText);if("OK"==e.status){var t=(e.dstOffset+e.rawOffset)/3600;$("#Timezone").val(t)}}},a.send();}
var selectecItem=jsonString.filter(function(value){$("#BirthPlace").val(ui.item.value);});},});}
else
{$.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCWFvWQ9BYo6UBtX0hA8QxSv-wq1485ttE&libraries=places',function()
{googlihitcheck=1;initialize();});}},failure:function(e){$("#kundliRegistrationFrm").find("[type='submit']").removeAttr("disabled"),$("#kundliRegistrationFrm").find("[type='submit']").text(a)}})}});function initialize(){var e=new google.maps.places.Autocomplete(document.getElementById("BirthPlace"),{types:["(cities)"]});google.maps.event.addListener(e,"place_changed",function(){$("#Latitude").val(""),$("#Longitude").val(""),$("#Timezone").val("");var t=e.getPlace(),n=t.geometry.location.lat(),i=t.geometry.location.lng();$("#Latitude").val(n),$("#Longitude").val(i);var d=new Date,u="https://maps.googleapis.com/maps/api/timezone/json?location="+n+","+i+"&timestamp="+(d.getTime()/1e3+60*d.getTimezoneOffset())+"&key=AIzaSyCFuOlkFwvEa9kplV3RP7wnbtQHmSvZMsQ",a=new XMLHttpRequest;a.open("GET",u),a.onload=function(){if(200===a.status){var e=JSON.parse(a.responseText);if("OK"==e.status){var t=(e.dstOffset+e.rawOffset)/3600;$("#Timezone").val(t)}}},a.send()})}
$(document).ready(function(){});