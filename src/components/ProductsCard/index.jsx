import React from 'react'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction, deleteFromCartAction } from '../../store/reducers/cartReducer';
import { addToFavoritesAction } from '../../store/reducers/favoritesReducer';
// import basketEmpty from '../../media/basketEmpty.svg'
// import basketHeartEmpty from '../../media/basketHeartEmpty.svg'
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function ProductsCard({id, title, price, discont_price, image }) {

 const cartState = useSelector(store => store.cart);
 const isInCart = cartState.find(el => el.id === id);

 const favoriteState = useSelector(store => store.favorites);
 const isFavorite = favoriteState.find(el => el.id === id);

 const dispatch = useDispatch();

 const cartAction = () => dispatch(isInCart ? deleteFromCartAction(id) : addToCartAction({id, image, title, price, discont_price}))

 const discountPercentage = discont_price ? Math.round(((price - discont_price) / price) * 100) : null;

 const handBagStyle = {
  fill: isInCart ? 'rgb(146, 161, 52)' : '#FFFFFF'
 }

const formattedPrice = price ? price.toFixed(2) : '0.00';
const formattedDiscountPrice = discont_price ? discont_price.toFixed(2) : null;
 const likedStyles = {
   fill: isFavorite ? 'rgb(146, 161, 52)' : '#FFFFFF',
  //  stroke: '#424436',
  //  strokeWidth: '20'
 }

  return (
    <div className={s.card_container}>
      <Link to={`/products/${id}`}>
        {discountPercentage && (
          <span className={s.discount_badge}>
            -{discountPercentage}%
          </span>
        )}
        <img src={`http://localhost:3333${image}`} alt={ title } />
        <p> { title } </p>
        <div className={s.price}>
              {
                formattedDiscountPrice
                  ? (
                    <>
                      <p className={s.discounted_price}> ${formattedDiscountPrice} </p>
                      <p className={s.original_price}> ${formattedPrice} </p>
                    </>
                  ) : (
                    <p className={s.discounted_price}> ${formattedPrice} </p>
                  )
              }
        </div>
      </Link>
      <div className={s.icons}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => dispatch(addToFavoritesAction({id, image, title, price, discont_price}))} style={likedStyles}>
          <g clipPath="url(#clip0_5252_15571)">
          <path d="M39.4 32.2222C42.678 29.14 46 25.4456 46 20.6111C46 17.5317 44.7252 14.5783 42.456 12.4008C40.1868 10.2233 37.1091 9 33.9 9C30.028 9 27.3 10.0556 24 13.2222C20.7 10.0556 17.972 9 14.1 9C10.8909 9 7.8132 10.2233 5.54401 12.4008C3.27482 14.5783 2 17.5317 2 20.6111C2 25.4667 5.3 29.1611 8.6 32.2222L24 47L39.4 32.2222Z" stroke="#424436" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_5252_15571">
          <rect width="48" height="48" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={cartAction} style={handBagStyle}>
          <path d="M40.5 13H7L3 47H44.5L40.5 13Z"/>
          <path d="M24 0C18.4961 0 14.0565 4.37372 14.0565 9.79592V11.7551H6.19492L6.10169 12.6122L2.12429 46.898L2 48H46L45.8757 46.898L41.8983 12.6122L41.8051 11.7551H33.9435V9.79592C33.9435 4.37372 29.5039 0 24 0ZM24 1.95918C28.4396 1.95918 31.9548 5.42219 31.9548 9.79592V11.7551H16.0452V9.79592C16.0452 5.42219 19.5604 1.95918 24 1.95918ZM7.99717 13.7143H14.0565V15.949C13.4622 16.2895 13.0621 16.9094 13.0621 17.6327C13.0621 18.7156 13.9516 19.5918 15.0508 19.5918C16.1501 19.5918 17.0395 18.7156 17.0395 17.6327C17.0395 16.9094 16.6395 16.2895 16.0452 15.949V13.7143H31.9548V15.949C31.3605 16.2895 30.9605 16.9094 30.9605 17.6327C30.9605 18.7156 31.8499 19.5918 32.9492 19.5918C34.0484 19.5918 34.9379 18.7156 34.9379 17.6327C34.9379 16.9094 34.5378 16.2895 33.9435 15.949V13.7143H40.0028L43.7627 46.0408H4.23729L7.99717 13.7143Z" fill="#424436"/>
        </svg>
      </div>      
  </div>
  )
}