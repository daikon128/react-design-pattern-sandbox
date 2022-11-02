import React, {ReactNode} from "react";
import logo from '../logo.svg';

type MousePositionProps = {
    position: {
        x: number,
        y: number
    }
}

const Cat: React.FC<MousePositionProps> = (mouse: MousePositionProps) => {
    return (
        // This log is cat, OK??
        <img src={logo} alt="cat" style={{position: 'absolute', left: mouse.position.x, top: mouse.position.y, width:'20px'}}/>
    );
}

type MouseProps = {
    render: (mouse: MousePositionProps) => ReactNode;
}

const Mouse: React.FC<MouseProps> = ({render}) => {
    const [positionX, setPositionX] = React.useState(0)
    const [positionY, setPositionY] = React.useState(0)

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        setPositionX(() => event.clientX)
        setPositionY(() => event.clientY)
    }

    return (
        <div style={{height: '100vh'}} onMouseMove={handleMouseMove}>
            {
                render({
                    position: { x: positionX, y: positionY }
                })
            }
        </div>
    )
}

const MouseTracker = () => {
    return (
        <div>
            <h1>move the mouse around</h1>
            <Mouse render={mouse => (
                <Cat position={mouse.position} />
            )} />
        </div>
    )
}

export {
    MouseTracker
}