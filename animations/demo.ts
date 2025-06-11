import { gsap } from 'gsap';
import { ExpoScaleEase } from 'gsap/EasePack';

export default function animate() {
    if(!import.meta.client) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const square = Array.from(document.getElementsByClassName("transition-title"))[0];
    square.setAttribute("x", `${width * .05}`);
    //square.setAttribute("y", `${height * 0.5}`);

    const leftTl = gsap.timeline();
    leftTl.to(".left-title", {x: width * 0.5, duration: .7});
    leftTl.to(".left-title", {x: width * 0.5 + 5, rotation: 45, duration: .5, transformOrigin: '0% 50%', delay: 0.3});
    leftTl.to(".left-title", {x: width, duration: .7});

    const rightTl = gsap.timeline();
    rightTl.to(".right-title", {x: -width * 0.5 + 50, duration: .7})
    rightTl.to(".right-title", {x: -width *0.5-5, rotation: 45, duration: .5, transformOrigin: '100% 00%', delay: 0.3});
    rightTl.to(".right-title", {x: -width, duration: .7})

    const squareTl = gsap.timeline();
    squareTl.to(".transition-title", {
        x: width * 0.5,
        y: height * 0.25,
        rotation: -45,
        duration: .7
    });
    squareTl.to(".transition-title", {
        transformOrigin: "center",
        scaleY: 20,
        scaleX: 10,
        duration: .7,
        ease: ExpoScaleEase.config(0.1, 5)
    })

}
