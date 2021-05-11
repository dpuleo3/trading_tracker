import React from 'react';
import { Button } from './Button'



function IntegrationCard(props) {
  return (
    <>
      <li className='integration__card'>
          <div className="integration__card__wrapper">
            <figure className='integration__card__pic-wrap'>
                <img
                className='integration__card__img'
                alt='Broker Logo'
                src={props.src}
                />
            </figure>
            <div className='integration__card__info'>
                <h2 className='integration__card__text'>{props.text}</h2>
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--medium' to={props.path}>
                    Connect
                </Button>
            </div>
          </div>
      </li>
    </>
  );
}

export default IntegrationCard;