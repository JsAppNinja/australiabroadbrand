import React from 'react';

import NBN_Install1 from '../../../assets/svgs/nbn-install.svg';
import NBN_Install2 from '../../../assets/nbn-install.png';

import './style.scss';

const Install = () => (
  <div className="nbn-install">
    <div className="nbn-install__left">
      <div className="nbn-install__left-title">
        Things you may need to decide
      </div>
      <div className="nbn-install__left-content">
        Where on the outside of your place you prefer the nbn™ utility box
        (FTTP), antenna (Fixed Wireless) or connection box (HFC) to go.
        Remember, if you currently rent your property, you will need to get
        permission from your landlord.
        <br />
        <br />
        Where inside the house you’d like to have your new nbn™ connection box.
        Ideally, this will be less than three metres from where you’ll keep your
        nbn™ compatible Wi-Fi Modem.
        <br />
        <br />
        If your place has been connected to the nbn™ through a Fibre to the Node
        (FTTN) or Building (FTTB) or Curb (FTTC) connection, the NBN Co will
        take over and use your existing telephone line to connect your place to
        the nbn™. This means NBN Co will likely not have to install anything
        inside your place to get you connected.
      </div>
    </div>
    <div className="nbn-install__right">
      <div className="nbn-install__right-title">
        On the nbn installation day
      </div>
      <img src={NBN_Install1} alt="qprem" />
      <div className="nbn-install__right-content">
        An NBN Co technician will visit you to do the installation. They may
        need to work inside and outside your place for a few hours and should
        activate your installation before they leave. Someone aged 18 or older
        needs to be present during the installation.
        <br />
        <br />
        Remember, if your place has been previously connected to the nbn™ ,
        Australia Broadband in most cases can activate your nbn™ service
        remotely without an NBN Co technician visit.
        <br />
        <br />
        Australia Broadband will notify you by SMS and email as soon as your
        nbn™ service is active.
      </div>
    </div>
    <div className="nbn-install__between">
      <img src={NBN_Install2} alt="lprem" />
    </div>
  </div>
);

export default Install;
