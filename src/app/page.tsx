'use client'; 

import React, { useState } from 'react';
import { Calculator, Copy, Check } from 'lucide-react';

const AdComponent1 = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      atOptions = {
        'key' : '36d2c83ef1272bb1d1cce2018f06e5a9',
        'format' : 'iframe',
        'height' : 300,
        'width' : 160,
        'params' : {}
      };
    `;
    document.body.appendChild(script);

    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = '//www.topcreativeformat.com/36d2c83ef1272bb1d1cce2018f06e5a9/invoke.js';
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    };
  }, []);

  return <div id="ad-container-1"></div>;
};

const AdComponent2 = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      atOptions = {
        'key' : '359026100532b19f286f77ba4abeab14',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
      };
    `;
    document.body.appendChild(script);

    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = '//www.topcreativeformat.com/359026100532b19f286f77ba4abeab14/invoke.js';
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    };
  }, []);

  return <div id="ad-container-2"></div>;
};

const levelMultipliers = {
  'Bronze': 0,
  'Silver': 1,
  'Gold': 1.5,
  'Platinum': 2,
  'Diamond': 2.5,
  'Epic': 3,
  'Legendary': 3.5,
  'Master': 4,
  'GrandMaster': 4.5,
  'Lord': 5,
  'Creator': 10
};

const HamsterKombatCalculator = () => {
  const [coinBalance, setCoinBalance] = useState(420099877);
  const [profitPerHour, setProfitPerHour] = useState(2706876);
  const [numberOfKeys, setNumberOfKeys] = useState(19);
  const [level, setLevel] = useState('GrandMaster');
  const [airdropAmount, setAirdropAmount] = useState(1054.98);
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);

  const validateInputs = () => {
    const newErrors = {};
    if (coinBalance < 0) newErrors.coinBalance = "Coin Balance must be a positive number";
    if (profitPerHour < 0) newErrors.profitPerHour = "Profit Per Hour must be a positive number";
    if (numberOfKeys < 0 || !Number.isInteger(numberOfKeys)) newErrors.numberOfKeys = "Number of Keys must be a positive integer";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateAirdrop = () => {
    if (validateInputs()) {
      const multiplier = levelMultipliers[level];
      const calculatedAmount = (profitPerHour / 1000000 * numberOfKeys) * multiplier;
      setAirdropAmount(calculatedAmount.toFixed(2));
    }
  };

  const handleInputChange = (setter) => (e) => {
    const value = e.target.type === 'number' ? Number(e.target.value) : e.target.value;
    setter(value);
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const telegramLink = "https://t.me/bigestdav";
  const inviteLink = "https://cuty.io/hamcalcultor";

  const copyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-md mx-auto bg-gray-800 rounded-2xl p-6 shadow-lg">
        <nav className="flex justify-between items-center mb-8 bg-gray-700 rounded-lg p-3">
          <a href="https://cuty.io/hamcalcultor" className="text-yellow-500 hover:text-yellow-400 transition duration-300">Home</a>
          <a href="https://t.me/BlumCryptoBot/app?startapp=ref_jLtOnnPqPQ" className="text-yellow-500 hover:text-yellow-400 transition duration-300">Join Blum</a>
          <a href="https://t.me/dogshouse_bot/join?startapp=0UjWo-3bTb2tlh546QLRuQ" className="text-yellow-500 hover:text-yellow-400 transition duration-300">Join Dogs</a>
          <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 transition duration-300">Telegram</a>
        </nav>

        {/* Rest of the component remains the same */}
        
        <div className="flex items-center mb-6">
          <div className="bg-yellow-500 rounded-full p-2 mr-4">
            <Calculator size={32} aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-bold">
            <span className="text-yellow-500">Hamster Kombat</span> Earnings Calculator
          </h1>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="coinBalance" className="block mb-1">Coin Balance</label>
            <input
              id="coinBalance"
              name="coinBalance"
              type="number"
              value={coinBalance}
              onChange={handleInputChange(setCoinBalance)}
              className="bg-gray-700 rounded-lg px-3 py-2 w-full text-right transition duration-300 focus:ring-2 focus:ring-blue-500"
              aria-describedby="coinBalanceError"
            />
            {errors.coinBalance && <p id="coinBalanceError" className="text-red-500 text-sm mt-1">{errors.coinBalance}</p>}
          </div>

          <div>
            <label htmlFor="profitPerHour" className="block mb-1">Profit Per Hour</label>
            <input
              id="profitPerHour"
              name="profitPerHour"
              type="number"
              value={profitPerHour}
              onChange={handleInputChange(setProfitPerHour)}
              className="bg-gray-700 rounded-lg px-3 py-2 w-full text-right transition duration-300 focus:ring-2 focus:ring-blue-500"
              aria-describedby="profitPerHourError"
            />
            {errors.profitPerHour && <p id="profitPerHourError" className="text-red-500 text-sm mt-1">{errors.profitPerHour}</p>}
          </div>

          <div>
            <label htmlFor="numberOfKeys" className="block mb-1">Number of Keys</label>
            <input
              id="numberOfKeys"
              name="numberOfKeys"
              type="number"
              value={numberOfKeys}
              onChange={handleInputChange(setNumberOfKeys)}
              className="bg-gray-700 rounded-lg px-3 py-2 w-full text-right transition duration-300 focus:ring-2 focus:ring-blue-500"
              aria-describedby="numberOfKeysError"
            />
            {errors.numberOfKeys && <p id="numberOfKeysError" className="text-red-500 text-sm mt-1">{errors.numberOfKeys}</p>}
          </div>

          <div>
            <label htmlFor="level" className="block mb-1">Level</label>
            <select
              id="level"
              name="level"
              value={level}
              onChange={handleInputChange(setLevel)}
              className="bg-gray-700 rounded-lg px-3 py-2 w-full transition duration-300 focus:ring-2 focus:ring-blue-500"
            >
              {Object.keys(levelMultipliers).map((lvl) => (
                <option key={lvl} value={lvl}>{lvl}</option>
              ))}
            </select>
          </div>

          <div className="mt-6">
            <button
              onClick={calculateAirdrop}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Calculate
            </button>
             <AdComponent2 />
          </div>

          <div className="text-center mt-6">
            <h2 className="text-xl mb-2">Amount Expected On Airdrop in USDT</h2>
            <div className="text-3xl font-bold text-green-500">
              ${airdropAmount} USDT
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="mb-2">Join Our Telegram for insider updates</p>
          <p className="mb-4">
            <span className="line-through text-gray-500 mr-2">Price: $49</span>
            <span className="text-green-500 font-bold">FREE</span>
          </p>
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Join For Free
          </a>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-xl mb-4">Invite Your Friends</h3>
          <p className="mb-4">Share the excitement with your friends! Copy the invite link below:</p>
          <div className="relative">
            <input
              type="text"
              value={inviteLink}
              readOnly
              className="bg-gray-700 rounded-lg px-3 py-2 w-full pr-12 text-sm"
            />
            <button
              onClick={copyInviteLink}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-400 focus:outline-none"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>
          {copied && (
            <p className="text-green-500 mt-2 text-sm">Copied!</p>
          )}
        </div>

        <footer className="mt-8 text-center text-sm text-gray-500">
          Disclaimer: this is just a speculation based on the information given to us by Hamster Kombat Team
        </footer>
         <AdComponent1 />
      </div>
    </div>
  );
};

export default HamsterKombatCalculator;
