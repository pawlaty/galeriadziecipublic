/*zrezygnowa z posts.click i met: OnMyClick przeniecs do ShowBigPost*/

		//łapiemy klase cookies

//łapiemy duzy obraz
var hidden = $(".review");
var option = {};

//////////////////////////////////
//////zmienne////////////////////
/////////////////////////////////

//pojawiaja sie cookies po 3s
$(document).ready(function(){
	setTimeout(()=>{$(".coookies").fadeIn()},3000);
	TakeNrOfpictures();
	});

$(window).scroll(function(){
	if($(this).scrollTop()>300){
		$("#upup").fadeIn();
	}else{
		$("#upup").fadeOut();
	}
});
//zamyka coookies
function closecookies(){
	$(".coookies").fadeOut();
	}



//click uptowngirl
$("#upup").on("click",function(event){
			$("#upup").css("background","radial-gradient(green,gray)");
			setTimeout(()=>{$("#upup").css("background","radial-gradient(pink,gray)");},300);
			event.preventDefault();
			$('html,body').animate({
						scrollTop:$("#title").offset().top
						},1200);
			});

var posts = $(".one_post");		//łapiemy klasę posts

for(let i=0; i<posts.length; i++){
	posts[i].onclick = ShowBigPost;
}
//łapie posta i zwraca sciezke id
function ShowBigPost(objevent){
	
	let id = objevent.target.src;
	
	//let  postnr = posts.length - id;
	//let path = posts[id]["children"][0]["src"];

	/*let path = id["children"][0]["src"];*/
    setTimeout(()=>{$("#big").attr("src",/*zmiana:path*/id);},350); 


    if(($(".review").attr("class") === "review review_hide")||
    ($(".review").attr("class") === "review")){
      setTimeout(()=>{Show()},350); 
    }
   else{
    Hide();
    setTimeout(()=>{Show()}, 500);
   }
 
  
}



  //clik dla duzego obrazka onclick w formularzu
function Hide(){
    setTimeout(()=>{ hidden.css("display","none")},500);
    hidden.removeClass("review_show");
    hidden.addClass("review_hide");
    hidden.css("opacity","0"); 
 
}

function Show(){
  hidden.css("display","flex");
  hidden.css("opacity","1");
  hidden.addClass("review_show");
  hidden.removeClass("review_hide");
}

/*submit zdjeci */
function TakeNrOfpictures(){
	$(".choicepage").on("change",function(){$("#formselect").submit();});
}

/*tablica postsow usun*/
var del_posts = $(".admin_posts");
/*tablica buttonow usun*/
var _del = $("._del");

for(let i=0; i<_del.length; i++){
	//_del[i].onclick = deleltepost;
	_del[i].on("click",deleltepost);
}

function deleltepost(objevent){
	console.log(objevent.target);	
	$(".del_post").submit();
	
}