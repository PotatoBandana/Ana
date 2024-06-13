window.onload = function(){

    console.log( document.getElementById('t1Econ'));

    document.getElementById('t1Econ').onclick = toggleList;

    var t1 = document.getElementById("t1EList");
    var bar = document.getElementById("blue");

    function toggleList(){
        // console.log('sss');

        // console.log(x);
        // console.log(x.style);
        // if(x.classList.contains('hide')){
        //     x.classList.remove('hide')
        // }else{
        //     x.classList.add('hide')

        // }
        if (t1.style.display === "none") {
        t1.style.display = "flex";
        bar.style.display = 'block';
        } else {
        t1.style.display = "none";
        bar.style.display = 'none';
        }
    }
  }



    
    
    
    
    
    
    
    // document.getElementById('t1Econ').onclick = openList;

    // function openList(){
    //     getElementById('t1EList').css('display', block)
    // }
