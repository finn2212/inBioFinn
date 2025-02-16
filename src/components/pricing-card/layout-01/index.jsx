import React from "react";
import PropTypes from "prop-types";
import { Check, ArrowRight, Activity, Clock, X } from "react-feather";
import { sliceIntoChunks } from "@utils";
import Anchor from "@ui/anchor";
import { ItemType } from "@utils/types";

const PricingCard = ({
    title,
    subtitle,
    price,
    desc,
    features,
    orderLink,
    deliveryTime,
    revission,
}) => {
    const arrs = sliceIntoChunks(features, 2);
    return (
        <div className="rn-pricing">
            <div className="pricing-header">
                <div className="header-left">
                    <h2 className="title">{title}</h2>
                    <span>{subtitle}</span>
                </div>
                <div className="header-right">
                    <span>{price}</span>
                </div>
            </div>
            <div className="pricing-body">
                {desc && <p className="description">{desc}</p>}
                <div className="check-wrapper">
                    <div className="left-area">
                        {arrs[0].map((el) => (
                            <div className="check d-flex" key={el.id}>
                                {el?.available ? <Check /> : <X />}
                                <p>{el.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className="right-area">
                        {arrs[1].map((el) => (
                            <div className="check d-flex" key={el.id}>
                                {el?.available ? <Check /> : <X />}
                                <p>{el.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="pricing-footer" href="#contacts">
                <Anchor
                    path={orderLink}
                    href="#contacts"
                    className="rn-btn d-block"
                >
                    <span>Jetzt Kontaktieren</span>
                    <ArrowRight />
                </Anchor>
                <div className="time-line">
                    <div className="single-cmt d-flex">
                        <Clock />
                        <span>Rückmeldungen innerhalb von 24h</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

PricingCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    desc: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape(ItemType)).isRequired,
    orderLink: PropTypes.string.isRequired,
    deliveryTime: PropTypes.number.isRequired,
    revission: PropTypes.string.isRequired,
};

PricingCard.defaultProps = {
    features: [],
    orderLink: "#contacts",
};

export default PricingCard;
