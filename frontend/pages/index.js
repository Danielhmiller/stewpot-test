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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>

        <div className={styles.background1}>
          <div style={{ 'position': 'relative', 'width': '100%', 'display': 'flex', 'justify-content': 'flex-end', 'overflow': 'hidden' }}>
            <div style={{ 'margin-right': '-10rem', 'margin-top': '-4rem' }}>
              <Image
                src="/Heart_Logo.svg"
                width={1000}
                height={800}
                alt="Image Not Supported"
              />
            </div>
            <div style={{ 'position': 'absolute', 'margin-top': '16rem', 'margin-right': '6rem' }}>
              <p style={{ 'line-height': '0', 'color': 'white', 'font-weight': 'bold', 'font-size': '3rem', 'margin-left': '12rem', 'margin-top': '-0.5rem' }}>WELCOME</p>
              <div style={{ 'margin-top': '-3rem' }}>
                <Image
                  src="/Logo_Stewpot.svg"
                  width={600}
                  height={300}
                  alt="Image Not Supported" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btmbar}>
          <div className={styles.btmbar2}>
            <div className={styles.barLeft}>
              <Image
                src="/Menu_POT.svg"
                width={200}
                height={150}
                alt="Image Not Supported" />
              <h3 className={styles.Mission} style={{ "font-family": "'Lato', sans-serif;", 'font-size': '2.5rem', 'margin-left': '-2.8rem', 'line-height': '0rem' }}>MISSION</h3>
            </div>
            <p style={{ 'width': '75%', 'padding-right': '4rem', "font-family": "'Europa', sans-serif" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo


            </p>
          </div>
          <div className={styles.LMD}>
            <p style={{ 'background-color': "white", 'padding-left': '1rem', 'padding-right': '1rem', 'padding-top': '0.5rem', 'padding-bottom': '0.5rem', 'border-radius': '25px', 'margin-right': '1rem', 'cursor': 'pointer' }}>LEARN MORE</p>
            <p style={{ 'background-color': "white", 'padding-left': '1rem', 'padding-right': '1rem', 'padding-top': '0.5rem', 'padding-bottom': '0.5rem', 'border-radius': '25px', 'margin-left': '1rem', 'cursor': 'pointer' }}>DONATE</p>
          </div>
        </div>

        <div style={{ 'display': 'flex', 'flex-direction': 'row', 'padding-bottom': '8rem', 'padding-top': '4rem', 'background-color': '#ccd4dd' }}>
          <div style={{ 'width': '45%', 'display': 'flex', 'justify-content': 'center', 'align-items': 'center' }}>
            <div style={{ 'background-color': '#6abf4b', 'color': 'white', 'padding': '1rem', 'line-height': '0', 'border-radius': '15px', 'display': 'flex', 'flex-direction': 'row' }}>
              <div style={{ 'width': '75%' }}>
                <div style={{ 'line-height': '0' }}>
                  <Image src={'/people.svg'} alt={'People SVG'} width={60} height={40} />
                </div>
                <p style={{ 'font-size': '2rem', 'margin-right': '8rem', 'line-height': '0' }}>FEATURED</p>
                <p>SERVICES</p>
              </div>
              <div style={{ 'width': '25%', 'display': 'flex', 'justify-content': 'flex-end', 'align-items': 'flex-start' }}>
                <div style={{ 'transform': 'rotate(-90deg)', 'margin-right': '-1.2rem' }}>
                  <Image src={'/pointing_finger.svg'} alt={'Finger SVG'} width={50} height={50} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ 'display': 'flex', 'flex-direction': 'column', 'width': '55%', 'z-index': '50', 'padding-right': '4rem' }}>
            <p><strong>AFTER SCHOOL PROGRAM</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
            <p style={{ 'background-color': "white", 'padding-left': '1rem', 'padding-right': '1rem', 'padding-top': '0.5rem', 'padding-bottom': '0.5rem', 'border-radius': '25px', 'cursor': 'pointer', 'color': '#6abf4b', 'width': '8rem' }}>LEARN MORE</p>
          </div>
          <div style={{ 'position': 'absolute', 'right': '5%', 'margin-top': '8rem', 'line-height': '0' }}>
            <Image
              src="/Kids.svg"
              width={250}
              height={150}
              alt="Image Not Supported" />
          </div>
        </div>
        <div>
          <div style={{ 'display': 'flex', 'flex-direction': 'row', 'padding-bottom': '8rem', 'padding-top': '4rem', 'background-color': '#e7ebf1' }}>
            <div style={{ 'display': 'flex', 'justify-content': 'center', 'align-items': 'center' }}>
            <div style={{'background-color': '#6abf4b', 'color': 'white', 'padding': '1rem', 'line-height': '0', 'border-radius': '15px', 'display': 'flex', 'flex-direction': 'row'}}>
              <div style={{'width': '75%'}}>
                <div style={{'line-height': '0'}}>
                  <Image src={'/people.svg'} alt={'People SVG'} width={60} height={40} />
                </div>
                <p style={{'font-size': '2rem', 'margin-right': '8rem', 'line-height': '0'}}>FEATURED</p>
                <p>Events</p>
              </div>
              <div style={{'width': '25%', 'display': 'flex', 'justify-content': 'flex-end', 'align-items': 'flex-start'}}>
                <div style={{'transform': 'rotate(-90deg)', 'margin-right': '-1.2rem'}}>
                  <Image src={'/pointing_finger.svg'} alt={'Finger SVG'} width={50} height={50} />
                </div>
              </div>
            </div>
            <div style= {{'display':'flex', 'flex-direction':'column'}}>
            <p><strong>RED BEANS & RICE</strong></p>
            <p>One of Jackson{"\'"}s most anticipated family-fun festivals.</p> 
            </div>
            <div style= {{'display':'flex','flex-direction':'column'}}>
            <p><strong>TASTE OF MISSISSIPPI</strong></p>
            <p >Stewpot{"\'"}s largest annual fundraiser.</p></div>
            </div>
            <div>
              <p style={{ 'background-color': "white", 'padding-left': '1rem', 'padding-right': '1rem', 'padding-top': '0.5rem', 'padding-bottom': '0.5rem', 'border-radius': '25px', 'margin-left': '12rem', 'cursor': 'pointer', 'width': '8rem', 'color': '#6abf4b' }}>LEARN MORE</p>
            </div>
            <div className={styles.CAL} style={{ 'margin-left': '70rem', 'margin-top': '-15rem' }}>
              <Image
                src='/calendar.svg'
                width={200}
                height={200}
                alt="Image Not Supported" />
              <div> <p style={{ 'margin-left': '3.3rem', 'font-size': '1.5rem', 'margin-top': '-10rem', 'opacity': '0.9' }}><strong>AUGUST</strong></p>
                <p style={{ 'color': '#6abf4b', 'font-size': '5rem', 'opacity': '0.9', 'margin-left': '3.5rem', 'margin-top': '-2rem' }}><strong>28</strong></p>
              </div>
              <div><p style={{ 'color': 'black', 'margin-left': '15rem' }}><strong>STEWPOT COMMUNITY</strong></p>
                <p style={{ 'color': 'black', 'margin-left': '15rem' }}><strong>SERVICES FOOD DRIVE</strong></p></div>
              <p style={{ 'color': 'black', 'margin-left': '15rem' }}><strong>TIME: 11:30-3:00 PM</strong></p>
              <p style={{ 'color': 'black', 'margin-left': '15rem' }}><strong>LOCATION: Millsap{"\'"}s Campus</strong></p>
              <p style={{ 'color': 'black', 'margin-left': '15rem' }}>Lorem ipsum dolor sit amet.
                Aut deserunt earum est aspernatur magni sed unde dolorem in dignissimos dolores
                eos porro soluta aut facere repellat. Vel recusandae animi non quas aliquam sit
                optio rerum non voluptates voluptas est deleniti tenetur et odit minima.
                Et molestiae voluptatem hic dicta quis non fugit animi sit sunt fugiat.</p>
              <p style={{ 'background-color': 'white', 'border-radius': '25px', 'cursor': 'pointer', 'margin-left': '15rem', 'margin-right': '24rem', 'color': '#6abf4b', 'padding-left': '1rem' }}>FULL CALENDAR</p>
            </div>
            <div style={{ 'width': '100%', 'display': 'flex', 'justify-content': 'center', 'position': 'absolute' }}>
              <Image
                src='/Hands_Bird.svg'
                width={300}
                height={300}
                alt="Image Not Supported" />
            </div>
          </div>


        </div>
          

           
            
          

          <div>
            <div style={{ 'margin-top': '4rem', 'margin-left': '4rem' }}>
              <Image
                src='/News.svg'
                width={175}
                height={175}
                alt="Image Not Supported" />
              <div style={{ 'margin-top': '-4rem' }}>
                <p style={{ 'color': '#6abf4b', 'font-size': '2rem', 'margin-bottom': '-1rem', 'margin-left': '2rem' }}><strong>NEWS</strong></p>
                <p style={{ 'color': '#6abf4b', 'margin-top': '0.3rem', 'margin-left': '2rem', 'font-size': '1.5rem' }}>BLOG</p>
              </div>
              <div style={{ 'margin-left': '25rem', 'margin-top': '-14rem' }}>
                <p><strong>SUPPORT MINISTRIES</strong></p>
                <p><strong>KROGER COMMUNITY REWARDS</strong></p>
                <p>Lorem ipsum dolor sit amet. Aut deserunt earum est aspernatur magni sed unde dolorem in dignissimos
                  dolores eos porro soluta aut facere repellat.
                  Vel recusandae animi non quas aliquam sit
                  optio rerum non voluptates voluptas est deleniti tenetur et odit minima.
                  Et molestiae voluptatem hic dicta quis non fugit animi sit sunt fugiat.
                  Vel recusandae animi non quas aliquam sit
                  optio rerum non voluptates voluptas est deleniti tenetur et odit minima.
                  Et molestiae voluptatem hic dicta quis non fugit animi sit sunt fugiat.
                </p>
                <p style={{ 'background-color': "#6abf4b", 'padding-left': '1rem', 'padding-right': '1rem', 'padding-top': '0.5rem', 'padding-bottom': '0.5rem', 'border-radius': '25px', 'margin-right': '1rem', 'cursor': 'pointer', 'color':'white', 'width':'8rem' }}>LEARN MORE</p>
              </div>
            </div>
          </div>
        
        <div style={{ 'background-color': '#e7ebf1', 'margin-top': '4rem' }}>
          <div>
            <Image
              src='/newsletter.svg'
              width={75}
              height={75}
              alt="Image Not Supported" />
          </div>
          <p style={{ 'margin-left': '5rem', 'margin-top': '-3rem', 'padding-bottom': '10rem' }}><strong>GET OUR NEWSLETTER</strong></p>
          <form style={{ 'margin-top': '-10rem', 'padding-bottom': '3rem' }}>
            <div>
              <input type='text' id='EMAIL ADDRESS' name='EMAIL ADDRESS' placeholder='Email Address' style={{'border': 'none', 'margin': '1rem', 'padding': '0.5rem'}}></input>
            </div>
            <div>
              <button type='submit' id='email address' name='SUBMIT' style={{'border': 'none', 'background': 'none', 'cursor': 'pointer', 'margin': '1rem', 'font-weight': 'bold', 'line-height': '0'}}>SUBMIT</button>
            </div>
          </form>
          <div style={{ 'margin-left': '48rem', 'margin-top': '-8.5rem', 'font-size': '0.9rem', 'padding-bottom': '2rem' }}>
            <p>Mail: P.O. Box 3610, Jackson, MS 39207</p>
            <p>1100 W. Capitol St., Jackson, MS, 39203</p>
            <p>T 601.353.2759 * F 601.353.7071</p>
            <p>Stewpot@stewpot.org</p>
          </div>
          <div>
            <div style={{ 'margin-left': '46rem', 'margin-top': '-10.2rem', 'padding-bottom': '0.3rem' }}>
              <Image
                src='/enmail_ICON.svg'
                width={25}
                height={25}
                alt="Image Not Supported" />
            </div>
            <div style={{ 'margin-left': '46rem' }}>
              <Image
                src='/Location_ICON.svg'
                width={25}
                height={25}
                alt="Image Not Supported" />
            </div>
            <div style={{ 'margin-left': '46rem' }}>
              <Image
                src='/phone_ICON.svg'
                width={25}
                height={25}
                alt="Image Not Supported" />
            </div>

            <div style={{ 'margin-left': '46rem' }}>
              <Image
                src='/talk_ICON.svg'
                width={25}
                height={25}
                alt="Image Not Supported" />
            </div>
          </div>
          <div style={{ 'margin-left': '85rem', 'margin-top': '-9rem', 'font-size': '0.9rem', 'padding-bottom': '9rem' }}>
            <p><strong>FOLLOW US</strong></p>
            <p>SOCIAL MEDIA</p>
          </div>
          <div style={{ 'margin-left': '81rem', 'margin-top': '-13rem', 'padding-bottom': '9rem' }}>
            <Image
              src='/social_media_ICON.svg'
              width={60}
              height={60}
              alt="Image Not Supported" />
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </main >
    </div >
  )

}
