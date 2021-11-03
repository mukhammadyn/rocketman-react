import "../login-page/login-page.scss";
import { ReactComponent as LogoSite } from "../../assets/img/icon-recketman-dark.svg";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-page__logo-wrapper">
        <LogoSite width="75" height="68" />
      </div>
      <form className="login-page__form" action="#">
        <h2 className="login-page__title">Kirish</h2>
        <div className="login-page__input-box">
          <span className="login-page__icon"></span>
          <input className="login-page__input" type="text" name="login" aria-label="login" placeholder="Login" required />
        </div>
        <div className="login-page__input-box login-page__input-box--password">
          <span className="login-page__icon"></span>
          <input className="login-page__input" type="password" name="password" aria-label="password" placeholder="Parol" required />
        </div>
        <div className="login-page__btn-wrapper">
          <button className="login-page__btn" type="button">Kirish</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;