import Header from '../../components/Headear/Header'
import '../../styles/Send-1.css';



function Send_1(){

    return (
        <div>
    <Header/>
    <section>
        <div className="items_contenues">
            <a href="Message2">
            <h3 className="item_name">Gagno Maxime</h3>
            <p className="item_text">Bonjour...</p>
            <input type="datetime-local" id="meeting-time" />
            </a>
        </div>
    </section>
    
</div>

    )
}

export default Send_1