import React, { useEffect } from 'react';
import { useState } from "react";

import { Flex, Typography, List } from "antd";
import { SearchOutlined, LikeOutlined, RadarChartOutlined, UnorderedListOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import './App.css';
import logo from './mortfoliologo.jpg';
const { Title } = Typography;

import { Search } from './components/search';
import { Liked } from './components/liked';
import { SCed } from './components/SCed';
import { Listings } from './components/listings';
import { About } from './components/about';

const pages = [
  {
    mode: "search",
    title: "Search",
    url: "https://i.pinimg.com/originals/42/83/6a/42836adf0826dbfa27034fc55566d3a2.gif"
  },
  {
    mode: "liked",
    title: "Liked",
    url: "/src/elden_ring1.jpg"
  },
  {
    mode: "sced",
    title: "Slaughted / Collected",
    url: "/src/elden_ring2.jpg"
  },
  {
    mode: "listings",
    title: "Listings",
    url: "https://db4sgowjqfwig.cloudfront.net/campaigns/88422/assets/695541/The_Elder_Scroll.png?1486293568"
  },
  {
    mode: "about",
    title: "About"
  }
]

function App() {
  const savedLikedList = localStorage.getItem("likedList") ? JSON.parse(localStorage.getItem("likedList")) : [];
  const savedSCedList = localStorage.getItem("SCedList") ? JSON.parse(localStorage.getItem("SCedList")) : [];
  
  const [mode, setMode] = useState('');
  const [likedList,setLikedList] = useState(savedLikedList);
  const [SCedList,setSCedList] = useState(savedSCedList);

  const [backgroundimage,setBackgroundImage] = useState("https://i.redd.it/9gus5pd7tl9z.gif");

  useEffect(() => {
    const body = document.body;
    body.style.backgroundSize = "cover";
    body.style.backgroundSize = "1199px 715px";
    body.style.backgroundPositionX = "320px";
    body.style.backgroundPositionY = "-20px";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundAttachment = "fixed";
    body.style.backgroundColor = "black";
    body.style.overflowX = "hidden";
    if(mode === 'search'){
      body.style.backgroundSize = "1199px 695px";
      body.style.backgroundPositionX = "320px";
      body.style.backgroundPositionY = "0px";
      body.style.backgroundRepeat = "no-repeat";
      body.style.backgroundAttachment = "fixed";
      body.style.backgroundColor = "black";
      body.style.overflowX = "hidden";
    }
    if(mode === 'liked'){
      body.style.backgroundSize = "1600px 941px";
      body.style.backgroundPositionX = "320px";
      body.style.backgroundPositionY = "-20px";
      body.style.backgroundRepeat = "no-repeat";
      body.style.backgroundAttachment = "fixed";
      body.style.backgroundColor = "black";
      body.style.overflowX = "hidden";
    }
    if(mode === 'sced'){
      body.style.backgroundSize = "2193px 1723px";
      body.style.backgroundPositionX = "320px";
      body.style.backgroundPositionY = "-99px";
      body.style.backgroundRepeat = "no-repeat";
      body.style.backgroundAttachment = "fixed";
      body.style.backgroundColor = "black";
      body.style.overflowX = "hidden";
    }
    if(mode === 'listings'){
      body.style.backgroundSize = "3500px 2000px";
      body.style.backgroundPositionX = "-830px";
      body.style.backgroundPositionY = "-550px";
      body.style.backgroundRepeat = "no-repeat";
      body.style.backgroundAttachment = "fixed";
      body.style.backgroundColor = "black";
      body.style.overflowX = "hidden";
    }
    document.body.style.backgroundImage = `url(${backgroundimage})`;
  }, [backgroundimage])

  return (
    <>
      <div className="header">
        <div className="maintitle">
          <img src={logo} className="logo" />
          Mortfolio
          <div className="description">
          Portfolios of your favorite monsters from your favorite video games and movies.
          </div>
        </div>
      </div>
      <Flex>
        <List
          itemLayout="horizontal"
          dataSource={pages}
          className="sidebar"
          renderItem={(page) => (
            <List.Item onClick={() => {
              setBackgroundImage(page.url);
              setMode(page.mode)
            }}>
              {page.mode === 'search' &&
                <>
                  <Title level={1} style={{ padding: 5, color: 'white', wordBreak: "keep-all"}}>{page.title}</Title>
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  <SearchOutlined style={{ fontSize: 50, color: 'white'}}/>
                </>
              }
              {page.mode === 'liked' &&
                <>
                  <Title level={1} style={{ padding: 5, color: 'white' }}> {page.title}</Title>
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  <LikeOutlined style={{ fontSize: 50, color: 'white' }} />
                </>
              }
              {page.mode === 'sced' &&
                <>
                  <Title level={1} style={{ padding: 5, color: 'white', wordBreak: "keep-all", paddingRight: 20}}>Slaughted <br/> or Collected</Title>
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  <RadarChartOutlined style={{ fontSize: 50, color: 'white'}}/>
                </>
              }
              {page.mode === 'listings' &&
                <>
                  <Title level={1} style={{ padding: 5, color: 'white'}}> {page.title}</Title>
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  <UnorderedListOutlined style={{ fontSize: 50, color: 'white' }} />
                </>
              }
              {page.mode === 'about' &&
                <>
                  <Title level={1} style={{ padding: 5, color: 'white'}}> {page.title}</Title>
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  <QuestionCircleOutlined style={{ fontSize: 50, color: 'white'}} />
                </>
              }
            </List.Item>
          )}
        />
        <>
          {mode === "" && <><div className="textmain">Head Right In And Show Off Your Trophies, "Hero"...</div><img src="logoMainpage.png" className="logoMain"/></>}
          {mode === "search" && <Search likedList={likedList} setLikedList={setLikedList} SCedList={SCedList} setSCedList={setSCedList}></Search>}
          {mode === "liked" && <Liked likedList={likedList} setLikedList={setLikedList}></Liked>}
          {mode === "sced" && <SCed SCedList={SCedList} setSCedList={setSCedList}></SCed>}
          {mode === "listings" && <Listings></Listings>}
          {mode === "about" && <About></About>}
        </>
      </Flex>
    </>
  )
}

export default App
