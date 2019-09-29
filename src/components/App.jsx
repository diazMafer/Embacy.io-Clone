import React, { Component } from 'react'
import PageProgress from 'react-page-progress'
import Header from './Header.jsx'
import First from './Sec1.jsx'
import Gallery from './Gallery.jsx'
import Landing from './Landing.jsx'
import Footer from './Footer.jsx'


class App extends Component {
  constructor(props) {
    super(props)
    this.stepsList = [{
      style: { width: '420px' }, flex: 'ff fleft', padding: '60px', step: 'First step', img: './src/assets/01-il (1).svg', description: "We determined that you're our target audience", footer: 'Yes, we paid about $1 to get you here', num: '01', name: 'block', side: 'left',
    },
    {
      style: { width: '420px' }, flex: 'ff fs', padding: '180px', step: 'Second step', img: './src/assets/02-il.svg', description: 'Examined more than 100 sites of other agencies', footer: 'To stay on top of our game we regularly study work of our colleagues. Our top-3 sources of inspiration: ', num: '02', name: 'block b02', side: 'right',
    },
    {
      style: { width: '420px' }, flex: 'ff', padding: '270px', step: 'Third step', img: './src/assets/03-il.svg', description: 'We brainstormed', footer: 'Thats where the «landing page about a landing page» idea was born and polished. We did not find any similar projects, thus decided to take action', num: '03', name: 'block b03', side: 'left',
    },
    {
      style: { width: '420px' }, flex: 'ff fs', padding: '120px', step: 'Step four', img: './src/assets/04-il.svg', description: 'We thought through the logic and made a prototype', footer: 'Wrote this text in Paper, received approval from ourselves. Assembled the UX prototype in Figma', num: '04', name: 'block b04', side: 'right',
    },
    ]
  }


  render() {
    return (

      <div>

        <PageProgress color="#ff4a47" height={5} />
        <Header />
        {
             this.stepsList.map(({
               style, flex, padding, step, img, description, footer, num, name, side,
             }) => (
               <First
                 key={img}
                 style={style}
                 flex={flex}
                 padding={padding}
                 step={step}
                 img={img}
                 description={description}
                 footer={footer}
                 num={num}
                 name={name}
                 side={side}
               />
             ))
       }
        <Gallery />
        <Landing />
        <Footer />

      </div>
    )
  }
}

export default App
