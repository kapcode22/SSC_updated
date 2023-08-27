import React ,{useState} from 'react'
import sty from './Club.module.css'
// import CircularMenu from './CircularMenu';

const Club = () => {
  const [rotationClass, setRotationClass] = useState('first-rotation ease-rotation');
  const [activeBlock, setActiveBlock] = useState('on');

  const handleClick = (newRotationClass, newActiveBlock) => {
    setRotationClass(newRotationClass);
    setActiveBlock(newActiveBlock);
  };

    return (
        <div className={sty.body}>
            {/* <div class={sty.semi_circle}>
                <div class={sty.semicircle}></div>
                <div class={`${sty.circle} ${sty.circle1}`}></div>
                <div class={`${sty.circle} ${sty.circle2}`}></div>
                <div class={`${sty.circle} ${sty.circle3}`}></div>
                <div class={`${sty.circle} ${sty.circle4}`}></div>
            </div> */}


            <div className={sty.home}>
   
      <div class={sty.home_content}>

          <div class={sty.container}>

              <div class={sty.row}>

                <div class="col-xs-12 col-md-6 col-md-offset-3">

                      
                      <div class={sty.home_semicircle_outer}>

                         
                          <div class={sty.home_semicircle_inner}>

                          </div>

                          <div id={sty.home_semicircle_pointer}></div>

                          <nav>
                            <ul class="cl_effect_15">
                            <li className={activeBlock === 'on' ? 'first-position active' : 'first-position'}>
                <a href="#" data-hover="On" onClick={() => handleClick('on')}>
                  On
                </a>
              </li>
              <li className={activeBlock === 'on' ? 'first-position active' : 'first-position'}>
                <a href="#" data-hover="On" onClick={() => handleClick('on')}>
                  On
                </a>
              </li>
              <li className={activeBlock === 'on' ? 'first-position active' : 'first-position'}>
                <a href="#" data-hover="On" onClick={() => handleClick('on')}>
                  On
                </a>
              </li>
              <li className={activeBlock === 'on' ? 'first-position active' : 'first-position'}>
                <a href="#" data-hover="On" onClick={() => handleClick('on')}>
                  On
                </a>
              </li>
              <li className={activeBlock === 'on' ? 'first-position active' : 'first-position'}>
                <a href="#" data-hover="On" onClick={() => handleClick('on')}>
                  On
                </a>
              </li>
                            </ul>
                          </nav>

                      </div>

                      <div class={sty.home_logo}>
                        <h1><a href="http://miukimiu.com">Miuki Miu</a></h1>
                      </div>

                  </div>

              </div>

            </div>

            <div class={sty.home_info_outer}>

              <div class={sty.container}>

                <div class={sty.row}>

                  <div class="col-md-12">

                      <div class={sty.home_info}>

                        <div class={`${sty.home_info_block} ${sty.on}` } >

                          <h1>Yeah! Nice to meet you</h1>
                          <h2>I'm just a friendly girl who loves to create beautiful websites!</h2>

                        </div>


                        <div class={`${sty.home_info_block} ${sty.we}` }>

                          <h1>Webdesign</h1>
                          <h2>I'm just a friendly girl who loves to create beautiful websites!</h2>

                        </div>


                        <div class={`${sty.home_info_block} ${sty.wd}` }>

                          <h1>Wordpress Development</h1>
                          <h2>I'm just a friendly girl who loves to create beautiful websites!</h2>

                        </div>


                        <div class={`${sty.home_info_block} ${sty.fe}` }>

                          <h1>Front-end</h1>
                          <h2>Css, html and jQuery! </h2>
                        </div>

                        <div class={`${sty.home_info_block} ${sty.off}` }>

                          <h1>When I'm offline</h1>
                          <h2>I love to produce electronic music, take photos, travel, go out with my friends and be happy! !</h2>

                        </div>

                      </div>
                       
                  </div>

                </div>
                    
              </div>

            </div>
        
      </div>

    </div>
    
        </div>
    )
}

export default Club


// import React, { useState } from 'react';
// import './HomePage.css'; // You can define your CSS styles here

// function HomePage() {
  
//   return (
//     <header id="home">
//       <div className="home-content">
//         <div className="container">
//           {/* ...other HTML code */}
//           <nav>
//             <ul className="cl-effect-15">
//               <li className={activeBlock === 'on' ? 'first-position active' : 'first-position'}>
//                 <a href="#" data-hover="On" onClick={() => handleClick('on')}>
//                   On
//                 </a>
//               </li>
//               {/* ...repeat for other sections */}
//             </ul>
//           </nav>
//           {/* ...other HTML code */}
//         </div>
//         {/* ...other HTML code */}
//       </div>
//     </header>
//   );
// }

// export default HomePage;
