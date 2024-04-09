import Link from 'next/link';
import { ITitle } from '../data/ITitle';
import './autocomplete-item.css'

type AutoCompleteItemProps = {
    result: ITitle
}

export default function AutoCompleteItem(props: AutoCompleteItemProps) {

    const result = props.result;

    return (
        <div className="auto-complete-item">
            <Link href={`/title/${result.id}`}>{result.title}</Link>
        </div>
    )
}
