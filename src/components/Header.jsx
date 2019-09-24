import React, { Component } from 'react';
export default class Input extends Component {
  
    render() {
      const flexFirst = {
          display: "flex",
          height: "100%",
          
          boxSizing: "border-box"
      }

      const left = {
          maxWidth: "480px",
          boxSizing: "border-box",
          display: "block"
      }

      const h1 = {
        marginTop: "115px",
        marginBottom: "36px",
        fontFamily: "'IBM Plex Sans', sans-serif",
        color: "black",
        fontSize: "64px",
        lineHeight: "70px",
        fontWeight: "900",
        letterSpacing: "0em",
        display: "block",
        boxSizing: "border-box"
      }

      const logo = {
          marginTop: "30px",
          maxWidth: "100%",
          display: "inline-block"
      }

      const container = {
        maxWidth: "1180px",
        marginRight: "auto",
        marginLeft: "auto",
        height: "94%"
      }

      const wrapper = {
        position: "absolute",
        left: "0%",
        top: "0%",
        right: "0%",
        bottom: "0%",
        zIindex: "1000",
        overflow: "hidden",
        paddingRight: "30px",
        paddingLeft: "19px",
      }

      const btn = {
        position: "relative",
        display: "inline-block",
        marginTop: "80px",
        color: "#111",
        fontSize: "14px",
        lineHeight: "14px",
        letterSpacing: "0.1em"
      }

      const btnLine = {
          position: "relative",
          zIndex: "1",
          display: "flex",
          padding: "23px 35px",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #111",
          backgroundColor: "transparent",
          transition: "all 200ms ease",
          color: "#111",
          textDecoration: "none",
          textTransform: "uppercase"
      }

      const arrow = {
        marginLeft: "20px"
      }
      
      const rightFirst = {
          position: "relative",
          flex: "1"
      }

      const f101 = {
          position: "absolute",
          left: "29px",
          top: "140px",
          right: "auto",
          bottom: "auto",
          zIndex: "-1"
      }

      const f102 = {
          position: "absolute",
          left: "320px",
          top: "533px",
          right: "auto",
          bottom: "auto",
          zIndex: "-1"
      }

      const f103 = {
        position: "absolute",
        left: "360px",
        top: "53px",
        right: "auto",
        bottom: "auto",
        zIndex: "-1"
    }

    const f104 = {
        position: "absolute",
        left: "310px",
        top: "333px",
        right: "auto",
        bottom: "auto",
        zIndex: "-1"
    }

    const f105 = {
        position: "absolute",
        left: "-40px",
        top: "auto",
        right: "auto",
        bottom: "70px",
        zIndex: "-1"
    }

    const f106 = {
        position: "absolute",
        left: "570px",
        top: "373px",
        right: "auto",
        bottom: "auto",
        zIndex: "-1"
    }

    const header = {
        paddingRight: "30px",
        paddingLeft: "30px",
        position: "relative",
        height: "850px"
    }
      return (
        <header style={header}>
            <div className="wrapfull" style={wrapper}>
                <div className="container" style={container}>
                    <div className="flex-first" style={flexFirst}>
                        <div className="left" style={left}>
                            <a href="#" style={logo}>
                                <img src="./src/assets/Logo.svg" alt="embacy logo"/>
                            </a>
                            <h1 style={h1}>We Made This Landing Page</h1>
                            <div>to show you how we make landing pages, so that you decide to make yours with us</div>
                            <div className="btn-wrapper" style={btn}>
                            <a href="#" className="btn-line" style={btnLine}>
                                scroll down
                                <span className="arrow" style={arrow}>↓</span>
                            </a>
                        </div>
                        </div>
                        <div className="right-first" style={rightFirst}>
                            <img src="./src/assets/E.svg"  className="abs f-101" style={f101}/>
                            <img src="./src/assets/C.svg"  className="abs f-102" style={f102}/>
                            <img src="./src/assets/M.svg"  className="abs f-103" style={f103}/>
                            <img src="./src/assets/B.svg"  className="abs f-104" style={f104}/>
                            <img src="./src/assets/A.svg"  className="abs f-105" style={f105}/>
                            <img src="./src/assets/Y.svg"  className="abs f-106" style={f106}/>
                        </div>   
                    </div>
                    
                </div>
            </div>
        </header>
      )
    }
  }