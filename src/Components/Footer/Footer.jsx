import Logo from "Assets/images/logo.png";
import FooterLogo from "Assets/images/footer-logo.png";

import "./Footer.scss";

const Footer = () => {
    return <footer className="footer">
        <div className="footer__logo">
            <img src={Logo} alt="logo" />
            <button>
                Заказать звонок
            </button>
        </div>
        <ul className="footer__info">
            <li>Главная</li>
            <li>Каталог</li>
            <li>Услуги</li>
            <li>Расчет стоимости</li>
            <li>Консультация архитектора</li>
        </ul>
        <ul className="footer__info">
            <li>Экскурсия на объект</li>
            <li>3D-макет дома</li>
            <li>О нас</li>
            <li>Блог</li>
            <li>Контакты</li>
        </ul>
        <ul className="footer__links">
            <li>
                Делимся крутыми проектами в соц.сетях. Подписывайтесь!
            </li>
            <li>
                <a href="">
                    <svg width="29" height="17" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M11.1958 3.83144C11.24 4.87366 11.3013 6.95552 10.8235 7.7237C10.1656 8.78122 8.85581 6.81042 8.51963 6.29032C7.95393 5.41598 7.42177 4.52404 6.93065 3.56143C6.68725 3.08517 6.46236 2.58699 6.23718 2.07929C5.95997 1.45246 5.93048 1.10428 5.27286 0.869469C4.87395 0.727543 3.67173 0.807737 3.15778 0.808314C2.44408 0.810622 1.72055 0.806295 1.00887 0.820141C0.263375 0.834853 -0.22919 1.09245 0.108437 1.88371C0.487689 2.76729 1.0531 3.93615 1.50086 4.80962C2.25676 6.28368 2.95717 7.56043 3.83708 8.9667C5.44746 11.5439 7.34719 14.14 10.3338 15.4315C11.3559 15.8737 12.6183 16.2248 13.8962 16.2115C14.4376 16.2066 15.5459 16.2808 15.981 16.127C16.6837 15.8775 16.5975 15.458 16.6594 14.6648C16.7065 14.0636 16.8357 13.3837 17.1254 12.9559C17.9359 11.7616 19.0303 13.204 19.6327 13.8441C20.3363 14.5918 20.904 15.4338 21.8695 15.9262C22.5566 16.2764 22.811 16.275 23.6634 16.2603L25.8109 16.23C26.4775 16.2233 27.2209 16.2787 27.8049 16.0682C28.3882 15.8576 28.6345 15.366 28.3006 14.7037C28.0653 14.2373 27.7282 13.7544 27.4302 13.4027C27.1192 13.0355 26.7555 12.5999 26.3971 12.2607L25.8545 11.7161C25.5594 11.4083 25.0796 10.9963 24.7526 10.6724C24.0904 10.0167 23.4703 9.55892 24.0086 8.5516C24.2439 8.1114 24.617 7.64063 24.9061 7.27399C25.8745 6.04426 27.8838 3.48268 28.3448 2.07352C28.5954 1.30678 28.4552 0.934373 27.6707 0.829083C27.4054 0.793602 23.729 0.840911 23.3694 0.84293C22.5552 0.849565 22.0698 0.696678 21.7322 1.37428C21.6119 1.61573 21.5206 1.89179 21.4136 2.14708L21.0913 2.87921C20.5141 4.2099 18.5606 7.64207 17.5303 7.95852C16.9138 8.14775 16.666 7.26302 16.6166 6.73455C16.5377 5.88704 16.6565 3.47316 16.6851 2.48199C16.7036 1.85487 16.7279 1.07341 16.3674 0.660619C15.7717 -0.0216022 13.7445 0.0784954 12.6307 0.0842648C11.9997 0.0880148 11.2305 0.121765 10.648 0.269171C10.1965 0.383115 9.39781 0.791583 9.45765 1.21909C9.53425 1.25947 9.78949 1.29697 9.90309 1.32871C10.2939 1.43544 10.6677 1.66881 10.8463 2.00054C11.1206 2.51199 11.1677 3.17373 11.1958 3.83144Z" fill="white" />
                    </svg>
                </a>
                <a href="">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M12.1494 16.0007C10.0638 16.0007 8.36755 14.3077 8.36755 12.2273C8.36755 10.146 10.0635 8.45361 12.1494 8.45361C14.2338 8.45361 15.9301 10.146 15.9301 12.2273C15.9301 14.3077 14.2338 16.0007 12.1494 16.0007Z" fill="white" />
                        <path fillRule="evenodd" clip-rule="evenodd" d="M24.0602 7.33061C24.0602 3.36219 20.8363 0.145796 16.8594 0.145796L7.35753 0.145508C3.38058 0.145508 0.157227 3.36219 0.157227 7.33061L0.157516 16.8145C0.157516 20.7826 3.38058 23.9996 7.35753 23.9996H16.8594C20.8366 23.9996 24.06 20.7826 24.06 16.8145L24.0602 7.33061ZM18.3969 4.53769C17.6202 4.53769 16.9915 5.16539 16.9915 5.93992C16.9915 6.71445 17.6199 7.34215 18.3969 7.34215C19.173 7.34186 19.8009 6.71445 19.8009 5.93992C19.8012 5.16539 19.173 4.53769 18.3969 4.53769ZM12.1493 6.33541C8.89391 6.33541 6.24579 8.97804 6.24579 12.227C6.24608 15.4746 8.89391 18.1175 12.1493 18.1175C15.4042 18.1172 18.0515 15.4746 18.0515 12.227C18.0515 8.97804 15.4042 6.3357 12.1493 6.33541Z" fill="white" />
                    </svg>
                </a>
                <a href="">
                    <svg width="12" height="26" viewBox="0 0 12 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M2.64193 12.6821V24.8493C2.64193 25.0244 2.78444 25.166 2.96019 25.166H7.4878C7.66269 25.166 7.8052 25.0244 7.8052 24.8493L7.80549 12.4836H11.0872C11.2523 12.4836 11.3893 12.3579 11.404 12.194L11.7194 8.46791C11.735 8.28329 11.589 8.12406 11.4032 8.12406H7.80549V5.48114C7.80549 4.86123 8.30759 4.35901 8.92908 4.35901H11.459C11.6339 4.35901 11.7761 4.21737 11.7761 4.04285L11.7764 0.317024C11.7764 0.141348 11.6339 0.000288466 11.4587 0.000288466L7.18429 0C4.67521 0 2.64193 2.02936 2.64193 4.53209V8.12406H0.377984C0.202522 8.12406 0.0603027 8.26656 0.0603027 8.44109V12.1669C0.0603027 12.3423 0.202233 12.4836 0.377984 12.4836H2.64193V12.6821Z" fill="white" />
                    </svg>
                </a>
                <a href="">
                    <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M18.3255 10.7159C18.2994 10.7428 16.025 11.9543 15.7898 12.062C15.5022 12.2235 15.2146 12.385 14.9271 12.5466L13.2278 13.435C13.071 13.5158 11.607 14.3234 11.5025 14.3503V5.97767L11.6593 6.08535C11.79 6.11228 12.0515 6.27381 12.1822 6.32765C13.071 6.83916 19.2667 10.1236 19.3189 10.2044L18.3255 10.7159ZM0 8.53523V12.3312C0.026142 12.385 0.052284 13.5158 0.052284 13.7042C0.156852 15.3464 0.26142 17.904 1.3071 19.2501C1.72537 19.8154 2.43121 20.2462 3.26775 20.4616C4.02587 20.65 4.96698 20.7308 5.77738 20.7577C7.89488 20.8923 10.4045 20.9462 12.5743 20.9731C12.7834 20.9731 13.8291 20.9462 13.9598 21H15.3454C15.4761 20.9462 16.2603 20.9731 16.4433 20.9731C18.9791 20.9462 21.4887 20.8654 23.9984 20.7308C25.593 20.6231 26.4296 20.4616 27.3707 19.6001C27.7628 19.1962 27.9981 18.8463 28.2334 18.2001C28.4425 17.6886 28.6255 16.9617 28.7039 16.3695C28.8608 14.9965 28.9653 13.5158 28.9915 12.0889C29.0176 9.88132 29.0176 5.46615 28.4686 3.44702C28.1288 2.26247 27.6582 1.37405 26.5864 0.808693C26.0113 0.485632 25.5407 0.377945 24.8088 0.324102C24.1291 0.243337 23.4232 0.216415 22.7174 0.189493C18.3517 0.00104112 13.986 -0.0528024 9.59411 0.0548846C8.18244 0.108728 6.71849 0.13565 5.30683 0.243337C3.79059 0.351024 2.77105 0.377946 1.8038 1.21252C1.38553 1.58942 1.12411 1.88556 0.836544 2.53168C0.627408 3.0432 0.444414 3.6624 0.339846 4.2816C0.209136 4.92772 0.156852 5.70845 0.13071 6.35457C0.104568 6.73148 0.078426 7.08146 0.052284 7.43144C0.052284 7.61989 0.026142 8.42755 0 8.53523Z" fill="white" />
                    </svg>
                </a>
            </li>
            <li>Разработка и продвижение сайта:</li>
            <li>
                <img src={FooterLogo} alt="footer-logo" />
            </li>
        </ul>
    </footer>
}

export default Footer;