import React, { useState } from "react";
import { Button, Input, Card, Typography } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
const { Title } = Typography;
import './search.css';

export function Search(props) {
    const [mode, setMode] = useState('');
    const [fullArr, setFullArr] = useState([]);
    const [count, setCount] = useState(0);

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
                image: info?.image ? info.image : "https://upload.wikimedia.org/wikipedia/commons/5/55/Question_Mark.svg"
            })
        })
        setFullArr(newFullArr);
    }

    const accordion = () => {
        setCount(count + 1);
    }

    const addtoLikedList = (info) => {
        const newLikedList = [...likedList];
        if(!newLikedList.includes(info)) {
            newLikedList.push(info);
        }
        console.log(newLikedList);
        setLikedList(newLikedList);
    }

    const addtoSCedList = (info) => {
        const newSCedList = [...SCedList];
        if(!newSCedList.includes(info)) {
            newSCedList.push(info);
        }
        console.log(newSCedList);
        setSCedList(newSCedList);
    }

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
                                                    <div style={{color: "black"}}>
                                                        <span className="buttonstyle">Available Options</span>
                                                        <span className="buttonicon"><CaretDownOutlined/></span>
                                                    </div>
                                                )
                                                :
                                                (
                                                    <>
                                                        <div style={{color: "black"}}>
                                                            <span className="buttonstyle">Available Options</span>
                                                            <span className="buttonicon"><CaretUpOutlined/></span>
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
                                                            <button disabled={SCedList.some((monster) => monster.key === info.key)}className="buttonIn" onClick={() => addtoSCedList(info)}>Slaughtered / Collected</button>
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