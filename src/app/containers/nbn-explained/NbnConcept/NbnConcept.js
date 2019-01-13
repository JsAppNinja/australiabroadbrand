import React from 'react';

import EXPLAIN_IMG1 from '../../../assets/svgs/nbn-concept1.svg';
import EXPLAIN_IMG2 from '../../../assets/nbn-concept2.png';
import EXPLAIN_IMG3 from '../../../assets/nbn-concept-img1.png';
import './style.scss';

const NbnConcept = () => (
  <div className="nbnconcept">
    <div className="nbnconcept__blurtitle">NBN NETWORK</div>
    <div className="nbnconcept__title">
      What is the nbn<sup>TM</sup>?
    </div>
    <div className="nbnconcept__titleline" />
    <div className="nbnconcept__explained">
      <div className="nbnconcept__explained-first">
        <div className="nbnconcept_exlained-txt">
          The nbn<sup>TM</sup> network is Australia’s new landline phone and
          internet network. It’s designed to provide you with access to all the
          benefits of fast and reliable internet services, wherever you live.
          <br />
          <br />
          Over the coming months and years as the National Broadband Network
          (nbn™) is rolled out, many parts of Australia’s existing telephone
          network will be switched off. To ensure your landline phone or
          internet is not affected and take advantage of the faster speeds and
          reliability of the nbn™, you must switch from your current internet
          service provider to an authorised nbn™ service provider.
        </div>
        <div className="nbnconcept_exlained-img">
          <img src={EXPLAIN_IMG1} alt="Nbn Explained1" />
        </div>
      </div>
      <div className="nbnconcept__explained-second">
        <div className="nbnconcept_exlained-img">
          <img src={EXPLAIN_IMG2} alt="Nbn Explained2" />
        </div>
        <div className="nbnconcept_exlained-txt">
          <div className="nbnconcept_exlained-txt__title">
            Who is the NBN Co Ltd?
          </div>
          The nbn™ is a owned by the Australian Government and operated by NBN
          Co Ltd (NBN Co), a Government Business Enterprise. The nbn™ puts the
          infrastructure in place; then as an authorised nbn™ service provider,
          Australia Broadband gets you connected to the nbn™.
          <br />
          <br />
          NBN Co is a was established on 9 April 2009 to implement the
          Australian Government’s policy initiative of providing a National
          Broadband Network.
        </div>
      </div>
    </div>
    <div className="nbnconcept__understanding">
      <div className="nbnconcept__understanding-img">
        <img src={EXPLAIN_IMG3} alt="Nbn Explained1" />
      </div>
      <div className="nbnconcept__understanding-txt">
        <div className="nbnconcept__understanding-txt__first">
          <div className="nbnconcept__understanding-txt__first-title">
            Understanding the nbn<sup>TM</sup>
          </div>
          The nbn™ is Australia’s first national wholesale only, open access
          communications network that is being built to bring high speed
          internet within the reach of all Australian premises. The nbn
          <sup>TM</sup> network will utilise multiple technology types to
          provide universal coverage and a minimum available speed of 25 Mbps.
          Within the next decade, NBN Co's plan is for every home, school and
          workplace in the country to have access to the nbn<sup>TM</sup>.
        </div>
        <div className="nbnconcept__understanding-txt__second">
          <div className="nbnconcept__understanding-txt__second-title">
            What's all this fuss about speed?
          </div>
          Historically internet speeds for Australia was determined by where you
          lived and how far your place was from your local Telstra exchange. In
          fact, most Australians using ADSL only received an average download
          speed of less than 10 Mbps.
          <br />
          <br />
          Powered by the nbn™, Australia Broadband offers fast & amazingly
          simple broadband of up to 100 Mbps depending on the speed plan you
          choose and the nbn™ technology type available at your address.
        </div>
      </div>
    </div>
  </div>
);

export default NbnConcept;
