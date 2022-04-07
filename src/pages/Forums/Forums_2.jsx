import Header from '../../components/Headear/Header'
import Footer from '../../components/Footer/Footer'

import '../../styles/Forums-2.css';

function Forums_2(){

    return (
        <div>
    <Header/>
    <section id="block">
        <section id="block_contenue">
            <div id="text">
                <div id="name_forum">
                    <h2><i className="far fa-comment-alt icone"></i>Name_forum</h2>
                </div>
                <div id="text_forum">
                    <h3 id="name_received">TEST 2</h3>
                    <div id="text_forum_Received">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cumque consequuntur
                            vero aliquid ab praesentium molestiae totam sapiente eius, eos officia accusantium nobis et
                            eaque ipsum omnis expedita ut tenetur?</p>
                    </div>
                    <h3 id="name_send">TEST 1</h3>
                    <div id="text_forum_send">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cumque consequuntur
                            vero aliquid ab praesentium molestiae totam sapiente eius, eos officia accusantium nobis et
                            eaque ipsum omnis expedita ut tenetur?</p>
                    </div>

                </div>
            </div>
        </section>
        <section id="block_name">
            <div id="name">
                <div id="present">
                    <h2>Present</h2>
                    <h3>TEST 1</h3>
                    <h3>TEST 2</h3>
                    <h3>TEST 3</h3>
                </div>
                <div id="not_present">
                    <h2>Not Present</h2>
                    <h3>TEST 4</h3>
                    <h3>TEST 5</h3>
                    <h3>TEST 6</h3>
                </div>
            </div>
        </section>
    </section>
    <Footer/>

</div>

    )
}

export default Forums_2