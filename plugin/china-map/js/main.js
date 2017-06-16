
	var timer1='';
	var id=0;
    $(function(){
       clearInterval(timer1);
       timer1 = setInterval(msgs,100);
    });
 
function msgs(){
        $(".citybg").hide();
        $('#city'+id).children("div").show();
		id++;
		if(id==32){
			id=0;
		}
}
