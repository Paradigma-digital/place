<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="./css/style.min.css?rand=<?=rand();?>">
    <title>PLACE bar</title>
    <style>
        .loader {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10001;
            width: 100%;
            height: 100%;
            background: #DCC5B7;
    
            display: flex;
            align-items: center;
            justify-content: center;
    
            transition: opacity 0.2s linear, visibility 0.2s linear;
        }
    
        .loader__letters {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    
        .loader__letter {
            margin-right: 7px;
            display: flex;
            align-items: center;
            justify-content: center;
    
            width: auto;
            height: 100%;
            min-height: 180px;
            max-width: 157px;
            transform: translateY(-20px);
            opacity: 0;
            transition: transform 0.2s ease-in, opacity 0.2s ease-in;
        }
    
        .loader__letter.active {
            opacity: 1;
            transform: translateY(0);
        }
    
        .loader__letter svg {
            min-height: 180px;
            max-width: 157px;
            fill: #402020;
        }
    
        @media (min-width: 1400px) {
            .loader__letter {
                margin-right: calc(7px + 7 * ((100vw - 1400px)/ (1920 - 1400)));
                min-height: calc(180px + 50 * ((100vw - 1400px)/ (1920 - 1400)));
                max-width: calc(157px + 40 * ((100vw - 1400px)/ (1920 - 1400)));
            }
    
            .loader__letter svg {
                width: 100%;
                height: 100%;
                min-height: calc(180px + 40 * ((100vw - 1400px)/ (1920 - 1400)));
                max-width: calc(157px + 30 * ((100vw - 1400px)/ (1920 - 1400)));
            }
        }
    
        @media (max-width: 1399px) {
            .loader__letter {
                margin-right: calc(4px + 3 * ((100vw - 1024px)/ (1400 - 1024)));
                height: calc(140px + 40 * ((100vw - 1024px)/ (1400 - 1024)));
                max-width: calc(120px + 37 * ((100vw - 1024px)/ (1400 - 1024)));
            }
    
            .loader__letter svg {
                min-height: unset;
                width: 100%;
                height: calc(140px + 40 * ((100vw - 1024px)/ (1400 - 1024)));
                max-width: calc(120px + 37 * ((100vw - 1024px)/ (1400 - 1024)));
            }
        }
    
        @media (max-width: 767px) {
            .loader__letter {
                margin-right: 4px;
                height: calc(93px + 47 * ((100vw - 375px)/ (767 - 375)));
                max-width: calc(82px + 48 * ((100vw - 375px)/ (767 - 375)));
            }
    
            .loader__letter svg {
                height: calc(93px + 47 * ((100vw - 375px)/ (767 - 375)));
                max-width: calc(82px + 48 * ((100vw - 375px)/ (767 - 375)));
            }
        }
    </style>
</head>
<body>
    <header class="header">
    <div class="container header__container">
        <a class="header__logo" href="#">
            <svg width="104" height="28" viewBox="0 0 104 28" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3567 10.3596C10.1429 10.8933 9.81001 11.36 9.35689 11.76C8.90337 12.1598 8.32372 12.4796 7.61752 12.7198C6.91092 12.9596 6.06442 13.0801 5.07841 13.0801H4.79841V4.39966H4.91847C5.93119 4.39966 6.80422 4.51369 7.53755 4.73951C8.27047 4.96696 8.87017 5.27987 9.33705 5.67988C9.80292 6.07988 10.1429 6.53964 10.3567 7.05995C10.5697 7.57986 10.6766 8.13359 10.6766 8.71972C10.6766 9.27973 10.5697 9.82698 10.3567 10.3596ZM12.8958 2.67953C12.0823 1.87972 11.0566 1.23323 9.81689 0.739859C8.5772 0.246485 7.1308 0 5.47808 0H0V28H4.79841V17.6801C6.55802 17.6801 8.09736 17.4198 9.41682 16.8999C10.7365 16.38 11.8363 15.6867 12.7158 14.8197C13.5955 13.9536 14.2553 12.9736 14.6951 11.8797C15.1348 10.7868 15.3549 9.67973 15.3549 8.55992C15.3549 7.49358 15.1482 6.44668 14.7352 5.41942C14.3215 4.39338 13.7087 3.47995 12.8958 2.67953Z"/>
                <path d="M21.2154 23.3601V0H16.4082V28H33.1932L31.9914 23.3601H21.2154Z"/>
                <path d="M43.0447 18.6798L45.9892 11.2799L48.9332 18.6798H43.0447ZM45.4279 0L37.9685 18.6798H34.6074V23.1601H36.1796L34.2471 28H39.3364L41.262 23.1601H50.7159L52.6415 28H57.731L46.55 0H45.4279Z"/>
                <path d="M78.7174 1.23334C76.927 0.410849 74.9739 0 72.8572 0C70.8975 0 69.0678 0.365839 67.3695 1.09633C65.6706 1.82761 64.1841 2.82617 62.9101 4.09223C61.6358 5.35908 60.6293 6.84008 59.892 8.53682C59.1541 10.2343 58.7852 12.0616 58.7852 14.0196C58.7852 15.9777 59.1541 17.8055 59.892 19.5022C60.6293 21.1998 61.6358 22.6744 62.9101 23.9274C64.1841 25.1804 65.6706 26.1728 67.3695 26.9039C69.0678 27.6346 70.8975 28 72.8572 28V23.3791C71.5501 23.3791 70.3289 23.1313 69.1921 22.635C68.0555 22.1396 67.0689 21.4734 66.2329 20.6376C65.3964 19.8025 64.7299 18.8168 64.2337 17.681C63.7372 16.5456 63.4891 15.3251 63.4891 14.0196C63.4891 12.7409 63.7372 11.5268 64.2337 10.3775C64.7299 9.22923 65.3964 8.23721 66.2329 7.40103C67.0689 6.56605 68.0555 5.9002 69.1921 5.40409C70.3289 4.90838 71.5501 4.65992 72.8572 4.65992C74.2681 4.65992 75.5814 4.94764 76.7964 5.52128C78.0117 6.09591 79.0506 6.87954 79.9128 7.87117L83.3229 4.62086C82.0426 3.18527 80.507 2.05583 78.7174 1.23334Z"/>
                <path d="M102.222 23.3601H89.1675V15.7197H96.713V11.1196H89.1675V4.47966H97.1519V0H84.377V28H103.42L102.222 23.3601Z"/>
            </svg>
        </a>
        <button class="btn--reset hamburger">
            <span class="hamburger__texts"></span>
            <span class="hamburger__lines">
                <span class="hamburger__line"></span>
                <span class="hamburger__line"></span>
            </span>
        </button>
    </div>
 
</header>
<div class="header-menu header__menu" data-modal-window="true">
    <div class="header-menu__bg"></div>
    <div class="header-menu__wrapper">
        <div class="ordinary-slider header-menu__content" data-abs-curtain="false">
            <div class="swiper header-menu__slider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide header-menu__slide">
                        <picture>
                            <source srcset="./img/Concept.jpg" type="image/jpg" media="(max-width: 1401px)"/>
                            <img src="./img/Concept.jpg" alt="" />
                        </picture>
                    </div>
                    <div class="swiper-slide header-menu__slide">
                        <picture>
                            <source srcset="./img/Afisha.jpg" type="image/jpg" media="(max-width: 1401px)"/>
                            <img src="./img/Afisha.jpg" alt="" />
                        </picture>
                    </div>
                    <div class="swiper-slide header-menu__slide">
                        <picture>
                            <source srcset="./img/Coctail.jpg" type="image/jpg" media="(max-width: 1401px)"/>
                            <img src="./img/Coctail.jpg" alt="" />
                        </picture>
                    </div>
                    <div class="swiper-slide header-menu__slide">
                        <picture>
                            <source srcset="./img/Kitchen.jpg" type="image/jpg" media="(max-width: 1401px)"/>
                            <img src="./img/Kitchen.jpg" alt="" />
                        </picture>
                    </div>
                    <div class="swiper-slide header-menu__slide">
                        <picture>
                            <source srcset="./img/Interier.jpg" type="image/jpg" media="(max-width: 1401px)"/>
                            <img src="./img/Interier.jpg" alt="" />
                        </picture>
                    </div>
                    <div class="swiper-slide header-menu__slide">
                        <picture>
                            <source srcset="./img/Contacts.jpg" type="image/jpg" media="(max-width: 1401px)"/>
                            <img src="./img/Contacts.jpg" alt="" />
                        </picture>
                    </div>
                </div>
            </div>
            <div class="header-menu__right">
                <nav class="header-menu__nav">
                    <ul class="header-menu__links">
                        <li class="header-menu__link active" data-slide-index="1">
                            <a href="#conception">Концепция</a>
                        </li>
                        <li class="header-menu__link" data-slide-index="4">
                            <a href="#afisha">Афиша</a>
                        </li>
                        <li class="header-menu__link" data-slide-index="6">
                            <a href="#cocktail-card">Коктейльная карта</a>
                        </li>
                        <li class="header-menu__link" data-slide-index="8">
                            <a href="#food">Кухня</a>
                        </li>
                        <li class="header-menu__link" data-slide-index="10">
                            <a href="#interior">Интерьер</a>
                        </li>
                        <li class="header-menu__link" data-slide-index="12">
                            <a href="#contacts">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div class="header-menu__bottom">
                    <a href="https://api.whatsapp.com/send/?phone=79000039044&text&type=phone_number&app_absent=0" target="_blank"  class="btn header-menu__btn">
                        <span>Бронировать</span>
                    </a>
                    <a class="btn header-menu__btn" href="tel:+79000039044">
                        <span>+7 (900) 003-90-44</span>
                    </a>
                    <div class="header-menu__btns">
                        <a href='https://vk.com/place.sochi' target="_blank" class="btn btn--circled header-menu__circled-btn">
                            <svg id="regular" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m12.145 19.5c3.472 0 2.234-2.198 2.502-2.83-.004-.472-.008-.926.008-1.202.22.062.739.325 1.811 1.367 1.655 1.67 2.078 2.665 3.415 2.665h2.461c.78 0 1.186-.323 1.389-.594.196-.262.388-.722.178-1.438-.549-1.724-3.751-4.701-3.95-5.015.03-.058.078-.135.103-.175h-.002c.632-.835 3.044-4.449 3.399-5.895.001-.002.002-.005.002-.008.192-.66.016-1.088-.166-1.33-.274-.362-.71-.545-1.299-.545h-2.461c-.824 0-1.449.415-1.765 1.172-.529 1.345-2.015 4.111-3.129 5.09-.034-1.387-.011-2.446.007-3.233.036-1.535.152-3.029-1.441-3.029h-3.868c-.998 0-1.953 1.09-.919 2.384.904 1.134.325 1.766.52 4.912-.76-.815-2.112-3.016-3.068-5.829-.268-.761-.674-1.466-1.817-1.466h-2.461c-.998 0-1.594.544-1.594 1.455 0 2.046 4.529 13.544 12.145 13.544zm-8.09-13.499c.217 0 .239 0 .4.457.979 2.883 3.175 7.149 4.779 7.149 1.205 0 1.205-1.235 1.205-1.7l-.001-3.702c-.066-1.225-.512-1.835-.805-2.205l3.508.004c.002.017-.02 4.095.01 5.083 0 1.403 1.114 2.207 2.853.447 1.835-2.071 3.104-5.167 3.155-5.293.075-.18.14-.241.376-.241h2.461.01c-.001.003-.001.006-.002.009-.225 1.05-2.446 4.396-3.189 5.435-.012.016-.023.033-.034.05-.327.534-.593 1.124.045 1.954h.001c.058.07.209.234.429.462.684.706 3.03 3.12 3.238 4.08-.138.022-.288.006-2.613.011-.495 0-.882-.74-2.359-2.23-1.328-1.292-2.19-1.82-2.975-1.82-1.524 0-1.413 1.237-1.399 2.733.005 1.622-.005 1.109.006 1.211-.089.035-.344.105-1.009.105-6.345 0-10.477-10.071-10.636-11.996.055-.005.812-.002 2.546-.003z"></path>
                            </svg>
                        </a>
                        <a href="https://t.me/+79000039044" target="_blank" class="btn btn--circled header-menu__circled-btn">
                            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.30506 12.8521C5.34445 12.8652 5.38495 12.8747 5.42606 12.8805C5.68541 13.4916 5.9433 14.1033 6.19973 14.7156C6.66081 15.8175 7.12556 16.9523 7.22731 17.2786C7.35473 17.6801 7.48856 17.9533 7.63523 18.1403C7.71131 18.2356 7.79839 18.32 7.90106 18.3841C7.95454 18.4176 8.01177 18.4447 8.07156 18.4648C8.36489 18.5748 8.63256 18.529 8.80031 18.4731C8.89875 18.4395 8.99242 18.3932 9.07898 18.3356L9.08356 18.3337L11.6741 16.7186L14.667 19.0121C14.711 19.046 14.7586 19.0744 14.81 19.0973C15.1693 19.2531 15.5176 19.3081 15.8458 19.2641C16.1721 19.2183 16.4316 19.0817 16.625 18.9268C16.8471 18.7478 17.0241 18.5193 17.142 18.2595L17.1502 18.2393L17.153 18.232L17.1548 18.2283V18.2265L17.1557 18.2256C17.1717 18.1861 17.1839 18.1453 17.1924 18.1036L19.9241 4.33073C19.9327 4.28664 19.937 4.24182 19.9369 4.19689C19.9369 3.79356 19.7847 3.40948 19.4281 3.17756C19.122 2.97864 18.7819 2.96948 18.5665 2.98598C18.3355 3.00431 18.121 3.06114 17.9771 3.10698C17.8965 3.13251 17.817 3.16126 17.7387 3.19314L17.7286 3.19773L2.40748 9.20739L2.40564 9.20831C2.35381 9.22738 2.30274 9.24848 2.25256 9.27156C2.13107 9.32618 2.01452 9.3912 1.90423 9.46589C1.69614 9.60798 1.21673 9.99848 1.29831 10.6438C1.36248 11.1571 1.71448 11.4734 1.92989 11.6256C2.04723 11.709 2.15906 11.7686 2.24156 11.808C2.27823 11.8263 2.35706 11.8575 2.39098 11.8721L2.40014 11.8749L5.30506 12.8521ZM18.2649 4.46273H18.2631C18.2552 4.46623 18.2472 4.46959 18.2392 4.47281L2.89973 10.4907C2.89183 10.4939 2.88389 10.497 2.87589 10.4999L2.86673 10.5026C2.8387 10.5137 2.81118 10.5259 2.78423 10.5393C2.80974 10.5539 2.83606 10.5671 2.86306 10.5787L5.74323 11.5486C5.7947 11.5659 5.84393 11.5893 5.88989 11.6182L15.4021 6.04948L15.4113 6.04489C15.4483 6.02244 15.4862 6.00164 15.525 5.98256C15.591 5.94864 15.6964 5.89914 15.8156 5.86248C15.8981 5.83681 16.1428 5.76439 16.4068 5.84964C16.5468 5.89378 16.6716 5.97641 16.7669 6.08809C16.8623 6.19977 16.9242 6.336 16.9458 6.48123C16.9799 6.60842 16.9809 6.74223 16.9486 6.86989C16.8844 7.12198 16.7084 7.31814 16.5471 7.46848C16.4096 7.59681 14.6266 9.31648 12.8676 11.0141L10.4723 13.3241L10.0461 13.7366L15.4287 17.8635C15.5014 17.894 15.5803 17.9065 15.6588 17.9001C15.6984 17.8948 15.7356 17.8782 15.7661 17.8525C15.8032 17.8211 15.8351 17.784 15.8605 17.7425L15.8623 17.7416L18.5115 4.38298C18.428 4.40305 18.3462 4.4294 18.2667 4.46181L18.2649 4.46273ZM10.509 15.8239L9.43464 15.0007L9.17431 16.6553L10.509 15.8239ZM8.44923 13.3672L9.51714 12.336L11.9124 10.0241L12.8043 9.16431L6.82764 12.6632L6.85973 12.7384C7.23666 13.6289 7.60945 14.5211 7.97806 15.4151L8.23748 13.7651C8.26095 13.612 8.33559 13.4724 8.44923 13.3672Z"/>
                            </svg>
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=79000039044&text&type=phone_number&app_absent=0" target="_blank" class="btn btn--circled header-menu__circled-btn">
                            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.4642 4.49959C16.6238 3.65068 15.6228 2.97761 14.5195 2.51963C13.4163 2.06165 12.2329 1.82792 11.0384 1.83209C6.03336 1.83209 1.95419 5.91125 1.95419 10.9163C1.95419 12.5204 2.37586 14.0788 3.16419 15.4538L1.88086 20.1654L6.69336 18.9004C8.02253 19.6246 9.51669 20.0096 11.0384 20.0096C16.0434 20.0096 20.1225 15.9304 20.1225 10.9254C20.1225 8.49625 19.1784 6.21375 17.4642 4.49959ZM11.0384 18.4696C9.68169 18.4696 8.35253 18.1029 7.18836 17.4154L6.91336 17.2504L4.05336 18.0021L4.81419 15.2154L4.63086 14.9313C3.87713 13.7276 3.4769 12.3364 3.47586 10.9163C3.47586 6.75459 6.86753 3.36292 11.0292 3.36292C13.0459 3.36292 14.9434 4.15125 16.3642 5.58125C17.0677 6.28155 17.6253 7.11453 18.0045 8.03189C18.3837 8.94926 18.5771 9.93277 18.5734 10.9254C18.5917 15.0871 15.2 18.4696 11.0384 18.4696ZM15.1817 12.8229C14.9525 12.7129 13.8342 12.1629 13.6325 12.0804C13.4217 12.0071 13.275 11.9704 13.1192 12.1904C12.9634 12.4196 12.5325 12.9329 12.4042 13.0796C12.2759 13.2354 12.1384 13.2538 11.9092 13.1346C11.68 13.0246 10.9467 12.7771 10.085 12.0071C9.40669 11.4021 8.95753 10.6596 8.82003 10.4304C8.69169 10.2013 8.80169 10.0821 8.92086 9.96292C9.02169 9.86209 9.15003 9.69709 9.26003 9.56875C9.37003 9.44042 9.41586 9.33959 9.48919 9.19292C9.56253 9.03709 9.52586 8.90875 9.47086 8.79875C9.41586 8.68875 8.95753 7.57042 8.77419 7.11209C8.59086 6.67209 8.39836 6.72709 8.26086 6.71792H7.82086C7.66503 6.71792 7.42669 6.77292 7.21586 7.00209C7.01419 7.23125 6.42753 7.78125 6.42753 8.89959C6.42753 10.0179 7.24336 11.0996 7.35336 11.2463C7.46336 11.4021 8.95753 13.6938 11.2309 14.6746C11.7717 14.9129 12.1934 15.0504 12.5234 15.1513C13.0642 15.3254 13.5592 15.2979 13.9534 15.2429C14.3934 15.1788 15.3009 14.6929 15.4842 14.1613C15.6767 13.6296 15.6767 13.1804 15.6125 13.0796C15.5484 12.9788 15.4109 12.9329 15.1817 12.8229Z"/>
                            </svg>
    </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <div class="loader">
        <div class="loader__letters">
            <div class="loader__letter active">
                <svg width="99" height="180" viewBox="0 0 99 180" xmlns="http://www.w3.org/2000/svg">
                    <path d="M66.5785 66.5977C65.2041 70.0285 63.0643 73.0283 60.1515 75.5998C57.236 78.17 53.5096 80.2258 48.9698 81.77C44.4273 83.3116 38.9855 84.0863 32.6469 84.0863H30.8469V28.2835H31.6187C38.1291 28.2835 43.7414 29.0166 48.4557 30.4683C53.1673 31.9304 57.0225 33.942 60.0239 36.5135C63.0188 39.085 65.2041 42.0405 66.5785 45.3854C67.9478 48.7276 68.635 52.2873 68.635 56.0554C68.635 59.6554 67.9478 63.1734 66.5785 66.5977ZM82.9014 17.2256C77.6717 12.0839 71.078 7.92793 63.1086 4.75623C55.1392 1.58454 45.8408 0 35.2162 0H0V180H30.8469V113.657C42.1587 113.657 52.0545 111.984 60.5367 108.642C69.0203 105.3 76.0903 100.843 81.7443 95.2692C87.3995 89.7018 91.6413 83.4014 94.4683 76.3693C97.2953 69.3436 98.7101 62.2269 98.7101 55.0281C98.7101 48.173 97.3812 41.4429 94.726 34.8391C92.0669 28.2432 88.1271 22.3711 82.9014 17.2256Z"/>
                </svg>
            </div>
            <div class="loader__letter">
                <svg width="109" height="180" viewBox="0 0 109 180" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.0421 150.172V0H0.138672V180H108.042L100.316 150.172H31.0421Z"/>
                </svg>
            </div>
            <div class="loader__letter">
                <svg width="152" height="180" viewBox="0 0 152 180" xmlns="http://www.w3.org/2000/svg">
                    <path d="M57.0268 120.085L75.9558 72.5135L94.8821 120.085H57.0268ZM72.3476 0L24.3946 120.085H2.78765V148.886H12.8946L0.470947 180H33.1879L45.5672 148.886H106.342L118.721 180H151.439L79.5613 0H72.3476Z"/>
                </svg>
            </div>
            <div class="loader__letter">
                <svg width="159" height="180" viewBox="0 0 159 180" xmlns="http://www.w3.org/2000/svg">
                    <path d="M129.004 7.92862C117.494 2.64117 104.938 0 91.3309 0C78.7329 0 66.9706 2.35183 56.053 7.04781C45.1315 11.7489 35.5752 18.1683 27.3854 26.3072C19.193 34.4512 12.7231 43.972 7.98322 54.8795C3.23953 65.7922 0.867676 77.5386 0.867676 90.1262C0.867676 102.714 3.23953 114.464 7.98322 125.372C12.7231 136.284 19.193 145.764 27.3854 153.819C35.5752 161.874 45.1315 168.254 56.053 172.953C66.9706 177.651 78.7329 180 91.3309 180V150.294C82.928 150.294 75.0775 148.701 67.7693 145.511C60.4624 142.326 54.1201 138.043 48.7461 132.67C43.3683 127.301 39.0839 120.965 35.8942 113.663C32.702 106.365 31.1071 98.5188 31.1071 90.1262C31.1071 81.9057 32.702 74.1007 35.8942 66.7126C39.0839 59.3308 43.3683 52.9535 48.7461 47.5781C54.1201 42.2103 60.4624 37.9299 67.7693 34.7406C75.0775 31.5539 82.928 29.9567 91.3309 29.9567C100.401 29.9567 108.844 31.8062 116.654 35.4939C124.467 39.188 131.146 44.2256 136.688 50.6004L158.61 29.7055C150.38 20.4767 140.508 13.2161 129.004 7.92862Z"/>
                </svg>
            </div>
            <div class="loader__letter">
                <svg width="123" height="180" viewBox="0 0 123 180" xmlns="http://www.w3.org/2000/svg">
                    <path d="M114.758 150.172H30.8351V101.055H79.342V71.4828H30.8351V28.7978H82.1632V0H0.0388184V180H122.459L114.758 150.172Z"/>
                </svg>
            </div>
        </div>
    </div>
    <script>
        const loader = document.querySelector(".loader");
        const letters = document.querySelectorAll(".loader__letter");

        let percentageCount = 0;
        let oldPercentageGoal = 0;
        let percentageGoal = 50;
        let timeId;
        let timeStamp;

        document.addEventListener("DOMContentLoaded", () => {
            oldPercentageGoal = 50;
            percentageGoal = 75;
        });

        window.addEventListener("load", () => {
            oldPercentageGoal = 75;
            percentageGoal = 100;
        });

        function countProgress() {
            if (percentageCount < oldPercentageGoal) {
                if (percentageGoal == 100) {
                    percentageCount += 6;
                } else {
                    percentageCount += 2;
                }
            } else if (percentageGoal == 100 && percentageCount >= 100) {
            } else if (percentageGoal == 100 && percentageCount < 100) {
                percentageCount += 8;
            } else if (percentageCount >= (percentageGoal - 1)) {
                percentageCount += 0.01;
            } else if (percentageCount >= (percentageGoal - 2)) {
                percentageCount += 0.1;
            } else if (percentageCount >= (percentageGoal - 5)) {
                percentageCount += 0.2;
            } else if (percentageCount >= (percentageGoal - 10)) {
                percentageCount += 0.4;
            } else {
                percentageCount += 1;
            }

            if (Math.round(percentageCount) >= 100 && percentageGoal == 100) {
                percentageCount = 100;
            }

            percentageCount = Math.round(percentageCount * 100) / 100;

            watchPercents(percentageCount);
        }

        timeId = setInterval(countProgress, 75);

        function loaderEnd() {
            loader.style.visibility = "hidden";
            loader.style.opacity = "0";



            loader.addEventListener("transitionend", () => {
                loader.style.display = "none";
            });
        }

        function watchPercents(percents) {
            let date = Date.now();
            
            if (percents < 20) {
                if (!timeStamp) {
                    timeStamp = Date.now();
                }
            } else if (percents >= 100 && date >= (timeStamp + 2000)) {
                loaderEnd();
                clearInterval(timeId);
            } else if (percents >= 80 && date >= (timeStamp + 1600)) {
                loader.style.background = "#402020";
                letters[4].classList.add("active");
            } else if (percents >= 60 && date >= (timeStamp + 1200)) {
                loader.style.background = "#293630";
                letters[3].classList.add("active");
                letters.forEach(lett => {
                    lett.querySelector("svg").style.fill = "#DCC5B7";
                });
            } else if (percents >= 40 && date >= (timeStamp + 800)) {
                loader.style.background = "#5F656C";
                letters[2].classList.add("active");
            } else if (percents >= 20 && date >= (timeStamp + 400)) {
                loader.style.background = "#AC7F66";
                letters[1].classList.add("active");
            }
        }
    </script>
    <main class="swiper main">
        <div class="swiper-wrapper">
            <section class="swiper-slide section section--wrapper hero" data-section="1">
                <div class="section__container">
                    <div class="container hero__container">
                        <h1 class="sr-only">PLACE - бар</h1>
                        <div class="hero__strokes">
                            <svg class="hero__stroke" width="99" height="180" viewBox="0 0 99 180" xmlns="http://www.w3.org/2000/svg">
                                <path d="M66.5785 66.5977C65.2041 70.0285 63.0643 73.0283 60.1515 75.5998C57.236 78.17 53.5096 80.2258 48.9698 81.77C44.4273 83.3116 38.9855 84.0863 32.6469 84.0863H30.8469V28.2835H31.6187C38.1291 28.2835 43.7414 29.0166 48.4557 30.4683C53.1673 31.9304 57.0225 33.942 60.0239 36.5135C63.0188 39.085 65.2041 42.0405 66.5785 45.3854C67.9478 48.7276 68.635 52.2873 68.635 56.0554C68.635 59.6554 67.9478 63.1734 66.5785 66.5977ZM82.9014 17.2256C77.6717 12.0839 71.078 7.92793 63.1086 4.75623C55.1392 1.58454 45.8408 0 35.2162 0H0V180H30.8469V113.657C42.1587 113.657 52.0545 111.984 60.5367 108.642C69.0203 105.3 76.0903 100.843 81.7443 95.2692C87.3995 89.7018 91.6413 83.4014 94.4683 76.3693C97.2953 69.3436 98.7101 62.2269 98.7101 55.0281C98.7101 48.173 97.3812 41.4429 94.726 34.8391C92.0669 28.2432 88.1271 22.3711 82.9014 17.2256Z"/>
                            </svg>
                            <svg class="hero__stroke" width="109" height="180" viewBox="0 0 109 180" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.0421 150.172V0H0.138672V180H108.042L100.316 150.172H31.0421Z"/>
                            </svg>
                            <svg class="hero__stroke" width="152" height="180" viewBox="0 0 152 180" xmlns="http://www.w3.org/2000/svg">
                                <path d="M57.0268 120.085L75.9558 72.5135L94.8821 120.085H57.0268ZM72.3476 0L24.3946 120.085H2.78765V148.886H12.8946L0.470947 180H33.1879L45.5672 148.886H106.342L118.721 180H151.439L79.5613 0H72.3476Z"/>
                            </svg>
                            <svg class="hero__stroke" width="159" height="180" viewBox="0 0 159 180" xmlns="http://www.w3.org/2000/svg">
                                <path d="M129.004 7.92862C117.494 2.64117 104.938 0 91.3309 0C78.7329 0 66.9706 2.35183 56.053 7.04781C45.1315 11.7489 35.5752 18.1683 27.3854 26.3072C19.193 34.4512 12.7231 43.972 7.98322 54.8795C3.23953 65.7922 0.867676 77.5386 0.867676 90.1262C0.867676 102.714 3.23953 114.464 7.98322 125.372C12.7231 136.284 19.193 145.764 27.3854 153.819C35.5752 161.874 45.1315 168.254 56.053 172.953C66.9706 177.651 78.7329 180 91.3309 180V150.294C82.928 150.294 75.0775 148.701 67.7693 145.511C60.4624 142.326 54.1201 138.043 48.7461 132.67C43.3683 127.301 39.0839 120.965 35.8942 113.663C32.702 106.365 31.1071 98.5188 31.1071 90.1262C31.1071 81.9057 32.702 74.1007 35.8942 66.7126C39.0839 59.3308 43.3683 52.9535 48.7461 47.5781C54.1201 42.2103 60.4624 37.9299 67.7693 34.7406C75.0775 31.5539 82.928 29.9567 91.3309 29.9567C100.401 29.9567 108.844 31.8062 116.654 35.4939C124.467 39.188 131.146 44.2256 136.688 50.6004L158.61 29.7055C150.38 20.4767 140.508 13.2161 129.004 7.92862Z"/>
                            </svg>
                            <svg class="hero__stroke" width="123" height="180" viewBox="0 0 123 180" xmlns="http://www.w3.org/2000/svg">
                                <path d="M114.758 150.172H30.8351V101.055H79.342V71.4828H30.8351V28.7978H82.1632V0H0.0388184V180H122.459L114.758 150.172Z"/>
                            </svg>
                        </div>
                        <p class="text hero__text">
                            Место, где роскошь и удовольствие соединяются воедино
                        </p>
                        <button class="btn btn--circled btn--arrow hero__arrow next-slide-btn" data-scroll-to="id1">
                            <svg width="22" height="22">
                               <use xlink:href="img/sprite.svg#arrow-down"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="hero__side-img">
                        <picture>
                            <source srcset="./img/hero-side-1.webp, ./img/hero-side-1@2x.webp 2x" type="image/webp"/>
                            <source srcset="./img/hero-side-1.jpg, ./img/hero-side-1@2x.jpg 2x" type="image/jpg"/>
                            <img src="./img/hero-side-1.jpg" alt="" />
                        </picture>
                    </div>
                    <div class="hero__side-img active">
                        <picture>
                            <source srcset="./img/hero-side-2lg.webp, ./img/hero-side-2lg@2x.webp 2x" type="image/webp" media="(min-width: 1401px)"/>
                            <source srcset="./img/hero-side-2lg.jpg, ./img/hero-side-2lg@2x.jpg 2x" type="image/jpg" media="(min-width: 1401px)"/>
                            <source srcset="./img/hero-side-2.webp, ./img/hero-side-2@2x.webp 2x" type="image/webp" media="(max-width: 1401px)"/>
                            <source srcset="./img/hero-side-2.jpg, ./img/hero-side-2@2x.jpg 2x" type="image/jpg" media="(max-width: 1401px)"/>
                            <img src="./img/hero-side-2.jpg" alt="" />
                        </picture>
                    </div>
                </div>
            </section>
            <section class="swiper-slide section section--wrapper section--fullscreen fullimage-section double-strip" data-scroll-target="id1" data-section="2" data-sub-section="0" style="--bg: #293630">
                <div class="section__container fullimage-section__mob-wrapper" data-mobile-anchor="conception">
                    <div class="fullimage-section__bg">
                        <picture>
                            <source srcset="./img/concept-bg.jpg" type="image/jpg" media="(max-width: 1401px)"/>
                            <img src="./img/concept-bg.jpg" alt="" />
                        </picture>
                    </div>
                    <div class="fullimage-section__bottom">
                        <div class="fullimage-section__strip"></div>
                        <h2 class="title fullimage-section__title" data-text-anima="true">
                            <span class="outer">
                                <span>концепция</span>
                            </span>
                        </h2>
                        <button class="btn btn--circled btn--arrow fullimage-section__arrow next-slide-btn" data-scroll-to="id2">
                            <svg width="22" height="22">
                                <use xlink:href="img/sprite.svg#arrow-down"></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="partial-section partial-section--conception" style="visibility: hidden; opacity: 0;" data-scroll-target="id2">
                    <div class="section__container">
                        <div class="partial-section__side">
                            <div class="partial-section__strip-place"></div>
                            <div class="partial-section__side-top"></div>
                            <div class="partial-section__side-bottom">
                                <h2 class="title partial-section__placeholder-title">
                                    <span>концепция</span>
                                </h2>
                            </div>
                        </div>
                        <div class="partial-section__placeholder " style="visibility: hidden; opacity: 0;">
                            <picture>
                                <source srcset="./img/concept-bg.jpg" type="image/jpg" media="(max-width: 1401px)"/>
                                <img src="./img/concept-bg.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="partial-section__side">
                            <div class="partial-section__side-top">
                                <h3 class="title title--md partial-section__title" data-text-anima="true" data-text-column="true">
                                    <span class="row">
                                        <span class="outer"><span>Концептуальный</span></span>
                                    </span>
                                    <span class="row">
                                        <span class="outer"><span>DJ бар Place</span></span>
                                    </span>
                                    <span class="row">
                                        <span class="outer"><span>в центре Сочи</span></span>
                                    </span>
                                </h3>
                            </div>
                            <div class="partial-section__side-bottom end">
                                <p class="text partial-section__text" data-text-anima="true" data-reset-mob="true" data-text-column="true">
                                
                                
                                    <span class="row">
                                        <span class="outer"><span>Место притяжения для самой изысканной публики,</span></span>
                                    </span>
                                    <span class="row">
                                        <span class="outer"><span>место стиля, место модной музыки от топовых диджеев.</span></span>
                                    </span>
                                    <!-- <span class="row">
                                        <span class="outer"><span>энергичные выступления. Здесь каждый вечер становится </span></span>
                                    </span>
                                    <span class="row">
                                        <span class="outer"><span>незабываемым шоу, где звуки, свет и настроение </span></span>
                                    </span>
                                    <span class="row">
                                        <span class="outer"><span>поражают воображение. </span></span>
                                    </span>
                                    <span class="reset-text">
                                        Уникальное место, где в чарующей атмосфере сочетаются высокий уровень сервиса, изысканные коктейли и яркие энергичные выступления. Здесь каждый вечер становится незабываемым шоу, где звуки, свет и настроение поражают воображение.
                                    </span> -->
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="swiper-slide section section--wrapper section--fullscreen section--empty" data-section="2" data-sub-section="1" style="--bg: transparent"></section>
            <section class="swiper-slide section section--wrapper section--modal modal-section" data-section="2" data-sub-section="2" data-section-type="modal" style="--bg: none">
                <div class="section__container">
                    <div class="modal-section__window">
                        <div class="modal-section__bg">
                            <picture>
                                <source srcset="./img/modal-bg.webp, ./img/modal-bg@2x.webp 2x" type="image/webp"/>
                                <source srcset="./img/modal-bg.png, ./img/modal-bg@2x.png 2x" type="image/png"/>
                                <img src="./img/modal-bg.png" alt="" />
                            </picture>
                        </div>
                        <div class="modal-section__content">
                            <img class="modal-section__quote" src="./img/quote.svg" alt="">
                            <div class="modal-section__img">
                                <picture>
                                    <source srcset="./img/modal-img-1lg.webp, ./img/modal-img-1lg@2x.webp 2x" type="image/webp" media="(min-width: 1401px)"/>
                                    <source srcset="./img/modal-img-1lg.jpg, ./img/modal-img-1lg@2x.jpg 2x" type="image/jpg" media="(min-width: 1401px)"/>
                                    <source srcset="./img/modal-img-1.webp, ./img/modal-img-1@2x.webp 2x" type="image/webp" media="(max-width: 1401px)"/>
                                    <source srcset="./img/modal-img-1.jpg, ./img/modal-img-1@2x.jpg 2x" type="image/jpg" media="(max-width: 1401px)"/>
                                    <img src="./img/modal-img-1.jpg" alt="" />
                                </picture>
                            </div>
                            <h4 class="modal-section__title" data-text-anima="true" data-reset-mob="true" data-text-column="true">
                                <span class="row">
                                    <span class="outer"><span>КАК ШЕФ-БАРМЕН, Я СТАРАЮСЬ СОЗДАВАТЬ НЕ ТОЛЬКО</span></span>
                                </span>
                                <span class="row">
                                    <span class="outer"><span>ИНТЕРЕСНЫЕ КОКТЕЙЛИ, НО И ЯРКУЮ АТМОСФЕРУ, ГДЕ КАЖДЫЙ</span></span>
                                </span>
                                <span class="row">
                                    <span class="outer"><span>НАПИТОК СТАНОВИТСЯ ПРИКЛЮЧЕНИЕМ, А КАЖДЫЙ</span></span>
                                </span>
                                <span class="row">
                                    <span class="outer"><span>РАЗГОВОР – ПРЕКРАСНОЙ ИСТОРИЕЙ!</span></span>
                                </span>
                                <span class="reset-text">
                                    Как бармен, я стараюсь создавать не только коктейли, но и волшебные вечера, где каждый глоток становится приключением, а каждый разговор – прекрасной историей
                                </span>
                            </h4>
                            <p class="modal-section__author-pos">
                                <b>Artem Ten</b>
                                Шеф-бармен
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="swiper-slide section section--wrapper section--fullscreen fullimage-section double-strip" data-section="3" data-sub-section="0" style="--bg: #DCC5B7">
                <div class="section__container fullimage-section__mob-wrapper" data-mobile-anchor="afisha">
                    <div class="fullimage-section__bg">
                        <picture>
                            <source srcset="./img/afisha-bg.jpg" type="image/jpg" media="(max-width: 1401px)"/>
                            <img src="./img/afisha-bg.jpg" alt="" />
                        </picture>
                    </div>
                    <div class="section__emerging-bg"></div>
                    <div class="fullimage-section__bottom">
                        <div class="fullimage-section__strip"></div>
                        <h2 class="title fullimage-section__title" data-text-anima="true">
                            <span class="outer">
                                <span>Афиша</span>
                            </span>
                        </h2>
                        <button class="btn btn--circled btn--arrow fullimage-section__arrow next-slide-btn" data-scroll-to="id3">
                            <svg width="22" height="22">
                                <use xlink:href="img/sprite.svg#arrow-down"></use>
                            </svg>
                        </button>                        
                    </div>
                </div>
                <div class="partial-section dark partial-section--afisha" style="visibility: hidden; opacity: 0;" data-scroll-target="id3">
                    <div class="section__container">
                        <div class="partial-section__side">
                            <div class="partial-section__strip-place"></div>
                            <!-- <div class="partial-section__side-top"></div> -->
                            <div class="partial-section__side-bottom custom-style__partial top" style="position:absolute;bottom: 0;height: 344px; width: 100%;display:flex; flex-direction:column;justify-content: space-between">
                            <!-- <div class="partial-section__side-bottom"> -->
                                <h2 class="title partial-section__placeholder-title" style="height:96px;">
                                    <span>Афиша</span>
                                </h2>
                                <div class="partial-section__arrows">
                                    <button class="btn btn--circled btn--arrow partial-section__arrow">
                                        <svg width="22" height="22">
                                           <use xlink:href="img/sprite.svg#arrow-down"></use>
                                        </svg>
                                    </button>
                                    <button class="btn btn--circled btn--arrow partial-section__arrow">
                                        <svg width="22" height="22">
                                           <use xlink:href="img/sprite.svg#arrow-down"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="ordinary-slider partial-section__placeholder-mob-slider">
                            <div class="swiper">
                                <div class="swiper-wrapper">
                                <div class="swiper-slide partial-section__placeholder-mob-slide">
                                        <div class="partial-section__placeholder-text">
                                            <h3 class="title title--md partial-section__title" data-text-anima="true">
                                                <b class="outer">
                                                    <span>COVER NIGHT</span>
                                                </b>
                                            </h3>
                                            <p class="partial-section__descr" data-text-anima="true">
                                                <span class="outer">
                                                    <span>СТАРТ 22:00</span>
                                                </span>
                                            </p>
                                            <div class="components__info">
                                                <div class="components__info-item">
                                                    <b data-text-anima="true">
                                                        <span class="outer">
                                                            <span>5</span>
                                                        </span>
                                                    </b>
                                                    <span data-text-anima="true">
                                                        <span class="outer">
                                                            <span>Октября</span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <dl class="components__list">
                                                <div class="components__list-item">
                                                    <dt>Адрес:</dt>
                                                    <dd>г. Сочи, ул. Войкова, д.3</dd>
                                                </div>
                                                <div class="components__list-item">
                                                    <dt>Зарезервировать:</dt>
                                                    <dd>
                                                        <a href="tel:+79000039044">+7 (900) 003-90-44</a>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                        <picture class="partial-section__placeholder-mob-image">
                                            <source srcset="./img/afisha3.jpg" type="image/jpg"/>
                                            <img src="./img/afisha3.jpg" alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide partial-section__placeholder-mob-slide">
                                        <div class="partial-section__placeholder-text">
                                            <h3 class="title title--md partial-section__title" data-text-anima="true">
                                                <b class="outer">
                                                    <span>RECIDENCE</span>
                                                </b>
                                            </h3>
                                            <p class="partial-section__descr" data-text-anima="true">
                                                <span class="outer">
                                                    <span>СТАРТ 22:00</span>
                                                </span>
                                            </p>
                                            <div class="components__info">
                                                <div class="components__info-item">
                                                    <b data-text-anima="true">
                                                        <span class="outer">
                                                            <span>6</span>
                                                        </span>
                                                    </b>
                                                    <span data-text-anima="true">
                                                        <span class="outer">
                                                            <span>Октября</span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <dl class="components__list">
                                                <div class="components__list-item">
                                                    <dt>Адрес:</dt>
                                                    <dd>г. Сочи, ул. Войкова, д.3</dd>
                                                </div>
                                                <div class="components__list-item">
                                                    <dt>Зарезервировать:</dt>
                                                    <dd>
                                                        <a href="tel:+79000039044">+7 (900) 003-90-44</a>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                        <picture class="partial-section__placeholder-mob-image">
                                            <source srcset="./img/afisha1.jpg" type="image/jpg"/>
                                            <img src="./img/afisha1.jpg" alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide partial-section__placeholder-mob-slide">
                                        <div class="partial-section__placeholder-text">
                                            <h3 class="title title--md partial-section__title" data-text-anima="true">
                                                <b class="outer">
                                                    <span>COME'ON</span>
                                                </b>
                                            </h3>
                                            <p class="partial-section__descr" data-text-anima="true">
                                                <span class="outer">
                                                    <span>СТАРТ 22:00</span>
                                                </span>
                                            </p>
                                            <div class="components__info">
                                                <div class="components__info-item">
                                                    <b data-text-anima="true">
                                                        <span class="outer">
                                                            <span>7</span>
                                                        </span>
                                                    </b>
                                                    <span data-text-anima="true">
                                                        <span class="outer">
                                                            <span>Октября</span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <dl class="components__list">
                                                <div class="components__list-item">
                                                    <dt>Адрес:</dt>
                                                    <dd>г. Сочи, ул. Войкова, д.3</dd>
                                                </div>
                                                <div class="components__list-item">
                                                    <dt>Зарезервировать:</dt>
                                                    <dd>
                                                        <a href="tel:+79000039044">+7 (900) 003-90-44</a>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                        <picture class="partial-section__placeholder-mob-image">
                                            <source srcset="./img/afisha2.jpg" type="image/jpg"/>
                                            <img src="./img/afisha2.jpg" alt="" />
                                        </picture>
                                    </div>
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                        <div class="ordinary-slider partial-section__placeholder partial-section__placeholder--1 moving">
                            <div class="swiper partial-section__slider vertical">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide partial-section__slide">
                                        <picture>
                                            <source srcset="./img/afisha3.jpg" type="image/jpg"/>
                                            <img src="./img/afisha3.jpg" alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide partial-section__slide">
                                        <picture>
                                            <source srcset="./img/afisha1.jpg" type="image/jpg"/>
                                            <img src="./img/afisha1.jpg" alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide partial-section__slide">
                                        <picture>
                                            <source srcset="./img/afisha2.jpg" type="image/jpg"/>
                                            <img src="./img/afisha2.jpg" alt="" />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                        <div class="partial-section__side">
                            <div class="ordinary-slider partial-section__side-top partial-section__text-slider custom-style " style="height: 344px; width: 100%">
                                <div class="swiper">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide partial-section__text-slide">
                                            <h3 class="title title--md partial-section__title" data-text-anima="true">
                                                <b class="outer">
                                                    <span>COVER NIGHT</span>
                                                </b>
                                            </h3>
                                            <p class="partial-section__descr" data-text-anima="true">
                                                <span class="outer">
                                                    <span>СТАРТ 22:00</span>
                                                </span>
                                            </p>
                                            <div class="components__info">
                                                <div class="components__info-item">
                                                    <b data-text-anima="true">
                                                        <span class="outer">
                                                            <span>5</span>
                                                        </span>
                                                    </b>
                                                    <span data-text-anima="true">
                                                        <span class="outer">
                                                            <span>Октября</span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide partial-section__text-slide">
                                            <h3 class="title title--md partial-section__title" data-text-anima="true">
                                                <b class="outer">
                                                    <span>RESIDENCE</span>
                                                </b>
                                            </h3>
                                            <p class="partial-section__descr" data-text-anima="true">
                                                <span class="outer">
                                                    <span>СТАРТ 22:00</span>
                                                </span>
                                            </p>
                                            <div class="components__info">
                                                <div class="components__info-item">
                                                    <b data-text-anima="true">
                                                        <span class="outer">
                                                            <span>6</span>
                                                        </span>
                                                    </b>
                                                    <span data-text-anima="true">
                                                        <span class="outer">
                                                            <span>Октября</span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide partial-section__text-slide">
                                            <h3 class="title title--md partial-section__title" data-text-anima="true">
                                                <b class="outer">
                                                    <span>COME'ON</span>
                                                </b>
                                            </h3>
                                            <p class="partial-section__descr" data-text-anima="true">
                                                <span class="outer">
                                                    <span>СТАРТ 22:00</span>
                                                </span>
                                            </p>
                                            <div class="components__info">
                                                <div class="components__info-item">
                                                    <b data-text-anima="true">
                                                        <span class="outer">
                                                            <span>7</span>
                                                        </span>
                                                    </b>
                                                    <span data-text-anima="true">
                                                        <span class="outer">
                                                            <span>Октября</span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="partial-section__side-bottom end">
                                <dl class="components__list">
                                    <div class="components__list-item">
                                        <dt>Адрес:</dt>
                                        <dd>г. Сочи, ул. Войкова, д.3</dd>
                                    </div>
                                    <div class="components__list-item">
                                        <dt>Зарезервировать:</dt>
                                        <dd>
                                            <a href="tel:+79000039044">+7 (900) 003-90-44</a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="swiper-slide section section--wrapper section--fullscreen section--empty" data-section="3" data-sub-section="1" style="--bg: transparent"></section>
            <section class="swiper-slide section section--wrapper section--fullscreen fullimage-section" data-section="4" data-sub-section="0" style="--bg: #DCC5B7">
                <div class="section__container fullimage-section__mob-wrapper" data-mobile-anchor="cocktail-card">
                    <div class="fullimage-section__bg">
                        <picture>
                            <source srcset="./img/coctail-bg.jpg" type="image/jpg" media="(min-width: 575px)"/>
                            <img src="./img/coctail-bg.jpg" alt="" />
                        </picture>
                    </div>
                    <div class="section__emerging-bg"></div>
                    <div class="fullimage-section__bottom">
                        <div class="fullimage-section__strip"></div>
                        <h2 class="title fullimage-section__title" data-text-anima="true">
                            <span class="outer">
                                <span>Авторские коктейли</span>
                            </span>
                        </h2>
                        <button class="btn btn--circled btn--arrow fullimage-section__arrow next-slide-btn" data-scroll-to="id4">
                            <svg width="22" height="22">
                                <use xlink:href="img/sprite.svg#arrow-down"></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="partial-section dark partial-section--cocktail" style="visibility: hidden; opacity: 0;" data-scroll-target="id4">
                    <div class="section__container">
                        <div class="partial-section__side">
                            <div class="partial-section__side-top between">
                                <div class="partial-section__strip-place"></div>
                                <h3 class="title title--md" data-text-anima="true" data-text-column="true">
                                    <span class="row">
                                        <span class="outer">
                                            <span>Разнообразие вкусов</span>
                                        </span>
                                    </span>
                                    <span class="row">
                                        <span class="outer">
                                            <span> и впечатлений</span>
                                        </span>
                                    </span>
                                </h3>
                                <p class="text partial-section__text" data-text-anima="true" data-reset-mob="true" data-text-column="true">
                                    <span class="row">
                                        <span class="outer">
                                            <span>Барная карта нашего заведения предлагает широкий выбор</span>
                                        </span>
                                    </span>
                                    <span class="row">
                                        <span class="outer">
                                            <span>напитков для самых изысканных вкусов. От классических</span>
                                        </span>
                                    </span>
                                    <span class="row">
                                        <span class="outer">
                                            <span>коктейлей до авторских напитков, каждый найдет что-то по</span>
                                        </span>
                                    </span>
                                    <span class="row">
                                        <span class="outer">
                                            <span>своему вкусу.</span>
                                        </span>
                                    </span>
                                    <span class="reset-text">
                                        Барная карта нашего заведения предлагает широкий выбор напитков для самых изысканных вкусов. От классических коктейлей до авторских напитков, каждый найдет что-то по своему вкусу.
                                    </span>
                                </p>
                            </div>
                            <div class="partial-section__side-bottom">
                                <h2 class="title partial-section__placeholder-title">
                                    <span>Авторские коктейли</span>
                                </h2>
                                <h3 class="title partial-section__title-overed">
                                    <span>Авторские коктейли</span>
                                </h3>
                                <a class="btn partial-section__btn"target="_blank" href="https://docviewer.yandex.ru/view/933172455/?page=2&*=zvaqx9Ty36v6kZlzE0Y941DoKf57InVybCI6InlhLWRpc2stcHVibGljOi8vNlg1S0diMGp5bFJ3dTFsY29JdjdxZkJVK1RGUWF6T3FuWnMwNzdGUDdLU001aWoxdlgyd2Exb2ltMUVGaFFxUXEvSjZicG1SeU9Kb25UM1ZvWG5EYWc9PTov0JHQsNGAIFBhbGNlIDEyMC0yMzBfXzYgIFdFQi5wZGYiLCJ0aXRsZSI6ItCR0LDRgCBQYWxjZSAxMjAtMjMwX182ICBXRUIucGRmIiwibm9pZnJhbWUiOmZhbHNlLCJ1aWQiOiI5MzMxNzI0NTUiLCJ0cyI6MTY5NTY1ODc5MzI1NSwieXUiOiI2ODIwNTE4NzkxNjkzNDM5OTg3In0%3D" download>
                                    <span>Барное меню</span>
                                </a>
                            </div>
                        </div>
                        <div class="modal-section__window modal-section__window--abs partial-section__window-wrapper">
                            <div class="modal-section__window-wrapper">
                                <div class="modal-section__bg">
                                    <picture>
                                        <source srcset="./img/modal-bg.webp, ./img/modal-bg@2x.webp 2x" type="image/webp"/>
                                        <source srcset="./img/modal-bg.png, ./img/modal-bg@2x.png 2x" type="image/png"/>
                                        <img src="./img/modal-bg.png" alt="" />
                                    </picture>
                                </div>
                                <div class="modal-section__content">
                                    <div class="modal-section__img modal-section__call-modal" data-trigger-modal="menu-1">
                                        <picture>
                                            <source srcset="./img/coctail1.jpg" type="image/jpg"/>
                                            <img src="./img/coctail1.jpg" alt="" />
                                        </picture>
                                        <button class="btn--reset modal-section__btn">
                                            <svg width="22" height="22">
                                                <use xlink:href="img/sprite.svg#plus"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="swiper-slide section section--wrapper section--fullscreen section--empty" data-section="4" data-sub-section="1" style="--bg: transparent"></section>
            <section class="swiper-slide section section--wrapper section--fullscreen fullimage-section" data-section="5" data-sub-section="0" style="--bg: #293630">
                <div class="section__container fullimage-section__mob-wrapper" data-mobile-anchor="food">
                    <div class="fullimage-section__bg">
                        <picture>
                            <source srcset="./img/food-bg.webp, ./img/food-bg@2x.webp 2x" type="image/webp" media="(min-width: 575px)"/>
                            <source srcset="./img/food-bg.jpg, ./img/food-bg@2x.jpg 2x" type="image/jpg" media="(min-width: 575px)"/>
                            <source srcset="./img/food-mob.webp" type="image/webp" media="(max-width: 575px)"/>
                            <source srcset="./img/food-mob.jpg" type="image/jpg" media="(max-width: 575px)"/>
                            <img src="./img/food-bg.jpg" alt="" />
                        </picture>
                    </div>
                    <div class="section__emerging-bg"></div>
                    <div class="fullimage-section__bottom">
                        <div class="fullimage-section__strip"></div>
                        <h2 class="title fullimage-section__title" data-text-anima="true">
                            <span class="outer">
                                <span>Кухня</span>
                            </span>
                        </h2>
                        <button class="btn btn--circled btn--arrow fullimage-section__arrow next-slide-btn" data-scroll-to="id5">
                            <svg width="22" height="22">
                                <use xlink:href="img/sprite.svg#arrow-down"></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="partial-section partial-section--food" style="visibility: hidden; opacity: 0;" data-scroll-target="id5">
                    <div class="section__container">
                        <div class="partial-section__side">
                            <div class="partial-section__side-top between">
                                <div class="partial-section__strip-place"></div>
                                <h3 class="title title--md" data-text-anima="true">
                                    <span class="outer">
                                        <span>Богатый выбор блюд</span>
                                    </span>
                                </h3>
                                <p class="text partial-section__text" data-text-anima="true" data-reset-mob="true" data-text-column="true">
                                    <span class="row">
                                        <span class="outer">
                                            <span>Наше заведение предлагает широкий ассортимент блюд,</span>
                                        </span>
                                    </span>
                                    <span class="row">
                                        <span class="outer">
                                            <span>чтобы удовлетворить любой вкус и предпочтение. От</span>
                                        </span>
                                    </span>
                                    <span class="row">
                                        <span class="outer">
                                            <span>классических рецептов до авторских творений, наша</span>
                                        </span>
                                    </span>
                                    <span class="row">
                                        <span class="outer">
                                            <span>кухня охватывает различные кулинарные традиции и</span>
                                        </span>
                                    </span>
                                    <span class="row">
                                        <span class="outer">
                                            <span>культуры.</span>
                                        </span>
                                    </span>
                                    <span class="reset-text">
                                        Наше заведение предлагает широкий ассортимент блюд, чтобы удовлетворить любой вкус и предпочтение. От классических рецептов до авторских творений, наша кухня охватывает различные кулинарные традиции и культуры.
                                    </span>
                                </p>
                            </div>
                            <div class="partial-section__side-bottom">
                                <h2 class="title partial-section__placeholder-title">
                                    <span>Кухня</span>
                                </h2>
                                <div class="partial-section__btns">
                                    <a class="btn partial-section__btn" target="_blank" href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F6X5KGb0jylRwu1lcoIv7qfBU%2BTFQazOqnZs077FP7KSM5ij1vX2wa1oim1EFhQqQq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2FКУХНЯ%20Palce%205_160-230_6%20превью.pdf&name=КУХНЯ%20Palce%205_160-230_6%20превью.pdf&nosw=1" download>
                                        <span>Меню</span>
                                    </a>
                                    <a class="btn partial-section__btn" target="_blank" href="https://docviewer.yandex.ru/view/933172455/?*=8BOrCo74bKtAWpCP6kOQDixm3s97InVybCI6InlhLWRpc2stcHVibGljOi8vdU5ud1FVSmRJa00vdVY0M0JmZXNTbzUrTXZTSVZXMzcxZ3Z6cjZ2QzZNUlAvUG9ibEJJQ0I2cDJkbGVjUWs5UnEvSjZicG1SeU9Kb25UM1ZvWG5EYWc9PSIsInRpdGxlIjoiUGxhY2VfY3JhenkucGRmIiwibm9pZnJhbWUiOmZhbHNlLCJ1aWQiOiI5MzMxNzI0NTUiLCJ0cyI6MTY5NTcxNjUyMzcyMSwieXUiOiI2ODIwNTE4NzkxNjkzNDM5OTg3In0%3D" download>
                                        <span>Crazy меню</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="modal-section__window modal-section__window--abs partial-section__window-wrapper light">
                            <div class="modal-section__window-wrapper">
                                <div class="modal-section__bg">
                                    <picture>
                                        <source srcset="./img/modal-bg-dark.webp, ./img/modal-bg-dark@2x.webp 2x" type="image/webp"/>
                                        <source srcset="./img/modal-bg-dark.png, ./img/modal-bg-dark@2x.png 2x" type="image/png"/>
                                        <img src="./img/modal-bg-dark.png" alt="" />
                                    </picture>
                                </div>
                                <div class="modal-section__content">
                                    <div class="modal-section__img modal-section__call-modal" data-trigger-modal="menu-2">
                                        <picture>
                                            <source srcset="./img/food1-bg.jpg" type="image/jpg"/>
                                            <img src="./img/food1-bg.jpg" alt="" />
                                        </picture>
                                        <button class="btn--reset modal-section__btn">
                                            <svg width="22" height="22">
                                               <use xlink:href="img/sprite.svg#plus"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="swiper-slide section section--wrapper section--fullscreen section--empty" data-section="5" data-sub-section="1" style="--bg: transparent"></section>
            <section class="swiper-slide section section--wrapper section--fullscreen fullimage-section" data-section="6" data-sub-section="0" style="--bg: #DCC5B7">
                <div class="ordinary-slider section__container fullimage-section__mob-wrapper" data-mobile-anchor="interior">
                    <div class="swiper fullimage-section__bg fullimage-section__slider">
                        <div class="swiper-slide">
                            <picture>
                                <source srcset="./img/interior-bg.jpg" type="image/jpg"/>
                                <img src="./img/interior-bg.jpg" alt="" />
                            </picture>
                        </div>
                        <!-- <div class="swiper-slide">
                            <picture>
                                <source srcset="./img/int2.jpg" type="image/jpg"/>
                                <img src="./img/int2.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide">
                            <picture>
                                <source srcset="./img/int3.jpg" type="image/jpg"/>
                                <img src="./img/int3.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide">
                            <picture>
                                <source srcset="./img/int4.jpg" type="image/jpg"/>
                                <img src="./img/int4.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide">
                            <picture>
                                <source srcset="./img/int5.jpg" type="image/jpg"/>
                                <img src="./img/int4.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide">
                            <picture>
                                <source srcset="./img/int6.jpg" type="image/jpg"/>
                                <img src="./img/int4.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide">
                            <picture>
                                <source srcset="./img/int7.jpg" type="image/jpg"/>
                                <img src="./img/int4.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide">
                            <picture>
                                <source srcset="./img/int8.jpg" type="image/jpg"/>
                                <img src="./img/int4.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide">
                            <picture>
                                <source srcset="./img/int9.jpg" type="image/jpg"/>
                                <img src="./img/int4.jpg" alt="" />
                            </picture>
                        </div> -->
                        <!-- <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <picture>
                                    <source srcset="./img/interior-bg.webp, ./img/interior-bg@2x.webp 2x" type="image/webp"/>
                                    <source srcset="./img/interior-bg.jpg, ./img/interior-bg@2x.jpg 2x" type="image/jpg"/>
                                    <img src="./img/interior-bg.jpg" alt="" />
                                </picture>
                            </div>
                            <div class="swiper-slide">
                                <picture>
                                    <source srcset="./img/interior-bg.webp, ./img/interior-bg@2x.webp 2x" type="image/webp"/>
                                    <source srcset="./img/interior-bg.jpg, ./img/interior-bg@2x.jpg 2x" type="image/jpg"/>
                                    <img src="./img/interior-bg.jpg" alt="" />
                                </picture>
                            </div>
                       
                        </div> -->
                    </div>
                    <div class="section__emerging-bg"></div>
                    <div class="fullimage-section__bottom">
                        <div class="fullimage-section__strip"></div>
                        <h2 class="title fullimage-section__title" data-text-anima="true">
                            <span class="outer">
                                <span>Интерьер</span>
                            </span>
                        </h2>
                        <button class="btn btn--circled btn--arrow fullimage-section__arrow next-slide-btn" data-scroll-to="id6">
                            <svg width="22" height="22">
                                <use xlink:href="img/sprite.svg#arrow-down"></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="partial-section dark partial-section--interior" style="visibility: hidden; opacity: 0;" data-scroll-target="id6">
                    <div class="section__container">
                        <div class="partial-section__side">
                            <div class="partial-section__side-top">
                                <div class="partial-section__strip-place"></div>
                                <div class="components__info components__info--sm">
                                    <div class="components__info-item">
                                        <b data-text-anima="true">
                                            <span class="outer">
                                                <span>12</span>
                                            </span>
                                        </b>
                                        <span data-text-anima="true">
                                            <span class="outer">
                                                <span>
                                                    Столов
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <div class="components__info-item">
                                        <b data-text-anima="true">
                                            <span class="outer">
                                                <span>2</span>
                                            </span>
                                        </b>
                                        <span data-text-anima="true">
                                            <span class="outer">
                                                <span>VIP зала</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div class="components__info-item">
                                        <b data-text-anima="true">
                                            <span class="outer">
                                                <span>20</span>
                                            </span>
                                        </b>
                                        <span data-text-anima="true">
                                            <span class="outer">
                                                <span>Мест за баром</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="partial-section__side-bottom">
                                <h2 class="title partial-section__placeholder-title">
                                    <span>Интерьер</span>
                                </h2>
                                <div class="partial-section__arrows">
                                    <button class="btn btn--circled btn--arrow partial-section__arrow">
                                        <svg width="22" height="22">
                                           <use xlink:href="img/sprite.svg#arrow-down"></use>
                                        </svg>
                                    </button>
                                    <button class="btn btn--circled btn--arrow partial-section__arrow">
                                        <svg width="22" height="22">
                                           <use xlink:href="img/sprite.svg#arrow-down"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="ordinary-slider partial-section__placeholder partial-section__placeholder--2">
                            <div class="swiper partial-section__mob-slider">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <picture>
                                            <source srcset="./img/int1.jpg" type="image/jpg"/>
                                            <img src="./img/int1.jpg" alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide">
                                        <picture>
                                            <source srcset="./img/int2.jpg" type="image/jpg"/>
                                            <img src="./img/int2.jpg" alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide">
                                        <picture>
                                            <source srcset="./img/int3.jpg" type="image/jpg"/>
                                            <img src="./img/int3.jpg" alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide">
                                        <picture>
                                            <source srcset="./img/int4.jpg" type="image/jpg"/>
                                            <img src="./img/int4.jpg" alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide">
                                        <picture>
                                            <source srcset="./img/int5.jpg" type="image/jpg"/>
                                            <img src="./img/int5.jpg" alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide">
                                        <picture>
                                            <source srcset="./img/int6.jpg" type="image/jpg"/>
                                            <img src="./img/int6.jpg" alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide">
                                        <picture>
                                            <source srcset="./img/int7.jpg" type="image/jpg"/>
                                            <img src="./img/int7.jpg" alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide">
                                        <picture>
                                            <source srcset="./img/int8.jpg" type="image/jpg"/>
                                            <img src="./img/int8.jpg" alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide">
                                        <picture>
                                            <source srcset="./img/int9.jpg" type="image/jpg"/>
                                            <img src="./img/int9.jpg" alt="" />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="swiper-slide section section--wrapper section--fullscreen section--empty" data-section="6" data-sub-section="1" style="--bg: transparent"></section>
        </div>
    </main>
    <footer class="footer">
    <div class="ordinary-slider swiper footer__ticker-slider">
        <div class="swiper-wrapper">
            <div class="swiper-slide footer__ticker">
                Place
            </div>
            <div class="swiper-slide footer__ticker">
                Place
            </div>
            <div class="swiper-slide footer__ticker">
                Place
            </div>
            <div class="swiper-slide footer__ticker">
                Place
            </div>
            <div class="swiper-slide footer__ticker">
                Place
            </div>
            <div class="swiper-slide footer__ticker">
                Place
            </div>
            <div class="swiper-slide footer__ticker">
                Place
            </div>
            <div class="swiper-slide footer__ticker">
                Place
            </div>
        </div>
    </div>
    <div class="footer__wrapper">
        <div class="footer__side">
            <div class="footer__top">
                <a class="footer__link" href="tel:+79000039044">+7 (900) 003-90-44</a>
                <h2 class="footer__timetable">Режим работы: <br> Чт Пт Сб с 21:00 до 06:00</h2>
            </div>
            <div class="footer__bottom">
                <dl class="components__list footer__list">
                  
                    <div class="components__list-item">
                        <dt>Адрес:</dt>
                        <dd>г. Сочи, ул. Войкова, д.3</dd>
                    </div>
                </dl>
            </div>
        </div>
        <div class="footer__side">
            <div class="footer__top flex">
                <a href="https://vk.com/place.sochi" target="_blank" class="btn btn--circled footer__social">
                    <svg id="regular" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m12.145 19.5c3.472 0 2.234-2.198 2.502-2.83-.004-.472-.008-.926.008-1.202.22.062.739.325 1.811 1.367 1.655 1.67 2.078 2.665 3.415 2.665h2.461c.78 0 1.186-.323 1.389-.594.196-.262.388-.722.178-1.438-.549-1.724-3.751-4.701-3.95-5.015.03-.058.078-.135.103-.175h-.002c.632-.835 3.044-4.449 3.399-5.895.001-.002.002-.005.002-.008.192-.66.016-1.088-.166-1.33-.274-.362-.71-.545-1.299-.545h-2.461c-.824 0-1.449.415-1.765 1.172-.529 1.345-2.015 4.111-3.129 5.09-.034-1.387-.011-2.446.007-3.233.036-1.535.152-3.029-1.441-3.029h-3.868c-.998 0-1.953 1.09-.919 2.384.904 1.134.325 1.766.52 4.912-.76-.815-2.112-3.016-3.068-5.829-.268-.761-.674-1.466-1.817-1.466h-2.461c-.998 0-1.594.544-1.594 1.455 0 2.046 4.529 13.544 12.145 13.544zm-8.09-13.499c.217 0 .239 0 .4.457.979 2.883 3.175 7.149 4.779 7.149 1.205 0 1.205-1.235 1.205-1.7l-.001-3.702c-.066-1.225-.512-1.835-.805-2.205l3.508.004c.002.017-.02 4.095.01 5.083 0 1.403 1.114 2.207 2.853.447 1.835-2.071 3.104-5.167 3.155-5.293.075-.18.14-.241.376-.241h2.461.01c-.001.003-.001.006-.002.009-.225 1.05-2.446 4.396-3.189 5.435-.012.016-.023.033-.034.05-.327.534-.593 1.124.045 1.954h.001c.058.07.209.234.429.462.684.706 3.03 3.12 3.238 4.08-.138.022-.288.006-2.613.011-.495 0-.882-.74-2.359-2.23-1.328-1.292-2.19-1.82-2.975-1.82-1.524 0-1.413 1.237-1.399 2.733.005 1.622-.005 1.109.006 1.211-.089.035-.344.105-1.009.105-6.345 0-10.477-10.071-10.636-11.996.055-.005.812-.002 2.546-.003z"></path>
                    </svg>
                </a>
                <a href="https://t.me/+79000039044" target="_blank" class="btn btn--circled footer__social">
                    <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.30506 12.8521C5.34445 12.8652 5.38495 12.8747 5.42606 12.8805C5.68541 13.4916 5.9433 14.1033 6.19973 14.7156C6.66081 15.8175 7.12556 16.9523 7.22731 17.2786C7.35473 17.6801 7.48856 17.9533 7.63523 18.1403C7.71131 18.2356 7.79839 18.32 7.90106 18.3841C7.95454 18.4176 8.01177 18.4447 8.07156 18.4648C8.36489 18.5748 8.63256 18.529 8.80031 18.4731C8.89875 18.4395 8.99242 18.3932 9.07898 18.3356L9.08356 18.3337L11.6741 16.7186L14.667 19.0121C14.711 19.046 14.7586 19.0744 14.81 19.0973C15.1693 19.2531 15.5176 19.3081 15.8458 19.2641C16.1721 19.2183 16.4316 19.0817 16.625 18.9268C16.8471 18.7478 17.0241 18.5193 17.142 18.2595L17.1502 18.2393L17.153 18.232L17.1548 18.2283V18.2265L17.1557 18.2256C17.1717 18.1861 17.1839 18.1453 17.1924 18.1036L19.9241 4.33073C19.9327 4.28664 19.937 4.24182 19.9369 4.19689C19.9369 3.79356 19.7847 3.40948 19.4281 3.17756C19.122 2.97864 18.7819 2.96948 18.5665 2.98598C18.3355 3.00431 18.121 3.06114 17.9771 3.10698C17.8965 3.13251 17.817 3.16126 17.7387 3.19314L17.7286 3.19773L2.40748 9.20739L2.40564 9.20831C2.35381 9.22738 2.30274 9.24848 2.25256 9.27156C2.13107 9.32618 2.01452 9.3912 1.90423 9.46589C1.69614 9.60798 1.21673 9.99848 1.29831 10.6438C1.36248 11.1571 1.71448 11.4734 1.92989 11.6256C2.04723 11.709 2.15906 11.7686 2.24156 11.808C2.27823 11.8263 2.35706 11.8575 2.39098 11.8721L2.40014 11.8749L5.30506 12.8521ZM18.2649 4.46273H18.2631C18.2552 4.46623 18.2472 4.46959 18.2392 4.47281L2.89973 10.4907C2.89183 10.4939 2.88389 10.497 2.87589 10.4999L2.86673 10.5026C2.8387 10.5137 2.81118 10.5259 2.78423 10.5393C2.80974 10.5539 2.83606 10.5671 2.86306 10.5787L5.74323 11.5486C5.7947 11.5659 5.84393 11.5893 5.88989 11.6182L15.4021 6.04948L15.4113 6.04489C15.4483 6.02244 15.4862 6.00164 15.525 5.98256C15.591 5.94864 15.6964 5.89914 15.8156 5.86248C15.8981 5.83681 16.1428 5.76439 16.4068 5.84964C16.5468 5.89378 16.6716 5.97641 16.7669 6.08809C16.8623 6.19977 16.9242 6.336 16.9458 6.48123C16.9799 6.60842 16.9809 6.74223 16.9486 6.86989C16.8844 7.12198 16.7084 7.31814 16.5471 7.46848C16.4096 7.59681 14.6266 9.31648 12.8676 11.0141L10.4723 13.3241L10.0461 13.7366L15.4287 17.8635C15.5014 17.894 15.5803 17.9065 15.6588 17.9001C15.6984 17.8948 15.7356 17.8782 15.7661 17.8525C15.8032 17.8211 15.8351 17.784 15.8605 17.7425L15.8623 17.7416L18.5115 4.38298C18.428 4.40305 18.3462 4.4294 18.2667 4.46181L18.2649 4.46273ZM10.509 15.8239L9.43464 15.0007L9.17431 16.6553L10.509 15.8239ZM8.44923 13.3672L9.51714 12.336L11.9124 10.0241L12.8043 9.16431L6.82764 12.6632L6.85973 12.7384C7.23666 13.6289 7.60945 14.5211 7.97806 15.4151L8.23748 13.7651C8.26095 13.612 8.33559 13.4724 8.44923 13.3672Z"/>
                    </svg>
                </ф>
                <a href="https://api.whatsapp.com/send/?phone=79000039044&text&type=phone_number&app_absent=0" target="_blank" class="btn btn--circled footer__social">
                    <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4642 4.49959C16.6238 3.65068 15.6228 2.97761 14.5195 2.51963C13.4163 2.06165 12.2329 1.82792 11.0384 1.83209C6.03336 1.83209 1.95419 5.91125 1.95419 10.9163C1.95419 12.5204 2.37586 14.0788 3.16419 15.4538L1.88086 20.1654L6.69336 18.9004C8.02253 19.6246 9.51669 20.0096 11.0384 20.0096C16.0434 20.0096 20.1225 15.9304 20.1225 10.9254C20.1225 8.49625 19.1784 6.21375 17.4642 4.49959ZM11.0384 18.4696C9.68169 18.4696 8.35253 18.1029 7.18836 17.4154L6.91336 17.2504L4.05336 18.0021L4.81419 15.2154L4.63086 14.9313C3.87713 13.7276 3.4769 12.3364 3.47586 10.9163C3.47586 6.75459 6.86753 3.36292 11.0292 3.36292C13.0459 3.36292 14.9434 4.15125 16.3642 5.58125C17.0677 6.28155 17.6253 7.11453 18.0045 8.03189C18.3837 8.94926 18.5771 9.93277 18.5734 10.9254C18.5917 15.0871 15.2 18.4696 11.0384 18.4696ZM15.1817 12.8229C14.9525 12.7129 13.8342 12.1629 13.6325 12.0804C13.4217 12.0071 13.275 11.9704 13.1192 12.1904C12.9634 12.4196 12.5325 12.9329 12.4042 13.0796C12.2759 13.2354 12.1384 13.2538 11.9092 13.1346C11.68 13.0246 10.9467 12.7771 10.085 12.0071C9.40669 11.4021 8.95753 10.6596 8.82003 10.4304C8.69169 10.2013 8.80169 10.0821 8.92086 9.96292C9.02169 9.86209 9.15003 9.69709 9.26003 9.56875C9.37003 9.44042 9.41586 9.33959 9.48919 9.19292C9.56253 9.03709 9.52586 8.90875 9.47086 8.79875C9.41586 8.68875 8.95753 7.57042 8.77419 7.11209C8.59086 6.67209 8.39836 6.72709 8.26086 6.71792H7.82086C7.66503 6.71792 7.42669 6.77292 7.21586 7.00209C7.01419 7.23125 6.42753 7.78125 6.42753 8.89959C6.42753 10.0179 7.24336 11.0996 7.35336 11.2463C7.46336 11.4021 8.95753 13.6938 11.2309 14.6746C11.7717 14.9129 12.1934 15.0504 12.5234 15.1513C13.0642 15.3254 13.5592 15.2979 13.9534 15.2429C14.3934 15.1788 15.3009 14.6929 15.4842 14.1613C15.6767 13.6296 15.6767 13.1804 15.6125 13.0796C15.5484 12.9788 15.4109 12.9329 15.1817 12.8229Z"/>
                    </svg>
                </a>
                <button class="btn btn--circled btn--arrow footer__arrow-top">
                    <svg width="22" height="22">
                       <use xlink:href="img/sprite.svg#arrow-down"></use>
                    </svg>
                </button>
            </div>
            <div class="footer__bottom">
                <small class="footer__copy">2023 © Place “Все права защищены”</small>
            </div>
        </div>
    </div>
</footer>

<div class="modal" data-modal="menu-1" data-abs-curtain="false">
    <div class="modal__bg"></div>
    <div class="modal__window" data-modal-window="true" >
        <div class="modal__content" data-abs-curtain="false">
            <div class="ordinary-slider modal__text-wrapper">
                <div class="swiper modal__text-slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Ананас с Розмарином </h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Базилик с Лимончелло</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Биттер Джин</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Бордо</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Голубой Вельвет</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Джин с Ежевикой и Ананасом</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Изи Манго</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Малина Маракуйя</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Французский Мартини</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Фруктовый Брустер</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="ordinary-slider modal__mob-slider">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Ананас с Розмарином</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/coctail1.jpg" type="image/jpg"/>
                                    <img src="./img/coctail1.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Базилик с Лимончелло</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/coctail2.jpg" type="image/jpg"/>
                                    <img src="./img/coctail2.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Биттер Джин</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/coctail3.jpg" type="image/jpg"/>
                                    <img src="./img/coctail3.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Бордо</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/coctail4.jpg" type="image/jpg"/>
                                    <img src="./img/coctail4.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Голубой Вельвет</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/coctail5.jpg" type="image/jpg"/>
                                    <img src="./img/coctail5.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Джин с Ежевикой и Ананасом</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/coctail6.jpg" type="image/jpg"/>
                                    <img src="./img/coctail6.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Изи Манго</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/coctail7.jpg" type="image/jpg"/>
                                    <img src="./img/coctail7.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Малина Маракуйя</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/coctail8.jpg" type="image/jpg"/>
                                    <img src="./img/coctail8.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Французский Мартини</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/coctail9.jpg" type="image/jpg"/>
                                    <img src="./img/coctail9.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Фруктовый Брустер</h2>
                            <!-- <p class="text modal__text">
                                Это американский классический коктейль, который обладает репутацией одного из самых крепких и опасных напитков. Его история полна загадок и различных версий, которые придают этому коктейлю особый шарм. Среди множества коктейлей, есть у меня определенный лидер, мне очень нравится его необычный и очень освежающий вкус
                            </p> -->
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/coctail10.jpg" type="image/jpg"/>
                                    <img src="./img/coctail10.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="modal__controls">
                <div class="modal__arrows">
                    <button class="btn btn--circled btn--arrow modal__arrow">
                        <svg width="22" height="22">
                           <use xlink:href="img/sprite.svg#arrow-down"></use>
                        </svg>
                    </button>
                    <button class="btn btn--circled btn--arrow modal__arrow">
                        <svg width="22" height="22">
                           <use xlink:href="img/sprite.svg#arrow-down"></use>
                        </svg>
                    </button>
                </div>
                <div class="modal__count">1</div>
            </div>
            <div class="ordinary-slider modal__side">
                <div class="swiper modal__slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/coctail1.jpg" type="image/jpg"/>
                                <img src="./img/coctail1.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/coctail2.jpg" type="image/jpg"/>
                                <img src="./img/coctail2.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/coctail3.jpg" type="image/jpg"/>
                                <img src="./img/coctail3.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/coctail4.jpg" type="image/jpg"/>
                                <img src="./img/coctail4.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/coctail5.jpg" type="image/jpg"/>
                                <img src="./img/coctail5.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/coctail6.jpg" type="image/jpg"/>
                                <img src="./img/coctail6.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/coctail7.jpg" type="image/jpg"/>
                                <img src="./img/coctail7.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/coctail8.jpg" type="image/jpg"/>
                                <img src="./img/coctail8.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/coctail9.jpg" type="image/jpg"/>
                                <img src="./img/coctail9.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/coctail10.jpg" type="image/jpg"/>
                                <img src="./img/coctail10.jpg" alt="" />
                            </picture>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <button class="btn--reset btn btn--circled btn--arrow modal__close" data-modal-cancel="true">
                <svg width="22" height="22">
                   <use xlink:href="img/sprite.svg#close"></use>
                </svg>
            </button>
        </div>
    </div>
</div>

<div class="modal dark" data-modal="menu-2" data-abs-curtain="false">
    <div class="modal__bg"></div>
    <div class="modal__window" data-modal-window="true">
        <div class="modal__content" >
            <div class="ordinary-slider modal__text-wrapper">
                <div class="swiper modal__text-slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Выдержанные сыры | Aged cheeses</h2>
                            <div class="text modal__text block">
                                <span>
                                    Выдержанные сыры с медовыми сотами и ягодами
                                </span>
                                <hr>
                                <span>
                                    Aged cheeses with honeycomb and berries
                                </span>
                            </div>
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Тартар из брюшка тунца | Tuna belly tartare</h2>
                            <div class="text modal__text block">
                                <span>
                                    Тартар из брюшка тунца с кремом из авокадо и мяты и грибным соусом «Даши»
                                </span>
                                <hr>
                                <span>
                                    Tuna belly tartare with avocado mint cream and Dashi mushroom sauce
                                </span>
                            </div>
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Тартар из выдержанной говядины | Aged beef tartare</h2>
                            <div class="text modal__text block">
                                <span>
                                Тартар из выдержанной говядины с муссом из белого трюфеля и желе из красного вина 
                                </span>
                                <hr>
                                <span>Aged beef tartare with white truffle mousse and red wine jelly</span> 
                            </div>
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Винная тарелка | Wine platter</h2>
                            <div class="text modal__text block">
                                <span>Подается с крафтовыми сырами, испанскими крокетами и вяленым мясом</span>
                                <hr>
                                <span>Served with craft cheeses, Spanish craquettes and jerky</span> 
                            </div>
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Коллекция испанских крокетов | Collection of spanish croquettes</h2>
                            <p class="text modal__text">
                                <!-- Позвольте себе испытать непревзойденное удовольствие и насладиться истинным шедевром кулинарии - стейком из мраморной говядины, который оставит в вашей памяти незабываемые впечатления и наслаждение от первого до последнего прожорливого кусочка -->
                            </p>
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Страчателла с томатным мармеладом и крабом | Stracciatella with tomato marmalade and crab
                            </h2>
                            <p class="text modal__text">
                                <!-- Позвольте себе испытать непревзойденное удовольствие и насладиться истинным шедевром кулинарии - стейком из мраморной говядины, который оставит в вашей памяти незабываемые впечатления и наслаждение от первого до последнего прожорливого кусочка -->
                            </p>
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Паштет из цыпленка | Chicken pate</h2>
                            <p class="text modal__text block">
                                <!-- Позвольте себе испытать непревзойденное удовольствие и насладиться истинным шедевром кулинарии - стейком из мраморной говядины, который оставит в вашей памяти незабываемые впечатления и наслаждение от первого до последнего прожорливого кусочка -->
                            </p>
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Салат с морепродуктами  | Salad with seafood</h2>
                            <div class="text modal__text block">
                                <span> Салат с морепродуктами и медово-горчичной заправкой</span>
                                <hr>
                                <span>Salad with seafood and honey mustard dressing</span> 
                            </div>
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Гаспачо Andаluz | Gazpacho Andaluz</h2>
                            <div class="text modal__text block">
                                <span>Холодный суп из сладких томатов с авокадо и малиной</span>
                                <hr>
                                <span>А cold sweet tomato soup  with avocado and raspberries</span>
                            </div>
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Суши сет | Sushi set</h2>
                            <div class="text modal__text block">
                                <span>
                                    Роллы «Филадельфия», «Калифорния», Sibria, Sochi, «Вулкан»,  сашими лосось, сашими тунец
                                </span>
                                <hr>
                                <span>Philadelphia, California, Sibria, Sochi, Volcano rolls, salmon sashimi, tuna sashimi</span>
                            </div>
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Ролл Siberia | Siberia roll</h2>
                            <div class="text modal__text block">
                                <span>Ролл с копченым угрём, опаленным лососем, авокадо, сливочным сыром и соусом «Унаги»</span>
                                <hr>
                                <span>Sushi roll with smoked eel, seared salmon, avocado,  cream cheese and Unagi sauce</span> 
                            </div>
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Красные креветки в темпуре | Red shrimp tempura</h2>
                            <div class="text modal__text block">
                                <span>Красные креветки в темпуре со сладким кимчи и икрой</span>
                                <hr> 
                                <span>Red shrimp tempura with sweet kimchi and caviar</span>
                            </div>
                        </div>
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Палтус на гриле с чоризо и кремом из сладкого перца | Grilled halibut with chоrizo and sweet pepper cream
                            </h2>
                            <!-- <div class="text modal__text">
                                <span>
                                Позвольте себе испытать непревзойденное удовольствие и насладиться истинным шедевром кулинарии
                                </span>
                                <hr>
                                <span>стейком из мраморной говядины, который оставит в вашей памяти незабываемые впечатления и наслаждение от первого до последнего прожорливого кусочка</span> 
                            </div> -->
                        </div>
                        <!-- <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">MARBLED BEEF <br> STREK 6</h2>
                            <div class="text modal__text">
                                <span>
                                Позвольте себе испытать непревзойденное удовольствие и насладиться истинным шедевром кулинарии
                                </span>
                                <hr>
                                <span>стейком из мраморной говядины, который оставит в вашей памяти незабываемые впечатления и наслаждение от первого до последнего прожорливого кусочка</span> 
                            </div> -->
                        <!-- </div> -->
                        <div class="swiper-slide modal__side-inner">
                            <h2 class="title title--md modal__title">Живой сет | Sea set</h2>
                            <div class="text modal__text block">
                                <span>Дюжина из трех видов устриц и пять морских ежей</span>
                                <hr>
                                <span>А dozen of three types of oysters and five sea urchins</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ordinary-slider modal__mob-slider">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Выдержанные сыры | Aged cheeses</h2>
                            <div class="text modal__text block">
                                <span>
                                    Выдержанные сыры с медовыми сотами и ягодами
                                </span>
                                <hr>
                                <span>
                                    Aged cheeses with honeycomb and berries
                                </span>
                            </div>
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/food1.jpg" type="image/jpg"/>
                                    <img src="./img/food1.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Тартар из брюшка тунца | Tuna belly tartare</h2>
                            <div class="text modal__text block">
                                <span>
                                    Тартар из брюшка тунца с кремом из авокадо и мяты и грибным соусом «Даши»
                                </span>
                                <hr>
                                <span>
                                    Tuna belly tartare with avocado mint cream and Dashi mushroom sauce
                                </span>
                            </div>
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/food2.jpg" type="image/jpg"/>
                                    <img src="./img/food3.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Тартар из выдержанной говядины | Aged beef tartare</h2>
                            <div class="text modal__text block">
                                <span>
                                Тартар из выдержанной говядины с муссом из белого трюфеля и желе из красного вина 
                                </span>
                                <hr>
                                <span>Aged beef tartare with white truffle mousse and red wine jelly</span> 
                            </div>
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/food3.jpg" type="image/jpg"/>
                                    <img src="./img/food3.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Винная тарелка | Wine platter</h2>
                            <div class="text modal__text block">
                                <span>Подается с крафтовыми сырами, испанскими крокетами и вяленым мясом</span>
                                <hr>
                                <span>Served with craft cheeses, Spanish craquettes and jerky</span> 
                            </div>
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/food4.jpg" type="image/jpg"/>
                                    <img src="./img/food4.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Коллекция испанских крокетов | Collection of spanish croquettes</h2>
                            <p class="text modal__text">
                                <!-- Позвольте себе испытать непревзойденное удовольствие и насладиться истинным шедевром кулинарии - стейком из мраморной говядины, который оставит в вашей памяти незабываемые впечатления и наслаждение от первого до последнего прожорливого кусочка -->
                            </p>
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/food5.jpg" type="image/jpg"/>
                                    <img src="./img/food5.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Страчателла с томатным мармеладом и крабом | Stracciatella with tomato marmalade and crab
                            </h2>
                            <p class="text modal__text">
                                <!-- Позвольте себе испытать непревзойденное удовольствие и насладиться истинным шедевром кулинарии - стейком из мраморной говядины, который оставит в вашей памяти незабываемые впечатления и наслаждение от первого до последнего прожорливого кусочка -->
                            </p>
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/food6.jpg" type="image/jpg"/>
                                    <img src="./img/food6.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Паштет из цыпленка | Chicken pate</h2>
                            <p class="text modal__text block">
                                <!-- Позвольте себе испытать непревзойденное удовольствие и насладиться истинным шедевром кулинарии - стейком из мраморной говядины, который оставит в вашей памяти незабываемые впечатления и наслаждение от первого до последнего прожорливого кусочка -->
                            </p>
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/food7.jpg" type="image/jpg"/>
                                    <img src="./img/food7.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Салат с морепродуктами  | Salad with seafood</h2>
                            <div class="text modal__text block">
                                <span> Салат с морепродуктами и медово-горчичной заправкой</span>
                                <hr>
                                <span>Salad with seafood and honey mustard dressing</span> 
                            </div>
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/food8.jpg" type="image/jpg"/>
                                    <img src="./img/food8.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Гаспачо Andаluz | Gazpacho Andaluz</h2>
                            <div class="text modal__text block">
                                <span>Холодный суп из сладких томатов с авокадо и малиной</span>
                                <hr>
                                <span>А cold sweet tomato soup  with avocado and raspberries</span>
                            </div>
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/food9.jpg" type="image/jpg"/>
                                    <img src="./img/food9.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Суши сет | Sushi set</h2>
                            <div class="text modal__text block">
                                <span>
                                    Роллы «Филадельфия», «Калифорния», Sibria, Sochi, «Вулкан»,  сашими лосось, сашими тунец
                                </span>
                                <hr>
                                <span>Philadelphia, California, Sibria, Sochi, Volcano rolls, salmon sashimi, tuna sashimi</span>
                            </div>
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/food11.jpg" type="image/jpg"/>
                                    <img src="./img/food11.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Ролл Siberia | Siberia roll</h2>
                            <div class="text modal__text block">
                                <span>Ролл с копченым угрём, опаленным лососем, авокадо, сливочным сыром и соусом «Унаги»</span>
                                <hr>
                                <span>Sushi roll with smoked eel, seared salmon, avocado,  cream cheese and Unagi sauce</span> 
                            </div>
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/food12.jpg" type="image/jpg"/>
                                    <img src="./img/food12.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Красные креветки в темпуре | Red shrimp tempura</h2>
                            <div class="text modal__text block">
                                <span>Красные креветки в темпуре со сладким кимчи и икрой</span>
                                <hr> 
                                <span>Red shrimp tempura with sweet kimchi and caviar</span>
                            </div>
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/food13.jpg" type="image/jpg"/>
                                    <img src="./img/food13.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Палтус на гриле с чоризо и кремом из сладкого перца | Grilled halibut with chоrizo and sweet pepper cream
                            </h2>
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/food14.jpg" type="image/jpg"/>
                                    <img src="./img/food14.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide modal__mob-slide">
                            <h2 class="title title--md modal__title">Живой сет | Sea set</h2>
                            <div class="text modal__text block">
                                <span>Дюжина из трех видов устриц и пять морских ежей</span>
                                <hr>
                                <span>А dozen of three types of oysters and five sea urchins</span>
                            </div>
                            <div class="modal__mob-slide-img">
                                <picture>
                                    <source srcset="./img/food16.jpg" type="image/jpg"/>
                                    <img src="./img/food16.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="modal__controls">
                <div class="modal__arrows">
                    <button class="btn btn--circled btn--arrow modal__arrow">
                        <svg width="22" height="22">
                           <use xlink:href="img/sprite.svg#arrow-down"></use>
                        </svg>
                    </button>
                    <button class="btn btn--circled btn--arrow modal__arrow">
                        <svg width="22" height="22">
                           <use xlink:href="img/sprite.svg#arrow-down"></use>
                        </svg>
                    </button>
                </div>
                <div class="modal__count">1</div>
            </div>
            <div class="ordinary-slider modal__side">
                <div class="swiper modal__slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/food1.jpg" type="image/jpg"/>
                                <img src="./img/food1.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/food2.jpg" type="image/jpg"/>
                                <img src="./img/food2.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/food3.jpg" type="image/jpg"/>
                                <img src="./img/food3.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/food4.jpg" type="image/jpg"/>
                                <img src="./img/food4.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/food5.jpg" type="image/jpg"/>
                                <img src="./img/food5.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/food6.jpg" type="image/jpg"/>
                                <img src="./img/food6.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/food7.jpg" type="image/jpg"/>
                                <img src="./img/food7.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/food8.jpg" type="image/jpg"/>
                                <img src="./img/food8.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/food9.jpg" type="image/jpg"/>
                                <img src="./img/food9.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/food11.jpg" type="image/jpg"/>
                                <img src="./img/food11.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/food12.jpg" type="image/jpg"/>
                                <img src="./img/food12.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/food13.jpg" type="image/jpg"/>
                                <img src="./img/food13.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/food14.jpg" type="image/jpg"/>
                                <img src="./img/food14.jpg" alt="" />
                            </picture>
                        </div>
                        <div class="swiper-slide modal__slide">
                            <picture>
                                <source srcset="./img/food16.jpg" type="image/jpg"/>
                                <img src="./img/food16.jpg" alt="" />
                            </picture>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <button class="btn--reset btn btn--circled btn--arrow modal__close" data-modal-cancel="true">
                <svg width="22" height="22">
                   <use xlink:href="img/sprite.svg#close"></use>
                </svg>
            </button>
        </div>
    </div>
</div>

<div class="modal modal--form dark" data-modal="bronir" data-abs-curtain="false">
    <div class="modal__bg"></div>
    <div class="modal__window" data-modal-window="true">
        <div class="modal__content">
            <h2 class="title title--md modal__title">Бронирование</h2>
            <form class="modal-form modal__form" action="#">
                <label class="modal-form__field-wrapper modal-form__field-wrapper--name">
                    <input class="modal-form__field" type="text" name="name" placeholder="Имя">
                    <span class="modal-form__error">Описание ошибки</span>
                </label>
                <label class="modal-form__field-wrapper modal-form__field-wrapper--tel">
                    <input class="modal-form__field" type="text" name="phone" placeholder="Телефон">
                    <span class="modal-form__error">Описание ошибки</span>
                </label>
                <div class="modal-form__row">
                    <label class="modal-form__field-wrapper modal-form__field-wrapper--date">
                        <input class="modal-form__field" type="date" name="date" value="" placeholder="Дата" required>
                        <span class="modal-form__error">Описание ошибки</span>
                        <span class="modal-form__icon">
                            <svg width="24" height="24">
                                <use xlink:href="img/sprite.svg#date"></use>
                            </svg>
                        </span>
                    </label>
                    <label class="modal-form__field-wrapper modal-form__field-wrapper--time" >
                        <input class="modal-form__field" type="time" name="time" value="" placeholder="Время" required>
                        <span class="modal-form__error">Описание ошибки</span>
                    </label>
                </div>
                <label class="modal-form__field-wrapper modal-form__field-wrapper--name">
                    <input class="modal-form__field" type="text" name="count" placeholder="Кол-во гостей">
                    <span class="modal-form__error">Описание ошибки</span>
                </label>
                <button class="btn modal-form__btn" type="submit">
                    <span>Забронировать</span>
                </button>
            </form>
            <div class="modal__info">
                <div class="modal__btns">
                    <button class="btn btn--circled footer__social">
                        <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.1487 1.83203H14.8487C17.782 1.83203 20.1654 4.21536 20.1654 7.1487V14.8487C20.1654 16.2588 19.6052 17.6111 18.6082 18.6082C17.6111 19.6052 16.2588 20.1654 14.8487 20.1654H7.1487C4.21536 20.1654 1.83203 17.782 1.83203 14.8487V7.1487C1.83203 5.73863 2.39218 4.38632 3.38925 3.38925C4.38632 2.39218 5.73863 1.83203 7.1487 1.83203ZM6.96536 3.66536C6.09015 3.66536 5.25078 4.01304 4.63191 4.63191C4.01304 5.25078 3.66536 6.09015 3.66536 6.96536V15.032C3.66536 16.8562 5.1412 18.332 6.96536 18.332H15.032C15.9072 18.332 16.7466 17.9844 17.3655 17.3655C17.9844 16.7466 18.332 15.9072 18.332 15.032V6.96536C18.332 5.1412 16.8562 3.66536 15.032 3.66536H6.96536ZM15.8112 5.04036C16.1151 5.04036 16.4065 5.16109 16.6214 5.37597C16.8363 5.59086 16.957 5.8823 16.957 6.1862C16.957 6.49009 16.8363 6.78154 16.6214 6.99642C16.4065 7.21131 16.1151 7.33203 15.8112 7.33203C15.5073 7.33203 15.2159 7.21131 15.001 6.99642C14.7861 6.78154 14.6654 6.49009 14.6654 6.1862C14.6654 5.8823 14.7861 5.59086 15.001 5.37597C15.2159 5.16109 15.5073 5.04036 15.8112 5.04036ZM10.9987 6.41536C12.2143 6.41536 13.3801 6.89825 14.2396 7.75779C15.0991 8.61733 15.582 9.78312 15.582 10.9987C15.582 12.2143 15.0991 13.3801 14.2396 14.2396C13.3801 15.0991 12.2143 15.582 10.9987 15.582C9.78312 15.582 8.61733 15.0991 7.75779 14.2396C6.89825 13.3801 6.41536 12.2143 6.41536 10.9987C6.41536 9.78312 6.89825 8.61733 7.75779 7.75779C8.61733 6.89825 9.78312 6.41536 10.9987 6.41536ZM10.9987 8.2487C10.2694 8.2487 9.56988 8.53843 9.05415 9.05415C8.53843 9.56988 8.2487 10.2694 8.2487 10.9987C8.2487 11.728 8.53843 12.4275 9.05415 12.9432C9.56988 13.459 10.2694 13.7487 10.9987 13.7487C11.728 13.7487 12.4275 13.459 12.9432 12.9432C13.459 12.4275 13.7487 11.728 13.7487 10.9987C13.7487 10.2694 13.459 9.56988 12.9432 9.05415C12.4275 8.53843 11.728 8.2487 10.9987 8.2487Z"/>
                        </svg>
                    </button>
                    <button class="btn btn--circled footer__social">
                        <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.30506 12.8521C5.34445 12.8652 5.38495 12.8747 5.42606 12.8805C5.68541 13.4916 5.9433 14.1033 6.19973 14.7156C6.66081 15.8175 7.12556 16.9523 7.22731 17.2786C7.35473 17.6801 7.48856 17.9533 7.63523 18.1403C7.71131 18.2356 7.79839 18.32 7.90106 18.3841C7.95454 18.4176 8.01177 18.4447 8.07156 18.4648C8.36489 18.5748 8.63256 18.529 8.80031 18.4731C8.89875 18.4395 8.99242 18.3932 9.07898 18.3356L9.08356 18.3337L11.6741 16.7186L14.667 19.0121C14.711 19.046 14.7586 19.0744 14.81 19.0973C15.1693 19.2531 15.5176 19.3081 15.8458 19.2641C16.1721 19.2183 16.4316 19.0817 16.625 18.9268C16.8471 18.7478 17.0241 18.5193 17.142 18.2595L17.1502 18.2393L17.153 18.232L17.1548 18.2283V18.2265L17.1557 18.2256C17.1717 18.1861 17.1839 18.1453 17.1924 18.1036L19.9241 4.33073C19.9327 4.28664 19.937 4.24182 19.9369 4.19689C19.9369 3.79356 19.7847 3.40948 19.4281 3.17756C19.122 2.97864 18.7819 2.96948 18.5665 2.98598C18.3355 3.00431 18.121 3.06114 17.9771 3.10698C17.8965 3.13251 17.817 3.16126 17.7387 3.19314L17.7286 3.19773L2.40748 9.20739L2.40564 9.20831C2.35381 9.22738 2.30274 9.24848 2.25256 9.27156C2.13107 9.32618 2.01452 9.3912 1.90423 9.46589C1.69614 9.60798 1.21673 9.99848 1.29831 10.6438C1.36248 11.1571 1.71448 11.4734 1.92989 11.6256C2.04723 11.709 2.15906 11.7686 2.24156 11.808C2.27823 11.8263 2.35706 11.8575 2.39098 11.8721L2.40014 11.8749L5.30506 12.8521ZM18.2649 4.46273H18.2631C18.2552 4.46623 18.2472 4.46959 18.2392 4.47281L2.89973 10.4907C2.89183 10.4939 2.88389 10.497 2.87589 10.4999L2.86673 10.5026C2.8387 10.5137 2.81118 10.5259 2.78423 10.5393C2.80974 10.5539 2.83606 10.5671 2.86306 10.5787L5.74323 11.5486C5.7947 11.5659 5.84393 11.5893 5.88989 11.6182L15.4021 6.04948L15.4113 6.04489C15.4483 6.02244 15.4862 6.00164 15.525 5.98256C15.591 5.94864 15.6964 5.89914 15.8156 5.86248C15.8981 5.83681 16.1428 5.76439 16.4068 5.84964C16.5468 5.89378 16.6716 5.97641 16.7669 6.08809C16.8623 6.19977 16.9242 6.336 16.9458 6.48123C16.9799 6.60842 16.9809 6.74223 16.9486 6.86989C16.8844 7.12198 16.7084 7.31814 16.5471 7.46848C16.4096 7.59681 14.6266 9.31648 12.8676 11.0141L10.4723 13.3241L10.0461 13.7366L15.4287 17.8635C15.5014 17.894 15.5803 17.9065 15.6588 17.9001C15.6984 17.8948 15.7356 17.8782 15.7661 17.8525C15.8032 17.8211 15.8351 17.784 15.8605 17.7425L15.8623 17.7416L18.5115 4.38298C18.428 4.40305 18.3462 4.4294 18.2667 4.46181L18.2649 4.46273ZM10.509 15.8239L9.43464 15.0007L9.17431 16.6553L10.509 15.8239ZM8.44923 13.3672L9.51714 12.336L11.9124 10.0241L12.8043 9.16431L6.82764 12.6632L6.85973 12.7384C7.23666 13.6289 7.60945 14.5211 7.97806 15.4151L8.23748 13.7651C8.26095 13.612 8.33559 13.4724 8.44923 13.3672Z"/>
                        </svg>
                    </button>
                    <button class="btn btn--circled footer__social">
                        <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4642 4.49959C16.6238 3.65068 15.6228 2.97761 14.5195 2.51963C13.4163 2.06165 12.2329 1.82792 11.0384 1.83209C6.03336 1.83209 1.95419 5.91125 1.95419 10.9163C1.95419 12.5204 2.37586 14.0788 3.16419 15.4538L1.88086 20.1654L6.69336 18.9004C8.02253 19.6246 9.51669 20.0096 11.0384 20.0096C16.0434 20.0096 20.1225 15.9304 20.1225 10.9254C20.1225 8.49625 19.1784 6.21375 17.4642 4.49959ZM11.0384 18.4696C9.68169 18.4696 8.35253 18.1029 7.18836 17.4154L6.91336 17.2504L4.05336 18.0021L4.81419 15.2154L4.63086 14.9313C3.87713 13.7276 3.4769 12.3364 3.47586 10.9163C3.47586 6.75459 6.86753 3.36292 11.0292 3.36292C13.0459 3.36292 14.9434 4.15125 16.3642 5.58125C17.0677 6.28155 17.6253 7.11453 18.0045 8.03189C18.3837 8.94926 18.5771 9.93277 18.5734 10.9254C18.5917 15.0871 15.2 18.4696 11.0384 18.4696ZM15.1817 12.8229C14.9525 12.7129 13.8342 12.1629 13.6325 12.0804C13.4217 12.0071 13.275 11.9704 13.1192 12.1904C12.9634 12.4196 12.5325 12.9329 12.4042 13.0796C12.2759 13.2354 12.1384 13.2538 11.9092 13.1346C11.68 13.0246 10.9467 12.7771 10.085 12.0071C9.40669 11.4021 8.95753 10.6596 8.82003 10.4304C8.69169 10.2013 8.80169 10.0821 8.92086 9.96292C9.02169 9.86209 9.15003 9.69709 9.26003 9.56875C9.37003 9.44042 9.41586 9.33959 9.48919 9.19292C9.56253 9.03709 9.52586 8.90875 9.47086 8.79875C9.41586 8.68875 8.95753 7.57042 8.77419 7.11209C8.59086 6.67209 8.39836 6.72709 8.26086 6.71792H7.82086C7.66503 6.71792 7.42669 6.77292 7.21586 7.00209C7.01419 7.23125 6.42753 7.78125 6.42753 8.89959C6.42753 10.0179 7.24336 11.0996 7.35336 11.2463C7.46336 11.4021 8.95753 13.6938 11.2309 14.6746C11.7717 14.9129 12.1934 15.0504 12.5234 15.1513C13.0642 15.3254 13.5592 15.2979 13.9534 15.2429C14.3934 15.1788 15.3009 14.6929 15.4842 14.1613C15.6767 13.6296 15.6767 13.1804 15.6125 13.0796C15.5484 12.9788 15.4109 12.9329 15.1817 12.8229Z"/>
                        </svg>
                    </button>
                </div>
                <dl class="components__list modal__address">
                    <div class="components__list-item">
                        <dt>Телефон</dt>
                        <dd>
                            <a href="tel:+79000039044">+7 (900) 003-90-44</a>
                        </dd>
                    </div>
                    <div class="components__list-item">
                        <dt>Адрес:</dt>
                        <dd>г. Сочи, ул. Войкова, д.3</dd>
                    </div>
                </dl>
            </div>
            <button class="btn--reset btn btn--circled btn--arrow modal__close" data-modal-cancel="true">
                <svg width="22" height="22">
                   <use xlink:href="img/sprite.svg#close"></use>
                </svg>
            </button>
        </div>
    </div>
</div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="./js/script.js?rand=<?=rand();?>"></script>
</body>
</html>