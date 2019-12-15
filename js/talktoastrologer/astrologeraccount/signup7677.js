$(document).ready(function(){$('#Location').on('click',initialize)
$(".vertical-center-4").slick({dots:true,vertical:true,centerMode:true,slidesToShow:4,slidesToScroll:2});$(".vertical-center-3").slick({dots:true,vertical:true,centerMode:true,slidesToShow:3,slidesToScroll:3});$(".vertical-center-2").slick({dots:true,vertical:true,centerMode:true,slidesToShow:2,slidesToScroll:2});$(".vertical-center").slick({dots:true,vertical:true,centerMode:true,});$(".vertical").slick({dots:true,vertical:true,slidesToShow:3,slidesToScroll:3});$(".regular").slick({dots:true,infinite:true,slidesToShow:3,slidesToScroll:3});$(".center").slick({dots:true,infinite:true,centerMode:true,slidesToShow:5,slidesToScroll:3});$(".variable").slick({dots:true,infinite:true,variableWidth:true});$(".lazy").slick({lazyLoad:'ondemand',infinite:true});});function initialize(){var places=new google.maps.places.Autocomplete(document.getElementById("Location"),{types:["(cities)"]});google.maps.event.addListener(places,'place_changed',function(){var place=places.getPlace();$('#HdnPlaceId').val(place.place_id);});}
function showTermsAndConditions(){$('#termsandconditionsdiv').show();}
function termsandconditionsclosemodal()
{$('#termsandconditionsdiv').hide();}
var validEmailPattern=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);$('#EmailAddress').on('keypress keydown keyup',function(){$('#EmailAddressError').hide();if(!$(this).val().match(validEmailPattern)){$('#EmailAddressError').show();$('#EmailAddressError').text("Enter Valid Email Id");}});var validfirstNamePattern=new RegExp(/[a-zåäö ]/i);$('#FirstName').on('keypress keydown keyup',function(){$('#FirstNameError').hide();if(!$(this).val().match(validfirstNamePattern)){$('#FirstNameError').show();$('#FirstNameError').text("Enter valid first name");}});var validlastNamePattern=new RegExp(/[a-zåäö ]/i);$('#LastName').on('keypress keydown keyup',function(){$('#LastNameError').hide();if(!$(this).val().match(validlastNamePattern)){$('#LastNameError').show();$('#LastNameError').text("Enter valid last name");}});$('#Location').on('keyup',function(){if($('#HdnPlaceId').val()!="")
{$('#LocationError').hide();}});$('#Location').on('keypress',function(){if($('#Location').val().length<=2){$('#LocationError').show();$('#LocationError').text("Enter valid city");}
else
{$('#LocationError').hide();}});$('#Password').on('keypress',function(){if(($('#Password').val().length<5||$('#Password').val().length>=15)){$('#PasswordError').show();$('#PasswordError').text("Password must be at least 6 to 15 characters long.");}
else{$('#PasswordError').hide();}});$('#PhoneNumber').on('keypress',function(){var pattern=new RegExp("^[0-9]{10}$");var othercountrypattern=new RegExp("^[0-9]");var CountryId=$("#PhoneCode").val().match(/\(([^)]+)\)/)[1];if(CountryId=="IN"||CountryId=="US"||CountryId=="CA")
{if($("#PhoneNumber").val()!=null&&pattern.test($("#PhoneNumber").val()))
{$('#SignUpMobileError').hide();}else
{$('#SignUpMobileError').show();$('#SignUpMobileError').html("Phone no should not blank");}
if($("#PhoneNumber").val().length<9||$("#PhoneNumber").val().length>10)
{$('#SignUpMobileError').show();$('#SignUpMobileError').html("Enter your valid phone no");}
else if($("#PhoneNumber").val().length=10)
{$('#SignUpMobileError').hide();}}else
{if($("#PhoneNumber").val().length>3&&$("#PhoneNumber").val().length<17&&othercountrypattern.test($("#PhoneNumber").val()))
{$('#SignUpMobileError').hide();}else
{$('#SignUpMobileError').show();$('#SignUpMobileError').html("Enter your valid phone no");}}});function btnSubmitClick(e)
{$('#FirstNameError').hide();$('#LastNameError').hide();$('#SignUpMobileError').hide();$('#signUpValidationSummary').hide();$('#TermsConditionSpn').hide();e.preventDefault();var $form=$(this);if($form.validate())
{if($('#FirstName').val()=="")
{$('#FirstNameError').show();$('#FirstNameError').text("First Name");}
if($('#LastName').val()=="")
{$('#LastNameError').show();$('#LastNameError').text("Last Name");}
if($('#EmailAddress').val()=="")
{$('#EmailAddressError').show();$('#EmailAddressError').text("Email ID");}
if($('#Password').val()=="")
{$('#PasswordError').show();$('#PasswordError').text("Password");}
if($('#Location').val()=="")
{$('#LocationError').show();$('#LocationError').text("City");}
if($('#PhoneNumber').val()=="")
{$('#SignUpMobileError').show();$('#SignUpMobileError').html("Phone no should not blank");}
if($("#TermsAndConditions").prop('checked')!=true)
{$('#TermsConditionSpn').show();$('#TermsConditionSpn').html("Please accept the Terms & Conditions.");}else
{$('#TermsConditionSpn').hide();$('#TermsConditionSpn').html();}
var pattern=new RegExp("^[0-9]{10}$");var othercountrypattern=new RegExp("^[0-9]");var CountryId=$("#PhoneCode").val().match(/\(([^)]+)\)/)[1];if(CountryId=="IN"||CountryId=="US"||CountryId=="CA")
{if($("#PhoneNumber").val()!=null&&pattern.test($("#PhoneNumber").val()))
{$('#SignUpMobileError').hide();}else
{$('#SignUpMobileError').show();$('#SignUpMobileError').html("Phone no should not blank");}
if($("#PhoneNumber").val().length<9||$("#PhoneNumber").val().length>10)
{$('#SignUpMobileError').show();$('#SignUpMobileError').html("Enter your valid phone no");}
else if($("#PhoneNumber").val().length=10)
{$('#SignUpMobileError').hide();}}else
{if($("#PhoneNumber").val().length>3&&$("#PhoneNumber").val().length<17&&othercountrypattern.test($("#PhoneNumber").val()))
{$('#SignUpMobileError').hide();}else
{$('#SignUpMobileError').show();$('#SignUpMobileError').html("Enter your valid phone no");}}
var validEmailPattern=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);var validfirstNamePattern=new RegExp(/[a-zåäö ]/i);if(!$('#FirstName').val().match(validfirstNamePattern)){$('#FirstNameError').show();$('#FirstNameError').text("Enter valid first name");}
if(!$('#LastName').val().match(validfirstNamePattern))
{$('#LastNameError').show();$('#LastNameError').text("Enter valid last name");}
if($('#Password').val()==""||$('#FirstName').val()==""||$('#LastName').val()==""||$('#EmailAddress').val()==""||$('#Location').val()==""||$('#PhoneNumber').val()==""||$("#TermsAndConditions").prop('checked')!=true||!$('#EmailAddress').val().match(validEmailPattern)||!$('#FirstName').val().match(validfirstNamePattern)||!$('#LastName').val().match(validfirstNamePattern)||$('#Location').val().length<=2||$('#Password').val().length<6||$('#Password').val().length>=15||$("#PhoneNumber").val().length<9||$("#PhoneNumber").val().length>10)
{return false;}}
var phonecode=$("#PhoneCode").val().split(" ");var btnText=$("#AstrologerSignUpSubmitFrm").find("[type='button']").text();$.ajax({type:'POST',url:'/talktoastrologer/astrologeraccount/sendsignupotp',data:{_phoneCode:phonecode[0],_phoneNumber:$("#PhoneNumber").val()},success:function(result){if(result.success){$('#signUpValidationSummary').text(result.message);Request=result.data.otp;PhoneCode=phonecode[0];PhoneNumber=$("#PhoneNumber").val();$("#ttaotpmodal").show();$('input[type="mobile"]').val('');$('#successMsg').hide();$('.signupotpresponseerrormsg').hide();$("#loginmobileNumber").text("+"+PhoneCode+PhoneNumber);$("#RequiredFieldOTP").hide();}
else{$('#signUpValidationSummary').show();$('#signUpValidationSummary').text(result.message);}},fail:function(result){$('#signUpValidationSummary').text(response.message);},error:function(result){$('#signUpValidationSummary').text(response.message);}});}
function ResendOTP(){$('.signupotpresponsesuccessrmsg').text('');$('.signupotpresponseerrormsg').text('');$("#RequiredFieldOTP").hide();$("#BtnResend").attr('disabled',true);$('input[type="number"]').val('');$.ajax({type:'POST',url:'/talktoastrologer/account/resendotp',data:{_phoneCode:PhoneCode,_phoneNumber:PhoneNumber},success:function(response){if(response){if(response.success){$('.signupotpresponseerrormsg').hide();$('#successMsg').show();$('#successMsg').text(response.message);$('#MessageBox').hide();}else{$('.signupotpresponseerrormsg').text(response.message);}}},error:function(response){$('.signupotpresponsesuccessrmsg').hide();$('.signupotpresponseerrormsg').text(response.message);}});return false;}
function VerifyOTP(){$('#signUpValidationSummary').text('');$("#RequiredFieldOTP").hide();$('#BtnVerify').removeAttr("disabled");$("#loginmobileNumber").text("+"+PhoneCode+PhoneNumber);var form=$('.modalinputbox');var vals=form.map(function(){var value=$.trim(this.value)
return value?value:undefined;}).get();var completeOTP=vals.join();completeOTP=completeOTP.toString().replace(/,/g,"");if(completeOTP.length!=6){$(".signupotpresponseerrormsg").show().text("");$(".signupotpresponseerrormsg").show().text("Invalid OTP");$("#ttaotpmodal").show();}
var txtotp=completeOTP;var hdnotp=Request;var phoneCode=PhoneCode;var phoneNumber=PhoneNumber;if(txtotp==hdnotp){signupArray={FirstName:$("#FirstName").val(),LastName:$("#LastName").val(),PhoneCode:$("#PhoneCode").val().split(" ")[0],PhoneNumber:$("#PhoneNumber").val(),EmailAddress:$("#EmailAddress").val(),Location:$("#Location").val(),Password:$("#Password").val(),HdnPlaceId:$('#HdnPlaceId').val(),AstroPartnerId:1,OTP:Request,};$("#BtnVerify").attr('disabled',true);$.ajax({type:'POST',url:'/talktoastrologer/astrologeraccount/signupwithotp',data:signupArray,success:function(result){if(result.success){$("#AstrologerSignUpSubmitFrm").find("[type='button']").text("Submit");$("#ttaotpmodal").hide();$("#thankyoumodal").show();}else{$("#AstrologerSignUpSubmitFrm").find("[type='button']").removeAttr("disabled");$("#AstrologerSignUpSubmitFrm").find("[type='button']").text(btnText);$('.signupotpresponseerrormsg').show().text(result.message);$("#ttaotpmodal").show();}},failure:function(response){$("#AstrologerSignUpSubmitFrm").find("[type='button']").removeAttr("disabled");$("#AstrologerSignUpSubmitFrm").find("[type='button']").text(btnText);$('.signupotpresponseerrormsg').show().text(result.message);$("#ttaotpmodal").show();}});}
else{$('.signupotpresponseerrormsg').show();$('.signupotpresponseerrormsg').text("Invalid Otp");$("#ttaotpmodal").show();}}
$(':input').keydown(function(e){if((e.which==8||e.which==46)&&$(this).val()==''){$(this).prev('input').focus();}});function closemodal()
{$("#ShowMessage").hide();location.reload();}
function videoclosemodal()
{$("#VideoUrl").hide();return false;}
function thankyouclosemodal()
{$("#thankyoumodal").hide();return false;}
function EditNumber()
{$("#AstrologerSignUpSubmitFrm").find("[type='button']").removeAttr("disabled");$("#ttaotpmodal").hide();$("#PhoneNumber").focus();}
function displayvideo(videourl)
{$.ajax({type:'GET',url:'/talktoastrologer/astrologeraccount/OpenVideo',data:{url:videourl},success:function(result){$('#mainLandingiframe').attr('src',videourl)
$("#mainLandingiframe")[0].src+="?rel=0&autoplay=1";$('#VideoUrl').show();},});}
var container=document.getElementsByClassName("divOTP")[0];container.onkeyup=function(e){var target=e.srcElement||e.target;var maxLength=1;var myLength=target.value.length;if(myLength>=maxLength){var next=target;while(next=next.nextElementSibling){if(next==null)
break;if(next.tagName.toLowerCase()==="input"){next.focus();break;}}}
else if(myLength===0){var previous=target;while(previous=previous.previousElementSibling){if(previous==null)
break;if(previous.tagName.toLowerCase()==="input"){previous.focus();break;}}}}
function isNumberKey(evt){var charCode=(evt.which)?evt.which:event.keyCode;if((charCode<48||charCode>57))
return false;return true;}