import React from "react";
import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction as MuiBottomNavigationAction,
  Paper,
  styled,
} from "@mui/material";

import { AppIcon } from "../resources/icons";

const BottomNavigationAction = styled(MuiBottomNavigationAction)(
  ({ theme }) => ({
    "&.Mui-selected": {
      color: theme.palette.primary.light,
    },
  })
);

const BottomNavigation = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <MuiBottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {[...Array(4).keys()].map((_, index) => (
          <BottomNavigationAction
            key={`key_${index}`}
            label={`Boutton ${index + 1}`}
            icon={<AppIcon />}
          />
        ))}
      </MuiBottomNavigation>
    </Paper>
  );
};

export default BottomNavigation;
