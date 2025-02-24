import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { changeStatusSingleProductAction, decrProductCountAction, incrProductCountAction } from '../../store/reducers/singleProductReducer';
import { getSingleProduct } from '../../requests/products';
import { addToCartAction } from '../../store/reducers/cartReducer';
import s from './index.module.css';
import Breadcrumb from '../../components/Breadcrumb';

export default function SingleProductPage() {
  const dispatch = useDispatch();

  const { product_id } = useParams();
  console.log("Product ID:", product_id); // Для отладки

  // Проверка, что product_id существует
  useEffect(() => {
    if (product_id) {
      dispatch(changeStatusSingleProductAction());
      dispatch(getSingleProduct(product_id));
    }
  }, [dispatch, product_id]);

  const SingleProductState = useSelector(store => store.singleProduct);

  const { id, title, description, price, discont_price, image, count } = SingleProductState.state;

  const formattedPrice = price ? price.toFixed(2) : '0.00';
  const formattedDiscountPrice = discont_price ? discont_price.toFixed(2) : null;

  if (!product_id) {
    return <p>Loading product...</p>; // Или выводим какую-то ошибку
  }

  return (
    <div>
      {
        SingleProductState.status === 'loading'
          ? <p>Product is loading...</p>
          : <div className={s.singleProduct}>
            <Breadcrumb />
            <div>
              <img src={`http://localhost:3333${image}`} alt={title} />
              <div>
                <h3>{title}</h3>
                <div className={s.price}>
                  {
                    formattedDiscountPrice
                      ? (
                        <>
                          <p className={s.discounted_price}>${formattedDiscountPrice}</p>
                          <p className={s.original_price}>${formattedPrice}</p>
                        </>
                      ) : (
                        <p className={s.discounted_price}>${formattedPrice}</p>
                      )
                  }
                </div>
                <div className={s.addToCart}>
                  <div className={s.counter}>
                    <button onClick={() => dispatch(decrProductCountAction())}>-</button>
                    <p>{count}</p>
                    <button onClick={() => dispatch(incrProductCountAction())}>+</button>
                  </div>
                  <button onClick={() => dispatch(addToCartAction({ id, image, title, price, discont_price, count }))}>Add to cart</button>
                </div>
                <div className={s.description}>
                  <h4>Description</h4>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  );
}
