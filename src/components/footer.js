function Footer() {
  return(
    <>
      <footer>
          <div className="container">
            <div className="footer__down">
              <div className="footer__row">
                <div className="footer__politics">
                  <a href="#">Политика конфиденциальности</a>
                </div>
                <div className="footer__copyrights">
                  <span>2023 © ГК “LEVEL”</span>{'\n'} 
                  <span>Ревизионные люки LEVEL. Все права защищены.</span>
                </div> 
                <div className="footer__creatorsites">
                  <img src="./images/LOGO.svg" alt="logo"/>
                  <span>Создание и {'\n'}продвижение сайта</span>
                </div> 
              </div>
            </div>
          </div>  
      </footer>
    </>
  )
}

export default Footer;
