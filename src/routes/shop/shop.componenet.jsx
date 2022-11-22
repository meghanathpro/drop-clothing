import { Route, Routes } from "react-router-dom";
//import CategoryPreview from "../../components/category-preview/category-preview.componenet";
import CategoriesPreview from "../categories-preview/categories-preview.componenet";
import Category from "../category/category.componenet";
import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
