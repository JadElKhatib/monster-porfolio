import React from 'react';
import { Card, Typography } from 'antd';
const { Title } = Typography;
import './liked.css';

export function Liked(props) {
    const likedList = props.likedList;
    const setLikedList = props.setLikedList;
    const SCedList = props.SCedList;
    const setSCedList = props.setSCedList;

    return (
        <>
            <div className="flexer">
                {likedList.map((info) => {
                    return (
                        <div className="pad">
                        <React.Fragment key={info.key}>
                            <br/>
                                <Card className="cardL">
                                    <div className="favcolorL">
                                        <img src={info.image} className="imageL" />
                                        <div>
                                            <span style={{ color: "white" }}>
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
                                                {info.description}
                                            </span>
                                        </div>
                                        <br />
                                        <div>
                                            <span style={{ color: "white" }}>
                                                <span style={{ color: "grey" }}>Location:</span>
                                                &nbsp;
                                                {info.location}
                                            </span>
                                        </div>
                                        <br />
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