import { useEffect, useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import Loading from "../components/loadig";
import axios from "axios";

// https://jsonplaceholder.typicode.com/posts

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState<
    { id: number; title: string; body: string }[]
  >([]);

  useEffect(() => {
    async function fetchPosts() {
      // const response = await fetch(
      //   "https://jsonplaceholder.typicode.com/posts",
      // );
      // const data = await response.json();
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, []);
  
  if (loading) {
    return <Loading message="sem data ;-;"/>;
  }

  const filteredPosts = posts?.filter((post) => post.title.includes(search));


  return (
    // <ScrollView>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
      style={{
        padding: 8,
        margin: 16,
      }}
        placeholder="Buscar posts..."
        value={search}
        onChangeText={setSearch}
      />
      {/* {posts.map((post) => (
        <View key={post.id} style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold" }}>{post.title}</Text>
          <Text>{post.body}</Text>
        </View>
      ))} */}

      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
    // </ScrollView>
  );
}
