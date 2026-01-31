import { Document } from '../types/document';

export const documents: Document[] = [
  {
    id: '1',
    title: 'Electricity Bill - Jan',
    sender: 'Power Corp',
    category: 'Invoice',
    summary: 'Monthly electricity bill',
    date: '2 days ago',
    starred: true,
  },
  {
    id: '2',
    title: 'Office Lease Agreement',
    sender: 'ABC Properties',
    category: 'Contract',
    summary: 'Lease contract for office space',
    date: '5 days ago',
  },
];
