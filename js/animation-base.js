
// GSAPとSplitTextのプラグインを登録
gsap.registerPlugin(SplitText, ScrollTrigger);


// start -----------------------------------------------------------------------------------//
//
//			#headerのアニメーション
// 

// 単語単位、文字単位、行単位で情報をストックする
const headerH1 = new SplitText(".first-view .text-area h1 .catch", {type: "words,chars,lines"});
const headerH2 = new SplitText(".first-view .text-area h2 .catch", {type: "words,chars,lines"});

gsap.set([headerH1.chars, headerH2.chars], {
    autoAlpha: 0,
    y: 100,
    rotationX: 5
});

gsap.set(".first-view .text-area ul li", {
    autoAlpha: 0,
    y: 100
});

const headerAnimation = gsap.timeline();

headerAnimation
.from('.header nav .logo', {
    autoAlpha: 0,
    x: -150,
    filter: "blur(30px)"
})
.from('.header nav ul li', {
    autoAlpha: 0,
    y: -50,
    stagger: 0.15
}, "<") // 前のアニメーションと同時にスタート
// toは初期状態をgsapで作っているものに使う
.to(headerH2.chars, {
    autoAlpha: 1,
    y: 0,
    rotationX: 0,
    stagger: 0.05,
    ease: "power2.out"
}, "<")
.to(headerH1.chars, {
    autoAlpha: 1,
    y: 0,
    rotationX: 0,
    stagger: 0.025,
    ease: "power2.out"
}, "<1")
.to(".first-view .text-area ul li", {
    autoAlpha: 1,
    y: 0,
    stagger: 0.05,
})
.from(".first-view .text-area .sentence", {
    autoAlpha: 0,
    y: 100
})
.from(".first-view .splide", {
    autoAlpha: 0,
    x: 200,
    y: 200,
    scale: 1.1,
}, "<") // sentenceと同時に発火



// start -----------------------------------------------------------------------------------//
//
//			.whatのアニメーション
//













// start -----------------------------------------------------------------------------------//
//
//			.worksのアニメーション
//
















// start -----------------------------------------------------------------------------------//
//
//			.featureのアニメーション
//













// start -----------------------------------------------------------------------------------//
//
//			.meritのアニメーション
//
















// start -----------------------------------------------------------------------------------//
//
//			.flowのアニメーション
//















// start -----------------------------------------------------------------------------------//
//
//			.ctaのアニメーション
//















// start -----------------------------------------------------------------------------------//
//
//			.footerのアニメーション
//













