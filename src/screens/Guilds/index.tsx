import React from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './styles';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

type Props = {
  handleGuildsSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildsSelected }: Props) {
  const Guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Os cara da computação',
      icon: 'https://github.com/gabrielvbauer.png',
      owner: true
    },
    {
      id: '3',
      name: 'Valozinho',
      icon: 'image.png',
      owner: false
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={Guilds}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Guild 
            data={item}
            onPress={() => handleGuildsSelected(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />
    </View>
  )
}