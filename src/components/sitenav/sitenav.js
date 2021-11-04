import "../sitenav/sitenav.scss";
import { ReactComponent as Customer } from "../../assets/img/icon-customer-sitenav.svg"
import { ReactComponent as Order } from "../../assets/img/icon-order-sitenav.svg"
import { ReactComponent as Product } from "../../assets/img/icon-product-sitenav.svg"
import { ReactComponent as Suggations } from "../../assets/img/icon-suggation-sitenav.svg"
import { ReactComponent as Settings } from "../../assets/img/icon-settings-sitenav.svg"

const Sitenav = () => {
  return (
    <nav className="sitenav">
      <ul className="sitenav-list">
        <li className="sitenav-list__item">
          <Customer className="sitenav-list__icon" width="24" height="24" />
          <a className="sitenav-list__link" href="#">Buyurtmalar</a>
        </li>
        <li className="sitenav-list__item active">
          <Order className="sitenav-list__icon" width="24" height="24" />
          <a className="sitenav-list__link" href="#">Mijozlar</a>
        </li>
        <li className="sitenav-list__item">
          <Product className="sitenav-list__icon" width="24" height="24" />
          <a className="sitenav-list__link" href="#">Mahsulotlar</a>
        </li>
        <li className="sitenav-list__item">
          <Suggations className="sitenav-list__icon" width="24" height="24" />
          <a className="sitenav-list__link" href="#">Takliflar</a>
        </li>
        <li className="sitenav-list__item sitenav-list__item--settings">
          <Settings className="sitenav-list__icon" width="24" height="24" />
          <a className="sitenav-list__link" href="#">Sozlamalar</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sitenav;