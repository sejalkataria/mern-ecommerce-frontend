import Navbar from "../features/navbar/Navbar";
import AdminProductDetail from "../features/admin/component/AdminProductDetail";

function AdminProductDetailPage() {
    return (
        <div>
            <Navbar>
                <AdminProductDetail></AdminProductDetail>
            </Navbar>
        </div>
    );
}

export default AdminProductDetailPage;