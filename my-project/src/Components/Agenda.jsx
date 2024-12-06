import React, { useState } from "react";
import "./agenda.css"
import { useNavigate } from "react-router-dom"
import { days } from "./Context";

function Agenda() {
    const navigate = useNavigate();
    const giorni = days();
    const [range, setRange] = useState({ start: 0, end: 5 });

    const next = () => {
        if (range.end < days.length) {
            setRange({
                start: range.start + 5,
                end: range.end + 5,
            })
        }
    }

    const prev = () => {
        if (range.start > 0) {
            setRange({
                start: range.start - 5,
                end: range.end - 5,
            })
        }
    }

    const visibleDays = giorni.split(range.start, range.end);

    return (
        <>
            <div className="wrapperA">
                <div className="topWrpA">
                    <p className="agenda">Agenda</p>
                    <a href="http://disponibilità" className="link">Disponibilità</a>
                </div>
                <div className="midWrpA">
                    <div className="carousel">
                        <button type="button" className="btnLeft" onClick={prev} disabled={range.start === 0}>S</button>
                        <p>Settimana {visibleDays[0]?.data.split("")[0]}-(" ") {visibleDays[visibleDays.length - 1]?.data.split("")[0]}</p>
                        <button type="button" className="btnRight" onClick={next} disabled={range.end >= giorni.length}>D</button>
                    </div>


                    <div className="days">
                        {visibleDays.map((giorno, index) => (
                            <div key={index}>
                                <button style={{
                                    backgroundColor: giorno.stato === "modificato" ? "green" : "white",
                                    color: giorno.stato === "modificato" ? "white" : "black",
                                }}
                                    onClick={() => navigate(`/orari/${range.start + index}`)}>
                                    {giorno.data}
                                </button>
                                <span>
                                    {giorno.orario || "Nessuna disponibilità selezionata"}
                                </span>
                                <button style={{
                                    backgroundColor: giorno.stato === "modificato" ? "green" : "white",
                                    color: giorno.stato === "modificato" ? "white" : "black",
                                }}
                                    onClick={() => navigate(`/orari/${range.start + index}`)}>
                                    {giorno.data}
                                </button>
                                <span>
                                    {giorno.orario || "Nessuna disponibilità selezionata"}
                                </span>
                                <button style={{
                                    backgroundColor: giorno.stato === "modificato" ? "green" : "white",
                                    color: giorno.stato === "modificato" ? "white" : "black",
                                }}
                                    onClick={() => navigate(`/orari/${range.start + index}`)}>
                                    {giorno.data}
                                </button>
                                <span>
                                    {giorno.orario || "Nessuna disponibilità selezionata"}
                                </span>
                                <button style={{
                                    backgroundColor: giorno.stato === "modificato" ? "green" : "white",
                                    color: giorno.stato === "modificato" ? "white" : "black",
                                }}
                                    onClick={() => navigate(`/orari/${range.start + index}`)}>
                                    {giorno.data}
                                </button>
                                <span>
                                    {giorno.orario || "Nessuna disponibilità selezionata"}
                                </span>
                                <button style={{
                                    backgroundColor: giorno.stato === "modificato" ? "green" : "white",
                                    color: giorno.stato === "modificato" ? "white" : "black",
                                }}
                                    onClick={() => navigate(`/orari/${range.start + index}`)}>
                                    {giorno.data}
                                </button>
                                <span>
                                    {giorno.orario || "Nessuna disponibilità selezionata"}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bottomWrpA">
                    <p>Home</p>
                    <p>Agenda</p>
                    <p>Area Personale</p>
                </div>
            </div>
        </>
    )
}

export default Agenda