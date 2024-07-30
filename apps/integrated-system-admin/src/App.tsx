import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { BlockList } from "./block/BlockList";
import { BlockCreate } from "./block/BlockCreate";
import { BlockEdit } from "./block/BlockEdit";
import { BlockShow } from "./block/BlockShow";
import { MetricList } from "./metric/MetricList";
import { MetricCreate } from "./metric/MetricCreate";
import { MetricEdit } from "./metric/MetricEdit";
import { MetricShow } from "./metric/MetricShow";
import { DeviceList } from "./device/DeviceList";
import { DeviceCreate } from "./device/DeviceCreate";
import { DeviceEdit } from "./device/DeviceEdit";
import { DeviceShow } from "./device/DeviceShow";
import { AlertList } from "./alert/AlertList";
import { AlertCreate } from "./alert/AlertCreate";
import { AlertEdit } from "./alert/AlertEdit";
import { AlertShow } from "./alert/AlertShow";
import { PolicyList } from "./policy/PolicyList";
import { PolicyCreate } from "./policy/PolicyCreate";
import { PolicyEdit } from "./policy/PolicyEdit";
import { PolicyShow } from "./policy/PolicyShow";
import { NodeList } from "./node/NodeList";
import { NodeCreate } from "./node/NodeCreate";
import { NodeEdit } from "./node/NodeEdit";
import { NodeShow } from "./node/NodeShow";
import { IoTAlertList } from "./ioTAlert/IoTAlertList";
import { IoTAlertCreate } from "./ioTAlert/IoTAlertCreate";
import { IoTAlertEdit } from "./ioTAlert/IoTAlertEdit";
import { IoTAlertShow } from "./ioTAlert/IoTAlertShow";
import { PredictionList } from "./prediction/PredictionList";
import { PredictionCreate } from "./prediction/PredictionCreate";
import { PredictionEdit } from "./prediction/PredictionEdit";
import { PredictionShow } from "./prediction/PredictionShow";
import { TrainingDataList } from "./trainingData/TrainingDataList";
import { TrainingDataCreate } from "./trainingData/TrainingDataCreate";
import { TrainingDataEdit } from "./trainingData/TrainingDataEdit";
import { TrainingDataShow } from "./trainingData/TrainingDataShow";
import { ModelList } from "./model/ModelList";
import { ModelCreate } from "./model/ModelCreate";
import { ModelEdit } from "./model/ModelEdit";
import { ModelShow } from "./model/ModelShow";
import { VulnerabilityList } from "./vulnerability/VulnerabilityList";
import { VulnerabilityCreate } from "./vulnerability/VulnerabilityCreate";
import { VulnerabilityEdit } from "./vulnerability/VulnerabilityEdit";
import { VulnerabilityShow } from "./vulnerability/VulnerabilityShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"IntegratedSystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="Block"
          list={BlockList}
          edit={BlockEdit}
          create={BlockCreate}
          show={BlockShow}
        />
        <Resource
          name="Metric"
          list={MetricList}
          edit={MetricEdit}
          create={MetricCreate}
          show={MetricShow}
        />
        <Resource
          name="Device"
          list={DeviceList}
          edit={DeviceEdit}
          create={DeviceCreate}
          show={DeviceShow}
        />
        <Resource
          name="Alert"
          list={AlertList}
          edit={AlertEdit}
          create={AlertCreate}
          show={AlertShow}
        />
        <Resource
          name="Policy"
          list={PolicyList}
          edit={PolicyEdit}
          create={PolicyCreate}
          show={PolicyShow}
        />
        <Resource
          name="Node"
          list={NodeList}
          edit={NodeEdit}
          create={NodeCreate}
          show={NodeShow}
        />
        <Resource
          name="IoTAlert"
          list={IoTAlertList}
          edit={IoTAlertEdit}
          create={IoTAlertCreate}
          show={IoTAlertShow}
        />
        <Resource
          name="Prediction"
          list={PredictionList}
          edit={PredictionEdit}
          create={PredictionCreate}
          show={PredictionShow}
        />
        <Resource
          name="TrainingData"
          list={TrainingDataList}
          edit={TrainingDataEdit}
          create={TrainingDataCreate}
          show={TrainingDataShow}
        />
        <Resource
          name="Model"
          list={ModelList}
          edit={ModelEdit}
          create={ModelCreate}
          show={ModelShow}
        />
        <Resource
          name="Vulnerability"
          list={VulnerabilityList}
          edit={VulnerabilityEdit}
          create={VulnerabilityCreate}
          show={VulnerabilityShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
