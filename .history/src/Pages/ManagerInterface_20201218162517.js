import React from 'react'
import StockVehicule from '../Components/StockVehicule';

export default function ManagerInterface() {
    return (
        <>
            <div className="container rounded my-5 float-right w-md-1 " 
            style={{background: '#FA7E15'}}>
            <StockVehicule />
                
                <label class="switch">
                    <input type="checkbox"/>
                        <span class="slider"></span>
                </label>
            </div>
            </>
    )
}
