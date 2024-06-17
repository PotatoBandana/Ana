window.onload = function(){


    //選天------------------------------------------- 
    const itemWidth = $('.dayWrapper li').outerWidth(true); // Includes margin
    const totalItems = $('.dayWrapper li').length;
    const visibleItems = 7;
    const gap = 8;
    const scrollAmount = (itemWidth + gap) * visibleItems;

    // Calculate the middle position
    const middlePosition = ((totalItems * (itemWidth + gap)) - gap - $('.dayWrapperContainer').width()) / 2;

    // Set the initial scroll position to the middle
    $('.dayWrapper').scrollLeft(middlePosition);

    $('.dayWrapper li').click(function(){
        $('.dayWrapper li').removeClass('selected'); // Remove 'selected' class from all items
        $(this).addClass('selected'); // Add 'selected' class to the clicked item
    });

    $('.dayLeft').click(function(){
        $('.dayWrapper').animate({
            scrollLeft: '-=' + scrollAmount
        }, 400,); // Use 'easeOutQuad' easing function
    });

    $('.dayRight').click(function(){
        $('.dayWrapper').animate({
            scrollLeft: '+=' + scrollAmount
        }, 400,); // Use 'easeOutQuad' easing function
    });


    // 頁面寬度偵測------------------------------------
    var VW;
    var shift = 0;
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
    $(window).resize(updateVW);

    //艙等左右滑動選擇----------------------------------

    $('.scrollRight').click(function(){
        var N = $(this).attr('id').substr(1, 1);
        if(VW >1027){
            if (count <= 1){
                count++;
                var po = $('#t' + N + 'P').position().left;
                shift = shift - po

                $('.classSel').animate({'left': shift}, 500);
                // console.log(po);
            }
        }else{
            var N = $(this).attr('id').substr(1, 1);
            if (count <= 2){
                count++;
                var po = $('#t' + N + 'P').position().left;
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
                var po = $('#t' + N + 'P').position().left;
                shift = shift + po

                $('.classSel').animate({'left': shift}, 500);
                // console.log(po);
            }
        }else{
            var N = $(this).attr('id').substr(1, 1);
            if (count > 0){
                count--;
                var po = $('#t' + N + 'P').position().left;
                shift = shift + po
            
                $('.classSel').animate({'left': shift}, 500);
                        // console.log(po);
            }
        }    
    })

    $('#tab2').click(function(){
        if (count <= 0){
            count++;
            var po = $('#t1P').position().left;
            shift = shift - po

            $('.classSel').animate({'left': shift}, 500);
            $(this).css({'background-color': '#DDE2F5', 'color': '#012064'});
            $('#tab1').css({'background-color': 'white'});
        }
        
    })

    $('#tab1').click(function(){
        if (count > 0){
            count--;
            var po = $('#t1P').position().left;
            shift = shift + po

            $('.classSel').animate({'left': shift}, 500);
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
