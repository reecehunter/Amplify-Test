import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Button, Heading, Image, View, Card } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";

function App({ signOut }) {
  const [data, setData] = useState(null);

  async function fetchData() {
    API.get("testAPI", "/test", {})
      .then(res => setData(res.success))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View className="App">
      <Card>
        <Heading level={1}>{data || "loading..."}</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);