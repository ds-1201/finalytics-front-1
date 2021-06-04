import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Button from './Button';
// import Popup from './Popup';
import "./SideBar.css";

function SideBar(props){
    const [clicked,setClicked] = useState(0);
    const list = ["Dashboard","Wallet","Trade","Trade History","How To Trade","Account Settings"];
    const history = useHistory();

    useEffect(() => {
        history.push("/")
    }, [])

    const onClickHandler = (id) => {
        setClicked(id);
        var address = list[id].toLowerCase().split(" ").join("");
        history.push(`/${address}`);
    }

    return(
        <>
            <div className="container">
            <div className="sidebar-container">
                <img className="img" src="logotransparent.png" />
                {
                    list.map((element,i) => {
                        return <Button key={i} id={i} name={element} active={clicked} onClickHandler={onClickHandler}/>;
                    })
                }
                {/* {
                    clicked === 0 ? <Popup /> : " "
                }   */}
            </div>
            <div className="child-container">
                {props.children}
            </div>
            </div>
        </>
    );
}

export default SideBar;
