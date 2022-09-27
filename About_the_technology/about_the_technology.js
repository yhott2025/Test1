 import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector(".scroll-tracker");

const animatedImage = document.querySelector(".intro-text");

const scrollTrackingTimeline = new ScollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
})

const animatedImageTimeline = new ScrollTimeline({
    scrollOffsets: [
        { target: animatedImage, edge: "end", threshold: "1" },
        { target: animatedImage, edge: "start", threshold: "1" },
    ],
})

scrollTracker.animate(
{
    transform: ['scaleX(0)', 'scaleX(1)']
},
{
    duration: 1,
    timeline: scrollTrackingTimeline,
}
)

animatedImage.animate(
{
    $(".intro-text").typeWrite({
        speed: 300,
        cursor: false,
//                    fontFamily: 'Dosis', sans-serif;

//                    font: Dosis,
                    // options here
    });
//    transform: ["rotateX(45deg)", "rotate(0)"],
},
{
    duration: 1,
    timeline: animatedImageTimeline,
}
)