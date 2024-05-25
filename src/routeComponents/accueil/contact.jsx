import { useState } from "react";
import { IcBaselineLocalPhone, IcBaselineLocationOn, IcBaselineMail, IcBaselineWhatsapp, IcOutlineMail, MdiGithub } from "../../uikits/icons";
import { SectionTitle } from "../../uikits/other";

const HomeContact = () => {
    const [formValues, setFormValues] = useState({
        pseudo: "", mail: "", objet_contact: ""
    })

    function handleChange(e) {
        let value = e.target.value;
        let name = e.target.name;
        setFormValues({ ...formValues, [name]: value })
    }

    function getMsgToSent() {
        return "Bonjour Monsieur Evans,je suis Monsieur/Madame " + formValues.pseudo +
            " et c'est en ayant consulté votre portfolio que je vous contact dans le cadre d'une "
            + formValues.objet_contact + "..."
    }
    return (
        <div className="home-contact" id="pcContact">

            <section className="cp-infos">
                <SectionTitle title={'Contact'} />
                <div>

                    <p>
                        <span>
                            <IcBaselineLocationOn />
                        </span>
                        Cotonou , Bénin a Godomey
                    </p>
                    <p>
                        <span><IcBaselineMail /></span>
                        johnsonevans686@gmail.com
                    </p>
                    <p>
                        <span><IcBaselineLocalPhone /></span>
                        +229 94-67-73-52 /-229 61-16-00-11
                    </p>

                </div>
                <section>
                    <a href="https://github.com/EvansUchwa"> <MdiGithub /> </a>
                    <a href="mailto:johnsonevans686@gmail.com">
                        <IcOutlineMail />
                    </a>
                    <a href="https://wa.me/22994677352" target='_blank' className=' whatsappColor'>
                        <IcBaselineWhatsapp />
                    </a>
                </section>
            </section>


            <section className="cp-form">
                <form>
                    <div>
                        <label>Nom et prenom</label>
                        <input type="text" placeholder="Votre Nom et Prenom" name="pseudo"
                            onChange={(event) => handleChange(event)} />
                    </div>
                    <div>
                        <label>Mail</label>
                        <input type="text" placeholder="Votre Nom et Prenom" name="mail"
                            onChange={(event) => handleChange(event)} />
                    </div>
                    <div>
                        <label>Objet du contact</label>
                        <label>
                            <input type="radio" placeholder="Votre Nom et Prenom" name="objet_contact"
                                value={"mission freelance"} onChange={(event) => handleChange(event)} />
                            <span>Mission freelance</span>
                        </label>
                        <label>
                            <input type="radio" placeholder="Votre Nom et Prenom" name="objet_contact"
                                value={"collaboration"} onChange={(event) => handleChange(event)} />
                            <span>Collaboration</span>
                        </label>
                        <label>
                            <input type="radio" placeholder="Votre Nom et Prenom" name="objet_contact"
                                value={"...."} onChange={(event) => handleChange(event)} />
                            <span>Autres...</span>
                        </label>
                    </div>
                    <div>
                        <a href={"mailto:" + formValues.mail + "?body= " + getMsgToSent()}>Envoyer</a>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default HomeContact;
