import React, { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Order from "./Order";
import { useOrders } from "../hooks/zustand/useOrders";
import { UseSearchProduct } from "../hooks/zustand/useSearchProduct";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const { orders, deleteOrder } = useOrders();
  const { setSearchValue } = UseSearchProduct();
  const [value, setValue] = useState("");
  let [cartOpen, setCartOpen] = useState(false);
  let [menuOpen, setMenuOpen] = useState(false);
  const showOrders = (orders) => {
    let summa = 0;
    orders.forEach((el) => (summa += Number.parseFloat(el.price)));

    return (
      <div className="shop-cart-body">
        <div className="shop-cart-list">
          {orders.map((el) => (
            <Order key={el._id} order={el} onDelete={deleteOrder} />
          ))}
        </div>
        <div className="shop-cart-bottom">
          <p className="summa">
            Subtotal: {new Intl.NumberFormat().format(summa)}$
          </p>
          <button className="product-add-to-card hover">Checkout</button>
        </div>
      </div>
    );
  };
  const showNothing = () => {
    return <div className="empathy">Cart is empty</div>;
  };

  const handleClick = (event) => {
    event.preventDefault();
    setSearchValue(value);
  };

  return (
    <header>
      <div className="container">
        <div className="header">
          <Link to={"/"} className="logo">
            <svg
              width="170"
              height="21"
              viewBox="0 0 170 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_27)">
                <path
                  d="M10.575 20.9428C9.06831 20.9428 7.67318 20.6857 6.38967 20.1715C5.10615 19.6381 3.98075 18.9048 3.01347 17.9714C2.06479 17.0191 1.32072 15.9047 0.781269 14.6286C0.260423 13.3524 0 11.9714 0 10.4857C0 8.98096 0.260423 7.60001 0.781269 6.34286C1.32072 5.06667 2.06479 3.96191 3.01347 3.02857C3.98075 2.09524 5.09685 1.36191 6.36177 0.828573C7.64528 0.29524 9.0311 0.028574 10.5192 0.028574C12.0817 0.028574 13.4862 0.285717 14.7325 0.800002C15.9788 1.29524 17.0764 1.99048 18.025 2.88572L14.6767 6.31429C14.2116 5.78096 13.635 5.3619 12.9468 5.05714C12.2585 4.75238 11.4494 4.6 10.5192 4.6C9.7194 4.6 8.98459 4.73333 8.31493 5.00001C7.66388 5.26667 7.09653 5.66667 6.61289 6.2C6.12924 6.71428 5.74791 7.33333 5.46888 8.05715C5.20846 8.78095 5.07825 9.59051 5.07825 10.4857C5.07825 11.3809 5.20846 12.1905 5.46888 12.9143C5.74791 13.6381 6.12924 14.2666 6.61289 14.8C7.09653 15.3142 7.66388 15.7143 8.31493 16C8.98459 16.2667 9.7194 16.4 10.5192 16.4C11.4494 16.4 12.2678 16.2572 12.9747 15.9715C13.6815 15.6667 14.2861 15.2381 14.7883 14.6857L18.1367 18.1143C17.1693 19.0095 16.0719 19.7048 14.8441 20.2C13.635 20.6952 12.212 20.9428 10.575 20.9428Z"
                  fill="black"
                />
                <path
                  d="M18.3544 20.6286L26.0276 0.371429H30.8547L38.4441 20.6286H33.2264L27.5064 3.6H29.32L23.4606 20.6286H18.3544Z"
                  fill="black"
                />
                <path
                  d="M40.2962 20.6286V0.371429H45.2907V20.6286H40.2962ZM44.2583 20.6286V16.2286H53.801V20.6286H44.2583Z"
                  fill="black"
                />
                <path
                  d="M56.1276 20.6286V0.371429H61.1221V20.6286H56.1276Z"
                  fill="black"
                />
                <path
                  d="M64.6291 20.6286V0.371429H69.6236V20.6286H64.6291ZM68.5913 13.0571V8.74286H78.385V13.0571H68.5913ZM68.5913 4.68571V0.371429H78.8314V4.68571H68.5913Z"
                  fill="black"
                />
                <path
                  d="M90.8498 21C89.3245 21 87.9201 20.7333 86.6365 20.2C85.3531 19.6667 84.2276 18.9238 83.2604 17.9714C82.3117 17.0191 81.5676 15.9047 81.0281 14.6286C80.4887 13.3334 80.219 11.9429 80.219 10.4571C80.219 8.97143 80.4794 7.6 81.0002 6.34286C81.5397 5.06667 82.2838 3.95238 83.2325 3C84.1811 2.04761 85.2973 1.31428 86.5807 0.800002C87.8643 0.266667 89.2687 0 90.794 0C92.3194 0 93.7238 0.266667 95.0075 0.800002C96.2904 1.31428 97.4072 2.04761 98.3558 3C99.3044 3.95238 100.039 5.06667 100.56 6.34286C101.099 7.61905 101.369 9 101.369 10.4857C101.369 11.9714 101.099 13.3524 100.56 14.6286C100.039 15.9047 99.3044 17.0286 98.3558 18C97.4072 18.9524 96.2904 19.6952 95.0075 20.2285C93.7424 20.7428 92.3566 21 90.8498 21ZM90.794 16.4286C91.9101 16.4286 92.8774 16.181 93.6959 15.6858C94.5144 15.1904 95.1465 14.4952 95.5935 13.6C96.0397 12.7048 96.2632 11.6571 96.2632 10.4571C96.2632 9.58096 96.1327 8.78095 95.8725 8.05715C95.6302 7.33333 95.2676 6.71428 94.7839 6.2C94.3002 5.66667 93.7237 5.25714 93.0542 4.97143C92.3845 4.68571 91.6311 4.54286 90.794 4.54286C89.6779 4.54286 88.7106 4.79048 87.8922 5.28572C87.0737 5.7619 86.4412 6.44762 85.9948 7.34286C85.5483 8.2381 85.3252 9.2762 85.3252 10.4571C85.3252 11.3714 85.446 12.2 85.6879 12.9429C85.9482 13.6667 86.3203 14.2953 86.804 14.8286C87.2876 15.3429 87.8643 15.7428 88.5339 16.0285C89.2036 16.2952 89.957 16.4286 90.794 16.4286Z"
                  fill="black"
                />
                <path
                  d="M107.829 12.4286V8.77143H111.596C112.414 8.77143 113.038 8.57143 113.465 8.17143C113.912 7.75238 114.135 7.19048 114.135 6.48572C114.135 5.8 113.912 5.24762 113.465 4.82857C113.038 4.39048 112.414 4.17143 111.596 4.17143H107.829V0.371429H112.294C113.633 0.371429 114.804 0.628573 115.809 1.14286C116.832 1.65715 117.632 2.36191 118.209 3.25715C118.786 4.15238 119.074 5.2 119.074 6.4C119.074 7.6 118.776 8.65714 118.181 9.57142C117.604 10.4667 116.795 11.1714 115.753 11.6857C114.711 12.181 113.493 12.4286 112.099 12.4286H107.829ZM103.867 20.6286V0.371429H108.862V20.6286H103.867ZM114.582 20.6286L108.834 11.9429L113.326 10.8286L120.357 20.6286H114.582Z"
                  fill="black"
                />
                <path
                  d="M121.988 20.6286V0.371429H125.475L126.982 4.51428V20.6286H121.988ZM135.632 20.6286L124.08 5.6L125.475 0.371429L137.055 15.4L135.632 20.6286ZM135.632 20.6286L134.348 16.3714V0.371429H139.343V20.6286H135.632Z"
                  fill="black"
                />
                <path
                  d="M142.859 20.6286V0.371429H147.854V20.6286H142.859Z"
                  fill="black"
                />
                <path
                  d="M149.91 20.6286L157.583 0.371429H162.41L170 20.6286H164.783L159.062 3.6H160.876L155.017 20.6286H149.91Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_27">
                  <rect width="170" height="21" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <div className="navigation dekstop-menu">
            <Link to={"/"} className="header-link">
              Home
            </Link>
            <Link to={"/products"} className="header-link">
              Shop
            </Link>
            <Link to={"/about"} className="header-link">
              About
            </Link>
          </div>
          <div className="header-right">
            <label className="dekstop-search">
              <input
                placeholder="Search..."
                className="search-product"
                onChange={(event) => setValue(event.target.value)}
                value={value}
              />
              <button onClick={handleClick} className="search-button hover">
                <FaSearch color="#fff" />
              </button>
            </label>
            <button
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
              className={`shop-cart-button hover`}
            >
              <FaShoppingCart />
            </button>
            {cartOpen && (
              <div className="shop-cart">
                <div className="shop-cart-header">
                  <button
                    className="shop-cart-back"
                    onClick={() => setCartOpen((cartOpen = !cartOpen))}
                  >
                    <MdOutlineArrowBackIosNew color="#fff" size={40} />
                  </button>
                  <div className="shop-cart-title">CART</div>
                </div>
                {orders.length > 0 ? showOrders(orders) : showNothing()}
              </div>
            )}

            <button
              onClick={() => setMenuOpen((menuOpen = !menuOpen))}
              className={`shop-cart-button hover`}
            >
              <GiHamburgerMenu />
            </button>
            {menuOpen && (
              <div className="shop-cart">
                <div className="shop-cart-header">
                  <button
                    className="shop-cart-back"
                    onClick={() => setMenuOpen((menuOpen = !menuOpen))}
                  >
                    <MdOutlineArrowBackIosNew color="#fff" size={40} />
                  </button>
                  <div className="shop-cart-title">MENU</div>
                </div>
                <div className="navigation">
                  <Link to={"/"} className="header-link">
                    Home
                  </Link>
                  <Link to={"/products"} className="header-link">
                    Shop
                  </Link>
                  <Link to={"/about"} className="header-link">
                    About
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
