function ChangeText(){var text=$("#btnReadMore").html();if(text=="Read More...")
{$("#btnReadMore").html("Read Less...")}
else if(text=="<u>Read More...</u>")
{$("#btnReadMore").html("<u>Read Less...</u>")}
else if(text=="Read Less..."){$("#btnReadMore").html("Read More...")}
else if(text=="<u>Read Less...</u>"){$("#btnReadMore").html("<u>Read More...</u>")}
else if(text=="और पढ़ें... "||text=="और पढ़ें...")
{$("#btnReadMore").html("कम करें...")}
else if(text=="कम करें...")
{$("#btnReadMore").html("और पढ़ें...")}}
function ChangeButtonText()
{var text=$("#btnReadMoreBtn").html();if(text=="Read More...")
{$("#btnReadMoreBtn").html("Read Less...")}
else if(text=="Read Less..."){$("#btnReadMoreBtn").html("Read More...")}
else if(text=="और पढ़ें... "||text=="और पढ़ें...")
{$("#btnReadMoreBtn").html("कम करें...")}
else if(text=="कम करें...")
{$("#btnReadMoreBtn").html("और पढ़ें...")}}
$(document).ready(function(){var myString=$("#IPValue").val();if(myString==null||myString==""||myString==''||myString=='undefined')
{$("#horoPhoneCode").val("91 (IN)");}
else
{var result=contained(myString,countries);$("#horoPhoneCode").val(result);}});function contained(myString,myArray){var value=null;$.each(myArray,function(i,val){if(val.indexOf(myString)>=0){value=val;return false;}});return value;}
function autocomplete(inp,arr){var currentFocus;inp.addEventListener("input",function(e){var a,b,i,val=this.value;closeAllLists();if(!val){return false;}
currentFocus=-1;a=document.createElement("DIV");a.setAttribute("id",this.id+"autocomplete-list");a.setAttribute("class","autocomplete-items");this.parentNode.appendChild(a);for(i=0;i<arr.length;i++){if(arr[i].substr(0,val.length).toUpperCase()==val.toUpperCase()){b=document.createElement("DIV");b.innerHTML="<strong>"+arr[i].substr(0,val.length)+"</strong>";b.innerHTML+=arr[i].substr(val.length);b.innerHTML+="<input type='hidden' value='"+arr[i]+"'>";b.addEventListener("click",function(e){inp.value=this.getElementsByTagName("input")[0].value;closeAllLists();});a.appendChild(b);}}});inp.addEventListener("keydown",function(e){var x=document.getElementById(this.id+"autocomplete-list");if(x)x=x.getElementsByTagName("div");if(e.keyCode==40){currentFocus++;addActive(x);}else if(e.keyCode==38){currentFocus--;addActive(x);}else if(e.keyCode==13){e.preventDefault();if(currentFocus>-1){if(x)x[currentFocus].click();}}});function addActive(x){if(!x)return false;removeActive(x);if(currentFocus>=x.length)currentFocus=0;if(currentFocus<0)currentFocus=(x.length-1);x[currentFocus].classList.add("autocomplete-active");}
function removeActive(x){for(var i=0;i<x.length;i++){x[i].classList.remove("autocomplete-active");}}
function closeAllLists(elmnt){var x=document.getElementsByClassName("autocomplete-items");for(var i=0;i<x.length;i++){if(elmnt!=x[i]&&elmnt!=inp){x[i].parentNode.removeChild(x[i]);}}}
document.addEventListener("click",function(e){closeAllLists(e.target);});}
var countries=["91 (IN)","1 (US)","1 (CA)","61 (AU)","971 (AE)","44 (GB)","93 (AF)","355 (AL)","213 (DZ)","1684 (AS)","376 (AD)","244 (AO)","1264 (AI)","0 (AQ)","1268 (AG)","54 (AR)","374 (AM)","297 (AW)","43 (AT)","994 (AZ)","1242 (BS)","973 (BH)","880 (BD)","1246 (BB)","375 (BY)","32 (BE)","501 (BZ)","229 (BJ)","1441 (BM)","975 (BT)","591 (BO)","387 (BA)","267 (BW)","0 (BV)","55 (BR)","246 (IO)","673 (BN)","359 (BG)","226 (BF)","257 (BI)","855 (KH)","237 (CM)","238 (CV)","1345 (KY)","236 (CF)","235 (TD)","56 (CL)","86 (CN)","61 (CX)","672 (CC)","57 (CO)","269 (KM)","242 (CG)","242 (CD)","682 (CK)","506 (CR)","225 (CI)","385 (HR)","53 (CU)","357 (CY)","420 (CZ)","45 (DK)","253 (DJ)","1767 (DM)","1809 (DO)","593 (EC)","20 (EG)","503 (SV)","240 (GQ)","291 (ER)","372 (EE)","251 (ET)","500 (FK)","298 (FO)","691 (FM)","679 (FJ)","358 (FI)","33 (FR)","594 (GF)","689 (PF)","0 (TF)","241 (GA)","220 (GM)","995 (GE)","49 (DE)","233 (GH)","350 (GI)","30 (GR)","299 (GL)","1473 (GD)","590 (GP)","1671 (GU)","502 (GT)","224 (GN)","245 (GW)","592 (GY)","509 (HT)","0 (HM)","39 (VA)","504 (HN)","852 (HK)","36 (HU)","354 (IS)","62 (ID)","98 (IR)","964 (IQ)","353 (IE)","972 (IL)","39 (IT)","1876 (JM)","81 (JP)","962 (JO)","7 (KZ)","254 (KE)","686 (KI)","965 (KW)","996 (KG)","856 (LA)","371 (LV)","961 (LB)","266 (LS)","231 (LR)","218 (LY)","423 (LI)","370 (LT)","352 (LU)","853 (MO)","389 (MK)","261 (MG)","265 (MW)","60 (MY)","960 (MV)","223 (ML)","356 (MT)","692 (MH)","596 (MQ)","222 (MR)","230 (MU)","269 (YT)","52 (MX)","373 (MD)","377 (MC)","976 (MN)","1664 (MS)","212 (MA)","258 (MZ)","95 (MM)","264 (NA)","674 (NR)","977 (NP)","31 (NL)","599 (AN)","687 (NC)","64 (NZ)","505 (NI)","227 (NE)","234 (NG)","683 (NU)","672 (NF)","850 (KP)","1670 (MP)","47 (NO)","968 (OM)","92 (PK)","680 (PW)","970 (PS)","507 (PA)","675 (PG)","595 (PY)","51 (PE)","63 (PH)","0 (PN)","48 (PL)","351 (PT)","1787 (PR)","974 (QA)","262 (RE)","40 (RO)","70 (RU)","250 (RW)","290 (SH)","1869 (KN)","1758 (LC)","508 (PM)","1784 (VC)","684 (WS)","378 (SM)","239 (ST)","966 (SA)","221 (SN)","381 (CS)","248 (SC)","232 (SL)","65 (SG)","421 (SK)","386 (SI)","677 (SB)","252 (SO)","27 (ZA)","0 (GS)","82 (KR)","34 (ES)","94 (LK)","249 (SD)","597 (SR)","47 (SJ)","268 (SZ)","46 (SE)","41 (CH)","963 (SY)","886 (TW)","992 (TJ)","255 (TZ)","66 (TH)","670 (TL)","228 (TG)","690 (TK)","676 (TO)","1868 (TT)","216 (TN)","90 (TR)","7370 (TM)","1649 (TC)","688 (TV)","256 (UG)","380 (UA)","1 (UM)","598 (UY)","998 (UZ)","678 (VU)","58 (VE)","84 (VN)","1284 (VG)","1340 (VI)","681 (WF)","212 (EH)","967 (YE)","38 (YO)","260 (ZM)","263 (ZW)"];var el=document.getElementById("horoPhoneCode");if(el)
{autocomplete(document.getElementById("horoPhoneCode"),countries);}