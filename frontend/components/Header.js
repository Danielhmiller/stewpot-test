import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {

  const [showNav, setShowNav] = useState(false);

    function toggleNav() {
        setShowNav(!showNav);
    }

  return (
    <>
    <div className={styles.topBar}>

          <div className={styles.topBarLeft}>

            <div className={styles.topBtn}>
              <Image
                src="/Donate.svg"
                width={50}
                height={50}
                alt="Image Not Supported"
              />
              <h3 style={{ 'font-size': '1.5rem' }}>DONATE</h3>
            </div>
          </div>

          <div className={styles.topBarRight}>

            <div className={styles.topBtn}>
              <h3 style={{ 'font-size': '1rem' }}>I NEED HELP</h3>
              <Image
                src="/I_need_help.svg"
                width={50}
                height={50}
                alt="Image Not Supported"
              />
            </div>

            <div className={styles.topBtn} style={{ 'margin-left': '2rem' }}>
              <h3 style={{ 'font-size': '1rem' }}>I WANT TO HELP</h3>
              <Image
                src="/I_want_to_help.svg"
                width={50}
                height={50}
                alt="Image Not Supported"
              />
            </div>
          </div>
        </div>

        <div className={styles.navBar}>
        <Link href={'/'}>
          <div className={styles.navPotSVG}>
            <svg version="1.1" id="Layer_1" x="0px" y="0px"
              viewBox="0 0 194 147" enableBackground="new 0 0 194 147" fill="#6abf4b">
              <g>
                <path d="M11.6,64.2C10.5,127.5,26.5,137,26.5,137v4.2c0,0.7,0.6,1.3,1.4,1.3h98.5c0.8,0,1.4-0.6,1.4-1.3V137
                  c0,0,16.1-9.4,14.9-72.8H11.6z"/>
                <path d="M91.1,20C87.1,10.4,76,5.3,65.3,8.4L63,9.1c-10.7,3.1-17,13.5-14.8,23.6c-20.6,10.4-34.4,24-37.7,27.4l127.6-37.6
                  C133.4,21.4,114.2,17.6,91.1,20z M69,24.3c-4.9,1.5-9.6,3.2-14,5.2c-0.6-6.3,3.4-12.5,9.9-14.4l2.3-0.7c6.5-1.9,13.3,1,16.4,6.6
                  C78.8,21.8,73.9,22.9,69,24.3z"/>
                <path d="M114.7,45c-1.5,1.3-2.4,3-2.6,5c0,0,0,0.1,0,0.1c-0.2,2.8,1,5.6,3.2,7.2c2,1.5,4.8,2,8.4,1.4c2.8-0.5,5.7-1.3,8.4-2.1
                  c1.1-0.3,2.2-0.6,3.2-0.9c0.5-0.1,0.9-0.5,0.9-1c0-0.1,0-0.1,0-0.2l-1.7-9.8c0-0.2-0.1-0.4-0.1-0.7c-0.4-2.6-0.9-5.4-2.2-7.6
                  c-1.4-2.5-3.6-3.9-6-3.9c-2.5,0-4.9,1.4-6,3.5c-0.4,0.8-0.6,1.6-0.7,2.5c-0.1,1.3,0.1,2.6,0.7,3.7l0.3,0.6l-0.7,0
                  C117.9,43,116.1,43.7,114.7,45z M123.3,45.7c0.4,0.2,0.7,0.1,0.9,0c0.4-0.2,0.7-0.6,0.7-1c0-0.3-0.1-0.5-0.4-0.7
                  c-0.5-0.3-3-3.4-2.8-6.1c0.1-0.9,0.5-1.8,1.2-2.4c0.9-0.8,1.9-1.2,3.1-1.1c1.4,0.1,2.7,0.8,3.7,1.9c1.8,2.1,2.3,5.1,2.7,7.6
                  c0,0.2,0.1,0.4,0.1,0.6l1.6,9.4l-1.7,0.5c-2,0.6-4.2,1.1-6.2,1.6c-2.4,0.6-5,1.1-7.3,0.5c-2.3-0.6-4-2.3-4.6-4.6
                  c-0.2-0.7-0.2-1.4-0.2-2.1c0.1-1.6,0.9-2.9,2.1-3.9C118.2,44.5,121.1,44.3,123.3,45.7z"/>
                <path d="M188.7,21c-0.6-1.9-1.8-3.5-3.5-4.7c-1.4-1-3.1-1.7-5-2c-0.4-0.1-0.9-0.1-1.3-0.2c-3.5-0.2-6.9,1-9.5,2.1l-1.5,0.6
                  l-0.6-1.5c-0.8-2-2.1-3.7-3.9-4.9c-1.6-1.1-3.4-1.8-5.3-1.9c-1.5-0.1-3,0.1-4.4,0.7c-2.8,1.2-4.9,3.4-6,6.4
                  c-1.6,4-1.3,9.1,0.6,13.3c2.2,4.9,6,8.8,9.4,12.3l0.2,0.2l0.1,0c0.2,0.1,0.4,0.2,0.7,0.2c0.4,0,0.9-0.2,1.2-0.5
                  c0,0,0.1-0.1,0.1-0.2l0.3-0.6l0.6-0.1c0.2,0,0.3-0.1,0.5-0.2c3.2-2.2,6.9-2.9,10.9-3.6c4.9-0.9,10-1.9,13.6-5.8
                  C188.5,27.8,189.6,24.1,188.7,21z M185.1,27.4c-2.6,4.1-7.5,5.4-12,6.3l-1.2,0.2c-4.1,0.8-8.4,1.6-12,4.1l-1.1,0.7l-0.9-1
                  c-6-6.4-11-13.3-7.7-21.2c1.1-2.7,3.8-5.7,7.7-5.4c0.3,0,0.6,0.1,0.8,0.1c1.1,0.2,2.2,0.7,3.1,1.3c2.2,1.5,3.5,3.8,3.5,6.2
                  c0,0.5,0.2,0.9,0.6,1.1c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0,0.5,0,0.8-0.2c3.5-1.6,7.5-3.5,11.4-3.2c0.8,0.1,1.7,0.2,2.4,0.5
                  c0.8,0.3,1.6,0.6,2.2,1.1C186.5,20.4,187.2,24.2,185.1,27.4z"/>
              </g>
            </svg>
          </div>
          </Link>
        </div>

        <div className={styles.downArrowBox}>
          <div className={styles.arrowSVG} onClick={toggleNav}>
            <svg version="1.1" id="Isolation_Mode" x="0px"
              y="0px" viewBox="0 0 265 187" enableBackground="new 0 0 265 187" fill='#fff'>
              <path d="M245.6,29.7c-15.3-15.3-40-15.3-55.3,0l-54.5,54.5L81.3,29.7c-15.3-15.3-40-15.3-55.3,0c-15.3,15.3-15.3,40,0,55.3
                l81.7,81.7c7.7,7.7,17.9,11.5,28,11.4c10.1,0.1,20.3-3.7,28-11.4L245.6,85C260.8,69.7,260.8,44.9,245.6,29.7z"/>
            </svg>
          </div>
        </div>
        
        <div className={styles.dropDown} style={{display: showNav ? 'flex':'none'}}>
          <Link href={'/'}><p>HOME</p></Link>
          <Link href={'/services'}><p>SERVICES</p></Link>
          <p>EVENTS</p>
          <p>VOLUNTEER</p>
          <p>SUPPORT MINISTRIES</p> 
          <p>ABOUT</p> 
          <p>RESOURCES</p> 
          <p>CONTACT</p> 
        </div>
        </>
  )
}

export default Header