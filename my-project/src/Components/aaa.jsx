<div className="days">
                        <div className="wrp1">
                            <button type="button" className="btn1">
                                <div className="wrpBtn1">
                                    <p className="day1">LUN</p>
                                    <p className="n1">4</p>
                                    <p className="month1">OTT</p>
                                </div>
                            </button>
                            <p className="text1">Nessuna disponibiità selezionata</p>
                        </div>
                        <div className="wrp2">
                            <button type="button" className="btn2">
                                <div className="wrpBtn2">
                                    <p className="day2">MAR</p>
                                    <p className="n2">5</p>
                                    <p className="month2">OTT</p>
                                </div>
                            </button>
                            <p className="text2">8:30 - 11:30</p>
                        </div>
                        <div className="wrp3">
                            <button type="button" className="btn3">
                                <div className="wrpBtn3">
                                    <p className="day3">MER</p>
                                    <p className="n3">6</p>
                                    <p className="month3">OTT</p>
                                </div>
                            </button>
                            <p className="text3">Nessuna disponibiità selezionata</p>
                        </div>
                        <div className="wrp4">
                            <button type="button" className="btn4">
                                <div className="wrpBtn4">
                                    <p className="day4">GIO</p>
                                    <p className="n4">7</p>
                                    <p className="month4">OTT</p>
                                </div>
                            </button>
                            <p className="text4">8:30 - 11:30</p>
                        </div>
                        <div className="wrp5">
                            <button type="button" className="btn5">
                                <div className="wrpBtn5">
                                    <p className="day5">VEN</p>
                                    <p className="n5">8</p>
                                    <p className="month5">OTT</p>
                                </div>
                            </button>
                            <p className="text5">Nessuna disponibiità selezionata</p>
                        </div>
                    </div>
                    





                    <div className="bottomWrpA">
                        <p>Home</p>
                        <p>Agenda</p>
                        <p>Area Personale</p>
                    </div>








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
                            <button/>
                            <span>
                                {giorno.orario || "Nessuna disponibilità selezionata"}
                            </span>
                            <div/>
                    ))}
                </div>

            </div>
                <div className="bottomWrpA">
                    <p>Home</p>
                    <p>Agenda</p>
                    <p>Area Personale</p>
                </div>
    
}

                export default Agenda