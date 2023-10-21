import React from 'react';
import classes from './Card.module.scss';
import Link from 'next/link';
const Card = () => {
  return (
    <div className={classes.item}>
      <Link className={classes.cardLink} href="">
      <img className={classes.cardImage} src='/panel.jpg'/>
      </Link>
      <p className={classes.itemName}>Risen RSM40-8-410M</p>
      <p className={classes.itemPrice}>Цена:</p>
      <p className={classes.itemPriceCount}>5700 грн</p>
      <button className={classes.btn}>КУПИТЬ</button>
    </div>
  );
};

export default Card;