import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import logo from '../Images/logo.png';
import DonutChart from './DonutChart'

const Content = () => {
  const handleItemClick = (index) => {
    const menuItems = document.querySelectorAll('.menu-box div');
    menuItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add('menu-box-active');
      } else {
        item.classList.remove('menu-box-active');
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div className="card card-shadow">
            <div className="card-body">
              <div className="card-head">
                <div className="cardhead-icon"><CurrencyBitcoinOutlinedIcon /></div>
                <div className="cardhead-dark">Bitcoin</div>
                <div className="cardhead-light">BTC</div>
                <div className="cardhead">
                  <span className="badge gbatge-l1">Rank #1</span>
                </div>
              </div>
              <div className="card-head m-30">
                <div className="title-card">$46,953.04</div>
                <span style={{ marginLeft: "25px" }} className="badge gbatge"><ArrowDropUpIcon /> 2.51%</span>
                <span style={{ marginLeft: "10px" }} className="tinyhint">(24H)</span>
                <br />
              </div>
              <div className="title-card f-10">$46,953.04</div>
              <hr />
              
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card card-shadow">
            <div className="card-body ">
              <div className="title-card">Trending Coins(24h)</div>
              <div className="row t12">
                <div className="col-md-7 col-sm-7">
                  <div className='iconimage'></div>
                  <div className="title-card f12">Ethereum (ETH)</div>
                </div>
                <div className="col-md-5 col-sm-5">
                  <span className="badge gbatge"><ArrowDropUpIcon /> 8.21%</span>
                </div>
                <div className="col-md-7 col-sm-7">
                  <div className='iconimage'></div>
                  <div className="title-card f12">Bitcoin (BTC)</div>
                </div>
                <div className="col-md-5 col-sm-5">
                  <span className="badge gbatge"><ArrowDropUpIcon /> 5.26%</span>
                </div>
                <div className="col-md-7 col-sm-7">
                  <div className='iconimage'></div>
                  <div className="title-card f12">Polygon (MATIC)</div>
                </div>
                <div className="col-md-5 col-sm-5">
                  <span className="badge gbatge"><ArrowDropUpIcon /> 4.32%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-8 sol-sm-12">
        <div className="menu-box">
          <div onClick={() => handleItemClick(0)} className='menu-box-active'>Overview</div>
          <div onClick={() => handleItemClick(1)}>Fundamentals</div>
          <div onClick={() => handleItemClick(2)}>News Insights</div>
          <div onClick={() => handleItemClick(3)}>Sentiments</div>
          <div onClick={() => handleItemClick(4)}>Team</div>
          <div onClick={() => handleItemClick(5)}>Technicals</div>
          <div onClick={() => handleItemClick(6)}>Tokenomics</div>
        </div>
        <hr />
      </div>

      <div className="col-md-8 col-sm-12">
          <div className="card card-shadow">
            <div className="card-body">
              <div className="title-card">Performance</div>
              <div className="row" style={{marginTop:"12px"}}>
                <div className="col-md-3">
                  <div className='perf-head'>Today's Low</div>
                  <div className='perf-subhead'>46930.22</div>
                </div>
                <div className="col-md-6">
                    <div className="gradient-line"></div>
                </div>
                <div className="col-md-3">
                  <div className='perf-head'>Today's High</div>
                  <div className='perf-subhead'>49343.22</div>
                </div>
              </div>

              <div className="row" style={{marginTop:"12px"}}>
                <div className="col-md-3">
                  <div className='perf-head'>52W Low</div>
                  <div className='perf-subhead'>46930.22</div>
                </div>
                <div className="col-md-6">
                    <div className="gradient-line"></div>
                </div>
                <div className="col-md-3">
                  <div className='perf-head'>52W High</div>
                  <div className='perf-subhead'>49343.22</div>
                </div>
              </div>

              <div className="title-card-l1">Fundamentals</div>

              <div className="row">
                <div className="col-md-5" style={{marginTop:"12px"}}>
                  <div className="coin-list">
                    <div>Bitcoin Price</div>
                    <div className='bold'>$16,815.46</div>
                  </div>
                  <div className="coin-list">
                    <div>Bitcoin Price</div>
                    <div className='bold'>$16,815.46</div>
                  </div>
                  <div className="coin-list">
                    <div>Bitcoin Price</div>
                    <div className='bold'>$16,815.46</div>
                  </div>
                  <div className="coin-list">
                    <div>Bitcoin Price</div>
                    <div className='bold'>$16,815.46</div>
                  </div>
                </div>
                <div className="col-md-1" style={{marginTop:"12px"}}></div>
                <div className="col-md-5" style={{marginTop:"12px"}}>
                  <div className="coin-list">
                    <div>Bitcoin Price</div>
                    <div className='bold'>$16,815.46</div>
                  </div>
                  <div className="coin-list">
                    <div>Bitcoin Price</div>
                    <div className='bold'>$16,815.46</div>
                  </div>
                  <div className="coin-list">
                    <div>Bitcoin Price</div>
                    <div className='bold'>$16,815.46</div>
                  </div>
                  <div className="coin-list">
                    <div>Bitcoin Price</div>
                    <div className='bold'>$16,815.46</div>
                  </div>
                </div>
              </div>

            </div>
        </div>
      </div>

      <div className="col-md-8 col-sm-12" style={{marginTop:"12px"}}>
        <div className="card card-shadow">
          <div className="card-body">
            <div className="title-card">Performance</div>
                <div className="qn-list">
                    <div className="f12 qn">What is bitcoin?</div>
                    <div className="answer">
                      Bitcoin is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network verify transactions through cryptography and record them in a public distributed ledger, called a blockchain, without central oversight.
                    </div>
                    <div className="f12 qn">Why to choose Bitcoin?</div>
                    <div className="answer">
                    For example, from 2011 to 2021, Bitcoin outperformed every single other asset class by a wide margin. Bitcoin's annualized return was 230% per year. That trounced the returns of high-growth tech stocks, which were up 20% per year.
                     </div>
                  </div>
                  <hr />
                  <div className="title-card">Already Holding Bitcoin?</div>
                  <div className='row t12'>
                  <div className="col-md-1"></div>

                  <div className='col-md-4'>
                    <div className='row adbox bluegrad'>
                      <div className="col-md-4 bluegrad">
                         <img scr={logo} height="75" width="75" />
                      </div>
                      <div className="col-md-8">
                        <div className='adhead'>Calculate your profits</div>
                        <div className='checknow'>Check Now -> </div>
                      </div>
                    </div>
                  </div>

                    <div className="col-md-1"></div>
                    <div className='col-md-4'>
                      <div className='row adbox orangegrade'>
                        <div className="col-md-4 ">
                           <img scr={logo} height="75" width="75" />
                        </div>
                        <div className="col-md-8">
                          <div className='adhead'>Calculate your taxliability</div>
                          <div className='checknow'>Check Now -> </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                  </div>

                  <hr />
                 
                  <div className="answer">In India, cryptocurrencies are classified as virtual digital assets and are subject to taxation. The gains made from trading cryptocurrencies are taxed at a rate of 30%(plus 4% cess) according to Section 115BBH.</div>
            </div>
          </div>
        </div>


        <div className="col-md-8 col-sm-12" style={{marginTop:"12px"}}>
          <div className="card card-shadow">
            <div className="card-body">
              <div className="title-card">Taxonomy</div>
                <div className="qn left f11">Initial Distribution</div>

                  <div className="answer">
                  Blockchain content distribution allows content creators to publish their work and get paid for their talent without a middleman. Initially, blockchain became prevalent with cryptocurrencies, like bitcoin, but recently, the finance and banking sectors have embraced the technology. The Ethereum network started off with a supply of 72 million Ether (ETH). Eighty-three percent of that (60 million) was distributed to people who had purchased ETH in a crowd sale that was conducted in July and August of 2014.
                  </div>
              </div>
            </div>
          </div>


          <div className="col-md-8 col-sm-12" style={{marginTop:"12px"}}>
          <div className="card card-shadow">
            <div className="card-body">
              <div className="title-card t12">Team</div>
                  <div className="answer t12">
                    Welcome to the team section of our website! Meet the talented individuals who make our company thrive and bring our vision to life. We're a diverse and dynamic team, united by our passion for innovation and our commitment to excellence. 
                  </div>

                  <div className="row t12" style={{margin:"8px"}}>
                    <div className='col-md-12 col-sm-12'>
                      <div className='row adbox empback'>
                          <div className="col-md-2 empimg">
                             <img scr={logo} height="75" width="75" />
                             <div className="empName">Jhon Smit</div>
                             <div className="empDesig">Founder & CEO</div>
                          </div>
                          <div className="col-md-8">
                            <div className='empdesc'>John is the visionary leader behind our company, with over 20 years of experience in the industry. He oversees the strategic direction of the company and inspires our team to achieve greatness.</div>
                          </div>
                      </div>

                      <div className='col-md-12 col-sm-12 t12'>
                        <div className='row adbox empback'>
                            <div className="col-md-2 empimg">
                               <img scr={logo} height="75" width="75" />
                               <div className="empName">Michael</div>
                               <div className="empDesig">Lead Developer</div>
                            </div>
                            <div className="col-md-8">
                              <div className='empdesc'>
                                Michael is a seasoned developer with expertise in front-end and back-end technologies. He leads our development team with creativity and precision, turning ideas into innovative solutions.
                              </div>
                            </div>
                        </div>
                      </div>

                      <div className='col-md-12 col-sm-12 t12'>
                        <div className='row adbox empback'>
                            <div className="col-md-2 empimg">
                               <img scr={logo} height="75" width="75" />
                               <div className="empName">David</div>
                               <div className="empDesig">Content Writer</div>
                            </div>
                            <div className="col-md-8">
                              <div className='empdesc'>
                                David is a wordsmith extraordinaire, crafting compelling content that resonates with our audience. With his creative flair and attention to detail, he brings our brand to life through captivating storytelling.
                              </div>
                            </div>
                        </div>
                      </div>

                    </div>


                  </div>
              </div>
            </div>
          </div>


    </div>
  );
};

export default Content;
