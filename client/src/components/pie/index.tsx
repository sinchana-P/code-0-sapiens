import React from 'react'
import { PieChart } from '../../components/piechart/PieChart'
import Header from '../../components/header/Header'
import { useTheme, lightThemeStyles, darkThemeStyles } from '../../ThemeContext';

export const Pie = () => {
    const darkTheme = useTheme()
  const themeStyles = {
      ...(darkTheme ? darkThemeStyles : lightThemeStyles),
      color: darkTheme ? "#DDE6ED" : "#27374D",
      margin: 0,
      padding: 0
    }
  return (
    <div style={{ ...themeStyles }}>
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
        <div style={{ height:"75vh", padding: '35px 0px', margin: '0px'  }}>
            <PieChart />
        </div>
      </div>
  )
}

