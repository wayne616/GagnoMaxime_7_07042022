import Header from '../../components/Headear/Header'
import '../../styles/Forums-1.css';

function Forums_1(){

    return (
        <div>
    <Header/>
    <section>
        <div className="items_contenues">
            <a href="Forums2">
            <h3 className="item_name">Name Forum 1 </h3>
            <p className="item_text">Bonjour</p>
            <input type="datetime-local" id="meeting-time" />
            </a>
        </div>
    </section>


    
</div>

    )
}

export default Forums_1