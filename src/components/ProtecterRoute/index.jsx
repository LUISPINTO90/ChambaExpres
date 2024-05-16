import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";
import PropTypes from "prop-types";

export default function ProtecterRoute({ children }) {
    const { user } = useAuthStore();
    if (!user) return <Navigate to="/sign-in" />;

    return <>{children}</>;
}

ProtecterRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
