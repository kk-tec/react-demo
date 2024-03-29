import React, { Component } from 'react'
import { ThemeContext, themes } from './ThemeContext'
import ThemedButton from './ThemedButton'

// 一个使用 ThemedButton 的中间组件
function Toolbar(props) {
    return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>
}

class Context extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: themes.light
        }

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark
            }))
        }
    }

    render() {
        // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
        // 而外部的组件使用默认的 theme 值
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <ThemedButton />
            </div>
        )
    }
}
export default Context
