import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import InputText from '../../component/SearchTextInput/SearchInput';
import Loading from '../../component/Spinner/LoadingSpinner';
import {useSelector, useDispatch} from 'react-redux';
import SearchButton from '../../component/Button/SearchButton';
import * as API from '../../utils/actions/ActionCreator';
import {isRequired} from '../../utils/common/validaton';
import {BASE_URL} from '../../utils/common/Api';
import {colors} from '../../utils/common/colors';
import constant from '../../utils/common/constant';

// class index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: '',
//       value: '',
//       loading: false,
//       isRequired: {
//         text: '',
//         message: '',
//         isValid: false,
//       },
//     };

//     this.isRequired = isRequired.bind(this);
//   }
// }

function index({navigation}) {
  const [data, setData] = useState('');
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRequired, setisRequired] = useState({
    text: '',
    message: '',
    isValid: false,
  });

  const dispatch = useDispatch();

  renderSearchScreen = () => {
    const api = `${BASE_URL}` + data;
    dispatch(API.actionCreator(api));
    navigation.navigate('Base');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.seachTitle}>{constant.search}</Text>
      <InputText
        onChangeValue={setData}
        // inputType={constant.isRequired}
        // errorStyle={styles.error}
        // error={isRequired.message}
      />
      <TouchableOpacity onPress={() => renderSearchScreen()}>
        <SearchButton title={constant.Submit} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  seachTitle: {
    justifyContent: 'center',
    fontSize: 30,
    alignSelf: 'center',
    color: colors.searchTitle,
  },
  error: {
    alignSelf: 'flex-end',
    marginTop: 2,
    color: colors.errorColor,
  },
  spinnerTextStyle: {
    color: '#000',
  },
});

export default index;
