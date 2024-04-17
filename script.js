// const tl = gsap.timeline({default: {ease: 'power4.out', duration: .7}})
        
//         gsap.set('g', {
//             autoAlpha: 1
//         })

//         gsap.to('svg', {
//             scale: 1.3,
//             duration: 2
//         })

//         tl
//             .from('#MR', {
//                 // yPercent: 220,
//                 stagger: .03,
//                 skewY: 60,
//                 skewX: 30,
//                 scaleX: .02,
//                 opacity: 0,
//                 duration: 1 //duracion de la animacion 
//             })

//             .from('#Luna', {
//                 xPercent: 500,
//                 // stagger: .03,
//                 // skewY: 0,
//                 // skewX: 30,
//                 // scaleX: 0.9,
//                 opacity: 0,
//                 duration: 1 //duracion de la animacion 
//             }, "-=.1")

//             .from('#Name .st1', {
//                 xPercent: -107,
//                 duration: 2,
//                 opacity: 0,
//                 stagger: .06, //escalonado
//                 ease: 'elastic.out(1, .5)'
//             }, "-=.2")

//             .from('#Background-backend', {
//                 xPercent: -107,
//                 duration: 3,
//                 opacity: 0,
//                 stagger: .1, //escalonado
//                 ease: 'elastic.out(1, .5)'
//             }, "<")

//             .from('#Punto',{
//                 yPercent: -300,
//                 opacity: 0,
//                 duration: 3,
//                 ease: 'elastic.out(2, .3)'
//             }, "-=1")
            
// /*----------------------------------------------------------*/
//             //SUSTITUIMOS "Backend developer" POR "Cristina Muñoz Rico"
//             .to('#Name .st1',{
//                 stagger: .06,
//                 duration: .1,
//                 opacity: 0
//             }, "=-3")
//             .from('#Text .st1',{
//                 xPercent: -107,
//                 duration: 2,
//                 opacity: 0,
//                 stagger: .06, //escalonado
//                 ease: 'elastic.out(1, .5)'
//             }, "<")
// /*----------------------------------------------------------*/
//             //Desaparece "Backend developer"
//             .to('#Text-background',{
//                 ease: 'elastic.out(2, .4)',
//                 xPercent:-6,
//                 duration: .8
//             })
//             .to('#Text-background',{
//                 xPercent:700,
//                 opacity: 0,
//                 duration: 2
//             }, "-=.6")
//             //El punto empuja "MCR"
//              .to('#Punto',{
//                 yPercent: 240
//              },"<")
//              .to('#Punto',{
//                 yPercent: -200,
//                 ease: 'elastic.out(5, .4)',
//                 duration: 1.2
//              },"-=.8")
             
//              //Desaparece "CMR"
//              .to('#MR, #Luna',{
//                 yPercent: -700,
//                 opacity: 0,
//                 duration: 1.5
//              },"-=1.2")

// /*----------------------------------------------------------*/
//             //Punto baja para sube la pantalla
//             .to('#Punto',{
//                 yPercent: 1400,
//                 duration: .3
//             },"-=.3")
//             //subimos punto
//             .to('#Punto',{
//                 yPercent: -3100,
//                 ease: 'back.in(1)',
//                 duration: .2,
//                 opacity: 0
//             },"-=.1")

//             .to('.reveal', {
//                 scaleY: 0,
//                 transformOrigin: 'top',
//                 duration: 1.2,
//                 ease: 'power4.inOut'
//             }, "-=.3")
//             .from('.porfolio',{
//                 opacity:0
//             })

// /*-------------------------------------------------*/
// /*           PAGINA INICIO PORFOLIO                */
// /*-------------------------------------------------*/
// // EFECTOS DEL MOVIMIENTO DEL RATÓN
// const light = document.querySelector(".light");
// const grid = document.querySelector("#backgraund-grid");

// grid.addEventListener("mousemove", (e) =>{
//     // light.style.transform = `translate(-50%, -50%) translate(${e.clientX}px)`;

//     light.style.left = `${e.clientX}px`;
//     light.style.top = `${e.clientY}px`;
// });
