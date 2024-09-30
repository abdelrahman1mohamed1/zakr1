const nav = document.querySelector('nav');
let indicator = document.querySelector('.indicator');
let review = document.querySelector('.cards');

const arrow = document.getElementById('arrow');
arrow.addEventListener('click' , () => {
    scrollTo({
        top:0 ,
        behavior:"smooth"
    })
    event.preventDefault()
})
window.onscroll = function() {
    let scroll1 = scrollY;
    
    if (scroll1 > 10) {
        nav.style= `background: rgba( 58, 205, 255, 0.3 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4.5px );
-webkit-backdrop-filter: blur( 4.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );`;
        nav.style.position= 'fixed';
        nav.style.width= '80%';
        nav.style.top= '0';
        nav.style.padding= '12px 200px';
        nav.style.borderRadius= '25px';
        nav.style.margin= '15px 10%';
        arrow.classList.remove('hidden')
   
        


    } else if(scroll1 <= 10) {
        nav.style.background= 'none';
        nav.style.position= 'relative';
        nav.style= `
            display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 25px;
    z-index: 999;`;
    arrow.classList.add('hidden')
    }
    let DocumentHeight = document.body.offsetHeight;
    let viewportHeight = window.innerHeight;


    let percentageScrolled = scrollY / (viewportHeight -  DocumentHeight ) * 100 ;
    indicator.style.width= Math.abs(percentageScrolled) + '%' ;
    console.log( Math.abs(percentageScrolled))


    review.style= `
    transform: translateX(${ -scrollY + 'px'} );`;
}

