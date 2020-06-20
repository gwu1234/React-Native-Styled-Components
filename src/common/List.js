import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Test 1',
    content: 'content 1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Test 2',
    content: 'content 2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Test 3',
    content: 'content 3',
  },
];

const Item = ({ item,itemContainer, itemTitle, itemContent }) => {
  return (
    <View style={itemContainer}>
      <Text style={itemTitle}>{item.title}</Text>
      <Text style={itemContent}>{item.content}</Text>
    </View>
  );
}

const List = (props) => {
  const listContainer = props.listContainer? props.listContainer: styles.listContainer;
  const itemContainer = props.itemContainer? props.itemContainer: styles.itemContainer;
  const itemTitle = props.itemTitle? props.itemTitle: styles.itemTitle;
  const itemContent = props.itemContent? props.itemContent: styles.itemContent;
  const data = props.data? props.data: DATA;

  return (
    <View style={listContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} itemContainer={itemContainer} itemTitle ={itemTitle} itemContent={itemContent}/>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
export {List}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "space-around",
    margin: 10
  },
  itemTitle: {
    fontSize: 25,
    margin: 10, 
    backgroundColor: 'lightgreen',
  },
  itemContent: {
    margin: 10,
    fontSize: 20,
    backgroundColor: 'lightgray',
  },
});
