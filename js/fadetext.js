 const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements1 = document.querySelectorAll(".hidden");
hiddenElements1.forEach((el) => observer1.observe(el));


 const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)

        if (entry.isIntersecting) {
            entry.target.classList.add("ikan0-1-animation");
        } else {
            entry.target.classList.remove("ikan0-1-animation");
        }
    });
});

const hiddenElements2 = document.querySelectorAll(".ikan0-1");
hiddenElements2.forEach((el) => observer2.observe(el));


 const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)

        if (entry.isIntersecting) {
            entry.target.classList.add("ikan0-2-animation");
        } else {
            entry.target.classList.remove("ikan0-2-animation");
        }
    });
});

const hiddenElements3 = document.querySelectorAll(".ikan0-2");
hiddenElements3.forEach((el) => observer3.observe(el));


  const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)

        if (entry.isIntersecting) {
            entry.target.classList.add("ikan-grup-animation");
        }
    });
});

const hiddenElements4 = document.querySelectorAll(".ikan-grup");
hiddenElements4.forEach((el) => observer4.observe(el));


 const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)

        if (entry.isIntersecting) {
            entry.target.classList.add("ikan3-grup-animation");
        } else {
            entry.target.classList.remove("ikan3-grup-animation");
        }
    });
});

const hiddenElements5 = document.querySelectorAll(".ikan3-grup");
hiddenElements5.forEach((el) => observer5.observe(el));


 const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)

        if (entry.isIntersecting) {
            entry.target.classList.add("show2");
        } else {
            entry.target.classList.remove("show2");
        }
    });
});

const hiddenElements6 = document.querySelectorAll(".hidden2");
hiddenElements6.forEach((el) => observer6.observe(el));

const observer7 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements7 = document.querySelectorAll(".hidden3");
hiddenElements7.forEach((el) => observer7.observe(el));

const observer8 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("hiu-animation");
        }
    });
});

const hiddenElements8 = document.querySelectorAll(".hiu");
hiddenElements8.forEach((el) => observer8.observe(el));

const observer9 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("slide-penutupan-animation");
        } else {
            entry.target.classList.remove("slide-penutupan-animation");
        }
    });
});

const hiddenElements9 = document.querySelectorAll(".slide-penutupan-items");
hiddenElements9.forEach((el) => observer9.observe(el));
