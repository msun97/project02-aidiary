'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HeaderWrap } from './style';

const Header: React.FC = () => {
  const [isNav, setisNav] = useState(false);
  return (
    <HeaderWrap>
      <h1>EMOTOBY</h1>    
      <Image src="/logo.png" alt="emotoby" width={260} height={75} />
      {
        isNav?
        <nav>
        <Image src="/times.png" alt="times" width={32} height={32} />
        <ul>
          <li>
            <Link href="/">메인 메뉴</Link>
          </li>
          <li>
            <Link href="/">일기 쓰기</Link>
          </li>
          <li>
            <Link href="/">감정 분석</Link>
          </li>
          <li>
            <Link href="/">추천 콘텐츠</Link>
          </li>
        </ul>
        <div className='line'/>
        <ul className='utilNav'>
          <li>
            설정
          </li>
          <li>
            로그아웃
          </li>
        </ul>
      </nav>
      :''
      }
      <div className="util">
        <button>
          <Image src="/hambuger.png" alt="메뉴" width={75} height={75} />
        </button>
        <ul>
          <li>
            <Link href="/">설정</Link>
          </li>
          <li>
            <Link href="/">로그아웃</Link>
          </li>
        </ul>
      </div>
    </HeaderWrap>
  );
};

export default Header;
