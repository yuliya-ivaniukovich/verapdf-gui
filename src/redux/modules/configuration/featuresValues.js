import { handleAction } from 'redux-actions'; 

const initialState = [
    'Actions',
    'Graphic States',
    'Information Dictionary',
    'Output Intents',
    'Shadings',
    'Annotations',
    'Fonts',
    'Interactive Form Fields',
    'Pages',
    'Signatures',
    'Color Spaces',
    'Forms',
    'Low Level Info',
    'patterns',
    'Document Security',
    'ICC Profiles',
    'Metadata',
    'Postscript',
    'Embedded Files',
    'Images',
    'Outlines',
    'Properties Dictionaries' 
];

export default handleAction({}, undefined, initialState)