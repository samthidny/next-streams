import { TMDB } from '@/apis/TMDB';
import './title.css';
import TitleDetails from '@/ui/title-details';

export default async function Page({ params }: { params: { titleID: string } }) {

  const details = await TMDB.getDetails(params.titleID);

  return <div>
    <h1>TitleID: {params.titleID}</h1>
    <TitleDetails details={details} />

  </div>
}