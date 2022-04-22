import {shallow} from 'enzyme';
import {AddCategory} from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {

  const setCategories = () => {};

  test('Debe de mostrarse correctamente', () => {
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    expect(wrapper).toMatchSnapshot();
  });

});