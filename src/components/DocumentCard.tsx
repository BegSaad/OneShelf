import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { Document } from '../types/document';

type Props = {
  item: Document;
};

const DocumentCard: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text variant="titleMedium">{item.title}</Text>
        <Text variant="bodySmall">{item.sender}</Text>
        <Text variant="bodySmall">{item.summary}</Text>
      </View>

      <View style={styles.right}>
        <Text variant="labelSmall">{item.date}</Text>
        <IconButton
          icon={item.starred ? 'star' : 'star-outline'}
          size={18}
        />
      </View>
    </View>
  );
};

export default DocumentCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#1E293B',
    marginBottom: 12,
  },
  right: {
    alignItems: 'flex-end',
  },
});
