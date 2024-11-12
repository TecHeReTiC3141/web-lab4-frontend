import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

export function MainPage() {

    const userData = useAuthUser()
    const isAuthed = useIsAuthenticated()

    console.log(userData, isAuthed)

    return (
        <div>Main page</div>
    )
}