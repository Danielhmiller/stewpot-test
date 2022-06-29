import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <div style={{ 'background-color': '#6abf4b', 'margin-top': '-2rem', 'opacity': '0.9', 'padding-top':'0.1rem' }}>
          <div className={styles.DONATE} style={{'margin-left': '2rem', 'margin-top':'3rem', 'padding-bottom':'8rem'}} >
              <div style={{'width': '4rem'}}>
                <svg version="1.1" id="Layer_1" x="0px" y="0px"
                    viewBox="0 0 193 133" enableBackground="new 0 0 193 133" fill="#fff">
                  <g>
                    <path d="M70.4,26.4c-4.7-1.5-9.6-2.4-14.8-2.4C29.3,24,8,45.3,8,71.6c0,24.4,18.4,44.6,42.1,47.3c-8.7-10.4-13.9-23.8-13.9-38.4
                      C36.2,56.7,50.2,36.1,70.4,26.4z"/>
                    <path d="M138.4,7.9c-12.8,0-24.4,5.1-33,13.3c28.8,4.4,50.9,29.3,50.9,59.3c0,7.1-1.3,14-3.6,20.3C172,94.8,186,76.8,186,55.5
                      C186,29.2,164.7,7.9,138.4,7.9z"/>
                    <path d="M96.3,32.9c-26.3,0-47.6,21.3-47.6,47.6c0,26.3,21.3,47.6,47.6,47.6c26.3,0,47.6-21.3,47.6-47.6
                      C143.9,54.3,122.6,32.9,96.3,32.9z M115.7,99.9c-1.3,2.4-3,4.3-5.1,5.7c-2.1,1.4-5,2.4-8.9,3.2v7.1h-7.8v-6.8
                      c-3.6-0.4-6.8-1.2-9.3-2.5c-3.5-1.7-6.8-4-9.8-6.9l7.9-7.3c5.1,4.8,10,7.3,14.8,7.3c2.4,0,4.5-0.8,6.2-2.3c1.7-1.5,2.6-3.3,2.6-5.3
                      c0-1.7-0.6-3.2-1.7-4.5c-1.1-1.3-3.3-2.6-6.6-4C91.5,80.8,87,78.6,84.7,77c-2.3-1.6-4.1-3.4-5.2-5.4c-1.2-2-1.7-4.1-1.7-6.4
                      c0-3.8,1.5-7,4.6-9.6c3.1-2.7,6.9-4.1,11.6-4.3v-5.9h7.8v6.4c2.7,0.6,5,1.3,6.9,2.3c1.9,1,4.1,2.6,6.7,4.9l-8.1,7
                      c-3.7-3.4-7.3-5.1-10.9-5.1c-2.1,0-3.8,0.5-5.2,1.5c-1.3,1-2,2.2-2,3.5c0,1.1,0.6,2.2,1.8,3.3c1.1,1.1,3.5,2.3,6.9,3.6
                      c6.2,2.3,10.4,4.2,12.7,5.9c2.3,1.6,4,3.6,5.3,5.8c1.2,2.3,1.8,4.8,1.8,7.6C117.7,94.9,117,97.5,115.7,99.9z"/>
                  </g>
                </svg>
              </div>
            <p style={{'color':'white'}}>DONOR PRIVACY POLICY</p>
            <p style={{'color':'white', 'font-size':'0.5rem'}}> Stewpot is committed to protecting the privacy of our donors.<br></br>
              Therefore, our organization will not sell, rent, or lease your personal information to other organizations.<br></br> We assure you that the identity of all our donors will be confidential.<br></br> Use of donor information will be limited to the internal purposes of Stewpot and only to further our ministry activities and purpose.<br></br></p>
        </div>
        <div className={styles.ppl} style={{'margin-left': '42rem', 'margin-top':'-16rem'}}>
          <Image
            src="/people.svg"
            width={50}
            height={50}
            alt="Image Not Supported"
          />
          <p style={{'color':'white'}}>NON-DISCRIMINATION POLICY</p>
          <p style={{'color':'white', 'font-size':'0.5rem'}}>Stewpot Community Services does not discriminate against any potential client or
           employee on the basis of race,<br></br> color,national origin, age, disability, sex, gender identity, religion, political beliefs,<br></br> marital status, familial,
           or parental status or sexual orientation. </p>
        </div>
        <div  className={styles.tax} style={{'margin-left': '82rem','padding-bottom':'4rem', 'margin-top':'-9rem'}}>
          <Image
            src="/tax_ICON.svg"
            width={50}
            height={50}
            alt="Image Not Supported"
          />
          <p style={{'color':'white'}}>TAX DEDUCTIBLE CONTRIBUTIONS</p>
          <p style={{'color':'white', 'font-size':'0.5rem'}}>
            Contributions to Stewpot are tax-deductible for personal income tax purposes. <br></br>Stewpot Community Services, Inc. is a 501(c)(3) tax-exempt non-profit organization registered undee the laws of the state of Mississippi.
          </p>
        </div>
    </div>
    </>
  )
}

export default Footer