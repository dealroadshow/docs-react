import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, CardHeader, Theme, withStyles, WithStyles } from "@material-ui/core";
import ReactJson from "react-json-view";
import ReactMarkdown from "react-markdown";
import { ExampleObject, ExamplePairingObject } from "@open-rpc/meta-schema";
import _ from "lodash";
import MarkdownDescription from "../MarkdownDescription/MarkdownDescription";

export type TParamStructure = "either" | "by-name" | "by-position";

interface IProps extends WithStyles<typeof styles> {
  examplePairing?: ExamplePairingObject;
  paramStructure?: TParamStructure;
  methodName?: string;
  uiSchema?: any;
  reactJsonOptions?: any;
}

const styles = (theme: Theme) => ({
  description: {
    color: theme.palette.text.primary,
  },
});

class ExamplePairing extends Component<IProps, {}> {
  public render() {
    const { examplePairing, paramStructure, classes, methodName, uiSchema } = this.props;
    if (_.isUndefined(examplePairing)) {
      return null;
    }
    if (_.isUndefined(methodName)) {
      return null;
    }
    const params = examplePairing.params as ExampleObject[];
    const requestHeaders = examplePairing.requestHeaders as ExampleObject[];
    const result = examplePairing.result as ExampleObject;
    const responseHeaders = examplePairing.responseHeaders as ExampleObject[];

    return (
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <MarkdownDescription
            uiSchema={uiSchema}
            source={examplePairing.description}
            className={classes.description}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardHeader title="Request"></CardHeader>
            <CardContent>
              {(params || requestHeaders) && <ReactJson name={false} src={{
                id: 1,
                jsonrpc: "2.0",
                method: methodName,
                ...!!requestHeaders && { headers: requestHeaders },
                ...!!params && {params},
              }} {...this.props.reactJsonOptions} />}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardHeader title="Result"></CardHeader>
          <Card>
            <CardContent>
              {(result || responseHeaders) && <ReactJson name={false} src={{
                id: 1,
                jsonrpc: "2.0",
                ...!!responseHeaders && { headers: responseHeaders },
                ...!!result && {result: result.value},
              }} {...this.props.reactJsonOptions} />}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ExamplePairing);
