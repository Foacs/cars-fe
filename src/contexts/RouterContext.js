import React from "react";
import { generatePath, matchPath, Navigate, useLocation } from "react-router-dom";

import {
  AboutPage,
  AdvancedSearchPage,
  CarPage,
  CarsFavoritesPage,
  CarsInProgressPage,
  CarsOverviewPage,
  DashboardPage,
  InterventionsInProgressPage,
  InterventionsOverviewPage,
  InterventionsPlanningPage,
  NotFoundPage,
  OrdersInProgressPage,
  OrdersOverviewPage,
  SettingsPage,
  WorkshopConsumablesPage,
  WorkshopOverviewPage,
  WorkshopPartsPage,
  WorkshopToolsPage,
} from "../pages";

import {
  AboutPageIcon,
  AdvancedSearchPageIcon,
  CarsFavoritesPageIcon,
  CarsInProgressPageIcon,
  CarsOverviewPageIcon,
  DashboardPageIcon,
  InterventionsInProgressPageIcon,
  InterventionsOverviewPageIcon,
  InterventionsPlanningPageIcon,
  OrdersInProgressPageIcon,
  OrdersOverviewPageIcon,
  SettingsPageIcon,
  WorkshopConsumablesPageIcon,
  WorkshopOverviewPageIcon,
  WorkshopPartsPageIcon,
  WorkshopToolsPageIcon,
} from "../resources/icons";

// region Routes
const routes = [
  // region Redirection from '/'
  {
    key: "redirect",
    path: "/",
    name: "Redirection",
    element: <Navigate to="/dashboard"/>,
  },
  // endregion
  // region Dashboard
  {
    key: "dashboard",
    path: "/dashboard",
    name: "Tableau de bord",
    element: <DashboardPage/>,
    menuProperties: {
      groupKey: "pre",
      icon: <DashboardPageIcon/>,
    },
    notFoundPageMessage: "À la maison",
  },
  // endregion
  // region Cars
  {
    key: "cars_overview",
    path: "/cars",
    name: "Voitures",
    element: <CarsOverviewPage/>,
    menuProperties: {
      groupKey: "cars",
      name: "Vue d'ensemble",
      icon: <CarsOverviewPageIcon/>,
    },
    notFoundPageMessage: "Au garage",
  },
  {
    key: "cars_in_progress",
    parentKey: "cars_overview",
    path: "/cars/in_progress",
    name: "En réparation",
    element: <CarsInProgressPage/>,
    menuProperties: {
      groupKey: "cars",
      icon: <CarsInProgressPageIcon/>,
    },
  },
  {
    key: "cars_favorites",
    parentKey: "cars_overview",
    path: "/cars/favorites",
    name: "Favorites",
    element: <CarsFavoritesPage/>,
    menuProperties: {
      groupKey: "cars",
      icon: <CarsFavoritesPageIcon/>,
    },
  },
  {
    key: "cars_id",
    parentKey: "cars_overview",
    path: "/cars/:id",
    name: ":id",
    element: <CarPage/>,
  },
  // endregion
  // region Interventions
  {
    key: "interventions_overview",
    path: "/interventions",
    name: "Interventions",
    element: <InterventionsOverviewPage/>,
    menuProperties: {
      groupKey: "interventions",
      name: "Vue d'ensemble",
      icon: <InterventionsOverviewPageIcon/>,
    },
    notFoundPageMessage: "Au bureau",
  },
  {
    key: "interventions_in_progress",
    parentKey: "interventions_overview",
    path: "/interventions/in_progress",
    name: "En cours",
    element: <InterventionsInProgressPage/>,
    menuProperties: {
      groupKey: "interventions",
      icon: <InterventionsInProgressPageIcon/>,
    },
  },
  {
    key: "interventions_planning",
    parentKey: "interventions_overview",
    path: "/interventions/planning",
    name: "Planning",
    element: <InterventionsPlanningPage/>,
    menuProperties: {
      groupKey: "interventions",
      icon: <InterventionsPlanningPageIcon/>,
    },
  },
  // endregion
  // region Orders
  {
    key: "orders_overview",
    path: "/orders",
    name: "Commandes",
    element: <OrdersOverviewPage/>,
    menuProperties: {
      groupKey: "orders",
      name: "Vue d'ensemble",
      icon: <OrdersOverviewPageIcon/>,
    },
    notFoundPageMessage: "Au dépôt",
  },
  {
    key: "orders_in_progress",
    parentKey: "orders_overview",
    path: "/orders/in_progress",
    name: "En attente",
    element: <OrdersInProgressPage/>,
    menuProperties: {
      groupKey: "orders",
      icon: <OrdersInProgressPageIcon/>,
    },
  },
  // endregion
  // region Workshop
  {
    key: "workshop_overview",
    path: "/workshop",
    name: "Atelier",
    element: <WorkshopOverviewPage/>,
    menuProperties: {
      groupKey: "workshop",
      name: "Vue d'ensemble",
      icon: <WorkshopOverviewPageIcon/>,
    },
    notFoundPageMessage: "À l'atelier",
  },
  {
    key: "workshop_tools",
    parentKey: "workshop_overview",
    path: "/workshop/tools",
    name: "Outillage",
    element: <WorkshopToolsPage/>,
    menuProperties: {
      groupKey: "workshop",
      icon: <WorkshopToolsPageIcon/>,
    },
  },
  {
    key: "workshop_parts",
    parentKey: "workshop_overview",
    path: "/workshop/parts",
    name: "Pièces",
    element: <WorkshopPartsPage/>,
    menuProperties: {
      groupKey: "workshop",
      icon: <WorkshopPartsPageIcon/>,
    },
  },
  {
    key: "workshop_consumables",
    parentKey: "workshop_overview",
    path: "/workshop/consumables",
    name: "Consommables",
    element: <WorkshopConsumablesPage/>,
    menuProperties: {
      groupKey: "workshop",
      icon: <WorkshopConsumablesPageIcon/>,
    },
  },
  // endregion
  // region Advanced search
  {
    key: "advanced_search",
    path: "/search",
    name: "Recherche",
    element: <AdvancedSearchPage/>,
    menuProperties: {
      groupKey: "post",
      icon: <AdvancedSearchPageIcon/>,
    },
    notFoundPageMessage: "Je sais pas...",
  },
  // endregion
  // region Settings
  {
    key: "settings",
    path: "/settings",
    name: "Paramètres",
    element: <SettingsPage/>,
    menuProperties: {
      groupKey: "post",
      icon: <SettingsPageIcon/>,
    },
  },
  // endregion
  // region About
  {
    key: "about",
    path: "/about",
    name: "À propos",
    element: <AboutPage/>,
    menuProperties: {
      groupKey: "post",
      icon: <AboutPageIcon/>,
    },
  },
  // endregion
  // region Page not found
  {
    key: "not_found",
    path: "*",
    name: "Page introuvable",
    element: <NotFoundPage/>,
  },
  // endregion
];
// endregion

