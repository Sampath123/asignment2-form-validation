//Bootstrap Carousel
$('#carousel-main').carousel();

// $('#myModal').modal(
// 	{
// 		show:true;}
// 		);


$(document).ready(function(){
  console.log("sam");

	
// $("#sub").click(function(){
// var name=$("#name").val();
// if(name==""){

// 		$(".name-required").css('visibility','visible');
// 	}
	
// else{

// 	$(".name-required").css('visibility','hidden');
// 	$("#name").val(name.charAt(0).toUpperCase() + this.slice(1));
// }

// 	});


$("#name").blur(function(){
var name=$("#name").val();
if(name==""){

		$(".name-required").css('visibility','visible');
	}
	
else{

	$(".name-required").css('visibility','hidden');
	$("#name").val(name.charAt(0).toUpperCase() + this.slice(1));
}

	});
	

$("#email").blur(function(){
var email=$("#email").val();

var re = /\S+@\S+\.\S+/;

if (re.test(email))
 {
 	$(".email-required").css('visibility','hidden');

}
else {
$(".email-required").css('visibility','visible');
}

	});
	

$("#phone").blur(function(){
var phone_number=$("#phone").val();
var re = /\+91-\d{10}/;
if (re.test(phone_number))
 {
 	$(".phone-required").css('visibility','hidden');

}
else {
$(".phone-required").css('visibility','visible');
}

	});


$("#adress").blur(function(){
var address=$("#adress").val();
if (address.length>10)
 {
 	$(".address-required").css('visibility','hidden');

}
else {
$(".address-required").css('visibility','visible');
}

	});



// var expireDateStr = $("#expire").val();
// var expireDateArr = expireDateStr.split("/");
// var expireDate = new Date(expireDateArr[2], expireDateArr[0], expireDateArr[1]);
// var todayDate = new Date();

// if (todayDate > expireDate) {
//    $("<div class=\"message-warning\">This subscription is expired</div>")
//     .insertAfter("#enddate");
// };





	
});

