import React, { useState } from 'react';
import { Card } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import './SCed.css';

export function SCed(props) {
    const SCedList = props.SCedList;
    const setSCedList = props.setSCedList;

    const removeFromSCedList = (info) => {
        const newSCedList = [...SCedList];
        const index = newSCedList.indexOf(info);
        newSCedList.splice(index,1);
        setSCedList(newSCedList);
    }

    const addToKillCount = (info) => {
        info.kills += 1;
    }

    const subToKillCount = (info) => {
        if(info.kills > 0){
            info.kills -= 1;
        }
    }

    return (
        <>
            <div className="flexerSC">
                {SCedList.map((info) => {
                    return (
                        <div className="padSC">
                        <React.Fragment key={info.key}>
                            <br/>
                                <Card className="cardSC">
                                    <div className="favcolorSC">
                                        <img src={info.image} className="imageSC" />
                                        <div>
                                            <span style={{ color: "white"}}>
                                                <span style={{ color: "grey" }}>Name:</span>
                                                &nbsp;
                                                {info.name}
                                            </span>
                                        </div>
                                        <br />
                                        <div>
                                            <span style={{ color: "white" }}>
                                                <span style={{ color: "grey" }}>Description:</span>
                                                &nbsp;
                                                {info.description.slice(0,150)}
                                            </span>
                                        </div>
                                        <br />
                                        <div>
                                            <span style={{ color: "white" }}>
                                                <span style={{ color: "grey" }}>Location:</span>
                                                &nbsp;
                                                {info.location.slice(0,50)}
                                            </span>
                                        </div>
                                        <br />
                                        <div>
                                            <div style={{textWrap: "nowrap", fontSize: 12}}>Times Killed: {info.kills}</div>
                                        </div>
                                        <div>
                                            <button onClick={() => addToKillCount(info)}><ArrowUpOutlined/></button>
                                            <button onClick={() => subToKillCount(info)}><ArrowDownOutlined/></button>
                                            <button className="removebuttonSC" onClick={() => removeFromSCedList(info)}>Remove</button>
                                        </div>
                                    </div>
                                </Card>
                            <br />
                        </React.Fragment>
                        </div>
                    )
                })}
            </div>
        </>
    )
}