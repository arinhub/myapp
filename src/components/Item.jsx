import React from 'react';
import PropTypes from 'prop-types'
import { LazyLoadImage, trackWindowScroll} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Item = (props)  => {
  return (
    <div className={'item'}>
      <LazyLoadImage
      alt={props.name}
      height={"196px"}
      effect="blur"
      scrollPosition={props.scrollPosition}
      src={props['poster-image'] === 'posterthatismissing.jpg' ? `${process.env.PUBLIC_URL}/assets/placeholder_for_missing_posters.png` : `${process.env.PUBLIC_URL}/assets/${props['poster-image']}`}
      />
      <p className={'title'}>{props.name}</p>
    </div>
  )
};

Item.propTypes = {
  name: PropTypes.string.isRequired
}

export default trackWindowScroll(Item);