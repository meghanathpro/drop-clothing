import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrrentUser } from "../../store/user/user.selector";
import { Fragment, useContext } from "react";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.componenet";
import CartIcon from "../../components/cart-icon/cart-icon.componenets";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  NavigationContainer,
  NavLink,
  LogoContainer,
  NavLinks,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrrentUser);
  /*   const { currentUser } = useContext(UserContext);
   */ const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
