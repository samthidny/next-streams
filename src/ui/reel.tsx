import { ReelCard } from "./reel-card";
import './reel.css';
import { ITitle } from "../data/ITitle";

type ReelProps = {
    title: string,
    titles: ITitle[]
}

export function Reel(props: ReelProps) {

    const titles = props.titles || [];
    const list = titles.map((title: ITitle) => <div className="reel-card-container" key={title.id}><ReelCard title={title} /></div>);

    const renderTitle = () => {
        return props.title ? <h2>{props.title}</h2> : '';
    }

    return <section className="reel">
        <button>{titles.length}</button>
        {renderTitle()}
        <div className="card-container">
            {list}
        </div>
    </section>
}