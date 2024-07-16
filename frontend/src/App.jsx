import { useState } from 'react'
import './App.css'
import Header from "./component/Header.jsx";
import LeftMenu from "./component/LeftMenu.jsx";
import Content from "./component/Content.jsx";

function App() {
  return (
      <>
        <Header></Header>
        <LeftMenu></LeftMenu>
        <Content></Content>
      </>
  )
}

export default App
