let text = document.querySelector(".navbar .left p")

text.innerHTML = text.innerText.split("").map((char, i) =>
    `<span style = "transform: rotate(${i * 23}deg)">${char}</span>`
).join("");

function fixed() {
    gsap.to(".fixed .center", {
        scale: 0.7,
        scrollTrigger: {
            trigger: ".fixed",
            scroller: "body",
            // markers: true,
            start: "top 0%",
            end: "top -60%",
            scrub: 3
        }
    });

    let tl = gsap.timeline()

    tl.from(".fixed .center h1", {
        y: "100%",
        stagger: .3,
        opacity: 0
    });
    tl.from(".fixed .center p", {
        y: "100%",
        stagger: .3,
        opacity: 0
    });
}

fixed();

let tme = document.querySelector(".navbar .right p span")

setInterval(() => {
    let date = new Date();
    tme.innerHTML = date.toLocaleTimeString();
}, 1000)

function page2() {
    const boxes = gsap.utils.toArray(".box");

    gsap.set(boxes, {
        motionPath: {
            path: "#circlePath",
            align: "#circlePath",
            alignOrigin: [0.5, 0.5],
            start: -0.25,
            end: (i) => i / boxes.length - 0.25,
            autoRotate: true
        }
    });

    Draggable.create(".container", {
        type: "rotation",
        inertia: true,
        snap: (endVal) => gsap.utils.snap(360 / boxes.length, endVal)
    });

    let tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top 40%",
            scrub: 1
        }
    })

    tl1.from(".page2 .top h1", {
        y: "100%",
        rotate: 30,
        opacity: 0
    })
}

page2()

function page3() {
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page3",
            scroller: "body",
            start: "top 50%",
            end: "top 40%",
            scrub: 1
        }
    })

    tl3.from(".page3 .hed h1", {
        y: "100%",
        rotate: 30,
        stagger: .3,
        opacity: 0
    })
}

page3()

function page4() {
    let tl4 = gsap.timeline({
        scrollTrigger: ({
            trigger: ".page4",
            scroller: "body",
            start: "top 50%",
            end: "top 30%",
            scrub: 2
        })
    })
    tl4.from(".page4 .top p", {
        y: "100%",
        opacity: 0
    })
    let tl5 = gsap.timeline({
        scrollTrigger: ({
            trigger: ".page4",
            scroller: "body",
            start: "top 40%",
            end: "top 30%",
            scrub: 2
        })
    })
    tl5.from(".page4 .center h1", {
        x: "-200%"
    }, "a")
    tl5.from(".page4 .center h3", {
        x: "200%"
    }, "a")

    let tl6 = gsap.timeline({
        scrollTrigger: ({
            trigger: ".page4",
            scroller: "body",
            start: "top -10%",
            end: "top -15%",
            scrub: 2
        })
    })
    tl6.from(".page4 .bot p", {
        y: "100%",
        opacity: 0
    })

}

page4()

function splitText() {
    let h1 = document.querySelector(".page4 .center h1")

    let h1Text = h1.textContent
    let splitText = h1Text.split("")
    let clutter = ""

    splitText.forEach(function (e) {
        clutter += `<span>${e}</span>`
    })
    h1.innerHTML = clutter

    let h3 = document.querySelector(".page4 .center h3")

    let h3Text = h3.textContent
    let sText = h3Text.split("")
    let cluter = ""

    sText.forEach(function (e) {
        cluter += `<span>${e}</span>`
    })
    h3.innerHTML = cluter
}

splitText()

function page5() {
    let tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page5",
            scroller: "body",
            start: "top 60%",
            end: "top 10%",
            scrub: 3
        }
    })
    tl7.to(".page5 .top .one", {
        rotate: "8deg",
    }, "a")
    tl7.to(".page5 .top .two", {
        rotate: "-8deg",
    }, "a")
}

page5()

let btn = document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let btnWidth = btn.clientWidth;
        let btnHeight = btn.clientHeight;
        let transX = (x - btnWidth / 2);
        let transY = (y - btnHeight / 2);
        btn.style.transform = `translateX(${transX}px) translateY(${transY}px`;
    })
    btn.addEventListener("mouseout", function (e) {
        btn.style.transform = "";
    });
});

let tex = document.querySelector(".page7 .circle p")

tex.innerHTML = tex.innerText.split("").map((char, i) =>
    `<span style = "transform: rotate(${i * 9}deg)">${char}</span>`
).join("");