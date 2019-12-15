$(document).ready(function(){inputOperations.initDatePicker();$("#DateOfBirth").datepicker({format:'D, M dd, yyyy',endDate:'0d'});});function showTermsAndConditions(){$("#termsAndConditionsModal").modal("show");}
var inputOperations={initDatePicker:function(){$("#DateOfBirth").datepicker({format:"D, M dd, yyyy",startView:"decade"}).on('changeDate',function(e){$("#DateOfBirth").datepicker('hide');});}}
var appendUtmParamHomeRegOp={initiate:function(){$.when(astroyogiUtmParamOps.utmParamSetStat).then(function(){var utmParam=astroyogiUtmParamOps.getUtmParam();if(utmParam==null){return;}
$("#UtmSource").val(utmParam.utmSource);$("#UtmCampaign").val(utmParam.utmCampaign);$("#UtmContent").val(utmParam.utmContent);$("#UtmMedium").val(utmParam.utmMedium);$("#UtmTerm").val(utmParam.utmTerm);});}}
appendUtmParamHomeRegOp.initiate();function PostLogin(){var login=$('#LoginEmailAddress').val();if(login==""){$("#LoginEmailAddressValidateMessage").show();return;}
var password=$('#LoginPassword').val();if(password==""){$("#LoginPasswordValidateMessage").show();return;}
var form=$('#homeRegFrm');var token=$('input[name="__RequestVerificationToken"]',form).val();var model={EmailAddressOrPhoneNumber:login,Password:password,__RequestVerificationToken:token};$.ajax({type:'POST',url:'/talktoastrologer/account/login',data:{EmailAddressOrPhoneNumber:login,Password:password},success:function(response){if(!response.success)
{$("#ResultMessage").show().text(response.message);}
else
{window.location=response.redirectUrl;}},failure:function(response){}});}
$(".scroll").click(function(event){var a=$(this).attr('name');$('html,body').animate({scrollTop:$(a).offset().top-102},500);});