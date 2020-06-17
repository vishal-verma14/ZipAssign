import React, {Component} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Item from '../../component/List/ListItem';
import Loading from '../../component/Spinner/LoadingSpinner';

export default function index() {
  const results = useSelector((state) => state.apiReducer);
  console.log(results.data);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={results.data}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <Item
              title={item.artistName}
              image={item.artworkUrl100}
              cName={item.collectionName}
              price={item.collectionPrice}
              trackName={item.trackName}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
