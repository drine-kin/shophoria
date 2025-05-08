import { Link } from "react-router-dom";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
    const breadcrumbs = useReactRouterBreadcrumbs();
    return (
        <div className="bg-secondary">
            <div className="container p-4">
                <div className="flex gap-4">
                    {breadcrumbs.map(({ breadcrumb }) => {
                        console.log("hello ", breadcrumb);
                        return (
                            <Link to={breadcrumb.key} key={breadcrumb.key}>
                                {breadcrumb}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Breadcrumbs;
