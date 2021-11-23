import React from "react";
import { Admin, Resource } from "react-admin";
import UserList from "./components/Posts/UserLlist";
import { UserEdit } from "./components/Posts/UserEdit";
import buildGraphQLProvider from "ra-data-graphql-simple";
import UserCreate from "./components/Posts/UserCreate";
import MoviesList from "./components/Movies/MoviesList";

function App() {
  const [dataProvider, setDataProvider] = React.useState(null);

  React.useEffect(() => {
    buildGraphQLProvider({
      clientOptions: { uri: "http://localhost:3000/graphql" },
    }).then((graphQlDataProvider) =>
      setDataProvider(() => graphQlDataProvider)
    );
  }, []);

  if (!dataProvider) {
    return <div>Идет загрузка</div>;
  }

  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="User"
        options={{ label: "users" }}
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
      <Resource
          name="Movie"
          options={{ label: "movie" }}
          list={MoviesList}
      />
    </Admin>
  );
}

export default App;
