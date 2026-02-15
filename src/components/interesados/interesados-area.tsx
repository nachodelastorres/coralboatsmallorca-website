import InteresadosForm from '../form/FormularioInteresados';
import { ClockSvgTwo, LocationSvgThree, PhoneSvgTwo, MailSvg } from '../svg';

const InteresadosArea = () => {
  return (
    <div className="it-contact-area pt-120 pb-120">
      <div className="container">
        <div className="row">
            <h3 className="it-discover-sm-title mb-25">En breves abriremos reservas para la temporada 2025...</h3>
            <div className="it-discover-discover-included-content mb-40">
              {/* <ol> */}
                <p>
                  {/* <strong>Punto de encuentro y puntualidad</strong><br /> */}
                  ¡Déjanos tus datos y así podremos avisarte!
                </p>
              {/* </ol> */}
            </div>
          <div className="col-xl-7 col-lg-6">
            <div className="it-contact-form-box">
              <InteresadosForm />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="it-contact-right">
              <ul>
                <li>
                  <div className="it-contact-box">
                    <div className="it-contact-icon">
                      <span>
                        <MailSvg />
                      </span>
                    </div>
                    <div className="it-contact-text">
                      <span>Email:</span>
                      <a href="#">
                        info@coralboatsmallorca.com <br />
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="it-contact-box">
                    <div className="it-contact-icon">
                      <span>
                        <PhoneSvgTwo />
                      </span>
                    </div>
                    <div className="it-contact-text">
                      <span>Teléfono:</span>
                      <a href="tel:+34651992329">(+34) 651 992 329</a>
                      {/* <a href="tel:+88568956238">+88 568 956 238</a> */}
                    </div>
                  </div>
                </li>
                {/* <li>
                  <div className="it-contact-box">
                    <div className="it-contact-icon">
                      <span>
                        <LocationSvgThree />
                      </span>
                    </div>
                    <div className="it-contact-text">
                      <span>Location:</span>
                      <a target="_blank" href="#">
                        242 Carlyle RdZebulon, North <br /> Carolina(NC), 27597
                      </a>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InteresadosArea;
