import AppNav from "../components/AppNav"
import PageNav from "../components/PageNav";
function AppLayout() {
    return ( <div>
        <PageNav />
        <AppNav />
        <p>APP</p>
    </div> );
}

export default AppLayout;