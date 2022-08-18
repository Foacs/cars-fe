import React from 'react';
import {generatePath, matchPath, Navigate, useLocation} from 'react-router-dom';

import {
  Home, PageNotFound, PageOne, PageThree, PageTwo, SubPageOneId, SubPageOneIdOne, SubPageOneOne, SubPageOneOneOne,
  SubPageOneTwo, SubPageTwoOne, SubPageTwoTwo
} from '../pages';

import {AppIcon} from '../resources/icons';

// region Routes
const routes = [
  {
    name: "Redirect",
    path: "/",
    key: "redirect",
    element: <Navigate to="/home" />,
    isMenuItem: false,
  },
  {
    name: "Home",
    path: "/home",
    key: "home",
    element: <Home />,
    isMenuItem: false,
  },
  {
    name: "One",
    path: "/one",
    key: "one",
    element: <PageOne />,
    icon: <AppIcon />,
    isMenuItem: true,
  },
  {
    name: "One",
    path: "/one/one",
    key: "one_one",
    element: <SubPageOneOne />,
    icon: <AppIcon />,
    parentKey: "one",
    isMenuItem: true,
  },
  {
    name: "One",
    path: "/one/one/one",
    key: "one_one_one",
    element: <SubPageOneOneOne />,
    icon: <AppIcon />,
    parentKey: "one_one",
    isMenuItem: false,
  },
  {
    name: "Two",
    path: "/one/two",
    key: "one_two",
    element: <SubPageOneTwo />,
    icon: <AppIcon />,
    parentKey: "one",
    isMenuItem: true,
  },
  {
    name: ":id",
    path: "/one/:id",
    key: "one_id",
    element: <SubPageOneId />,
    icon: <AppIcon />,
    parentKey: "one",
    isMenuItem: false,
  },
  {
    name: "One",
    path: "/one/:id/one",
    key: "one_id_one",
    element: <SubPageOneIdOne />,
    icon: <AppIcon />,
    parentKey: "one_id",
    isMenuItem: false,
  },
  {
    name: "Two",
    path: "/two",
    key: "two",
    element: <PageTwo />,
    icon: <AppIcon />,
    isMenuItem: true,
  },
  {
    name: "One",
    path: "/two/one",
    key: "two_one",
    element: <SubPageTwoOne />,
    icon: <AppIcon />,
    parentKey: "two",
    isMenuItem: true,
  },
  {
    name: "Two",
    path: "/two/two",
    key: "two_two",
    element: <SubPageTwoTwo />,
    icon: <AppIcon />,
    parentKey: "two",
    isMenuItem: false,
  },
  {
    name: "Three",
    path: "/three",
    key: "three",
    element: <PageThree />,
    icon: <AppIcon />,
    isMenuItem: true,
  },
  {
    name: "Not found",
    path: "*",
    key: "not_found",
    element: <PageNotFound />,
    isMenuItem: false,
  },
];
// endregion

// region Context provider
export const RouterContextProvider = ({ ...otherProps }) => {
  // region Hook to get the current matched route
  const useCurrentRoute = () => {
    // Retrieve the current path
    const { pathname } = useLocation();

    // Function to retrieve the route matching the given path
    const getMatchedRoute = (path) => {
      for (const route of routes) {
        // Try to match the current path
        const match = matchPath({ path: route.path }, path);

        if (match) {
          // Override the name and path with the params, and add the params to the route
          return {
            ...route,
            name: route.name.replace(
              /:\w*/,
              (word) => match.params[word.substring(1)] || word
            ),
            path: generatePath(route.path, match.params),
            params: match.params,
          };
        }
      }
    };

    // Initialize the current matched route
    const [currentRoute, setCurrentRoute] = React.useState(
      getMatchedRoute(pathname)
    );

    // If no route matched, throw an error
    if (!currentRoute) {
      throw new Error("Unknown route");
    }

    // Add a listener on the path to update automatically the current matched route
    React.useEffect(() => {
      const currentRoute = getMatchedRoute(pathname);

      // If no route matched, throw an error
      if (!currentRoute) {
        throw new Error("Unknown route");
      }

      setCurrentRoute(currentRoute);
    }, [pathname]);

    return currentRoute;
  };
  // endregion

  // region Hook to get the current breadcrumbs
  const useBreadcrumbs = () => {
    // Get the current route
    const currentRoute = useCurrentRoute();

    // Get the params
    const params = currentRoute.params;

    // Iterative function to get the parent routes from a given one
    const getParentRoutes = (currentRoute, parentRoutes) => {
      // If the current route has a parent key, look for its parent route
      if (currentRoute.parentKey) {
        // Find the parent route
        let previousOne = routes.find(
          (route) => currentRoute.parentKey === route.key
        );

        // Override the name and path with the params
        previousOne = {
          ...previousOne,
          name: previousOne.name.replace(
            /:\w*/,
            (word) => params[word.substring(1)] || word
          ),
          path: generatePath(previousOne.path, params),
        };

        // Get the found parent's parent route
        return getParentRoutes(previousOne, [previousOne, ...parentRoutes]);
      }

      // Return the found parent routes
      return parentRoutes;
    };

    // Get the parent routes
    const parentRoutes = getParentRoutes(currentRoute, []);

    return {
      currentRoute: currentRoute,
      parentRoutes: parentRoutes,
      routes: [...parentRoutes, currentRoute],
    };
  };
  // endregion

  // region Primary pages routes
  const primaryPagesRoutes = routes.filter(
    (route) => route.isMenuItem && !route.parentKey
  );
  // endregion

  // region Secondary pages routes
  const secondaryPagesRoutes = routes.filter(
    (route) => route.isMenuItem && route.parentKey
  );
  // endregion

  return (
    <RouterContext.Provider
      value={{
        primaryPagesRoutes,
        routes,
        secondaryPagesRoutes,
        useBreadcrumbs,
      }}
    >
      {otherProps.children}
    </RouterContext.Provider>
  );
};
// endregion

export const RouterContext = React.createContext({});
