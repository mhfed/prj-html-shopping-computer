class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                .hide {
                    display: none;
                }
                /* header */

                #header {
                    background: var(--primary-color);
                }
                
                .header__top {
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: #580f75;
                }
                
                .heade__top-left {
                    padding-left: 0;
                }
                
                .heade__top-left span {
                    font-size: 14px;
                    color: var(--white-color);
                }
                
                .header__top-right {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }
                
                .header__top-list {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    margin: 0;
                }
                
                .header__top-item {}
                
                .header__top-link {
                    color: var(--white-color);
                    text-decoration: none;
                    font-size: 1.4rem;
                    display: block;
                    margin-left: 3.5rem;
                    transition: 0.2s;
                }
                
                .header__top-link:hover {
                    opacity: 0.8;
                    color: #fff;
                    text-decoration: none;
                }
                
                .header__bottom {
                    padding: 0;
                }
                
                .header__logo {
                    padding-left: 0;
                }
                
                .header__heading {}
                
                .header__logo-link {
                    text-align: center;
                    display: block;
                }
                
                .header__logo-img {
                    width: 100px;
                }
                
                .header__search {
                    display: flex;
                    align-items: center;
                }
                
                .header__search-select {
                    height: 4rem;
                    font-size: 1.4rem;
                    font-weight: 500;
                    outline: none;
                    border: none;
                    border-radius: 0.2rem 0 0 0.2rem;
                    border-right: 1px solid var(--border-color);
                    width: 10%;
                    padding: 0 .6rem;
                }
                
                .header__search-select option {
                    font-size: 1.4rem;
                    display: inline-block;
                    margin: 10px 12px;
                }
                
                .header__search-input {
                    height: 4rem;
                    width: 80%;
                    font-size: 1.4rem;
                    outline: none;
                    border: none;
                    padding: 0 12px;
                }
                
                .header__search-btn {
                    width: 10%;
                    height: 4rem;
                    outline: none;
                    border: none;
                    border-radius: 0 2px 2px 0;
                    font-size: 1.4rem;
                    background: var(--white-color);
                }
                
                .header__search-icon-wrap {
                    width: 90%;
                    height: 3.4rem;
                    background: #580f75;
                    border-radius: 2px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    margin-left: .2rem;
                }
                
                .header__search-icon {
                    font-size: 1.4rem;
                    color: var(--white-color);
                }
                
                .header__call {
                    display: flex;
                    align-items: center;
                    padding-right: 0;
                }
                
                .header__call-icon-wrap {
                    margin-right: 1rem;
                }
                
                .header__call-icon {
                    font-size: 2.2rem;
                    color: var(--white-color);
                }
                
                .header__call-info {}
                
                .header__call-text {
                    font-size: 13px;
                    font-weight: 500;
                    color: var(--white-color);
                    margin-bottom: 1rem;
                }
                
                .header__call-number {
                    font-size: 1.5rem;
                    font-weight: 500;
                    color: var(--white-color);
                }
                
                .header__cart {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }
                
                .header__cart-icon-wrap {
                    position: relative;
                }
                
                .header__notice {
                    display: block;
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    top: -70%;
                    right: -70%;
                    background: #fff;
                    color: var(--primary-color);
                    font-size: 1.4rem;
                    border-radius: 50%;
                    border: 2px solid #580f75;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: 400;
                }
                
                .header__nav-cart-icon {
                    font-size: 2rem;
                    color: var(--white-color);
                }
                
                
                /*header navigation*/
                
                .header__nav-wrap {
                    height: 4.8rem;
                    background: #ff5c00;
                }
                
                .header__nav-menu-wrap {
                    height: 4.8rem;
                    background: #580f75;
                    display: flex;
                    align-items: center;
                    border-top-left-radius: 2px;
                    border-top-right-radius: 2px;
                    /*margin-left: 1.5rem;
                    margin-right: -1.5rem;
                    padding-right: 0;*/
                    cursor: pointer;
                }
                
                .header__nav-menu-icon {
                    font-size: 1.6rem;
                    color: var(--white-color);
                    margin-right: 1.6rem;
                    margin-left: 1.4rem;
                }
                
                .header__nav-menu-title {
                    font-size: 1.6rem;
                    font-weight: 500;
                    color: var(--white-color);
                }
                
                .header__nav {
                    height: 4.8rem;
                }
                
                .header__nav-list {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    height: 100%;
                }
                
                .header__nav-item {}
                
                .header__nav-link {
                    color: var(--white-color);
                    text-decoration: none;
                    font-size: 1.5rem;
                    font-weight: 500;
                    display: block;
                    padding-right: 3rem;
                    transition: 0.2s;
                }
                
                .header__nav-link:hover {
                    text-decoration: none;
                    color: var(--white-color);
                    opacity: 0.6;
                }
                @media (max-width: 1023px) {
                    .header__top {
                        display: none;
                    }
                    .header__nav-menu-wrap {
                        display: none;
                    }
                    /*.header__search{
                        display: none;
                    }*/
                    .header__call {
                        display: none;
                    }
                    .header__search-select {
                        display: none;
                    }
                }
                
                /**/
                
                
                /* end header */
            </style>
            <header id="header">
                <!-- header top -->
                <div class="header__top">
                    <div class="container">
                        <section class="row flex">
                            <div class="col-lg-5 col-md-0 col-sm-0 heade__top-left">
                                <span>Hệ thống cửa hàng chuyên nghiệp nhất Việt Nam</span>
                            </div>

                            <nav class="col-lg-7 col-md-0 col-sm-0 header__top-right">
                                <ul class="header__top-list">
                                    <li class="header__top-item">
                                        <a href="#" class="header__top-link">

                                    Hỏi đáp</a>
                                    </li>
                                    <li class="header__top-item">
                                        <a href="#" class="header__top-link">Hướng dẫn</a>
                                    </li>
                                    <li class="header__top-item">
                                        <a href="#" class="header__top-link">Đăng ký</a>
                                    </li>
                                    <li class="header__top-item">
                                        <a href="#" class="header__top-link">Đăng nhập</a>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                    </div>
                </div>
                <!--end header top -->

                <!-- header bottom -->
                <div class="header__bottom">
                    <div class="container">7
                        <section class="row">
                            <div class="col-lg-3 col-md-4 col-sm-12 header__logo">
                                <h1 class="header__heading">
                                    <a href="index.html" class="header__logo-link">
                                        <img src="img/logo.png" alt="Logo" class="header__logo-img">
                                    </a>
                                </h1>
                            </div>

                            <div class="col-lg-6 col-md-7 col-sm-0 header__search">
                                <select name="" id="" class="header__search-select">
                                <option value="0">All</option>
                                <option value="1">Điện thoại</option>
                                <option value="2">Laptop</option>
                                <option value="3">Máy tỉnh bảng</option>
                                <option value="4">Phụ kiện</option>
                                <option value="5">Linh kiện</option>
                            </select>
                                <input type="text" class="header__search-input" placeholder="Tìm kiếm sản phẩm...">
                                <button class="header__search-btn">
                                <div class="header__search-icon-wrap">
                                    <i class="fas fa-search header__search-icon"></i>
                                </div>
                            </button>
                            </div>

                            <div class="col-lg-2 col-md-0 col-sm-0 header__call">
                                <div class="header__call-icon-wrap">
                                    <i class="fas fa-phone-alt header__call-icon"></i>
                                </div>
                                <div class="header__call-info">
                                    <div class="header__call-text">
                                        Liên hệ tư vấn
                                    </div>
                                    <div class="header__call-number">
                                        0987.654.321
                                    </div>
                                </div>
                            </div>

                            <a href="cart.html" class="col-lg-1 col-md-1 col-sm-0 header__cart">
                                <div class="header__cart-icon-wrap">
                                    <span class="header__notice">16</span>
                                    <i class="fas fa-shopping-cart header__nav-cart-icon"></i>
                                </div>
                            </a>
                        </section>
                    </div>
                </div>
                <!--end header bottom -->

                <!-- header nav -->
                <div class="header__nav">
                    <div class="container">
                        <section class="row">
                            <div class="header__nav-menu-wrap col-lg-3 col-md-0 col-sm-0">
                                <i class="fas fa-bars header__nav-menu-icon"></i>
                                <div class="header__nav-menu-title">Danh mục sản phẩm</div>
                            </div>

                            <div class="header__nav col-lg-9 col-md-0 col-sm-0">
                                <ul class="header__nav-list">
                                    <li class="header__nav-item">
                                        <a href="index.html" class="header__nav-link">Trang chủ</a>
                                    </li>
                                    <li class="header__nav-item">
                                        <a href="#" class="header__nav-link">Sản phẩm</a>
                                    </li>
                                    <li class="header__nav-item">
                                        <a href="#" class="header__nav-link">Giới thiệu</a>
                                    </li>
                                    <li class="header__nav-item">
                                        <a href="post.html" class="header__nav-link">Tin Tức</a>
                                    </li>
                                    <li class="header__nav-item">
                                        <a href="#" class="header__nav-link">Tuyển cộng tác viên</a>
                                    </li>
                                    <li class="header__nav-item">
                                        <a href="contact.html" class="header__nav-link">Liên hệ</a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </header>
            <!--end header nav -->

            
        `;
    }
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                /*footer*/

                .footer__top {
                    background: var(--primary-color);
                    padding: 1.6rem 0;
                }
                
                .footer__top-intro {}
                
                .footer__top-intro-heading,
                .footer__top-policy-heading,
                .footer__top-contact-heading {
                    font-size: 1.8rem;
                    color: var(--white-color);
                    padding: 1.2rem 0;
                }
                
                .footer__top-intro-content {
                    font-size: 1.5rem;
                    color: var(--white-color);
                }
                
                .footer__top-intro-content h4 {
                    font-size: 1.6rem;
                }
                
                .footer__top-intro-content p {
                    font-size: 1.5rem;
                }
                
                .footer__top-policy-list {
                    list-style: none;
                    margin-bottom: 1rem;
                }
                
                .footer__top-policy-item {}
                
                .footer__top-policy-link {
                    font-size: 1.5rem;
                    color: var(--white-color);
                }
                
                .footer__top-policy-link:hover {
                    color: #ff5c00;
                    opacity: 0.8;
                    text-decoration: none;
                }
                
                .footer__top-contact-wrap {}
                
                .footer__top-contact-heading {}
                
                .footer__top-contact {
                    display: flex;
                    align-items: center;
                    margin-bottom: 2rem;
                }
                
                .footer__top-contact-icon {
                    margin-right: 2.6rem;
                }
                
                .footer__top-contact-img {}
                
                .footer__top-contact-phone-wrap {}
                
                .footer__top-contact-phone {
                    font-size: 1.5rem;
                    font-weight: 500;
                    color: var(--white-color);
                    margin-bottom: 1rem;
                }
                
                .footer__top-contact-des {
                    font-size: 1.3rem;
                    color: var(--white-color);
                }
                
                .footer__top-contact-social-link {
                    margin-right: 1rem;
                }
                
                .footer__bottom {
                    height: 5rem;
                    background: #580f75;
                    text-align: center;
                }
                
                .footer__bottom-content {
                    font-size: 1.6rem;
                    color: var(--white-color);
                    margin: 0 auto;
                    line-height: 5rem;
                }
            </style>
            <!-- footer -->
            <footer>
                <section class="footer__top">
                    <div class="container">
                        <div class="row">
                            <article class="footer__top-intro col-lg-5 col-md-4 col-sm-6">
                                <h4 class="footer__top-intro-heading">
                                    Về chúng tôi
                                </h4>
                                <div class="footer__top-intro-content">
                                    <h5>Hỗ trợ Online</h5>
                                    <p> Tổng đài: 1900.636.648 <br> - Bấm phím 0 để gặp chăm sóc khách hàng (8h-17h30)<br> - Bấm phím 1 để mua hàng trực tuyến (8h-21h30)<br> - Bấm phím 2 để hỗ trợ kỹ thuật (8h-21h30)<br> - Bấm phím 3 để yêu cầu dịch vụ kỹ thuật,
                                        bảo hành (8h-19h)
                                    </p>
                                    <h4>Góp ý, thắc mắc, khiếu nại</h4>
                                    <p>
                                        Email: viethoc@fpt.edu.vn<br> Tổng đài: 1900.1009, ấn phím 0<br> Hotline: 1900.9001<br>
                                    </p>
                                </div>
                            </article>

                            <article class="footer__top-policy col-lg-3 col-md-4 col-sm-6">
                                <h4 class="footer__top-policy-heading">
                                    Chính sách mua hàng
                                </h4>

                                <ul class="footer__top-policy-list">
                                    <li class="footer__top-policy-item">
                                        <a href="#" class="footer__top-policy-link">Hình thức đặt hàng</a>
                                    </li>
                                    <li class="footer__top-policy-item">
                                        <a href="#" class="footer__top-policy-link">Hình thức thanh toán</a>
                                    </li>
                                    <li class="footer__top-policy-item">
                                        <a href="#" class="footer__top-policy-link">Phương thức vận chuyển</a>
                                    </li>
                                    <li class="footer__top-policy-item">
                                        <a href="#" class="footer__top-policy-link">Chính sách đổi trả</a>
                                    </li>
                                    <li class="footer__top-policy-item">
                                        <a href="#" class="footer__top-policy-link">Hướng dẫn sử dụng</a>
                                    </li>
                                </ul>
                            </article>

                            <article class="footer__top-contact-wrap col-lg-4 col-md-4 col-sm-6">
                                <h4 class="footer__top-contact-heading">
                                    Hotline liên hệ
                                </h4>

                                <div class="footer__top-contact">
                                    <div class="footer__top-contact-icon">
                                        <img src="images/phone_top.png" class="footer__top-contact-img">
                                    </div>

                                    <div class="footer__top-contact-phone-wrap">
                                        <div class="footer__top-contact-phone">
                                            0987.654.321
                                        </div>
                                        <div class="footer__top-contact-des">
                                            (Tư vấn miễn phí 24/7)
                                        </div>
                                    </div>
                                </div>

                                <h4 class="footer__top-contact-heading">
                                    Kết nối với chúng tôi
                                </h4>

                                <div class="footer__top-contact-social">
                                    <a href="#" class="footer__top-contact-social-link">
                                        <img src="images/facebook.png">
                                    </a>
                                    <a href="#" class="footer__top-contact-social-link">
                                        <img src="images/youtube.png">
                                    </a>
                                    <a href="#" class="footer__top-contact-social-link">
                                        <img src="images/tiktok.png">
                                    </a>
                                    <a href="#" class="footer__top-contact-social-link">
                                        <img src="images/zalo.png">
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
                <section class="footer__bottom">
                    <div class="container">
                        <div class="row">
                            <span class="footer__bottom-content">@Copyright belong to VIETHOCCOMPUTER - Design by VIETHOC</span>
                        </div>
                    </div>
                </section>
            </footer>
            <!-- end footer -->
        `;
    }
}

customElements.define('my-footer', MyFooter)


// -----------show sidebar------------
var nav = document.querySelector('.header__nav-menu-wrap');

nav.addEventListener('click', function() {
    console.log()
    document.querySelector('.menu__nav').classList.toggle('hide')
});