$(document).ready(function(){});$(function(){var dt=new Date();var year=dt.getFullYear()+10;var range='1920:'+year;$("#MyDOB").datepicker({changeMonth:true,yearRange:range,changeYear:true,dateFormat:'dd MM yy'});$("#PartnerDOB").datepicker({changeMonth:true,yearRange:range,changeYear:true,dateFormat:'dd MM yy'});$("#SutraMyDOB").datepicker({changeMonth:true,yearRange:range,changeYear:true,dateFormat:'dd MM yy'});$("#SutraPartnerDOB").datepicker({changeMonth:true,yearRange:range,changeYear:true,dateFormat:'dd MM yy'});$("#SoulmateMyDOB").datepicker({changeMonth:true,yearRange:range,changeYear:true,dateFormat:'dd MM yy'});$("#txtDateOfBirth").datepicker({changeMonth:true,yearRange:range,changeYear:true,dateFormat:'dd MM yy'});$("#txtPartnerDOB").datepicker({changeMonth:true,yearRange:range,changeYear:true,dateFormat:'dd MM yy'});});function hasWhiteSpaceCompatibility(){var e=document.getElementById("MyName").value,t=document.getElementById("PartnerName").value;return isNaN(e)||""==e||null==e||e.indexOf(" ")>=0?($("#lblError").show().text("Please enter valid name."),!1):isNaN(t)||""==t||null==t||t.indexOf(" ")>=0?($("#lblError").show().text("Please enter valid name."),!1):void 0}