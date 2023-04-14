import BannerClaro from "../components/bannerClaro";

function Footer() {
  return (
    <>
      <footer>
        <BannerClaro>
        <br /><br />
        <div className="container-fluid text-center ">
          <div className="row footerAlign">
            <div className="col-12 col-md-2 footerText">
              <h5>Página Inicial</h5>
              <ul className="list-unstyled ">
                <li>
                  <a href="#instituicao">Novidades</a>
                </li>
                <li>
                  <a href="#colegio">Sobre Nós</a>
                </li>
                <li>
                  <a href="#contato">Pedagógico</a>
                </li>
                <li>
                  <a href="#area-restrita">Fique de Olho</a>
                </li>
                <li>
                  <a href="#novidades">Estrutura Física</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-2 footerText">
              <h5>INSTITUIÇÃO</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#fotos">Educação Infantil</a>
                </li>
                <li>
                  <a href="#fale-conosco">Ensino Fundamental</a>
                </li>
                <li>
                  <a href="#effectus">Ensino Médio</a>
                </li>
                <li>
                  <a href="#effectus">Lista de Materiais</a>
                </li>
                <li>
                  <a href="#effectus">Uniforme</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-2 footerText">
              <h5>COLÉGIO</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#sobre-nos">Fotos</a>
                </li>
                <li>
                  <a href="#revista-lobato-news">Revista Lobato News</a>
                </li>
                <li>
                  <a href="#agende-uma-visita">Eventos</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-2 footerText">
              <h5>CONTATO</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#eventos">Fale Conosco</a>
                </li>
                <li>
                  <a href="#trabalhe-conosco">Agende uma Visita</a>
                </li>
                <li>
                  <a href="#trabalhe-conosco">Trabalhe Conosco</a>
                </li>
                <li>
                  <a href="#educacross">Localização</a>
                </li>
                <li>
                  <a href="#pedagogico">Redes Sociais</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-2 footerText">
              <h5>Área Restrita</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#fique-de-olho">Effectus</a>
                </li>
                <li>
                  <a href="#uniforme">Conexia Lex</a>
                </li>
                <li>
                  <a href="#redes-sociais">Educacross</a>
                </li>
                <li>
                  <a href="#estrutura-fisica">International School</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </BannerClaro>
      </footer>
    </>
  );
}

export default Footer;
