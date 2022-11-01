import React from "react";

type MouseProps = {
    mouse: {
        position: {
            x: number,
            y: number
        }
    }
}

const Cat: React.FC<MouseProps> = ({mouse}) => {
    return (
        <img src="/cat.jpg" style={{position: 'absolute', left: mouse.position.x, top: mouse.position.y}}/>
    );
}