// region Context provider
export const RouterContextProvider = ({ ...otherProps }) => {
  // region Function to replace the params in the page name by their values
  const generateName = (name, params) => name.replace(/:\w*/, word => params[word.substring(1)] || word);
  // endregion

  // region Function to retrieve the route matching the given path
  const getMatchedRoute = (path) => {
    for (const route of routes) {
      // Try to match the current path
      const match = matchPath({ path: route.path }, path);

      if (match) {
        // Override the name and path with the params, and add the params to the route
        return {
          ...route,
          name: generateName(route.name, match.params),
          path: generatePath(route.path, match.params),
          params: match.params,
        };
      }
    }
  };
  // endregion

  // region Hook to get the current matched route
  const useCurrentRoute = () => {
    // Retrieve the current path
    const { pathname } = useLocation();

    // Initialize the current matched route
    const [ currentRoute, setCurrentRoute ] = React.useState(
      getMatchedRoute(pathname),
    );

    // If no route matched, throw an error (should not occur)
    if (!currentRoute) {
      throw new Error("Unknown route");
    }

    // Add a listener on the path to update automatically the current matched route
    React.useEffect(() => {
      const currentRoute = getMatchedRoute(pathname);

      // If no route matched, throw an error (should not occur)
      if (!currentRoute) {
        throw new Error("Unknown route");
      }

      setCurrentRoute(currentRoute);
    }, [ pathname ]);

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
      // If the current route doesn't have a parent key, return the found parent routes
      if (!currentRoute.parentKey) {
        return parentRoutes;
      }

      // Find the parent route
      let parentRoute = routes.find(route => currentRoute.parentKey === route.key);

      // Override the name and path with the params
      parentRoute = {
        ...parentRoute,
        name: generateName(parentRoute.name, params),
        path: generatePath(parentRoute.path, params),
      };

      // Get the found parent's parent route
      return getParentRoutes(parentRoute, [ parentRoute, ...parentRoutes ]);
    };

    // Get the parent routes
    const parentRoutes = getParentRoutes(currentRoute, []);

    return {
      currentRoute: currentRoute,
      parentRoutes: parentRoutes,
      routes: [ ...parentRoutes, currentRoute ],
    };
  };
  // endregion

  return (
    <RouterContext.Provider
      value={{
        routes,
        useBreadcrumbs,
      }}
    >
      {otherProps.children}
    </RouterContext.Provider>
  );
};
// endregion

export const RouterContext = React.createContext({});
