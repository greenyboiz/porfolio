const courseAPI = "https://60d4611a61160900173cb070.mockapi.io/courses"

function getCourse(callback) {
    fetch(courseAPI)
        .then(function (response) {
         // console(response.json());
            return response.json(); 
        })
        .then(callback);
}

function renderCourse(courses) {
    var listCoursesBlock = document.querySelector(".tutor__course");
    let htmls = courses.map(function (course) {
        return `
    <div class="tutor__course__column">
        <div class="tutor__course__header">
            <a href="#">
                <img src="./assets/images/news_image_1.jpeg" alt="" loading="lazy" width="100%" height="100%">
            </a>
            <div class="tutor__inside">
                <span class="tutor__level">${course.level}</span>
                <a href="#" class="tutor__wishlist dark-blue">
                    <span><i class="far fa-bookmark"></i></span>
                </a>
            </div>
        </div>
    <div class="tutor__course__content">
        <div class="tutor__rating__wrap mb-3">
            <div class="tutor__star__rating__group">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span class="tutor__rating__num">
                    ${course.rate}.00 (${course.rate_quantity})
                </span>
            </div>
        </div>
    <div class="tutor__course__title mb-3">
    <h2>${course.name}</h2>
    </div>
    <div class="tutor__meta mb-3">
    <div class="tutor__number__user mr-3">
    <i class="far fa-user"></i>
    <span>${course.total_enrolled}</span>
    </div>
    <div class="tutor__clock">
    <i class="far fa-clock"></i>
    <span>${course.duration}</span>
    </div>
    </div>
    <div class="tutor-loop-author mb-3">
    <div class="tutor-single-course-avatar mr-2">
    <a href="#" tabindex="0">
    <img src="./assets/images/student_1.jpg" class="tutor-image-avatar"
    alt="">
    </a>
    </div>
    <div class="tutor-single-course-author-name">
    <span style="color: #ccc;">by</span>
    <a href="https://thepixelcurve.com/wp/edubin/tutor/profile/wpadmin"
    tabindex="0">
    ${course.teacher}
    </a>
    </div>
    <div class="tutor-course-lising-category">
    <span style="color: #ccc;">In</span>
    <a href="https://thepixelcurve.com/wp/edubin/tutor/course-category/fitness/"
    tabindex="0">
    ${course.categories}
    </a>
    </div>
    </div>
    </div>
    <hr>
    <div class="tutor__course__footer">
    <div class="tutor__course__fee">
    <span class="dark-blue">${(course.price != 0) ? ('£' + course.price) : ('Free')}</span>
    </div>
    <div class="tutor__course__cart">
    <i class="fas fa-shopping-cart dark-yellow"></i>
    <a href="#">Add to cart</a>
    </div>
    </div>
    </div>
    </div>
    `;
    })
    listCoursesBlock.innerHTML = htmls.join('');
    $('.tutor__course').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ' <button class="arrow__btn btn__prev" style="right: 2.5rem"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: ' <button class="arrow__btn btn__next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    });

}

function start() {
    getCourse(function (courses) {
        renderCourse(courses);
    });

}
start()