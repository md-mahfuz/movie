

import React from "react";
import  MImage from "../assets"
import { Button} from 'antd';
import  "./Presentation.css"



const Presentation = (props) => {
    return (
        <div>
            <img src={MImage.bg_image} className={"presentation"}/>
            <img src={MImage.logo} className={"LogoImg"}/>

            <nav className={"Mnav"}>


                <h3 >Home</h3>
                <h3 className={"navTitle1"}>Features</h3>
                <h3 className={"navTitle2"}>How it works</h3>

                <h3 className={"navTitle3"}>Our Partnars</h3>
                <h3 className={"navTitle4"}>Clients Groups</h3>

                    <h3 className={"navTitle5"}>Login</h3>
                    <img src={MImage.login} className={"loginImg"}/>


                <h3 className={"navTitle5"}> Sign Up</h3>
                <Button className={"navTitle6"}>Download API</Button>


            </nav>

            <div className={"ApiSection"}>
                <h1 className={"ApiText"}>Connect to SMS Mtandao<br/>
                    using API</h1>
                <p className={"ApiP"}>Mobile devices are continuously climbing up to<br/> the top of the most compulsory device a modern human being needs to have .</p>


                <Button  shape="round"  className={"DownloadButton"} >
                    Get started Now
                    <img className={"DownloadButtonImg"} src={MImage.bnImg}/>
                </Button>
                

            </div>




        </div>
    );
};
export default Presentation;