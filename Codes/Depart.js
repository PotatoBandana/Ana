window.onload = function(){


    //點擊艙等後視窗彈出----------------------------------- 
    // document.getElementById('t1Econ').onclick = toggleList;

    // var t1 = document.getElementById("t1EList");
    // var bar = document.getElementById("blue");


    // function toggleList(){
    //     // console.log(x);
    //     // console.log(x.style);
    //     // if(x.classList.contains('hide')){
    //     //     x.classList.remove('hide')
    //     // }else{
    //     //     x.classList.add('hide')
    //     // }

        

    //     if (t1.style.display === "none") {
    //     t1.style.display = "flex";
    //     bar.style.display = 'block';
    //     } else {
    //     t1.style.display = "none";
    //     bar.style.display = 'none';
    //     }
    // }
    // 頁面寬度偵測------------------------------------
    var VW;
    var shift = 0;
    var count = 0;    
    function updateVW() {
        VW = $(window).width();
        console.log(VW);
        count = 0;
        shift = 0;
        $('.classSel').animate({'left': 0}, 500);
        stop(true. false)
      }
      updateVW();
      $(window).resize(updateVW);

    //艙等左右滑動選擇----------------------------------
    
    $('.scrollRight').click(function(){
        var N = $(this).attr('id').substr(1, 1);
        if(VW >1027){
            if (count <= 1){
                count++;
                var po = $('#t' + N + 'EconP').position().left;
                shift = shift - po

                $('.classSel').animate({'left': shift}, 500);
                // console.log(po);
            }
        }else{
            var N = $(this).attr('id').substr(1, 1);
            if (count <= 2){
                count++;
                var po = $('#t' + N + 'EconP').position().left;
                shift = shift - po
            
                $('.classSel').animate({'left': shift}, 500);
                        // console.log(po);
            }
        }            
    })

        $('.scrollLeft').click(function(){
            var N = $(this).attr('id').substr(1, 1);
            if(VW >1027){
                if (count > 0){
                    count--;
                    var po = $('#t' + N + 'EconP').position().left;
                    shift = shift + po

                    $('.classSel').animate({'left': shift}, 500);
                    // console.log(po);
                }
            }else{
                var N = $(this).attr('id').substr(1, 1);
                if (count > 0){
                    count--;
                    var po = $('#t' + N + 'EconP').position().left;
                    shift = shift + po
            
                    $('.classSel').animate({'left': shift}, 500);
                            // console.log(po);
                }
            }    
        })

    $(function(){
        $('#t1Econ').click(function(){
        $('#t1EList').slideToggle();
        })
    })

    $('.infoWrapper').click(function(){
        $('.flightDetail').css('display', 'block');
        
    })

    $('.flightDetail').click(function(){
        $(this).css('display', 'none')
    })
}



    
    
    
    
    
    
    
    // document.getElementById('t1Econ').onclick = openList;

    // function openList(){
    //     getElementById('t1EList').css('display', block)
    // }
