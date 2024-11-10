import { ErrorResponse, Link, useRouteError } from "react-router-dom";

export function Error() {
    const error = useRouteError() as ErrorResponse
    // TODO: add proper styles
    return (
        <div>
            <h3>Something bad happened: {error.statusText}</h3>
            <Link to="/">Go home</Link>
        </div>
    );
}