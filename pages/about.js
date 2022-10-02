import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Break } from './funcs';
import { Cat } from './funcs';
import { Site } from './funcs';
import { Coin } from './funcs';


export default function Home() {
    return (
        <div>
            <br></br>
            <br></br>
            <div className="row">
                <Break />
                <Site link="./" text="Home" />
                <Site link="./about" text="About" />
                <Break />
            </div>
            <div className="box">
                <div className="row">
                    <h2 className="center">Made by --&gt;<a href="https://github.com/ChristianTP123">ME</a></h2>
                </div>
            </div>
        </div>
    )

}