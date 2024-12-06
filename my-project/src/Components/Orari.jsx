import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { days } from "./Context";

function Orari() {
    const index = useParams();
    const [giorni, setGiorni] = days();
    const navigate = useNavigate();
    const selectedDay = giorni(index);

    const [orarioInizio, setOrarioInizio] = useState("");
    const [orarioFine, setOrarioFIne] = useState("");
    const [error, setError] = useState("")

    const validateSave = () => {
        const inizio = parseFloat(orarioInizio);
        const fine = parseFloat(orarioFine);

        if (!inizio || !fine || fine <= inizio) {
            setError("Orario non valido")
            return;
        } if (fine - inizio > 6) {
            setError("L'orario di lavoro non può superare le 6 ore")
            return;
        }

        const updateGiorni = giorni.map((g, i) => i === parseInt(index) ? { ...g, stato: "modificato", orario: `${orarioInizio}-${orarioFine}` } : g);
        setGiorni(updateGiorni);

        navigate("/agenda");
    }

    return (
        <>
            <div className="wrapperO">
                <div className="topWrpO">
                    <a href="http://Agenda" className="linkO"></a>
                    <p className="orari">Orari</p>
                </div>
                <div className="midWrpO">
                    <p className="midWrpTitle">Seleziona i giorni e le fasce orarie di disponibilità</p>
                    <div className="days">
                        <button style={{
                            backgroundColor: "white",
                            color: "black",
                        }}
                            onClick={style = { backgroundColor: "green", color: "white" }}>
                        </button>
                        <label>
                            <input type="number" className="inputDays" placeholder="Da" value={orarioInizio} onChange={(e) => setOrarioInizio(e.target.value)} />
                        </label>
                        <label>
                            <input type="text" className="inputDays" placeholder="A" value={orarioFine} onChange={(e) => setOrarioFIne(e.target.value)} />
                        </label>
                        <button style={{
                            backgroundColor: "white",
                            color: "black",
                        }}
                            onClick={style = { backgroundColor: "green", color: "white" }}>
                        </button>
                        <label>
                            <input type="number" className="inputDays" placeholder="Da" value={orarioInizio} onChange={(e) => setOrarioInizio(e.target.value)} />
                        </label>
                        <label>
                            <input type="text" className="inputDays" placeholder="A" value={orarioFine} onChange={(e) => setOrarioFIne(e.target.value)} />
                        </label>
                        <button style={{
                            backgroundColor: "white",
                            color: "black",
                        }}
                            onClick={style = { backgroundColor: "green", color: "white" }}>
                        </button>
                        <label>
                            <input type="number" className="inputDays" placeholder="Da" value={orarioInizio} onChange={(e) => setOrarioInizio(e.target.value)} />
                        </label>
                        <label>
                            <input type="text" className="inputDays" placeholder="A" value={orarioFine} onChange={(e) => setOrarioFIne(e.target.value)} />
                        </label>
                        <button style={{
                            backgroundColor: "white",
                            color: "black",
                        }}
                            onClick={style = { backgroundColor: "green", color: "white" }}>
                        </button>
                        <label>
                            <input type="number" className="inputDays" placeholder="Da" value={orarioInizio} onChange={(e) => setOrarioInizio(e.target.value)} />
                        </label>
                        <label>
                            <input type="text" className="inputDays" placeholder="A" value={orarioFine} onChange={(e) => setOrarioFIne(e.target.value)} />
                        </label>
                        <button style={{
                            backgroundColor: "white",
                            color: "black",
                        }}
                            onClick={style = { backgroundColor: "green", color: "white" }}>
                        </button>
                        <label>
                            <input type="number" className="inputDays" placeholder="Da" value={orarioInizio} onChange={(e) => setOrarioInizio(e.target.value)} />
                        </label>
                        <label>
                            <input type="text" className="inputDays" placeholder="A" value={orarioFine} onChange={(e) => setOrarioFIne(e.target.value)} />
                        </label>
                    </div>
                    <div className="lowWrpO">
                        <button className="bottomBtnO" disabled={!updateGiorni} onClick={validateSave}>
                            Comunica Disponibilità
                        </button>
                    </div>
                </div>
                <div className="bottomWrpO">
                    <p>Home</p>
                    <p>Agenda</p>
                    <p>Area Personale</p>
                </div>
            </div>
        </>
    )
}

export default Orari