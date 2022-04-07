import Header from '../../components/Headear/Header'
import '../../styles/Contacted.css';

function Contacted() {
  return (
    <div>
    <Header/>
      <section id="research">
        <form id="searchbox" method="get" action="search">
          <input name="q" type="text" size="15" placeholder="Type here…" />
          <input id="button-submit" type="submit" value="Search" />
        </form>
      </section>
      <section id="contact">
        <table id="directory">
          <thead>
          <tr id="1">
            <th className="block-A-Z">A</th>
            <th className="block-A-Z">B</th>
            <th className="block-A-Z">C</th>
            <th className="block-A-Z">D</th>
            <th className="block-A-Z">E</th>
            <th className="block-A-Z">F</th>
            <th className="block-A-Z">G</th>
            <th className="block-A-Z">H</th>
            <th className="block-A-Z">I</th>
            <th className="block-A-Z">J</th>
            <th className="block-A-Z">K</th>
            <th className="block-A-Z">L</th>
            <th className="block-A-Z">M</th>
            <th className="block-A-Z">N</th>
            <th className="block-A-Z">O</th>
            <th className="block-A-Z">P</th>
            <th className="block-A-Z">Q</th>
            <th className="block-A-Z">R</th>
            <th className="block-A-Z">S</th>
            <th className="block-A-Z">T</th>
            <th className="block-A-Z">U</th>
            <th className="block-A-Z">V</th>
            <th className="block-A-Z">W</th>
            <th className="block-A-Z">X</th>
            <th className="block-A-Z">Y</th>
            <th className="block-A-Z">Z</th>
          </tr>
          </thead>
          <tbody>
          <tr id="2">
            <th className="name_A-Z A"></th>
            <th className="name_A-Z B"></th>
            <th className="name_A-Z C"></th>
            <th className="name_A-Z D"></th>
            <th className="name_A-Z E"></th>
            <th className="name_A-Z F"></th>
            <th className="name_A-Z G"></th>
            <th className="name_A-Z H"></th>
            <th className="name_A-Z I"></th>
            <th className="name_A-Z J"></th>
            <th className="name_A-Z K"></th>
            <th className="name_A-Z L"></th>
            <th className="name_A-Z M"></th>
            <th className="name_A-Z N"></th>
            <th className="name_A-Z O"></th>
            <th className="name_A-Z P"></th>
            <th className="name_A-Z Q"></th>
            <th className="name_A-Z R"></th>
            <th className="name_A-Z S"></th>
            <th className="name_A-Z T"></th>
            <th className="name_A-Z U"></th>
            <th className="name_A-Z V"></th>
            <th className="name_A-Z W"></th>
            <th className="name_A-Z X"></th>
            <th className="name_A-Z Y"></th>
            <th className="name_A-Z Z"></th>
          </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Contacted;
