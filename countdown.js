function CountdownTimer(elm,tl,mes){
    this.initialize.apply(this,arguments);
   }
   CountdownTimer.prototype={
    initialize:function(elm,tl,mes) {
     this.elem = document.getElementById(elm);
     this.tl = tl;
     this.mes = mes;
    },countDown:function(){
     var timer='';
     var today=new Date();
    //  var day=Math.floor((this.tl-today)/(24*60*60*1000));
     var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
     var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
     var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
     var me=this;
   
     if( ( this.tl - today ) > 0 ){
      // timer += '<div>'+day+'<span>ДНЕЙ</span></div><span class="dottedCount">:</span>';
      timer += '<div>'+hour+'<span>ЧАСОВ</span></div><span class="dottedCount">:</span>';
      timer += '<div>'+this.addZero(min)+'<span>МИНУТ</span></div><span class="dottedCount">:</span><div>'+this.addZero(sec)+'<span>СЕКУНД</span></div>';
      this.elem.innerHTML = timer;
      tid = setTimeout( function(){me.countDown();},10 );
     }else{
      this.elem.innerHTML = this.mes;
      return;
     }
    },addZero:function(num){ return ('0'+num).slice(-2); }
   }
   function CDT(){
   
    // Set countdown limit
    var tl = new Date('2019/05/05 1:00:00');
   
    // You can add time's up message here
    var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
    timer.countDown();
   }
   window.onload=function(){
    CDT();
       var mySwiper = new Swiper ('.swiper-container', {
           // Optional parameters
           direction: 'horizontal',
           loop: true,
           slidesPerGroup: 1,
           observer: true,
           // If we need pagination
           pagination: {
             el: '.swiper-pagination',
           },
       
           // Navigation arrows
           navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
           },
       
           // And if we need scrollbar
           scrollbar: {
             el: '.swiper-scrollbar',
           },
         })
         $('.whatNeed_btn__cetfificate').click(function() {
           // console.log("not working");
           // mySwiper.init();
           mySwiper.update();
         });
   
         var mySwiperTwo = new Swiper ('.swiper-containerTwo', {
           // Optional parameters
           direction: 'horizontal',
           loop: true,
           slidesPerGroup: 1,
           observer: true,
           // If we need pagination
           pagination: {
             el: '.swiper-pagination',
           },
       
           // Navigation arrows
           navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
           },
       
           // And if we need scrollbar
           scrollbar: {
             el: '.swiper-scrollbar',
           },
         })
         $('.whatNeed_btn__cetfificate').click(function() {
           // console.log("not working");
           // mySwiper.init();
           mySwiperTwo.update();
         });
   }