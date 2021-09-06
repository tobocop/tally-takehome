import React from "react";
import star from "../assets/images/full_star.svg"
import halfStar from "../assets/images/half_star.svg"
import "./Stars.scss"

interface StarsProps {
  count: string
}


function renderStars(n: number) {
  const decimal = n - Math.floor(n);
  const hasDecimal = decimal !== 0;

  const stars = Array(n - decimal)
    .fill("")
    .map((_, i) => <img key={i} alt="full-star" src={star}/> );
  return hasDecimal ? stars : [...stars, <img key="last" alt="half-star" src={halfStar}/>]
}

export const Stars = ({count}: StarsProps) => {
  const number = parseFloat(count);
  return !isNaN(number) ? <span className="Stars">{renderStars(number)}</span> : <React.Fragment />
}
