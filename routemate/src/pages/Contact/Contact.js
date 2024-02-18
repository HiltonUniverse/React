import { useNavigate, Outlet } from "react-router-dom"

export const Contact = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log("----------")
        // this is used inside a component. This behaves like a button unlink Navigate component
        // Navigate component is also used to route but together with conditions.
        return navigate("/")
    }
    return (
        <main>
            <div className="component">Contact</div>
            <Outlet />
            <button onClick={handleSubmit}>Submit Form</button>

        </main>
    )
}
