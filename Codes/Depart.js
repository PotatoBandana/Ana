window.onload = function(){


    //選天------------------------------------------- 
    const itemWidth = $('.dayWrapper li').outerWidth(true); //按鈕寬度偵測
    const totalItems = $('.dayWrapper li').length; //按鈕數量
    const visibleItems = 7; //顯示按鈕數量
    const gap = 8; //按鈕之間距離
    const scrollAmount = (itemWidth + gap) * visibleItems;
    
    const middlePos = ((totalItems * (itemWidth + gap)) - gap - $('.dayWrapperContainer').width()) / 2; // 計算中間位置
    $('.dayWrapper').scrollLeft(middlePos); // 將中間位置設定成預設

    // 選天按鈕單選----------------------------------
    $('.dayWrapper li').click(function(){
        $('.dayWrapper li').removeClass('selected'); 
        $(this).addClass('selected'); 
    });

    $('.dayLeft').click(function(){
        $('.dayWrapper').animate({
            scrollLeft: '-=' + scrollAmount
        }, 400,);
    });

    $('.dayRight').click(function(){
        $('.dayWrapper').animate({
            scrollLeft: '+=' + scrollAmount
        }, 400,);
    });


    // 頁面寬度偵測------------------------------------
    var VW;
    var shift1 = 0;
    var shitt2 = 0;
    var shitf3 = 0;
    var count = 0;    
    function updateVW() {
        VW = $(window).width();
        // console.log(VW);
        count = 0;
        shift = 0;
        $('.classSel').animate({'left': 0}, 500);
        stop(true. false)
    }
    updateVW();
    $(window).resize(updateVW); //視窗變動reset scroll

    //艙等左右滑動選擇----------------------------------

    $('.scrollRight').click(function(){
        var N = $(this).attr('id').substr(1, 1);
        if(VW >1145){
            if (count <= 1){
                count++;
                var po = $('#t' + N + 'P').position().left;
                shift = shift - po

                $('.classSel').stop(true, false).animate({'left': shift}, 500);
                // console.log(po);
            }
        }else{
            var N = $(this).attr('id').substr(1, 1);
            if (count <= 2){
                count++;
                var po = $('#t' + N + 'P').position().left;
                shift = shift - po
            
                $('.classSel').stop(true, false).animate({'left': shift}, 500);
                    // console.log(po);
            }
        }            
    })

    $('.scrollLeft').click(function(){
        var N = $(this).attr('id').substr(1, 1);
        if(VW >1145){
            if (count > 0){
                count--;
                var po = $('#t' + N + 'P').position().left;
                shift = shift + po

                $('.classSel').stop(true, false).animate({'left': shift}, 500);
                // console.log(po);
            }
        }else{
            var N = $(this).attr('id').substr(1, 1);
            if (count > 0){
                count--;
                var po = $('#t' + N + 'P').position().left;
                shift = shift + po
            
                $('.classSel').stop(true, false).animate({'left': shift}, 500);
                        // console.log(po);
            }
        }    
    })

    $('#tab2').click(function(){
        if (count <= 0){
            count++;
            var po = $('#t1P').position().left;
            shift = shift - po

            $('.classSel').stop(true, false).animate({'left': shift}, 500);
            $(this).css({'background-color': '#DDE2F5', 'color': '#012064'});
            $('#tab1').css({'background-color': 'white'});
        }
        
    })

    $('#tab1').click(function(){
        if (count > 0){
            count--;
            var po = $('#t1P').position().left;
            shift = shift + po

            $('.classSel').stop(true, false).animate({'left': shift}, 500);
            $(this).css({'background-color': '#DDE2F5'});
            $('#tab2').css({'background-color': 'white'});
        }
        
    })



//點擊艙等展開清單------------------------------------------
    
    $('.classSel > li').click(function(){
        var target = '#' + $(this).attr('id').substr(0, 3) + 'List';
        $('.levelWrapper').not(target).slideUp();
        setTimeout(function(){
            $(target).slideToggle(400, function() {});
        }, 400);
        console.log(target);
    })
        
 // 航班細節popup-------------------------------------
    $('.infoWrapper').click(function(){
        $('.flightDetail').css('display', 'block');
        
    })

    $('.flightDetail').click(function(){
        $(this).css('display', 'none')
    })

    $('.fa-circle-xmark').click(function(){
        $(this).closest('.flightDetail').css('display', 'none');
    });

    $('.popup').click(function(e){
        e.stopPropagation()
    })

}



    
    
    
    
    
    
    
    // document.getElementById('t1Econ').onclick = openList;

    // function openList(){
    //     getElementById('t1EList').css('display', block)
    // }
