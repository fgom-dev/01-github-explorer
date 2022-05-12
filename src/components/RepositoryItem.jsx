export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'deafult'}</strong>
            <p>{props.repository.description}</p>

            <a href={props.repository.url}>
                Acessar repositório
            </a>
        </li>
    );
}