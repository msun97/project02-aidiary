import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>EMOTOBY</h1>
      <Image src="/logo.png" alt="emotoby" width={260} height={75} />
      <nav>
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
      </nav>
      <div className="util">
        <button>
          <Image src="/hambuger.png" alt="emotoby" width={75} height={75} />
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
    </header>
  );
};

export default Header;
