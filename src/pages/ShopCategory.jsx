import { useLocation } from "react-router-dom";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Items from "./Items";
import all_product from "../components/Assets/all_product";

import banner_women from "../components/Assets/banner_women.png";
import banner_kids from "../components/Assets/banner_kids.png";
import banner_mens from "../components/Assets/banner_mens.png";

const banner = {
  men: banner_mens,
  women: banner_women,
  kid: banner_kids,
};

const ShopCategory = () => {
  const location = useLocation();
  const pathname = location.pathname.replace("/", "");

  const menProducts = all_product.filter(
    (item) => item.category?.toLowerCase() === pathname?.toLowerCase()
  );

  
  return (
    <>
      <img src={banner[pathname]} alt="" width="100%" />

      <div className="container my-5">
        <p className="text-center">
          <span>Showing 1-12</span>Out of 36Products
        </p>
        <img src={dropdown_icon} alt="" className="img" />
        <div className="row">
          {menProducts.map((item) => (
            <div className="col" key={item.id}>
              <Items
                id={item.id}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                name={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
