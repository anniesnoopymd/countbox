var num=12

function check(){
   if(num<10){
      $(".text").text("數量極少!!!");
      $(".text").css("border-color","#FF6505");
      $(".text").css("color","#FF6505");
      $(".fill_stock").addClass("fill_stock_open");
   }
   else if(num>=10 && num<=20){
      $(".text").text("賣得不錯喔!!!");
      $(".text").css("border-color","#FFC20D");
      $(".text").css("color","#FFC20D");
      $(".fill_stock").removeClass("fill_stock_open");
   }
   else{
      $(".text").text("還剩很多!!");
      $(".text").css("border-color","#0F93DF");
      $(".text").css("color","#0F93DF");
      $(".fill_stock").removeClass("fill_stock_open");
   }
}

$(".minus").click(
   function(){
      num=num-1;
      $(".num").text(num);

      check();
}
);

$(".add").click(
   function(){
      num=num+1;
      $(".num").text(num);

   check();
   }
);


var waittime = 0;
$(".fill_stock").click(
   function(){
      $(".fill_stock").text("☎ Calling...");
      setInterval(
         function(){
            waittime = waittime + 1 ;
            $(".fill_stock").text("☎ Calling...  "+ waittime);
         }
         ,1000)

   }

);
