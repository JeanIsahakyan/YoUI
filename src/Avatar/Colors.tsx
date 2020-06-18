export const defaultColors = [
  '#E57373', '#F06292', '#BA68C8',
  '#9575CD', '#7986CB', '#64B5F6',
  '#4DD0E1', '#4FC3F7', '#4DB6AC',
  '#81C784', '#AED581', '#DCE775',
  '#FFF176', '#FFD54F', '#FFB74D',
  '#FF8A65', '#A1887F', '#E0E0E0',
  '#90A4AE',
];

export const gradientColors = [
  ['#ABDCFF', '#0396FF'],
  ['#FEB692', '#EA5455'],
  ['#CE9FFC', '#7367F0'],
  ['#81C784', '#629a64'],
  ['#90F7EC', '#32CCBC'],
  ['#FFF6B7', '#F6416C'],
  ['#81FBB8', '#28C76F'],
  ['#E2B0FF', '#9F44D3'],
  ['#F97794', '#623AA2'],
  ['#FCCF31', '#F55555'],
  ['#F761A1', '#8C1BAB'],
  ['#5EFCE8', '#736EFE'],
  ['#FAD7A1', '#E96D71'],
  ['#FEC163', '#DE4313'],
  ['#92FFC0', '#002661'],
  ['#F6CEEC', '#D939CD'],
  ['#52E5E7', '#130CB7'],
  ['#79F1A4', '#0E5CAD'],
  ['#FDD819', '#E80505'],
  ['#F05F57', '#360940'],
  ['#2AFADF', '#4C83FF'],
  ['#97ABFF', '#123597'],
  ['#F5CBFF', '#C346C2'],
  ['#FF6FD8', '#3813C2'],
  ['#EE9AE5', '#5961F9'],
  ['#FFD3A5', '#FD6585'],
  ['#FD6585', '#0D25B9'],
  ['#FD6E6A', '#FFC600'],
  ['#65FDF0', '#1D6FA3'],
  ['#6B73FF', '#000DFF'],
  ['#FF7AF5', '#513162'],
  ['#FFE985', '#FA742B'],
  ['#FFAA85', '#B3315F'],
  ['#72EDF2', '#5151E5'],
  ['#FF9D6C', '#BB4E75'],
  ['#F6D242', '#FF52E5'],
  ['#3B2667', '#BC78EC'],
  ['#70F570', '#49C628'],
  ['#3C8CE7', '#00EAFF'],
  ['#FF96F9', '#C32BAC'],
  ['#FAB2FF', '#1904E5'],
];


type KeyType = string | number;

const getId = (key: KeyType, colors: any) => Math.abs(parseInt(key.toString().replace(/\D/g, ''), 10)) % colors.length;

export const getDefaultColor = (key: KeyType): string | undefined => {
  return defaultColors[getId(key, defaultColors)];
};


export const getGradientColor = (key: KeyType): string[] | undefined => {
  return gradientColors[getId(key, gradientColors)];
};
