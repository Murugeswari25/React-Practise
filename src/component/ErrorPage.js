import { useRouteError } from "react-router-dom"

const ErrorPage = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h3>Something went wrong</h3>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default ErrorPage;