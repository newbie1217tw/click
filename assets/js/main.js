// 開場
const timeline = gsap.timeline();
timeline.to(".loading_bar ", {width: "200%", backgroundColor: "rgb(50, 50, 50)", duration: 0.2, delay: 7})
timeline.to(".loading_cover_up, .loading_cover_down", {height: "0%", duration: 1.0, delay: 0.8})
timeline.to(".loading_bar_block", {display: "none"}, "-=1.5")
timeline.from(".header_left, .header_right", {top: "-5vw"})
timeline.to(".loading_cover_up, .loading_cover_down", {display: "none"})

// film control
const videos_list = ['film1.mp4', 'film2.mp4', 'film3.mp4'];
const project_list = ['https://xv4upwjfkxu4glzu88ncjq.on.drv.tw/web20231206%E7%A5%9E%E4%BB%99%E8%B0%B7%E5%B0%88%E6%A1%88/', 'https://xv4upwjfkxu4glzu88ncjq.on.drv.tw/web20231206%E8%AD%B7%E9%AD%9A%E6%AD%A5%E9%81%93%E5%B0%88%E6%A1%88/', 'https://xv4upwjfkxu4glzu88ncjq.on.drv.tw/web20231206%E5%8D%97%E5%BA%84%E8%80%81%E8%A1%97%E5%B0%88%E6%A1%88/'];
const yt_list = ['https://www.youtube.com/watch?v=JFC7QwIBVMo&feature=youtu.be&ab_channel=ELLYMILK', 'https://www.youtube.com/watch?v=c9hXK_ENaKw&feature=youtu.be&ab_channel=ELLYMILK', 'https://www.youtube.com/watch?v=AHsTZJmXhn0&ab_channel=ELLYMILK'];
const name_list = ['神仙谷', '護漁步道', '南庄老街'];
const num_list = ['#01', '#02', '#03'];
const description_list = ['<p><em>幽靜的山谷，恐怖又迷人，<br>有人稱之為神仙谷，<br>也有人稱作死亡谷。</em></p>', '<p><em>跟著魚群的腳步，我們探索者沿路的山水，<br>聆聽著潺潺流水聲，呼吸著大地的空氣，<br>感受著陽光與樹陰的溫暖。</em></p>', '<p><em>喧嘩的人群聲，急促的腳步聲，<br>國際慢城在這邊顯得不這麼慢了，<br>但也是另一種清閒康樂。</em></p>'];
const videos = document.getElementById('fullscreen-video');
const project = document.getElementById('header-project');
const yt = document.getElementById('header-yt');
const title_num = document.querySelector('.video_title h1');
const title_name = document.querySelector('.video_title h2');
const description = document.querySelector('.video_description');
const descriptionid = document.getElementById('video-description');

let currentVideo = 0;
function changeVideo(direction) {
    if (direction === 'down') {
        currentVideo = (currentVideo + 1) % videos_list.length;
    } else if (direction === 'up') {
        currentVideo = (currentVideo - 1 + videos_list.length) % videos_list.length;
    }
    videos.src = "film/" + videos_list[currentVideo];
    videos.load();
    project.href = project_list[currentVideo];
    yt.href = yt_list[currentVideo];
    title_num.textContent = num_list[currentVideo];
    title_name.textContent = name_list[currentVideo];
    description.innerHTML = description_list[currentVideo];
}   

function handleScroll(event) {
    const delta = Math.sign(event.deltaY);

    if (delta > 0) {
        changeVideo('down');
    } else if (delta < 0) {
        changeVideo('up');
    }
}

document.addEventListener('wheel', handleScroll);

document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.querySelector('.header_about');
    const titleLink = document.querySelector('.header_title');
    const worksLink = document.querySelector('.header_works');
    const sidebar = document.querySelector('.sidebar');
    const rightButton = document.getElementById('right-button');
    const leftButton = document.getElementById('left-button');

    // left & right button
    rightButton.addEventListener('click', function() {
        changeVideo('down');
    });
    
    leftButton.addEventListener('click', function() {
        changeVideo('up');
    });

    // about
    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.classList.toggle('active');

        const targetId = aboutLink.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // bloom
    titleLink.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.classList.toggle('active');

        const targetId = titleLink.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // works
    worksLink.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.classList.toggle('active');

        const targetId = worksLink.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

let slideIndex = 1;

function openModal() {
    document.getElementById('myModal').style.display = 'block';
    document.querySelector('.thumbnails').style.display = "none";
    document.querySelector('.header_left').style.display = "none";
    document.querySelector('.header_right').style.display = "none";
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    document.querySelector('.thumbnails').style.display = "flex";
    document.querySelector('.header_left').style.display = "block";
    document.querySelector('.header_right').style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('slide');
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

const group1 = ['images/forest/forest1.jpg', 'images/forest/forest2.jpg', 'images/forest/forest3.jpg', 'images/forest/forest4.jpg', 'images/forest/forest5.jpg', 'images/forest/forest6.jpg', 'images/forest/forest7.jpg', 'images/forest/forest8.jpg', 'images/forest/forest9.jpg', 'images/forest/forest10.jpg', 'images/forest/forest11.jpg', 'images/forest/forest12.jpg', 'images/forest/forest13.jpg'];
const group2 = ['images/plog/plog1.jpg', 'images/plog/plog2.jpg', 'images/plog/plog3.jpg', 'images/plog/plog4.jpg', 'images/plog/plog5.jpg', 'images/plog/plog6.jpg', 'images/plog/plog7.jpg'];
const group3 = ['images/sea/sea1.jpg', 'images/sea/sea2.jpg', 'images/sea/sea3.jpg', 'images/sea/sea4.jpg', 'images/sea/sea5.jpg', 'images/sea/sea6.jpg'];

function showGroup(group, num) {
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = '';
    group.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        if (index === 0) {
            slide.style.display = 'block';
        }
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Image ' + (index + 1);
        slide.appendChild(img);
        modalContent.appendChild(slide);
    });
    openModal();
    slideIndex = num;
    showSlides(slideIndex);
}

function showGroup1(num) {
    showGroup(group1, num);
}

function showGroup2(num) {
    showGroup(group2, num);
}

function showGroup3(num) {
    showGroup(group3, num);
}