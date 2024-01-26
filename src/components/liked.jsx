import React from 'react';
import { Card } from 'antd';
import './liked.css';

export function Liked(props) {
    const likedList = props.likedList;
    const setLikedList = props.setLikedList;

    const removeFromLikedList = (info) => {
        let newLikedList = [...likedList];
        const index = newLikedList.indexOf(info);
        newLikedList.splice(index,1);
        setLikedList(newLikedList);
    }

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
                                                {info.description.slice(0,200)}
                                            </span>
                                        </div>
                                        <br />
                                        <div>
                                            <span style={{ color: "white" }}>
                                                <span style={{ color: "grey" }}>Location:</span>
                                                &nbsp;
                                                {info.location.slice(0,120)}
                                            </span>
                                        </div>
                                        <br />
                                        <div>
                                            <button className="removebutton" onClick={() => removeFromLikedList(info)}>Remove</button>
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