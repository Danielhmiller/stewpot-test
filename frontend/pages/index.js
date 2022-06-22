import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stewpot Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.topBar}>

          <div className={styles.topBarLeft}>

            <div className={styles.topBtn}>
              <Image
              src="/Donate.svg"
              width={50}
              height={50}  
              alt="Image Not Supported"
              /> 
              <h3 style={{'font-size': '1.5rem'}}>DONATE</h3>
            </div>

          </div>

          <div className={styles.topBarRight}> 

            <div className={styles.topBtn}>
              <h3 style={{'font-size': '1rem'}}>I NEED HELP</h3>
              <Image
              src="/I_need_help.svg"
              width={50}
              height={50}  
              alt="Image Not Supported"
              /> 
            </div>

            <div className={styles.topBtn} style={{'margin-left': '2rem'}}>
              <h3 style={{'font-size': '1rem'}}>I WANT TO HELP</h3>
              <Image
              src="/I_want_to_help.svg"
              width={50}
              height={50}  
              alt="Image Not Supported"
              />
              
                          
            </div>

          </div>

        </div>  

        <div className={styles.background1}></div>
        <div className={styles.btmbar}>
          <div className={styles.barLeft}>
            <Image
              src="/Menu_POT.svg"
              width={200}
              height={150}  
              alt="Image Not Supported" />
              <h3 className={styles.Mission} style={{'font-family': 'Lato-Black', 'font-size': '2.5rem', 'margin-left': '-2.8rem', 'line-height': '0rem'}}>MISSION</h3> 
          </div> 
          <p style={{'width': '75%', 'padding-right': '4rem'}}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          </p>
        </div>
        <div>   
        </div>
      </main>
    </div>
  )
  
}
