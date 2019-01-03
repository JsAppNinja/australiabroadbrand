import React from 'react';
import CircleLink from '../../../components/CircleLink';

import './style.scss';
import FavHome from '../../../assets/svgs/connect-home.svg';
import FavUser from '../../../assets/svgs/connect-user.svg';
import FavNbn from '../../../assets/svgs/connect-nbn.png';
import FavEnjoy from '../../../assets/svgs/connect-enjoy.svg';
import EasyBg from '../../../assets/easy-connection-bg.png';

const favIconList = [FavHome, FavUser, FavNbn, FavEnjoy];

const EasyConnection = () => {
  const path = (
    <path
      d={`
        M 25,25
        C 100,50 25,75 25,100
        C 25,125 300,150 25,175
      `}
      fill="none"
      stroke="hotpink"
      strokeWidth={5}
    />
  );

  return (
    <div className="easy-connection">
      <CircleLink ImgPaths={favIconList} />
      {/* <svg
        viewBox="0 0 200 200"
        style={{ maxHeight: 400 }}
      >
        {path}
      </svg> */}
    </div>
  );
};

export default EasyConnection;
