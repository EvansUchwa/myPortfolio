import { IcBaselineTerminal, IcBaselineWorkspaces, IcOutlineCode } from "../../uikits/icons";
import { SectionTitle } from "../../uikits/other";

const HomeSkills = () => {
    const techno = [
        { name: 'Html5', img: 'html.webp' },
        { name: 'Css3', img: 'css.webp' },
        { name: 'Sass/Scss', img: 'sass.webp' },
        { name: 'Javascript', img: 'js.webp' },
        { name: 'React', img: 'react.webp' },
        { name: 'Next Js', img: 'next.webp' },
        { name: 'Node Js', img: 'node.webp' },
        { name: 'Mongo Db', img: 'mongo.webp' },
        { name: 'MySql', img: 'mysql.webp' },
        { name: 'Vercel', img: 'vercel.webp' },
        { name: 'Heroku', img: 'heroku.webp' },
    ]
    return (
        <div className="home-skill">
            <SectionTitle title={'Mes outils'} />
            <div className="skillList">
                {techno.map((item, i) => <article key={'techno nb' + i}>

                    <img src={'/img/technos/' + item.img} alt={item.name + ' pic'} />
                    <b>{item.name} </b>
                </article>)}
            </div>
        </div>
    );
};

export default HomeSkills;
