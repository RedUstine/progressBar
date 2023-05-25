$(document).ready(function(){
    $(".counter-form").on("submit", function(){
        let angle = $(".form-input").val()
        $(".counter-text").html(angle + "%")
        let startCount = 0
        let countTimer = setInterval(() => {
            if (startCount < angle){
                startCount ++;
                $(".counter-box").css({background: `conic-gradient(var(--grin) calc(360/100*${startCount}deg), var(--wht) 0deg)`})
            }
            else{
                clearInterval(countTimer)
            }
        });
      return false;
        })
  })