import React, {ReactNode} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {DescriptionText, TitleText} from '../Typography/Typography';
import Box from '../Box/Box';
import renderNode from '../Helpers/renderNode';

interface InfoViewProps extends ViewProps {
    image?: ReactNode;
    title?: string | null | ReactNode;
    description?: string | null | ReactNode;
}

const InfoView: React.FC<InfoViewProps> = React.memo(({image, title, description}: InfoViewProps) => {
  return (
    <Box style={styles.container}>
      {image && (
        <View style={styles.containerImage}>
          {image}
        </View>
      )}
      {title && (
        <View style={styles.containerHeader}>
          {renderNode(TitleText, title, {center: true})}
        </View>
      )}
      {description && renderNode(DescriptionText, description, {center: true, secondary: true})}
    </Box>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImage: {
    display: 'flex',
    alignItems: 'center',
  },
  containerHeader: {
    marginTop: 20,
    marginBottom: 16,
  },
});

export default InfoView;
