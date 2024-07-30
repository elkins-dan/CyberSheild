import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MachineLearningModelList } from "./machineLearningModel/MachineLearningModelList";
import { MachineLearningModelCreate } from "./machineLearningModel/MachineLearningModelCreate";
import { MachineLearningModelEdit } from "./machineLearningModel/MachineLearningModelEdit";
import { MachineLearningModelShow } from "./machineLearningModel/MachineLearningModelShow";
import { BlockchainDatabaseList } from "./blockchainDatabase/BlockchainDatabaseList";
import { BlockchainDatabaseCreate } from "./blockchainDatabase/BlockchainDatabaseCreate";
import { BlockchainDatabaseEdit } from "./blockchainDatabase/BlockchainDatabaseEdit";
import { BlockchainDatabaseShow } from "./blockchainDatabase/BlockchainDatabaseShow";
import { CybersecurityEventList } from "./cybersecurityEvent/CybersecurityEventList";
import { CybersecurityEventCreate } from "./cybersecurityEvent/CybersecurityEventCreate";
import { CybersecurityEventEdit } from "./cybersecurityEvent/CybersecurityEventEdit";
import { CybersecurityEventShow } from "./cybersecurityEvent/CybersecurityEventShow";
import { IoTDeviceList } from "./ioTDevice/IoTDeviceList";
import { IoTDeviceCreate } from "./ioTDevice/IoTDeviceCreate";
import { IoTDeviceEdit } from "./ioTDevice/IoTDeviceEdit";
import { IoTDeviceShow } from "./ioTDevice/IoTDeviceShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
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
        title={"CyberShield Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MachineLearningModel"
          list={MachineLearningModelList}
          edit={MachineLearningModelEdit}
          create={MachineLearningModelCreate}
          show={MachineLearningModelShow}
        />
        <Resource
          name="BlockchainDatabase"
          list={BlockchainDatabaseList}
          edit={BlockchainDatabaseEdit}
          create={BlockchainDatabaseCreate}
          show={BlockchainDatabaseShow}
        />
        <Resource
          name="CybersecurityEvent"
          list={CybersecurityEventList}
          edit={CybersecurityEventEdit}
          create={CybersecurityEventCreate}
          show={CybersecurityEventShow}
        />
        <Resource
          name="IoTDevice"
          list={IoTDeviceList}
          edit={IoTDeviceEdit}
          create={IoTDeviceCreate}
          show={IoTDeviceShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
