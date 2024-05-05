import { ActionPanel, List, Action } from "@raycast/api";
import { useState, useEffect } from "react";
const items = ["Augustiner Helles", "Camden Hells", "Leffe Blonde", "Sierra Nevada IPA"];

import { GetDBInstance } from "./lib/storage/db-instance.ts";
// import { todos } from "../src/schema/dashboard-todo.ts";
import { todos } from "../src/schema/dashboard-todo";

export const getTodoFromDB = async () => {
  const db = await GetDBInstance();
  const data = await db.select().from(todos);
  return data;
};

const addTodo = async (id: number, title: string) => {
  const db = await GetDBInstance();
  await db.insert(todos).values({
    id: id,
    title: title,
  });
};

function handleCreateTodo() {
  console.log("created");
  // addTodo(Math.random(), "titleHereFromApp");
  console.log("logging");
  console.log(getTodoFromDB());
}

export default function Command() {
  const [searchText, setSearchText] = useState("");
  const [filteredList, filterList] = useState(items);

  useEffect(() => {
    filterList(items.filter((item) => item.includes(searchText)));
  }, [searchText]);
  return (
    <List
      filtering={false}
      onSearchTextChange={setSearchText}
      navigationTitle="Search Beers"
      searchBarPlaceholder="Search your favorite beer"
    >
      {filteredList.map((item) => (
        <List.Item
          key={item}
          title={item}
          actions={
            <ActionPanel>
              <Action title="Select" onAction={() => console.log(`${item} selected`)} />
            </ActionPanel>
          }
        />
      ))}
      <List.Item
        key={1}
        title={"Create todo in db"}
        actions={
          <ActionPanel>
            <Action title="Select to create todo" onAction={() => handleCreateTodo()} />
          </ActionPanel>
        }
      />
    </List>
  );
}
