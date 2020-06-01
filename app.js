const sections = document.querySelectorAll('section')
const bubble=document.querySelector('.bubble')

const gradients=["linear-gradient(to right, #ad5389, #3c1053)",
"linear-gradient(to right, #8e2de2, #4a00e0)",
"linear-gradient(157deg, rgba(78,55,47,1) 0%, rgb(90, 68, 61) 100%)", 
"linear-gradient(to right, #4c4683, #3a3663,#3a3663)"];

const headergradients=["linear-gradient(to left, #DAA9C8, #DAA9Df",
"linear-gradient(to right, #b993d6, #8ca6db)",
"linear-gradient(157deg, rgba(184,151,140,1) 0%, rgba(190,155,144,1) 100%)",
"linear-gradient(157deg, rgba(255,172,76,1) 0%, rgba(255,172,76,1) 100%)"]



function scrollWin(event,x){
    event.preventDefault();
    const data=(document.querySelector(`[data-index="${x}"]`).offsetTop)
    if (typeof window.orientation !== 'undefined'){    
        if(window.innerWidth<600){
            window.scroll({
                top:data-55,
                behavior:'smooth'
            })
        }else
        window.scroll({
            top:data-20,
            behavior:'smooth'
        })
    }else{
        if(window.innerWidth<600){
            window.scroll({
                top:data-44,
                behavior:'smooth'
            })
        }else
        window.scroll({
            top:data-60,
            behavior:'smooth'
        })
    }
}

const options={
    threshold:0.6
}
var activeclass="";
let observer=new IntersectionObserver(navCheck,options)

function navCheck(entries){
        entries.forEach(entry=>{
            const className=entry.target.className;
            const activeAnchor=document.querySelector(`[data-page=${className}]`);
            const gradientIndex=entry.target.getAttribute('data-index')
            const coords=activeAnchor.getBoundingClientRect(); 
            const directions={
                height:coords.height,
                width:coords.width,
                top:coords.top,
                left:coords.left,
            };
            if(entry.isIntersecting){
                bubble.style.setProperty('left',`${directions.left}px`)
                bubble.style.setProperty('height',`${2}px`)
                bubble.style.setProperty('width',`${directions.width}px`)
                bubble.style.setProperty('top',`${directions.top+directions.height}px`)
                bubble.style.background=gradients[gradientIndex]
                document.getElementsByTagName('header')[0].style.background=headergradients[gradientIndex]
                activeclass=className;
        }
        })

}

sections.forEach(section=>{
    observer.observe(section)
})
window.onresize=function(){
    const directions=document.querySelector(`[data-page=${activeclass}]`).getBoundingClientRect();
    bubble.style.setProperty('left',`${directions.left}px`)
    bubble.style.setProperty('height',`${2}px`)
    bubble.style.setProperty('width',`${directions.width}px`)
    bubble.style.setProperty('top',`${directions.top+directions.height}px`)
}