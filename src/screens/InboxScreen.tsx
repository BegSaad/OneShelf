import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { TextInput, Chip } from 'react-native-paper';
import DocumentCard from '../components/DocumentCard';
import { documents } from '../data/documents';

const InboxScreen: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredDocs = documents.filter(doc =>
    doc.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search documents..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      <View style={styles.chips}>
        <Chip selected>All</Chip>
        <Chip>Invoices</Chip>
        <Chip>Contracts</Chip>
        <Chip>Reports</Chip>
      </View>

      <FlatList
        data={filteredDocs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <DocumentCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#0F172A',
  },
  search: {
    marginBottom: 12,
  },
  chips: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
});
