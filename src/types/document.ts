


export type Document={
    id:string;
    title:string;
    category:'Invoice' | 'Contract' | 'Receipt' | 'Letter' | 'Report';
    summary:string;
    date:string;
    starred?:boolean;
};