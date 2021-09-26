import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Art.css'

const Art = (props) => {
    //distructure of art array
    const { picture, artName, artist, year, price, email, Medium } = props.art;
    return (
        <div className="art col">
            <div className="card h-100">
                <img src={picture} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h4 className="card-title">{artName}</h4>
                    <h6 className="card-text ">Artist: <span>{artist}</span></h6>
                    <h6 className="card-text ">Year: <span>{year}</span></h6>
                    <h6 className="card-text ">Price: <span>$ {price}</span></h6>
                    <h6 className="card-text ">Medium: <span>{Medium}</span></h6>
                    <h6 className="card-text ">Contact: <span>{email}</span></h6>
                </div>
                <div className="card-footer">
                    <button
                        onClick={() => props.addToCartHandle(props.art)}
                    >
                        <span>
                            <FontAwesomeIcon icon={faCartPlus} /> Select For Gallery
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Art;