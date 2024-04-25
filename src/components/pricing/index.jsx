import React from 'react';
import './Pricing.css'; // Import CSS file for styling

const Pricing = () => {
    // Define features for each plan
    const plans = [
        {
            name: "Basic",
            price: "$20/Month",
            features: [
                { name: "Api Access (300 Request)", included: true },
                { name: "Website Panel", included: true },
                { name: "Discord Bot", included: true },
                { name: "SSN Resolver", included: false },
                { name: "Doxbin Resolver", included: false },
                { name: "1 Free Blacklist", included: false },
            ]
        },
        {
            name: "Standard",
            price: "$35/month",
            features: [
                { name: "Api Access (600 Request)", included: true },
                { name: "Website Panel", included: true },
                { name: "Discord Bot", included: true },
                { name: "SSN Resolver", included: true },
                { name: "Doxbin Resolver", included: true },
                { name: "1 Free Blacklist", included: false },
            ]
        },
        {
            name: "Premium",
            price: "$55/month",
            features: [
                { name: "Api Access (Unlimited)", included: true },
                { name: "Website Panel", included: true },
                { name: "Discord Bot", included: true },
                { name: "SSN Resolver", included: true },
                { name: "Doxbin Resolver", included: true },
                { name: "1 Free Blacklist", included: true },
            ]
        }
    ];

    // Function to handle button click
    const handleButtonClick = () => {
        window.open("https://discord.gg/QN3yHWK8t3", "_blank");
    };

    return (
        <div className='container33'>
            <h1 className="pricing-heading"><b><u>Pick the plan thats right for you</u></b></h1>
            <div className="pricing-container3">
                {plans.map((plan, index) => (
                    <div className="plan" key={index}>
                        <h2>{plan.name}</h2>
                        <p>{plan.price}</p>
                        <ul>
                            {plan.features.map((feature, index) => (
                                <li key={index}>
                                    {feature.included ? '✓' : '✗'} {feature.name}
                                </li>
                            ))}
                        </ul>
                        <button onClick={handleButtonClick}>Select Plan</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
