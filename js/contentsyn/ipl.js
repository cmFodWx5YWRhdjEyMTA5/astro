function NextPrediction(frequency)
{$.ajax({type:'GET',url:'/ContentSyn/ipl/matchprediction',data:{_frequency:frequency},success:function(response){if(response.success){if(frequency=="NextArticle")
{$("#ArticleNameToday").hide();$("#ArticleNamePrevious").hide();$("#ArticleNameNext").show();$("#next").addClass('background_yellow active');$("#current").removeClass('background_yellow active');$("#previous").removeClass('background_yellow active');}
else if(frequency=="PreviousArticle")
{$("#ArticleNameToday").hide();$("#ArticleNamePrevious").show();$("#ArticleNameNext").hide();$("#previous").addClass('background_yellow active');$("#current").removeClass('background_yellow active');$("#next").removeClass('background_yellow active');}
$("#ArticleName").text(response.data.articleName);var data=$.parseHTML(response.data.articleContent1);$("#TodayPrediction").html(response.data.articleContent1);if(response.data.articleContent2!=null){$("#TodayPredictionPara2").html(response.data.articleContent2);}
document.getElementById("CoverImage").setAttribute('data-src',response.data.coverImage);document.getElementById("CoverImage").setAttribute('src',response.data.coverImage);event.preventDefault();}}});}