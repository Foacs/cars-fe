import React from "react";
import { generatePath, matchPath, Navigate, useLocation } from "react-router-dom";

import {
  AboutPage,
  BillsManagementPage,
  BillsOverviewPage,
  BillsSearchPage,
  CarPage,
  CarsFavoritesPage,
  CarsOverviewPage,
  CarsSearchPage,
  DashboardPage,
  InterventionsFollowingPage,
  InterventionsOverviewPage,
  InterventionsSearchPage,
  NotFoundPage,
  PlanningMonthPage,
  PlanningOverviewPage,
  PlanningWeekPage,
  PlanningYearPage,
  SettingsPage,
  WorkshopManagementPage,
  WorkshopOverviewPage,
  WorkshopSearchPage,
} from "../pages";

import {
  AboutIcon,
  BillIcon,
  CarIcon,
  DashboardIcon,
  EditIcon,
  FavoriteIcon,
  InterventionIcon,
  MonthlyPlanningIcon,
  NextInterventionsIcon,
  PlanningIcon,
  SearchIcon,
  SettingsIcon,
  WeeklyPlanningIcon,
  WorkshopIcon,
  YearlyPlanningIcon,
} from "../resources/icons";

// region Routes
const routes = [
  // region Redirection from '/'
  {
    name: "Redirection",
    path: "/",
    element: <Navigate to="/dashboard"/>,
    key: "redirect",
  },
  // endregion
  // region Dashboard
  {
    name: "Tableau de bord",
    path: "/dashboard",
    element: <DashboardPage/>,
    key: "dashboard",
    menuProperties: {
      name: "Tableau de bord",
      icon: <DashboardIcon/>,
      groupKey: "pre",
    },
  },
  // endregion
  // region Cars
  {
    name: "Voitures",
    path: "/cars",
    element: <CarsOverviewPage/>,
    key: "cars_overview",
    menuProperties: {
      name: "Vue d'ensemble",
      icon: <CarIcon/>,
      groupKey: "cars",
    },
  },
  {
    name: "Favorites",
    path: "/cars/favorites",
    element: <CarsFavoritesPage/>,
    key: "cars_favorites",
    parentKey: "cars_overview",
    menuProperties: {
      name: "Favorites",
      icon: <FavoriteIcon/>,
      groupKey: "cars",
    },
  },
  {
    name: "Recherche",
    path: "/cars/search",
    element: <CarsSearchPage/>,
    key: "cars_search",
    parentKey: "cars_overview",
    menuProperties: {
      name: "Recherche",
      icon: <SearchIcon/>,
      groupKey: "cars",
    },
  },
  {
    name: ":id",
    element: <CarPage/>,
    path: "/cars/:id",
    key: "cars_id",
    parentKey: "cars_overview",
  },
  // endregion
  // region Interventions
  {
    name: "Interventions",
    path: "/interventions",
    element: <InterventionsOverviewPage/>,
    key: "interventions_overview",
    menuProperties: {
      name: "Vue d'ensemble",
      icon: <InterventionIcon/>,
      groupKey: "interventions",
    },
  },
  {
    name: "Suivi",
    path: "/interventions/following",
    element: <InterventionsFollowingPage/>,
    key: "interventions_following",
    parentKey: "interventions_overview",
    menuProperties: {
      name: "Suivi",
      icon: <NextInterventionsIcon/>,
      groupKey: "interventions",
    },
  },
  {
    name: "Recherche",
    path: "/interventions/search",
    element: <InterventionsSearchPage/>,
    key: "interventions_search",
    parentKey: "interventions_overview",
    menuProperties: {
      name: "Recherche",
      icon: <SearchIcon/>,
      groupKey: "interventions",
    },
  },
  // endregion
  // region Bills
  {
    name: "Factures",
    path: "/bills",
    element: <BillsOverviewPage/>,
    key: "bills_overview",
    menuProperties: {
      name: "Vue d'ensemble",
      icon: <BillIcon/>,
      groupKey: "bills",
    },
  },
  {
    name: "Gestion",
    path: "/bills/management",
    element: <BillsManagementPage/>,
    key: "bills_management",
    parentKey: "bills_overview",
    menuProperties: {
      name: "Gestion",
      icon: <EditIcon/>,
      groupKey: "bills",
    },
  },
  {
    name: "Recherche",
    path: "/bills/search",
    element: <BillsSearchPage/>,
    key: "bills_search",
    parentKey: "bills_overview",
    menuProperties: {
      name: "Recherche",
      icon: <SearchIcon/>,
      groupKey: "bills",
    },
  },
  // endregion
  // region Workshop
  {
    name: "Atelier",
    path: "/workshop",
    element: <WorkshopOverviewPage/>,
    key: "workshop_overview",
    menuProperties: {
      name: "Vue d'ensemble",
      icon: <WorkshopIcon/>,
      groupKey: "workshop",
    },
  },
  {
    name: "Gestion",
    path: "/workshop/management",
    element: <WorkshopManagementPage/>,
    key: "workshop_management",
    parentKey: "workshop_overview",
    menuProperties: {
      name: "Gestion",
      icon: <EditIcon/>,
      groupKey: "workshop",
    },
  },
  {
    name: "Recherche",
    path: "/workshop/search",
    element: <WorkshopSearchPage/>,
    key: "workshop_search",
    parentKey: "workshop_overview",
    menuProperties: {
      name: "Recherche",
      icon: <SearchIcon/>,
      groupKey: "workshop",
    },
  },
  // endregion
  // region Planning
  {
    name: "Planning",
    path: "/planning",
    element: <PlanningOverviewPage/>,
    key: "planning_overview",
    menuProperties: {
      name: "Vue d'ensemble",
      icon: <PlanningIcon/>,
      groupKey: "planning",
    },
  },
  {
    name: "Semaine",
    path: "/planning/week",
    element: <PlanningWeekPage/>,
    key: "planning_week",
    parentKey: "planning_overview",
    menuProperties: {
      name: "Semaine",
      icon: <WeeklyPlanningIcon/>,
      groupKey: "planning",
    },
  },
  {
    name: "Mois",
    path: "/planning/month",
    element: <PlanningMonthPage/>,
    key: "planning_month",
    parentKey: "planning_overview",
    menuProperties: {
      name: "Mois",
      icon: <MonthlyPlanningIcon/>,
      groupKey: "planning",
    },
  },
  {
    name: "Année",
    path: "/planning/year",
    element: <PlanningYearPage/>,
    key: "planning_year",
    parentKey: "planning_overview",
    menuProperties: {
      name: "Année",
      icon: <YearlyPlanningIcon/>,
      groupKey: "planning",
    },
  },
  // endregion
  // region Settings
  {
    name: "Paramètres",
    path: "/settings",
    element: <SettingsPage/>,
    key: "settings",
    menuProperties: {
      name: "Paramètres",
      icon: <SettingsIcon/>,
      groupKey: "post",
    },
  },
  // endregion
  // region About
  {
    name: "À propos",
    path: "/about",
    element: <AboutPage/>,
    key: "about",
    menuProperties: {
      name: "À propos",
      icon: <AboutIcon/>,
      groupKey: "post",
    },
  },
  // endregion
  // region Page not found
  {
    name: "Page introuvable",
    path: "*",
    key: "not_found",
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
