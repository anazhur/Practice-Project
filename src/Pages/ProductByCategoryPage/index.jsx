import React, { useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb"
import ProductsCard from "../../components/ProductsCard";
import s from "./index.module.css";
import { ProductsByCategory } from "../../components/ProductsByCategory";

export default function ProductByCategoryPage() {

  return (
    <div className={s.container}>
      <Breadcrumb />

      <ProductsByCategory />
    </div>
  );
}

