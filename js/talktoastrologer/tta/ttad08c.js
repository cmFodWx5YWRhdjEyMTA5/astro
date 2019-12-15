var count=null;var _url=null;$(document).ready(function(){var owl=$('.owl-carousel');owl.owlCarousel({stagePadding:30,margin:10,items:3,slideBy:"3",nav:true,responsive:{0:{items:1},600:{items:4},1000:{items:3}}});PusherImplement();var _callby=localStorage.getItem("CallBy");if(_callby!="Direct"){var _astroid=getCookie("PrediictId");_url=location.pathname;$.ajax({type:"GET",url:"/talktoastrologer/tta/getcallqueuedestimateasync",data:{_astroid:_astroid},success:function(response){if(response.data!=null)
{if(response.data.callStatus=="Progress"&&response.data.queueNumber==0)
{$("#divQueuesticky").show();$("#QueueTxt").text("Call Status:");$("#divQueueNo").text(response.data.callStatus);$("#divWaitTime").hide();$("#btnCallDequeu").hide();$("#divAstrologerName").text(response.data.astrologerName);delete_cookie("hours");delete_cookie("minutes");delete_cookie("seconds");delete_cookie("QueueNo");}
else if(response.data.queueNumber!=0){$("#divQueuesticky").show();localStorage.setItem("CallBy","Queued");setCookie("Astrlog",response.data.astrologerName,1);setCookie("QueueNo",response.data.queueNumber,1);setCookie("IdUser",response.data.queueNumber,1);display=document.querySelector('#strTimer');var time=response.data.waitTime.timeInMinStr.replace("Min","");var sectime=parseInt(time)*60;count=sectime.toString();timer();var _queuetxt=$("#QueueTxt").text();if(_queuetxt=="Call Status:")
{$("#QueueTxt").text("Queue No:");}
$("#divWaitTime").show();$("#btnCallDequeu").show();$("#divQueueNo").text(response.data.queueNumber);$("#divAstrologerName").text(response.data.astrologerName);}
else{$("#divQueuesticky").hide();delete_cookie("hours");delete_cookie("minutes");delete_cookie("seconds");delete_cookie("PrediictId");delete_cookie("Astrlog");delete_cookie("QueueNo");}}
else{$("#divQueuesticky").hide();delete_cookie("hours");delete_cookie("minutes");delete_cookie("seconds");delete_cookie("PrediictId");delete_cookie("Astrlog");delete_cookie("QueueNo");}},failure:function(e){}});}
GetRating();appendSignupUtmParamOp.init();$("input:checkbox").prop("checked",!1),_globalCountryId=$("#hdnFilterCountryId").val();CheckLanguage();$triggered_times=0;});function delete_cookie(name){document.cookie=name+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';};function GetRating(){var elements=document.getElementsByClassName("bar-5");var total=parseInt($("#five").val())+parseInt($("#four").val())+parseInt($("#three").val())+parseInt($("#two").val())+parseInt($("#one").val());var fivepercent=(100*parseFloat($("#five").val()))/total;if(Number.isNaN(fivepercent))
{$(".bar-5").css("width",0+"%");}
else{$(".bar-5").css("width",fivepercent+"%");}
var fourpercent=(100*parseFloat($("#four").val()))/total;if(Number.isNaN(fourpercent))
{$(".bar-4").css("width",0+"%");}
else{$(".bar-4").css("width",fourpercent+"%");}
var threepercent=(100*parseFloat($("#three").val()))/total;if(Number.isNaN(threepercent))
{$(".bar-3").css("width",0+"%");}
else{$(".bar-3").css("width",threepercent+"%");}
var twopercent=(100*parseFloat($("#two").val()))/total;if(Number.isNaN(twopercent))
{$(".bar-2").css("width",0+"%");}
else{$(".bar-2").css("width",twopercent+"%");}
var onepercent=(100*parseFloat($("#one").val()))/total;if(Number.isNaN(onepercent))
{$(".bar-1").css("width",0+"%");}
else{$(".bar-1").css("width",onepercent+"%");}
console.log(fivepercent,fourpercent,threepercent,twopercent,onepercent);}
var input=document.getElementById("SearchAstrologer");var AstroId=null
var Request=null;var PhoneCode=null;var PhoneNumber=null;var currenturl=window.location.pathname;function CheckLanguage()
{$.ajax({type:"POST",url:"/talktoastrologer/tta/checkuserlangugage",success:function(response){if(response.message!="Not InRole")
{if(response.data==null)
{setTimeout("$('#SelectPrimary').modal('show');",3000);$("#SelectSecondary").hide();}}},failure:function(e){}})}
var _primaryLang=null;var _secondaryLang=null;$(function(){$('#primaryDiv div div').click(function(){if($('#primaryDiv div').hasClass('language_box language_box_active')){var test=document.getElementsByClassName('language_box language_box_active')[0].id;var divid="#"+test;var divtext=test.substring(1,test.length);var spantext=divtext.charAt(0).toUpperCase();var spanclass=divtext.toLowerCase()+"_lg";$(divid).removeClass('language_box language_box_active').addClass('language_box');$(divid).empty();$(divid).append('<span class='+'"'+spanclass+'"'+'>'+spantext+'</span>'+divtext);}
$(this).addClass('language_box language_box_active');var text=$(this).text();text=$.trim(text);text=text.substring(1,text.length);_primaryLang=text;$(this).empty();$(this).append("<span class='kannada_lg'><span class='glyphicon glyphicon-ok line47' aria-hidden='true'></span></span>"+text);if(_secondaryLang==null){$("#SelectPrimaryDiv").hide();$("#ContinueButton").hide();$("#SelectSecondary").show();$("#SelectedPrimaryLanguage").text(_primaryLang);}
else{$("#PUnselectedPrimary").hide();$("#PSelectedPrimary").show();$("#PSelectedPrimaryLanguage").text(_primaryLang);$("#PContinueButton").show();}});});$(function(){$('#secondaryDiv div div').click(function(){if($('#secondaryDiv div').hasClass('language_box language_box_active')){var test=document.getElementsByClassName('language_box language_box_active')[1].id;var divid="#"+test;var divtext=test.substring(1,test.length);var spantext=divtext.charAt(0).toUpperCase();var spanclass=divtext.toLowerCase()+"_lg";$(divid).removeClass('language_box language_box_active').addClass('language_box');$(divid).empty();$(divid).append('<span class='+'"'+spanclass+'"'+'>'+spantext+'</span>'+divtext);}
$(this).addClass('language_box language_box_active');var text=$(this).text();text=$.trim(text);text=text.substring(1,text.length);_secondaryLang=text;$(this).empty();$(this).append("<span class='kannada_lg'><span class='glyphicon glyphicon-ok line47' aria-hidden='true'></span></span>"+text);$("#ContinueButton").show();$("#UnselectSecondryHead").hide();$("#SelectedSecondryHead").show();$("#SelectedSecondaryLanguage").text(_secondaryLang);});});function showPrimaryBox()
{$('#SelectSecondary').hide();$('#UnselectedSecondryHead').hide();$('#PSelectedSecondryHead').show();$('#PSelectedSecondaryLanguage').text(_secondaryLang);$('#SelectPrimaryDiv').show();$('#PSelectedPrimary').hide();$('#PUnselectedPrimary').show();}
function showSecondaryBox()
{$('#SelectPrimaryDiv').hide();$('#PSelectedPrimary').hide();$('#SelectSecondary').show();$('#SelectedPrimary').show();$('#UnselectSecondryHead').show();$('#SelectedSecondryHead').hide();$('#SelectedPrimaryLanguage').text(_primaryLang);}
function SaveLanguage()
{if(_primaryLang!=null&&_secondaryLang!=null)
{var dto={};if(_primaryLang=="English")
{dto.PrimaryLanguageId="EN";}
else if(_primaryLang=="Hindi")
{dto.PrimaryLanguageId="HI";}
else if(_primaryLang=="Urdu"){dto.PrimaryLanguageId="UR";}else if(_primaryLang=="Gujarati"){dto.PrimaryLanguageId="GU";}else if(_primaryLang=="Kannada"){dto.PrimaryLanguageId="KN";}else if(_primaryLang=="Malayalam"){dto.PrimaryLanguageId="ML";}else if(_primaryLang=="Odia")
{dto.PrimaryLanguageId="OR";}else if(_primaryLang=="Assamese")
{dto.PrimaryLanguageId="AS";}else if(_primaryLang=="Nepali")
{dto.PrimaryLanguageId="NE";}else if(_primaryLang=="Punjabi")
{dto.PrimaryLanguageId="PA";}else if(_primaryLang=="Sindhi"){dto.PrimaryLanguageId="SD";}else if(_primaryLang=="Bangla")
{dto.PrimaryLanguageId="BN";}else if(_primaryLang=="Telugu")
{dto.PrimaryLanguageId="TE";}else if(_primaryLang=="Marathi")
{dto.PrimaryLanguageId="MR";}else if(_primaryLang=="Tamil")
{dto.PrimaryLanguageId="TA";}
if(_secondaryLang=="English")
{dto.SecondaryLanguageId="EN";}
else if(_secondaryLang=="Hindi")
{dto.SecondaryLanguageId="HI";}
else if(_secondaryLang=="Urdu"){dto.SecondaryLanguageId="UR";}else if(_secondaryLang=="Gujarati"){dto.SecondaryLanguageId="GU";}else if(_secondaryLang=="Kannada"){dto.SecondaryLanguageId="KN";}else if(_secondaryLang=="Malayalam"){dto.SecondaryLanguageId="ML";}else if(_secondaryLang=="Odia")
{dto.SecondaryLanguageId="OR";}else if(_secondaryLang=="Assamese")
{dto.SecondaryLanguageId="AS";}else if(_secondaryLang=="Nepali")
{dto.SecondaryLanguageId="NE";}else if(_secondaryLang=="Punjabi")
{dto.SecondaryLanguageId="PA";}else if(_secondaryLang=="Sindhi"){dto.SecondaryLanguageId="SD";}else if(_secondaryLang=="Bangla")
{dto.SecondaryLanguageId="BN";}else if(_secondaryLang=="Telugu")
{dto.SecondaryLanguageId="TE";}else if(_secondaryLang=="Marathi")
{dto.SecondaryLanguageId="MR";}else if(_secondaryLang=="Tamil")
{dto.SecondaryLanguageId="TA";}
$.ajax({type:"POST",url:"/talktoastrologer/tta/updateuserlangugage",data:dto,success:function(response){if(response.success=="success")
{$("#SelectPrimary").modal('hide');}},failure:function(e){}})}}
function GetLanguageId(languagename)
{var array=[{"languageId":"EN","language":"English"},{"languageId":"HI","language":"Hindi"},{"languageId":"UR","language":"Urdu"},{"languageId":"GU","language":"Gujarati"},{"languageId":"KN","language":"Kannada"},{"languageId":"ML","language":"Malayalam"},,{"languageId":"OR","language":"Odia"},,{"languageId":"AS","language":"Assamese"},{"languageId":"NE","language":"Nepali"},{"languageId":"PA","language":"Punjabi"},{"languageId":"SD","language":"Sindhi"},,{"languageId":"BN","language":"Bangla"},,{"languageId":"TE","language":"Telugu"},{"languageId":"MR","language":"Marathi"},{"languageId":"TA","language":"Tamil"}];var x=array.find(x=>x.language==languagename);return x.languageId;}
function getOnlineAsto()
{$(document).scrollTop($("#top").offset().top);}
function CheckSignup(astroId,Message)
{AstroId=astroId;currenturl=null;var url=window.location.pathname;if(Message!="SignupTab")
{$("#ShowMessage").show();}
else if(Message=="SignupTab")
{currenturl=url;}
$("#registrationModal").modal("show");$("#hdnReturnUrl").val(url);}
function InsuccientPopup(astroId)
{$("#AstroId").val(astroId);$("#insufficentmodal").modal("show");}
function WantRecharge()
{var _astroid=$("#AstroId").val();window.location="/ivrweb/ivrvalidateuser.aspx?astroid="+_astroid;}
function showLogin()
{$("#registrationModal").modal("hide");$("#ttaregistrationmodal").modal("show");}
$('input[type=radio][name=optionsRadios]').change(function(){$('#successMsg').hide();$('#errormsg').hide();if(this.value==='Email'){$('.otpresponsesuccessrmsg').text('');$('.otpresponseerrormsg').text('');$('.resetpaswordmobile').attr("hidden",true)
$("#DivEmailAddress").show();$("#DivMobileNumber").hide();$('#btnForgotPasswordWithEmail').show();$('#btnForgotPasswordWithMobile').hide();}
else if(this.value==='Mobile'){$('.otpresponsesuccessrmsg').text('');$('.otpresponseerrormsg').text('');$("#DivEmailAddress").hide();$('.resetpaswordmobile').attr("hidden",false)
$('#btnForgotPasswordWithEmail').hide();$('#btnForgotPasswordWithMobile').show();}});$('#btnForgotPasswordWithEmail').click(function(){$('#txtPhoneNumber').val('');$("#ddlPhoneCode").val('Phonecode');forgotPasswordOps.SubmitButtonDisabled(this,'ForgotPasswordEmail');return false;});$('#btnForgotPasswordWithMobile').click(function(){$('txtEmailAddress').val('');forgotPasswordOps.SubmitButtonDisabled(this,'ForgotPasswordMobile');return false;});function showSignup()
{$("#registrationModal").modal("show");$("#ttaregistrationmodal").modal("hide");}
function showforgetpassword()
{$("#ttaregistrationmodal").modal("hide");$("#DivMobileNumber").hide();$("#ttaforgetpassword").modal("show");}
function closemodal()
{$("#ShowMessage").hide();location.reload();}
function VerifyOTP()
{var _pagelanguage=$("#language").val();$('.otpresponsesuccessrmsg').text('');$('.otpresponseerrormsg').text('');$('#errormsg').hide();$("#RequiredFieldOTP").hide();$('#successMsg').hide();if($("#OTP").val()==""){$("#RequiredFieldOTP").show();return false;}
var txtotp=$("#OTP").val();var hdnotp=Request;var phoneCode=PhoneCode;var phoneNumber=PhoneNumber;var winlocation;if(txtotp==hdnotp)
{dataLayer.push({'event':'form_submit_otp'});$("#BtnVerify").attr('disabled',true);$.ajax({type:'POST',url:'/talktoastrologer/userprofile/updatephonenumber',data:{_phoneCode:phoneCode,_phoneNumber:phoneNumber,_oTP:txtotp},success:function(response){$('.otpresponseerrormsg').text(response.message);$('#personalDetailValidationSummary').show().text(response.message);$("#VerifyPhoneNumber").hide();$("#MessageBox").show();$("#ttaotpmodal").modal("hide");if(currenturl!=null)
{window.location=currenturl;}
else
{if(AstroId=="null"&&_pagelanguage=="en"){window.location="/talk-to-astrologers"}
else if(AstroId=="null"&&_pagelanguage=="hi")
{window.location="/onlineastrologer"}
else
{window.location="/ivrweb/ivrvalidateuser.aspx?astroid="+AstroId;}}},failure:function(response){$("#BtnVerify").removeAttr("disabled");}});}
else
{$('.otpresponseerrormsg').text("Please Enter Correct OTP.");}}
function ResendOTP(){$('.otpresponsesuccessrmsg').text('');$('.otpresponseerrormsg').text('');$('#errormsg').hide();$("#RequiredFieldOTP").hide();$('#successMsg').hide();$("#BtnResend").attr('disabled',true);_PhoneCode=PhoneCode;_phoneNumber=PhoneNumber;PageURL="";$.ajax({type:'POST',url:'/talktoastrologer/account/resendotp',data:{_phoneCode:_PhoneCode,_phoneNumber:_phoneNumber,_pageUrl:PageURL},success:function(response){if(response){if(response.success){$('.otpresponsesuccessrmsg').text(response.message);$('#errormsg').hide();$('#successMsg').show();$('#successMsg').text(response.message);$('#MessageBox').hide();}else{$('.otpresponseerrormsg').text(response.message);}
$("#BtnResend").removeAttr("disabled");}},error:function(response){$('#VerifyPhoneNumber').show();$('#MessageBox').hide();$('#successMsg').hide();$('#errormsg').show();$('#errormsg').text(response.message);$("#BtnResend").removeAttr("disabled");}});return false;}
var forgotPasswordOps={'SubmitButtonDisabled':function(button,validationgroup){button.disabled=true;button.value='Please wait...';forgotPasswordOps.forgotPasswordWithPhoneNumber(validationgroup);},'forgotPasswordWithPhoneNumber':function(validationgroup){var postJson={"EmailAddressOrPhoneNumber":$("#txtEmailAddress").val(),"PhoneCode":$("#PhoneCode").val(),"PhoneNumber":$("#txtPhoneNumber").val(),"CountryList":null,"CountryId":null,"SelectedOption":validationgroup}
$.ajax({url:'/talktoastrologer/account/forgetpassword',type:'post',data:postJson,success:function(result){if(result.success==true){$('.otpresponseerrormsg').text('');$('.otpresponsesuccessrmsg').text(result.message);setTimeout(function(){afterForgetpassword();},5000)}else{$('.otpresponsesuccessrmsg').text('');$('.otpresponseerrormsg').text(result.message);}
$("#btnForgotPasswordWithEmail").removeAttr("disabled");$("#btnForgotPasswordWithEmail").val('Submit');$("#btnForgotPasswordWithMobile").removeAttr("disabled");$("#btnForgotPasswordWithMobile").val('Submit');},error:function(response){$('#errormsg').show();$('#successMsg').hide();$('#errormsg').text("Error Occurs, please after sometimes.");$("#btnForgotPasswordWithEmail").removeAttr("disabled");$("#btnForgotPasswordWithEmail").val('Submit');$("#btnForgotPasswordWithMobile").removeAttr("disabled");$("#btnForgotPasswordWithMobile").val('Submit');}});return false;}}
function afterForgetpassword()
{$('#ttaforgetpassword').modal('hide');$('#ttaregistrationmodal').modal('show');}
var signInOps={onBegin:function(form){$(form).find("[type='submit']").text("Logging in...");},onSuccess:function(result,form){if(result.success){$(form).find("[type='submit']").text("Logging in...");var _pagelanguage=$("#language").val();if(currenturl!=null)
{window.location=currenturl;}
else{if(AstroId=="null"&&_pagelanguage=="en"){window.location="/talk-to-astrologers"}
else
{window.location="/ivrweb/ivrvalidateuser.aspx?astroid="+AstroId;}}}else{$(form).find("[type='submit']").text("Login");$("#loginValidationSummary").show().text(result.message);return false;}}}
$(function(){var dt=new Date();var year=dt.getFullYear()+10;var range='1920:'+year;$("#PopUpDateOfBirth").datepicker({changeMonth:true,yearRange:range,changeYear:true,dateFormat:'dd MM yy'});});$("#ttapopupRegistrationfrm").submit(function(e){$("#signupbody").hide();if($("#MobileError").hide(),$("#popupSignUpValidationSummary").hide(),$(this).valid()){e.preventDefault();var t=$("#ttapopupRegistrationfrm"),o=$('input[name="__RequestVerificationToken"]',t).val();console.log(o);var n={FirstName:$("#PopUpFirstName").val(),DateOfBirth:$("#PopUpDateOfBirth").val(),PhoneCode:$("#PopUpPhoneCode").val(),PhoneNumber:$("#PopUpPhoneNumber").val(),EmailAddress:$("#PopUpEmailAddress").val(),Password:$("#PopUpPassword").val(),PhoneCode:$("#PopUpPhoneCode").val(),UtmCampaign:$("#PopUpUtmCampaign").val(),UtmSource:$("#PopUpUtmSource").val(),UtmContent:$("#PopUpUtmContent").val(),UtmMedium:$("#PopUpUtmMedium").val(),UtmTerm:$("#PopUpUtmTerm").val(),EncAstroPartnerId:$("#PopUpEncAstroPartnerId").val(),__RequestVerificationToken:o,SignUpType:"PopupRegistration"};if(CountryId=n.PhoneCode.match(/\(([^)]+)\)/)[1],""!=CountryId){var i=new RegExp("^[0-9]{10}$"),r=new RegExp("^[0-9]");if("IN"===CountryId||"US"===CountryId||"CA"===CountryId){if(null==n.PhoneNumber||!i.test(n.PhoneNumber))return $("#MobileError").show(),$("#MobileError").html("Enter 10 digit mobile number"),!1;$("#MobileError").hide()}else{if(!(n.PhoneNumber.length>3&&n.PhoneNumber.length<17&&r.test(n.PhoneNumber)))return $("#MobileError").show(),$("#MobileError").html("Enter your valid mobile number"),!1;$("#MobileError").hide()}}
var a=$("#ttapopupRegistrationfrm").find("[type='submit']").text();$("#ttapopupRegistrationfrm").find("[type='submit']").text("Please wait.."),$("#ttapopupRegistrationfrm").find("[type='submit']").attr("disabled",!0),$.ajax({type:"POST",url:"/talktoastrologer/account/windowsignup",data:n,success:function(e){if(e.success)
{$.ajax({type:'GET',url:'/TalkToAstrologer/Account/TTASendOtp',data:{_phoneCode:e.phoneCode,_phoneNumber:e.data},success:function(result){if(result.success)
{$('.otpresponseerrormsg').text('');$('.otpresponsesuccessrmsg').text('');Request=result.data.hdnOTP;PhoneCode=result.data.hdnPhoneCode;PhoneNumber=result.data.hdnPhoneNumber;$("#registrationModal").modal("hide");$("#ttaotpmodal").modal("show");}}});}
else{$("#popupSignUpValidationSummary").show().text(e.message);$("#ttapopupRegistrationfrm").find("[type='submit']").removeAttr("disabled"),$("#ttapopupRegistrationfrm").find("[type='submit']").text(a)
return false;}},failure:function(e){$("#ttapopupRegistrationfrm").find("[type='submit']").removeAttr("disabled"),$("#ttapopupRegistrationfrm").find("[type='submit']").text(a)}})}})
function GetAstrologerProfile(e){null!=e&&$.ajax({type:"POST",url:"/talktoastrologer/tta/astrologerprofile",data:{_id:ID},success:function(e){window.location=e.redirectUrl},failure:function(e){}})}
function CallNow(e){var _AstroId=e;null!=e&&$.ajax({type:"GET",url:"/talktoastrologer/tta/callnow",data:{AstrologerLoginId:e},success:function(e){(e.Message="Your Phone Number is not Verified. Please Verify.")?($("#MobileNotVerified").show(),window.location=e.redirectUrl):window.location=e.redirectUrl,localStorage.setItem('LastCallId',_AstroId);localStorage.setItem("CallBy","Direct");},failure:function(e){}})}
function CloseFilterSpan(e){$("span[id="+e+"]").remove(),$('input:checkbox[value="'+e+'"]').prop("checked",!1),(filterCount-=1)>=1?$("#ClearAll").show():$("#ClearAll").hide(),RemoveFilter(e)}
function ClearAllFilter(){;$("#FilterList").find("span").remove(),$("input[type=checkbox]").prop("checked",!1),$("#ClearAll").hide(),_globalparam=null,_globalLanguage=null,_globalrating=null,_globalMinExperince=null,_globalMaxExperince=null,_globalMinPrice=null,_globalMaxPrice=null,_globalCountry=null,_globalSearch=null,text=null,chkStatus=null,_globalPageSize=12,_globalPageNumber=1,chboxValue=null,citycode=null,filterCount=0,ratingFilter=null,priceFilter=null;var e={CountryId:null,DltdAstroCategoryId:_globalparam,DltdAstroTopicId:null,DltdCityId:_globalCountryId,DltdLanguageId:_globalLanguage,MinAverageRating:_globalrating,MinExperienceYear:_globalMinExperince,MinPerMinutePrice:_globalMinPrice,MaxExperienceYear:_globalMaxExperince,MaxPerMinutePrice:_globalMaxPrice,PageNumber:_globalPageNumber,PageSize:_globalPageSize,PhoneStatus:null,SearchText:_globalSearch};$.ajax({type:"GET",url:"/talktoastrologer/tta/filterdata",data:e,success:function(e){$("#partial").html(e)},failure:function(e){}})}
function showlabel(e,l,a){0==l?($("span[id="+a+"]").remove(),$('input:checkbox[value="'+a+'"]').prop("checked",!1),0==(filterCount-=1)?$("#ClearAll").hide():$("#ClearAll").show(),RemoveFilter(a)):($("#ClearAll").show(),$("#FilterList").show(),$("<span  id="+a+' class="btn btn-default filterAd margin_Rgt10"><span>'+e+' </span><a href="#" class="font14" id='+e+' aria-hidden="true" onclick="CloseFilterSpan(\''+a+"')\" >X</a></span>").insertBefore("#ClearAll"),(filterCount+=1)>=1?$("#ClearAll").show():$("#ClearAll").hide())}
null!=input&&input.addEventListener("keyup",function(e){(e.preventDefault(),13===e.keyCode)&&GetAstrologerSummary($("#SearchAstrologer").val())});var _globalparam=null,_globalLanguage=null,_globalrating=null,ratingFilter=null,_globalMinExperince=null,_globalMaxExperince=null,_globalMinPrice=null,_globalMaxPrice=null,_globalCountry=null,_globalSearch=null,text=null,chkStatus=null,_globalPageSize=12,_globalPageNumber=1,chboxValue=null,citycode=null,filterCount=0,priceMinFilter=null,priceMaxFilter=0,_globalCountryId=null,_pageSize=0,_TotalPage=0,container=document.createElement("div");function RemoveFilter(e){if(e.includes("Expertise")&&(_globalPageSize=12,null!=_globalparam)){if(_globalparam.includes(e))return;if(e=e.split("-")[1],_globalparam.includes(","))(l=_globalparam.split(",")).splice($.inArray(e,l),1),_globalparam=l.length>1?(_globalparam=l.join(", ")).replace(/\s/g,""):l[0];else _globalparam=_globalparam.replace(e,"")}
if(e.includes("Language")&&(_globalPageSize=12,null!=_globalLanguage)){if(_globalLanguage.includes(e))return;if(e=e.split("-")[1],_globalLanguage.includes(","))(l=_globalLanguage.split(",")).splice($.inArray(e,l),1),_globalLanguage=l.length>1?(_globalLanguage=l.join(", ")).replace(/\s/g,""):l[0];else _globalLanguage=_globalLanguage.replace(e,"")}
if(e.includes("Rating")&&(_globalPageSize=12,null!=_globalrating)){if(_globalrating.includes(e))return;if(e=e.split("-")[1],ratingFilter.includes(","))(l=ratingFilter.split(",")).splice($.inArray(e,l),1),l.length>1?(_globalrating=(_globalrating=l.join(", ")).replace(/\s/g,"")).trim():_globalrating=l[0];else _globalrating=_globalrating.replace(e,"")}
var l;(e.includes("Experience")&&(_globalPageSize=12,_globalMaxExperince=0,_globalMinExperince=0),e.includes("Price"))&&(_globalPageSize=12,e=e.split("-")[1],(l=priceMinFilter.split(",")).splice($.inArray(e,l),1),2==(l=l.map(Function.prototype.call,String.prototype.trim)).length?"Upto20"==l[0]&&"Between20"==l[1]?(_globalMinPrice=0,_globalMaxPrice=50,priceMinFilter=l.join(", ")):"Upto20"==l[0]&&"Above50"==l[1]?(_globalMinPrice=0,_globalMaxPrice=null,priceMinFilter=l.join(", ")):"Between20"==l[0]&&"Above50"==l[1]?(_globalMinPrice=20,_globalMaxPrice=null,priceMinFilter=l.join(", ")):"Between20"==l[0]&&"Upto20"==l[1]?(_globalMinPrice=0,_globalMaxPrice=50,priceMinFilter=l.join(", ")):"Above50"==l[0]&&"Upto20"==l[1]?(_globalMinPrice=null,_globalMaxPrice=null,priceMinFilter=l.join(", ")):"Above50"==l[0]&&"Between20"==l[1]?(_globalMinPrice=20,_globalMaxPrice=null,priceMinFilter=l.join(", ")):(_globalMinPrice=null,_globalMaxPrice=null):1==l.length?"Above50"==l[0]?(_globalMinPrice=50,_globalMaxPrice=0,priceMinFilter=l.join(", "),priceMinFilter=l.join(", ")):"Between20"==l[0]?(_globalMinPrice=20,_globalMaxPrice=50,priceMinFilter=l.join(", "),priceMinFilter=l.join(", ")):"Upto20"==l[0]&&(_globalMinPrice=0,_globalMaxPrice=20,priceMinFilter=l.join(", ")):(_globalMinPrice=null,_globalMaxPrice=null));FilterResult()}
function FilterResult(){debugger;if($("#hdnFilterCategoryId").val()!=null&&$("#hdnFilterCategoryId").val()!="")
{var category=_globalparam.split(",");if(category.length==1)
{_globalparam=_globalparam+","+$("#hdnFilterCategoryId").val();}}
var e={CountryId:null,DltdAstroCategoryId:_globalparam,DltdAstroTopicId:null,DltdCityId:_globalCountryId,DltdLanguageId:_globalLanguage,MinAverageRating:_globalrating,MinExperienceYear:_globalMinExperince,MinPerMinutePrice:_globalMinPrice,MaxExperienceYear:_globalMaxExperince,MaxPerMinutePrice:_globalMaxPrice,PageNumber:_globalPageNumber,PageSize:_globalPageSize,PhoneStatus:null,SearchText:_globalSearch};$.ajax({type:"GET",url:"/talktoastrologer/tta/filterdata",data:e,success:function(e){$("#partial").html(e)},failure:function(e){}})}
function GetAstrologerSummary(e){_globalSearch=e.toLowerCase(),FilterResult()}
$("input[type='checkbox']").on("change",function(){var e=$(this).val(),l=$("label[for="+e+"]").text();if(l=l.replace(/\s/g,""),chboxValue=e,$(this).is(":checked")){if(chkStatus=!0,$("#hdnPageSize").val(12),showlabel(l,chkStatus,e),e.includes("Expertise"))
if(_globalPageSize=12,e=e.split("-")[1],null!=_globalparam){if((_globalparam=_globalparam.replace(/^,/,"")).includes(e))return;(_globalparam=_globalparam+","+e).trim()}else _globalparam=e;e.includes("Language")&&(_globalPageSize=12,e=e.split("-")[1],_globalLanguage=null!=_globalLanguage?(_globalLanguage=_globalLanguage.replace(/^,/,""))+","+e:e),e.includes("Rating")&&(_globalPageSize=12,e=e.split("-")[1],ratingFilter=null==ratingFilter?e:ratingFilter+","+e,null!=_globalrating?"3"!=(_globalrating=_globalrating.replace(/^,/,""))&&(_globalrating=null,_globalrating=e):_globalrating=e),e.includes("Experience")&&(_globalPageSize=12,e=e.split("-")[1],null==_globalMinExperince&&null!=_globalMaxExperince||(e.includes("Upto10")?(_globalMinExperince=0,_globalMaxExperince=10):e.includes("Upto20")?(_globalMinExperince=0,_globalMaxExperince=20):e.includes("Above20")&&(_globalMinExperince=20,_globalMaxExperince=null))),e.includes("Price")&&(_globalPageSize=12,(e=e.split("-")[1]).includes("Upto20")?(_globalMinPrice=0,_globalMaxPrice=20,null!=priceMinFilter?priceMinFilter+=",Upto20":priceMinFilter="Upto20"):e.includes("Between20")?(_globalMinPrice=20,_globalMaxPrice=50,null!=priceMinFilter?priceMinFilter+=",Between20":priceMinFilter="Between20"):e.includes("Above50")&&(_globalMinPrice=50,_globalMaxPrice=null,null!=priceMinFilter?priceMinFilter+=",Above50":priceMinFilter="Above50")),FilterResult()}else showlabel(l,chkStatus=!1,chboxValue)});var divs=["Default","Gurgaon","Noida","Mumbai","Kolkata","Bangalore","Pune","Lucknow","Chennai","Hyderabad","Nagpur","India"],visibleDivId=null,slug=null;citycode=null;var AstroyogiBtnLoader={"showLoader":function(btnObj,delayed,changedText){btnObj.value=changedText?changedText:"Please Wait...";if(delayed){setTimeout(function(){disbleBtn(btnObj)},1000);}else{btnObj.disabled=true;}
return true;},"hideLoader":function(btnId,btnTxt){$("#"+btnId).prop("disabled",false);$("#"+btnId).val(btnTxt);}}
function NextPage(){$("#ViewMore").text("Loading...");_pageSize=$("#hdnPageSize").val(),_TotalPage=$("#hdnTotalRecord").val(),_globalCountryId=$("#hdnFilterCountryId").val();if(parseInt(_pageSize)<parseInt(_TotalPage))
{$("#hdnPageSize").val(_pageSize=+_pageSize+12);_globalPageNumber=parseInt($("#hdnPageNumber").val())+1;$("#hdnPageNumber").val(_globalPageNumber);FilterResult();}
else
{$("#ViewMore").hide();}}
function ReviewViewMore(){var e=$("#hdnReviewPageNumber").val(),l=$("#hdnReviewTotalPageSize").val(),a=$("#hdnAstrologerid").val();q=parseInt($("#hdnCurentPageNumber").val());k=parseInt($("#MaxPageSize").val());if(q==0){q=1;$("#hdnCurentPageNumber").val(1)}
if(4==e)var i=1;else i+=1;e!=l&&(_globalPageSize=e=+e+4,_globalPageNumber=q,$("input[id=hdnReviewPageNumber]").val(e),$("input[id=hdnReviewTotalPageSize]").val(l)),e==l?document.getElementById("ReviewButton").style.display="none":$("#ReviewButton").show(),$.ajax({type:"GET",url:"/talktoastrologer/tta/_astrologerreviews",data:{_PageSize:e,_PageNumber:q+1,AstrologerLoginId:a,_maxPageLimit:k},success:function(e){$("#MAinPartial").hide();var _pagNumber=$(e).find("#hdnCurentPageNumber1").attr("value");var _showbuton=$(e).find("#ShowViewButton2").attr("value");$("#hdnCurentPageNumber").val(parseInt(_pagNumber));if(_showbuton=="false")
{$("#btnShowMore").hide();}
$("#AppendReviewPartial").append(e)},failure:function(e){}})}
function NotifyMe(){$("#NotifyMeModal").modal("show")}
function RemoveNotifyMe(){$("#RemoveNotifyMeModal").modal("show");}
function ConfirmNotifyMe(){;var e=$("#hdnAstrologerid").val();$.ajax({type:"POST",url:"/talktoastrologer/tta/toggleusernotifyme",data:{AstroId:e},success:function(e){e.success&&($("#OnNotify").hide(),$("#OffNotify").show(),$("#NotifyButton").hide(),location.reload())},failure:function(e){}})}
function DenyNotifyMe(){var e=$("#hdnAstrologerid").val();$.ajax({type:"POST",url:"/talktoastrologer/tta/toggleusernotifyme",data:{AstroId:e},success:function(e){e.success&&($("#OnNotify").show(),$("#OffNotify").hide(),$("#RemoveNotify").hide(),location.reload())},failure:function(e){}})}
function PostLogin(e){$('#lblMsg').hide();$("#loginPopupModal").modal("show");$("#loginbannerimage").addClass("b-lazy b-loaded");}
function SubmitReview(){var e=$("#hdnAstrologerid").val(),l=$("#ReviewTextbox").val(),a=_reviewrating;$("#GuideText").hide(),$.ajax({type:"POST",url:"/talktoastrologer/tta/addreview",data:{_AstroId:e,_review:l,_rating:a},success:function(e){e.success?(location.reload(),$("#lblSuccess").show().text("Thanks!"),$("#Reviewpartial").html(e)):$("#lblDanger").show().text(e.message)},failure:function(e){}})}
var _reviewrating=null,__slice=[].slice;!function(e,l){var a;a=function(){function l(l,a){var i,t,n=this;this.options=e.extend({},this.defaults,a),this.$el=l,t=this.defaults;for(i in t)t[i],null!=this.$el.data(i)&&(this.options[i]=this.$el.data(i));this.createStars(),this.syncRating(),this.$el.on("mouseover.starrr","span",function(e){return n.syncRating(n.$el.find("span").index(e.currentTarget)+1)}),this.$el.on("mouseout.starrr",function(){return n.syncRating()}),this.$el.on("click.starrr","span",function(e){return n.setRating(n.$el.find("span").index(e.currentTarget)+1)}),this.$el.on("starrr:change",this.options.change)}
return l.prototype.defaults={rating:void 0,numStars:5,change:function(e,l){}},l.prototype.createStars=function(){var e,l,a;for(a=[],e=1,l=this.options.numStars;1<=l?e<=l:e>=l;1<=l?e++:e--)a.push(this.$el.append("<span class='glyphicon .glyphicon-star-empty'></span>"));return a},l.prototype.setRating=function(e){return this.options.rating===e&&(e=void 0),this.options.rating=e,this.syncRating(),_reviewrating=e,this.$el.trigger("starrr:change",e)},l.prototype.syncRating=function(e){var l,a,i,t;if(e||(e=this.options.rating),e)
for(l=a=0,t=e-1;0<=t?a<=t:a>=t;l=0<=t?++a:--a)this.$el.find("span").eq(l).removeClass("glyphicon-star-empty").addClass("glyphicon-star");if(e&&e<5)
for(l=i=e;e<=4?i<=4:i>=4;l=e<=4?++i:--i)this.$el.find("span").eq(l).removeClass("glyphicon-star").addClass("glyphicon-star-empty");if(!e)return this.$el.find("span").removeClass("glyphicon-star").addClass("glyphicon-star-empty")},l}(),e.fn.extend({starrr:function(){var l,i;return i=arguments[0],l=2<=arguments.length?__slice.call(arguments,1):[],this.each(function(){var t;if((t=e(this).data("star-rating"))||e(this).data("star-rating",t=new a(e(this),i)),"string"==typeof i)return t[i].apply(t,l)})}})}(window.jQuery,window),$(function(){return $(".starrr").starrr()}),$(document).ready(function(){$("#stars").on("starrr:change",function(e,l){$("#count").html(l)}),$("#stars-existing").on("starrr:change",function(e,l){$("#count-existing").html(l)})});var socialSignInOps={init:function(){var _firebasec=JSON.parse(localStorage.getItem('firebasecredentials'));if(_firebasec==null)
{$.ajax({type:'GET',url:'/getfirebasekey/getfirebasekeycredentials',dataType:"json",success:function(result){var config={apiKey:result.firebaseApiKey,authDomain:result.firebaseAuthDomain,databaseURL:result.firebaseDatabaseURL,storageBucket:result.firebaseStorageBucket,messagingSenderId:result.firebaseMessagingSenderId,};var _firebasedata=JSON.stringify(config);localStorage.setItem('firebasecredentials',_firebasedata);if(!firebase.apps.length){firebase.initializeApp(config);}},failure:function(response){}});}
else
{if(!firebase.apps.length){firebase.initializeApp(_firebasec);}}},facebookSignIn:function(){var provider=new firebase.auth.FacebookAuthProvider();firebase.auth().signInWithPopup(provider).then(function(result){firebase.auth().currentUser.getIdToken(true).then(function(idToken){socialSignInOps.socialSignIn(idToken);}).catch(function(error){});var user=result.user;}).catch(function(error){var errorCode=error.code;var errorMessage=error.message;$("#lblMsg").show();$("#lblMsg").text(errorMessage);var email=error.email;var credential=error.credential;});},googleSignIn:function(){var provider=new firebase.auth.GoogleAuthProvider();provider.addScope('https://www.googleapis.com/auth/contacts.readonly');firebase.auth().signInWithPopup(provider).then(function(result){var token=result.credential.accessToken;var idtoken=result.credential.idToken;socialSignInOps.socialSignIn(idtoken);var user=result.user;}).catch(function(error){var errorCode=error.code;var errorMessage=error.message;$("#lblMsg").show();$("#lblMsg").text(errorMessage);var email=error.email;var credential=error.credential;});},socialSignIn:function(idToken){$("#hdnToken").val(idToken);$("#btnSocialLogin").click();$.ajax({url:'/talktoastrologer/account/socialsignin',type:'post',data:{fireBaseToken:idToken},success:function(result){if(result.success){closemodal();}else{$('#loginValidationSummary').show().text(result.message);}}});AstroyogiUiLoaderOperations.showAstroyogiLoaderfn();}}
var socialSignUpOps={init:function(){var _firebasec=JSON.parse(localStorage.getItem('firebasecredentials'));if(_firebasec==null)
{$.ajax({type:'GET',url:'/getfirebasekey/getfirebasekeycredentials',dataType:"json",success:function(result){config={apiKey:result.firebaseApiKey,authDomain:result.firebaseAuthDomain,databaseURL:result.firebaseDatabaseURL,storageBucket:result.firebaseStorageBucket,messagingSenderId:result.firebaseMessagingSenderId,};var _firebasedata=JSON.stringify(config);localStorage.setItem('firebasecredentials',_firebasedata);if(!firebase.apps.length){firebase.initializeApp(config);}},failure:function(response){}});}
else
{if(!firebase.apps.length){firebase.initializeApp(_firebasec);}}},facebookSignIn:function(){var provider=new firebase.auth.FacebookAuthProvider();provider.addScope('email');firebase.auth().signInWithPopup(provider).then(function(result){firebase.auth().currentUser.getIdToken(true).then(function(idToken){var user=result.user;$("#PopUpSocialName").val(result.user.displayName);$("#PopUpSocialEmail").val(result.user.email);socialSignUpOps.socialSignUp(idToken);}).catch(function(error){});var user=result.user;}).catch(function(error){var errorCode=error.code;var errorMessage=error.message;document.getElementById('popupSignUpValidationSummary').style.display="block";$("#popupSignUpValidationSummary").text(errorMessage);var email=error.email;var credential=error.credential;});},googleSignIn:function(){var provider=new firebase.auth.GoogleAuthProvider();provider.addScope('https://www.googleapis.com/auth/contacts.readonly');firebase.auth().signInWithPopup(provider).then(function(result){firebase.auth().currentUser.getIdToken(true).then(function(idToken){var user=result.user;$("#PopUpSocialName").val(result.user.displayName);$("#PopUpSocialEmail").val(result.user.email);socialSignUpOps.socialSignUp(idToken);}).catch(function(error){});var user=result.user;}).catch(function(error){var errorCode=error.code;var errorMessage=error.message;document.getElementById('signUpValidationSummary').style.display="block";$("#signUpValidationSummary").text(errorMessage);var email=error.email;var credential=error.credential;});},socialSignUp:function(idToken){$("#Token").val(idToken);document.getElementById('signUp').style.display="none";document.getElementById('socialSignUp').style.display="block";}}
$("#socialSignUpfrm").submit(function(event){event.preventDefault();var socialMobileNo=$("#PopUpSocialMobile").val();var socialPhoneCode=$("#PopUpSocialPhoneCode").val();CountryId=socialPhoneCode.match(/\(([^)]+)\)/)[1];if(CountryId!=""){var pattern=new RegExp("^[0-9]{10}$");var othercountrypattern=new RegExp("^[0-9]");if(CountryId==="IN"||CountryId==="US"||CountryId==="CA"){if(socialMobileNo!=null&&pattern.test(socialMobileNo)){$('#SocialSignUpMobileError').hide();}else{$('#SocialSignUpMobileError').show();$('#SocialSignUpMobileError').html("Enter your 10 digit mobile number");setTimeout(function(){$('div.g-recaptcha').hide();},0);return false;}}
else{if(socialMobileNo.length>3&&socialMobileNo.length<17&&othercountrypattern.test(socialMobileNo)){$('#SocialSignUpMobileError').hide();}
else{$('#SocialSignUpMobileError').show();$('#SocialSignUpMobileError').html("Enter your valid mobile number");setTimeout(function(){$('div.g-recaptcha').hide();},0);return false;}}}
var config={PopUpSocialName:$("#PopUpSocialName").val(),PopUpSocialEmail:$("#PopUpSocialEmail").val(),PopUpSocialMobile:$("#PopUpSocialMobile").val(),Country:$('#PopUpPhoneCode :selected').val(),PopUpEncAstroPartnerId:$("#PopUpEncAstroPartnerId").val(),Token:$("#Token").val(),SignUpType:"RegistrationPage"};$.ajax({type:'POST',url:'/talktoastrologer/account/ttapopupsocialsignup',dataType:"json",data:config,success:function(response){if(response.success){$.ajax({type:'GET',url:'/TalkToAstrologer/Account/TTASendOtp',data:{_phoneCode:response.phonecode,_phoneNumber:response.phonenumber},success:function(result){if(result.success)
{$('.otpresponseerrormsg').text('');$('.otpresponsesuccessrmsg').text('');Request=result.data.hdnOTP;PhoneCode=result.data.hdnPhoneCode;PhoneNumber=result.data.hdnPhoneNumber;$("#registrationModal").modal("hide");$("#ttaotpmodal").modal("show");}}});}else{$('#socialSignUpValidationSummary').show().text(response.message);}},failure:function(response){}});});var appendSignupUtmParamOp={init:function(){$.when(astroyogiUtmParamOps.utmParamSetStat).then(function(){var utmParam=astroyogiUtmParamOps.getUtmParam();if(utmParam==null){return;}
$("#PopUpUtmSource").val(utmParam.utmSource);$("#PopUpUtmCampaign").val(utmParam.utmCampaign);$("#PopUpUtmContent").val(utmParam.utmContent);$("#PopUpUtmMedium").val(utmParam.utmMedium);$("#PopUpUtmTerm").val(utmParam.utmTerm);});}}
function OpenDetailPopup()
{$("#userDetailCallPopupModal").modal("show");}
function Skip()
{$("#userDetailCallPopupModal").modal("hide");$("#btntrueData").show();$("#btnfalseData").hide();}
$(function(){var dt=new Date();var year=dt.getFullYear()+10;var range='1920:'+year;$("#DateOfBirth").datepicker({changeMonth:true,yearRange:range,changeYear:true,dateFormat:'dd MM yy'});});var googlihitcheck=0;$('#PopupBirthLocation').keyup(function(){if($("#PopupBirthLocation").val().length==3&&googlihitcheck==0){$.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCWFvWQ9BYo6UBtX0hA8QxSv-wq1485ttE&libraries=places',function()
{googlihitcheck=1;initiate();});}});function initiate(){var options={types:['(cities)']};var places=new google.maps.places.Autocomplete(document.getElementById("PopupBirthLocation"),options);google.maps.event.addListener(places,'place_changed',function(){var place=places.getPlace();var address=place.formatted_address;var city=getCity(place);var state=getState(place);var country=getCountry(place);var locality=getLocality(place);$('#HdnPlaceId').val(place.place_id);$('#BirthCountry').val(country);$('#BirthState').val(state);if(locality){$('#BirthCity').val(locality);}
else{$('BirthCity').val(city);}
$('#HdnBirthCountry').val(country);$('#HdnBirthState').val(state);if(locality){$('#HdnBirthCity').val(locality);}else{$('#HdnBirthCity').val(city);}});}
function getCity(place){var COMPONENT_TEMPLATE={administrative_area_level_2:'short_name'},state=getAddrComponent(place,COMPONENT_TEMPLATE);return state;}
function getAddrComponent(place,componentTemplate){var result;if(!isGooglePlace(place))
return;for(var i=0;i<place.address_components.length;i++){var addressType=place.address_components[i].types[0];if(componentTemplate[addressType]){result=place.address_components[i][componentTemplate[addressType]];return result;}}
return;}
function isGooglePlace(place){if(!place)
return false;return!!place.place_id;}
function getState(place){var COMPONENT_TEMPLATE={administrative_area_level_1:'long_name'},state=getAddrComponent(place,COMPONENT_TEMPLATE);return state;}
function getLocality(place){var COMPONENT_TEMPLATE={locality:'long_name'},city=getAddrComponent(place,COMPONENT_TEMPLATE);return city;}
function getSubLocality(place){var COMPONENT_TEMPLATE={sublocality_level_1:'long_name'},sublocality=getAddrComponent(place,COMPONENT_TEMPLATE);return sublocality;}
function getState(place){var COMPONENT_TEMPLATE={administrative_area_level_1:'long_name'},state=getAddrComponent(place,COMPONENT_TEMPLATE);return state;}
function getCountry(place){var COMPONENT_TEMPLATE={country:'long_name'},country=getAddrComponent(place,COMPONENT_TEMPLATE);return country;}
function SetBirthDetails(parameter){if(parameter=="Birth"){if($('#HdnBirthCountry').val()==null||$('#HdnBirthState').val()==null||$('#HdnBirthCity').val()==null){$('#BirthDetailValidationSummary').show().text("Please enter valid Location having City ,State ,Country.");return;}
else{$("#btnClick").text("PLEASE WAIT...");var minutes=$('#Minutes').val();var hours=$('#Hours').val();var DOB=$('#DateOfBirth').val()+' '+$('#Hours').val()+':'+$('#Minutes').val()+':00 '+$('#Meridiem').val();var placeId=$('#HdnPlaceId').val();var _param=placeId+'Date:'+DOB;$.ajax({type:'GET',url:'/talktoastrologer/account/setbirthdetails',data:{PlaceId:placeId,DateOfBirth:DOB},success:function(response){$("#btnClick").text("Updated");$('#popupUserProfileCallValidationSummary').show().text(response.message);$("#userDetailCallPopupModal").modal("hide");$("#btntrueData").show();$("#btnfalseData").hide();},failure:function(response){}});}}
else if(parameter=="PresentLocation"){if($('#HdnAddressCountry').val()==null||$('#HdnAddressState').val()==null||$('#HdnAddressCity').val()==null){$('#presentLocationValidationSummary').show().text("Please enter valid Location having City ,State ,Country.");return;}
else{$("#Button1").text("PLEASE WAIT...");var minutes=$('#Minutes').val();var hours=$('#Hours').val();var DOB=$('#DateOfBirth').val()+' '+$('#Hours').val()+':'+$('#Minutes').val()+':00 '+$('#Meridiem').val();var placeId=$('#HdnAddressPlaceId').val();$.ajax({type:'GET',url:'/talktoastrologer/userprofile/setbirthdetails',dataType:"json",data:{PlaceId:placeId},success:function(response){if(response.success==true)
{$('#popupUserProfileCallValidationSuccessSummary').show().text("Location Updated Successfully.");$("#userDetailCallPopupModal").modal("hide");}},failure:function(response){}});}}}
function ExplorerMore()
{$("#insufficentmodal").modal("hide");}
function ClaimLoyalityPoints()
{$.ajax({type:'GET',url:'/talktoastrologer/tta/claimuserfreeloylatybonusasyn',dataType:"json",success:function(response){if(response.success==true)
{$("#loyalitysignupmodal").modal("show");}},failure:function(response){}});}
function LoyalityClose()
{location.reload();}
var AstroId=null;function phoneStausClickEvent(_astroId)
{AstroId=_astroId;$.ajax({type:'GET',url:'/talktoastrologer/tta/phonestatusresult',dataType:"json",data:{astroid:_astroId},success:function(response){if(response.success==true)
{var lang=$("#language").val();if(response.data.error==null&&response.data.callQueuedEstimate!=null)
{$("#QueingModal").modal("show");$("#Error123").hide();$("#Error122").hide();$("#Error121").hide();$("#Error124").hide();$("#Error104").hide();$("#divWarningCancelQueue").hide();$("#divJoinQueue").hide();$("#divDeQueueStatus").hide();$("#divdequeue").hide();$("#divErrorCode106").hide();$("#ErrorNull").show();$("#AstrologID").val(AstroId);if(lang=="hi")
{$("#successmsgQueue").html("आप कतार में "+'<span class="GrayColor">'+response.data.callQueuedEstimate.queueNumber+'</span>'+" स्थान पर हैं और आपका प्रतीक्षा समय लगभग "+'<span class="GrayColor">'+response.data.callQueuedEstimate.waitTime.timeInMinStr+"</span>"+" मिनट है");$("#baldetailstext").html("आपका करंट बैलेंस है "+'<span class="GrayColor">'+response.data.estimate.userWallet.amount.valueStr+'</span>'+" और इससे आप बात कर सकते हैं "+'<span class="GrayColor">'+response.data.estimate.maxDuration+'</span>'+" के लिए");}
else{$("#successmsgQueue").html("Your queue list no. is "+'<span class="GrayColor">'+response.data.callQueuedEstimate.queueNumber+'</span>'+" and maximum wait time is "+'<span class="GrayColor">'+response.data.callQueuedEstimate.waitTime.timeInMinStr+"</span>"+" Mins");$("#baldetailstext").html("Your current balance is "+'<span class="GrayColor">'+response.data.estimate.userWallet.amount.valueStr+'</span>'+" and maximum talk time is "+'<span class="GrayColor">'+response.data.estimate.maxDuration+'</span>');}}
else if(response.data.error==null&&response.data.callQueuedEstimate==null)
{window.location="/ivrweb/ivrvalidateuser.aspx?astroid="+_astroId;}
else if(response.data.error.errorCode==121)
{$("#QueingModal").modal("show");$("#Error123").hide();$("#Error122").hide();$("#Error124").hide();$("#divWarningCancelQueue").hide();$("#divJoinQueue").hide();$("#divDeQueueStatus").hide();$("#divdequeue").hide();$("#divErrorCode106").hide();$("#ErrorNull").hide();$("#Error104").hide();$("#Error121").show();var imgsrc="https://images.astroyogi.com/english/astrologer/profileimage/"+response.data.ongoingQueuedEstimate.profileImage;$("#imgQueuedAstroLink").attr('src',imgsrc);$("#queuedAstroName").text(response.data.ongoingQueuedEstimate.astrologerName);var newastrosrc="https://images.astroyogi.com/english/astrologer/profileimage/"+response.data.profileImage;$("#imgNewLineupAstro").attr('src',newastrosrc);$("#spanNewLineupAstroName").text(response.data.astrologerName);$("#RequestAstroId").val(response.data.callQueuedEstimate.astrologerLoginId);$("#AstrologID").val(response.data.ongoingQueuedEstimate.astrologerLoginId);if(response.data.callQueuedEstimate==null)
{$("#divnewJoinedAstroLine").text("Want to connect an instant call with");$("#btnerror121CallNow").show();}
else{$("#divnewJoinedAstroLine").text("Still want to join new queue for New")
$("#btnerror121JoinQueue").show();}}
else if(response.data.error.errorCode==105)
{$("#insufficentmodal").modal("show");$("#Message3").show().text(response.data.error.userMessage);}
else if(response.data.error.errorCode==104)
{$("#QueingModal").modal("show");$("#Error123").hide();$("#Error124").hide();$("#Error122").hide();$("#divWarningCancelQueue").hide();$("#divJoinQueue").hide();$("#divDeQueueStatus").hide();$("#divdequeue").hide();$("#divErrorCode106").hide();$("#ErrorNull").hide();$("#Error121").hide();$("#Error104").show();$("#errormsg104Queue").text(response.data.error.userMessage);}
else if(response.data.error.errorCode==122)
{$("#QueingModal").modal("show");$("#Error123").hide();$("#Error124").hide();$("#divWarningCancelQueue").hide();$("#divJoinQueue").hide();$("#divDeQueueStatus").hide();$("#divdequeue").hide();$("#divErrorCode106").hide();$("#ErrorNull").hide();$("#Error104").hide();$("#Error121").hide();$("#Error122").show();$("#txterror122").text("Astrologer queue Limit has been exceeded. Please try another one.");}
else if(response.data.error.errorCode==123)
{$("#QueingModal").modal("show");$("#Error124").hide();$("#divWarningCancelQueue").hide();$("#divJoinQueue").hide();$("#divDeQueueStatus").hide();$("#divdequeue").hide();$("#divErrorCode106").hide();$("#ErrorNull").hide();$("#Error104").hide();$("#Error121").hide();$("#Error122").hide();$("#Error123").show();$("#error123msg").text(response.data.error.message);}
else if(response.data.error.errorCode==124)
{$("#QueingModal").modal("show");$("#divWarningCancelQueue").hide();$("#divJoinQueue").hide();$("#divDeQueueStatus").hide();$("#divdequeue").hide();$("#divErrorCode106").hide();$("#ErrorNull").hide();$("#Error104").hide();$("#Error121").hide();$("#Error122").hide();$("#Error123").hide();$("#Error124").show();var imgsrc="https://images.astroyogi.com/english/astrologer/profileimage/"+response.data.ongoingQueuedEstimate.profileImage;$("#img124QueuedAstroLink").attr('src',imgsrc);$("#queued124AstroName").text(response.data.ongoingQueuedEstimate.astrologerName);var newastrosrc="https://images.astroyogi.com/english/astrologer/profileimage/"+response.data.profileImage;$("#img124NewLineupAstro").attr('src',newastrosrc);$("#spanNew124LineupAstroName").text(response.data.astrologerName);$("#RequestAstroId").val(_astroId);$("#AstrologID").val(response.data.ongoingQueuedEstimate.astrologerLoginId);}}},failure:function(response){}});}
function JoinQueue()
{var _astroId=$("#AstrologID").val();$.ajax({type:'GET',url:'/talktoastrologer/tta/joinphoneconsultqueueasync',dataType:"json",data:{_astroid:_astroId},success:function(response){if(response.success==true)
{if(response.data!=null)
{$("#divWarningCancelQueue").hide();$("#divDeQueueStatus").hide();$("#divdequeue").hide();$("#divErrorCode106").hide();$("#ErrorNull").hide();$("#Error104").hide();$("#Error121").hide();$("#Error122").hide();$("#Error123").hide();$("#Error124").hide();$("#divJoinQueue").show();$("#txtjoinQueue").text(response.message);$("#divQueuesticky").show();var _queuetxt=$("#QueueTxt").text();if(_queuetxt=="Call Status:")
{$("#QueueTxt").text("Queue No:");}
$("#divWaitTime").show();$("#btnCallDequeu").show();$("#divAstrologerName").text(response.data.astrologerName);localStorage.setItem("CallBy","Queued");var hms=response.data.WaitTime;var a=hms.split(':');var minutes=(+a[0])*60+(+a[1]);minutes=minutes*60;display=document.querySelector('#strTimer');setCookie("PrediictId",_astroId,1);count=minutes.toString();timer();$("#divQueueNo").text(response.data.QueueNumber);$("#divAstrologerName").text(response.data.AstrologerName);PusherImplement();}}},failure:function(response){}});}
function Dequeue()
{var _astroId=getCookie("PrediictId");$.ajax({type:'GET',url:'/talktoastrologer/tta/dequeuephoneconsultqueueasync',dataType:"json",data:{astroid:_astroId},success:function(response){if(response.success=="success")
{$("#divdequeue").hide();$("#divErrorCode106").hide();$("#ErrorNull").hide();$("#Error104").hide();$("#Error121").hide();$("#Error122").hide();localStorage.setItem("CallBy",null);$("#Error123").hide();$("#Error124").hide();$("#divQueuesticky").hide();$("#divWarningCancelQueue").hide();$("#divDeQueueStatus").show();var lang=$("#language").val();if(lang=="hi")
{$("#txtDeQueueMsg").html("आप सफलतापूर्वक बाहर निकल चुके हैं प्रतीक्षा सूची की कतार से"+'<div class="clearfix"></div>'+"कृपया परामर्श करें किसी अन्य ज्योतीषी से");}
else{$("#txtDeQueueMsg").html("You have successfully dequeue from waiting list!"+'<div class="clearfix"></div>'+"Please try another astrologer.");}
delete_cookie("hours");delete_cookie("minutes");delete_cookie("seconds");delete_cookie("PrediictId");delete_cookie("Astrlog");delete_cookie("QueueNo");}},failure:function(response){}});}
function JoinNewQueue()
{var _astroId=$("#AstrologID").val();$.ajax({type:'GET',url:'/talktoastrologer/tta/dequeuephoneconsultqueueasync',dataType:"json",data:{astroid:_astroId},success:function(response){if(response.success=="success")
{var requestAstroId=$("#RequestAstroId").val();$("#QueingModal").modal("hide");phoneStausClickEvent(requestAstroId);}}});}
$(function(){var dt=new Date();var year=dt.getFullYear()+10;var range='1920:'+year;$("#DateOfBirth").datepicker({changeMonth:true,yearRange:range,changeYear:true,dateFormat:'dd MM yy'});});function SetBirthDetailsPopUp(parameter){if(parameter=="Birth"){if($('#HdnBirthCountry').val()==null||$('#HdnBirthState').val()==null||$('#HdnBirthCity').val()==null){$('#BirthDetailValidationSummary').show().text("Please enter valid Location having City ,State ,Country.");return;}
else{$("#btnClick").text("PLEASE WAIT...");var minutes=$('#Minutes').val();var hours=$('#Hours').val();var DOB=$('#DateOfBirth').val()+' '+$('#Hours').val()+':'+$('#Minutes').val()+':00 '+$('#Meridiem').val();var placeId=$('#HdnPlaceId').val();var _param=placeId+'Date:'+DOB;$.ajax({type:'GET',url:'/talktoastrologer/account/setbirthdetails',data:{PlaceId:placeId,DateOfBirth:DOB},success:function(response){$("#btnClick").text("Updated");$('#popupUserProfileCallValidationSummary').show().text(response.message);$("#userDetailCallPopupModal").modal("hide");$("#btntrueData").show();$("#btnfalseData").hide();},failure:function(response){}});}}
else if(parameter=="PresentLocation"){if($('#HdnAddressCountry').val()==null||$('#HdnAddressState').val()==null||$('#HdnAddressCity').val()==null){$('#presentLocationValidationSummary').show().text("Please enter valid Location having City ,State ,Country.");return;}
else{$("#Button1").text("PLEASE WAIT...");var minutes=$('#Minutes').val();var hours=$('#Hours').val();var DOB=$('#DateOfBirth').val()+' '+$('#Hours').val()+':'+$('#Minutes').val()+':00 '+$('#Meridiem').val();var placeId=$('#HdnAddressPlaceId').val();$.ajax({type:'GET',url:'/talktoastrologer/userprofile/setbirthdetails',dataType:"json",data:{PlaceId:placeId},success:function(response){if(response.success==true)
{$('#popupUserProfileCallValidationSuccessSummary').show().text("Location Updated Successfully.");$("#userDetailCallPopupModal").modal("hide");}},failure:function(response){}});}}}
function CheckUserDetailsAfterJoin()
{$("#QueingModal").modal("hide");$.ajax({type:'GET',url:'/talktoastrologer/userprofile/getbirthdetails',success:function(response){if(response.status==true)
{if(response.data.dateOfBirth==null||response.data.hours==0||response.data.minutes==0||response.data.birthCity==null){setTimeout(function(){$("#userDetailCallPopupModal").modal("show");},1000);if(response.data.dateOfBirth!=null)
{$("#DateOfBirth").val(response.data.dateOfBirth)}
if(response.data.hours!=0)
{$('#Hours').val(response.data.hours).change();}
if(response.data.minutes!=0)
{$('#Minutes').val(response.data.minutes).change();}
if(response.data.meridiem!=null)
{$('#Meridiem').val(response.data.meridiem).change();}
else
{$('#Meridiem').val("AM");}
if(response.data.birthCity!=null)
{$("#divLocation").hide();}}}
else
{setTimeout(function(){$("#userDetailCallPopupModal").modal("show");},1000);}},failure:function(response){}});}
function Skip()
{$("#userDetailCallPopupModal").modal("hide");}
function InstantCall()
{var _astroId=$("#RequestAstroId").val();$.ajax({type:'GET',url:'/talktoastrologer/tta/dequeuephoneconsultqueueasync',dataType:"json",data:{astroid:_astroId},success:function(response){if(response.success=="success")
{var requestAstroId=$("#RequestAstroId").val();$("#QueingModal").modal("hide");delete_cookie("hours");delete_cookie("minutes");delete_cookie("seconds");delete_cookie("PrediictId");delete_cookie("Astrlog");delete_cookie("QueueNo");$("#divQueuesticky").hide();CallNow(requestAstroId);}}});}
var minutes=0;var seconds=0;String.prototype.toHHMMSS=function(){var seconds=parseInt(this,10);var hours=Math.floor(seconds/3600),minutes=Math.floor(seconds/60)%60,seconds=seconds%60;if(hours<10)hours="0"+hours;if(minutes<10)minutes="0"+minutes;if(seconds<10)seconds="0"+seconds;setCookie("hours",hours.toString(),1);setCookie("minutes",minutes.toString(),1);setCookie("seconds",seconds.toString(),1);var time=hours+':'+minutes+':'+seconds;return time;}
var counter=setInterval(timer,1000);function timer(){if(parseInt(count)<=0){clearInterval(counter);return;}
if(count!=null){var temp=count.toHHMMSS();count=(parseInt(count)-1).toString();}
$('#strTimer').text(temp);}
function DequeueByClick()
{$("#QueingModal").modal("show");$("#ErrorNull").css('display','none');$("#Error123").hide();$("#divJoinQueue").hide();$("#Error123").hide();$("#Error124").hide();$("#Error121").hide();$("#divWarningCancelQueue").show();var _astroid=getCookie("PrediictId");var _hour=getCookie("hours");var _minutes=getCookie("minutes");var _seconds=getCookie("seconds");var _astrologerName=getCookie("Astrlog");var lang=$("#language").val();if(lang=="hi")
{$("#warningCancelQueuemsg").html("अब आप सिर्फ "+_hour+":"+_minutes+":"+_seconds+"  दूर हैं "+'<div class="clearfix"></div><span class="GrayColor">'+_astrologerName+'</span>'+" से जुड़ने के लिए");}
else{$("#warningCancelQueuemsg").html("You are just "+_hour+":"+_minutes+":"+_seconds+" away form getting"+'<div class="clearfix"></div>'+" connected to "+'<span class="GrayColor">'+_astrologerName+'</span>');}}
function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+"; "+expires;}
function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1);if(c.indexOf(name)==0)return c.substring(name.length,c.length);}
return "";}
function PusherImplement(){$.ajax({type:'GET',url:'/getfirebasekey/getpusherkeycredentials',dataType:'json',success:function(data){var socket=new Pusher(data.pusherKey,{cluster:data.pusherClientId,});channelSubscription(socket);channelQueueSubscription(socket);}});}
function channelQueueSubscription(socket)
{var channel2=socket.subscribe('astrologerConnStatusChannelV2');channel2.bind('updateAstrologerConnStatusV2',function(data){jQuery.each(data.connectionStatus,function(j,val){if(location.pathname.includes("/celebrityastrologer/")==true)
{if($("#hdnAstrologerid").val()==val.AstrologerLoginId.toString())
{$(".astrodiv").empty();var lang=$("#language").val();if(lang=="hi")
{if(val.PhoneStatus=="Online")
{if(($("#IsLogin").val()!="true"))
{$(".astrodiv").append('<a id="ContentPlaceHolder1_phoneCallButton" rel="nofollow" onclick="CheckSignup('+val.AstrologerLoginId+')" class="btn_online"  >कॉल करें<img src="https://images.astroyogi.com/astroyogi2017/english/images/tta/tta_image/call_online.png" astro-img="true" alt=""/></a>');}
else{if($("#MinBalnce").val()=="false")
{$(".astrodiv").append('<a id="ContentPlaceHolder1_phoneCallButton" rel="nofollow"  href="/ivrweb/ivrvalidateuser.aspx?astroid='+val.AstrologerLoginId+'" class="btn_online"  >कॉल करें<img src="https://images.astroyogi.com/astroyogi2017/english/images/tta/tta_image/call_online.png" astro-img="true" alt=""/></a>');}
else
{$(".astrodiv").append('<a id="ContentPlaceHolder1_phoneCallButton" rel="nofollow"  onclick="InsuccientPopup('+val.AstrologerLoginId+')" class="btn_online"  >कॉल करें<img src="https://images.astroyogi.com/astroyogi2017/english/images/tta/tta_image/call_online.png" astro-img="true" alt=""/></a>');}}
var localizer='@Localizer["Busy"]';}
else if(val.PhoneStatus=="Busy")
{var localizer='@Localizer["Busy"]';$(".astrodiv").append('<div class="col-md-5 col-xs-4  text-center busyaction"><img src="//images.astroyogi.com/astroyogi2017/english/images/tta/tta_image/busy_icon.png" width="29" height="29" class="call_action_icon" alt="Busy" title="Busy" astro-img="true"/><div class="clearfix"><label id="CallStatus">व्यस्त</label></div></div>');}
else if(val.PhoneStatus=="Offline")
{$(".astrodiv").append('<button type="button" class="btn_offline">@Localizer["Offline"]<img src="/english/images/tta/tta_image/call_offline.png" astro-img="true" alt=""/></button>');}
else if(val.PhoneStatus=="Join Queue")
{if(($("#IsLogin").val()!="true"))
{$(".astrodiv").append('<a id="CallStatus" onclick="CheckSignup('+val.AstrologerLoginId+')" class="online_queue_astrologer cursor-pointer">कतार में जुड़ें</a>');}
else
{if(($("#MinBalnce").val()!="False"))
{$(".astrodiv").append('<a id="CallStatus" onclick="InsuccientPopup('+val.AstrologerLoginId+')" class="online_queue_astrologer cursor-pointer">कतार में जुड़ें</a>');}
else
{$(".astrodiv").append('<a id="CallStatus" onclick="phoneStausClickEvent('+val.AstrologerLoginId+')"  class="online_queue_astrologer cursor-pointer">कतार में जुड़ें</a>');}}}}
else
{if(val.PhoneStatus=="Online")
{if(($("#IsLogin").val()!="True"))
{$(".astrodiv").append('<a id="ContentPlaceHolder1_phoneCallButton" rel="nofollow" onclick="CheckSignup('+val.AstrologerLoginId+')" class="btn_online"  >Call Me<img src="https://images.astroyogi.com/astroyogi2017/english/images/tta/tta_image/call_online.png" astro-img="true" alt=""/></a>');}
else{if($("#MinBalnce").val()=="false")
{$(".astrodiv").append('<a id="ContentPlaceHolder1_phoneCallButton" rel="nofollow"  href="/ivrweb/ivrvalidateuser.aspx?astroid='+val.AstrologerLoginId+'" class="btn_online"  >CALL ME<img src="https://images.astroyogi.com/astroyogi2017/english/images/tta/tta_image/call_online.png" astro-img="true" alt=""/></a>');}
else
{$(".astrodiv").append('<a id="ContentPlaceHolder1_phoneCallButton" rel="nofollow"  onclick="InsuccientPopup('+val.AstrologerLoginId+')" class="btn_online"  >CALL ME<img src="https://images.astroyogi.com/astroyogi2017/english/images/tta/tta_image/call_online.png" astro-img="true" alt=""/></a>');}}
var localizer='@Localizer["Busy"]';}
else if(val.PhoneStatus=="Busy")
{var localizer='@Localizer["Busy"]';$(".astrodiv").append('<div class="col-md-5 col-xs-4  text-center busyaction"><img src="//images.astroyogi.com/astroyogi2017/english/images/tta/tta_image/busy_icon.png" width="29" height="29" class="call_action_icon" alt="Busy" title="Busy" astro-img="true"/><div class="clearfix"><label id="CallStatus">BUSY</label></div></div>');}
else if(val.PhoneStatus=="Offline")
{$(".astrodiv").append('<button type="button" class="btn_offline">OFFLINE<img src="/english/images/tta/tta_image/call_offline.png" astro-img="true" alt=""/></button>');}
else if(val.PhoneStatus=="Join Queue")
{if(($("#IsLogin").val()!="true"))
{$(".astrodiv").append('<a id="CallStatus" onclick="CheckSignup('+val.AstrologerLoginId+')" class="online_queue_astrologer cursor-pointer">JOIN QUEUE</a>');}
else
{if(($("#MinBalnce").val()!="False"))
{$(".astrodiv").append('<a id="CallStatus" onclick="InsuccientPopup('+val.AstrologerLoginId+')" class="online_queue_astrologer cursor-pointer">JOIN QUEUE</a>');}
else
{$(".astrodiv").append('<a id="CallStatus" onclick="phoneStausClickEvent('+val.AstrologerLoginId+')"  class="online_queue_astrologer cursor-pointer">JOIN QUEUE</a>');}}}}}}
else
{var innerdiv=$('.articlemrg').find("#"+val.AstrologerLoginId);if(innerdiv.length>=1)
{var calldiv=innerdiv.find("#CallStatusAstro");if(calldiv.length>=1)
{calldiv.empty();var lang=$("#language").val();if(lang=="hi")
{if(val.PhoneStatus=="Online")
{if(($("#IsLogin").val()!="True"))
{calldiv.append('<a id="@ViewBag.ButtonId" onclick="CheckSignup('+val.AstrologerLoginId+')" class="online_Callme">कॉल करें</a>');}
else{if($("#MinBalnce").val()=="False")
{calldiv.append('<a id="CallStatus"  onclick="phoneStausClickEvent('+val.AstrologerLoginId+')" class="online_Callme">कॉल करें</a>');}
else
{calldiv.append('<a id="@ViewBag.ButtonId" onclick="InsuccientPopup('+val.AstrologerLoginId+')" class="online_Callme">कॉल करें</a>');}}
var localizer='@Localizer["Busy"]';}
else if(val.PhoneStatus=="Busy")
{var localizer='@Localizer["Busy"]';calldiv.append('<div class="col-md-5 col-xs-4  text-center busyaction"><img src="//images.astroyogi.com/astroyogi2017/english/images/tta/tta_image/busy_icon.png" width="29" height="29" class="call_action_icon" alt="Busy" title="Busy" astro-img="true"/><div class="clearfix"><label id="CallStatus">व्यस्त</label></div></div>');}
else if(val.PhoneStatus=="Offline")
{calldiv.append('<a class="online_offline">व्यस्त</a>');}
else if(val.PhoneStatus=="Join Queue")
{if(($("#IsLogin").val()!="True"))
{calldiv.append('<a id="CallStatus" onclick="CheckSignup('+val.AstrologerLoginId+')" class="online_queue cursor-pointer">कतार में जुड़ें</a>');}
else
{if(($("#MinBalnce").val()!="False"))
{calldiv.append('<a id="CallStatus" onclick="InsuccientPopup('+val.AstrologerLoginId+')"  class="online_queue cursor-pointer">कतार में जुड़ें</a>');}
else
{calldiv.append('<a id="CallStatus" onclick="phoneStausClickEvent('+val.AstrologerLoginId+')"  class="online_queue cursor-pointer">कतार में जुड़ें</a>');}}}}
else
{if(val.PhoneStatus=="Online")
{if(($("#IsLogin").val()!="True"))
{calldiv.append('<a id="@ViewBag.ButtonId" onclick="CheckSignup('+val.AstrologerLoginId+')" class="online_Callme">CALL</a>');}
else{if($("#MinBalnce").val()=="False")
{calldiv.append('<a id="CallStatus"  onclick="phoneStausClickEvent('+val.AstrologerLoginId+')" class="online_Callme">CALL</a>');}
else
{calldiv.append('<a id="@ViewBag.ButtonId" onclick="InsuccientPopup('+val.AstrologerLoginId+')" class="online_Callme">CALL</a>');}}
var localizer='@Localizer["Busy"]';}
else if(val.PhoneStatus=="Busy")
{var localizer='@Localizer["Busy"]';calldiv.append('<div class="col-md-5 col-xs-4  text-center busyaction"><img src="//images.astroyogi.com/astroyogi2017/english/images/tta/tta_image/busy_icon.png" width="29" height="29" class="call_action_icon" alt="Busy" title="Busy" astro-img="true"/><div class="clearfix"><label id="CallStatus">Busy</label></div></div>');}
else if(val.PhoneStatus=="Offline")
{calldiv.append('<a class="online_offline">OFFLINE</a>');}
else if(val.PhoneStatus=="Join Queue")
{if(($("#IsLogin").val()!="True"))
{calldiv.append('<a id="CallStatus" onclick="CheckSignup('+val.AstrologerLoginId+')" class="online_queue cursor-pointer">JOIN QUEUE</a>');}
else
{if(($("#MinBalnce").val()!="False"))
{calldiv.append('<a id="CallStatus" onclick="InsuccientPopup('+val.AstrologerLoginId+')"  class="online_queue cursor-pointer">JOIN QUEUE</a>');}
else
{calldiv.append('<a id="CallStatus" onclick="phoneStausClickEvent('+val.AstrologerLoginId+')"  class="online_queue cursor-pointer">JOIN QUEUE</a>');}}}}}}}});});}
function channelSubscription(socket){var _astrologinId=getCookie("PrediictId");var userLoginId=$("#UserLoginId").val();var channelName='astrologerConnStatusChannel-'+_astrologinId+'-'+userLoginId;var channel=socket.subscribe(channelName);channel.bind('updateUserQueueEstimate',function(data){if(data.userQueueEstimate.CallStatus=="Queued")
{display=document.querySelector('#strTimer');var hms=data.userQueueEstimate.WaitTime;var a=hms.split(':');var minutes=(+a[0])*60+(+a[1]);minutes=minutes*60;count=minutes.toString();timer();$("#divQueueNo").text(data.userQueueEstimate.QueueNumber);$("#divAstrologerName").text(data.userQueueEstimate.AstrologerName);}
else if(data.userQueueEstimate.CallStatus=="Progress"){$("#QueueTxt").text("Call Status:");$("#divQueueNo").text(data.userQueueEstimate.CallStatus);$("#divWaitTime").hide();$("#btnCallDequeu").hide();$("#divAstrologerName").text(data.userQueueEstimate.AstrologerName);delete_cookie("hours");delete_cookie("minutes");delete_cookie("seconds");delete_cookie("QueueNo");}
else{delete_cookie("hours");delete_cookie("minutes");delete_cookie("seconds");delete_cookie("PrediictId");delete_cookie("Astrlog");delete_cookie("QueueNo");$("#divQueuesticky").hide();localStorage.setItem("CallBy",null);}});}
$(document).off('click','.carousel-tab li a').on('click','.carousel-tab li a',function(e){var href=$(this).attr('href');var ttalink=null;var categoryId=$(this).attr('data-category');$.ajax({type:"GET",url:"/talktoastrologer/tta/homepageastrologerlist",data:{DltdAstroCategoryId:categoryId},success:function(result){$("#partial").html(result);$('.carousel-tab li').removeClass('active');$('.carousel-tab li a[href="'+href+'"]').closest('li').addClass('active');if($('#hdnTTALinkCulture').val()=="English")
{ttalink="/talk-to-astrologers";}
else
{ttalink="/onlineastrologer"}
var version=null;if(window.location.pathname=="/homev2")
{version="_v2";}
else{version="_v1";}
switch(categoryId)
{case "1":$('.slide_view').attr('href',ttalink);$('.slide_view').attr('id',"homeVedicbtnViewAll"+version);break;case "2":$('.slide_view').attr('href',ttalink+"/vastu");$('.slide_view').attr('id',"homeVastubtnViewAll"+version);break;case "3":$('.slide_view').attr('href',ttalink+"/tarot-reader");$('.slide_view').attr('id',"homeTarotbtnViewAll"+version);break;case "5":$('.slide_view').attr('href',ttalink+"/numerologist");$('.slide_view').attr('id',"homeNumerologistbtnViewAll"+version);break;default:$('.slide_view').attr('href',ttalink);$('.slide_view').attr('id',"homeVedicbtnViewAll"+version);break;}
var owl=$('.owl-carousel');owl.owlCarousel({stagePadding:30,items:3,slideBy:"3",margin:10,nav:true,responsive:{0:{items:1},600:{items:3},1000:{items:4}}})}});});