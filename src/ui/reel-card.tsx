import './reel-card.css';
import { ITitle } from '../data/ITitle';
import Link from 'next/link';

type ReelCardProps = {
  title: ITitle
}

export function ReelCard(props: ReelCardProps) {

  const imageURL = `https://image.tmdb.org/t/p/w185/${props.title.poster_path}`;

  return <div className="reel-card">
    <div className="image-container">
      <Link href={`/title/${props.title.id}`}><img src={imageURL}></img></Link>
    </div>
    <h3 className="heading">{props.title.title}</h3>
  </div>
}