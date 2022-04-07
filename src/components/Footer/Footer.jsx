import '../../styles/Footer.css'

function Footer(){
    return(
        <footer>
            <div id="Block_txt">
                <div id="champ_txt">
                <form action="" method="post" id="form_txt">
                    <textarea name="News" id="news" placeholder=" Quoi de neuf ?"></textarea>
                    <div id="btn">
                        <button><i className="far fa-image icone"></i>Photo</button>
                        <button metode="post"><i className="far fa-paper-plane icone"></i>Envoyer</button>
                    </div>
                </form>
                </div>
            </div>
        </footer>
    
    )
}

export default Footer