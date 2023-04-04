import React from 'react';
import logo from '../../../assets/img/logo.svg';

import { cn } from '@bem-react/classname';

const Footer = () => {
  const footer = cn('Footer');
  const creator = cn('Creator');

  return (
    <div className={footer()}>
      <div className={footer('Top')}>
        fs
      </div>
      <div className={footer('Bottom')}>
        <a href="#" className={footer('Politics')}>
          Политика конфиденциальности
        </a>
        <span
          className={footer('Copyright')}
          dangerouslySetInnerHTML={{ __html: `${new Date().getFullYear()} &copy; ГК “LEVEL”<br> Ревизионные люки LEVEL. Все права защищены.` }}
        />
        <a href="#" className={creator()}>
          <img src={logo} alt="Создание и продвижение сайта Cinar" className={creator('Logo')}/>
          <span className={creator('Text')}>Создание и продвижение сайта</span>
        </a>
      </div>
    </div>
  );
}

/*
<footer>
  <div className="container">
    <div className="footer__up">
      <div className="footer__row-up">
        <div className="footer__socials">
          <img src="./images/logo-level.png" width="149px" alt="logo-level"/>
          <div className="footer__socials-icons">
            <img src="./images/telegram.svg" alt="telegram"/>
            <img src="./images/whatsup.svg" alt="whatsup"/>
            <img src="./images/vk.svg" alt="vk"/>
          </div>
          <span>Прием заказов</span>
          <span>пн-вс 9.00-21.00</span>
          <span>Работа офиса</span>
          <span>пн-пт 9.00-18.00</span>
        </div>
        <div className="footer__about-company">
          <h4>О компании</h4>
          <ul>
            <li><a href="#">Ревизионные люки LEVEL</a></li>
            <li><a href="">Каталог</a></li>
            <li><a href="">Объекты</a></li>
            <li><a href="">Контакты</a></li>
          </ul>
        </div>
        <div className="footer__order">
          <h4>Заказы</h4>
          <ul>
            <li><a href="#">Оформление заказа</a></li>
            <li><a href=""></a>Доставка и оплата</li>
            <li><a href=""></a>Личный кабинет</li>
            <li><a href=""></a>Контакты</li>
          </ul>
        </div>
        <div className="footer__catalog">
          <h4>Каталог</h4>
          <ul>
            <li><a href="#">Люк под плитку</a></li>
            <li><a href=""></a>Люк под покраску</li>
            <li><a href=""></a>Люки-двери</li>
            <li><a href=""></a>Противопожарные</li>
            <li><a href=""></a>Напольный люк</li>
          </ul>
        </div>
        <div className="footer__contacts">
          <span>Номер телефона</span>
          <span>+7 (812) 646-48-36</span>
          <span>Электронная почта</span>
          <span>646@levelland.ru</span>
          <span>Наш адрес</span>
          <span>Санкт-Петербург, ул.</span>
          <span>Химиков д. 28, офис. 805</span>
        </div>
      </div>
    </div>
    <div className="footer__down">
      <div className="footer__row-down">
        <div className="footer__politics">
          <a href="#">Политика конфиденциальности</a>
        </div>
        <div className="footer__copyrights">
          <span>2023 © ГК “LEVEL”</span><br/>
          <span>Ревизионные люки LEVEL. Все права защищены.</span>
        </div>
        <div className="footer__creatorsites">
          <img src={logo} alt="logo"/>
          <span>Создание и <br/>продвижение сайта</span>
        </div>
      </div>
    </div>
  </div>
</footer>
*/

export default Footer;