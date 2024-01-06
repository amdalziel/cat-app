import React from 'react';
import './Menu.css';
import './IconMenu.css';
import PropTypes from "prop-types";

function IconMenu(props) {
    const {
        paragraph: par,
        table: tab,
        backgroundStyle: bStyle,
        pic: picture,
        h3Choice: heading,
        title: t,
        itemOne: a,
        itemTwo: b,
        itemThree: c,
        itemFour: d,
        itemFive: e,
        itemSix: f,
        imgURL,
    } = props;

    return (
        <div className='iconBox'>
            <div style={bStyle}>
                {imgURL 
                    ? <img src={imgURL} alt={t} style={{ width: '100%', height: '100%', borderRadius: '40px' }} />
                    : <span className="material-symbols-outlined" style={{fontSize: "50px"}}>{picture}</span>}
            </div>

            <h3 style={heading}>{t}</h3>

            {par ? <p className='IconMenu-p'>{par}</p> : (
                <table>
                    <tr><td></td><td>{a}</td></tr>
                    <tr><td></td><td>{b}</td></tr>
                    <tr><td></td><td>{c}</td></tr>
                    <tr><td></td><td>{d}</td></tr>
                    <tr><td></td><td>{e}</td></tr>
                    <tr><td></td><td>{f}</td></tr>
                </table>
            )}
        </div>
    );
}

IconMenu.propTypes = {
    paragraph: PropTypes.string,
    table: PropTypes.string,
    backgroundStyle: PropTypes.object,
    pic: PropTypes.string,
    h3Choice: PropTypes.object,
    title: PropTypes.string,
    itemOne: PropTypes.string,
    itemTwo: PropTypes.string,
    itemThree: PropTypes.string,
    itemFour: PropTypes.string,
    itemFive: PropTypes.string,
    itemSix: PropTypes.string,
    imgURL: PropTypes.string,
};

export default IconMenu;