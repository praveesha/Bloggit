"use client"

import styles from './themeToggle.module.css';
import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '@/context/themeContext';

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  return (
    <div className={styles.container} 
    onClick={toggle} 
    style={ 
      theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
    }>

      <Image src="/moon.png" alt="Moon Icon" width={14 } height={14} className={styles.icon} />

      {/*toggle container's color adjusting with respect to the theme*/}      
      <div className={styles.ball} 
      style={
        theme === "dark" ? 
        { left: 1, background: "#0f172a" }
        : { right: 1, background: "white" }      
        }></div>

      <Image src="/sun.png" alt="Sun Icon" width={14} height={14} className={styles.icon} />
    </div>
  )
}

export default ThemeToggle;
