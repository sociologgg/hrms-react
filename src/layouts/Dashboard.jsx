import React from "react";
import Categories from "./Categories";

import { Grid, GridColumn, Image } from "semantic-ui-react";
import { Route } from "react-router";
import JobAdtList from "../pages/JobAdtList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <Route exact path="/jobadts" component={JobAdtList} />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
