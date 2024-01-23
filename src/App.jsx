import React from 'react';
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
    title: "Search"
  },
  {
    mode: "liked",
    title: "Liked"
  },
  {
    mode: "sced",
    title: "Slaughted / Collected"
  },
  {
    mode: "listings",
    title: "Listings"
  },
  {
    mode: "about",
    title: "About"
  }
]

function App() {
  const [mode, setMode] = useState('');
  const [likedList,setLikedList] = useState([]);
  const [SCedList,setSCedList] = useState([]);
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
              setMode(page.mode)
            }}>
              {page.mode === 'search' &&
                <>
                  <Title level={1} style={{ padding: 5, color: 'white'}}>{page.title}</Title>
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  <SearchOutlined style={{ fontSize: 50, color: 'white'}} />
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
                  <Title level={1} style={{ padding: 5, color: 'white' }}>Slaughted <br/> or Collected</Title>
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  <RadarChartOutlined style={{ fontSize: 50, color: 'white' }} />
                </>
              }
              {page.mode === 'listings' &&
                <>
                  <Title level={1} style={{ padding: 5, color: 'white' }}> {page.title}</Title>
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
          {mode === "search" && <Search likedList={likedList} setLikedList={setLikedList} SCedList={SCedList} setSCedList={setSCedList}></Search>}
          {mode === "liked" && <Liked likedList={likedList} setLikedList={setLikedList} SCedList={SCedList} setSCedList={setSCedList}></Liked>}
          {mode === "sced" && <SCed likedList={likedList} setLikedList={setLikedList} SCedList={SCedList} setSCedList={setSCedList}></SCed>}
          {mode === "listings" && <Listings></Listings>}
          {mode === "about" && <About></About>}
        </>
      </Flex>
    </>
  )
}

export default App
