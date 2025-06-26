import { observer } from 'mobx-react';
import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { appColors } from '../../const/app-colors';
import { useStores } from '../../stores/store-context';

const AppLoadingIndicator = observer(() => {
  const { isLoading } = useStores().uiStore;

  return (
    <Modal animationType="fade" transparent visible={isLoading}>
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" color={appColors.primary} />
      </View>
    </Modal>
  );
});

export default AppLoadingIndicator;
