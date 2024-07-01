export default function BooksList({ booksList })
{
    return (
        <ol>
            {
                booksList.map(b => (
                    <li key={b.id}><Link to={b.id}>{b.title} : {b.pages}</Link></li>
                ))
            }
        </ol>
    );
}