import React, {useState} from 'react';
import classes from './App.module.scss';
import {Link} from 'react-router-dom'
import About from "@/pages/about/About";
import avatarPng from '@/assets/avatar.png'
import avatarJpg from '@/assets/avatar.jpg'
import Calendar from '@/assets/calendar.svg'

// TREE SHAKING
function TODO() {
  TODO2()
}

function TODO2() {
  throw new Error()
}

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prev => prev + 1)
    // TODO()
  }

  // TODO('1561')
  // if (__PLATFORM__ === 'desktop') {
  //   return <div>ISDESKTOPPLATFORM</div>
  // }
  //
  // if (__PLATFORM__ === 'mobile') {
  //   return <div>ISMOBILEPLATFORM</div>
  // }
  //
  // if (__ENV__ === 'development') {
  //   // addDevtools()
  // }

  return (
    <div data-testid={'App.DataTestId'}>
      <h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img
          width={100}
          height={100}
          src={avatarPng}
          alt=""
        />
        <img
          width={100}
          height={100}
          src={avatarJpg}
          alt=""
        />
      </div>
      <div>
        <Calendar
          className={classes.icon}
          width={100}
          height={100}
          color={'red'}
        />
      </div>
      <Link to={'/about'}>about</Link>
      <br />
      <Link to={'/shop'}>shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button
        className={classes.button}
        onClick={increment}
      >
        <span>
          123
        </span>
      </button>
      <About />
    </div>
  );
};
