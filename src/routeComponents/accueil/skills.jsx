import { IcBaselineTerminal, IcBaselineWorkspaces, IcOutlineCode } from "../../uikits/icons";
import { SectionTitle } from "../../uikits/other";

const HomeSkills = () => {
    const techno = [
        { name: 'Html5', img: 'html.png' },
        { name: 'Css3', img: 'css.png' },
        { name: 'Sass/Scss', img: 'sass.png' },
        { name: 'Javascript', img: 'js.png' },
        { name: 'React', img: 'react.png' },
        { name: 'Next Js', img: 'next.png' },
        { name: 'Node Js', img: 'node.png' },
        { name: 'Mongo Db', img: 'mongo.png' },
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
