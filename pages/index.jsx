import React from 'react'
import * as StylesGrid from './index.module.css'
import { IoIosArrowDropdownCircle } from "@react-icons/all-files/io/IoIosArrowDropdownCircle";
const index = () => {
    return (
        <div className={StylesGrid.Container}>
            <div className={StylesGrid.ContainerText} >
                <h1>Encuentra la proxima</h1>
                <h1>truco de jardineria</h1>
            </div>
            <div className={StylesGrid.grid}>
                <div className={StylesGrid.colum}>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                </div>
                <div className={StylesGrid.colum1}>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>    
                </div>
                <div className={StylesGrid.colum2}>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                </div>
                <div className={StylesGrid.colum3}>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                </div>
                <div className={StylesGrid.colum4}>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                </div>
                <div className={StylesGrid.colum5}>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                </div>
                <div className={StylesGrid.colum}>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                    <div className={StylesGrid.item}></div>
                </div>
            </div>
            <div className={StylesGrid.Scrolldown}>
                <IoIosArrowDropdownCircle/>
            </div>
        </div>

    )
}

export default index
