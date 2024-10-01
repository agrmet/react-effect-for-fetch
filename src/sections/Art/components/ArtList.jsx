import ArtListItem from "./ArtListItem"

export default function ArtList({ arts }) {
    console.log(arts);
    

    return (
        <ul className="art-list">
            {arts.map((artListItem, i) => (
                <ArtListItem artListItem={artListItem} key={i} />
            ))}
        </ul>
    )
}
