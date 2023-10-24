import './App.css';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const switchStyles = {
    backgroundColor: isDarkMode ? '#FCFF37' : '#ff5722', 
    borderColor: isDarkMode ? '#FCFF37' : '#ff5722',
  };

  return (
    <div >
      <header className={`App-header ${isDarkMode ? 'dark-mode' : ''}`}>
        <div style={{width:'100vw'}}>
          <div style={{display:'flex', flexDirection:'row', justifyContent:"space-between", alignItems:'start'}}>
            <div>
              <p className='big-title'>Behind the Covers</p>
              <div className='group1'>
                <p className={`date ${isDarkMode ? 'dark-mode' : ''}`}>11/28（二）</p>
                <div className='time'>
                  <p style={{margin:'0px 0px 12px 4px'}}>10 a.m.</p>
                  {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                  <BsArrowRight />
                  <p style={{margin:'0px 0px 12px 4px'}}>12 p.m.</p>
                </div>
                <p className='time' style={{margin:'0px 0px 12px 4px'}}>政大<span className={`place ${isDarkMode ? 'dark-mode' : ''}`}>研究大樓</span>203</p>
                {/* <Form>
                  <Form.Switch
                    role="switch"
                    id="darkModeSwitch"
                    label="Dark Mode"
                    onChange={toggleDarkMode}
                  />
                </Form> */}
                <div className='switch'>
                  <Switch
                    style={switchStyles}
                    onChange={toggleDarkMode}
                  />
                  <p>Change Mode</p>
                </div>
              </div>
            </div>

            <div 
              style={{
                    // transformOrigin:'left', 
                    // transform:'rotate(-270deg)', 
                    writingMode: 'vertical-lr', 
                    textOrientation: 'sideways',
                    display:'flex', 
                    flexDirection:'column',
                    alignItems:'flex-start',
                    }}>
              <p className={`year ${isDarkMode ? 'dark-mode' : ''}`} >©2023</p>
              <p className='title'>一個設計師的水<span style={{fontWeight:'bolder', whiteSpace:'nowrap', textAlign:'left'}}>很深</span></p>
            </div>
          </div>

          {/* <div className='break'></div> */}

          <div className="image-container">
            <img className='head' src='/head.png' />
          </div>

          <div className='break'></div>

          <div className='bottom'>
            <div className='group1' style={{display:'flex', flexDirection:'row', gap:'16px', alignItems:"flex-end"}}>
              <p className='name'>聶永真</p>
              <div className={`english ${isDarkMode ? 'dark-mode' : ''}`}>
                aaron
                <br />
                nieh
              </div>
            </div>

            <div className='discription'>
              <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <p className='little-title'>Behind the <br/>covers</p>
                <p className={`little-subtitle ${isDarkMode ? 'dark-mode' : ''}`}>一個設計師的水很深</p>
              </div>
              <hr />
              <p className='content' style={{wordBreak:'break-word'}}>
                此場講座將從聶永真的個人視角，分享其團隊近年作品產出的思考觀點、框架、敘事方式及品味決策；偶爾穿插一咪咪（作為一個活生生不是隨時獨立思考都會很漂亮周全的、偶爾螢光、有時低飽和的）個體日常與鬼談百景。
              </p>
              <hr />
              <a href='https://moltke.nccu.edu.tw/Registration/registration.do?action=conferenceInfo&conferenceID=X22181' style={{textDecoration:'none'}}>
                <div className={`sign ${isDarkMode ? 'dark-mode' : ''}`}>
                  <p style={{margin:'0px 4px 0px 0px'}}>我要報名</p>
                  <div className='arrow'><BsArrowRight /></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
