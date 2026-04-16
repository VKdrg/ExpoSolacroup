import { ChapterItem } from "../ChapterItem/ChapterItem";

export function ChapterList(chapters) {
    return (
        <section>
            <div>{ chapters.map(c => <ChapterItem key={c.number} chapter={c} />)}</div>
        </section>
    )
}