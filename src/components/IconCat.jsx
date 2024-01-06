import React from 'react';
import './IconCat.css';
import PropTypes from 'prop-types';

function IconCat(props) {
  const bStyle = props.backgroundStyle;
  const heading = props.h3Choice;
  const t = props.title;
  const a = props.age;
  const b = props.breed;
  const funF = props.funFact;
  const imgSrc = props.imgSrc;

  return (
    <div className='Cat-iconBox'>
      <div style={bStyle}>
        <img src={imgSrc} alt={t} style={{ width: '100%', height: '100%', objectFit: '100%' }} />
      </div>
      <h3 style={heading}>{t}</h3>
      <table className='IconCat-table'>
        <tr>
          <td>Age:</td>
          <td>{a}</td>
        </tr>
        <tr>
          <td>Breed:</td>
          <td>{b}</td>
        </tr>
        <tr>
          <td>Fun Fact:</td>
          <td>{funF}</td>
        </tr>
      </table>
    </div>
  );
}

IconCat.propTypes = {
  backgroundStyle: PropTypes.object,
  h3Choice: PropTypes.object,
  title: PropTypes.string,
  age: PropTypes.string,
  breed: PropTypes.string,
  funFact: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default IconCat;