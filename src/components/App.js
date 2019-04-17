import * as React from 'react'
import Maximized from './Maximized'
import Minimized from './Minimized'
import { ThemeProvider, FixedWrapper } from '@livechat/ui-kit'
import  background from '../background.jpg'

const sectionStyle = {
    width:"150%",
    height:"800px",
    backgroundImage:`url(${background})`
}


class App extends React.Component {
    /*state = {
        theme: 'defaultTheme'
    }
    
    handleThemeChange = ({ target }) => {
        console.log('target.name', target.name)
        this.setState({
            theme: target.name + 'Theme'    ,
        })
    }*/

    render() {
        return (
            <ThemeProvider >
                <div style={sectionStyle}>
                   
                    
                    <FixedWrapper.Root maximizedOnInit>
                        <FixedWrapper.Maximized>
                            <Maximized {...this.props} />
                        </FixedWrapper.Maximized>
                        <FixedWrapper.Minimized>
                            <Minimized {...this.props} />
                        </FixedWrapper.Minimized>
                    </FixedWrapper.Root>
                </div>
			</ThemeProvider>
        )
    }
}

export default App
