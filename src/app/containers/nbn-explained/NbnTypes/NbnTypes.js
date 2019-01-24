import React from 'react';

import Description from './Description';
import Data from './Data';

import EXPLAIN_IMG1 from '../../../assets/nbn-types1.png';
import EXPLAIN_IMG2 from '../../../assets/nbn-types2.png';
import EXPLAIN_IMG3 from '../../../assets/nbn-types3.png';
import EXPLAIN_IMG4 from '../../../assets/nbn-types4.png';
import EXPLAIN_IMG5 from '../../../assets/nbn-types5.png';
import EXPLAIN_IMG6 from '../../../assets/nbn-types6.png';

import NBN_CURVE1 from '../../../assets/svgs/nbn-curve1.svg';
import NBN_CURVE2 from '../../../assets/svgs/nbn-curve2.svg';
import NBN_CURVE3 from '../../../assets/svgs/nbn-curve3.svg';
import NBN_CURVE4 from '../../../assets/svgs/nbn-curve4.svg';
import NBN_CURVE5 from '../../../assets/svgs/nbn-curve5.svg';

import './style.scss';

const NbnTypes = () => (
  <div className="nbn_types">
    <div className="nbntypes">
      <div className="nbntypes__blurtitle">YOUR CONNECTION TYPE</div>
      <div className="nbntypes__title">
        Types of nbn<sup>TM</sup>
      </div>
      <div className="nbntypes__titleline" />
      <div className="nbntypes__contents">{Data.titleDescription}</div>
    </div>
    <div className="nbnconcepts-section1">
      <Description
        title={Data.contents[0].title}
        content={Data.contents[0].content}
        number={Data.contents[0].number}
        colors={Data.contents[0].colors}
      />
      <div className="nbnconcepts-section1__img">
        <img src={EXPLAIN_IMG1} alt="NBN Types" />
      </div>
      <div className="nbncurve1">
        <img src={NBN_CURVE1} alt="NBN Curve" />
      </div>
    </div>
    <div className="nbnconcepts-section2">
      <div className="nbnconcepts-section2__img">
        <img src={EXPLAIN_IMG2} alt="NBN Types" />
      </div>
      <div className="nbncurve2">
        <img src={NBN_CURVE2} alt="NBN Curve" />
      </div>
      <Description
        title={Data.contents[1].title}
        content={Data.contents[1].content}
        number={Data.contents[1].number}
        colors={Data.contents[1].colors}
      />
    </div>
    <div className="nbnconcepts-section1">
      <Description
        title={Data.contents[2].title}
        content={Data.contents[2].content}
        number={Data.contents[2].number}
        colors={Data.contents[2].colors}
      />
      <div className="nbnconcepts-section1__img">
        <img src={EXPLAIN_IMG3} alt="NBN Types" />
      </div>
      <div className="nbncurve1">
        <img src={NBN_CURVE3} alt="NBN Curve" />
      </div>
    </div>
    <div className="nbnconcepts-section2">
      <div className="nbnconcepts-section2__img">
        <img src={EXPLAIN_IMG4} alt="NBN Types" />
      </div>
      <div className="nbncurve2">
        <img src={NBN_CURVE4} alt="NBN Curve" />
      </div>
      <Description
        title={Data.contents[3].title}
        content={Data.contents[3].content}
        number={Data.contents[3].number}
        colors={Data.contents[3].colors}
      />
    </div>
    <div className="nbnconcepts-section1">
      <Description
        title={Data.contents[4].title}
        content={Data.contents[4].content}
        number={Data.contents[4].number}
        colors={Data.contents[4].colors}
      />
      <div className="nbnconcepts-section1__img">
        <img src={EXPLAIN_IMG5} alt="NBN Types" />
      </div>
      <div className="nbncurve1">
        <img src={NBN_CURVE5} alt="NBN Curve" />
      </div>
    </div>
    <div className="nbnconcepts-section2 lastsection">
      <div className="nbnconcepts-section2__img">
        <img src={EXPLAIN_IMG6} alt="NBN Types" />
      </div>
      <Description
        title={Data.contents[5].title}
        content={Data.contents[5].content}
        number={Data.contents[5].number}
        colors={Data.contents[5].colors}
      />
    </div>
  </div>
);

export default NbnTypes;
