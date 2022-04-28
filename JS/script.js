const $container = document.querySelector('.container')
const $header_button = document.querySelector('.header_button')
const $btn1 = document.querySelector('.btn')
const $btn2 = document.querySelector('.btn2')
const $btn3 = document.querySelector('.btn3')
const $burgerBtn = document.querySelector('.burger_btn')
const $burgerBtn2 = document.querySelector('.burger_btn2')
$btn1.addEventListener('click' , e => {
    e.preventDefault()
    $btn1.classList.add('active')
    $btn2.classList.remove('active')
    $btn3.classList.remove('active')
    $container.innerHTML = `
        <div class="card">
            <div class="card_title">
                <h3>Mercedes-Benz</h3>
            </div>
            <div class="card_img">
                <img src="https://i0.wp.com/www.klasikotom.com/wp-content/uploads/2019/10/W124-E60-AMG-Mercedes-Benz-Tarihcesi-motor-teknik-ozellikleri-nedir-nasil-nasildir-kps.jpg?fit=639%2C369&ssl=1">
            </div>
            <div class="card_footer">
            <p>W124-E60 AMG</p>
            </div>
        </div>
        <div class="card">
            <div class="card_title">
                <h3>Mercedes-Benz</h3>
            </div>
            <div class="card_img">
                <img src="https://img5.goodfon.ru/wallpaper/nbig/c/38/mercedes-benz-w210-e260.jpg">
            </div>
            <div class="card_footer">
                <p>W210-E260</p>
            </div>
        </div>
        <div class="card">
            <div class="card_title">
                <h3>Mercedes-Benz</h3>
            </div>
            <div class="card_img">
                <img src="https://wroom.ru/i/news/7271img1.jpg">
            </div>
            <div class="card_footer">
                <p>Gelаndewagen G-Class</p>
            </div>
        </div>
    `
})

$btn2.addEventListener('click' , e => {
    e.preventDefault()
    $btn2.classList.add('active')
    $btn1.classList.remove('active')
    $btn3.classList.remove('active')
    $container.innerHTML = `
        <div class="card">
            <div class="card_title">
                <h3>BMW</h3>
            </div>
            <div class="card_img">
                <img src="https://autoburum.com/files/images/blog/662v282b16.jpg">
            </div>
            <div class="card_footer">
            <p>BMW-i8</p>
            </div>
        </div>
        <div class="card">
            <div class="card_title">
                <h3>BMW</h3>
            </div>
            <div class="card_img">
                <img src="https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/images/bmw_7_series_black_ice_1185.jpg">
            </div>
            <div class="card_footer">
                <p>BMW-7 Black Ice Edition </p>
            </div>
        </div>
        <div class="card">
            <div class="card_title">
                <h3>BMW</h3>
            </div>
            <div class="card_img">
                <img src="https://img3.goodfon.ru/wallpaper/nbig/0/3e/bmw-e38-stance-tuning-bumer-2185.jpg">
            </div>
            <div class="card_footer">
                <p>BMW-5 Черный Бумер</p>
            </div>
        </div>
    `
})

$btn3.addEventListener('click' , e => {
    e.preventDefault()
    $btn3.classList.add('active')
    $btn1.classList.remove('active')
    $btn2.classList.remove('active')
    $container.innerHTML = `
        <div class="card">
            <div class="card_title">
                <h3>TOYOTA</h3>
            </div>
            <div class="card_img">
                <img src="https://hdpic.club/uploads/posts/2022-01/1642002299_19-hdpic-club-p-toiota-kamri-75-44.jpg">
            </div>
            <div class="card_footer">
            <p>CAMRY-75 HYBRID</p>
            </div>
        </div>
        <div class="card">
            <div class="card_title">
                <h3>TOYOTA</h3>
            </div>
            <div class="card_img">
                <img src="https://cdn.motor1.com/images/mgl/7JyPP/s1/4x3/2021-toyota-camry-xle.webp">
            </div>
            <div class="card_footer">
                <p>CAMRY-75 RESTYLING</p>
            </div>
        </div>
        <div class="card">
            <div class="card_title">
                <h3>TOYOTA</h3>
            </div>
            <div class="card_img">
                <img src="https://focus.ua/static/storage/thumbs/1200x630/2/26/d65a2420-215b42edd49801a8e0dcbdc6f0d75262.jpg?v=3136_1">
            </div>
            <div class="card_footer">
                <p>CAMRY-75</p>
            </div>
        </div>
    `
})

$burgerBtn.addEventListener('click', e => {
    e.preventDefault()
    $header_button.classList.add('active')
})
$burgerBtn2.addEventListener('click', e => {
    e.preventDefault()
    $header_button.classList.remove('active')
})