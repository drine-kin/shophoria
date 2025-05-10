import { Link, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const routes = [
    { path: "/", breadcrumb: "Home" },
    { path: "/products", breadcrumb: "Products" },
    { path: "/shop", breadcrumb: "Shop" },
    { path: "/products/:id", breadcrumb: "Details" },
];

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs(routes);
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const categoryOrBrand =
        searchParams.get("subcategory_name") || searchParams.get("brand_name");

    return (
        <nav className="bg-accent">
            <div className="container p-4">
                <div className="flex items-center gap-2">
                    {breadcrumbs.map(({ match, breadcrumb }, index) => {
                        const isLast = match.pathname === location.pathname && !categoryOrBrand;

                        return (
                            <span
                                key={match.pathname}
                                className="flex items-center gap-2"
                            >
                                {!isLast ? (
                                    <Link
                                        to={match.pathname}
                                        className="text-primary hover:text-primary/80"
                                    >
                                        {breadcrumb}
                                    </Link>
                                ) : (
                                    <span className="text-white cursor-default">
                                        {breadcrumb}
                                    </span>
                                )}
                                {index < breadcrumbs.length - 1 ? (
                                    <span className="text-white">/</span>
                                ) : null}
                            </span>
                        );
                    })}

                    {categoryOrBrand && (
                        <>
                            <span className="text-white">/</span>
                            <span className="text-white capitalize">
                                {categoryOrBrand}
                            </span>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
