import Header from '../../components/Headear/Header'
import Footer from '../../components/Footer/Footer'

import '../../styles/Send-2.css';


function Send_2(){

    return (
        <div>
            <Header/>
    <section id="name">
        <h3 id="id_name"><i className="far fa-check-circle"></i> TEST 1</h3>
    </section>
    <section id="message">
        <section id="message_received">
            <div id="received">
                <h4>Name</h4>
                <p className="text_message_received">text</p>
            </div>
            <time datetime="14:54">00:00</time>
        </section>
        <section id="message_sent">
            <div id="sent">
                <p className="text_message_sent">text</p>
            </div>
            <time datetime="14:54">00:00</time>
        </section>
    </section>
    <Footer/>
</div>

    )
}

export default Send_2