import '../../styles/Home.css';
import Header from '../../components/Headear/Header'
import Footer from '../../components/Footer/Footer'

function Home() {


  return (
<div>
    <Header/>
    <section id="Block_Actualité">
        <div id="Block_Contenue">
            <div id="actualiter_received">
                <h3>Name_test</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolor magnam, ratione quam minima
                    reprehenderit, repellendus praesentium possimus et soluta atque rerum. Animi tenetur accusantium
                    placeat natus repellendus temporibus officia.</p>
            </div>
            <div id="actualiter_send">
                <h3>Name_test</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolor magnam, ratione quam minima
                    reprehenderit, repellendus praesentium possimus et soluta atque rerum. Animi tenetur accusantium
                    placeat natus repellendus temporibus officia.</p>
            </div>

        </div>

    </section>
    <Footer/>
</div>
  );
}

export default Home;
