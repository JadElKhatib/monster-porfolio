import React, { useState, useEffect } from "react";
import { Button, Input, Card, Typography } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
const { Title } = Typography;
import './search.css';

export function Search(props) {
    const [mode, setMode] = useState('');
    const [fullArr, setFullArr] = useState([]);
    const [count, setCount] = useState(0);
    const [backgroundimage, setBackgroundImage] = useState("https://i.pinimg.com/originals/42/83/6a/42836adf0826dbfa27034fc55566d3a2.gif");

    const likedList = props.likedList;
    const setLikedList = props.setLikedList;
    const SCedList = props.SCedList;
    const setSCedList = props.setSCedList;

    const Searcher = async () => {
        let url;
        if (mode === "Elden Ring") {
            url = "https://eldenring.fanapis.com/api/bosses?";
        }
        const repsonse = await fetch(url);
        const jsonifiedResponse = await repsonse.json();
        let newFullArr = [];
        jsonifiedResponse.data.map((info) => {
            newFullArr.push({
                key: info.id,
                name: info.name,
                description: info.description,
                location: info.region + ", " + info.location,
                image: info?.image ? info.image : "https://upload.wikimedia.org/wikipedia/commons/5/55/Question_Mark.svg",
                kills: 0
            })
        })
        setFullArr(newFullArr);
        setBackgroundImage("/src/search1.gif");
    }

    const accordion = () => {
        setCount(count + 1);
    }

    const addtoLikedList = (info) => {
        const newLikedList = [...likedList];
        if (!newLikedList.includes(info)) {
            newLikedList.push(info);
        }
        localStorage.setItem("likedList",JSON.stringify(newLikedList));
        setLikedList(newLikedList);
    }

    const addtoSCedList = (info) => {
        const newSCedList = [...SCedList];
        if (!newSCedList.includes(info)) {
            newSCedList.push(info);
        }
        localStorage.setItem("SCedList",JSON.stringify(newSCedList));
        setSCedList(newSCedList);
    }

    useEffect(() => {
        const body = document.body;
        if (mode === 'Elden Ring') {
            body.style.backgroundSize = "cover";
            body.style.backgroundSize = "1199px 715px";
            body.style.backgroundPositionX = "320px";
            body.style.backgroundPositionY = "-20px";
            body.style.backgroundRepeat = "no-repeat";
            body.style.backgroundAttachment = "fixed";
            body.style.backgroundColor = "black";
            body.style.overflowX = "hidden";
        }
        document.body.style.backgroundImage = `url(${backgroundimage})`;
    }, [backgroundimage])

    return (
        <>
            <span className="search">
                <Input
                    placeholder="Enter Monster Name"
                    style={{ height: 30, width: 300 }}
                    onChange={e => setMode(e.target.value)}>
                </Input>
                <Button onClick={Searcher}>Search</Button>
                <div>
                    {fullArr.map((info) => {
                        return (
                            <React.Fragment key={info.key}>
                                <br />
                                <Card className="card">
                                    <div className="favcolor">
                                        <img src={info.image} className="image" />
                                        <div>
                                            <Title level={3} style={{ color: "white" }}>
                                                <span style={{ color: "grey" }}>Name:</span>
                                                &nbsp;
                                                {info.name}
                                            </Title>
                                        </div>
                                        <br />
                                        <div>
                                            <Title level={3} style={{ color: "white" }}>
                                                <span style={{ color: "grey" }}>Description:</span>
                                                &nbsp;
                                                {info.description}
                                            </Title>
                                        </div>
                                        <br />
                                        <div>
                                            <Title level={3} style={{ color: "white" }}>
                                                <span style={{ color: "grey" }}>Location:</span>
                                                &nbsp;
                                                {info.location}
                                            </Title>
                                        </div>
                                        <br />
                                        <button className="button" onClick={accordion}>
                                            {count % 2 === 0 ?
                                                (
                                                    <div style={{ color: "black" }}>
                                                        <span className="buttonstyle">Available Options</span>
                                                        <span className="buttonicon"><CaretDownOutlined /></span>
                                                    </div>
                                                )
                                                :
                                                (
                                                    <>
                                                        <div style={{ color: "black" }}>
                                                            <span className="buttonstyle">Available Options</span>
                                                            <span className="buttonicon"><CaretUpOutlined /></span>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        </button>
                                        <div>
                                            {count % 2 === 0 ?
                                                (
                                                    <>
                                                    </>
                                                )
                                                :
                                                (
                                                    <div className="dropper">
                                                        <div>
                                                            <button disabled={likedList.some((monster) => monster.key === info.key)} className="buttonIn" onClick={() => addtoLikedList(info)}>Like</button>
                                                        </div>
                                                        <div>
                                                            <button disabled={SCedList.some((monster) => monster.key === info.key)} className="buttonIn" onClick={() => addtoSCedList(info)}>Slaughtered / Collected</button>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </Card>
                                <br />
                            </React.Fragment>
                        )
                    })}

                </div>
            </span>
        </>
    )
}