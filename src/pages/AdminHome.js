import Navbar from "../features/navbar/Navbar";
import AdminProductList from "../features/admin/component/AdminProductList";

function AdminHome() {
    return (
        <div>
            <Navbar>
                <AdminProductList></AdminProductList>
            </Navbar>
        </div>
    );
}

export default AdminHome;